import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function IntroductionPage() {
  return (
    <article className="container lg:pl-8 py-6 max-w-6xl mx-auto">
      <h1 className="mb-2 text-4xl font-bold">Forge UI</h1>
      <p className="text-lg mt-0 text-neutral-400">Elegant components crafted with Aceternity UI and ShadCN UI. Copy-paste ready, accessible, customizable, and open-source.</p>

      {/* Introduction Section */}
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight mt-6">Introduction</h2>
        <div className="border-b border-y-2 rounded-lg border-slate-300 dark:border-neutral-800" />
        <div className="space-y-6 text-neutral-400">
          <p>
            Forge UI offers reusable components built with{" "}
            <Link href="https://ui.aceternity.com/" className="font-medium">
              Aceternity UI
            </Link>{" "}
            and{" "}
            <Link href="https://ui.shadcn.com" className="font-medium">
              Shadcn UI,
            </Link>{" "}
            ready to copy and integrate into your apps.
            Our platform simplifies the integration of modern UI components into your projects, eliminating the need for time-consuming custom styling or animation setups.
          </p>
          <p>
            With just a simple copy-and-paste, you can embed beautifully crafted, functional components directly into your codebase without any additional configuration. Focus your energy on delivering exceptional user experiences using our pre-designed components, optimized for performance and consistency.
          </p>
          <p>
            Designed for seamless compatibility with leading frameworks, our solution empowers developers to streamline their workflow and create with ease.
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight mt-6">Philosophy</h2>
        <div className="border-b border-y-2 rounded-lg border-slate-300 dark:border-neutral-800" />
        <div className="space-y-6 text-neutral-400">
          <p>
            I firmly believe that excellent design plays a crucial role in the value of software. It&apos;s one of the primary ways to build trust with users, especially when interacting with people online. Trust is vital for online businesses because it’s the first thing a potential customer assesses before deciding to make a purchase or provide their payment details.
          </p>
          <p>
            Bad design negatively impacts your team’s reputation. It gives the impression of being careless, incomplete, and unreliable. It signals that the team lacks consideration for the user experience.
          </p>
          <p>
            Effective design suggests that the team is organized and capable. It builds confidence that they will deliver quality work moving forward.
          </p>
        </div>
      </div>

      <div className="space-y-1 mt-6">
        <h2 className="text-3xl font-bold tracking-tight">FAQ</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is Forge UI free to use?</AccordionTrigger>
            <AccordionContent>
              Absolutely! These components are free to use for both personal and commercial purposes,
              and there’s no need for attribution.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What frameworks work with Forge UI?</AccordionTrigger>
            <AccordionContent>
              These components are compatible with any React-based framework, including Next.js and others.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Does Forge UI support JavaScript?</AccordionTrigger>
            <AccordionContent>
              Yes, you can integrate these components into JavaScript projects. TypeScript is used primarily for
              type checking and better documentation.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="mt-6 space-y-2 ">
        <h2 className="text-3xl font-bold">Credits</h2>
        <p className="text-neutral-400 gap-4">
          Built with{" "}
          <Link href="https://ui.aceternity.com/" className="font-medium mr-2">
            Aceternity UI,
          </Link>
          {""}
          <Link href="https://ui.shadcn.com" className="font-medium">
            Shadcn UI
          </Link>
          ,{" "}
          <Link href="https://nextjs.org" className="font-medium">
            Next.js
          </Link>
          , and{" "}
          <Link href="https://www.typescriptlang.org" className="font-medium">
            TypeScript
          </Link>
          .
        </p>
      </div>
    </article>
  )
}