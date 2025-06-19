"use client";
import { CodeBlock } from "@/components/ui/code-block";
import React, { useState } from "react";
import Transactions from "./components/transactions";
import Dependencies from "@/components/dependencies";
import {
  code,
  democode,
  title,
  description,
  routepoint,
  commandMap,
} from "./components/show-code";
import ContentNavigation from "@/components/content-navigation";
import SourceCode from "@/components/sourcecode";
import RoutePlaceHolder from "@/components/route-place";
import ToggleButtonGroup from "@/components/togglebuttongroup";
import MainTitle from "@/components/maintitle";
import MainDescription from "@/components/maindescription";
import PreviewComponentContainer from "@/components/previewcomponentcontainer";
import StepsInstallation from "@/components/steps-installation";
import UtilSecond from "@/components/util-second";
import VerticalContainer from "@/components/verticalcontainer";
import MainContentContainer from "@/components/maincontentcontainer";
import { getNavigationItems } from "@/lib/getNavigationItems";
import ComponentNavigation from "@/components/componentnavigation";
import { ComponentSource } from "@/components/componentsource";
import { CommandBlock } from "@/components/cli/commmand-block";
import ToggleManualCli from "@/components/togglemanualcli";

const Transaction = () => {
  const [sourceCode, setSourceCode] = useState(false);
  const [sourceManual, setSourceManual] = useState(false);
  const { previous, next } = getNavigationItems(title);

  return (
    <MainContentContainer>
      <ContentNavigation>{title}</ContentNavigation>
      <MainTitle>{title}</MainTitle>
      <MainDescription>{description}</MainDescription>
      <ToggleButtonGroup
        sourceCode={sourceCode}
        setSourceCode={setSourceCode}
        routepoint={routepoint}
      />
      {!sourceCode ? (
        <PreviewComponentContainer>
          <Transactions />
        </PreviewComponentContainer>
      ) : (
        <CodeBlock language="jsx" code={democode} />
      )}
      <StepsInstallation />
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
          <Dependencies>
            <CodeBlock
              code={`npm install lucide-react framer-motion clsx tailwind-merge`}
              language="javascript"
            />
          </Dependencies>
          <UtilSecond />
          <VerticalContainer>
            <SourceCode />
            <RoutePlaceHolder>components/ui/{routepoint}.tsx</RoutePlaceHolder>
            <ComponentSource className="pl-7">
              <CodeBlock code={code} language="javascript" />
            </ComponentSource>
          </VerticalContainer>
        </>
      )}
      <ComponentNavigation previous={previous} next={next} />
    </MainContentContainer>
  );
};

export default Transaction;
