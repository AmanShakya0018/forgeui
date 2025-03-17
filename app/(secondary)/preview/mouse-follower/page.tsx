import MouseFollower from '@/app/(primary)/components/mouse-follower/components/mouse-follower';
import LivePreviewComponent from '@/components/livepreview';
import React from 'react'

const MouseFollowerPreview = () => {
  return (
    <LivePreviewComponent>
      <MouseFollower />
    </LivePreviewComponent>
  )
}

export default MouseFollowerPreview;