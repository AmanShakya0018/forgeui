import React from "react";
import type { Metadata } from "next";
import LivePreviewComponent from "@/components/layout/livepreview";
import TextReveal from "@/app/(primary)/components/text-reveal/_components/text-reveal";

export const metadata: Metadata = {
  title: "Text Reveal Effect Live Preview | ForgeUI",
  description:
    "Experience ForgeUI's Text Reveal component in this live interactive preview. Built with React, Tailwind CSS, and Framer Motion, this effect animates text reveal with smooth staggered transitions. Ideal for landing pages, hero sections, and engaging UI animations.",
  keywords: [
    "Text Reveal Effect Preview",
    "Animated Text Component",
    "React Text Animation",
    "ForgeUI Text Reveal",
    "Tailwind CSS Text Effects",
    "Framer Motion Text Animation",
    "UI Component Preview",
    "React UI Playground",
    "Interactive Text Animation Demo",
    "Reusable React Components",
    "Copy Paste UI Components",
    "Open Source UI Kit",
    "ForgeUI by Aman Shakya",
    "Hero Section Text Effects",
    "Landing Page Animations",
  ],
  authors: [{ name: "Aman Shakya", url: "https://amanshakya.in" }],
  creator: "Aman Shakya",
  publisher: "Aman Shakya",
  openGraph: {
    title: "Text Reveal Effect Live Preview | ForgeUI",
    description:
      "Live interactive demo of ForgeUI's Text Reveal component. Create smooth, staggered text animations for landing pages and modern UIs using React, Tailwind CSS, and Framer Motion.",
    url: "https://forgeui.in/components/text-reveal/preview",
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
    title: "Text Reveal Effect Live Preview | ForgeUI",
    description:
      "Check out ForgeUI's Text Reveal component in action. Ideal for modern landing pages and hero sections, crafted with React, Tailwind CSS, and Framer Motion.",
    images: ["https://forgeui.in/forgeui-ogimage-v2.png"],
    site: "@amanshakya0018",
    creator: "@amanshakya0018",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const text = `ForgeUI is a beautifully designed component library built with Tailwind CSS and Motion. It helps developers build modern, animated UIs faster, with consistent styling and production-ready components.
`;

const Preview = () => {
  return (
    <LivePreviewComponent>
      <TextReveal
        staggerDelay={0.2}
        text={text}
        className="mx-auto max-w-3xl text-lg font-semibold"
      />
    </LivePreviewComponent>
  );
};

export default Preview;
