export const title = "Payment Card";
export const routepoint = "payment-card";
export const description = "A sleek payment card highlighting a successful transaction with smooth animations and modern design.";

export const cliscript = "npx shadcn@latest add \"https://forgeui.amanshakya.in/registry/payment-card.json\"";

export const democode = `"use client";
import React from 'react'
import  PaymentCard from './components/ui/payment-card';
function Page() {
  return (
    <>
      <PaymentCard />
    </>
  )
}

export default Page;`;

export const code = `"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Banknote } from 'lucide-react';

export default function PaymentCard() {
return (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="w-full max-w-md mx-auto"
  >
    <motion.div
      initial={{ scale: 0.95 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className={cn(
        "relative overflow-hidden",
        "bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50",
        "dark:from-emerald-900/50 dark:via-teal-900/50 dark:to-green-900/50",
        "border border-emerald-200/50 dark:border-emerald-700/30",
        "shadow-xl shadow-emerald-500/10 dark:shadow-emerald-500/5",
        "p-6 rounded-3xl"
      )}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="absolute inset-0 bg-grid-slate-100/50 dark:bg-grid-slate-700/20 [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
      />
      <div className="relative flex items-start gap-4">
        <motion.div
          initial={{ scale: 0.5, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.1
          }}
          className="flex-shrink-0"
        >
          <divexport 
            className={cn(
              "w-16 h-16 rounded-xl overflow-hidden",
              "bg-gradient-to-br from-emerald-400 to-green-500",
              "flex items-center justify-center",
              "shadow-lg shadow-emerald-500/30 dark:shadow-emerald-500/20",
              "relative"
            )}
          >
            <div className="absolute inset-0 bg-emerald-600 opacity-20"
              style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                backgroundSize: "10px 10px"
              }}
            />
            <div className="relative z-10 transform -rotate-12">
              <Banknote className="h-8 w-8 text-white" />
            </div>
          </div>
        </motion.div>

        <div className="flex-1 min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-2"
          >
            <div className="flex flex-col gap-2">
              <div className="block sm:flex items-center justify-between">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-[0.8rem] ml-2 mb-1 sm:mb-0 sm:ml-0 sm:text-xl font-bold text-emerald-950 dark:text-emerald-100"
                >
                  Transaction Successful
                </motion.h3>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="px-3 py-1.5 rounded-full text-sm font-bold bg-white/90 dark:bg-white/10 text-emerald-600 dark:text-emerald-300 backdrop-blur-sm shadow-sm"
                >
                  $3,800.00
                </motion.span>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="hidden sm:block text-sm text-emerald-700 dark:text-emerald-300"
              >
                Your transaction has been successfully
                completed and credited to your account.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  </motion.div>
);
}
`;