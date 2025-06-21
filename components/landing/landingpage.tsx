import HeroSection from "@/components/herosection";
import Footer from "../footer";
import { Spotlight } from "../ui/spotlight";
import LandingNavbar from "./landing-navbar";

export default function LandingPage() {
  return (
    <>
      <LandingNavbar />
      <div className="mx-auto max-w-[95.8rem]">
        <div className="mx-auto max-w-7xl">
          <HeroSection />
          <Spotlight />
        </div>
      </div>
      <Footer />
    </>
  );
}
