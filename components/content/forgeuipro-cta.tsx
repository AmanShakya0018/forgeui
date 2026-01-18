import { cn } from "@/lib/utils";
import Link from "next/link";

const ForgeUIProCTA = () => {
  return (
    <section className="py-4">
      <div className="mx-auto max-w-5xl rounded-xl bg-white px-2 py-6 shadow-lg shadow-black/15 ring-1 ring-neutral-200 dark:bg-neutral-950 dark:bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_70%)] dark:ring-neutral-800/70 sm:px-6">
        <div className="space-y-5 text-center">
          <div className="space-y-3">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
              Ship faster with ForgeUI Pro
            </h2>
            <p className="mx-auto max-w-xl text-balance text-sm text-neutral-600 dark:text-neutral-400">
              A complete UI kit for developers who value speed, polish, and
              control — without wasting weeks on UI.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Link
              href="https://pro.forgeui.in"
              target="_blank"
              className={cn(
                "relative flex items-center justify-center",
                "rounded-md bg-neutral-950 px-6 py-3 text-sm font-semibold text-white",
                "dark:bg-neutral-50 dark:text-neutral-900",
                "overflow-hidden hover:bg-black dark:hover:bg-white",
                "after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:h-[35%] after:w-full",
                "after:bg-gradient-to-t after:from-white/30 after:to-transparent dark:after:from-black/25",
                "transition-all duration-300",
              )}
            >
              Get lifetime access
            </Link>
            <p className="mt-2 text-[11px] text-neutral-500 dark:text-neutral-500">
              One-time purchase · No subscriptions
            </p>
          </div>

          <div className="flex justify-center gap-2 pt-4 sm:gap-6">
            <div className="text-center">
              <p className="text-lg font-bold text-neutral-900 dark:text-neutral-50 sm:text-xl">
                5+
              </p>
              <p className="text-[10px] text-neutral-600 dark:text-neutral-400">
                Full-page templates
              </p>
            </div>
            <div className="h-12 w-px border-l" />

            <div className="text-center">
              <p className="text-lg font-bold text-neutral-900 dark:text-neutral-50 sm:text-xl">
                80+
              </p>
              <p className="text-[10px] text-neutral-600 dark:text-neutral-400">
                Reusable UI components
              </p>
            </div>
            <div className="h-12 w-px border-l" />

            <div className="text-center">
              <p className="text-lg font-bold text-neutral-900 dark:text-neutral-50 sm:text-xl">
                1-click
              </p>
              <p className="text-[10px] text-neutral-600 dark:text-neutral-400">
                Copy, paste, ship
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgeUIProCTA;
