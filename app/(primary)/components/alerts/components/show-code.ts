
export const title = "Alerts";
export const routepoint = "alerts";
export const description = "Customizable React alerts for notifications, warnings, or messages with flexible styling and seamless integration.";

export const democode = `"use client";
import React from 'react'
import Alert from './components/ui/alerts'
function Page() {
  return (
    <>
      <Alert />
    </>
  )
}

export default Page;`;

export const code = `'use client'

import { Check, X } from 'lucide-react';
import Image from "next/image";
import { motion } from "framer-motion";

export default function Alert() {
  return (
    <div className="w-full max-w-md mx-auto p-3">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-lg p-4 shadow-md dark:shadow-white/10 bg-gradient-to-br from-white to-zinc-100 dark:from-zinc-900 dark:to-zinc-950 border border-zinc-200 dark:border-zinc-800 relative overflow-hidden"
      >
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12">
            <Image
              width={190}
              height={190}
              src="/pfp.png"
              alt="Emma Johnson"
              className="rounded-full object-cover w-full h-full"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute right-0 bottom-0 w-3 h-3 rounded-full bg-green-500 ring-1 ring-white dark:ring-zinc-800"
            />
          </div>

          <div className="flex-1 min-w-0">
            <h2 className="font-bold text-base text-zinc-800 dark:text-zinc-100 mb-0.5">
              You&apos;re Invited!
            </h2>
            <p className="text-xs text-zinc-600 dark:text-zinc-300">
              Join Forgeui&apos;s{" "}
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                Technical Team
              </span>
            </p>
          </div>

          <div className="block sm:flex gap-2 items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              className="h-8 w-8 rounded-full flex items-center justify-center text-zinc-500 hover:text-red-600 dark:text-zinc-400 hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors"
            >
              <X className="h-4 w-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              className="h-8 w-8 rounded-full flex items-center justify-center text-emerald-600 bg-emerald-100 hover:bg-emerald-200 dark:bg-emerald-900/30 dark:hover:bg-emerald-800/50 transition-colors"
            >
              <motion.div
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Check className="h-4 w-4" />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}`;