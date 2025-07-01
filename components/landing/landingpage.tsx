import HeroSection from "@/components/landing/herosection";
import { Spotlight } from "../ui/spotlight";
import LandingNavbar from "./landing-navbar";
import FeaturesBlock from "../features/features-block";
import LandingCta from "./landing-cta";
import LandingFooter from "./landing-footer";

export default function LandingPage() {
  return (
    <div className="bg-black">
      <LandingNavbar />
      <div className="mx-auto max-w-[95.8rem]">
        <div className="mx-auto max-w-7xl px-3 md:px-5 lg:px-8">
          <HeroSection />
          <FeaturesBlock />
          <LandingCta />
          <Spotlight />
        </div>
      </div>
      <LandingFooter />
    </div>
  );
}
