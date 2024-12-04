import FeatureSection from "./sections/feature";
import HeroSection from "./sections/hero";
import ProductSection from "./sections/product";

export function LandingPage() {
  return (
    <>
      <h1 className="sr-only">Landing Page HaeBot Teknologi Indonesia</h1>
      <HeroSection />;
      <FeatureSection />
      <ProductSection />
    </>
  );
}
