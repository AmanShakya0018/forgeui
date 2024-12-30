import HeroSection from './herosection'
import FeaturesSectionDemo from './features-section'
import OpenSourceBanner from './open-source-banner'

export default function LandingPage() {
  return (
    <div className="container max-w-[88rem] mx-auto px-8 py-12 space-y-2 lg:space-y-8">
      <HeroSection />
      <FeaturesSectionDemo />
      <OpenSourceBanner />
    </div>
  )
}
