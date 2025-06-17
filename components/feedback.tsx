"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { X, Star } from "lucide-react";
import { LuMessageCircle } from "react-icons/lu";
import axios from "axios";

const FeedbackButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  );

  const toggleForm = () => {
    setIsOpen(!isOpen);
    setSubmitStatus(null);
  };

  const handleRatingClick = (rating: number) => {
    setSelectedRating(rating);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post("/api/feedback", {
        ...formData,
        rating: selectedRating,
      });

      if (response.status === 200) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", feedback: "" });
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
        onClick={toggleForm}
        className="fixed bottom-5 right-5 z-[100] flex items-center gap-2 rounded-full bg-zinc-800 px-4 py-2 text-sm font-medium text-white shadow-lg transition-all duration-200 hover:bg-zinc-700"
      >
        <LuMessageCircle />
        Feedback
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
              <h2 className="mb-1 text-2xl font-bold">
                How was your experience?
              </h2>
              <p className="text-sm opacity-80">
                Your feedback helps us improve and provide a better experience.
              </p>
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
                  <Label htmlFor="rating">Rating</Label>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        onClick={() => handleRatingClick(star)}
                        className={`h-8 w-8 cursor-pointer ${
                          star <= selectedRating
                            ? "fill-current text-yellow-400"
                            : "text-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="feedback">Your Feedback</Label>
                  <Textarea
                    id="feedback"
                    name="feedback"
                    placeholder="Your comments or suggestions"
                    className="border-neutral-200 bg-white"
                    value={formData.feedback}
                    maxLength={300}
                    onChange={(e) =>
                      setFormData({ ...formData, feedback: e.target.value })
                    }
                    required
                  />
                  <p className="text-right text-xs text-gray-500">
                    {formData.feedback.length}/300
                  </p>
                </div>
                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-emerald-600 text-white transition-opacity hover:bg-emerald-700 disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Feedback"}
                  </Button>
                </div>

                {submitStatus === "success" && (
                  <p className="text-center text-xs text-green-600">
                    Feedback submitted successfully!
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="text-center text-xs text-red-600">
                    Failed to submit feedback. Please try again.
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

export default FeedbackButton;
