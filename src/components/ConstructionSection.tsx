import FadeIn from "./FadeIn";
import before1 from "@/assets/before-1.png";
import before2 from "@/assets/before-2.png";

const transformations = [
  { before: before1, after: before1, label: "Chapel conversion" },
  { before: before2, after: before2, label: "Full interior refurbishment" },
];

const ConstructionSection = () => (
  <section className="border-t border-border px-6 py-28 md:px-10 md:py-36">
    <div className="mx-auto max-w-5xl">
      <FadeIn>
        <h2 className="text-3xl font-semibold tracking-[-0.02em] text-foreground md:text-[2.75rem] md:leading-[1.1]">
          In-house construction team
        </h2>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Our renovations are delivered by a construction business within our
          founder's group — 40+ years of Cambridge experience.
        </p>
      </FadeIn>

      <FadeIn delay={0.15}>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          A local team aligned with our long-term goals. They build to last, and
          because they built it, ongoing maintenance is fast and efficient.
        </p>
      </FadeIn>

      {/* Before / After pairs */}
      <div className="mt-16 space-y-16">
        {transformations.map((item, i) => (
          <FadeIn key={item.label} delay={0.2 + i * 0.1}>
            <div className="grid gap-4 md:grid-cols-2 md:gap-6">
              {/* Before */}
              <div className="group relative overflow-hidden rounded-2xl border border-border">
                <img
                  src={item.before}
                  alt={`${item.label} — before`}
                  className="aspect-[4/3] w-full object-cover"
                />
                <span className="absolute left-4 top-4 rounded-full border border-border bg-background/90 px-3 py-1 text-xs font-semibold tracking-wide text-muted-foreground backdrop-blur-sm">
                  Before
                </span>
              </div>

              {/* After */}
              <div className="group relative overflow-hidden rounded-2xl border border-border">
                <img
                  src={item.after}
                  alt={`${item.label} — after`}
                  className="aspect-[4/3] w-full object-cover"
                />
                <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold tracking-wide text-primary-foreground">
                  After
                </span>
              </div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{item.label}</p>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default ConstructionSection;
