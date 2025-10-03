import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, Play, TrendingUp, Users, Award } from "lucide-react";

const TrustSignals = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Site Contractor",
      company: "Mumbai Construction Co.",
      rating: 5,
      quote: "NirmanNext has transformed how we manage our material procurement. The bulk pricing and 45-day credit has improved our cash flow significantly. We've saved over ₹2L in the last quarter alone.",
      impact: "₹2L+ saved in Q1"
    },
    {
      name: "Priya Sharma", 
      role: "Material Retailer",
      company: "Sharma Building Supplies",
      rating: 5,
      quote: "The private label opportunity has been a game-changer. No inventory risk, better margins, and my customers love the quality. My business has grown 40% since joining NirmanNext.",
      impact: "40% business growth"
    },
    {
      name: "Amit Patel",
      role: "Architect",
      company: "Design Studio Architects",
      rating: 5,
      quote: "Quality consistency and delivery reliability are crucial for our projects. NirmanNext has never let us down. The material specifications are always accurate and delivery is always on time.",
      impact: "100% on-time delivery"
    }
  ];

  const stats = [
    {
      icon: Users,
      number: "10+",
      label: "Active Professionals",
      growth: "15x this year"
    },
    {
      icon: TrendingUp,
      number: "₹8L+",
      label: "Materials Delivered",
      growth: "+48% MoM"
    },
    {
      icon: Award,
      number: "2+",
      label: "Cities Served",
      growth: "Expanding quartely"
    }
  ];

  const partners = [
    "UltraTech", "ACC Limited", "Ambuja Cement", "JSW Steel", 
    "Tata Steel", "Asian Paints", "Berger Paints", "Kajaria"
  ];

  return (
    <section className="py-20 bg-gradient-construction">
      <div className="container mx-auto px-4">
        
        {/* Growth Stats */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Trusted by Professionals
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Join a growing community of contractors, retailers, and builders who have transformed 
            their business with NirmanNext.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-card-custom">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-1">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground mb-2">
                      {stat.label}
                    </div>
                    <Badge variant="secondary" className="bg-construction-green/10 text-construction-green border-0">
                      {stat.growth}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Video Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Real Stories from Real Professionals
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how NirmanNext has helped professionals across India build better, 
              faster, and more profitably.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-elevated transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-card-custom">
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <Quote className="h-6 w-6 text-primary" />
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  
                  {/* Impact Badge */}
                  <Badge className="mb-6 bg-construction-orange text-white border-0">
                    {testimonial.impact}
                  </Badge>
                  
                  {/* Author */}
                  <div className="border-t pt-6">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Video CTA */}
          <div className="text-center">
            <Button variant="outline" size="lg" className="group">
              <Play className="mr-2 group-hover:scale-110 transition-transform duration-300" />
              Watch Customer Success Stories
            </Button>
          </div>
        </div>

        {/* Partner Logos */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Partnered with Leading Brands
            </h3>
            <p className="text-muted-foreground">
              We work with India's most trusted construction material manufacturers
            </p>
          </div>
          
          <div className="bg-background rounded-xl p-8 shadow-card-custom">
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {partners.map((partner, index) => (
                <div 
                  key={index}
                  className="text-lg font-semibold text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;