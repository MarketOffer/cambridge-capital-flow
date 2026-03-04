import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import FadeIn from "./FadeIn";

const cards = [
  {
    metric: "2–20",
    suffix: "units",
    title: "Buy blocks at a discount",
    detail: "Typically 2 to 20 units per acquisition",
  },
  {
    metric: "15–25",
    suffix: "%",
    title: "Create equity uplift",
    detail: "Through title splitting and high-spec renovation of each unit",
  },
  {
    metric: "100",
    suffix: "%",
    title: "Hands-off income",
    detail: "Let to professional tenants or supported living providers",
  },
];

const AnimatedMetric = ({ value, suffix }: { value: string; suffix: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [displayed, setDisplayed] = useState(false);

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setDisplayed(true), 200);
      return () => clearTimeout(t);
    }
  }, [inView]);

  return (
    <span ref={ref} className="inline-flex items-baseline gap-1">
      <motion.span
        initial={{ opacity: 0, scale: 0.5 }}
        animate={displayed ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-5xl font-semibold tracking-tight text-primary md:text-6xl"
      >
        {value}
      </motion.span>
      <span className="text-2xl font-medium text-primary/70 md:text-3xl">{suffix}</span>
    </span>
  );
};

const WhatWeAcquireCards = () => (
  <section className="px-6 py-28 md:px-10 md:py-36">
    <div className="mx-auto max-w-5xl">
      <FadeIn>
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Variant B — Animated Counter Cards
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

      <div className="mt-16 grid gap-6 sm:grid-cols-3">
        {cards.map((card, i) => (
          <FadeIn key={i} delay={0.2 + i * 0.1}>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 text-center transition-all duration-300 hover:border-primary/40 hover:shadow-lg">
              <AnimatedMetric value={card.metric} suffix={card.suffix} />
              <h3 className="mt-5 text-lg font-semibold text-foreground md:text-xl">
                {card.title}
              </h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
                {card.detail}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default WhatWeAcquireCards;
