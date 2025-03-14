export const title = "Skill Card";
export const routepoint = "skill-card";
export const description = "A professional profile card showcasing an expert's details, skills, and availability with a contact button.";


export const democode = `"use client";
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

export const code = `'use client'

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