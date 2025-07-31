import React from "react";
import type { Metadata } from "next";
import LivePreviewComponent from "@/components/layout/livepreview";
import TextShimmer from "@/app/(primary)/components/text-shimmer/_components/text-shimmer";

export const metadata: Metadata = {
  title: "Text Shimmer Effect Live Preview | ForgeUI",
  description:
    "Try out ForgeUI's Text Shimmer component in this live preview. Built with React, Tailwind CSS, and Framer Motion, this shimmering text animation is perfect for loading states, placeholders, and modern UI skeleton loaders.",
  keywords: [
    "Text Shimmer Effect Preview",
    "Shimmer Loading Animation",
    "React Text Effects",
    "ForgeUI Text Shimmer",
    "Tailwind CSS Loading UI",
    "Framer Motion Shimmer Effect",
    "UI Component Preview",
    "React UI Playground",
    "Interactive Loading Animation Demo",
    "Reusable React Components",
    "Copy Paste UI Components",
    "Open Source UI Kit",
    "ForgeUI by Aman Shakya",
    "Skeleton Loader Animation",
    "Modern UI Loading Effects",
  ],
  authors: [{ name: "Aman Shakya", url: "https://amanshakya.in" }],
  creator: "Aman Shakya",
  publisher: "Aman Shakya",
  openGraph: {
    title: "Text Shimmer Effect Live Preview | ForgeUI",
    description:
      "Live demo of ForgeUI's Text Shimmer component. Add modern shimmer animations to loading states and placeholders using React, Tailwind CSS, and Framer Motion.",
    url: "https://forgeui.in/components/text-shimmer/preview",
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
    title: "Text Shimmer Effect Live Preview | ForgeUI",
    description:
      "Experience ForgeUI's Text Shimmer component in this interactive preview. Perfect for loading states and skeleton UI, crafted with React, Tailwind CSS, and Framer Motion.",
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
      <TextShimmer className="text-sm" duration={1}>
        Loading...
      </TextShimmer>
    </LivePreviewComponent>
  );
};

export default Preview;
