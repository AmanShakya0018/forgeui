"use client";
import { CodeBlock } from "@/components/ui/code-block";
import React from "react";

const NextjsInstallationPage = () => {
  const title = "Install Next.js";
  const description = "Install Next.js with Create Next App";

  const code2 = `cd my-app
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
    <article className="container mx-auto max-w-6xl py-6 lg:pl-8">
      <h1 className="mb-4 text-3xl font-bold sm:text-4xl">{title}</h1>
      <p className="mt-0 text-neutral-500 dark:text-zinc-400">{description}</p>

      <div className="mt-6 flex flex-col gap-5 border-l border-neutral-300 dark:border-neutral-700">
        <span className="flex h-8 items-center gap-6">
          <span className="h-full w-[6px] rounded-br-full rounded-tr-full bg-neutral-300 dark:bg-neutral-700"></span>
          <span className="scroll-m-20 text-lg font-semibold tracking-tight text-black dark:text-neutral-200">
            Create a new project
          </span>
        </span>
        <span className="pl-7">
          <CodeBlock
            code={`npx create-next-app@latest`}
            language="javascript"
          />
        </span>
      </div>
      <div className="flex flex-col gap-5 border-l border-neutral-300 py-6 dark:border-neutral-700">
        <span className="flex h-8 items-center gap-6">
          <span className="h-full w-[6px] rounded-br-full rounded-tr-full bg-neutral-300 dark:bg-neutral-700"></span>
          <span className="scroll-m-20 text-lg font-semibold tracking-tight text-black dark:text-neutral-200">
            As you install, the following prompts will appear:
          </span>
        </span>
        <span className="pl-7">
          <CodeBlock code={code} language="javascript" />
        </span>
      </div>
      <div className="flex flex-col gap-5 border-l border-neutral-300 pt-6 dark:border-neutral-700">
        <span className="flex h-8 items-center gap-6">
          <span className="h-full w-[6px] rounded-br-full rounded-tr-full bg-neutral-300 dark:bg-neutral-700"></span>
          <span className="scroll-m-20 text-lg font-semibold tracking-tight text-black dark:text-neutral-200">
            On installation, you&apos;ll see the following prompts:
          </span>
        </span>
        <span className="pl-7">
          <CodeBlock code={code2} language="javascript" />
        </span>
      </div>
    </article>
  );
};

export default NextjsInstallationPage;
