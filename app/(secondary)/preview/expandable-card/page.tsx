import React from "react";
import type { Metadata } from "next";
import LivePreviewComponent from "@/components/layout/livepreview";
import ExpandableCard, {
  CardItem,
  Firebase,
  MetaMask,
  Upstash,
} from "@/app/(primary)/components/expandable-card/_components/expandable-card";

export const metadata: Metadata = {
  title: "Expandable Card Live Preview | ForgeUI",
  description:
    "Interact with ForgeUI's Expandable Card component in this live preview. Built with React, Tailwind CSS, and Framer Motion, this component allows for interactive content expansion, making it perfect for job listings, product features, and dynamic UI displays. Fully responsive and copy-paste ready.",
  keywords: [
    "Expandable Card Preview",
    "Interactive Card Component",
    "React Expandable UI",
    "ForgeUI Expandable Card",
    "Framer Motion Card Animation",
    "Tailwind CSS Cards",
    "UI Component Preview",
    "React UI Playground",
    "Interactive Expandable Demo",
    "Reusable React Components",
    "Copy Paste UI Components",
    "Open Source UI Kit",
    "ForgeUI by Aman Shakya",
  ],
  authors: [{ name: "Aman Shakya", url: "https://amanshakya.in" }],
  creator: "Aman Shakya",
  publisher: "Aman Shakya",
  openGraph: {
    title: "Expandable Card Live Preview | ForgeUI",
    description:
      "See ForgeUI's Expandable Card component in action with this live interactive preview. Built with React, Tailwind CSS & Framer Motion for smooth expandable interactions.",
    url: "https://forgeui.in/components/expandable-card/preview",
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
    title: "Expandable Card Live Preview | ForgeUI",
    description:
      "Live demo of ForgeUI's Expandable Card component with interactive content reveal animations, built using React, Tailwind CSS, and Framer Motion.",
    images: ["https://forgeui.in/forgeui-ogimage-v2.png"],
    site: "@amanshakya0018",
    creator: "@amanshakya0018",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const sampleItems: CardItem[] = [
  {
    id: "upstash",
    title: "Upstash",
    subtitle: "Backend Developer",
    icon: <Upstash className="h-8 w-8" />,
    description: "$90k - $120k",
    details:
      "Work with Redis, Kafka, and serverless technologies to build scalable backend infrastructure.",
    metadata: "Remote | Full-time | Global",
  },
  {
    id: "firebase",
    title: "Firebase",
    subtitle: "Cloud Engineer",
    icon: <Firebase className="h-8 w-8" />,
    description: "$110k - $140k",
    details:
      "Contribute to Firebase's real-time databases, authentication, and cloud functions on GCP.",
    metadata: "Hybrid | Full-time | Mountain View, CA",
  },
  {
    id: "metamask",
    title: "MetaMask",
    subtitle: "Frontend Developer",
    icon: <MetaMask className="h-8 w-8" />,
    description: "$100k - $130k",
    details:
      "Build React-based Web3 interfaces for the MetaMask crypto wallet, focusing on usability and security.",
    metadata: "Remote | Full-time | Global",
  },
];

const Preview = () => {
  return (
    <LivePreviewComponent>
      <ExpandableCard items={sampleItems} />
    </LivePreviewComponent>
  );
};

export default Preview;
