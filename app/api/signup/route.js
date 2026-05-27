import { OAuth2Client } from "google-auth-library";
import { google } from "googleapis";

import {
  CONSENT_MAX_AGE_MS,
  CONSENT_METHOD,
  CONSENT_SOURCE,
  PRIVACY_POLICY_VERSION,
  getConsentLocale,
  getProjectUpdatesConsentText,
} from "../../../lib/signup-consent";

function getRequiredEnv(name) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function getGoogleClientId() {
  return process.env.GOOGLE_CLIENT_ID || getRequiredEnv("NEXT_PUBLIC_GOOGLE_CLIENT_ID");
}

function isRecentConsentTimestamp(value) {
  if (typeof value !== "string") {
    return false;
  }

  const timestamp = Date.parse(value);

  if (!Number.isFinite(timestamp)) {
    return false;
  }

  const now = Date.now();
  const oneMinuteFromNow = now + 60 * 1000;

  return timestamp <= oneMinuteFromNow && now - timestamp <= CONSENT_MAX_AGE_MS;
}

export async function POST(req) {
  try {
    const {
      credential,
      projectUpdatesConsent,
      consentLocale: rawConsentLocale,
      consentText,
      consentTimestamp,
    } = await req.json();

    if (!credential) {
      return Response.json(
        { error: "Missing Google credential" },
        { status: 400 }
      );
    }

    if (projectUpdatesConsent !== true) {
      return Response.json(
        { error: "Consent is required before joining the waitlist." },
        { status: 400 }
      );
    }

    if (!isRecentConsentTimestamp(consentTimestamp)) {
      return Response.json(
        { error: "Consent confirmation expired. Please confirm again." },
        { status: 400 }
      );
    }

    const consentLocale = getConsentLocale(rawConsentLocale);
    const expectedConsentText = getProjectUpdatesConsentText(consentLocale);

    if (typeof consentText === "string" && consentText !== expectedConsentText) {
      return Response.json(
        { error: "Consent text does not match the current consent version." },
        { status: 400 }
      );
    }

    const googleClientId = getGoogleClientId();
    const oauthClient = new OAuth2Client(googleClientId);
    const ticket = await oauthClient.verifyIdToken({
      idToken: credential,
      audience: googleClientId,
    });

    const payload = ticket.getPayload();

    if (!payload || !payload.email) {
      return Response.json(
        { error: "Invalid Google account" },
        { status: 401 }
      );
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: getRequiredEnv("GOOGLE_SERVICE_ACCOUNT_EMAIL"),
        private_key: getRequiredEnv("GOOGLE_PRIVATE_KEY").replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const tabName = process.env.GOOGLE_SHEET_TAB || "Signups";
    const signupTimestamp = new Date().toISOString();

    await sheets.spreadsheets.values.append({
      spreadsheetId: getRequiredEnv("GOOGLE_SHEET_ID"),
      range: `${tabName}!A:K`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            signupTimestamp,
            payload.sub,
            payload.email,
            payload.name || "",
            payload.picture || "",
            "TRUE",
            consentTimestamp,
            expectedConsentText,
            PRIVACY_POLICY_VERSION,
            CONSENT_SOURCE,
            CONSENT_METHOD,
          ],
        ],
      },
    });

    return Response.json({
      ok: true,
      email: payload.email,
      name: payload.name || "",
    });
  } catch (error) {
    console.error("Signup error:", error);

    return Response.json(
      { error: "Signup failed" },
      { status: 500 }
    );
  }
}
