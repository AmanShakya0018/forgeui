import React from "react";
import type { Metadata } from "next";
import LivePreviewComponent from "@/components/layout/livepreview";
import { LivePreviewAnimatedOTP } from "@/app/(primary)/components/animated-otp/_components/preview";

export const metadata: Metadata = {
  title: "Animated OTP Preview | ForgeUI",
  description:
    "Beautiful animated OTP input component built with React, Tailwind CSS and Framer Motion. Copy and paste into your projects. Free, open-source UI component.",
  keywords: [
    "animated otp",
    "otp input",
    "react otp",
    "otp component",
    "framer motion otp",
    "tailwind css otp",
    "forgeui",
    "ui component",
    "open source ui",
  ],
  authors: [{ name: "Aman Shakya", url: "https://amanshakya.in" }],
  creator: "Aman Shakya",
  publisher: "Aman Shakya",
  openGraph: {
    title: "Animated OTP Preview | ForgeUI",
    description:
      "Beautiful animated OTP input component built with React, Tailwind CSS and Framer Motion. Free, open-source UI component.",
    url: "https://forgeui.in/components/animated-otp/preview",
    siteName: "ForgeUI",
    images: [
      {
        url: "https://forgeui.in/ogimage-forgeui.png",
        width: 1200,
        height: 630,
        alt: "Animated OTP Preview | ForgeUI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Animated OTP Preview | ForgeUI",
    description:
      "Beautiful animated OTP input component built with React, Tailwind CSS and Framer Motion.",
    images: ["https://forgeui.in/ogimage-forgeui.png"],
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
      <LivePreviewAnimatedOTP />
    </LivePreviewComponent>
  );
};

export default Preview;