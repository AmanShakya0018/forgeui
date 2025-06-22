import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import PrivacyPolicyPage from "@/components/docs/privacypolicy";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <main>
      <Navbar />
      <PrivacyPolicyPage />
      <Footer />
    </main>
  );
};

export default PrivacyPolicy;
