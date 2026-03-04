import Navbar from "@/components/Navbar";
import WhatWeAcquireTimeline from "@/components/WhatWeAcquireTimeline";
import WhatWeAcquireCards from "@/components/WhatWeAcquireCards";
import WhatWeAcquireStrip from "@/components/WhatWeAcquireStrip";
import WhatWeAcquireAccordion from "@/components/WhatWeAcquireAccordion";
import Footer from "@/components/Footer";

const CompareAcquire = () => (
  <>
    <Navbar />
    <div className="pt-20">
      <div className="border-b border-border px-6 py-16 text-center md:px-10">
        <h1 className="text-3xl font-semibold text-foreground md:text-4xl">
          "What We Acquire" — Layout Comparison
        </h1>
        <p className="mt-4 font-sans text-muted-foreground">
          Scroll down to see all four variants side by side
        </p>
      </div>

      <div className="border-b border-border">
        <WhatWeAcquireTimeline />
      </div>
      <div className="border-b border-border" style={{ backgroundColor: "rgba(163, 196, 188, 0.06)" }}>
        <WhatWeAcquireCards />
      </div>
      <div className="border-b border-border">
        <WhatWeAcquireStrip />
      </div>
      <div style={{ backgroundColor: "rgba(163, 196, 188, 0.06)" }}>
        <WhatWeAcquireAccordion />
      </div>
    </div>
    <Footer />
  </>
);

export default CompareAcquire;
