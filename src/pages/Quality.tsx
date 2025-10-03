import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, CheckCircle, Truck, Clock, Award, MapPin } from "lucide-react";

const Quality = () => {
  const qualityStandards = [
    {
      icon: Shield,
      title: "ISI Certified Private Label",
      description: "Indian standards compliance for all tile adhesives and grouts",
      certification: "BIS"
    },
    {
      icon: Award,
      title: "In-House Testing Lab",
      description: "Every batch tested for strength, and durability before dispatch",
      certification: "BIS Accredited"
    },
    {
      icon: CheckCircle,
      title: "Material Traceability",
      description: "Complete tracking from manufacturing source to your doorstep",
      certification: "Digitally Verified"
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "100% replacement guarantee for any quality-related issues",
      certification: "Lifetime Support"
    }
  ];

  const deliveryFeatures = [
    {
      icon: Truck,
      title: "Pan-UP Coverage",
      description: "10+ cities across UP",
      highlight: "Same-day delivery in metros"
    },
    {
      icon: Clock,
      title: "Time-Bound Delivery",
      description: "Committed delivery schedules",
      highlight: "98.5% on-time delivery"
    },
    {
      icon: MapPin,
      title: "Real-Time Tracking",
      description: "warehouse to site",
      highlight: "Live GPS tracking"
    }
  ];

  const testingProcess = [
    {
      step: "1",
      title: "Raw Material Inspection",
      description: "Incoming materials tested against quality parameters",
      tests: ["Chemical composition", "Physical properties", "Compliance check"]
    },
    {
      step: "2",
      title: "Production QC",
      description: "Continuous monitoring during manufacturing process",
      tests: ["Batch consistency", "Process parameters", "Interim quality checks"]
    },
    {
      step: "3",
      title: "Final Product Testing",
      description: "Comprehensive testing before packaging and dispatch",
      tests: ["Strength testing", "Durability assessment", "Performance validation"]
    },
    {
      step: "4",
      title: "Post-Delivery Support",
      description: "Quality assurance continues after delivery",
      tests: ["Installation guidance", "Performance monitoring", "Issue resolution"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Quality & Delivery Excellence
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              <span className="text-primary">Quality First</span>, Always
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Every product we deliver meets the highest industry standards. From sourcing to delivery, 
              quality is embedded in every step of our process.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                View Quality Certificates
              </Button>
              <Button size="lg" variant="outline">
                Download Quality Policy
              </Button>
            </div> */}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Quality Standards</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Rigorous quality control processes ensure every product meets international standards
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityStandards.map((standard) => {
              const IconComponent = standard.icon;
              return (
                <Card key={standard.title} className="text-center hover:shadow-elegant transition-shadow border-2 hover:border-primary/20">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{standard.title}</CardTitle>
                    <CardDescription>{standard.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge className="bg-green-100 text-green-800">
                      {standard.certification}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testing Process */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">4-Stage Quality Testing Process</h2>
            <p className="text-muted-foreground">
              Comprehensive quality assurance at every stage of the supply chain
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {testingProcess.map((process) => (
              <Card key={process.step} className="relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-primary"></div>
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mb-3">
                    {process.step}
                  </div>
                  <CardTitle className="text-lg">{process.title}</CardTitle>
                  <CardDescription>{process.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {process.tests.map((test) => (
                      <li key={test} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0" />
                        <span>{test}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Metrics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Quality Performance Metrics</h2>
            <p className="text-muted-foreground">
              Real numbers that demonstrate our commitment to excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { metric: "99%+", label: "Quality Pass Rate", description: "Products meeting quality standards" },
              { metric: "< 0.1%", label: "Defect Rate", description: "Industry-leading quality control" },
              { metric: "24hrs", label: "Quality Response", description: "Average resolution time for quality issues" },
              { metric: "IS 15477", label: "Certification", description: "Bureau of Indian Standards (BIS)" }
            ].map((stat) => (
              <Card key={stat.label} className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.metric}</div>
                  <div className="font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Excellence */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Delivery Excellence</h2>
            <p className="text-muted-foreground">
              Reliable, traceable, and timely delivery across India
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {deliveryFeatures.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <Card key={feature.title} className="text-center hover:shadow-elegant transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge className="bg-blue-100 text-blue-800">
                      {feature.highlight}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Delivery Network Map */}
      {/*<section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-primary text-primary-foreground">
              <CardContent className="p-8 md:p-12 text-center">
                <Truck className="h-16 w-16 mx-auto mb-6 opacity-90" />
                <h2 className="text-3xl font-bold mb-4">Pan-India Delivery Network</h2>
                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                  Our extensive logistics network ensures reliable delivery to construction sites across India, 
                  from metros to tier-3 cities.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-primary-foreground/10 rounded-lg p-4">
                    <div className="text-2xl font-bold mb-1">500+</div>
                    <div className="text-sm opacity-90">Cities Covered</div>
                  </div>
                  <div className="bg-primary-foreground/10 rounded-lg p-4">
                    <div className="text-2xl font-bold mb-1">98.5%</div>
                    <div className="text-sm opacity-90">On-Time Delivery</div>
                  </div>
                  <div className="bg-primary-foreground/10 rounded-lg p-4">
                    <div className="text-2xl font-bold mb-1">24/7</div>
                    <div className="text-sm opacity-90">Tracking Support</div>
                  </div>
                </div>
                <Button size="lg" variant="secondary">
                  Check Delivery in Your Area
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      */}

      {/* Quality Guarantee */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Quality Promise</h2>
            <p className="text-muted-foreground">
              We stand behind every product with comprehensive guarantees and support
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-green-200">
              <CardHeader>
                <Shield className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle className="text-xl text-green-800">Quality Guarantee</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>100% Replacement for manufacturing defects on our private labels within 30 days</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Technical guidance on product application and usage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Performance assurance as per industry standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Dedicated helpline for quality-related support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200">
              <CardHeader>
                <Truck className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl text-blue-800">Delivery Guarantee</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Committed delivery dates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Safe handling and secure packaging standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Real-time delivery updates and notifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Damage-free delivery with quality inspection</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* commenting this section for now 
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience Quality You Can Trust</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers who rely on our quality and delivery excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Request Quality Report
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Schedule Site Visit
            </Button>
          </div>
        </div>
      </section>
      */}
    </div>
  );
};

export default Quality;