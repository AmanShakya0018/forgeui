'use client'

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
      className="w-full max-w-xl mx-auto bg-white dark:bg-zinc-950 rounded-2xl shadow-lg dark:shadow-white/10 overflow-hidden border border-gray-200 dark:border-zinc-800"
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
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute right-0 bottom-0 w-3 h-3 rounded-full bg-green-500 ring-1 ring-white dark:ring-zinc-800"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Emma Johnson</h3>
              <p className="text-[0.875rem] text-zinc-500 dark:text-zinc-400">@emma_codes · 3h ago</p>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 text-zinc-400 hover:text-zinc-500 dark:hover:text-zinc-300 transition-colors duration-200"
          >
            <MoreHorizontal className="w-5 h-5" />
          </motion.button>
        </div>

        <p className="text-[0.9rem] text-zinc-600 dark:text-zinc-300 mb-4">
          Just launched my new portfolio site using Next.js and Tailwind CSS! Check it out and let me know what you think. Always open to feedback and suggestions!
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex space-x-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center space-x-2 text-zinc-500 dark:text-zinc-400 hover:text-pink-500"
            >
              <Heart className="w-5 h-5" />
              <span className="text-sm font-medium">243</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center space-x-2 text-zinc-500 dark:text-zinc-400 hover:text-blue-500"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm font-medium">89</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center space-x-2 text-zinc-500 dark:text-zinc-400 hover:text-green-500"
            >
              <Share2 className="w-5 h-5" />
              <span className="text-sm font-medium">56</span>
            </motion.button>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hidden sm:block p-2 rounded-full text-zinc-400 hover:text-yellow-500 hover:bg-yellow-100 dark:hover:bg-yellow-900 transition-colors duration-200"
          >
            <Bookmark className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

