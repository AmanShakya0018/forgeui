export const title = "Todos";
export const routepoint = "todos";
export const description = "A sleek, responsive task management component displaying daily goals with priorities and completion tracking.";


export const democode = `"use client";
import React from 'react'
import  Todos from './components/ui/todos';
function Page() {
return (
  <>
    <Todos />
  </>
)
}

export default Page;`;

export const code = `'use client'

import { cn } from "@/lib/utils";
import { Circle, AlarmClock, MoreHorizontal, Plus } from 'lucide-react';
import { motion } from "framer-motion";

export default function Todos() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "w-full max-w-md",
        "bg-white dark:bg-zinc-900",
        "border border-zinc-200 dark:border-zinc-800",
        "rounded-3xl shadow-2xl overflow-hidden"
      )}
    >
      <div className="p-6 flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800">
        <div>
          <h2 className="font-bold text-2xl text-zinc-900 dark:text-zinc-100">
            Daily Goals
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden sm:block text-xs font-medium px-3 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-300">
            0/3 completed
          </span>
        </div>
      </div>

      <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
        <TaskItem
          text="Plan team meeting"
          time="2:00 PM"
          importance="High"
        />

        <TaskItem
          text="Write blog post draft"
          time="4:30 PM"
          importance="Medium"
        />

        <TaskItem
          text="Organize workspace"
          time="6:00 PM"
          importance="Low"
        />
      </div>

      <div className="p-4 border-t border-zinc-200 dark:border-zinc-800">
        <button
          type="button"
          className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-medium text-emerald-600 dark:text-emerald-400 
                        hover:text-emerald-700 dark:hover:text-emerald-300 
                        hover:bg-emerald-50 dark:hover:bg-emerald-900/50
                        rounded-2xl transition-all duration-300 ease-in-out"
        >
          <Plus className="w-5 h-5" />
          Add new task
        </button>
      </div>
    </motion.div>
  );
}

interface TaskItemProps {
  text: string;
  time: string;
  importance?: 'High' | 'Medium' | 'Low';
  flag?: boolean;
}

function TaskItem({ text, time, importance }: TaskItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="p-4 flex items-center gap-4 group"
    >
      <button type="button" className="flex-none">
        <Circle className="w-6 h-6 text-zinc-300 dark:text-zinc-600" />
      </button>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
            {text}
          </p>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <div className="flex items-center gap-1">
            <AlarmClock className="w-4 h-4 text-zinc-400" />
            <span className="text-xs text-zinc-500">
              {time}
            </span>
          </div>
          {importance && (
            <ImportanceBadge importance={importance} />
          )}
        </div>
      </div>
      <button
        type="button"
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <MoreHorizontal className="w-5 h-5 text-zinc-400" />
      </button>
    </motion.div>
  );
}

function ImportanceBadge({ importance }: { importance: 'High' | 'Medium' | 'Low' }) {
  const styles = {
    High: "border-rose-500 text-rose-700 dark:border-rose-500 dark:text-rose-400",
    Medium: "border-amber-500 text-amber-700 dark:border-amber-500 dark:text-amber-400",
    Low: "border-blue-500 text-blue-700 dark:border-blue-500 dark:text-blue-400",
  };

  return (
    <span className={cn(
      "text-xs px-2 py-0.5 rounded-full font-medium border",
      styles[importance]
    )}>
      {importance}
    </span>
  );
}
`;