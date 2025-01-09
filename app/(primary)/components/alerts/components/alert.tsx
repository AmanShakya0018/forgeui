import { Check, X } from "lucide-react";
import Image from "next/image";

export default function Alert() {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="rounded-xl p-4 shadow-[0_1px_6px_0_rgba(0,0,0,0.02)] bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 relative">
        <div className="flex items-center gap-4">
          <div className="relative flex-shrink-0 w-10 h-10">
            <Image
              src="/pfp.png"
              alt="image"
              sizes="40px"
              fill
              className="object-cover rounded-full"
            />
            <div className="absolute right-0 bottom-0 w-2.5 h-2.5 rounded-full bg-green-500 ring-2 ring-white dark:ring-zinc-950" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-4 justify-between">
              <div>
                <p className="font-medium text-xs md:text-sm text-zinc-700 dark:text-zinc-300">
                  You’re Invited!
                </p>
                <p className="text-[10px] md:text-[13px] mt-0.5 text-zinc-500 dark:text-zinc-400">
                  Be a part of Forgeui&apos;s{" "}
                  <span className="font-medium text-zinc-700 dark:text-zinc-300">
                    Technical Team
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <button
              type="button"
              className="h-8 w-8 p-0 rounded-lg flex items-center justify-center text-zinc-400 hover:text-red-600 dark:text-zinc-500 hover:bg-red-50 dark:hover:bg-red-950/50 dark:hover:text-red-400 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="h-8 w-8 p-0 rounded-lg flex items-center justify-center text-zinc-400 hover:text-emerald-600 dark:text-zinc-500 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 dark:hover:text-emerald-400 transition-colors"
            >
              <Check className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
