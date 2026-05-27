import type { Metadata } from "next";
import type { ReactNode } from "react";

import { DiketaWordmark } from "../../components/DiketaWordmark";

export const metadata: Metadata = {
  title: "Imprint / Impressum | Diketa",
  description: "Provider identification and legal contact information for Diketa.",
  openGraph: {
    title: "Imprint / Impressum | Diketa",
    description: "Provider identification and legal contact information for Diketa.",
  },
};

const legalConfig = {
  projectName: "Diketa",
  providerName: "Oliver John Rivera",
  representedBy: "Oliver John Rivera",
  addressLines: ["Naugarderstr. 9", "10409", "Germany"],
  email: "oliver.johnrivera@gmail.com",
  phone: null,
  vatId: null,
  responsibleForContent: null,
};

function DetailRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="legal-detail-row">
      <dt>{label}</dt>
      <dd>{children}</dd>
    </div>
  );
}

export default function ImprintPage() {
  return (
    <main className="legal-page">
      <div className="page-wrap legal-page__shell">
        <DiketaWordmark href="/" />

        <article className="legal-page__content">
          <div>
            <p className="eyebrow">Legal notice</p>
            <h1>Imprint / Impressum</h1>
          </div>


          <section>
            <p className="eyebrow">Angaben gemäß § 5 DDG</p>
            <h2>Provider Information</h2>
            <dl className="legal-detail-list">
              <DetailRow label="Project / service">{legalConfig.projectName}</DetailRow>
              <DetailRow label="Provider">{legalConfig.providerName}</DetailRow>
              <DetailRow label="Represented by">{legalConfig.representedBy}</DetailRow>
              <DetailRow label="Address">
                <address>
                  {legalConfig.addressLines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </address>
              </DetailRow>
              <DetailRow label="Contact">
                <span>Email: {legalConfig.email}</span>
              </DetailRow>
              {legalConfig.phone ? (
                <DetailRow label="Phone">{legalConfig.phone}</DetailRow>
              ) : null}
              {legalConfig.vatId ? (
                <DetailRow label="VAT ID">{legalConfig.vatId}</DetailRow>
              ) : null}
            </dl>
          </section>

          {legalConfig.responsibleForContent ? (
            <section>
              <h2>Responsible For Content</h2>
              <p>
                Responsible person under § 18 Abs. 2 MStV for
                journalistic-editorial content:
              </p>
              <address className="legal-address">
                {legalConfig.responsibleForContent}
              </address>
            </section>
          ) : null}

          <section>
            <h2>Liability For Content</h2>
            <p>
              The content on this website is prepared with care. However, we
              cannot guarantee that all content is complete, accurate, or always
              up to date. Where required by applicable law, we are responsible for
              our own content on these pages.
            </p>
          </section>

          <section>
            <h2>External Links</h2>
            <p>
              This website may contain links to external websites. We have no
              control over the content of external websites. The respective
              provider or operator of linked pages is responsible for their
              content.
            </p>
          </section>

          <section>
            <h2>Copyright</h2>
            <p>
              The content and materials created for this website are subject to
              applicable copyright law. Reproduction, editing, distribution, or
              other use outside the limits of copyright law requires prior
              permission from the relevant rights holder.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
