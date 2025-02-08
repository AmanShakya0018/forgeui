import FeedbackButton from '@/components/feedback'
import LandingPage from '@/components/landingpage'
import React from 'react'

const home = () => {
  return (
    <div className="relative min-h-screen">
      <LandingPage />
      <FeedbackButton />
    </div>
  )
}

export default home