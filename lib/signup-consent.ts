export type ConsentLocale = "es" | "en";

export const PROJECT_UPDATES_CONSENT_TEXT = {
  en: "I agree to receive emails from Diketa about project updates, launch news, and related information. I can unsubscribe at any time.",
  es: "Acepto recibir correos electrónicos de Diketa sobre actualizaciones del proyecto, novedades del lanzamiento e información relacionada. Puedo darme de baja en cualquier momento.",
} as const;

export const PRIVACY_POLICY_VERSION = "privacy_policy_v1";
export const CONSENT_SOURCE = "landing_page_google_signup";
export const CONSENT_METHOD = "checkbox";
export const CONSENT_MAX_AGE_MS = 15 * 60 * 1000;

export function getConsentLocale(value: unknown): ConsentLocale {
  return value === "es" ? "es" : "en";
}

export function getProjectUpdatesConsentText(locale: ConsentLocale) {
  return PROJECT_UPDATES_CONSENT_TEXT[locale];
}
