"use client"
import { CodeBlock } from '@/components/ui/code-block';
import React from 'react'

const NextjsInstallationPage = () => {

  const title = "Install Next.js";
  const description = "Install Next.js with Create Next App";

  const code2 =
    `cd my-app
npm run dev`;

  const code = `
What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like to use \`src/\` directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to customize the default import alias (@/*)? No / Yes
What import alias would you like configured? @/*
`;

  return (
    <article className="container lg:pl-8 py-6 max-w-6xl mx-auto">
      <h1 className="mb-2 text-4xl font-bold">{title}</h1>
      <p className="text-lg mt-0 text-neutral-400">{description}</p>

      <div className="flex flex-col border-l border-neutral-300 dark:border-neutral-700 gap-5 mt-6">
        <span className='flex h-8 items-center gap-6'>
          <span className='bg-neutral-300 dark:bg-neutral-700 w-[6px] h-full rounded-tr-full rounded-br-full'></span>
          <span className='font-heading scroll-m-20 text-lg font-semibold tracking-tight text-black dark:text-neutral-200'>Create a new project</span>
        </span>
        <span className='pl-7'>
          <CodeBlock code={`npx create-next-app@latest`} language="javascript" />
        </span>
      </div>
      <div className="flex flex-col border-l border-neutral-300 dark:border-neutral-700 py-6 gap-5">
        <span className='flex h-8 items-center gap-6'>
          <span className='bg-neutral-300 dark:bg-neutral-700 w-[6px] h-full rounded-tr-full rounded-br-full'></span>
          <span className='font-heading scroll-m-20 text-lg font-semibold tracking-tight text-black dark:text-neutral-200'>As you install, the following prompts will appear:</span>
        </span>
        <ComponentSource className="pl-7">
          <CodeBlock code={code} language="javascript" />
        </ComponentSource>
      </div>
      <div className="flex flex-col border-l border-neutral-300 dark:border-neutral-700 py-6 gap-5">
        <span className='flex h-8 items-center gap-6'>
          <span className='bg-neutral-300 dark:bg-neutral-700 w-[6px] h-full rounded-tr-full rounded-br-full'></span>
          <span className='font-heading scroll-m-20 text-lg font-semibold tracking-tight text-black dark:text-neutral-200'>On installation, you&apos;ll see the following prompts:</span>
        </span>
        <span className='pl-7'>
          <CodeBlock code={code2} language="javascript" />
        </span>
      </div>
    </article>
  )
}

export default NextjsInstallationPage