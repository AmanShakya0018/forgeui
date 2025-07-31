import React from "react";
import type { Metadata } from "next";
import LivePreviewComponent from "@/components/layout/livepreview";
import FrameworkAgnostic from "@/app/(primary)/components/framework-agnostic/_components/framework-agnostic";

export const metadata: Metadata = {
  title: "Framework Agnostic Card Live Preview | ForgeUI",
  description:
    "Explore ForgeUI's Framework Agnostic Card component in this interactive live preview. Designed with portability in mind, this component works seamlessly across React, Next.js, and other frontend frameworks. Built with Tailwind CSS and Framer Motion, it’s fully responsive and easy to integrate.",
  keywords: [
    "Framework Agnostic UI",
    "Framework Agnostic Card Preview",
    "Reusable UI Components",
    "React Framework Independent Components",
    "ForgeUI Framework Agnostic",
    "Tailwind CSS Components",
    "UI Component Preview",
    "React UI Playground",
    "Open Source UI Kit",
    "Copy Paste UI Components",
    "Frontend Design Systems",
    "Framer Motion Card",
    "ForgeUI by Aman Shakya",
  ],
  authors: [{ name: "Aman Shakya", url: "https://amanshakya.in" }],
  creator: "Aman Shakya",
  publisher: "Aman Shakya",
  openGraph: {
    title: "Framework Agnostic Card Live Preview | ForgeUI",
    description:
      "Live demo of ForgeUI's Framework Agnostic Card component, designed to work seamlessly across frontend frameworks. Built with Tailwind CSS & Framer Motion.",
    url: "https://forgeui.in/components/framework-agnostic/preview",
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
    title: "Framework Agnostic Card Live Preview | ForgeUI",
    description:
      "See ForgeUI's Framework Agnostic Card component in action with this interactive live preview. Built for flexibility, portability, and clean UI across frameworks.",
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
      <FrameworkAgnostic />
    </LivePreviewComponent>
  );
};

export default Preview;
