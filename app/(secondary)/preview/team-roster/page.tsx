import TeamRoster from '@/app/(primary)/components/team-roster/components/team-roster';
import LivePreviewComponent from '@/components/livepreview';
import React from 'react'

const TeamRosterPreview = () => {
  return (
    <LivePreviewComponent>
      <TeamRoster />
    </LivePreviewComponent>
  )
}

export default TeamRosterPreview;