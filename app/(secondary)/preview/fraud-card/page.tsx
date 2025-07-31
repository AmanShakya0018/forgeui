import React from "react";
import type { Metadata } from "next";
import LivePreviewComponent from "@/components/layout/livepreview";
import FraudCard from "@/app/(primary)/components/fraud-card/_components/fraud-card";

export const metadata: Metadata = {
  title: "Fraud Detection Card Live Preview | ForgeUI",
  description:
    "Interact with ForgeUI's Fraud Detection Card component in this live preview. Built with React, Tailwind CSS, and Framer Motion, this component visually displays blocked users, spam detection, and fraud alerts in a clean and responsive UI. Copy-paste ready for your SaaS and admin dashboards.",
  keywords: [
    "Fraud Detection Card Preview",
    "Spam Detection UI Component",
    "React Fraud Alerts",
    "ForgeUI Fraud Detection",
    "Framer Motion Security UI",
    "Tailwind CSS Admin Dashboard",
    "UI Component Preview",
    "React UI Playground",
    "Interactive Security Card Demo",
    "Reusable React Components",
    "Copy Paste UI Components",
    "Open Source UI Kit",
    "ForgeUI by Aman Shakya",
  ],
  authors: [{ name: "Aman Shakya", url: "https://amanshakya.in" }],
  creator: "Aman Shakya",
  publisher: "Aman Shakya",
  openGraph: {
    title: "Fraud Detection Card Live Preview | ForgeUI",
    description:
      "Live interactive demo of ForgeUI's Fraud Detection Card component. Designed for dashboards and SaaS products to display spam and fraud alerts effectively.",
    url: "https://forgeui.in/components/fraud-card/preview",
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
    title: "Fraud Detection Card Live Preview | ForgeUI",
    description:
      "See ForgeUI's Fraud Detection Card component in action with this interactive live preview. Built with React, Tailwind CSS, and Framer Motion.",
    images: ["https://forgeui.in/forgeui-ogimage-v2.png"],
    site: "@amanshakya0018",
    creator: "@amanshakya0018",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const blockedEmails = [
  { email: "bad_actor+1@gamil.com", time: "Aug 9 at 14:09" },
  { email: "spammer123@mailor.com", time: "Aug 10 at 11:23" },
  { email: "fake+prmo@tempmail.com", time: "Aug 11 at 09:45" },
  { email: "bot@disposablemail.org", time: "Aug 12 at 16:02" },
];
const Preview = () => {
  return (
    <LivePreviewComponent>
      <FraudCard blockedEmails={blockedEmails} />
    </LivePreviewComponent>
  );
};

export default Preview;
