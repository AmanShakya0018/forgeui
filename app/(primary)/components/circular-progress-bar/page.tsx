"use client"
import { CodeBlock } from '@/components/ui/code-block';
import React, { useState } from 'react'
import CircularProgressBarDemo from './components/circularprogressbar';
import { code, democode, title, description, routepoint } from './components/show-code';
import ContentNavigation from '@/components/content-navigation';
import SourceCode from '@/components/sourcecode';
import RoutePlaceHolder from '@/components/route-place';
import ToggleButtonGroup from '@/components/togglebuttongroup';
import MainTitle from '@/components/maintitle';
import MainDescription from '@/components/maindescription';
import PreviewComponentContainer from '@/components/previewcomponentcontainer';
import StepsInstallation from '@/components/steps-installation';
import VerticalContainer from '@/components/verticalcontainer';
import MainContentContainer from '@/components/maincontentcontainer';
import UtilSecond from '@/components/util-second';
import Dependencies from '@/components/dependencies';
import { getNavigationItems } from '@/lib/getNavigationItems';
import ComponentNavigation from '@/components/componentnavigation';
import { ComponentSource } from '@/components/componentsource';

const Circularprogressbar = () => {

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
          <CircularProgressBarDemo />
        </PreviewComponentContainer>)
        : (<CodeBlock
          language="jsx"
          code={democode}
        />)}
      <StepsInstallation />
      <Dependencies><CodeBlock code={`npm install framer-motion clsx tailwind-merge`} language="javascript" /></Dependencies>
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

export default Circularprogressbar