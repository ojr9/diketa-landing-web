import type { Metadata } from "next";

import {
  expertImages,
  howItWorksImages,
  landingImages,
  type LandingImage,
} from "./landing-images";

export type Locale = "es" | "en";

type Tone = "teal" | "pink" | "lavender" | "peach" | "ochre" | "cream";
type Accent = "mint" | "pink" | "peach" | "lavender";

interface NavLink {
  href: string;
  label: string;
}

interface Card {
  title: string;
  body: string;
}

interface ReassuranceCard extends Card {
  accent: Accent;
}

interface SolutionCard extends Card {
  tone: Tone;
}

interface Step extends Card {
  image: LandingImage;
}

interface ExpertCard {
  label: string;
  specialty: string;
  location: string;
  trust: string;
  cta: string;
  image: LandingImage;
}

interface ProductDetail {
  feature: string;
  benefit: string;
}

interface Faq {
  question: string;
  answer: string;
}

interface LanguageOption {
  label: string;
  href: string;
  hrefLang: Locale;
  current: boolean;
}

export interface LandingContent {
  locale: Locale;
  brand: string;
  navLinks: NavLink[];
  language: {
    ariaLabel: string;
    options: LanguageOption[];
  };
  header: {
    homeAriaLabel: string;
    navigationAriaLabel: string;
    mobileNavigationAriaLabel: string;
    mobileMenuAriaLabel: string;
  };
  cta: {
    primary: string;
    secondary: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    reassurance: string;
    image: LandingImage;
  };
  reassurance: {
    eyebrow: string;
    title: string;
    cards: ReassuranceCard[];
  };
  problem: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    image: LandingImage;
  };
  solution: {
    eyebrow: string;
    title: string;
    body: string;
    cards: SolutionCard[];
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    stepLabel: string;
    steps: Step[];
  };
  experts: {
    eyebrow: string;
    title: string;
    body: string;
    cards: ExpertCard[];
  };
  story: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    image: LandingImage;
  };
  audience: {
    eyebrow: string;
    title: string;
    cards: Card[];
  };
  product: {
    eyebrow: string;
    title: string;
    details: ProductDetail[];
    image: LandingImage;
  };
  credibility: {
    eyebrow: string;
    title: string;
    cards: Card[];
    testimonialsAriaLabel: string;
    testimonials: string[];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: Faq[];
  };
  finalCta: {
    eyebrow: string;
    title: string;
    body: string;
    googleSignup: boolean;
    reassurance: string;
    image: LandingImage;
  };
  footer: {
    tagline: string;
    navigationAriaLabel: string;
    copyright: string;
  };
}

const imageText = (
  image: LandingImage,
  copy: Pick<LandingImage, "alt" | "helpText" | "replacementGuidance">,
): LandingImage => ({
  ...image,
  ...copy,
});

const sharedImageCopy = {
  en: {
    hero: imageText(landingImages.hero, {
      alt: "A doctor warmly greeting a patient during a reassuring consultation.",
      helpText:
        "Use this image to show trusted, private doctor-patient communication.",
      replacementGuidance:
        "Keep the crop focused on calm care, privacy, and professional reassurance. Avoid scale imagery, before-and-after bodies, intense workouts, or exaggerated wellness visuals.",
    }),
    empathy: imageText(landingImages.empathy, {
      alt: "A person thoughtfully reviewing weight loss support options.",
      helpText:
        "Use an image that communicates reflection and real-life decision-making. The person should look supported and thoughtful, not stressed or ashamed.",
      replacementGuidance:
        "Avoid negative body language, diet-culture imagery, measuring tapes, scales, or anything that suggests judgment.",
    }),
    story: imageText(landingImages.story, {
      alt: "A doctor and patient meeting with calm, supportive body language.",
      helpText:
        "Use this image to reinforce secure, supportive communication between doctors and patients.",
      replacementGuidance:
        "Choose crops that feel respectful, calm, and private. Avoid visual cliches about dieting, body transformation, or shame.",
    }),
    product: imageText(landingImages.product, {
      alt: "Diketa obesity and weight-loss care communication tools shown on a laptop in a warm workspace.",
      helpText:
        "Use this image to show private obesity and weight-loss care communication tools in context. The interface should feel clear, calm, and easy to use.",
      replacementGuidance:
        "Show simple chat, appointment, metabolic lab-result, or weight-care doctor profile details. Avoid cluttered dashboards or cold medical-looking interfaces.",
    }),
    finalCta: imageText(landingImages.finalCta, {
      alt: "A person moving forward with clarity after finding support.",
      helpText:
        "Use an image that feels hopeful, grounded, and calm. Avoid dramatic transformation or success imagery.",
      replacementGuidance:
        "Show quiet confidence and relief. Do not show body comparison, scales, or intense exercise.",
    }),
    steps: [
      imageText(howItWorksImages[0]!, {
        alt: "A patient joining early access for private obesity and weight-loss care communication.",
        helpText:
          "Use an image that communicates a simple early-access starting point.",
        replacementGuidance:
          "Prefer simple, warm communication or sign-up visuals with clear focus.",
      }),
      imageText(howItWorksImages[1]!, {
        alt: "Private obesity and weight-loss care communication tools shown in Diketa.",
        helpText:
          "Use this image to show chat, appointment coordination, and shared results.",
        replacementGuidance:
          "Use clear care communication details. Avoid ratings, reviews, or credentials until real data is available.",
      }),
      imageText(howItWorksImages[2]!, {
        alt: "A patient moving forward after clear weight-care communication.",
        helpText:
          "Use an image that communicates timely progress without pressure.",
        replacementGuidance:
          "Show a calm booking, message, or next-step confirmation. Avoid urgent conversion language.",
      }),
    ],
    experts: expertImages.map((image) =>
      imageText(image, {
        alt: "Portrait of a trusted doctor in a white coat.",
        helpText:
          "Use this portrait as a doctor profile preview.",
        replacementGuidance:
          "Use consistent lighting and framing. Avoid overly corporate headshots, clinical harshness, or influencer-style photography.",
      }),
    ),
  },
  es: {
    hero: imageText(landingImages.hero, {
      alt: "Un médico saluda cálidamente a un paciente durante una consulta tranquilizadora.",
      helpText:
        "Usa esta imagen para mostrar comunicación privada y confiable entre médico y paciente.",
      replacementGuidance:
        "Mantén el encuadre centrado en cuidado tranquilo, privacidad y confianza profesional. Evita básculas, antes y después, ejercicios intensos o visuales exagerados de bienestar.",
    }),
    empathy: imageText(landingImages.empathy, {
      alt: "Una persona revisa con calma opciones de apoyo para pérdida de peso.",
      helpText:
        "Usa una imagen que comunique reflexión y una decisión real. La persona debe sentirse acompañada y tranquila, no juzgada.",
      replacementGuidance:
        "Evita lenguaje corporal negativo, imágenes de cultura de dieta, cintas métricas, básculas o cualquier visual que sugiera juicio.",
    }),
    story: imageText(landingImages.story, {
      alt: "Un médico y un paciente se reúnen con un lenguaje corporal tranquilo y de apoyo.",
      helpText:
        "Usa esta imagen para reforzar la comunicación segura y de apoyo entre médicos y pacientes.",
      replacementGuidance:
        "Elige encuadres respetuosos, tranquilos y privados. Evita clichés visuales sobre dieta, transformación corporal o vergüenza.",
    }),
    product: imageText(landingImages.product, {
      alt: "Herramientas de comunicación para cuidado de obesidad y pérdida de peso de Diketa en una laptop dentro de un espacio de trabajo cálido.",
      helpText:
        "Usa esta imagen para mostrar herramientas privadas de comunicación para cuidado de obesidad y pérdida de peso en contexto. La interfaz debe sentirse clara, tranquila y fácil de usar.",
      replacementGuidance:
        "Muestra detalles simples de chat, citas, resultados metabólicos de laboratorio o perfiles médicos de cuidado de peso. Evita paneles saturados o interfaces demasiado clínicas.",
    }),
    finalCta: imageText(landingImages.finalCta, {
      alt: "Una persona avanza con claridad después de encontrar apoyo.",
      helpText:
        "Usa una imagen que se sienta esperanzadora, cercana y tranquila. Evita imágenes dramáticas de transformación.",
      replacementGuidance:
        "Muestra confianza y alivio con calma. No muestres comparaciones corporales, básculas ni ejercicio intenso.",
    }),
    steps: [
      imageText(howItWorksImages[0]!, {
        alt: "Un paciente se une al acceso anticipado para comunicación privada sobre obesidad y pérdida de peso.",
        helpText:
          "Usa una imagen que comunique un comienzo simple de acceso anticipado.",
        replacementGuidance:
          "Prefiere visuales cálidos de comunicación o registro con un enfoque claro.",
      }),
      imageText(howItWorksImages[1]!, {
        alt: "Herramientas privadas de comunicación sobre obesidad y pérdida de peso dentro de Diketa.",
        helpText:
          "Usa esta imagen para mostrar chat, coordinación de citas y resultados compartidos.",
        replacementGuidance:
          "Usa detalles claros de comunicación de cuidado. Evita calificaciones, reseñas o credenciales hasta que haya datos reales disponibles.",
      }),
      imageText(howItWorksImages[2]!, {
        alt: "Un paciente avanza después de una comunicación clara sobre cuidado de peso.",
        helpText:
          "Usa una imagen que comunique avance a tiempo sin presión.",
        replacementGuidance:
          "Muestra una reserva, mensaje o confirmación de siguiente paso con calma. Evita lenguaje visual urgente.",
      }),
    ],
    experts: expertImages.map((image) =>
      imageText(image, {
        alt: "Retrato de un médico de confianza con bata blanca.",
        helpText:
          "Usa este retrato como vista previa del perfil de un médico.",
        replacementGuidance:
          "Usa iluminación y encuadre consistentes. Evita retratos demasiado corporativos, clínicos o con estilo de influencer.",
      }),
    ),
  },
} satisfies Record<Locale, {
  hero: LandingImage;
  empathy: LandingImage;
  story: LandingImage;
  product: LandingImage;
  finalCta: LandingImage;
  steps: LandingImage[];
  experts: LandingImage[];
}>;

export const landingContent = {
  en: {
    locale: "en",
    brand: "Diketa",
    navLinks: [
      { href: "#how-it-works", label: "How it works" },
      { href: "#experts", label: "Doctors" },
      { href: "#why-diketa", label: "Why Diketa" },
      { href: "#faq", label: "FAQ" },
    ],
    language: {
      ariaLabel: "Language",
      options: [
        { label: "EN", href: "/en", hrefLang: "en", current: true },
        { label: "ES", href: "/", hrefLang: "es", current: false },
      ],
    },
    header: {
      homeAriaLabel: "Diketa home",
      navigationAriaLabel: "Primary navigation",
      mobileNavigationAriaLabel: "Mobile navigation",
      mobileMenuAriaLabel: "Open navigation menu",
    },
    cta: {
      primary: "Join early access",
      secondary: "See how it works",
    },
    hero: {
      eyebrow: "Private weight-care communication, made clearer",
      title: "Stay connected with your doctor before weight-care follow-up gets delayed.",
      body:
        "Diketa gives doctors and patients a trusted private space for obesity and weight-loss care, with secure chat, appointment booking, and shared lab results when timing matters.",
      reassurance: "Private, organized, and built around real weight-care conversations.",
      image: sharedImageCopy.en.hero,
    },
    reassurance: {
      eyebrow: "A clearer start",
      title: "When weight-health questions come up, communication should not slow care down.",
      cards: [
        {
          title: "Private doctor chat",
          body: "Keep obesity and weight-loss care questions and doctor replies in one trusted communication space.",
          accent: "mint",
        },
        {
          title: "Easier follow-up visits",
          body: "Help patients move from message to booked weight-care visit without losing the thread.",
          accent: "peach",
        },
        {
          title: "Secure metabolic labs",
          body: "Share metabolic and weight-care lab results in a protected place where patients can find them when they need them.",
          accent: "pink",
        },
      ],
    },
    problem: {
      eyebrow: "Why Diketa",
      title: "Obesity and weight-loss care feels harder when conversations are scattered.",
      paragraphs: [
        "Patients working on obesity or weight loss often need timely clarity while messages, appointments, and lab results sit in different places. That delay can make the next step feel harder than it needs to be.",
        "Diketa helps doctors communicate more easily with weight-care patients through private chat, appointment support, and secure lab-result sharing in one organized experience.",
      ],
      image: sharedImageCopy.en.empathy,
    },
    solution: {
      eyebrow: "What Diketa helps with",
      title: "A trusted private tool for obesity and weight-loss care communication.",
      body:
        "Diketa helps doctors and patients stay aligned when there is a weight-care question to answer, a follow-up visit to book, or a metabolic lab result to review.",
      cards: [
        {
          title: "Chat about weight care",
          body: "Give patients a private place to ask obesity and weight-loss care questions without scattered follow-ups.",
          tone: "teal",
        },
        {
          title: "Book the next weight-care visit",
          body: "Make follow-up appointment booking feel like part of the weight-care conversation, not a separate task.",
          tone: "pink",
        },
        {
          title: "Share metabolic labs securely",
          body: "Keep relevant lab results accessible in a trusted space designed for weight-care communication.",
          tone: "peach",
        },
        {
          title: "Reduce missed context",
          body: "Keep weight-care details easier to review so doctors and patients can stay on the same page.",
          tone: "ochre",
        },
        {
          title: "Act sooner",
          body: "Help patients take the next step in their weight-loss plan before confusion turns into delay.",
          tone: "cream",
        },
      ],
    },
    howItWorks: {
      eyebrow: "How it works",
      title: "Three steps to clearer communication.",
      stepLabel: "Step",
      steps: [
        {
          title: "Join early access",
          body: "Sign up to be notified when Diketa opens access for private obesity and weight-loss care communication.",
          image: sharedImageCopy.en.steps[0]!,
        },
        {
          title: "Connect weight-care conversations",
          body: "Doctors and patients use one trusted space for weight-care chat, appointment coordination, and shared lab results.",
          image: sharedImageCopy.en.steps[1]!,
        },
        {
          title: "Move forward sooner",
          body: "Patients can understand the next step in their obesity or weight-loss care faster, and doctors can communicate with less friction.",
          image: sharedImageCopy.en.steps[2]!,
        },
      ],
    },
    experts: {
      eyebrow: "Doctors",
      title: "Built for doctors who want weight-care communication to feel easier.",
      body:
        "Diketa supports trusted doctor-patient relationships in obesity and medical weight-loss care by giving clinicians a simpler way to chat with patients, coordinate appointments, and share lab results securely.",
      cards: [
        {
          label: "Medical weight care",
          specialty: "Obesity medicine",
          location: "Private communication",
          trust: "Secure patient follow-up",
          cta: "Join early access",
          image: sharedImageCopy.en.experts[0]!,
        },
        {
          label: "Metabolic health",
          specialty: "Metabolic health and weight loss",
          location: "Follow-up coordination",
          trust: "Appointment-ready care",
          cta: "Join early access",
          image: sharedImageCopy.en.experts[1]!,
        },
        {
          label: "Ongoing support",
          specialty: "Long-term weight-care guidance",
          location: "Secure lab sharing",
          trust: "Organized care history",
          cta: "Join early access",
          image: sharedImageCopy.en.experts[2]!,
        },
      ],
    },
    story: {
      eyebrow: "Private and human",
      title: "A calmer place for weight-care conversations that matter.",
      paragraphs: [
        "Patients managing obesity or weight loss should not have to chase answers across phone calls, portals, and disconnected reminders. Doctors should not have to fight fragmented tools just to keep patients informed.",
        "Diketa is shaped around secure, practical weight-care communication: private chat, easier appointments, and lab results shared in a place patients can return to with confidence.",
      ],
      image: sharedImageCopy.en.story,
    },
    audience: {
      eyebrow: "Who it is for",
      title: "For weight-care teams and patients who need clearer next steps.",
      cards: [
        {
          title: "For doctors managing weight-care follow-up",
          body: "Communicate with obesity and weight-loss patients through one private tool instead of scattered channels.",
        },
        {
          title: "For patients working on weight loss",
          body: "Ask questions, review shared metabolic results, and understand what to do next.",
        },
        {
          title: "For clinics coordinating obesity-care appointments",
          body: "Make booking part of the weight-care communication flow so fewer details get lost.",
        },
        {
          title: "For ongoing obesity and weight-loss support",
          body: "Keep weight-care conversations organized between visits, decisions, and lab results.",
        },
      ],
    },
    product: {
      eyebrow: "Product detail",
      title: "Communication tools built around obesity and weight-loss care workflows.",
      details: [
        {
          feature: "Secure weight-care chat",
          benefit: "Give doctors and patients a trusted private space for obesity and weight-loss care conversations.",
        },
        {
          feature: "Appointment booking",
          benefit: "Help patients book the next weight-care visit while the care need is still clear.",
        },
        {
          feature: "Lab-result sharing",
          benefit: "Share metabolic and weight-related results securely and keep them easy for patients to revisit.",
        },
        {
          feature: "Doctor profile browsing",
          benefit: "Help patients understand who they are connecting with and why the doctor may be a good fit for weight care.",
        },
        {
          feature: "Organized weight-care history",
          benefit: "Keep messages, appointments, and shared lab results easier to review over time.",
        },
      ],
      image: sharedImageCopy.en.product,
    },
    credibility: {
      eyebrow: "Credibility",
      title: "Designed for trust, privacy, and faster weight-care clarity.",
      cards: [
        {
          title: "Trusted communication",
          body: "Diketa is built around private obesity and weight-loss care conversations, not public wellness chatter.",
        },
        {
          title: "Secure sharing",
          body: "Metabolic labs and weight-care details belong in a protected space designed for patient communication.",
        },
        {
          title: "Practical follow-through",
          body: "Chat, booking, and shared lab results help patients act on weight-care next steps sooner.",
        },
      ],
      testimonialsAriaLabel: "Patient communication perspectives",
      testimonials: [
        "Diketa would make it much easier to keep my weight-loss questions, follow-up appointments, and lab results connected instead of chasing updates in different places. ★★★★★ - Laura M.",
        "The private chat and lab-result sharing feel like exactly what patients need when they are waiting on obesity-care next steps. ★★★★★ - Sophia R.",
        "Booking a weight-care visit from the same place where I talk with my doctor would save time and reduce a lot of confusion. ★★★★★ - Daniel K.",
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Questions people ask before they join.",
      items: [
        {
          question: "What is Diketa?",
          answer:
            "Diketa is a trusted private communication tool that helps doctors and patients use secure chat, appointment booking, and lab-result sharing for obesity and weight-loss care in one organized space.",
        },
        {
          question: "Who is Diketa for?",
          answer:
            "Diketa is for patients working on obesity or weight-loss goals and for doctors or clinics that want an easier way to manage weight-care follow-up.",
        },
        {
          question: "Does Diketa provide medical advice?",
          answer:
            "Diketa helps doctors and patients communicate about obesity and weight-loss care. It does not replace medical advice from a qualified professional or create medical guidance on its own.",
        },
        {
          question: "Can doctors share lab results through Diketa?",
          answer:
            "Yes. Diketa is designed to support secure sharing of metabolic and weight-related lab results so patients can review important information in a trusted place.",
        },
        {
          question: "Can patients book appointments through Diketa?",
          answer:
            "Yes. Diketa is designed to make weight-care appointment booking part of the communication flow.",
        },
        {
          question: "How do I get started?",
          answer:
            "Join early access to hear when Diketa opens its trusted private obesity and weight-loss care communication tools.",
        },
      ],
    },
    finalCta: {
      eyebrow: "Early access",
      title: "Join before clearer weight-care communication opens.",
      body:
        "Be among the first to hear when Diketa launches private doctor-patient chat, weight-care appointment booking, and secure lab-result sharing for obesity and weight-loss care.",
      googleSignup: true,
      reassurance: "Early updates only. Private weight-care communication is coming soon.",
      image: sharedImageCopy.en.finalCta,
    },
    footer: {
      tagline: "Trusted private communication for obesity and weight-loss care.",
      navigationAriaLabel: "Footer navigation",
      copyright: "Copyright 2026 Diketa. All rights reserved.",
    },
  },
  es: {
    locale: "es",
    brand: "Diketa",
    navLinks: [
      { href: "#how-it-works", label: "Cómo funciona" },
      { href: "#experts", label: "Médicos" },
      { href: "#why-diketa", label: "Por qué Diketa" },
      { href: "#faq", label: "Preguntas" },
    ],
    language: {
      ariaLabel: "Idioma",
      options: [
        { label: "ES", href: "/", hrefLang: "es", current: true },
        { label: "EN", href: "/en", hrefLang: "en", current: false },
      ],
    },
    header: {
      homeAriaLabel: "Inicio de Diketa",
      navigationAriaLabel: "Navegación principal",
      mobileNavigationAriaLabel: "Navegación móvil",
      mobileMenuAriaLabel: "Abrir menú de navegación",
    },
    cta: {
      primary: "Únete al acceso anticipado",
      secondary: "Ver cómo funciona",
    },
    hero: {
      eyebrow: "Comunicación privada para cuidado de obesidad y pérdida de peso",
      title: "Mantente en contacto con tu médico antes de que el seguimiento de peso se retrase.",
      body:
        "Diketa ofrece a médicos y pacientes un espacio privado y confiable para cuidado de obesidad y pérdida de peso, con chat seguro, reserva de citas y resultados de laboratorio compartidos cuando el tiempo importa.",
      reassurance: "Privado, organizado y creado alrededor de conversaciones reales de cuidado de peso.",
      image: sharedImageCopy.es.hero,
    },
    reassurance: {
      eyebrow: "Un comienzo más claro",
      title: "Cuando surgen preguntas sobre obesidad o pérdida de peso, la comunicación no debería retrasar el cuidado.",
      cards: [
        {
          title: "Chat privado con el médico",
          body: "Mantén preguntas sobre obesidad y pérdida de peso y respuestas médicas en un espacio de comunicación confiable.",
          accent: "mint",
        },
        {
          title: "Citas de seguimiento más fáciles",
          body: "Ayuda a los pacientes a pasar del mensaje a la cita de cuidado de peso sin perder el hilo.",
          accent: "peach",
        },
        {
          title: "Laboratorios metabólicos seguros",
          body: "Comparte resultados metabólicos y de cuidado de peso en un lugar protegido donde los pacientes puedan encontrarlos cuando los necesiten.",
          accent: "lavender",
        },
      ],
    },
    problem: {
      eyebrow: "Por qué Diketa",
      title: "El cuidado de obesidad y pérdida de peso se vuelve más difícil cuando las conversaciones están dispersas.",
      paragraphs: [
        "Los pacientes que trabajan en obesidad o pérdida de peso a menudo necesitan claridad mientras mensajes, citas y resultados quedan en lugares distintos. Ese retraso puede hacer que el siguiente paso se sienta más difícil de lo necesario.",
        "Diketa ayuda a los médicos a comunicarse con sus pacientes de cuidado de peso más fácilmente mediante chat privado, apoyo para citas y resultados de laboratorio compartidos de forma segura en una experiencia organizada.",
      ],
      image: sharedImageCopy.es.empathy,
    },
    solution: {
      eyebrow: "Cómo ayuda Diketa",
      title: "Una herramienta privada y confiable para la comunicación sobre obesidad y pérdida de peso.",
      body:
        "Diketa ayuda a médicos y pacientes a mantenerse alineados cuando hay una pregunta de cuidado de peso que responder, una cita de seguimiento que reservar o un resultado metabólico que revisar.",
      cards: [
        {
          title: "Chatea sobre cuidado de peso",
          body: "Da a los pacientes un lugar privado para hacer preguntas sobre obesidad y pérdida de peso sin seguimientos dispersos.",
          tone: "teal",
        },
        {
          title: "Reserva la próxima visita de peso",
          body: "Haz que reservar una cita de seguimiento se sienta como parte de la conversación de cuidado de peso, no como una tarea separada.",
          tone: "lavender",
        },
        {
          title: "Comparte laboratorios metabólicos",
          body: "Mantén resultados relevantes accesibles en un espacio confiable diseñado para la comunicación de cuidado de peso.",
          tone: "peach",
        },
        {
          title: "Reduce el contexto perdido",
          body: "Mantén los detalles del cuidado de peso más fáciles de revisar para que médicos y pacientes estén alineados.",
          tone: "ochre",
        },
        {
          title: "Actúa antes",
          body: "Ayuda a los pacientes a dar el siguiente paso en su plan de pérdida de peso antes de que la confusión se convierta en retraso.",
          tone: "cream",
        },
      ],
    },
    howItWorks: {
      eyebrow: "Cómo funciona",
      title: "Tres pasos hacia una comunicación más clara.",
      stepLabel: "Paso",
      steps: [
        {
          title: "Únete al acceso anticipado",
          body: "Regístrate para recibir aviso cuando Diketa abra acceso a la comunicación privada sobre obesidad y pérdida de peso.",
          image: sharedImageCopy.es.steps[0]!,
        },
        {
          title: "Conecta conversaciones de cuidado de peso",
          body: "Médicos y pacientes usan un espacio confiable para chat de cuidado de peso, coordinación de citas y resultados compartidos.",
          image: sharedImageCopy.es.steps[1]!,
        },
        {
          title: "Avanza antes",
          body: "Los pacientes pueden entender más rápido el siguiente paso en su cuidado de obesidad o pérdida de peso, y los médicos pueden comunicarse con menos fricción.",
          image: sharedImageCopy.es.steps[2]!,
        },
      ],
    },
    experts: {
      eyebrow: "Médicos",
      title: "Creado para médicos que quieren que la comunicación sobre peso sea más fácil.",
      body:
        "Diketa apoya relaciones confiables entre médico y paciente en cuidado de obesidad y pérdida de peso al dar a los clínicos una forma más simple de chatear con pacientes, coordinar citas y compartir resultados de laboratorio de forma segura.",
      cards: [
        {
          label: "Cuidado médico de peso",
          specialty: "Medicina de obesidad",
          location: "Comunicación privada",
          trust: "Seguimiento seguro de pacientes",
          cta: "Únete al acceso anticipado",
          image: sharedImageCopy.es.experts[0]!,
        },
        {
          label: "Salud metabólica",
          specialty: "Salud metabólica y pérdida de peso",
          location: "Coordinación de seguimiento",
          trust: "Citas listas para reservar",
          cta: "Únete al acceso anticipado",
          image: sharedImageCopy.es.experts[1]!,
        },
        {
          label: "Apoyo continuo",
          specialty: "Guía de cuidado de peso continuo",
          location: "Laboratorios compartidos con seguridad",
          trust: "Historial de cuidado organizado",
          cta: "Únete al acceso anticipado",
          image: sharedImageCopy.es.experts[2]!,
        },
      ],
    },
    story: {
      eyebrow: "Privado y humano",
      title: "Un lugar más tranquilo para conversaciones importantes de cuidado de peso.",
      paragraphs: [
        "Los pacientes que manejan obesidad o pérdida de peso no deberían tener que perseguir respuestas entre llamadas, portales y recordatorios desconectados. Los médicos no deberían tener que luchar con herramientas fragmentadas solo para mantener informados a sus pacientes.",
        "Diketa está pensado para una comunicación segura y práctica de cuidado de peso: chat privado, citas más fáciles y resultados de laboratorio compartidos en un lugar al que los pacientes pueden volver con confianza.",
      ],
      image: sharedImageCopy.es.story,
    },
    audience: {
      eyebrow: "Para quién es",
      title: "Para equipos de cuidado de peso y pacientes que necesitan próximos pasos más claros.",
      cards: [
        {
          title: "Para médicos que dan seguimiento de peso",
          body: "Comunícate con pacientes de obesidad y pérdida de peso mediante una herramienta privada en lugar de canales dispersos.",
        },
        {
          title: "Para pacientes que trabajan en pérdida de peso",
          body: "Haz preguntas, revisa resultados metabólicos compartidos y entiende qué hacer después.",
        },
        {
          title: "Para clínicas que coordinan citas de obesidad",
          body: "Haz que reservar sea parte del flujo de comunicación de cuidado de peso para que se pierdan menos detalles.",
        },
        {
          title: "Para apoyo continuo en obesidad y pérdida de peso",
          body: "Mantén las conversaciones de cuidado de peso organizadas entre visitas, decisiones y resultados de laboratorio.",
        },
      ],
    },
    product: {
      eyebrow: "Detalle del producto",
      title: "Herramientas de comunicación creadas alrededor de flujos de obesidad y pérdida de peso.",
      details: [
        {
          feature: "Chat seguro de cuidado de peso",
          benefit: "Da a médicos y pacientes un espacio privado y confiable para conversaciones sobre obesidad y pérdida de peso.",
        },
        {
          feature: "Reserva de citas",
          benefit: "Ayuda a los pacientes a reservar la próxima visita de cuidado de peso mientras la necesidad sigue clara.",
        },
        {
          feature: "Resultados de laboratorio",
          benefit: "Comparte resultados metabólicos y relacionados con peso de forma segura y mantenlos fáciles de revisar.",
        },
        {
          feature: "Perfiles médicos",
          benefit: "Ayuda a los pacientes a entender con quién se conectan y por qué el médico puede ser una buena opción para cuidado de peso.",
        },
        {
          feature: "Historial de cuidado de peso organizado",
          benefit: "Mantén mensajes, citas y resultados de laboratorio compartidos más fáciles de revisar con el tiempo.",
        },
      ],
      image: sharedImageCopy.es.product,
    },
    credibility: {
      eyebrow: "Credibilidad",
      title: "Diseñado para confianza, privacidad y claridad más rápida en cuidado de peso.",
      cards: [
        {
          title: "Comunicación confiable",
          body: "Diketa está creado para conversaciones privadas sobre obesidad y pérdida de peso, no para charla pública de bienestar.",
        },
        {
          title: "Intercambio seguro",
          body: "Los laboratorios metabólicos y detalles de cuidado de peso pertenecen a un espacio protegido para comunicación con pacientes.",
        },
        {
          title: "Seguimiento práctico",
          body: "Chat, citas y resultados compartidos ayudan a los pacientes a actuar antes sobre próximos pasos de cuidado de peso.",
        },
      ],
      testimonialsAriaLabel: "Perspectivas de comunicación con pacientes",
      testimonials: [
        "Diketa haría mucho más fácil mantener mis preguntas sobre pérdida de peso, citas de seguimiento y resultados conectados en lugar de perseguir actualizaciones en distintos lugares. ★★★★★ - Laura M.",
        "El chat privado y los resultados de laboratorio compartidos se sienten como justo lo que los pacientes necesitan cuando esperan próximos pasos de cuidado de obesidad. ★★★★★ - Sophia R.",
        "Reservar una visita de cuidado de peso desde el mismo lugar donde hablo con mi médico ahorraría tiempo y reduciría mucha confusión. ★★★★★ - Daniel K.",
      ],
    },
    faq: {
      eyebrow: "Preguntas",
      title: "Preguntas que las personas hacen antes de unirse.",
      items: [
        {
          question: "¿Qué es Diketa?",
          answer:
            "Diketa es una herramienta privada y confiable de comunicación que ayuda a médicos y pacientes a usar chat seguro, reserva de citas y resultados de laboratorio compartidos para cuidado de obesidad y pérdida de peso en un espacio organizado.",
        },
        {
          question: "¿Para quién es Diketa?",
          answer:
            "Diketa es para pacientes que trabajan en objetivos de obesidad o pérdida de peso y para médicos o clínicas que quieren una forma más fácil de gestionar el seguimiento de cuidado de peso.",
        },
        {
          question: "¿Diketa ofrece consejo médico?",
          answer:
            "Diketa ayuda a médicos y pacientes a comunicarse sobre cuidado de obesidad y pérdida de peso. No reemplaza el consejo médico de un profesional calificado ni crea orientación médica por sí solo.",
        },
        {
          question: "¿Los médicos pueden compartir resultados de laboratorio en Diketa?",
          answer:
            "Sí. Diketa está diseñado para apoyar el intercambio seguro de resultados metabólicos y relacionados con peso para que los pacientes puedan revisar información importante en un lugar confiable.",
        },
        {
          question: "¿Los pacientes pueden reservar citas en Diketa?",
          answer:
            "Sí. Diketa está diseñado para que la reserva de citas de cuidado de peso sea parte del flujo de comunicación.",
        },
        {
          question: "¿Cómo empiezo?",
          answer:
            "Únete al acceso anticipado para saber cuándo Diketa abra sus herramientas privadas de comunicación para cuidado de obesidad y pérdida de peso.",
        },
      ],
    },
    finalCta: {
      eyebrow: "Acceso anticipado",
      title: "Únete al acceso anticipado",
      body:
        "Sé de las primeras personas en saber cuándo Diketa lance chat privado entre médico y paciente, reserva de citas de cuidado de peso y resultados de laboratorio compartidos para obesidad y pérdida de peso.",
      googleSignup: true,
      reassurance: "Solo actualizaciones tempranas. La comunicación privada de cuidado de peso llegará pronto.",
      image: sharedImageCopy.es.finalCta,
    },
    footer: {
      tagline: "Comunicación privada y confiable para cuidado de obesidad y pérdida de peso.",
      navigationAriaLabel: "Navegación del pie de página",
      copyright: "Copyright 2026 Diketa. Todos los derechos reservados.",
    },
  },
} satisfies Record<Locale, LandingContent>;

const metadataCopy = {
  en: {
    title: "Diketa",
    description:
      "Diketa gives doctors and patients a trusted private space for obesity and weight-loss care: secure chat, appointments, and shared lab results.",
    ogAlt: "Diketa private obesity and weight-loss care communication preview.",
    openGraphLocale: "en_US",
    alternateLocale: "es_US",
    canonical: "/en",
  },
  es: {
    title: "Diketa",
    description:
      "Diketa ofrece a médicos y pacientes un espacio privado y confiable para cuidado de obesidad y pérdida de peso: chat seguro, citas y resultados de laboratorio compartidos.",
    ogAlt: "Vista previa de la comunicación privada para cuidado de obesidad y pérdida de peso en Diketa.",
    openGraphLocale: "es_US",
    alternateLocale: "en_US",
    canonical: "/",
  },
} satisfies Record<Locale, {
  title: string;
  description: string;
  ogAlt: string;
  openGraphLocale: string;
  alternateLocale: string;
  canonical: string;
}>;

export function getLandingMetadata(locale: Locale): Metadata {
  const copy = metadataCopy[locale];

  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: copy.canonical,
      languages: {
        en: "/en",
        es: "/",
      },
    },
    openGraph: {
      title: copy.title,
      description: copy.description,
      locale: copy.openGraphLocale,
      alternateLocale: copy.alternateLocale,
      images: [
        {
          url: "/images/og/diketa-og-image.jpg",
          width: 1200,
          height: 630,
          alt: copy.ogAlt,
        },
      ],
    },
  };
}
