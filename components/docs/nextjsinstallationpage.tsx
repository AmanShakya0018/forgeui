"use client";
import React from "react";
import Dependencies from "../content/dependencies";
import { CommandBlock } from "../code/commmand-block";
import { CodeBlock } from "../code/CodeBlock";

const NextjsInstallationPage = () => {
  const title = "Install Next.js";
  const description = "Install Next.js with Create Next App";

  const createAppMap = {
    npm: "npx create-next-app@latest",
    pnpm: "pnpm dlx create-next-app@latest",
    yarn: "yarn create next-app",
    bun: "bunx create-next-app@latest",
  };

  const serverStartMap = {
    npm: "cd my-app && npm run dev",
    pnpm: "cd my-app && pnpm dev",
    yarn: "cd my-app && yarn dev",
    bun: "cd my-app && bun dev",
  };

  const code = `What is your project named? my-app
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
      <h1 id="installation" className="mb-4 text-3xl font-bold sm:text-4xl">
        {title}
      </h1>
      <p className="mb-8 text-neutral-500 dark:text-zinc-400">{description}</p>

      <Dependencies step={1} title="Create a new project">
        <CommandBlock
          npmCommand={createAppMap.npm}
          pnpmCommand={createAppMap.pnpm}
          yarnCommand={createAppMap.yarn}
          bunCommand={createAppMap.bun}
        />
      </Dependencies>
      <Dependencies
        step={2}
        title="As you install, the following prompts will appear:"
      >
        <CodeBlock code={code} />
      </Dependencies>
      <Dependencies step={3} title="Start the development server">
        <CommandBlock
          npmCommand={serverStartMap.npm}
          pnpmCommand={serverStartMap.pnpm}
          yarnCommand={serverStartMap.yarn}
          bunCommand={serverStartMap.bun}
        />
      </Dependencies>
    </article>
  );
};

export default NextjsInstallationPage;
