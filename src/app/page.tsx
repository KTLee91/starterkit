import { HeroSection } from "@/components/examples/hero-section";
import { FeatureGrid } from "@/components/examples/feature-grid";
import { StatsCard } from "@/components/examples/stats-card";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-16">
      <HeroSection />
      <StatsCard />
      <FeatureGrid />
    </div>
  );
}
