"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Sparkles, X, } from "lucide-react";
import axios from "axios";
import { motion } from "framer-motion";

const RequestComponents = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
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
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut", type: "spring", damping: 10, delay: 0.2 }}
        initial={{ y: -20, opacity: 0 }} className='max-w-[88rem] mx-auto flex flex-col items-center justify-center'>
        <button onClick={toggleForm} className=" no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
            <span>✨ Request For Components</span>
            <svg
              fill="none"
              height="16"
              viewBox="0 0 24 24"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.75 8.75L14.25 12L10.75 15.25"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </button>
      </motion.div>

      {isOpen && (
        <div
          onClick={toggleForm}
          className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50 z-[999]"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl w-full max-w-[450px] shadow-2xl relative"
          >
            <button
              className="absolute top-4 right-4 p-1 rounded-full text-gray-800 hover:bg-gray-200"
              onClick={toggleForm}
            >
              <X size={20} />
            </button>
            <div className="px-6 py-6 text-gray-800">
              <h2 className="text-xl font-bold mb-1 flex flex-row gap-1 items-center">Request a component <Sparkles className="h-5 w-5 text-yellow-500" /></h2>
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="bg-white border-neutral-200"
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
                    className="bg-white border-neutral-200"
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
                    className="bg-white border-neutral-200"
                    value={formData.description}
                    maxLength={300}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    required
                  />
                  <p className="text-xs text-gray-500 text-right">
                    {formData.description.length}/300
                  </p>
                </div>
                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-emerald-600 text-white hover:bg-emerald-700 transition-opacity disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </div>

                {submitStatus === "success" && (
                  <p className="text-green-600 text-center text-xs">
                    Component Description submitted successfully!
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="text-red-600 text-center text-xs">
                    Failed to submit. Please try again.
                  </p>
                )}
              </form>
            </div>
            <div className="bg-gray-100 rounded-b-2xl px-6 py-3 text-center">
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
  )
}

export default RequestComponents