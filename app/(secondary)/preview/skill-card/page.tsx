import SkillCard from '@/app/(primary)/components/skill-card/components/skillcard';
import LivePreviewComponent from '@/components/livepreview';
import React from 'react'

const SkillCardPreview = () => {
  return (
    <LivePreviewComponent>
      <SkillCard />
    </LivePreviewComponent>
  )
}

export default SkillCardPreview;