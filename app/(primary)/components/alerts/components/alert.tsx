import { Check, X } from "lucide-react";
import Image from "next/image";

export default function Alert() {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="relative bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-[0_1px_6px_0_rgba(0,0,0,0.02)] rounded-xl p-4">
        <div className="flex items-center gap-4">
          <div className="relative h-10 w-10 flex-shrink-0">
            <Image
              src="/pfp.png"
              alt="image"
              sizes="40px"
              fill
              className="rounded-full object-cover"
            />
            <div className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-white dark:ring-zinc-950" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs md:text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  You’re Invited!
                </p>
                <p className="text-[10px] md:text-[13px] text-zinc-500 dark:text-zinc-400 mt-0.5">
                  Be a part of Forgeui&apos;s{" "}
                  <span className="font-medium text-zinc-700 dark:text-zinc-300">
                    Technical Team
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg flex items-center justify-center h-8 w-8 p-0 hover:bg-red-50 dark:hover:bg-red-950/50 text-zinc-400 hover:text-red-600 dark:text-zinc-500 dark:hover:text-red-400 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="rounded-lg flex items-center justify-center h-8 w-8 p-0 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 text-zinc-400 hover:text-emerald-600 dark:text-zinc-500 dark:hover:text-emerald-400 transition-colors"
            >
              <Check className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
