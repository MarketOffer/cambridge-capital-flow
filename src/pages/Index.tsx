import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HeroVariantNatural from "@/components/HeroVariantNatural";
import HeroVariantResponsive from "@/components/HeroVariantResponsive";
import OpportunitySection from "@/components/OpportunitySection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <p className="pt-24 text-center text-sm font-semibold text-muted-foreground py-4">↓ Option 1: Natural flow (no forced break)</p>
    <HeroVariantNatural />
    <div className="border-t border-border mx-6 md:mx-16 lg:mx-24" />
    <p className="text-center text-sm font-semibold text-muted-foreground py-4">↓ Option 2: Nowrap on "the AI era"</p>
    <HeroSection />
    <div className="border-t border-border mx-6 md:mx-16 lg:mx-24" />
    <p className="text-center text-sm font-semibold text-muted-foreground py-4">↓ Option 3: Break only on large screens</p>
    <HeroVariantResponsive />
    <OpportunitySection />
    <HowItWorksSection />
    <AboutSection />
    <ContactSection />
    <Footer />
  </>
);

export default Index;
