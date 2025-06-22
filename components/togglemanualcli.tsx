// "use client";
// import React from "react";

// interface ToggleManualCliProps {
//   sourceManual: boolean;
//   setSourceManual: (value: boolean) => void;
// }

// const ToggleManualCli = ({
//   sourceManual,
//   setSourceManual,
// }: ToggleManualCliProps) => {
//   return (
//     <>
//       <h2
//         id="installation"
//         className="mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight text-black first:mt-0 dark:text-white"
//       >
//         Installation
//       </h2>
//       <div className="my-6 flex flex-col gap-2 border-b border-neutral-300/50 dark:border-neutral-800/60 xs:flex-row xs:justify-between">
//         <div className="flex flex-row gap-2">
//           <button
//             className={`relative inline-flex h-9 items-center justify-center gap-1.5 rounded-none border-b-2 px-4 pb-3 pt-2 text-sm font-medium transition-colors ${
//               !sourceManual
//                 ? "border-b-primary text-zinc-950 duration-300 dark:text-white"
//                 : "border-b-transparent text-neutral-500 dark:text-neutral-400"
//             }`}
//             onClick={() => setSourceManual(false)}
//           >
//             <span>CLI</span>
//           </button>
//           <button
//             className={`relative inline-flex h-9 items-center justify-center gap-1.5 rounded-none border-b-2 px-4 pb-3 pt-2 text-sm font-medium transition-colors ${
//               sourceManual
//                 ? "border-b-primary text-zinc-950 duration-300 dark:text-white"
//                 : "border-b-transparent text-neutral-500 dark:text-neutral-400"
//             }`}
//             onClick={() => setSourceManual(true)}
//           >
//             <span>Manual</span>
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ToggleManualCli;
"use client";

import { motion } from "framer-motion";

interface ToggleManualCliProps {
  sourceManual: boolean;
  setSourceManual: (sourceManual: boolean) => void;
}

export default function ToggleManualCli({
  sourceManual,
  setSourceManual,
}: ToggleManualCliProps) {
  return (
    <>
      <h2
        id="installation"
        className="mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight text-black first:mt-0 dark:text-white"
      >
        Installation
      </h2>
      <div className="my-6 flex flex-col gap-2 border-b border-neutral-300/50 dark:border-neutral-800/60 xs:flex-row xs:justify-between">
        <div className="relative flex flex-row gap-2">
          <button
            className={`relative inline-flex h-9 items-center justify-center gap-1.5 rounded-none px-4 pb-3 pt-2 text-sm font-medium transition-colors ${
              !sourceManual
                ? "text-zinc-950 duration-300 dark:text-white"
                : "text-neutral-500 dark:text-neutral-400"
            }`}
            onClick={() => setSourceManual(false)}
          >
            {!sourceManual && (
              <motion.div
                layoutId="toggle-underline"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              />
            )}
            <span>CLI</span>
          </button>
          <button
            className={`relative inline-flex h-9 items-center justify-center gap-1.5 rounded-none px-4 pb-3 pt-2 text-sm font-medium transition-colors ${
              sourceManual
                ? "text-zinc-950 duration-300 dark:text-white"
                : "text-neutral-500 dark:text-neutral-400"
            }`}
            onClick={() => setSourceManual(true)}
          >
            {sourceManual && (
              <motion.div
                layoutId="toggle-underline"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              />
            )}
            <span>Manual</span>
          </button>
        </div>
      </div>
    </>
  );
}
