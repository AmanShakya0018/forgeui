import TrialAlert from '@/app/(primary)/components/trial-alert/components/trialalert';
import LivePreviewComponent from '@/components/livepreview';
import React from 'react'

const TrialAlertPreview = () => {
  return (
    <LivePreviewComponent>
      <TrialAlert />
    </LivePreviewComponent>
  )
}

export default TrialAlertPreview;