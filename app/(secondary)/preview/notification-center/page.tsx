import React from "react";
import LivePreviewComponent from "@/components/layout/livepreview";
import NotificationCenter from "@/app/(primary)/components/notification-center/_components/notification-center";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notification Center Live Preview | ForgeUI",
  description:
    "Explore ForgeUI's Notification Center component in an interactive live preview. Built with React, Tailwind CSS, and Framer Motion, this component displays real-time notifications with smooth animations and an intuitive UI. Perfect for SaaS dashboards and modern web apps.",
  keywords: [
    "Notification Center Preview",
    "Notification Component Demo",
    "React Notification UI",
    "ForgeUI Notification Center",
    "Framer Motion Notifications",
    "Tailwind CSS Notification Component",
    "UI Component Preview",
    "React UI Playground",
    "Interactive Notification Demo",
    "Reusable React Components",
    "Copy Paste UI Components",
    "Open Source UI Kit",
    "ForgeUI by Aman Shakya",
  ],
  authors: [{ name: "Aman Shakya", url: "https://amanshakya.in" }],
  creator: "Aman Shakya",
  publisher: "Aman Shakya",
  openGraph: {
    title: "Notification Center Live Preview | ForgeUI",
    description:
      "Live interactive demo of ForgeUI's Notification Center component. Designed for modern web apps and SaaS dashboards with responsive design and smooth animations.",
    url: "https://forgeui.in/components/notification-center/preview",
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
    title: "Notification Center Live Preview | ForgeUI",
    description:
      "See ForgeUI's Notification Center component in action with this live preview. Real-time notifications with clean UI, built using React, Tailwind CSS, and Framer Motion.",
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
      <NotificationCenter />
    </LivePreviewComponent>
  );
};

export default Preview;
