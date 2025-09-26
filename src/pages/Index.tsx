import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BenefitCards from "@/components/BenefitCards";
import HowItWorks from "@/components/HowItWorks";
import ProductShowcase from "@/components/ProductShowcase";
import TrustSignals from "@/components/TrustSignals";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <BenefitCards />
      <HowItWorks />
      <ProductShowcase />
      <TrustSignals />
    </div>
  );
};

export default Index;
