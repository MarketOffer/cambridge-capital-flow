import FadeIn from "./FadeIn";
import { CalEmbed } from "./CalEmbed";

const CalSection = () => (
  <section className="px-6 pt-16 pb-10 md:px-10 md:pt-24 md:pb-14">
    <div className="mx-auto max-w-2xl">
      <FadeIn>
        <h2 className="text-3xl font-semibold tracking-[-0.02em] text-foreground md:text-[2.75rem] md:leading-[1.1]">
          Book a call
        </h2>
      </FadeIn>
      <FadeIn delay={0.1}>
        <p className="mt-6 font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
          Select a time that works for you — we'll confirm shortly.
        </p>
      </FadeIn>
      <FadeIn delay={0.2}>
        <div className="mt-10">
          <CalEmbed />
        </div>
      </FadeIn>
    </div>
  </section>
);

export default CalSection;
