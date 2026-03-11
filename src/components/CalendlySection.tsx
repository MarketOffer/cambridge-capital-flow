import { useEffect } from "react";
import FadeIn from "./FadeIn";

const CalendlySection = () => {
  useEffect(() => {
    if (document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) return;
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="px-6 py-10 md:px-10 md:py-14">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <div
            className="calendly-inline-widget rounded-2xl overflow-hidden"
            data-url="https://calendly.com/andy-marketoffer/call-with-andy-fidler-from-marketoffer"
            style={{ minWidth: 320, height: 700 }}
          />
        </FadeIn>
      </div>
    </section>
  );
};

export default CalendlySection;
