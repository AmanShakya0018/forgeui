import React from "react";
import { CodeBlock } from "../code/CodeBlock";
import { CommandBlock } from "../code/commmand-block";
import Dependencies from "../content/dependencies";

const TailwindInstallationPage = () => {
  const title = "Install Tailwind CSS";
  const description = "Install Tailwind CSS with Next.js";

  const serverStartMap = {
    npm: "cd my-app && npm run dev",
    pnpm: "cd my-app && pnpm dev",
    yarn: "cd my-app && yarn dev",
    bun: "cd my-app && bun dev",
  };

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

  const createAppMap = {
    npm: "npx create-next-app@latest my-app --typescript --eslint && cd my-app",
    pnpm: "pnpm dlx create-next-app@latest my-app --typescript --eslint && cd my-app",
    yarn: "yarn create next-app my-app --typescript --eslint && cd my-app",
    bun: "bunx create-next-app@latest my-app --typescript --eslint && cd my-app",
  };

  const tailwindSetupMap = {
    npm: `npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p`,
    pnpm: `pnpm add -D tailwindcss postcss autoprefixer && pnpm dlx tailwindcss init -p`,
    yarn: `yarn add -D tailwindcss postcss autoprefixer && npx tailwindcss init -p`,
    bun: `bun add -d tailwindcss postcss autoprefixer && bunx tailwindcss init -p`,
  };

  return (
    <article className="container mx-auto max-w-6xl py-6 lg:pl-8">
      <h1 id="installation" className="mb-4 text-3xl font-bold sm:text-4xl">
        {title}
      </h1>
      <p className="mb-6 text-neutral-500 dark:text-zinc-400">{description}</p>
      <Dependencies step={1} title="Create a new project">
        <CommandBlock
          npmCommand={createAppMap.npm}
          pnpmCommand={createAppMap.pnpm}
          yarnCommand={createAppMap.yarn}
          bunCommand={createAppMap.bun}
        />
      </Dependencies>
      <Dependencies step={2} title="Install Tailwind CSS">
        <CommandBlock
          npmCommand={tailwindSetupMap.npm}
          pnpmCommand={tailwindSetupMap.pnpm}
          yarnCommand={tailwindSetupMap.yarn}
          bunCommand={tailwindSetupMap.bun}
        />
      </Dependencies>
      <Dependencies step={3} title="Configure your template paths">
        <CodeBlock fileName="tailwind.config.ts" code={code2} />
      </Dependencies>
      <Dependencies step={4} title="Add the Tailwind directives to your CSS">
        <CodeBlock
          fileName="globals.css"
          code={`@tailwind base;
@tailwind components;
@tailwind utilities;
`}
        />
      </Dependencies>
      <Dependencies step={5} title="Start the development server">
        <CommandBlock
          npmCommand={serverStartMap.npm}
          pnpmCommand={serverStartMap.pnpm}
          yarnCommand={serverStartMap.yarn}
          bunCommand={serverStartMap.bun}
        />
      </Dependencies>
      <Dependencies step={6} title="Start using Tailwind">
        <CodeBlock
          fileName="page.tsx"
          code={`export default function Home() {
  return <h1 className="text-4xl font-extrabold">Hello world!</h1>;
}
`}
        />
      </Dependencies>
    </article>
  );
};

export default TailwindInstallationPage;
