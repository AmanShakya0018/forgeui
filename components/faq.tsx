import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Faq = () => {
  return (
    <div>
      <section className="space-y-12 bg-background dark:bg-black py-10 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center">FAQs</h2>
        <div className="py-10 pb-20 sm:w-[500px] text-lg sm:text-xl">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger> What is ForgeUI?</AccordionTrigger>
              <AccordionContent>
                ForgeUI is a Next.js and Web Development tool designed to
                simplify your workflow by providing reusable components, guides,
                and resources to speed up your development process.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                Is ForgeUI suitable for big projects?
              </AccordionTrigger>
              <AccordionContent>
                ForgeUI is designed for both small and
                large-scale projects, making it easier to manage complex UIs and
                workflows efficiently.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                How will ForgeUI benefit me?
              </AccordionTrigger>
              <AccordionContent>
                By using ForgeUI, you save time on repetitive design tasks,
                focus on core functionalities, and build faster with pre-built
                components and templates.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                How do I get started with ForgeUI?
              </AccordionTrigger>
              <AccordionContent>
                Getting started is easy. Just follow our step-by-step guides,
                copy-paste components, and integrate them into your Next.js
                projects seamlessly.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                Can ForgeUI scale with my project?
              </AccordionTrigger>
              <AccordionContent>
                Yes, ForgeUI is built to grow with your needs, offering
                components and tools that scale as your projects become more
                complex.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  )
}

export default Faq