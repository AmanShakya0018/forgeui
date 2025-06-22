"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className={cn(
        "group rounded-lg border-[0.5px] border-neutral-200/70 dark:border-neutral-800/60",
        "transition-all duration-200 ease-in-out",
        isOpen
          ? "bg-linear-to-br from-white via-gray-50/50 to-white dark:from-white/5 dark:via-white/2 dark:to-white/5"
          : "hover:bg-gray-50/50 dark:hover:bg-white/[0.02]"
      )}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-2 py-4 flex items-center justify-between gap-4"
      >
        <h3
          className={cn(
            "text-base font-medium transition-colors duration-200 text-left",
            "text-gray-700 dark:text-gray-300",
            isOpen && "text-gray-900 dark:text-white"
          )}
        >
          {question}
        </h3>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.1 : 1,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className={cn(
            "p-0.5 rounded-full shrink-0",
            "transition-colors duration-200",
            isOpen
              ? "text-primary"
              : "text-gray-400 dark:text-gray-500"
          )}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: {
                  duration: 0.4,
                  ease: [0.04, 0.62, 0.23, 0.98],
                },
                opacity: {
                  duration: 0.25,
                  delay: 0.1,
                },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: {
                  duration: 0.3,
                  ease: "easeInOut",
                },
                opacity: {
                  duration: 0.25,
                },
              },
            }}
          >
            <div className="px-6 pb-4 pt-2">
              <motion.p
                initial={{ y: -8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -8, opacity: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed"
              >
                {answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function FAQ() {
  const faqs: Omit<FAQItemProps, "index">[] = [
    {
      question: "What makes ForgeUI unique?",
      answer: "ForgeUI stands out with its intuitive design, and seamless developer experience. We prioritize both flexibility and performance to enhance your workflow.",
    },
    {
      question: "Is ForgeUI compatible with Next.js and other frameworks?",
      answer: "Yes! ForgeUI is optimized for Next.js and works seamlessly with React projects. It follows best practices for performance and accessibility across different frameworks.",
    },
    {
      question: "Can I customize the components?",
      answer: "Absolutely! ForgeUI is designed for customization. You can easily modify styles using Tailwind CSS and tweak components to fit your project's design language.",
    },
    {
      question: "How often do you update ForgeUI?",
      answer: "We continuously improve ForgeUI by adding new components, enhancing performance, and incorporating user feedback. Follow our GitHub repository for updates and releases.",
    },
    {
      question: "What kind of support is available?",
      answer: "We offer extensive support through our documentation, community forums, and GitHub discussions. Developers can also contribute, request features, and report issues to keep ForgeUI evolving.",
    },
    {
      question: "How does the pricing work?",
      answer: "ForgeUI is completely free and open-source, making it accessible to all developers. No hidden costs—just a library of high-quality components you can use instantly.",
    },
  ];

  return (
    <section className="py-24 w-full bg-linear-to-b from-transparent via-gray-50/50 to-transparent dark:from-transparent dark:via-white/[0.02] dark:to-transparent">
      <motion.div

        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container px-4 mx-auto">
        <motion.div
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-semibold mb-3 bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Everything you need to know about our platform
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default FAQ;