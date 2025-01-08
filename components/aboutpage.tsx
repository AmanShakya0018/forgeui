import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const AboutPage = () => {
  return (
    <section className="py-4 px-4">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Discover the Future of UI Design</h1>
        <div className=' text-left pl-2 text-zinc-500 dark:text-zinc 400'>
          <p className="text-xl mb-6">
            Our platform lets you easily integrate the latest UI components into your projects without spending time on custom styling or animations.
          </p>
          <p className="text-lg text-left mb-6">
            Imagine the ease of copying and pasting functional, beautiful components directly into your code—no extra setup required.
          </p>
          <p className="text-lg text-left mb-6">
            Focus on delivering top-notch user experiences by using pre-designed components that are optimized for performance and consistency.
          </p>
          <p className="text-lg text-left mb-6">
            We empower developers with an effortless workflow. Our components are designed to fit seamlessly with the most popular modern frameworks.
          </p>
        </div>
        <Button size="sm">
          <Link
            href="/components/animated-carousel"
            className="px-4"
          >
            Explore Components
          </Link>
        </Button>
      </div>
    </section>
  )
}

export default AboutPage
