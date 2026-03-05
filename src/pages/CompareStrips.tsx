import HeroSection from "@/components/HeroSection";
import LogoStripBorderless from "@/components/LogoStripBorderless";
import LogoStripDivider from "@/components/LogoStripDivider";
import LogoStripInset from "@/components/LogoStripInset";
import LogoStripCard from "@/components/LogoStripCard";

const sectionLabel = "font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground text-center pt-16 pb-4";

const CompareStrips = () => (
  <div className="min-h-screen bg-background">
    <p className={sectionLabel}>Option A — Borderless White</p>
    <HeroSection />
    <LogoStripBorderless />

    <p className={sectionLabel}>Option B — Subtle Divider Line</p>
    <HeroSection />
    <LogoStripDivider />

    <p className={sectionLabel}>Option C — Inset / Overlapping Card</p>
    <HeroSection />
    <LogoStripInset />

    <p className={sectionLabel}>Option D — Floating Card</p>
    <HeroSection />
    <LogoStripCard />
  </div>
);

export default CompareStrips;
