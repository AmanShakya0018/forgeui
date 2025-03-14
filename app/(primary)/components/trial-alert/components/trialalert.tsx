"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { LockIcon } from 'lucide-react'

export default function TrialAlert() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-sm mx-auto"
    >
      <div className="bg-white dark:bg-zinc-950 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center gap-4 p-8 shadow-lg border dark:shadow-white/10 border-gray-200 dark:border-zinc-800">
        <motion.div
          animate={{ rotate: isHovered ? [0, -5, 5, -5, 5, 0] : 0 }}
          transition={{ duration: 0.5 }}
        >
          <LockIcon className="w-12 h-12 text-yellow-500 dark:text-yellow-400" />
        </motion.div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-2">
          ACCESS LIMITED
        </h2>
        <p className="text-center text-base text-gray-600 dark:text-gray-300 mb-4">
          Upgrade your plan today to unlock all features and enjoy uninterrupted access.
        </p>
        <Button
          type="button"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative group overflow-hidden bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
        >
          <span className="relative z-10 text-sm">
            Upgrade Now
          </span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-500"
            initial={{ x: "100%" }}
            animate={{ x: isHovered ? "0%" : "100%" }}
            transition={{ duration: 0.5 }}
          />
        </Button>
      </div>
    </motion.div>
  )
}

