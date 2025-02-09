import HeroSection from './herosection'
import FeaturesSectionDemo from './features-section'
import OpenSourceBanner from './open-source-banner'
import { Spotlight } from './ui/spotlight'
import { TiltedScroll } from './tilted-scroll'

export default function LandingPage() {

  // const customItems = [
  //   { id: "1", text: "Feature One" },
  //   { id: "2", text: "Feature Two" },
  //   { id: "3", text: "Feature Three" },
  //   { id: "4", text: "Feature Four" },
  //   { id: "5", text: "Feature Five" },
  // ]
  return (
    <div className="container max-w-[88rem] mx-auto px-8 py-12 space-y-2 lg:space-y-8">
      <HeroSection />
      <TiltedScroll
        // items={customItems}
        className="mt-8"
      />
      <FeaturesSectionDemo />
      <OpenSourceBanner />
      <Spotlight
        className="-top-[32rem] left-4 lg:left-4 lg:-top-80"
        fill="white"
      />
    </div>
  )
}
