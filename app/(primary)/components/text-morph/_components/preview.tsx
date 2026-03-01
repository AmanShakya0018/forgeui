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
  textMorphProps,
} from "./show-code";
import ToggleButtonGroup from "@/components/content/togglebuttongroup";
import MainTitle from "@/components/content/maintitle";
import PreviewComponentContainer from "@/components/content/previewcomponentcontainer";
import MainContentContainer from "@/components/content/maincontentcontainer";
import { getNavigationItems } from "@/lib/getNavigationItems";
import ComponentNavigation from "@/components/layout/componentnavigation";
import { ComponentSource } from "@/components/code/componentsource";
import { CommandBlock } from "@/components/code/commmand-block";
import ToggleManualCli from "@/components/content/togglemanualcli";
import { CodeBlock } from "@/components/code/CodeBlock";
import PropsTable from "@/components/content/props-table";
import LivePreviewComponent from "@/components/layout/livepreview";
import ForgeUIProCTA from "@/components/content/forgeuipro-cta";
import { TextMorph } from "./text-morph";

const Textmorpheffect = () => {
  const [sourceCode, setSourceCode] = useState(false);
  const [sourceManual, setSourceManual] = useState(false);
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
        <PreviewComponentContainer>
          <p className="flex min-w-28.75 items-center gap-1 text-neutral-800 dark:text-neutral-200">
            20 •
            <TextMorph
              words={["engineer", "developer", "designer"]}
              interval={2500}
              className="text-neutral-800 dark:text-neutral-200"
            />
          </p>
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
      <PropsTable propsData={textMorphProps} />
      <ForgeUIProCTA />
      <ComponentNavigation previous={previous} next={next} />
    </MainContentContainer>
  );
};

export default Textmorpheffect;

export const LivePreviewTextMorph = () => {
  return (
    <LivePreviewComponent>
      <p className="flex min-w-28.75 items-center gap-1 text-neutral-800 dark:text-neutral-200">
        20 •
        <TextMorph
          words={["engineer", "developer", "designer"]}
          interval={2500}
          className="text-neutral-800 dark:text-neutral-200"
        />
      </p>
    </LivePreviewComponent>
  );
};
