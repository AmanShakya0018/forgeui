import React from "react";
import TermsOfServicePage from "@/components/docs/termsofservice";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const TermsOfService = () => {
  return (
    <main>
      <Navbar />
      <TermsOfServicePage />
      <Footer />
    </main>
  );
};

export default TermsOfService;
