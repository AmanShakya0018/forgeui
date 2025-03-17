import TextRenderingEffect from '@/app/(primary)/components/text-rendering-effect/components/text-rendering-effect';
import LivePreviewComponent from '@/components/livepreview';
import React from 'react'

const TextRenderingPreview = () => {
  return (
    <LivePreviewComponent>
      <TextRenderingEffect />
    </LivePreviewComponent>
  )
}

export default TextRenderingPreview;