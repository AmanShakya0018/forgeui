import React from "react";
import TermsOfServicePage from "@/components/docs/termsofservice";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Terms of Service | ForgeUI",
  description:
    "Review ForgeUI's Terms of Service to understand your rights, responsibilities, and the rules for using our open-source React component library built with Tailwind CSS and Framer Motion. Ensure proper usage and compliance while integrating ForgeUI components into your projects.",
  keywords: [
    "ForgeUI Terms of Service",
    "Terms of Service",
    "Usage Policy",
    "Open Source UI Components License",
    "ForgeUI Documentation",
    "React Component Library Terms",
    "Tailwind CSS UI Components",
    "Developer Tools Usage Terms",
    "Frontend Design System Terms",
    "ForgeUI by Aman Shakya",
    "Component Library Usage Rights",
    "ForgeUI Legal Policy",
  ],
  authors: [{ name: "Aman Shakya", url: "https://amanshakya.in" }],
  creator: "Aman Shakya",
  publisher: "Aman Shakya",
  openGraph: {
    title: "Terms of Service | ForgeUI — Open Source UI Components Library",
    description:
      "Understand the rules, rights, and responsibilities for using ForgeUI's open-source React component library. Read our Terms of Service for detailed guidelines.",
    url: "https://forgeui.in/terms-of-service",
    siteName: "ForgeUI",
    images: [
      {
        url: "https://forgeui.in/forgeui-ogimage-v2.png",
        width: 1200,
        height: 630,
        alt: "ForgeUI Terms of Service Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | ForgeUI — Open Source UI Components Library",
    description:
      "Review ForgeUI's Terms of Service to understand the guidelines and responsibilities when using our open-source React components.",
    images: ["https://forgeui.in/forgeui-ogimage-v2.png"],
    site: "@amanshakya0018",
    creator: "@amanshakya0018",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "legal",
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
