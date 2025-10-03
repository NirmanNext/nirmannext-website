  import Navigation from "@/components/Navigation";
  import { Button } from "@/components/ui/button";
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
  import { Badge } from "@/components/ui/badge";
  import { Users, Target, Award, TrendingUp, Building, Heart } from "lucide-react";
  import { Link } from "react-router-dom"; // ⬅️ Import Link for navigation

  const About = () => {
    const milestones = [
      { year: "2023", title: "Company Founded", description: "Started with a vision to digitize construction materials supply" },
      { year: "2024", title: "First 50 Partners", description: "Built initial network of contractors and suppliers" },
      { year: "2025", title: "Private Label Launch", description: "Introduced RockGrip brand" }
      // { year: "2022", title: "Pan-India Expansion", description: "Extended operations to 15 states across India" },
      // { year: "2023", title: "50,000+ Orders", description: "Crossed milestone of serving 50,000+ construction projects" },
      // { year: "2024", title: "Digital Innovation", description: "Launched AI-powered demand forecasting and inventory management" }
    ];

    const values = [
      {
        icon: Heart,
        title: "Customer First",
        description: "Every decision we make is driven by what's best for our customers - builders, retailers, and end consumers alike."
      },
      {
        icon: Award,
        title: "Quality Excellence",
        description: "We never compromise on quality. Every product meets or exceeds industry standards through rigorous testing."
      },
      {
        icon: Users,
        title: "Partnership Approach",
        description: "We believe in growing together. Our success is measured by the success of our partners and customers."
      },
      {
        icon: TrendingUp,
        title: "Continuous Innovation",
        description: "We constantly evolve our processes, technology, and offerings to better serve the construction industry."
      }
    ];

    const team = [
      {
        name: "Mohammad Ali",
        role: "Founder & CEO",
        experience: "8+ years in product engineering and launches",
        background: "Former Software Engineer at a US based Fintech Firm",
        focus: "Strategic vision and industry partnerships"
      },
      {
        name: "Amit Verma",
        role: "Co-Founder & CTO",
        experience: "8+ years in Software Engineering",
        background: "IIT-M, Ex-Enphase Energy",
        focus: "Technology platform and digital innovation"
      },
      {
        name: "Udit Mishra",
        role: "Co-Founder & COO",
        experience: "5+ years in construction chemicals trading",
        background: "Former Civil Contractor & Trader",
        focus: "Operations and supply chain management"
      }
      // {
      //   name: "Sunita Reddy",
      //   role: "Head of Quality",
      //   experience: "18+ years in quality assurance",
      //   background: "Former quality head at ISO certification body",
      //   focus: "Quality standards and certification processes"
      // }
    ];

    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <section className="bg-gradient-subtle py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                About NirmanNext
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Building a <span className="text-primary">Better Tomorrow</span>, Together
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                We're transforming India's construction materials industry by connecting quality manufacturers 
                with builders, contractors, retailers, and homeowners through innovative technology and 
                unwavering commitment to excellence.
              </p>
              {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Join Our Mission
                </Button>
                <Button size="lg" variant="outline">
                  Download Company Profile
                </Button>
              </div> */}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <Card className="border-2 hover:shadow-elegant transition-shadow">
                <CardHeader>
                  <Target className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    To democratize access to high-quality construction materials by building India's most trusted, 
                    efficient, and inclusive construction materials marketplace that serves everyone from individual 
                    homeowners to large infrastructure companies.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-elegant transition-shadow">
                <CardHeader>
                  <Building className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    To become the backbone of India's construction industry, enabling faster, more affordable, 
                    and higher-quality construction projects while fostering sustainable growth for all 
                    stakeholders in the ecosystem.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-16 bg-accent/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Core Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide every decision we make and every relationship we build
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => {
                const IconComponent = value.icon;
                return (
                  <Card key={value.title} className="text-center hover:shadow-elegant transition-shadow">
                    <CardHeader>
                      <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm leading-relaxed">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Company Journey */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Journey</h2>
              <p className="text-muted-foreground">
                From a small startup to India's trusted construction materials platform
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {milestones.map((milestone) => (
                  <Card key={milestone.year} className="hover:shadow-elegant transition-shadow">
                    <CardHeader className="pb-3">
                      <Badge className="w-fit mb-2 bg-primary/10 text-primary">
                        {milestone.year}
                      </Badge>
                      <CardTitle className="text-lg">{milestone.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm">
                        {milestone.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16 bg-accent/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Leadership Team</h2>
              <p className="text-muted-foreground">
                Experienced leaders driving innovation in the construction industry
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {team.map((member) => (
                <Card key={member.name} className="text-center hover:shadow-elegant transition-shadow">
                  <CardHeader>
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary-foreground">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription className="font-medium text-primary">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-muted-foreground">{member.experience}</p>
                    <p className="text-sm font-medium">{member.background}</p>
                    <p className="text-xs text-muted-foreground italic">{member.focus}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Impact</h2>
              <p className="text-muted-foreground">
                Numbers that reflect our commitment to transforming the construction industry
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { number: "50+", label: "Projects Completed", description: "Construction projects powered by our materials" },
                { number: "100+", label: "Partner Network", description: "Professionals, retailers, and suppliers" },
                { number: "5", label: "Cities Covered", description: "Pan-State presence and growing" },
                { number: "95%+", label: "Customer Satisfaction", description: "Based on verified customer reviews" }
              ].map((stat) => (
                <Card key={stat.label} className="text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="font-semibold mb-2">{stat.label}</div>
                    <div className="text-sm text-muted-foreground">{stat.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        {/*<section className="py-16 bg-accent/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Awards & Recognition</h2>
              <p className="text-muted-foreground">
                Industry recognition for our contribution to construction innovation
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  award: "Best Construction Tech Startup",
                  year: "2023",
                  organization: "India Construction Awards",
                  description: "Recognized for innovative digital platform"
                },
                {
                  award: "Excellence in Quality Assurance",
                  year: "2023",
                  organization: "National Quality Council",
                  description: "For maintaining highest quality standards"
                },
                {
                  award: "Emerging Leader in Supply Chain",
                  year: "2022",
                  organization: "Supply Chain Leadership Awards",
                  description: "For transforming construction logistics"
                }
              ].map((recognition) => (
                <Card key={recognition.award} className="text-center hover:shadow-elegant transition-shadow">
                  <CardHeader>
                    <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-lg">{recognition.award}</CardTitle>
                    <CardDescription>
                      {recognition.organization} • {recognition.year}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{recognition.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        */}

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Us in Building India's Future</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Whether you're a professional builder, retailer, or someone planning a construction project, 
              we're here to support your success with quality materials and reliable service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Partner with Us
              </Button>
              <Link to="/Contact">
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Contact Leadership Team
              </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  };

  export default About;