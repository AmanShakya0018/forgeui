"use client";
import React from "react";
import Dependencies from "../content/dependencies";
import { CommandBlock } from "../code/commmand-block";
import { CodeBlock } from "../code/CodeBlock";
import { ComponentSource } from "../code/componentsource";

const InstallationPage = () => {
  const title = "Install Next.js and Tailwind CSS";
  const description =
    "Create a Next.js app, set up Tailwind CSS, and add global styles in one flow.";

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

  const tailwindSetupMap = {
    npm: "npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p",
    pnpm: "pnpm add -D tailwindcss postcss autoprefixer && pnpm dlx tailwindcss init -p",
    yarn: "yarn add -D tailwindcss postcss autoprefixer && npx tailwindcss init -p",
    bun: "bun add -d tailwindcss postcss autoprefixer && bunx tailwindcss init -p",
  };

  const registryAddMap = {
    npm: "npx shadcn@latest registry add @forgeui",
    pnpm: "pnpm dlx shadcn@latest registry add @forgeui",
    yarn: "yarn dlx shadcn@latest registry add @forgeui",
    bun: "bunx --bun shadcn@latest registry add @forgeui",
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

  const tailwindConfigCode = `/** @type {import('tailwindcss').Config} */
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

  const globalsCssCode = `@import "tailwindcss";

@plugin "tailwindcss-animate";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
  --color-sidebar-ring: var(--sidebar-ring);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar: var(--sidebar);
  --color-chart-5: var(--chart-5);
  --color-chart-4: var(--chart-4);
  --color-chart-3: var(--chart-3);
  --color-chart-2: var(--chart-2);
  --color-chart-1: var(--chart-1);
  --color-ring: var(--ring);
  --color-input: var(--input);
  --color-border: var(--border);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-destructive: var(--destructive);
  --color-accent-foreground: var(--accent-foreground);
  --color-accent: var(--accent);
  --color-muted-foreground: var(--muted-foreground);
  --color-muted: var(--muted);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-secondary: var(--secondary);
  --color-primary-foreground: var(--primary-foreground);
  --color-primary: var(--primary);
  --color-popover-foreground: var(--popover-foreground);
  --color-popover: var(--popover);
  --color-card-foreground: var(--card-foreground);
  --color-card: var(--card);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}

:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --radius: 0.625rem;
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.145 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.145 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.985 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.396 0.141 25.723);
  --destructive-foreground: oklch(0.637 0.237 25.331);
  --border: oklch(0.269 0 0);
  --input: oklch(0.269 0 0);
  --ring: oklch(0.439 0 0);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(0.269 0 0);
  --sidebar-ring: oklch(0.439 0 0);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }

  body {
    @apply bg-background text-foreground;
  }
}`;

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
      <Dependencies step={3} title="Install Tailwind CSS">
        <CommandBlock
          npmCommand={tailwindSetupMap.npm}
          pnpmCommand={tailwindSetupMap.pnpm}
          yarnCommand={tailwindSetupMap.yarn}
          bunCommand={tailwindSetupMap.bun}
        />
      </Dependencies>
      <Dependencies step={4} title="Configure your template paths">
        <CodeBlock fileName="tailwind.config.ts" code={tailwindConfigCode} />
      </Dependencies>
      <Dependencies step={5} title="Add the global styles to globals.css">
        <ComponentSource>
          <CodeBlock fileName="app/globals.css" code={globalsCssCode} />
        </ComponentSource>
      </Dependencies>
      <Dependencies step={6} title="Add Registry">
        <CommandBlock
          npmCommand={registryAddMap.npm}
          pnpmCommand={registryAddMap.pnpm}
          yarnCommand={registryAddMap.yarn}
          bunCommand={registryAddMap.bun}
        />
      </Dependencies>
      <Dependencies step={7} title="Start the development server">
        <CommandBlock
          npmCommand={serverStartMap.npm}
          pnpmCommand={serverStartMap.pnpm}
          yarnCommand={serverStartMap.yarn}
          bunCommand={serverStartMap.bun}
        />
      </Dependencies>
      <Dependencies step={8} title="Start using Tailwind">
        <CodeBlock
          fileName="app/page.tsx"
          code={`export default function Home() {
  return <h1 className="text-4xl font-extrabold">Hello world!</h1>;
}
`}
        />
      </Dependencies>
    </article>
  );
};

export default InstallationPage;
