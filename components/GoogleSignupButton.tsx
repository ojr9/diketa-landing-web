"use client";

import { useEffect, useRef, useState } from "react";

type GoogleCredentialResponse = {
  credential?: string;
};

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
            },
          ) => void;
        };
      };
    };
  }
}

export default function GoogleSignupButton() {
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    function loadGoogleScript() {
      return new Promise<void>((resolve, reject) => {
        if (window.google) {
          resolve();
          return;
        }

        const existingScript = document.querySelector(
          'script[src="https://accounts.google.com/gsi/client"]'
        );

        if (existingScript) {
          existingScript.addEventListener("load", () => resolve());
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
            try {
              setStatus("Signing you up...");

              const res = await fetch("/api/signup", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  credential: response.credential,
                }),
              });

              const data = await res.json();

              if (!res.ok) {
                throw new Error(data.error || "Signup failed");
              }

              setStatus(`Thanks for signing up, ${data.name || data.email}!`);
            } catch (error) {
              console.error(error);
              setStatus("Something went wrong. Please try again.");
            }
          },
        });

        if (buttonRef.current) {
          window.google?.accounts.id.renderButton(buttonRef.current, {
            type: "standard",
            theme: "outline",
            size: "large",
            text: "signup_with",
            shape: "pill",
          });
        }
      } catch (error) {
        console.error(error);
        setStatus("Could not load Google signup.");
      }
    }

    initializeGoogleButton();
  }, []);

  return (
    <div>
      <div ref={buttonRef}></div>

      {status && (
        <p style={{ marginTop: "12px", fontSize: "14px" }}>
          {status}
        </p>
      )}
    </div>
  );
}
