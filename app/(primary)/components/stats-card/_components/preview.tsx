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
  statsCardProps,
  csscode,
  screennoticedesktop,
} from "./show-code";
import ToggleButtonGroup from "@/components/content/togglebuttongroup";
import MainTitle from "@/components/content/maintitle";
import PreviewComponentContainer from "@/components/content/previewcomponentcontainer";
import MainContentContainer from "@/components/content/maincontentcontainer";
import ComponentNavigation from "@/components/layout/componentnavigation";
import { ComponentSource } from "@/components/code/componentsource";
import { CommandBlock } from "@/components/code/commmand-block";
import ToggleManualCli from "@/components/content/togglemanualcli";
import { CodeBlock } from "@/components/code/CodeBlock";
import PropsTable from "@/components/content/props-table";
import StatsCard from "./statscard";
import CliDependencies from "@/components/content/clidependencies";
import ScreenNotice from "@/components/content/screen-notice";
import { getNavigationItems } from "@/lib/getNavigationItems";
import LivePreviewComponent from "@/components/layout/livepreview";
import ForgeUIProCTA from "@/components/content/forgeuipro-cta";

const Statscard = () => {
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
          <StatsCard
            gradientColor="#60A5FA"
            statsType="PRs Merged"
            firstPerson="Toji Fushiguro"
            secondPerson="Gojo Satoru"
            firstData={23}
            secondData={18}
            firstImage="/assets/toji.png"
            secondImage="/assets/gojo.png"
          />
        </PreviewComponentContainer>
      ) : (
        <CodeBlock
          fileName={`${title.replace(/\s+/g, "")}Example.tsx`}
          code={democode}
        />
      )}
      <ScreenNotice className="text-primary/50" text={screennoticedesktop} />
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
      <PropsTable propsData={statsCardProps} />
      <ForgeUIProCTA />
      <ComponentNavigation previous={previous} next={next} />
    </MainContentContainer>
  );
};

export default Statscard;

export const LivePreviewStatsCard = () => {
  return (
    <LivePreviewComponent>
      <StatsCard
        gradientColor="#60A5FA"
        statsType="PRs Merged"
        firstPerson="Toji Fushiguro"
        secondPerson="Gojo Satoru"
        firstData={23}
        secondData={18}
        firstImage="/assets/toji.png"
        secondImage="/assets/gojo.png"
      />
    </LivePreviewComponent>
  );
};
