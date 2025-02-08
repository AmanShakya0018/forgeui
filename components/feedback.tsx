"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { X, Star } from "lucide-react"
import { LuMessageCircle } from "react-icons/lu"

const FeedbackButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedRating, setSelectedRating] = useState<number>(0)

  const toggleForm = () => setIsOpen(!isOpen)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Feedback submitted")
    setIsOpen(false)
  }

  const handleRatingClick = (rating: number) => {
    setSelectedRating(rating)
  }

  return (
    <>
      <button
        onClick={toggleForm}
        className="fixed right-5 bottom-5 flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-zinc-800 rounded-full shadow-lg hover:bg-zinc-700 transition-all duration-200"
      >
        <LuMessageCircle />
        Feedback
      </button>

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
              <h2 className="text-2xl font-bold mb-1">How was your experience?</h2>
              <p className="text-sm opacity-80">
                Your feedback helps us improve and provide a better experience.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" type="text" placeholder="Your name" className="bg-white border-neutral-200" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="your@email.com" className="bg-white border-neutral-200" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="rating">Rating</Label>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        onClick={() => handleRatingClick(star)}
                        className={`w-8 h-8 cursor-pointer ${star <= selectedRating ? "text-yellow-400 fill-current" : "text-gray-400"
                          }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="feedback">Your Feedback</Label>
                  <Textarea id="feedback" name="feedback" placeholder="Your comments or suggestions" className="bg-white border-neutral-200" />
                </div>
                <div className="pt-4">
                  <Button type="submit" className="w-full bg-emerald-600 text-white hover:bg-emerald-700">
                    Submit Feedback
                  </Button>
                </div>
              </form>
            </div>
            <div className="bg-gray-100 rounded-b-2xl px-6 py-3 text-center">
              <p className="text-xs text-gray-600">
                Powered by{" "}
                <a href="https://forgeui.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline">
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

export default FeedbackButton
