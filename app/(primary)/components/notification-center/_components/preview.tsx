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
  notificationCenterProps,
  screennotice,
  screennoticedesktop,
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
import NotificationCenter from "./notification-center";
import ScreenNotice from "@/components/content/screen-notice";
import LivePreviewComponent from "@/components/layout/livepreview";
import ForgeUIProCTA from "@/components/content/forgeuipro-cta";

const Notificationcenter = () => {
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
        <PreviewComponentContainer>
          <NotificationCenter
            cardTitle="Real-time payment alerts"
            cardDescription="Get instant updates for every successful Stripe transaction processed through your app."
            notificationTitle="Stripe"
            notificationDescription="You received a payment of $99.00 USD"
            notificationTime="2h ago"
          />
        </PreviewComponentContainer>
      ) : (
        <CodeBlock
          fileName={`${title.replace(/\s+/g, "")}Example.tsx`}
          code={democode}
        />
      )}
      <ScreenNotice
        className="text-primary/50 block sm:hidden"
        text={screennotice}
      />
      <ScreenNotice
        className="text-primary/50 hidden sm:block"
        text={screennoticedesktop}
      />
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
      <PropsTable propsData={notificationCenterProps} />
      <ForgeUIProCTA />
      <ComponentNavigation previous={previous} next={next} />
    </MainContentContainer>
  );
};

export default Notificationcenter;

export const LivePreviewNotificationCenter = () => {
  return (
    <LivePreviewComponent>
      <NotificationCenter
        cardTitle="Real-time payment alerts"
        cardDescription="Get instant updates for every successful Stripe transaction processed through your app."
        notificationTitle="Stripe"
        notificationDescription="You received a payment of $99.00 USD"
        notificationTime="2h ago"
      />
    </LivePreviewComponent>
  );
};
