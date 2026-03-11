import { useEffect, useRef } from "react";

declare global {
  interface Window {
    Cal: any;
  }
}

export function CalEmbed() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    if (document.querySelector('script[src="https://app.cal.eu/embed/embed.js"]')) return;

    const script = document.createElement("script");
    script.src = "https://app.cal.eu/embed/embed.js";
    script.async = true;
    script.onload = () => {
      window.Cal("init", "partner-investor-call", { origin: "https://app.cal.eu" });
      window.Cal.ns["partner-investor-call"]("inline", {
        elementOrSelector: "#my-cal-inline-partner-investor-call",
        config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
        calLink: "team/brightcap/partner-investor-call",
      });
      window.Cal.ns["partner-investor-call"]("ui", {
        hideEventTypeDetails: true,
        layout: "month_view",
      });
    };
    document.head.appendChild(script);
  }, []);

  return (
    <div
      id="my-cal-inline-partner-investor-call"
      style={{ width: "100%", height: "630px", overflow: "scroll" }}
    />
  );
}
