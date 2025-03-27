import CircularText from '@/app/(primary)/components/circular-text/components/circulartext';
import LivePreviewComponent from '@/components/livepreview';
import React from 'react'

const CircularProgressBarPreview = () => {
  return (
    <LivePreviewComponent>
      <CircularText
        text="FORGEUI*IS*AWESOME*"
      />
    </LivePreviewComponent>
  )
}

export default CircularProgressBarPreview;