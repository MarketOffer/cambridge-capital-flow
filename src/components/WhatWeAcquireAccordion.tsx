import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import FadeIn from "./FadeIn";

const items = [
  {
    value: "buy",
    title: "Buy blocks at a discount",
    detail: "We acquire blocks of typically 2 to 20 units at block value — before individual unit pricing is applied. This creates an immediate margin.",
  },
  {
    value: "uplift",
    title: "Create 15–25% equity uplift",
    detail: "Through title splitting and high-spec renovation of each unit, we unlock embedded value that's invisible at block level.",
  },
  {
    value: "income",
    title: "Generate long-term hands-off income",
    detail: "Units are let to professional tenants or supported living providers, delivering consistent yields with minimal management overhead.",
  },
];

const WhatWeAcquireAccordion = () => (
  <section className="px-6 py-28 md:px-10 md:py-36">
    <div className="mx-auto max-w-3xl">
      <FadeIn>
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Variant D — Stacked Accordion
        </p>
      </FadeIn>
      <FadeIn>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-foreground md:text-[2.75rem] md:leading-[1.1]">
          What We Acquire
        </h2>
      </FadeIn>
      <FadeIn delay={0.1}>
        <p className="mt-3 font-sans text-base text-muted-foreground md:text-lg">
          With our partner investors
        </p>
      </FadeIn>
      <FadeIn delay={0.15}>
        <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
          We buy undervalued blocks of flats in Cambridge and turn them into high quality homes.
        </p>
      </FadeIn>

      <FadeIn delay={0.25}>
        <Accordion type="single" collapsible className="mt-14">
          {items.map((item, i) => (
            <AccordionItem key={item.value} value={item.value} className="border-border">
              <AccordionTrigger className="py-6 text-left text-lg font-semibold text-foreground hover:no-underline md:text-xl">
                <span className="flex items-center gap-4">
                  <span className="font-mono text-sm text-primary/60">0{i + 1}</span>
                  {item.title}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pl-10 font-sans text-base leading-relaxed text-muted-foreground">
                {item.detail}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </FadeIn>
    </div>
  </section>
);

export default WhatWeAcquireAccordion;
