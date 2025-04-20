import React from 'react'
import Link from 'next/link';

const Herobuttons = () => {
  return (
    <div className='flex gap-4'>
      <Link href="/components/alerts">
        <button className='no-underline flex space-x-2 group cursor-pointer transition duration-400 p-px font-semibold px-4 py-2 bg-black dark:bg-white dark:text-black text-white relative hover:bg-neutral-800 dark:hover:bg-neutral-200 z-20 h-10 w-full items-center justify-center rounded-lg text-center text-sm sm:w-52'>
          Browse Components
        </button>
      </Link>
      <Link href="/introduction">
        <button className='no-underline space-x-2 group cursor-pointer transition duration-200 hover:bg-neutral-200 dark:hover:bg-neutral-900 p-px font-semibold px-4 py-2 relative z-20 text-sm bg-neutral-100 dark:bg-neutral-800 shadow-md dark:shadow-sm shadow-neutral-300 dark:shadow-neutral-700 text-black dark:text-white w-full h-10 flex items-center justify-center rounded-lg sm:w-52'>
          Learn More
        </button>
      </Link>
    </div>
  )
}

export default Herobuttons