import React from "react";
import type { Metadata } from "next";
import Animatedotp from "./_components/preview";

export const metadata: Metadata = {
  title: "Animated OTP | ForgeUI",
  description:
    "ForgeUI's Animated OTP Input component lets developers build beautiful, interactive OTP fields with smooth animations using React, Tailwind CSS, and Framer Motion. Perfect for login screens, verification flows, and SaaS apps. Fully customizable, accessible, and easy to integrate with your projects. Copy-paste and enhance user experience with minimal effort.",
  keywords: [
    "Animated OTP Input",
    "React OTP Component",
    "Framer Motion OTP Input",
    "Tailwind CSS OTP Field",
    "ForgeUI Components",
    "OTP Input Animation",
    "Smooth OTP UI",
    "React UI Kit",
    "Frontend Design System",
    "Accessible OTP Fields",
    "Customizable UI Components",
    "Copy Paste UI Components",
    "Next.js UI Components",
    "Verification Input React",
    "Developer Tools",
    "SaaS UI Components",
    "Interactive OTP Input React",
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
      "Animated OTP Input Component for React — Smooth & Accessible UI | ForgeUI",
    description:
      "Create stunning OTP input fields with ForgeUI's React component. Smooth animations, accessible design, and easy integration using Tailwind CSS & Framer Motion. Perfect for login and verification flows.",
    url: "https://forgeui.in/components/animated-otp",
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
      "Animated OTP Input Component for React — Smooth & Accessible UI | ForgeUI",
    description:
      "ForgeUI's Animated OTP Input component enables smooth, accessible, and customizable OTP fields in React apps. Built with TailwindCSS & Framer Motion.",
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
  return <Animatedotp />;
};

export default Page;
