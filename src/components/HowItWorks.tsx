import { Card, CardContent } from "@/components/ui/card";
import { Search, ShoppingCart, Truck, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Browse & Discover",
      description: "Explore our comprehensive catalog of construction materials with smart filters for your specific needs and project requirements.",
      features: [
        "Smart category filters",
        "Bulk pricing calculator", 
        "Quality specifications",
        "Compare products"
      ]
    },
    {
      icon: ShoppingCart,
      title: "Order & Customize",
      description: "Place orders with flexible payment terms, bulk discounts, and personalized pricing based on your professional status.",
      features: [
        "Bulk order discounts",
        "45-day credit terms",
        "Professional pricing",
        "Custom quantities"
      ]
    },
    {
      icon: Truck,
      title: "Deliver & Earn",
      description: "Fast, reliable delivery to your site with tracking, quality assurance, and opportunities to grow your professional network.",
      features: [
        "Guaranteed delivery",
        "Real-time tracking",
        "Quality assurance",
        "Earn rewards"
      ]
    }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            How NirmanNext Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simple, efficient, and built for professionals. Get started in minutes 
            and experience the future of construction material procurement.
          </p>
        </div>
        
        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent"></div>
          
          <div className="grid lg:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card key={index} className="relative group hover:shadow-elevated transition-all duration-300 border-0 shadow-card-custom">
                  {/* Step Number */}
                  <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center shadow-construction">
                    <span className="text-primary-foreground font-bold text-lg">
                      {index + 1}
                    </span>
                  </div>
                  
                  <CardContent className="pt-12 pb-8 px-8">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-construction rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold mb-4 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Features */}
                    <ul className="space-y-2">
                      {step.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <ArrowRight className="w-4 h-4 text-construction-orange mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  
                  {/* Connection Arrow (Desktop) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-24 -right-4 w-8 h-8 transform rotate-45 bg-background border-r border-b border-border"></div>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
        
        {/* Bottom CTA */}
        {/* <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Ready to Transform Your Construction Process?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have streamlined their material procurement 
            and increased their project profitability with NirmanNext.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-md hover:bg-primary/90 transition-colors font-medium">
              Start Free Account
            </button>
            <button className="text-primary hover:text-primary/80 transition-colors font-medium">
              Schedule a Demo →
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default HowItWorks;