"use client";
import { CodeBlock } from "@/components/ui/code-block";
import React from "react";

const TailwindInstallationPage = () => {
  const title = "Install Tailwind CSS";
  const description = "Install Tailwind CSS with Next.js";

  const code2 = `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using \`src\` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
`;

  const code = `npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p  
`;

  return (
    <article className="container mx-auto max-w-6xl py-6 lg:pl-8">
      <h1 id="installation" className="mb-4 text-3xl font-bold sm:text-4xl">
        {title}
      </h1>
      <p className="mt-0 text-neutral-500 dark:text-zinc-400">{description}</p>

      <div className="mt-6 flex flex-col gap-5 border-l border-neutral-300 dark:border-neutral-700">
        <span className="flex h-8 items-center gap-6">
          <span className="h-full w-[6px] rounded-br-full rounded-tr-full bg-neutral-300 dark:bg-neutral-700"></span>
          <span className="scroll-m-20 text-lg font-semibold tracking-tight text-black dark:text-neutral-200">
            Create your project
          </span>
        </span>
        <span className="pl-7">
          <CodeBlock
            code={`npx create-next-app@latest my-project --typescript --eslint
cd my-project
`}
            language="javascript"
          />
        </span>
      </div>
      <div className="flex flex-col gap-5 border-l border-neutral-300 py-6 dark:border-neutral-700">
        <span className="flex h-8 items-center gap-6">
          <span className="h-full w-[6px] rounded-br-full rounded-tr-full bg-neutral-300 dark:bg-neutral-700"></span>
          <span className="scroll-m-20 text-lg font-semibold tracking-tight text-black dark:text-neutral-200">
            Install Tailwind CSS
          </span>
        </span>
        <span className="pl-7">
          <CodeBlock code={code} language="javascript" />
        </span>
      </div>
      <div className="flex flex-col gap-5 border-l border-neutral-300 py-6 dark:border-neutral-700">
        <span className="flex h-8 items-center gap-6">
          <span className="h-full w-[6px] rounded-br-full rounded-tr-full bg-neutral-300 dark:bg-neutral-700"></span>
          <span className="scroll-m-20 text-lg font-semibold tracking-tight text-black dark:text-neutral-200">
            Configure your template paths
          </span>
        </span>
        <div className="ml-7 inline-flex max-w-max rounded bg-zinc-100 dark:bg-zinc-800">
          <span className="px-[0.3rem] py-[0.2rem] text-[0.8rem] font-normal tracking-wider text-neutral-800 dark:text-neutral-300">
            tailwind.config.ts
          </span>
        </div>
        <span className="pl-7">
          <CodeBlock code={code2} language="javascript" />
        </span>
      </div>
      <div className="flex flex-col gap-5 border-l border-neutral-300 py-6 dark:border-neutral-700">
        <span className="flex h-8 items-center gap-6">
          <span className="h-full w-[6px] rounded-br-full rounded-tr-full bg-neutral-300 dark:bg-neutral-700"></span>
          <span className="scroll-m-20 text-lg font-semibold tracking-tight text-black dark:text-neutral-200">
            Add the Tailwind directives to your CSS
          </span>
        </span>
        <div className="ml-7 inline-flex max-w-max rounded bg-zinc-100 dark:bg-zinc-800">
          <span className="px-[0.3rem] py-[0.2rem] text-[0.8rem] font-normal tracking-wider text-neutral-800 dark:text-neutral-300">
            globals.css
          </span>
        </div>
        <span className="pl-7">
          <CodeBlock
            code={`@tailwind base;
@tailwind components;
@tailwind utilities;
`}
            language="javascript"
          />
        </span>
      </div>
      <div className="flex flex-col gap-5 border-l border-neutral-300 py-6 dark:border-neutral-700">
        <span className="flex h-8 items-center gap-6">
          <span className="h-full w-[6px] rounded-br-full rounded-tr-full bg-neutral-300 dark:bg-neutral-700"></span>
          <span className="scroll-m-20 text-lg font-semibold tracking-tight text-black dark:text-neutral-200">
            Start your build process
          </span>
        </span>
        <span className="pl-7">
          <CodeBlock code={`npm run dev`} language="javascript" />
        </span>
      </div>
      <div className="flex flex-col gap-5 border-l border-neutral-300 pt-6 dark:border-neutral-700">
        <span className="flex h-8 items-center gap-6">
          <span className="h-full w-[6px] rounded-br-full rounded-tr-full bg-neutral-300 dark:bg-neutral-700"></span>
          <span className="scroll-m-20 text-lg font-semibold tracking-tight text-black dark:text-neutral-200">
            Start using Tailwind
          </span>
        </span>
        <div className="ml-7 inline-flex max-w-max rounded bg-zinc-100 dark:bg-zinc-800">
          <span className="px-[0.3rem] py-[0.2rem] text-[0.8rem] font-normal tracking-wider text-neutral-800 dark:text-neutral-300">
            index.tsx
          </span>
        </div>
        <span className="pl-7">
          <CodeBlock
            code={`export default function Home() {
  return <h1 className="text-4xl font-extrabold">Hello world!</h1>;
}
`}
            language="javascript"
          />
        </span>
      </div>
    </article>
  );
};

export default TailwindInstallationPage;
