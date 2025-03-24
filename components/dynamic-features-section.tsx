import React from 'react'
import { TerminalDemo } from './terminal'
import DisplayCards from './display-cards'
import { BentoGridFeatures } from './bento'

const Dynamicfeatures = () => {
  return (
    <div className='space-y-2 lg:space-y-6 py-14 px-2'>
      <div className='flex lg:flex-row flex-col gap-4 max-w-6xl mx-auto rounded-xl border border-zinc-200 dark:border-zinc-900 p-4 lg:p-8'>
        <TerminalDemo />
        <div className='hidden sm:block rounded-xl border border-zinc-200 dark:border-zinc-900 p-8 w-full'>
          <DisplayCards />
        </div>
      </div>
      <BentoGridFeatures />
    </div>
  )
}

export default Dynamicfeatures