import React from "react";
import type { Metadata } from "next";
import Securitycard from "./_components/preview";

export const metadata: Metadata = {
  title: "Security Card | ForgeUI",
  description:
    "ForgeUI's Security Card component allows developers to display security statuses, protection indicators, and threat alerts with a sleek, animated UI using React, Tailwind CSS, and Framer Motion. Perfect for dashboards, fintech platforms, admin panels, and SaaS applications. Fully customizable, accessible, and easy to integrate into any project.",
  keywords: [
    "Security Card Component",
    "React Security Status UI",
    "Tailwind CSS Security Card",
    "ForgeUI Components",
    "Threat Alert UI React",
    "Protection Level Indicators",
    "Admin Panel Security Components",
    "React UI Kit",
    "Frontend Design System",
    "Accessible Security Components",
    "Customizable UI Components",
    "Copy Paste UI Components",
    "Next.js UI Components",
    "Security Dashboard UI",
    "Developer Tools",
    "SaaS Security Components",
    "Risk Alert Visualization",
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
      "Security Card Component for React — Visual Security Status & Alerts UI | ForgeUI",
    description:
      "Design interactive security status cards with ForgeUI's React component. Smooth animations, accessible design, and easy integration using Tailwind CSS & Framer Motion.",
    url: "https://forgeui.in/components/security-card",
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
      "Security Card Component for React — Visual Security Status & Alerts UI | ForgeUI",
    description:
      "ForgeUI's Security Card component enables developers to build smooth, customizable security status visuals in React apps using TailwindCSS & Framer Motion.",
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
  return <Securitycard />;
};

export default Page;
