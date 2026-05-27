import type { Metadata } from "next";

import { DiketaWordmark } from "../../components/DiketaWordmark";

export const metadata: Metadata = {
  title: "Privacy Policy | Política de Privacidad | Diketa",
  description:
    "Privacy Policy for Diketa. Política de Privacidad de Diketa.",
  openGraph: {
    title: "Privacy Policy | Política de Privacidad | Diketa",
    description:
      "Privacy Policy for Diketa. Política de Privacidad de Diketa.",
  },
};

type LegalSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

const privacyContactEmail = "oliver.johnrivera@gmail.com";
const lastUpdated = "27 May 2026";
const version = "1.0";

const englishSections: LegalSection[] = [
  {
    title: "1. Who Is Responsible For Your Data?",
    paragraphs: [
      "The data controller is Diketa, Germany. Contact email: oliver.johnrivera@gmail.com.",
      "Diketa is currently not operated by a registered company. For the purposes of this Privacy Policy, Diketa, we, us, or our refers to the Diketa project.",
      "We have not appointed a Data Protection Officer. For any privacy-related question or request, please contact us at the email address above.",
    ],
  },
  {
    title: "2. What Diketa Does At This Stage",
    paragraphs: [
      "Diketa currently operates a landing page where people can register interest in joining a waitlist or receiving early access.",
    ],
    bullets: [
      "You are not creating a full Diketa account.",
      "You cannot access an app or user dashboard through this landing page.",
      "We do not collect health, medical, weight-loss, location, clinic preference, or treatment-related information through the current waitlist form.",
      "After Google sign-in, we display a short thank-you message and store the waitlist information described below.",
    ],
  },
  {
    title: "3. What Personal Data We Collect",
    paragraphs: [
      "When you join the Diketa waitlist using Google sign-in, we collect the following information provided through your Google account:",
    ],
    bullets: [
      "Your name.",
      "Your email address.",
      "Your Google profile photo URL.",
      "Your Google user ID or similar Google account identifier.",
      "Your signup timestamp.",
      "Your consent status, consent timestamp, consent text, consent source, consent method, and Privacy Policy version.",
    ],
  },
  {
    title: "4. Why We Collect This Data",
    paragraphs: [
      "We use your personal data to add you to the Diketa waitlist or early-access list, identify duplicate signups, personalize future communications or onboarding, contact you with launch news and project updates, keep records of consent, and maintain suppression records if you unsubscribe.",
      `Where we rely on consent, you may withdraw your consent at any time by contacting us at ${privacyContactEmail}. Withdrawing consent does not affect processing that happened before the withdrawal.`,
    ],
  },
  {
    title: "5. Email Updates",
    paragraphs: [
      "The current Google waitlist signup flow requires you to confirm that you agree to receive project updates, launch news, and related information from Diketa before signup can continue.",
      `You can withdraw your email consent at any time by contacting ${privacyContactEmail}. In the future, we may also provide an unsubscribe link in emails.`,
    ],
  },
  {
    title: "6. Google Sign-In",
    paragraphs: [
      "Google sign-in is currently the way to join the Diketa waitlist.",
      "When you use Google sign-in, Google provides us with basic profile information, such as your name, email address, profile image URL, and account identifier. Google's own processing of your Google account data is governed by Google's privacy terms.",
      "We only use the Google information for the Diketa waitlist purposes described in this Privacy Policy.",
    ],
  },
  {
    title: "7. Where We Store Data",
    paragraphs: [
      "We currently store waitlist records in Google Sheets / Google Workspace. The landing page may also be served through hosting and infrastructure providers used to operate this website.",
      "We may use service providers to host the website, store data, manage records, or send email updates. These providers process data only as needed to provide their services to us.",
      "Once an email provider is selected, we will update this Privacy Policy if that provider processes personal data on our behalf.",
    ],
  },
  {
    title: "8. International Data Transfers",
    paragraphs: [
      "Diketa is based in Germany and will aim to use providers and storage locations inside the EU or EEA where possible.",
      "Some providers may process data outside the EU or EEA. Where this happens, we will use appropriate safeguards required by GDPR, such as adequacy decisions or Standard Contractual Clauses where applicable.",
    ],
  },
  {
    title: "9. How Long We Keep Your Data",
    paragraphs: [
      "We keep waitlist data for as long as needed for the purposes described above.",
    ],
    bullets: [
      "If you remain on the waitlist but do not respond to product launch, signup, or onboarding emails, we will delete or anonymize your waitlist data after 24 months.",
      "If Diketa does not launch, we will delete the waitlist data.",
      "If you unsubscribe from email updates, we may keep minimal suppression data, such as your email address and unsubscribe status, to make sure we do not email you again.",
      "If you ask us to delete your data, we will delete it unless we need to keep limited information for legal, security, or compliance reasons.",
    ],
  },
  {
    title: "10. Analytics And Cookies",
    paragraphs: [
      "We do not currently use analytics tools, advertising pixels, or non-essential cookies on the landing page.",
      "If we introduce analytics, cookies, or similar technologies in the future, we will update this Privacy Policy and, where required, ask for your consent before using non-essential cookies or tracking technologies.",
    ],
  },
  {
    title: "11. Age Restriction",
    paragraphs: [
      "Diketa is not intended for minors. You must be at least 18 years old to join the waitlist. We do not knowingly collect personal data from anyone under 18. If we become aware that someone under 18 has joined the waitlist, we will delete their data.",
    ],
  },
  {
    title: "12. Your Rights",
    paragraphs: [
      `Depending on your location and applicable law, you may have the right to access, correct, delete, restrict, object to, withdraw consent for, or request a portable copy of your personal data. To exercise your rights, contact us at ${privacyContactEmail}.`,
      "You may also have the right to lodge a complaint with a competent data protection supervisory authority.",
    ],
  },
  {
    title: "13. Changes To This Privacy Policy",
    paragraphs: [
      "We may update this Privacy Policy as Diketa develops. If we make material changes, such as adding analytics tools, selecting an email provider, changing storage providers, collecting new categories of data, or changing how we use your data, we will update this page and, where appropriate, notify users or ask for renewed consent.",
    ],
  },
];

const spanishSections: LegalSection[] = [
  {
    title: "1. Quién Es Responsable De Tus Datos",
    paragraphs: [
      "El responsable del tratamiento de datos es Diketa, Alemania. Correo electrónico de contacto: oliver.johnrivera@gmail.com.",
      "Diketa actualmente no está operado por una empresa registrada. Para los fines de esta Política de Privacidad, Diketa, nosotros o nuestro se refiere al proyecto Diketa.",
      "No hemos nombrado un Delegado de Protección de Datos. Para cualquier pregunta o solicitud relacionada con privacidad, contáctanos en el correo electrónico indicado arriba.",
    ],
  },
  {
    title: "2. Qué Hace Diketa En Esta Etapa",
    paragraphs: [
      "Diketa actualmente opera una página de aterrizaje donde las personas pueden registrar su interés en unirse a una lista de espera o recibir acceso anticipado.",
    ],
    bullets: [
      "No estás creando una cuenta completa de Diketa.",
      "No puedes acceder a una app o panel de usuario desde esta página.",
      "No recopilamos información de salud, médica, de pérdida de peso, ubicación, preferencia de clínica o tratamiento a través del formulario actual de lista de espera.",
      "Después del inicio de sesión con Google, mostramos un breve mensaje de agradecimiento y almacenamos la información de lista de espera descrita abajo.",
    ],
  },
  {
    title: "3. Qué Datos Personales Recopilamos",
    paragraphs: [
      "Cuando te unes a la lista de espera de Diketa usando el inicio de sesión con Google, recopilamos la siguiente información proporcionada a través de tu cuenta de Google:",
    ],
    bullets: [
      "Tu nombre.",
      "Tu dirección de correo electrónico.",
      "La URL de tu foto de perfil de Google.",
      "Tu ID de usuario de Google o un identificador similar de la cuenta de Google.",
      "La fecha y hora de registro.",
      "Tu estado de consentimiento, fecha y hora del consentimiento, texto del consentimiento, fuente, método y versión de la Política de Privacidad.",
    ],
  },
  {
    title: "4. Por Qué Recopilamos Estos Datos",
    paragraphs: [
      "Usamos tus datos personales para agregarte a la lista de espera o acceso anticipado de Diketa, identificar registros duplicados, personalizar futuras comunicaciones u onboarding, contactarte con noticias de lanzamiento y actualizaciones del proyecto, conservar registros de consentimiento y mantener registros de supresión si te das de baja.",
      `Cuando nos basamos en tu consentimiento, puedes retirarlo en cualquier momento contactándonos en ${privacyContactEmail}. Retirar el consentimiento no afecta el tratamiento realizado antes de retirarlo.`,
    ],
  },
  {
    title: "5. Actualizaciones Por Correo Electrónico",
    paragraphs: [
      "El flujo actual de registro en la lista de espera con Google requiere que confirmes que aceptas recibir actualizaciones del proyecto, novedades del lanzamiento e información relacionada de Diketa antes de continuar.",
      `Puedes retirar tu consentimiento para recibir correos electrónicos en cualquier momento contactándonos en ${privacyContactEmail}. En el futuro, también podemos incluir un enlace para darte de baja en los correos.`,
    ],
  },
  {
    title: "6. Inicio De Sesión Con Google",
    paragraphs: [
      "El inicio de sesión con Google es actualmente la forma de unirse a la lista de espera de Diketa.",
      "Cuando usas el inicio de sesión con Google, Google nos proporciona información básica de perfil, como tu nombre, correo electrónico, URL de imagen de perfil e identificador de cuenta. El tratamiento que Google hace de los datos de tu cuenta se rige por las condiciones de privacidad de Google.",
      "Solo usamos la información de Google para los fines de lista de espera de Diketa descritos en esta Política de Privacidad.",
    ],
  },
  {
    title: "7. Dónde Almacenamos Los Datos",
    paragraphs: [
      "Actualmente almacenamos los registros de lista de espera en Google Sheets / Google Workspace. La página de aterrizaje también puede servirse mediante proveedores de hosting e infraestructura usados para operar este sitio web.",
      "Podemos usar proveedores de servicios para alojar el sitio web, almacenar datos, gestionar registros o enviar actualizaciones por correo electrónico. Estos proveedores procesan datos solo en la medida necesaria para prestarnos sus servicios.",
      "Cuando seleccionemos un proveedor de correo electrónico, actualizaremos esta Política de Privacidad si ese proveedor procesa datos personales en nuestro nombre.",
    ],
  },
  {
    title: "8. Transferencias Internacionales De Datos",
    paragraphs: [
      "Diketa tiene su base en Alemania y buscará usar proveedores y ubicaciones de almacenamiento dentro de la UE o el EEE cuando sea posible.",
      "Algunos proveedores pueden procesar datos fuera de la UE o el EEE. Cuando esto ocurra, usaremos las garantías apropiadas exigidas por el RGPD, como decisiones de adecuación o Cláusulas Contractuales Tipo cuando corresponda.",
    ],
  },
  {
    title: "9. Cuánto Tiempo Conservamos Tus Datos",
    paragraphs: [
      "Conservamos los datos de lista de espera durante el tiempo necesario para los fines descritos arriba.",
    ],
    bullets: [
      "Si permaneces en la lista de espera pero no respondes a correos de lanzamiento, registro u onboarding, eliminaremos o anonimizaremos tus datos de lista de espera después de 24 meses.",
      "Si Diketa no se lanza, eliminaremos los datos de la lista de espera.",
      "Si te das de baja de las actualizaciones por correo electrónico, podemos conservar datos mínimos de supresión, como tu dirección de correo electrónico y estado de baja, para asegurarnos de no volver a enviarte correos.",
      "Si nos pides que eliminemos tus datos, los eliminaremos salvo que necesitemos conservar información limitada por motivos legales, de seguridad o cumplimiento.",
    ],
  },
  {
    title: "10. Analítica Y Cookies",
    paragraphs: [
      "Actualmente no usamos herramientas de analítica, píxeles publicitarios ni cookies no esenciales en la página de aterrizaje.",
      "Si introducimos analítica, cookies o tecnologías similares en el futuro, actualizaremos esta Política de Privacidad y, cuando sea necesario, pediremos tu consentimiento antes de usar cookies no esenciales o tecnologías de seguimiento.",
    ],
  },
  {
    title: "11. Restricción De Edad",
    paragraphs: [
      "Diketa no está destinado a menores. Debes tener al menos 18 años para unirte a la lista de espera. No recopilamos intencionalmente datos personales de personas menores de 18 años. Si sabemos que alguien menor de 18 años se ha unido a la lista de espera, eliminaremos sus datos.",
    ],
  },
  {
    title: "12. Tus Derechos",
    paragraphs: [
      `Según tu ubicación y la ley aplicable, puedes tener derecho a acceder, corregir, eliminar, restringir, oponerte, retirar el consentimiento o solicitar una copia portable de tus datos personales. Para ejercer tus derechos, contáctanos en ${privacyContactEmail}.`,
      "También puedes tener derecho a presentar una reclamación ante una autoridad de protección de datos competente.",
    ],
  },
  {
    title: "13. Cambios A Esta Política De Privacidad",
    paragraphs: [
      "Podemos actualizar esta Política de Privacidad a medida que Diketa se desarrolle. Si hacemos cambios importantes, como agregar herramientas de analítica, seleccionar un proveedor de correo, cambiar proveedores de almacenamiento, recopilar nuevas categorías de datos o cambiar cómo usamos los datos, actualizaremos esta página y, cuando corresponda, notificaremos a los usuarios o pediremos un nuevo consentimiento.",
    ],
  },
];

function LegalSectionList({ sections }: { sections: LegalSection[] }) {
  return (
    <>
      {sections.map((section) => (
        <section key={section.title}>
          <h2>{section.title}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {section.bullets ? (
            <ul>
              {section.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}
    </>
  );
}

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <div className="page-wrap legal-page__shell">
        <DiketaWordmark href="/" />

        <article className="legal-page__content">
          <div>
            <p className="eyebrow">
              Version {version} · Last updated {lastUpdated}
            </p>
            <h1>Privacy Policy</h1>
            <p>
              This Privacy Policy explains how we collect and use personal data
              when you join the Diketa waitlist or early-access list through our
              landing page.
            </p>
          </div>

          <LegalSectionList sections={englishSections} />

          <hr className="legal-language-divider" />

          <div>
            <p className="eyebrow">
              Versión {version} · Última actualización: 27 de mayo de 2026
            </p>
            <h1>Política de Privacidad</h1>
            <p>
              Esta Política de Privacidad explica cómo recopilamos y usamos datos
              personales cuando te unes a la lista de espera o acceso anticipado
              de Diketa a través de nuestra página de aterrizaje.
            </p>
          </div>

          <LegalSectionList sections={spanishSections} />
        </article>
      </div>
    </main>
  );
}
