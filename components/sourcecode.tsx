import React from 'react'

const SourceCode = () => {
  return (
    <span className='flex h-8 items-center gap-6'>
      <span className='bg-neutral-300 dark:bg-neutral-700 w-[6px] h-full rounded-tr-full rounded-br-full'></span>
      <span className='font-heading scroll-m-20 text-lg font-semibold tracking-tight text-black dark:text-neutral-200'>Copy the source code</span>
    </span>
  )
}

export default SourceCode