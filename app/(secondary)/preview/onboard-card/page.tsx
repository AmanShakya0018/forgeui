import React from "react";
import type { Metadata } from "next";
import { LivePreviewOnboardCard } from "@/app/(primary)/components/onboard-card/_components/preview";

export const metadata: Metadata = {
  title: "Onboard Card Preview | ForgeUI",
  description:
    "Beautiful onboard card component built with React, Tailwind CSS and Framer Motion. Copy and paste into your projects. Free, open-source UI component.",
  keywords: [
    "onboard card",
    "onboarding card",
    "react card",
    "framer motion card",
    "tailwind css card",
    "forgeui",
    "ui component",
    "open source ui",
  ],
  authors: [{ name: "Aman Shakya", url: "https://amanshakya.in" }],
  creator: "Aman Shakya",
  publisher: "Aman Shakya",
  openGraph: {
    title: "Onboard Card Preview | ForgeUI",
    description:
      "Beautiful onboard card component built with React, Tailwind CSS and Framer Motion. Free, open-source UI component.",
    url: "https://forgeui.in/components/onboard-card/preview",
    siteName: "ForgeUI",
    images: [
      {
        url: "https://forgeui.in/ogimage-forgeui.png",
        width: 1200,
        height: 630,
        alt: "Onboard Card Preview | ForgeUI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Onboard Card Preview | ForgeUI",
    description:
      "Beautiful onboard card component built with React, Tailwind CSS and Framer Motion.",
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
  return <LivePreviewOnboardCard />;
};

export default Preview;