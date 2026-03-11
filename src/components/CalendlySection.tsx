import { useEffect } from "react";

const CalendlySection = () => {
  useEffect(() => {
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <section className="px-6 pt-10 pb-0 md:px-10 md:pt-14">
      <div className="mx-auto max-w-2xl">
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/marketoffer/call-with-marketoffer-clone?hide_event_type_details=1&hide_gdpr_banner=1"
          style={{ minWidth: 320, height: 700 }}
        />
      </div>
    </section>
  );
};

export default CalendlySection;
