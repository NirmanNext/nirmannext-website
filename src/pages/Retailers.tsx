import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Package, Shield, Zap, Store, HandHeart } from "lucide-react";
import { JoinFormDialog } from "@/components/JoinFormDialog";
import { useState } from "react";

const Retailers = () => {
  const [openForm, setOpenForm] = useState(false);
  const benefits = [
    {
      icon: Package,
      title: "Zero Inventory Risk",
      description: "No MOQs, no stock management. Sell without inventory investment.",
      highlight: "Start with ₹0 investment"
    },
    {
      icon: TrendingUp,
      title: "Higher Profit Margins",
      description: "Earn better margins with our private-label products.",
      highlight: "Up to 40% margins"
    },
    {
      icon: Zap,
      title: "Quick Order Processing",
      description: "Digital ordering system with instant order confirmation.",
      highlight: "Orders processed in 2 hours"
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "All products backed by our quality assurance program.",
      highlight: "100% quality guaranteed"
    }
  ];

  const partnerModel = [
    {
      step: "1",
      title: "Partner Registration",
      description: "Simple onboarding process with minimal documentation",
      features: ["Digital KYC", "Instant approval", "No joining fees"]
    },
    {
      step: "2", 
      title: "Access Product Catalog",
      description: "Browse our extensive range with real-time pricing",
      features: ["1000+ products", "Live inventory", "Margin calculator"]
    },
    {
      step: "3",
      title: "Start Selling",
      description: "Take orders from customers and place with us directly",
      features: ["Customer orders", "Direct fulfillment", "Tracking support"]
    },
    {
      step: "4",
      title: "Earn & Grow",
      description: "Focus on sales while we handle logistics and quality",
      features: ["Monthly payouts", "Performance bonuses", "Growth support"]
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
              For Retailers & Dealers
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Expand Your Business <span className="text-primary">Risk-Free</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join India's fastest-growing construction materials network. Sell premium products 
              without inventory investment and earn higher margins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90"
              onClick={() => setOpenForm(true)} // ⬅️ Opens form
              >
                Become a Partner Dealer
              </Button>
              {/* <Button size="lg" variant="outline">
                Download Partner Brochure
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Partner with NirmanNext?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the advantages of modern retail without traditional risks and investments
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={benefit.title} className="text-center hover:shadow-elegant transition-shadow border-2 hover:border-primary/20">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge className="bg-green-100 text-green-800">
                      {benefit.highlight}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partner Model */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">How Our Partnership Model Works</h2>
            <p className="text-muted-foreground">
              Simple, transparent, and profitable - built for modern retailers
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {partnerModel.map((step) => (
              <Card key={step.step} className="relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-primary"></div>
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mb-3">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {step.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-primary text-primary-foreground overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <Store className="h-16 w-16 mb-6 opacity-90" />
                    <h2 className="text-3xl font-bold mb-4">Success Story</h2>
                    <h3 className="text-xl font-semibold mb-4">Gupta Hardware Store, Gurgaon</h3>
                    <blockquote className="text-lg italic mb-6 opacity-90">
                      "In just 6 months, we increased our revenue by 150% without any additional inventory investment. 
                      NirmanNext's partnership model transformed our small hardware store into a thriving construction materials hub."
                    </blockquote>
                    <div className="flex items-center gap-4 text-sm">
                      <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground">
                        Revenue: +150%
                      </Badge>
                      <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground">
                        Zero Investment
                      </Badge>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary-foreground/10 rounded-lg p-8">
                      <div className="text-4xl font-bold mb-2">₹45L+</div>
                      <div className="text-lg opacity-90 mb-4">Monthly Revenue</div>
                      <div className="text-2xl font-bold mb-2">300+</div>
                      <div className="text-lg opacity-90">Monthly Orders</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Categories for Retailers */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Product Categories Available</h2>
            <p className="text-muted-foreground">
              Comprehensive range covering all construction and hardware needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {[
              { name: "Cement & Concrete", count: "45+ products", margin: "25-35%" },
              { name: "Adhesives & Sealants", count: "32+ products", margin: "30-40%" },
              { name: "Tools & Hardware", count: "150+ products", margin: "20-30%" },
              { name: "Plumbing Materials", count: "80+ products", margin: "25-35%" },
              { name: "Electrical Items", count: "120+ products", margin: "22-32%" },
              { name: "Safety Equipment", count: "60+ products", margin: "35-45%" }
            ].map((category) => (
              <Card key={category.name} className="text-center hover:shadow-elegant transition-shadow">
                <CardContent className="p-6">
                  <Package className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{category.count}</p>
                  <Badge className="bg-green-100 text-green-800 text-xs">
                    {category.margin}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support & Training */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Complete Support System</h2>
            <p className="text-muted-foreground">
              We don't just give you products - we help you succeed
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: HandHeart,
                title: "Dedicated Support",
                features: ["Personal account manager", "24/7 helpline", "Technical assistance", "Marketing support"]
              },
              {
                icon: TrendingUp,
                title: "Business Training",
                features: ["Product knowledge sessions", "Sales technique training", "Digital marketing guidance", "Customer service tips"]
              },
              {
                icon: Shield,
                title: "Quality Assurance",
                features: ["Product quality guarantee", "Return/exchange policy", "Customer complaint handling", "Technical documentation"]
              }
            ].map((support) => {
              const IconComponent = support.icon;
              return (
                <Card key={support.title} className="text-center">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{support.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-left space-y-2">
                      {support.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Retail Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of successful retailers already partnering with NirmanNext
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary"
            onClick={() => setOpenForm(true)} // ⬅️ Opens form
            >
              Apply for Partnership
            </Button>
            {/* <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Schedule a Call
            </Button> */}
          </div>
        </div>
          {/* Form Dialog */}
        <JoinFormDialog open={openForm} onOpenChange={setOpenForm} />
      </section>
    </div>
  );
};

export default Retailers;