import React from "react";
import type { Metadata } from "next";
import LivePreviewComponent from "@/components/layout/livepreview";
import SecurityCard from "@/app/(primary)/components/security-card/_components/security-card";

export const metadata: Metadata = {
  title: "Security Card Live Preview | ForgeUI",
  description:
    "Preview ForgeUI's Security Card component in an interactive live demo. Built with React, Tailwind CSS, and Framer Motion, this component visually represents security features like encryption, authentication, and verification statuses. Ideal for SaaS dashboards and product security sections.",
  keywords: [
    "Security Card Preview",
    "React Security Components",
    "ForgeUI Security Card",
    "Framer Motion Security UI",
    "Tailwind CSS Security UI",
    "UI Component Preview",
    "React UI Playground",
    "Interactive Security Component",
    "Reusable React Components",
    "Copy Paste UI Components",
    "Open Source UI Kit",
    "ForgeUI by Aman Shakya",
    "Product Security UI",
  ],
  authors: [{ name: "Aman Shakya", url: "https://amanshakya.in" }],
  creator: "Aman Shakya",
  publisher: "Aman Shakya",
  openGraph: {
    title: "Security Card Live Preview | ForgeUI",
    description:
      "Live demo of ForgeUI's Security Card component. Visually represent encryption, authentication, and security checks with smooth animations and clean UI.",
    url: "https://forgeui.in/components/security-card/preview",
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
    title: "Security Card Live Preview | ForgeUI",
    description:
      "See ForgeUI's Security Card component in action with this live interactive preview. Built using React, Tailwind CSS, and Framer Motion.",
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
      <SecurityCard />
    </LivePreviewComponent>
  );
};

export default Preview;
