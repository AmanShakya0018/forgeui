import React from 'react'
import Link from 'next/link';
import { BookOpen, ChevronRight, SquareArrowOutUpRight } from 'lucide-react';

const Herobuttons = () => {
  return (
    <div className='flex items-center gap-4 sm:gap-6 mt-4 sm:mt-6'>
      <Link href="/components/alerts">
        <div className='no-underline flex gap-1 md:gap-3 space-x-2 group cursor-pointer transition duration-400 font-semibold px-4 py-2 bg-black dark:bg-white dark:text-black text-white relative hover:bg-neutral-800 dark:hover:bg-neutral-200 z-20 h-10 w-full items-center justify-center rounded-lg text-sm'>
          Browse Components
          <SquareArrowOutUpRight className='w-4 h-4 mt-0.5' />
        </div>
      </Link>
      <Link href="/introduction" className='flex items-center gap-2 text-[0.83rem] md:text-[0.9rem] dark:text-white text-black  group'>
        <BookOpen className='w-4 h-4 translate-y-[1px]' />
        Documentation
        <ChevronRight className='w-4 h-4 mt-0.5 transition-all group-hover:translate-x-3 duration-200 ease-in-out' />
      </Link>
    </div>
  )
}

export default Herobuttons