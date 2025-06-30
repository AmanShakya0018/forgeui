import ExpandableCard, {
  CardItem,
  Firebase,
  MetaMask,
  Upstash,
} from "@/app/(primary)/components/expandable-card/_components/expandable-card";
import LivePreviewComponent from "@/components/layout/livepreview";
import React from "react";

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
