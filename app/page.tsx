import FeedbackButton from "@/components/feedback";
import Footer from "@/components/footer";
import LandingPage from "@/components/landingpage";
import Navbar from "@/components/navbar";
import React from "react";

const home = () => {
  return (
    <main>
      <Navbar />
      <div className="relative min-h-screen">
        <LandingPage />
        <FeedbackButton />
      </div>
      <Footer />
    </main>
  );
};

export default home;
