"use client";
import { CodeBlock } from "@/components/ui/code-block";
import React, { useState } from "react";
import Alert from "./components/alert";
import Dependencies from "@/components/dependencies";
import {
  democode,
  code,
  title,
  description,
  routepoint,
  commandMap,
} from "./components/show-code";
import ContentNavigation from "@/components/content-navigation";
import SourceCode from "@/components/sourcecode";
import ToggleButtonGroup from "@/components/togglebuttongroup";
import MainTitle from "@/components/maintitle";
import MainDescription from "@/components/maindescription";
import PreviewComponentContainer from "@/components/previewcomponentcontainer";
import StepsInstallation from "@/components/steps-installation";
import MainContentContainer from "@/components/maincontentcontainer";
import VerticalContainer from "@/components/verticalcontainer";
import ComponentNavigation from "@/components/componentnavigation";
import { getNavigationItems } from "@/lib/getNavigationItems";
import { ComponentSource } from "@/components/componentsource";
import ToggleManualCli from "@/components/togglemanualcli";
import { CommandBlock } from "@/components/cli/commmand-block";
import { CodeBlock2 } from "@/components/cli/CodeBlock";

const Alerts = () => {
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
          <Alert />
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
              code={`npm install lucide-react framer-motion`}
              language="javascript"
            />
          </Dependencies>
          <VerticalContainer>
            <SourceCode />
            <ComponentSource className="pl-7">
              <CodeBlock2 fileName={`${routepoint}.tsx`} code={code} />
            </ComponentSource>
          </VerticalContainer>
        </>
      )}
      <ComponentNavigation previous={previous} next={next} />
    </MainContentContainer>
  );
};

export default Alerts;
