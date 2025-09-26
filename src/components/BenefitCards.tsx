import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Hammer, Store, Home, ArrowRight } from "lucide-react";

const BenefitCards = () => {
  const benefits = [
    {
      icon: Hammer,
      title: "Builders & Contractors",
      subtitle: "Build Smarter, Faster, Profitable",
      description: "Cut project costs with bulk pricing, keep timelines on track with reliable delivery, and ease cash flow with flexible 45-day credit.",
      features: [
        "Bulk pricing up to 30% savings",
        "45-day flexible credit terms", 
        "Guaranteed delivery timelines",
        "Dedicated relationship manager"
      ],
      cta: "Explore Builder Solutions",
      gradient: "from-primary to-primary/80"
    },
    {
      icon: Store,
      title: "Retailers & Dealers", 
      subtitle: "Expand Without Risk",
      description: "Expand without risk — no MOQs, private-label margins, and inventory-free growth opportunities.",
      features: [
        "No minimum order quantities",
        "Private label opportunities",
        "Inventory-free business model",
        "Higher profit margins"
      ],
      cta: "Join Dealer Network",
      gradient: "from-construction-orange to-construction-orange/80"
    },
    {
      icon: Home,
      title: "End-Consumers & DIYers",
      subtitle: "Build with Confidence", 
      description: "Build confidently with quality-assured products, expert guidance, and doorstep delivery you can trust.",
      features: [
        "Quality-assured materials",
        "Expert guidance & consultation",
        "Doorstep delivery service",
        "Transparent pricing"
      ],
      cta: "Start Your Project",
      gradient: "from-construction-green to-construction-green/80"
    }
  ];

  return (
    <section className="py-20 bg-gradient-construction">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Built for Every Construction Professional
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're building skyscrapers or dream homes, we have tailored solutions 
            that deliver real value to your specific needs.
          </p>
        </div>

        {/* Benefit Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="group hover:shadow-elevated transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-card-custom">
                <CardContent className="p-8">
                  {/* Icon & Gradient Background */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-sm font-medium text-construction-orange mb-4">
                    {benefit.subtitle}
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {benefit.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-2 mb-8">
                    {benefit.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-construction-orange rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {benefit.cta}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center">
          <Button variant="construction" size="lg">
            View All Solutions
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BenefitCards;