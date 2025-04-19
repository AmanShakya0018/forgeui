"use client"
import { CodeBlock } from '@/components/ui/code-block';
import React, { useState } from 'react'
import Alert from './components/alert';
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
import ComponentNavigation from '@/components/componentnavigation';
import { getNavigationItems } from '@/lib/getNavigationItems';

const Alerts = () => {

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
          <Alert />
        </PreviewComponentContainer>)
        : (<CodeBlock
          language="jsx"
          code={democode}
        />)}
      <StepsInstallation />
      <Dependencies><CodeBlock code={`npm install lucide-react framer-motion`} language="javascript" /></Dependencies>
      <VerticalContainer>
        <SourceCode />
        <RoutePlaceHolder>components/ui/{routepoint}.tsx</RoutePlaceHolder>
        <span className='pl-7'>
          <CodeBlock code={code} language="javascript" />
        </span>
      </VerticalContainer>
      <ComponentNavigation previous={previous} next={next} />
    </MainContentContainer>
  )
}

export default Alerts