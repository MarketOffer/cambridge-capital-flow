import Navbar from "@/components/Navbar";
import HeroVariantContained from "@/components/HeroVariantContained";
import HeroVariantStrip from "@/components/HeroVariantStrip";
import OpportunitySection from "@/components/OpportunitySection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    {/* VARIANT 1: Contained image block */}
    <HeroVariantContained />
    <div className="border-t border-border mx-6 md:mx-16 lg:mx-24" />
    <p className="text-center text-sm text-muted-foreground py-4">↑ Option 1: Contained image block &nbsp;|&nbsp; ↓ Option 3: Accent strip</p>
    <div className="border-b border-border mx-6 md:mx-16 lg:mx-24" />
    {/* VARIANT 3: Accent strip */}
    <HeroVariantStrip />
    <OpportunitySection />
    <HowItWorksSection />
    <AboutSection />
    <ContactSection />
    <Footer />
  </>
);

export default Index;
