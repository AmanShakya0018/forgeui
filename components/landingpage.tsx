import HeroSection from './herosection'
import FeaturesSectionDemo from './features-section'
import OpenSourceBanner from './open-source-banner'
import { Spotlight } from './ui/spotlight'

export default function LandingPage() {
  return (
    <div className="container max-w-[88rem] mx-auto px-8 py-12 space-y-2 lg:space-y-8">
      <HeroSection />
      <FeaturesSectionDemo />
      <OpenSourceBanner />
      <Spotlight
        className="-top-[32rem] left-4 lg:left-4 lg:-top-80"
        fill="white"
      />
    </div>
  )
}
