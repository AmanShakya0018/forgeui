"use client";
import React, { useState } from "react";
import FileUpload from "./_components/file-upload";
import {
  code,
  democode,
  title,
  description,
  routepoint,
  commandMap,
  packagesMap,
  utilcode,
} from "./_components/show-code";
import ToggleButtonGroup from "@/components/togglebuttongroup";
import MainTitle from "@/components/maintitle";
import PreviewComponentContainer from "@/components/previewcomponentcontainer";
import MainContentContainer from "@/components/maincontentcontainer";
import Dependencies from "@/components/dependencies";
import { getNavigationItems } from "@/lib/getNavigationItems";
import ComponentNavigation from "@/components/componentnavigation";
import { ComponentSource } from "@/components/componentsource";
import ToggleManualCli from "@/components/togglemanualcli";
import { CommandBlock } from "@/components/cli/commmand-block";
import { CodeBlock2 } from "@/components/cli/CodeBlock";

const Fileupload = () => {
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
        <PreviewComponentContainer>
          <FileUpload />
        </PreviewComponentContainer>
      ) : (
        <CodeBlock2
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
            <CodeBlock2 fileName={`lib/util.ts`} code={utilcode} />
          </Dependencies>
          <Dependencies
            step={3}
            title="Copy and paste the following code into your project"
          >
            <ComponentSource>
              <CodeBlock2 fileName={`${routepoint}.tsx`} code={code} />
            </ComponentSource>
          </Dependencies>
          <Dependencies
            step={4}
            title="Update the import paths to match your project setup"
          ></Dependencies>
        </>
      )}
      <ComponentNavigation previous={previous} next={next} />
    </MainContentContainer>
  );
};

export default Fileupload;
