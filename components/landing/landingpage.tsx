import HeroSection from "@/components/herosection";
import Dynamicfeatures from "@/components/dynamic-features-section";
import FAQ from "@/components/faq";
import Footer from "../footer";
import Navbar from "../navbar";
import FeedbackButton from "../feedback";
import { Spotlight } from "@/components/ui/spotlight";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-[95.8rem] border border-x">
        <div className="mx-auto max-w-7xl space-y-2 py-12 lg:space-y-8 lg:px-8">
          <HeroSection />
          <Dynamicfeatures />
          <FAQ />
          <Spotlight
            className="-top-[35rem] left-4 lg:-top-[28rem] lg:left-4"
            fill="white"
          />
        </div>
      </div>
      <FeedbackButton />
      <Footer />
    </>
  );
}
