import React from "react";
import TermsOfServicePage from "@/components/docs/termsofservice";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Terms of Service | ForgeUI",
  description:
    "Review the ForgeUI Terms of Service to understand your rights, responsibilities, and the rules for using our open-source UI components and website.",
};

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
