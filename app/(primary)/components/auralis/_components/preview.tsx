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
  auralisProps,
} from "./show-code";
import ToggleButtonGroup from "@/components/content/togglebuttongroup";
import MainTitle from "@/components/content/maintitle";
import PreviewComponentContainer from "@/components/content/previewcomponentcontainer";
import MainContentContainer from "@/components/content/maincontentcontainer";
import ComponentNavigation from "@/components/layout/componentnavigation";
import { getNavigationFeaturedItems } from "@/lib/getNavigationFeaturedItems";
import { ComponentSource } from "@/components/code/componentsource";
import { CommandBlock } from "@/components/code/commmand-block";
import ToggleManualCli from "@/components/content/togglemanualcli";
import { CodeBlock } from "@/components/code/CodeBlock";
import PropsTable from "@/components/content/props-table";
import LivePreviewComponent from "@/components/layout/livepreview";
import ForgeUIProCTA from "@/components/content/forgeuipro-cta";
import Auralis from "./auralis";

const AuralisPage = () => {
  const [sourceCode, setSourceCode] = useState(false);
  const [sourceManual, setSourceManual] = useState(false);
  const { previous, next } = getNavigationFeaturedItems(title);

  return (
    <MainContentContainer>
      <MainTitle title={title} description={description} />
      <ToggleButtonGroup
        sourceCode={sourceCode}
        setSourceCode={setSourceCode}
        routepoint={routepoint}
      />
      {!sourceCode ? (
        <PreviewComponentContainer className="p-0 px-0 py-0 sm:px-0 sm:py-0">
          <Auralis
            height="70vh"
            colors={["#ef4444", "#dc2626", "#b91c1c"]}
            speed={0.3}
            grain={0.6}
          />
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
      <PropsTable propsData={auralisProps} />
      <ForgeUIProCTA />
      <ComponentNavigation previous={previous} next={next} />
    </MainContentContainer>
  );
};

export default AuralisPage;

export const LivePreviewAuralisPage = () => {
  return (
    <LivePreviewComponent className="px-0">
      <Auralis />
    </LivePreviewComponent>
  );
};
