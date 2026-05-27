"use client";

import { useEffect, useRef, useState } from "react";

import {
  type ConsentLocale,
  CONSENT_METHOD,
  CONSENT_SOURCE,
  PRIVACY_POLICY_VERSION,
  getProjectUpdatesConsentText,
} from "../lib/signup-consent";

type GoogleCredentialResponse = {
  credential?: string;
};

const signupCopy = {
  en: {
    disabledButton: "Sign up with Google",
    fallbackError: "Something went wrong. Please try again.",
    loadError: "Could not load Google signup.",
    missingConsent: "Please confirm consent before signing up.",
    privacyPolicy: "Privacy Policy",
    readPolicyPrefix: "I have read the",
    signing: "Signing you up...",
    success: "Thanks for signing up",
  },
  es: {
    disabledButton: "Regístrate con Google",
    fallbackError: "Algo salió mal. Inténtalo de nuevo.",
    loadError: "No se pudo cargar el registro con Google.",
    missingConsent: "Confirma tu consentimiento antes de registrarte.",
    privacyPolicy: "Política de Privacidad",
    readPolicyPrefix: "He leído la",
    signing: "Registrándote...",
    success: "Gracias por registrarte",
  },
} as const;

declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (options: {
            client_id: string | undefined;
            callback: (response: GoogleCredentialResponse) => void;
          }) => void;
          renderButton: (
            parent: HTMLElement,
            options: {
              type: "standard";
              theme: "outline";
              size: "large";
              text: "signup_with";
              shape: "pill";
              width?: string;
            },
          ) => void;
        };
      };
    };
  }
}

export function GoogleSignupWithConsent({ locale }: { locale: ConsentLocale }) {
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const initializedRef = useRef(false);
  const consentText = getProjectUpdatesConsentText(locale);
  const copy = signupCopy[locale];
  const consentRef = useRef({
    consentTimestamp: null as string | null,
    updatesConsent: false,
  });
  const [updatesConsent, setUpdatesConsent] = useState(false);
  const [consentTimestamp, setConsentTimestamp] = useState<string | null>(null);
  const [googleReady, setGoogleReady] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    consentRef.current = {
      consentTimestamp,
      updatesConsent,
    };
  }, [consentTimestamp, updatesConsent]);

  useEffect(() => {
    function loadGoogleScript() {
      return new Promise<void>((resolve, reject) => {
        if (window.google) {
          resolve();
          return;
        }

        const existingScript = document.querySelector(
          'script[src="https://accounts.google.com/gsi/client"]',
        );

        if (existingScript) {
          existingScript.addEventListener("load", () => resolve(), { once: true });
          existingScript.addEventListener("error", reject, { once: true });
          return;
        }

        const script = document.createElement("script");
        script.src = "https://accounts.google.com/gsi/client";
        script.async = true;
        script.defer = true;
        script.onload = () => resolve();
        script.onerror = reject;
        document.body.appendChild(script);
      });
    }

    async function initializeGoogleButton() {
      try {
        await loadGoogleScript();

        window.google?.accounts.id.initialize({
          client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
          callback: async (response) => {
            const currentConsent = consentRef.current;

            if (!currentConsent.updatesConsent || !currentConsent.consentTimestamp) {
              setStatus(copy.missingConsent);
              return;
            }

            try {
              setStatus(copy.signing);

              const res = await fetch("/api/signup", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  credential: response.credential,
                  projectUpdatesConsent: true,
                  consentTimestamp: currentConsent.consentTimestamp,
                  consentLocale: locale,
                  consentText,
                  privacyPolicyVersion: PRIVACY_POLICY_VERSION,
                  consentSource: CONSENT_SOURCE,
                  consentMethod: CONSENT_METHOD,
                }),
              });

              const data = await res.json();

              if (!res.ok) {
                throw new Error(data.error || "Signup failed");
              }

              setStatus(`${copy.success}, ${data.name || data.email}!`);
            } catch (error) {
              console.error(error);
              setStatus(
                error instanceof Error
                  ? error.message
                  : copy.fallbackError,
              );
            }
          },
        });

        initializedRef.current = true;
        setGoogleReady(true);
      } catch (error) {
        console.error(error);
        setStatus(copy.loadError);
      }
    }

    if (!initializedRef.current) {
      initializeGoogleButton();
    }
  }, [consentText, copy, locale]);

  useEffect(() => {
    if (!updatesConsent || !googleReady || !buttonRef.current || buttonRef.current.hasChildNodes()) {
      return;
    }

    window.google?.accounts.id.renderButton(buttonRef.current, {
      type: "standard",
      theme: "outline",
      size: "large",
      text: "signup_with",
      shape: "pill",
      width: "280",
    });
  }, [googleReady, updatesConsent]);

  function handleConsentChange(event: React.ChangeEvent<HTMLInputElement>) {
    const checked = event.target.checked;

    setUpdatesConsent(checked);
    setConsentTimestamp(checked ? new Date().toISOString() : null);
    setStatus("");
  }

  return (
    <div className="google-signup">
      <label className="google-signup__consent">
        <input
          type="checkbox"
          checked={updatesConsent}
          onChange={handleConsentChange}
          aria-describedby="google-signup-consent-text"
        />
        <span id="google-signup-consent-text">
          {consentText} {copy.readPolicyPrefix}{" "}
          <a href="/privacy">{copy.privacyPolicy}</a>.
        </span>
      </label>

      <div className="google-signup__button-slot">
        {updatesConsent ? (
          <div ref={buttonRef} className="google-signup__google-button" />
        ) : (
          <button className="google-signup__disabled-button" type="button" disabled>
            {copy.disabledButton}
          </button>
        )}
      </div>

      {status && (
        <p className="google-signup__status" role="status">
          {status}
        </p>
      )}
    </div>
  );
}
