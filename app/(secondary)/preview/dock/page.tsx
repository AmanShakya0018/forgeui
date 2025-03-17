import Dock from '@/app/(primary)/components/dock/components/dock';
import LivePreviewComponent from '@/components/livepreview';
import React from 'react'

const DockPreview = () => {
  return (
    <LivePreviewComponent>
      <Dock />
    </LivePreviewComponent>
  )
}

export default DockPreview;