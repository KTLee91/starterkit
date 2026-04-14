import { HeroSection } from "@/components/examples/hero-section";
import { FeatureGrid } from "@/components/examples/feature-grid";
import { StatsCard } from "@/components/examples/stats-card";
import { FaqSection } from "@/components/examples/faq-section";
import { CtaSection } from "@/components/examples/cta-section";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20 space-y-24">
      <HeroSection />
      <StatsCard />
      <FeatureGrid />
      <FaqSection />
      <CtaSection />
    </div>
  );
}
