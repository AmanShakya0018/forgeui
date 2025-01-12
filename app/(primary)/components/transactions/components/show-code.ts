export const title = "Transactions";
export const routepoint = "transactions";
export const description = "A dynamic transaction list showcasing categorized activities with icons, timestamps, and interactive hover effects.";


export const democode = `"use client";
import React from 'react'
import  Transactions from './components/ui/transactions';
function Page() {
return (
  <>
    <Transactions />
  </>
)
}

export default Page;`;

export const code = `"use client"

import { cn } from "@/lib/utils"
import { Plane, Briefcase, Coffee, ChevronRight, LucideIcon, Clock } from 'lucide-react'
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface Transaction {
  id: string
  title: string
  money: string
  subset: "incoming" | "outgoing"
  genre: string
  icon: LucideIcon
  time: string
  status: "completed" | "pending" | "failed"
}

interface TransactionsProps {
  transactions?: Transaction[]
  className?: string
}

const TRANSACTIONS: Transaction[] = [
  {
    id: "1",
    title: "Business Trip",
    money: "$1,200.00",
    subset: "outgoing",
    genre: "travel",
    icon: Plane,
    time: "2 hours ago",
    status: "completed",
  },
  {
    id: "2",
    title: "Morning Coffee",
    money: "$5.00",
    subset: "outgoing",
    genre: "coffee",
    icon: Coffee,
    time: "Today at 7:30 AM",
    status: "completed",
  },
  {
    id: "3",
    title: "Freelance Work",
    money: "$3,800.00",
    subset: "incoming",
    genre: "work",
    icon: Briefcase,
    time: "Yesterday at 6:00 PM",
    status: "completed",
  },
]

const genreForms = {
  travel:
    "from-teal-600/20 via-teal-600/10 to-teal-600/5 text-teal-700 dark:from-teal-400/30 dark:via-teal-400/20 dark:to-teal-400/10 dark:text-teal-300",
  work: "from-purple-600/20 via-purple-600/10 to-purple-600/5 text-purple-700 dark:from-purple-400/30 dark:via-purple-400/20 dark:to-purple-400/10 dark:text-purple-300",
  coffee:
    "from-amber-600/20 via-amber-600/10 to-amber-600/5 text-amber-700 dark:from-amber-400/30 dark:via-amber-400/20 dark:to-amber-400/10 dark:text-amber-300",
  groceries:
    "from-green-600/20 via-green-600/10 to-green-600/5 text-green-700 dark:from-green-400/30 dark:via-green-400/20 dark:to-green-400/10 dark:text-green-300",
}

export default function Transactions({
  transactions = TRANSACTIONS,
  className,
}: TransactionsProps) {
  const [scaledId, setScaledId] = useState<string | null>(null)

  return (
    <TooltipProvider>
      <div
        className={cn(
          "w-full max-w-lg mx-auto p-1",
          "bg-white dark:bg-zinc-900/70",
          "border border-zinc-200 dark:border-zinc-800",
          "rounded-3xl shadow-xl backdrop-blur-xl",
          className
        )}
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-[1rem] sm:text-xl font-bold text-zinc-800 dark:text-zinc-100">
                Financial Overview
              </h2>
              <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-1 bg-zinc-100 dark:bg-zinc-800 rounded-full px-2 py-0.5 inline-block">
                18 Transactions
              </p>
            </div>
            <Button className="hidden sm:flex flex-row bg-transparent text-neutral-400 hover:bg-zinc-100 dark:hover:bg-zinc-800" size="sm">
              Last Week
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <ScrollArea className="max-h-fit pr-4">
            <div className="space-y-4">
              {transactions.map((transaction) => (
                <motion.div
                  key={transaction.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className={cn(
                    "group relative flex items-center gap-4",
                    "px-0 py-3 sm:p-4 rounded-2xl",
                    "transition-all duration-300 ease-out",
                    "hover:bg-zinc-50 dark:hover:bg-zinc-800/50",
                    "hover:shadow-md",
                    "border border-transparent",
                    "hover:border-zinc-200 dark:hover:border-zinc-700/50"
                  )}
                  onClick={() => setScaledId(scaledId === transaction.id ? null : transaction.id)}
                >
                  <Tooltip>
                    <TooltipTrigger>
                      <div
                        className={cn(
                          "relative",
                          "w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center",
                          "rounded-2xl",
                          "bg-gradient-to-br",
                          genreForms[
                          transaction.genre as keyof typeof genreForms
                          ],
                          "transition-all duration-300",
                          "group-hover:scale-110",
                          "group-hover:shadow-lg",
                          "border border-zinc-200/50 dark:border-zinc-700/50"
                        )}
                      >
                        <transaction.icon className="w-6 h-6" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{transaction.genre}</p>
                    </TooltipContent>
                  </Tooltip>

                  <div className="flex-1 sm:flex items-center justify-between min-w-0">
                    <div className="space-y-1 min-w-0">
                      <h3 className="text-xs sm:text-[1rem]  -ml-1 sm:pl-0 font-semibold text-zinc-900 dark:text-zinc-100 truncate">
                        {transaction.title}
                      </h3>
                      <p className="hidden sm:flex items-center gap-1 text-sm text-zinc-600 dark:text-zinc-400">
                        <Clock className="w-4 h-4 text-zinc-400" />
                        {transaction.time}
                      </p>
                    </div>

                    <div
                      className={cn(
                        "flex items-center gap-2 flex-shrink-0 pl-0 sm:pl-4",
                        "transition-colors duration-300"
                      )}
                    >
                      <span
                        className={cn(
                          "text-sm sm:text-[1rem] font-semibold",
                          transaction.subset === "incoming"
                            ? "text-emerald-600 dark:text-emerald-400"
                            : "text-rose-600 dark:text-rose-400"
                        )}
                      >
                        {transaction.subset === "incoming" ? "+" : "-"}
                        {transaction.money}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollArea>
        </div>

        <div className="py-1 border-t flex justify-center border-zinc-200 dark:border-zinc-800">
          <Button className="w-full max-w-48 py-2 px-4 rounded-xl text-sm font-medium
            text-zinc-700 dark:text-zinc-300 bg-transparent
            hover:bg-zinc-100 dark:hover:bg-zinc-800
            transition-colors duration-200"
          >
            View All Transactions
          </Button>
        </div>
      </div>
    </TooltipProvider>
  )
}
`;