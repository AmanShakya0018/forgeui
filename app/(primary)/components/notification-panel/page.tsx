import React from "react";
import type { Metadata } from "next";
import Notificationpanel from "./_components/preview";

export const metadata: Metadata = {
  title: "Notification Panel | ForgeUI Pro",
  description:
    "ForgeUI Pro's Notification Panel component provides smooth, animated notifications using Framer Motion. Built with React and Tailwind CSS, it’s ideal for dashboards, SaaS apps, and modern web interfaces, offering customizable and accessible alert designs.",
  keywords: [
    "Notification Panel Component",
    "React Notification UI",
    "Framer Motion Notifications",
    "Animated Alert Component",
    "Tailwind CSS UI",
    "ForgeUI Pro Components",
    "Dashboard Notification UI",
    "React UI Kit",
    "Premium React Components",
    "Frontend Design System",
    "Accessible React Components",
    "Customizable UI Components",
    "Next.js UI Components",
    "Modern SaaS Components",
    "Alert UI React",
    "Notification Toast React",
    "Interactive UI Elements",
    "ForgeUI Pro by Aman Shakya",
    "Reusable UI Components",
    "Motion UI React",
    "Animated Dashboard Alerts",
    "Developer Tools",
  ],
  authors: [{ name: "Aman Shakya", url: "https://amanshakya.in" }],
  creator: "Aman Shakya",
  publisher: "Aman Shakya",
  openGraph: {
    title: "Notification Panel | ForgeUI Pro",
    description:
      "Deliver animated notifications and alerts with ForgeUI Pro's Notification Panel component. Built with React, Tailwind CSS, and Framer Motion for smooth UX.",
    url: "https://pro.forgeui.in/components/notification-panel",
    siteName: "ForgeUI Pro",
    images: [
      {
        url: "https://pro.forgeui.in/forgeui-ogimage.png",
        width: 1200,
        height: 630,
        alt: "ForgeUI Pro Notification Panel Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Notification Panel | ForgeUI Pro",
    description:
      "ForgeUI Pro’s Notification Panel component delivers smooth, animated notifications with Framer Motion. Perfect for React & Tailwind CSS dashboards.",
    images: ["https://pro.forgeui.in/forgeui-ogimage.png"],
    site: "@amanshakya0018",
    creator: "@amanshakya0018",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <Notificationpanel />;
};

export default Page;
