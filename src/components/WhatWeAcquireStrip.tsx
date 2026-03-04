import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "./FadeIn";

const panels = [
  {
    num: "01",
    title: "Buy blocks at a discount",
    detail: "Typically 2 to 20 units",
    accent: "hsl(167, 66%, 54%)",
  },
  {
    num: "02",
    title: "Create 15–25% equity uplift",
    detail: "Through title splitting and high-spec renovation of each unit",
    accent: "hsl(167, 66%, 44%)",
  },
  {
    num: "03",
    title: "Generate long-term hands-off income",
    detail: "Let to professional tenants or supported living providers",
    accent: "hsl(167, 66%, 34%)",
  },
];

const WhatWeAcquireStrip = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-30%"]);

  return (
    <section className="overflow-hidden px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Variant C — Horizontal Scroll Strip
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
      </div>

      <div ref={containerRef} className="mt-16">
        <motion.div style={{ x }} className="flex gap-6 pl-6 md:pl-10">
          {panels.map((panel) => (
            <div
              key={panel.num}
              className="flex w-[80vw] max-w-md shrink-0 flex-col justify-between rounded-2xl border border-border p-10 md:w-[40vw]"
              style={{ background: `linear-gradient(135deg, ${panel.accent}08, ${panel.accent}15)` }}
            >
              <span className="font-mono text-6xl font-bold text-primary/20">{panel.num}</span>
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-foreground md:text-3xl">
                  {panel.title}
                </h3>
                <p className="mt-4 font-sans text-sm leading-relaxed text-muted-foreground md:text-base">
                  {panel.detail}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeAcquireStrip;
