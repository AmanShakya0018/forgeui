"use client"
import { CodeBlock } from '@/components/ui/code-block';
import React, { useState } from 'react'
import TextMorphing from './components/text-morphing';
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

const Textmorphing = () => {

  const [sourceCode, setSourceCode] = useState(false);

  return (
    <MainContentContainer>
      <ContentNavigation>{title}</ContentNavigation>
      <MainTitle>{title}</MainTitle>
      <MainDescription>{description}</MainDescription>
      <ToggleButtonGroup sourceCode={sourceCode} setSourceCode={setSourceCode} routepoint={routepoint} />
      {(!sourceCode) ?
        (<PreviewComponentContainer>
          <TextMorphing />
        </PreviewComponentContainer>)
        : (<CodeBlock
          language="jsx"
          code={democode}
        />)}
      <StepsInstallation />
      <Dependencies><CodeBlock code={`npm install clsx tailwind-merge`} language="javascript" /></Dependencies>
      <UtilSecond />
      <VerticalContainer>
        <SourceCode />
        <RoutePlaceHolder>components/ui/{routepoint}.tsx</RoutePlaceHolder>
        <span className='pl-7'>
          <CodeBlock code={code} language="javascript" />
        </span>
      </VerticalContainer>
    </MainContentContainer>
  )
}

export default Textmorphing