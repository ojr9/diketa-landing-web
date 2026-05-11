import { LandingPage } from "../landing-page";
import { getLandingMetadata, landingContent } from "../../lib/landing-content";

export const metadata = getLandingMetadata("en");

export default function EnglishPage() {
  return <LandingPage content={landingContent.en} />;
}
