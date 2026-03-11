import { useEffect, useRef } from "react";

const CAL_HTML = `
<div style="width:100%;height:100%;overflow:scroll" id="my-cal-inline-partner-investor-call"></div>
<script type="text/javascript">
  (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.eu/embed/embed.js", "init");
  Cal("init", "partner-investor-call", {origin:"https://app.cal.eu"});
  Cal.ns["partner-investor-call"]("inline", {
    elementOrSelector:"#my-cal-inline-partner-investor-call",
    config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true"},
    calLink: "team/brightcap/partner-investor-call",
  });
  Cal.ns["partner-investor-call"]("ui", {"hideEventTypeDetails":true,"layout":"month_view"});
</script>
`;

const CalEmbedSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Parse the HTML and inject it
    const range = document.createRange();
    range.selectNode(document.body);
    const fragment = range.createContextualFragment(CAL_HTML);
    container.appendChild(fragment);

    return () => {
      if (container) {
        container.innerHTML = "";
      }
    };
  }, []);

  return (
    <section className="px-6 pt-10 pb-8 md:px-10 md:pt-14 md:pb-10">
      <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-8 shadow-[0_12px_48px_-12px_hsl(var(--foreground)/0.10)] md:p-14">
        <div ref={containerRef} style={{ minHeight: 500 }} />
      </div>
    </section>
  );
};

export default CalEmbedSection;
