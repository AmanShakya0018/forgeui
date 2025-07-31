import React from "react";
import type { Metadata } from "next";
import LivePreviewComponent from "@/components/layout/livepreview";
import StatsCard from "@/app/(primary)/components/stats-card/_components/statscard";

export const metadata: Metadata = {
  title: "Stats Card Live Preview | ForgeUI",
  description:
    "Explore ForgeUI's Stats Card component in this live interactive preview. Built with React, Tailwind CSS, and Framer Motion, this component beautifully displays key metrics, analytics, and performance stats in a clean, responsive layout. Perfect for dashboards, SaaS apps, and admin panels.",
  keywords: [
    "Stats Card Preview",
    "Analytics UI Component",
    "React Dashboard Cards",
    "ForgeUI Stats Card",
    "Tailwind CSS Analytics UI",
    "Framer Motion Metrics UI",
    "UI Component Preview",
    "React UI Playground",
    "Interactive Stats Component Demo",
    "Reusable React Components",
    "Copy Paste UI Components",
    "Open Source UI Kit",
    "ForgeUI by Aman Shakya",
    "SaaS Dashboard UI",
    "Performance Metrics Card",
  ],
  authors: [{ name: "Aman Shakya", url: "https://amanshakya.in" }],
  creator: "Aman Shakya",
  publisher: "Aman Shakya",
  openGraph: {
    title: "Stats Card Live Preview | ForgeUI",
    description:
      "Live demo of ForgeUI's Stats Card component. Display key metrics and analytics with a clean, responsive UI built using React, Tailwind CSS, and Framer Motion.",
    url: "https://forgeui.in/components/stats-card/preview",
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
    title: "Stats Card Live Preview | ForgeUI",
    description:
      "Experience ForgeUI's Stats Card component in this live interactive preview. Perfect for SaaS dashboards and analytics panels, crafted with React, Tailwind CSS, and Framer Motion.",
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
      <StatsCard />
    </LivePreviewComponent>
  );
};

export default Preview;
