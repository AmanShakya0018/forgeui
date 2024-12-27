import HeroSection from './herosection'
import Faq from './faq'

export default function LandingPage() {
  return (
    <div className="container max-w-[88rem] mx-auto px-8 py-12 space-y-24">
      <HeroSection />
      <Faq />
    </div>
  )
}
