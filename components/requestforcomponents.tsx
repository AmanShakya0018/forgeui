"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ChevronRight, Sparkles, X } from "lucide-react";
import axios from "axios";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const RequestComponents = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  );

  const toggleForm = () => {
    setIsOpen(!isOpen);
    setSubmitStatus(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post("/api/requestcomponents", {
        ...formData,
        rating: selectedRating,
      });

      if (response.status === 200) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", description: "" });
        setSelectedRating(0);
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button
        className="group relative mx-auto block max-w-fit rounded-full border border-neutral-400/20 bg-[#eeeeee] py-[5px] pl-1.5 pr-3 outline-none dark:border-neutral-700/70 dark:bg-[#161616] dark:shadow-inner dark:shadow-neutral-800/80"
        onClick={() => setIsOpen(true)}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div
          className={cn(
            "pointer-events-none absolute -inset-px rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box]",
            "[mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]",
          )}
        >
          <motion.div
            animate={{ opacity: isHover ? 0 : 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="absolute aspect-square bg-gradient-to-r from-transparent via-neutral-300 to-neutral-400 dark:from-transparent dark:via-neutral-600 dark:to-neutral-400"
              animate={{
                offsetDistance: isHover ? "0%" : ["0%", "100%"],
              }}
              style={{
                width: 18,
                offsetPath: `rect(0 auto auto 0 round ${18}px)`,
              }}
              transition={
                isHover
                  ? { delay: 0.5 }
                  : {
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 8,
                      ease: "linear",
                    }
              }
            />
          </motion.div>
        </div>
        <div className="relative z-10 flex items-center justify-between pl-2 pr-1">
          <span className="relative text-[10px] font-medium leading-none sm:text-xs">
            ✨ Request For Components
          </span>
          <ChevronRight className="ml-2 h-3 w-3 transition-all duration-200 ease-in-out group-hover:translate-x-1" />
        </div>
        <div
          aria-hidden
          className={cn(
            "absolute inset-0 z-0 size-full rounded-[inherit] bg-gradient-to-t from-neutral-500/10 duration-200 ease-out",
            "opacity-0 group-hover:opacity-100 dark:from-neutral-900/40 dark:to-neutral-800/60",
          )}
        />
        <motion.div
          aria-hidden
          className={cn(
            "absolute inset-0 -z-[1] size-full rounded-full bg-amber-500/55 blur-[6px] dark:bg-white/15",
            isHover && "animate-pulse delay-300",
          )}
          animate={!isHover ? { opacity: 0 } : {}}
          transition={{ duration: 0.7 }}
        />
      </button>

      {isOpen && (
        <div
          onClick={toggleForm}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-50 p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[450px] rounded-2xl bg-white shadow-2xl"
          >
            <button
              className="absolute right-4 top-4 rounded-full p-1 text-gray-800 hover:bg-gray-200"
              onClick={toggleForm}
            >
              <X size={20} />
            </button>
            <div className="px-6 py-6 text-gray-800">
              <h2 className="mb-1 flex flex-row items-center gap-1 text-xl font-bold">
                Request a component{" "}
                <Sparkles className="h-5 w-5 text-yellow-500" />
              </h2>
              <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="border-neutral-200 bg-white"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    className="border-neutral-200 bg-white"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Describe your component</Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="A responsive, customizable card component with an image, title, description, and call-to-action button, styled for modern UI aesthetics."
                    className="border-neutral-200 bg-white"
                    value={formData.description}
                    maxLength={300}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    required
                  />
                  <p className="text-right text-xs text-gray-500">
                    {formData.description.length}/300
                  </p>
                </div>
                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-emerald-600 text-white transition-opacity hover:bg-emerald-700 disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </div>

                {submitStatus === "success" && (
                  <p className="text-center text-xs text-green-600">
                    Component Description submitted successfully!
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="text-center text-xs text-red-600">
                    Failed to submit. Please try again.
                  </p>
                )}
              </form>
            </div>
            <div className="rounded-b-2xl bg-gray-100 px-6 py-3 text-center">
              <p className="text-xs text-gray-600">
                Powered by{" "}
                <a
                  href="https://forgeui.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold hover:underline"
                >
                  ForgeUI
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RequestComponents;
