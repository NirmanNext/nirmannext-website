import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  const [currentHeadline, setCurrentHeadline] = useState(0);
  
  const headlines = [
    "Powering Every Build — From Homes to High-Rises",
    "Builders Build Smarter with Bulk Pricing & Reliable Delivery", 
    "Architects Achieve Precision with Premium Materials",
    "Homeowners Build Confidently with Expert Guidance & Trusted Quality"
  ];

  useEffect(() => {
  const interval = setInterval(() => {
    setCurrentHeadline((prev) => (prev + 1) % headlines.length);
  }, 4000);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setCurrentHeadline((prev) => (prev - 1 + headlines.length) % headlines.length);
    }
    if (e.key === "ArrowRight") {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length);
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    clearInterval(interval);
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [headlines.length]);

const goToPrev = () => {
  setCurrentHeadline((prev) => (prev - 1 + headlines.length) % headlines.length);
};

const goToNext = () => {
  setCurrentHeadline((prev) => (prev + 1) % headlines.length);
};
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})`,
        }}
      />
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-5xl mx-auto">
          {/* Animated Headline with arrow buttons */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <button
              aria-label="Previous headline"
              onClick={goToPrev}
              className="bg-white/10 text-white rounded-full p-2 hover:bg-white/20 transition"
            >
              <ChevronLeft size={32} />
            </button>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight m-0">
              <span className="block animate-fade-in key={currentHeadline}">
                {headlines[currentHeadline]}
              </span>
            </h1>
            <button
              aria-label="Next headline"
              onClick={goToNext}
              className="bg-white/10 text-white rounded-full p-2 hover:bg-white/20 transition"
            >
              <ChevronRight size={32} />
            </button>
          </div>
          
          {/* Subtext */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner for affordable quality, innovative private-label brands, 
            and a growing professional network.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="min-w-48">
              Explore Products
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="min-w-48 text-white bg-white/10">
              <Play className="mr-2" />
              Join as a Professional
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-300">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">10,000+</div>
              <div className="text-sm">Active Professionals</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">₹500Cr+</div>
              <div className="text-sm">Materials Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">150+</div>
              <div className="text-sm">Cities Served</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">85%</div>
              <div className="text-sm">Repeat Orders</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;