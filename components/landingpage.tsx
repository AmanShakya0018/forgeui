"use client";
import HeroSection from "./herosection";
import OpenSourceBanner from "./open-source-banner";
import { Spotlight } from "./ui/spotlight";
import Dynamicfeatures from "./dynamic-features-section";
import FAQ from "./faq";

export default function LandingPage() {
  return (
    <div className="container mx-auto max-w-[88rem] space-y-2 py-12 lg:space-y-8 lg:px-8">
      <HeroSection />
      <Dynamicfeatures />
      <FAQ />
      <OpenSourceBanner />
      <Spotlight
        className="-top-[35rem] left-4 lg:-top-[28rem] lg:left-4"
        fill="white"
      />
    </div>
  );
}
