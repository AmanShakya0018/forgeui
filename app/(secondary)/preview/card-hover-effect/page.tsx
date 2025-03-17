import CardHover from '@/app/(primary)/components/card-hover-effect/components/card-hover-effect';
import LivePreviewComponent from '@/components/livepreview';
import React from 'react'

const CardHoverPreview = () => {
  return (
    <LivePreviewComponent>
      <CardHover />
    </LivePreviewComponent>
  )
}

export default CardHoverPreview;