"use client"
import { CodeBlock } from '@/components/ui/code-block';
import React, { useState } from 'react'
import SocialCard from './components/socialcard';

const Socialcard = () => {

  const title = "Social Card";
  const routepoint = "social-card";
  const description = "Interactive React social card displaying user content, profile, and actions like comments, likes, and shares.";
  const [sourceCode, setSourceCode] = useState(false);

  const democode = `"use client";
import React from 'react'
import SocialCard from './components/ui/social-card';
function Page() {
  return (
    <>
      <SocialCard />
    </>
  )
}

export default Page;`;

  const code = `'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal } from 'lucide-react';
import Image from 'next/image';

export default function SocialCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-xl mx-auto bg-white dark:bg-zinc-900 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-zinc-700"
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="relative w-12 h-12">
              <Image
                width={190}
                height={190}
                src="/pfp.png"
                alt="Emma Johnson"
                className="rounded-full object-cover w-full h-full"
              />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white dark:border-gray-800"></div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Emma Johnson</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">@emma_codes · 3h ago</p>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors duration-200"
          >
            <MoreHorizontal className="w-5 h-5" />
          </motion.button>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Just launched my new portfolio site using Next.js and Tailwind CSS! Check it out and let me know what you think. Always open to feedback and suggestions!
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex space-x-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-pink-500"
            >
              <Heart className="w-5 h-5" />
              <span className="text-sm font-medium">243</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-blue-500"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm font-medium">89</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-green-500"
            >
              <Share2 className="w-5 h-5" />
              <span className="text-sm font-medium">56</span>
            </motion.button>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hidden sm:block p-2 rounded-full text-gray-400 hover:text-yellow-500 hover:bg-yellow-100 dark:hover:bg-yellow-900 transition-colors duration-200"
          >
            <Bookmark className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
`;

  return (
    <article className="container lg:pl-8 py-6 max-w-6xl mx-auto">
      <div className="mb-4 flex items-center space-x-1 text-sm leading-none text-neutral-400">
        <div className="truncate">Components</div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-3.5 w-3.5"><path d="m9 18 6-6-6-6"></path></svg>
        <div className="text-foreground">{title}</div>
      </div>
      <h1 className="mb-2 text-4xl font-bold">{title}</h1>
      <p className="text-lg mt-0 text-neutral-400">{description}</p>
      <div className="buttons flex flex-row gap-2 mt-12">
        <button className={`${!sourceCode ? ("dark:text-white text-zinc-950 bg-zinc-200 dark:bg-zinc-800 duration-400") : ("")} text-sm font-bold text-neutral-500 dark:text-neutral-400 rounded-md w-32 h-10 flex items-center justify-center space-x-1 mb-1.5`} onClick={() => setSourceCode(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path><path d="M6 8h.01"></path><path d="M9 8h.01"></path></svg>
          <span>Preview</span>
        </button>
        <button className={`${sourceCode ? ("dark:text-white text-zinc-950 bg-zinc-200 dark:bg-zinc-800 duration-400") : ("")} text-sm font-bold text-neutral-500 dark:text-neutral-400 rounded-md w-32 h-10 flex items-center justify-center space-x-1 mb-1.5`} onClick={() => setSourceCode(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M8 9l3 3l-3 3"></path><path d="M13 15l3 0"></path><path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path></svg>
          <span>Code</span>
        </button>
      </div>
      {(!sourceCode) ?
        (<div className="border border-zinc-200 dark:border-zinc-800 px-10 py-12 mt-[2px] bg-transparent rounded-md shadow-md flex justify-center items-center space-x-2 overflow-hidden flex-wrap min-h-[22rem]">
          <SocialCard />
        </div>)
        : (<CodeBlock
          language="jsx"
          code={democode}
        />)}
      <h2 className="font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0 text-black dark:text-white">Installation</h2>
      <div className="flex flex-col border-l border-neutral-300 dark:border-neutral-700 gap-5 mt-6">
        <span className='flex h-8 items-center gap-6'>
          <span className='bg-neutral-300 dark:bg-neutral-700 w-[6px] h-full rounded-tr-full rounded-br-full'></span>
          <span className='font-heading scroll-m-20 text-lg font-semibold tracking-tight text-black dark:text-neutral-200'>Install dependencies</span>
        </span>
        <span className='pl-7'>
          <CodeBlock code={`npm install framer-motion`} language="javascript" />
        </span>
      </div>
      <div className="flex flex-col border-l border-neutral-300 dark:border-neutral-700 py-6 gap-5">
        <span className='flex h-8 items-center gap-6'>
          <span className='bg-neutral-300 dark:bg-neutral-700 w-[6px] h-full rounded-tr-full rounded-br-full'></span>
          <span className='font-heading scroll-m-20 text-lg font-semibold tracking-tight text-black dark:text-neutral-200'>Copy the source code</span>
        </span>
        <div
          className='bg-zinc-100 dark:bg-zinc-800 rounded ml-7 inline-flex max-w-max'>
          <span
            className='text-[0.8rem] font-normal tracking-wider px-[0.3rem] py-[0.2rem] text-neutral-800 dark:text-neutral-300'>
            components/ui/{routepoint}.tsx
          </span>
        </div>

        <span className='pl-7'>
          <CodeBlock code={code} language="javascript" />
        </span>
      </div>
    </article>
  )
}

export default Socialcard