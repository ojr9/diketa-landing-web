import { OAuth2Client } from "google-auth-library";
import { google } from "googleapis";

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

export async function POST(req) {
  try {
    const { credential } = await req.json();
    const googleClientId = getGoogleClientId();

    if (!credential) {
      return Response.json(
        { error: "Missing Google credential" },
        { status: 400 }
      );
    }

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

    await sheets.spreadsheets.values.append({
      spreadsheetId: getRequiredEnv("GOOGLE_SHEET_ID"),
      range: `${tabName}!A:E`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            new Date().toISOString(),
            payload.sub,
            payload.email,
            payload.name || "",
            payload.picture || "",
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
