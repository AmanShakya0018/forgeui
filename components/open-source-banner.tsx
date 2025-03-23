import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Star } from 'lucide-react'
import Link from "next/link"
import { SparklesCore } from "./ui/sparkles"

export default function OpenSourceBanner() {
  return (
    <div className="pt-6 px-2">
      <Card className="w-full max-w-3xl mx-auto border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-black">
        <CardHeader>
          <CardTitle className="text-black dark:text-white text-2xl font-bold text-center">
            Forge UI is Open Source!
          </CardTitle>
          <CardDescription className="text-center text-neutral-600 dark:text-neutral-300">
            We believe in the power of community-driven development.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-4">
          <p className="text-center text-sm md:text-base text-neutral-600 dark:text-neutral-300">
            Our project is fully open source, which means you can view, modify, and contribute to our codebase.
            We welcome contributions from developers of all skill levels!
          </p>
          <Link href="https://github.com/AmanShakya0018/forgeui" target="_blank" className="text-sm text-white dark:text-neutral-900 flex justify-center items-center border rounded-md py-2 px-5 bg-neutral-900 dark:bg-neutral-100"
          >
            <Github className="mr-2 h-4 w-4 text-xs sm:text-sm" />
            Star us on GitHub
            <Star className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
          </Link>
        </CardContent>
      </Card>
      <div className="w-full bg-white dark:bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="w-[40rem] h-40 relative">

          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
          />

          <div className="absolute inset-0 w-full h-full bg-white dark:bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
    </div>
  )
}

