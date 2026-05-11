import { LandingPage } from "./landing-page";
import { getLandingMetadata, landingContent } from "../lib/landing-content";

export const metadata = getLandingMetadata("es");

export default function Page() {
  return <LandingPage content={landingContent.es} />;
}
