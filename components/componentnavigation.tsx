"use client"

import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ComponentNavigationProps {
  previous?: { label: string; href: string }
  next?: { label: string; href: string }
}

export default function ComponentNavigation({ previous, next }: ComponentNavigationProps) {
  return (
    <div className="grid grid-cols-2 gap-4 mt-12">
      {previous ? (
        <Link
          href={previous.href}
          className="flex w-full flex-col gap-2 rounded-lg border border-zinc-300 bg-white p-4 text-sm transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900"
        >
          <div className="inline-flex items-center gap-0.5 text-zinc-500 dark:text-zinc-400">
            <ChevronLeft className="-ms-1 size-4 shrink-0 rtl:rotate-180" />
            <p>Previous</p>
          </div>
          <p className="font-medium">{previous.label}</p>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={next.href}
          className="flex w-full flex-col gap-2 rounded-lg border border-zinc-300 bg-white p-4 text-sm transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900 col-start-2 text-end"
        >
          <div className="inline-flex items-center gap-0.5 text-zinc-500 dark:text-zinc-400 flex-row-reverse">
            <ChevronRight className="-me-1 size-4 shrink-0 rtl:rotate-180" />
            <p>Next</p>
          </div>
          <p className="font-medium">{next.label}</p>
        </Link>
      ) : (
        <div />
      )}
    </div>
  )
}
