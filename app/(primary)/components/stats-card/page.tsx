import React from "react";
import type { Metadata } from "next";
import Statscard from "./_components/preview";

export const metadata: Metadata = {
  title: "Stats Card | ForgeUI",
  description:
    "ForgeUI's Stats Card component enables developers to showcase key metrics, KPIs, and analytics data in a clean, animated card layout using React, Tailwind CSS, and Framer Motion. Ideal for dashboards, admin panels, SaaS products, and landing pages. Fully customizable, accessible, and designed to elevate your data visualization UI.",
  keywords: [
    "Stats Card Component",
    "React Analytics UI",
    "KPI Dashboard Cards",
    "Tailwind CSS Stats Card",
    "ForgeUI Components",
    "Data Visualization UI",
    "Performance Metrics UI",
    "React UI Kit",
    "Frontend Design System",
    "Accessible Stats Components",
    "Customizable UI Components",
    "Copy Paste UI Components",
    "Next.js UI Components",
    "SaaS Dashboard Components",
    "Developer Tools",
    "Admin Panel Metrics UI",
    "Analytics Card React",
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
      "Stats Card Component for React — Beautiful KPI & Analytics UI | ForgeUI",
    description:
      "Design sleek analytics and stats cards with ForgeUI's React component. Smooth animations, accessible design, and seamless integration with Tailwind CSS & Framer Motion.",
    url: "https://forgeui.in/components/stats-card",
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
      "Stats Card Component for React — Beautiful KPI & Analytics UI | ForgeUI",
    description:
      "ForgeUI's Stats Card component helps developers display key performance metrics and analytics in React apps using TailwindCSS & Framer Motion.",
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
  return <Statscard />;
};

export default Page;
