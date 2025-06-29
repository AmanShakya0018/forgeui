"use client";
import React, { useState } from "react";
import Dependencies from "@/components/content/dependencies";
import {
  code,
  democode,
  title,
  description,
  routepoint,
  commandMap,
  utilcode,
  packagesMap,
  expandableCardProps,
} from "./show-code";
import ToggleButtonGroup from "@/components/content/togglebuttongroup";
import MainTitle from "@/components/content/maintitle";
import PreviewComponentContainer from "@/components/content/previewcomponentcontainer";
import MainContentContainer from "@/components/content/maincontentcontainer";
import ComponentNavigation from "@/components/layout/componentnavigation";
import { getNavigationItems } from "@/lib/getNavigationItems";
import { ComponentSource } from "@/components/code/componentsource";
import { CommandBlock } from "@/components/code/commmand-block";
import ToggleManualCli from "@/components/content/togglemanualcli";
import { CodeBlock } from "@/components/code/CodeBlock";
import PropsTable from "@/components/content/props-table";
import ExpandableCard, {
  CardItem,
  Firebase,
  MetaMask,
  Upstash,
} from "./expandable-card";

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

const Expandablecard = () => {
  const [sourceCode, setSourceCode] = useState(false);
  const [sourceManual, setSourceManual] = useState(true);
  const { previous, next } = getNavigationItems(title);

  return (
    <MainContentContainer>
      <MainTitle title={title} description={description} />
      <ToggleButtonGroup
        sourceCode={sourceCode}
        setSourceCode={setSourceCode}
        routepoint={routepoint}
      />
      {!sourceCode ? (
        <PreviewComponentContainer className="relative">
          <ExpandableCard items={sampleItems} />
        </PreviewComponentContainer>
      ) : (
        <CodeBlock
          fileName={`${title.replace(/\s+/g, "")}Example.tsx`}
          code={democode}
        />
      )}
      <ToggleManualCli
        sourceManual={sourceManual}
        setSourceManual={setSourceManual}
      />
      {!sourceManual ? (
        <CommandBlock
          npmCommand={commandMap.npm}
          pnpmCommand={commandMap.pnpm}
          yarnCommand={commandMap.yarn}
          bunCommand={commandMap.bun}
        />
      ) : (
        <>
          <Dependencies step={1} title="Install the packages">
            <CommandBlock
              npmCommand={packagesMap.npm}
              pnpmCommand={packagesMap.pnpm}
              yarnCommand={packagesMap.yarn}
              bunCommand={packagesMap.bun}
            />
          </Dependencies>
          <Dependencies step={2} title="Add util file">
            <CodeBlock fileName={`lib/util.ts`} code={utilcode} />
          </Dependencies>
          <Dependencies
            step={3}
            title="Copy and paste the following code into your project"
          >
            <ComponentSource>
              <CodeBlock fileName={`${routepoint}.tsx`} code={code} />
            </ComponentSource>
          </Dependencies>
          <Dependencies
            step={4}
            title="Update the import paths to match your project setup"
          ></Dependencies>
        </>
      )}
      <PropsTable propsData={expandableCardProps} />
      <ComponentNavigation previous={previous} next={next} />
    </MainContentContainer>
  );
};

export default Expandablecard;
