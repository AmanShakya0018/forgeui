import TextShimmer from '@/app/(primary)/components/text-shimmer/components/text-shimmer';
import LivePreviewComponent from '@/components/livepreview';
import React from 'react'

const TextRenderingPreview = () => {
  return (
    <LivePreviewComponent>
      <TextShimmer className='text-sm' duration={1}>
        Loading...
      </TextShimmer>
    </LivePreviewComponent>
  )
}

export default TextRenderingPreview;