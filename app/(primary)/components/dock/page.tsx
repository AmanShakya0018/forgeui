"use client"
import { CodeBlock } from '@/components/ui/code-block';
import React, { useState } from 'react'
import Dock from './components/dock';
import Dependencies from '@/components/dependencies';
import { democode, code, title, description, routepoint } from './components/show-code';
import ContentNavigation from '@/components/content-navigation';
import SourceCode from '@/components/sourcecode';
import RoutePlaceHolder from '@/components/route-place';
import ToggleButtonGroup from '@/components/togglebuttongroup';
import MainTitle from '@/components/maintitle';
import MainDescription from '@/components/maindescription';
import PreviewComponentContainer from '@/components/previewcomponentcontainer';
import StepsInstallation from '@/components/steps-installation';
import MainContentContainer from '@/components/maincontentcontainer';
import VerticalContainer from '@/components/verticalcontainer';
import UtilSecond from '@/components/util-second';
import ComponentNavigation from '@/components/componentnavigation';
import { getNavigationItems } from '@/lib/getNavigationItems';
import { ComponentSource } from '@/components/componentsource';

const DockComp = () => {

  const [sourceCode, setSourceCode] = useState(false);
  const { previous, next } = getNavigationItems(title);

  return (
    <MainContentContainer>
      <ContentNavigation>{title}</ContentNavigation>
      <MainTitle>{title}</MainTitle>
      <MainDescription>{description}</MainDescription>
      <ToggleButtonGroup sourceCode={sourceCode} setSourceCode={setSourceCode} routepoint={routepoint} />
      {(!sourceCode) ?
        (<PreviewComponentContainer>
          <Dock />
        </PreviewComponentContainer>)
        : (<CodeBlock
          language="jsx"
          code={democode}
        />)}
      <StepsInstallation />
      <Dependencies><CodeBlock code={`npm install framer-motion clsx tailwind-merge lucide-react`} language="javascript" /></Dependencies>
      <UtilSecond />
      <VerticalContainer>
        <SourceCode />
        <RoutePlaceHolder>components/ui/{routepoint}.tsx</RoutePlaceHolder>
        <ComponentSource className="pl-7">
          <CodeBlock code={code} language="javascript" />
        </ComponentSource>
      </VerticalContainer>
      <ComponentNavigation previous={previous} next={next} />
    </MainContentContainer>
  )
}

export default DockComp