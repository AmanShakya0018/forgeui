import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import PrivacyPolicyPage from "@/components/docs/privacypolicy";
import React from "react";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacy Policy | ForgeUI",
  description:
    "Read ForgeUI's Privacy Policy to understand how we collect, use, and protect your personal information when you use our open-source React components library built with Tailwind CSS and Framer Motion. Transparency, data protection, and user privacy are our priorities.",
  keywords: [
    "ForgeUI Privacy Policy",
    "Privacy Policy",
    "Data Protection",
    "User Privacy",
    "ForgeUI Data Usage",
    "Open Source UI Library Policy",
    "React Components Privacy",
    "Tailwind CSS UI Components",
    "ForgeUI Documentation",
    "ForgeUI by Aman Shakya",
    "Developer Tools Policy",
    "Frontend Design System Policy",
  ],
  authors: [{ name: "Aman Shakya", url: "https://amanshakya.in" }],
  creator: "Aman Shakya",
  publisher: "Aman Shakya",
  openGraph: {
    title: "Privacy Policy | ForgeUI — Open Source UI Components Library",
    description:
      "Learn how ForgeUI collects, uses, and protects your data. Read our Privacy Policy to stay informed about data privacy when using ForgeUI's React component library.",
    url: "https://forgeui.in/privacy-policy",
    siteName: "ForgeUI",
    images: [
      {
        url: "https://forgeui.in/forgeui-ogimage-v2.png",
        width: 1200,
        height: 630,
        alt: "ForgeUI Privacy Policy Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | ForgeUI — Open Source UI Components Library",
    description:
      "Understand how ForgeUI handles your data. Read our Privacy Policy for transparency on data collection, usage, and privacy practices.",
    images: ["https://forgeui.in/forgeui-ogimage-v2.png"],
    site: "@amanshakya0018",
    creator: "@amanshakya0018",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "legal",
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
