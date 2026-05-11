import type { StaticImageData } from "next/image";

import doctorOneImage from "../assets/1.png";
import doctorTwoImage from "../assets/2.png";
import doctorThreeImage from "../assets/3.png";
import handshakeImage from "../assets/handshake.png";
import handshakeTwoImage from "../assets/handshake2.png";

export interface LandingImage {
  id: string;
  section: string;
  purpose: string;
  src: string | StaticImageData;
  alt: string;
  helpText: string;
  replacementGuidance: string;
}

export const landingImages = {
  hero: {
    id: "hero-private-care-communication",
    section: "Hero",
    purpose: "Make the first impression feel trusted, private, and reassuring.",
    src: handshakeImage,
    alt: "A doctor warmly greeting a patient during a reassuring consultation.",
    helpText:
      "Use this doctor-patient meeting image to show trust, privacy, and professional reassurance.",
    replacementGuidance:
      "Keep the crop focused on the calm doctor-patient interaction. Avoid scale imagery, before-and-after bodies, intense workouts, or exaggerated wellness visuals.",
  },
  empathy: {
    id: "empathy-reviewing-options",
    section: "Empathy",
    purpose: "Show a quiet, relatable decision-making moment.",
    src: "/images/landing/empathy-reviewing-options.jpg",
    alt: "A person thoughtfully reviewing weight loss support options.",
    helpText:
      "Use an image that communicates reflection and real-life decision-making. The person should look supported and thoughtful, not stressed or ashamed.",
    replacementGuidance:
      "Avoid negative body language, diet-culture imagery, measuring tapes, scales, or anything that suggests judgment.",
  },
  story: {
    id: "private-care-conversation",
    section: "Private Communication",
    purpose: "Ground the page in a respectful doctor-patient relationship.",
    src: handshakeTwoImage,
    alt: "A doctor and patient meeting with calm, supportive body language.",
    helpText:
      "Use this doctor-patient meeting image to reinforce secure, supportive communication.",
    replacementGuidance:
      "Choose crops that feel respectful, calm, and private. Avoid visual cliches about dieting, body transformation, or shame.",
  },
  product: {
    id: "product-warm-workspace",
    section: "Product Detail",
    purpose: "Show the product in a calm real-world context.",
    src: "/images/landing/product-warm-workspace.jpg",
    alt: "Diketa expert profiles shown on a laptop in a warm workspace.",
    helpText:
      "Use this image to show the product in context. The interface should feel clear, calm, and easy to use.",
    replacementGuidance:
      "Show simple expert profile cards, location details, and clear CTAs. Avoid cluttered dashboards or medical-looking interfaces.",
  },
  finalCta: {
    id: "final-clarity-moment",
    section: "Final CTA",
    purpose: "End with quiet confidence and a sense of calm progress.",
    src: "/images/landing/final-clarity-moment.jpg",
    alt: "A person moving forward with clarity after finding support.",
    helpText:
      "Use an image that feels hopeful, grounded, and calm. Avoid dramatic transformation or success imagery.",
    replacementGuidance:
      "Show quiet confidence and relief. Do not show body comparison, scales, or intense exercise.",
  },
} satisfies Record<string, LandingImage>;

export const howItWorksImages: LandingImage[] = [
  {
    id: "step-local-search",
    section: "How it works",
    purpose: "Represent the simple local starting point.",
    src: "/images/landing/step-local-search.jpg",
    alt: "A person searching for local weight loss experts.",
    helpText:
      "Use an image that communicates a simple, local beginning. Avoid complex maps or overly technical search UI.",
    replacementGuidance:
      "Prefer simple, warm local search or map-inspired visuals with clear focus.",
  },
  {
    id: "step-expert-profiles",
    section: "How it works",
    purpose: "Show calm expert comparison.",
    src: "/images/landing/step-expert-profiles.jpg",
    alt: "Trusted weight loss expert profiles shown in Diketa.",
    helpText:
      "Use this image to show clarity and comparison. Profiles should look respectful and professional.",
    replacementGuidance:
      "Use profile cards with helpful details. Avoid ratings, reviews, or credentials until real data is available.",
  },
  {
    id: "step-next-step",
    section: "How it works",
    purpose: "Communicate progress without pressure.",
    src: "/images/landing/step-next-step.jpg",
    alt: "A person choosing a weight loss expert with confidence.",
    helpText:
      "Use an image that communicates progress, not pressure. Avoid exaggerated success imagery.",
    replacementGuidance:
      "Show a calm booking or next-step confirmation. Avoid urgent conversion language.",
  },
];

export const expertImages: LandingImage[] = [
  {
    id: "doctor-portrait-1",
    section: "Doctors",
    purpose: "Show a trusted doctor profile preview.",
    src: doctorOneImage,
    alt: "Portrait of a trusted doctor in a white coat.",
    helpText:
      "Use this portrait as a doctor profile preview.",
    replacementGuidance:
      "Use consistent lighting and framing. Avoid overly corporate headshots, clinical harshness, or influencer-style photography.",
  },
  {
    id: "doctor-portrait-2",
    section: "Doctors",
    purpose: "Show a trusted doctor profile preview.",
    src: doctorTwoImage,
    alt: "Portrait of a trusted doctor in a white coat.",
    helpText:
      "Use this portrait as a doctor profile preview.",
    replacementGuidance:
      "Use consistent lighting and framing. Avoid overly corporate headshots, clinical harshness, or influencer-style photography.",
  },
  {
    id: "doctor-portrait-3",
    section: "Doctors",
    purpose: "Show a trusted doctor profile preview.",
    src: doctorThreeImage,
    alt: "Portrait of a trusted doctor in a white coat.",
    helpText:
      "Use this portrait as a doctor profile preview.",
    replacementGuidance:
      "Use consistent lighting and framing. Avoid overly corporate headshots, clinical harshness, or influencer-style photography.",
  },
];
