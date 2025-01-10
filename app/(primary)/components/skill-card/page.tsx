"use client"
import { CodeBlock } from '@/components/ui/code-block';
import React, { useState } from 'react'
import SkillCard from './components/skillcard';
import Dependencies from '@/components/dependencies';

const Skillcard = () => {

  const title = "Skill Card";
  const routepoint = "skill-card";
  const description = "A professional profile card showcasing an expert's details, skills, and availability with a contact button.";
  const [sourceCode, setSourceCode] = useState(false);

  const democode = `"use client";
import React from 'react'
import  SkillCard from './components/ui/skill-card';
function Page() {
  return (
    <>
      <SkillCard />
    </>
  )
}

export default Page;`;

  const code = `'use client'

import { Calendar, Clock, Send, Star } from 'lucide-react'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function SkillCard() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl opacity-10" />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="relative overflow-hidden border border-zinc-200 dark:border-zinc-800 
                   bg-white dark:bg-zinc-900 rounded-xl shadow-lg"
      >
        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className="relative">
              <div className="w-16 h-14 mt-2 rounded-lg overflow-hidden ring-2 ring-zinc-100 dark:ring-zinc-800 shadow-md">
                <Image
                  src="/pfp.png"
                  alt="Emma Watson"
                  width={190}
                  height={190}
                  className="object-cover"
                />
              </div>
              <div
                className="absolute -bottom-1 -right-1 p-1 rounded-md 
                           bg-emerald-50 dark:bg-emerald-900/50 
                           text-emerald-700 dark:text-emerald-300
                           ring-1 ring-white dark:ring-zinc-900 shadow-sm"
              >
                <Clock className="w-3 h-3" />
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm sm:text-lg font-bold text-zinc-900 dark:text-zinc-100">
                    Emma Watson
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                    Lead UX Designer
                  </p>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 rounded-full 
                                bg-zinc-100 dark:bg-zinc-800 shadow-inner">
                  <Star className="w-3 h-3 text-yellow-500" />
                  <span className="text-xs font-medium text-zinc-900 dark:text-zinc-100">
                    4.7
                  </span>
                </div>
              </div>

              <div className="hidden mt-2 sm:flex items-center gap-2 text-xs">
                <div className="flex items-center gap-1 text-emerald-700 dark:text-emerald-300">
                  <Calendar className="w-3 h-3" />
                  <span>Available in 1 week</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 pb-6">
          <h4 className="text-xs font-medium text-zinc-900 dark:text-zinc-100 mb-3">
            Proficiencies & Competencies
          </h4>
          <div className="grid grid-cols-2 gap-3">
            {[
              { name: "Prototyping", level: 4 },
              { name: "Wireframing", level: 5 },
              { name: "User Research", level: 3 },
              { name: "Accessibility", level: 5 },
            ].map((skill) => (
              <div
                key={skill.name}
                className="space-y-1.5 p-2 rounded-md bg-zinc-50 dark:bg-zinc-800/50 shadow-sm"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-zinc-700 dark:text-zinc-300">
                    {skill.name}
                  </span>
                  <span className=" hidden sm:flex">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={\`w-1.5 h-1.5 rounded-full mx-0.5 
                                    \${i < skill.level
                            ? "bg-emerald-500 dark:bg-emerald-400"
                            : "bg-zinc-200 dark:bg-zinc-700"
                          }\`}
                      />
                    ))}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="px-6 pb-6 flex justify-end items-end gap-2 w-full">
          <Button
            variant="default"
            className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600
                      text-white text-sm border-none shadow-md transition-all duration-200 ease-in-out
                      hover:shadow-lg"
          >
            <Send className="w-3 h-3 mr-2" />
            Contact Designer
          </Button>
        </div>
      </motion.div>
    </div>
  )
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
          <SkillCard />
        </div>)
        : (<CodeBlock
          language="jsx"
          code={democode}
        />)}
      <h2 className="font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0 text-black dark:text-white">Installation</h2>

      <Dependencies><CodeBlock code={`npm install framer-motion`} language="javascript" /></Dependencies>
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

export default Skillcard