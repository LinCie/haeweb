import FeatureSection from "./sections/feature";
import HeroSection from "./sections/hero";

export function LandingPage() {
  return (
    <>
      <h1 className="sr-only">Landing Page HaeBot Teknologi Indonesia</h1>
      <HeroSection />;
      <FeatureSection />
    </>
  );
}
