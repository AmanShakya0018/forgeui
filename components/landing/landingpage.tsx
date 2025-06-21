import HeroSection from "@/components/herosection";
import { Spotlight } from "../ui/spotlight";
import LandingNavbar from "./landing-navbar";
import FeaturesBlock from "../features/features-block";

export default function LandingPage() {
  return (
    <>
      <LandingNavbar />
      <div className="mx-auto max-w-[95.8rem]">
        <div className="mx-auto max-w-7xl px-3 md:px-5 lg:px-8">
          <HeroSection />
          <FeaturesBlock />
          <Spotlight />
        </div>
      </div>
    </>
  );
}
