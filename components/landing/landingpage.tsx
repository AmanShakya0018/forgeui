import HeroSection from "@/components/herosection";
import Footer from "../footer";
import Navbar from "../navbar";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-[95.8rem] border border-x">
        <div className="mx-auto max-w-7xl">
          <HeroSection />
        </div>
      </div>
      <Footer />
    </>
  );
}
