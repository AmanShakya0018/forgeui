import SocialCard from '@/app/(primary)/components/social-card/components/socialcard';
import LivePreviewComponent from '@/components/livepreview';
import React from 'react'

const SocialCardPreview = () => {
  return (
    <LivePreviewComponent>
      <SocialCard />
    </LivePreviewComponent>
  )
}

export default SocialCardPreview;