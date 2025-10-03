import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, TrendingUp, Clock, Calculator, Users, Award } from "lucide-react";
import { useState } from "react";
import { JoinFormDialog } from "@/components/JoinFormDialog";
// import ROICalculator from "@/components/ROICalculator";


const Professionals = () => {
  const [openForm, setOpenForm] = useState(false);
  const benefits = [
    {
      icon: TrendingUp,
      title: "Bulk Pricing Advantage",
      description: "Save 15-30% on materials with our volume-based pricing structure",
      detail: "Access exclusive contractor rates and seasonal discounts"
    },
    {
      icon: Clock,
      title: "Reliable Delivery",
      description: "On-time delivery guaranteed with real-time tracking",
      detail: "Schedule deliveries to match your project timeline"
    },
    {
      icon: Calculator,
      title: "45-Day Credit Terms",
      description: "Flexible payment options to manage cash flow effectively",
      detail: "Build now, pay later with our trusted credit system"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "ISO-certified materials with in-house quality testing",
      detail: "Every product backed by our quality guarantee"
    }
  ];

  const comparison = [
    { feature: "Bulk Pricing", traditional: "Limited discounts", nirmanBandhu: "Up to 30% savings" },
    { feature: "Credit Terms", traditional: "Immediate payment", nirmanBandhu: "45-day credit*", tooltip: "Credit available for verified contractors; T&C apply" },
    { feature: "Delivery", traditional: "Self-pickup mostly", nirmanBandhu: "Doorstep delivery" },
    { feature: "Quality Check", traditional: "Variable standards", nirmanBandhu: "BIS certified quality*", tooltip: "*Performance may vary by site conditions."  },
    { feature: "Technical Support", traditional: "Limited guidance", nirmanBandhu: "Expert consultation" },
    { feature: "Project Planning", traditional: "Manual estimation", nirmanBandhu: "Digital tools & calculators" }
  ];


  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              For Construction Professionals
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Build Smarter with <span className="text-primary">NirmanBandhu</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of contractors, builders, and architects who trust us for quality materials, 
              competitive pricing, and reliable delivery that keeps projects on track.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg"
                className="bg-primary hover:bg-primary/90"
                onClick={() => setOpenForm(true)} // ⬅️ Opens form
              >
                Join as Professional Partner
              </Button>
              {/* <Button size="lg" variant="outline">
                Calculate Your Savings
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Professionals Choose NirmanNext</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the competitive advantages that help you deliver projects faster, better, and more profitably
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={benefit.title} className="text-center hover:shadow-elegant transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{benefit.detail}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Traditional vs. NirmanBandhu Approach</h2>
            <p className="text-muted-foreground">
              See how we're transforming the construction materials supply chain
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/30">
                      <th className="text-left p-4 font-semibold">Features</th>
                      <th className="text-left p-4 font-semibold text-muted-foreground">Traditional Method</th>
                      <th className="text-left p-4 font-semibold text-primary">NirmanBandhu Way</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((item, index) => (
                      <tr key={item.feature} className={index % 2 === 0 ? "bg-muted/20" : ""}>
                        <td className="p-4 font-medium">{item.feature}</td>
                        <td className="p-4 text-muted-foreground">{item.traditional}</td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            {item.tooltip ? (
                              <span className="relative group text-primary font-medium cursor-pointer">
                                {item.nirmanBandhu}
                                {/* Tooltip */}
                                <span className="absolute left-full top-1/2 -translate-y-1/2 ml-3 w-36 p-2 text-sm text-white bg-gray-800 rounded opacity-0 group-hover:opacity-80 transition-opacity z-10">
                                  {item.tooltip}
                                </span>
                              </span>
                            ) : (
                              <span className="text-primary font-medium">{item.nirmanBandhu}</span>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <ROICalculator />
        </div>
      </section> */}




      {/* Partner Stories */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Success Stories from Our Partners</h2>
            <p className="text-muted-foreground">
              Real results from construction professionals across India
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Rajesh Construction",
                location: "Lucknow",
                project: "Multi-unit residential complex",
                savings: "₹1.3L saved",
                quote: "NirmanNext's bulk pricing helped us stay within budget while maintaining quality standards."
              },
              {
                name: "Sharma Builders",
                location: "Lucknow",
                project: "Commercial office building",
                savings: "25% cost reduction",
                quote: "The 45-day credit terms were a game-changer for our cash flow management."
              },
              {
                name: "Green Architecture",
                location: "Kanpur",
                project: "Sustainable housing project",
                savings: "On-time delivery",
                quote: "Reliable delivery schedule kept our entire project timeline on track."
              }
            ].map((story) => (
              <Card key={story.name} className="hover:shadow-elegant transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">{story.name}</CardTitle>
                  </div>
                  <CardDescription>{story.location} • {story.project}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge className="mb-3 bg-green-100 text-green-800">
                    {story.savings}
                  </Badge>
                  <p className="text-muted-foreground italic">"{story.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Construction Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join the NirmanBandhu network and start building smarter today
          </p>
          <Button size="lg" variant="secondary"
          onClick={() => setOpenForm(true)} // ⬅️ Opens form
          >
            Become a Partner Today
          </Button>
        </div>

        {/* Form Dialog */}
      <JoinFormDialog open={openForm} onOpenChange={setOpenForm} />
      </section>
    </div>
  );
};

export default Professionals;