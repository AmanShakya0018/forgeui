import React from "react";
import type { Metadata } from "next";
import LivePreviewComponent from "@/components/layout/livepreview";
import AnimatedOTP from "@/app/(primary)/components/animated-otp/_components/animated-otp";

export const metadata: Metadata = {
  title: "Animated OTP Input Live Preview | ForgeUI",
  description:
    "Interact with ForgeUI's Animated OTP Input component in this live preview. Built with React, Tailwind CSS, and Framer Motion, this OTP input ensures smooth animations, responsive design, and a seamless user experience. Copy-paste ready for your projects.",
  keywords: [
    "Animated OTP Preview",
    "OTP Input Component Demo",
    "React OTP Animation",
    "ForgeUI OTP Input",
    "Framer Motion OTP Field",
    "Tailwind CSS OTP Input",
    "UI Component Preview",
    "React UI Playground",
    "Interactive OTP Component",
    "Reusable React Components",
    "Copy Paste UI Components",
    "Open Source UI Kit",
    "ForgeUI by Aman Shakya",
  ],
  authors: [{ name: "Aman Shakya", url: "https://amanshakya.in" }],
  creator: "Aman Shakya",
  publisher: "Aman Shakya",
  openGraph: {
    title: "Animated OTP Input Live Preview | ForgeUI",
    description:
      "See ForgeUI's Animated OTP Input component in action with this live interactive demo. Built with React, Tailwind CSS & Framer Motion for smooth animations and accessibility.",
    url: "https://forgeui.in/components/animated-otp/preview",
    siteName: "ForgeUI",
    images: [
      {
        url: "https://forgeui.in/forgeui-ogimage-v2.png",
        width: 1200,
        height: 630,
        alt: "ForgeUI Component Preview Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Animated OTP Input Live Preview | ForgeUI",
    description:
      "Live demo of ForgeUI's Animated OTP Input component with smooth animations, responsive UI, and accessible design.",
    images: ["https://forgeui.in/forgeui-ogimage-v2.png"],
    site: "@amanshakya0018",
    creator: "@amanshakya0018",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Preview = () => {
  return (
    <LivePreviewComponent>
      <AnimatedOTP />
    </LivePreviewComponent>
  );
};

export default Preview;
