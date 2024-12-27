"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import { useToast } from '@/hooks/use-toast'

const ContactPage = () => {
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }
  const handleClick = () => {
    toast({
      title: 'Available soon',
      description: 'This feature is in development and will be available soon.',
    })

    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }

  return (
    <article className="container lg:pl-8 py-6 prose dark:prose-invert max-w-[45rem] mx-auto">
      <h1 className="mb-2 text-5xl font-extrabold">Contact Us</h1>

      <p className="text-lg mt-0 text-gray-400">
        If you have any questions or need assistance, please feel free to reach out to us. We&apos;re here to help!
      </p>

      <div className="mt-6 space-y-4 max-w-[45rem] mx-auto">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
        </div>
        <div className="mx-auto">
          <Button size="sm" onClick={handleClick}>Send</Button>
        </div>
      </div>
    </article>
  )
}

export default ContactPage
