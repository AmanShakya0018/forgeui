import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import PrivacyPolicyPage from "@/components/docs/privacypolicy";
import React from "react";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacy Policy | ForgeUI",
  description:
    "Read the ForgeUI privacy policy to understand how we collect, use, and protect your data when you use our open-source UI components.",
};

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
