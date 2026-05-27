type FooterLegalLinksProps = {
  locale: "es" | "en";
};

const legalLinkCopy = {
  en: {
    ariaLabel: "Legal links",
    imprint: "Imprint / Impressum",
    privacy: "Privacy Policy",
  },
  es: {
    ariaLabel: "Enlaces legales",
    imprint: "Aviso Legal / Impressum",
    privacy: "Política de Privacidad",
  },
} as const;

export function FooterLegalLinks({ locale }: FooterLegalLinksProps) {
  const copy = legalLinkCopy[locale];

  return (
    <nav aria-label={copy.ariaLabel} className="footer-legal-links">
      <a href="/privacy">{copy.privacy}</a>
      <a href="/imprint">{copy.imprint}</a>
    </nav>
  );
}
