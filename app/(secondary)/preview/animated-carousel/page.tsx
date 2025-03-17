import AnimatedCarousel from '@/app/(primary)/components/animated-carousel/components/animatedcarousel';
import LivePreviewComponent from '@/components/livepreview';
import React from 'react'

const AnimatedCarouselPreview = () => {
  return (
    <LivePreviewComponent>
      <AnimatedCarousel />
    </LivePreviewComponent>
  )
}

export default AnimatedCarouselPreview;