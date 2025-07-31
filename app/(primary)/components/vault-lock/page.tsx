import React from "react";
import type { Metadata } from "next";
import Vaultlock from "./_components/preview";

export const metadata: Metadata = {
  title: "Vault Lock | ForgeUI",
  description:
    "ForgeUI's Vault Lock component enables developers to visually represent secure access states, encryption locks, and protected data vaults using React, Tailwind CSS, and Framer Motion. Perfect for fintech apps, security dashboards, SaaS platforms, and user account security flows. Fully customizable, accessible, and easy to integrate into your projects.",
  keywords: [
    "Vault Lock Component",
    "React Security Lock UI",
    "Encrypted Vault UI",
    "Tailwind CSS Security Components",
    "ForgeUI Components",
    "Data Protection UI React",
    "Secure Access Visuals",
    "React UI Kit",
    "Frontend Design System",
    "Accessible Security Components",
    "Customizable UI Components",
    "Copy Paste UI Components",
    "Next.js UI Components",
    "Fintech Security UI",
    "Developer Tools",
    "SaaS Dashboard Security",
    "Data Encryption Visualization",
    "ForgeUI by Aman Shakya",
    "Reusable React Components",
    "Motion UI React",
    "Frontend Engineer Tools",
  ],
  authors: [{ name: "Aman Shakya", url: "https://amanshakya.in" }],
  creator: "Aman Shakya",
  publisher: "Aman Shakya",
  openGraph: {
    title:
      "Vault Lock Component for React — Secure Access & Encryption UI | ForgeUI",
    description:
      "Design sleek vault lock visuals with ForgeUI's React component. Smooth animations, accessible design, and seamless integration using Tailwind CSS & Framer Motion.",
    url: "https://forgeui.in/components/vault-lock",
    siteName: "ForgeUI",
    images: [
      {
        url: "https://forgeui.in/forgeui-ogimage-v2.png",
        width: 1200,
        height: 630,
        alt: "ForgeUI Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Vault Lock Component for React — Secure Access & Encryption UI | ForgeUI",
    description:
      "ForgeUI's Vault Lock component helps developers build secure access UI visuals in React apps using TailwindCSS & Framer Motion.",
    images: ["https://forgeui.in/forgeui-ogimage-v2.png"],
    site: "@amanshakya0018",
    creator: "@amanshakya0018",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <Vaultlock />;
};

export default Page;
