import { useEffect, useRef } from "react";
import FadeIn from "./FadeIn";

const CalBookingSection = () => {
  const calInitialized = useRef(false);

  useEffect(() => {
    if (calInitialized.current) return;
    calInitialized.current = true;

    const w = window as any;
    const d = document;

    w.Cal =
      w.Cal ||
      function () {
        const cal = w.Cal;
        const ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          const s = d.createElement("script");
          s.src = "https://app.cal.eu/embed/embed.js";
          d.head.appendChild(s);
          cal.loaded = true;
        }
        if (ar[0] === "init") {
          const api = function () {
            (api as any).q.push(arguments);
          };
          const namespace = ar[1];
          (api as any).q = (api as any).q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            (cal.ns[namespace] as any).q.push(ar);
            cal.q.push(["initNamespace", namespace]);
          } else {
            cal.q.push(ar);
          }
          return;
        }
        cal.q.push(ar);
      };

    w.Cal("init", "partner-investor-call", { origin: "https://app.cal.eu" });

    w.Cal.ns["partner-investor-call"]("inline", {
      elementOrSelector: "#my-cal-inline-partner-investor-call",
      config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
      calLink: "team/brightcap/partner-investor-call",
    });

    w.Cal.ns["partner-investor-call"]("ui", {
      hideEventTypeDetails: true,
      layout: "month_view",
    });
  }, []);

  return (
    <section className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <h2 className="text-center text-3xl font-semibold tracking-[-0.02em] text-foreground md:text-[2.75rem] md:leading-[1.1]">
            Schedule a Call
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-muted-foreground md:text-lg">
            Pick a time that works for you and we'll walk you through our
            Cambridge block strategy.
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div
            id="my-cal-inline-partner-investor-call"
            className="mt-10"
            style={{ width: "100%", height: "700px", overflow: "scroll" }}
          />
        </FadeIn>
      </div>
    </section>
  );
};

export default CalBookingSection;
