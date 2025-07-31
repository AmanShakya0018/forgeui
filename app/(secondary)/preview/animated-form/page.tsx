import React from "react";
import type { Metadata } from "next";
import LivePreviewComponent from "@/components/layout/livepreview";
import AnimatedForm from "@/app/(primary)/components/animated-form/_components/animated-form";

export const metadata: Metadata = {
  title: "Animated Form Live Preview | ForgeUI",
  description:
    "Experience the Animated Form component from ForgeUI in a live interactive preview. Built with React, Tailwind CSS, and Framer Motion, this form delivers smooth animations and a seamless user experience. Easily copy and paste into your projects.",
  keywords: [
    "Animated Form Preview",
    "Live UI Component Demo",
    "React Form Animation",
    "ForgeUI Animated Form",
    "Framer Motion Forms",
    "Tailwind CSS Form Component",
    "ForgeUI Component Preview",
    "React UI Playground",
    "Interactive Component Demo",
    "Reusable React Components",
    "Copy Paste UI Components",
    "Open Source UI Kit",
    "ForgeUI by Aman Shakya",
  ],
  authors: [{ name: "Aman Shakya", url: "https://amanshakya.in" }],
  creator: "Aman Shakya",
  publisher: "Aman Shakya",
  openGraph: {
    title: "Animated Form Live Preview | ForgeUI",
    description:
      "See ForgeUI's Animated Form component in action with this live interactive demo. Built with React, Tailwind CSS & Framer Motion for smooth animations and responsive design.",
    url: "https://forgeui.in/components/animated-form/preview",
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
    title: "Animated Form Live Preview | ForgeUI",
    description:
      "Interactive live demo of ForgeUI's Animated Form component built with React, Tailwind CSS, and Framer Motion.",
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
      <AnimatedForm />
    </LivePreviewComponent>
  );
};

export default Preview;
