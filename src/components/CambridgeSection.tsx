import FadeIn from "./FadeIn";

const stats = [
  {
    highlight: "No.1",
    text: "global science & tech cluster — three years running",
    source: "WIPO 2022–2024",
  },
  {
    highlight: "50%",
    text: "property capital growth over 10 years",
  },
  {
    highlight: "5×",
    text: "UK average employment growth",
  },
  {
    highlight: "5,300+",
    text: "science & tech firms including Google, Apple, ARM, AstraZeneca",
  },
  {
    highlight: "No.1",
    text: "UK university — a permanent engine of world-class talent",
  },
];

const CambridgeSection = () => (
  <section id="cambridge" className="px-6 py-28 md:px-10 md:py-36">
    <div className="mx-auto max-w-5xl">
      <FadeIn>
        <h2 className="text-4xl font-semibold tracking-[-0.02em] text-foreground md:text-[3.5rem] md:leading-[1.05]">
          Cambridge.
        </h2>
      </FadeIn>
      <FadeIn delay={0.1}>
        <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
          Our first market. The world's leading science and tech cluster.
        </p>
      </FadeIn>

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat, i) => (
          <FadeIn key={i} delay={0.15 + i * 0.08}>
            <div className="group rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/40">
              <span className="text-3xl font-semibold tracking-tight text-primary md:text-4xl">
                {stat.highlight}
              </span>
              <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground md:text-base">
                {stat.text}
              </p>
              {stat.source && (
                <p className="mt-2 font-sans text-xs text-muted-foreground/60">
                  {stat.source}
                </p>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default CambridgeSection;
