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
  frameworkAgnosticProps,
  screennotice,
  csscode,
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
import FrameworkAgnostic from "./framework-agnostic";
import ScreenNotice from "@/components/content/screen-notice";
import CliDependencies from "@/components/content/clidependencies";

const Frameworkagnostic = () => {
  const [sourceCode, setSourceCode] = useState(false);
  const [sourceManual, setSourceManual] = useState(true);
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
        <PreviewComponentContainer className="bg-neutral-950">
          <FrameworkAgnostic
            cardTitle="Framework Agnostic"
            cardDescription="Seamlessly integrate with any tech stack, whether it's Next.js,React, HTML, or anything else. Statsio works everywhere."
          />
        </PreviewComponentContainer>
      ) : (
        <CodeBlock
          fileName={`${title.replace(/\s+/g, "")}Example.tsx`}
          code={democode}
        />
      )}
      <ScreenNotice
        className="block text-primary/50 dark:hidden"
        text={screennotice}
      />
      <ToggleManualCli
        sourceManual={sourceManual}
        setSourceManual={setSourceManual}
      />
      {!sourceManual ? (
        <>
          <CommandBlock
            npmCommand={commandMap.npm}
            pnpmCommand={commandMap.pnpm}
            yarnCommand={commandMap.yarn}
            bunCommand={commandMap.bun}
          />
          <CliDependencies title="Add animations in globals CSS File">
            <ComponentSource>
              <CodeBlock fileName={`css`} code={csscode} />
            </ComponentSource>
          </CliDependencies>
        </>
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
          <Dependencies step={4} title="Add animations in globals CSS File">
            <ComponentSource>
              <CodeBlock fileName={`css`} code={csscode} />
            </ComponentSource>
          </Dependencies>
          <Dependencies
            step={5}
            title="Update the import paths to match your project setup"
          ></Dependencies>
        </>
      )}
      <PropsTable propsData={frameworkAgnosticProps} />
      <ComponentNavigation previous={previous} next={next} />
    </MainContentContainer>
  );
};

export default Frameworkagnostic;
