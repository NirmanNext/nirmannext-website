import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageCircle, Users, Package, Building } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      primary: "+91 1800-NIRMAN (647626)",
      secondary: "Available 24/7 for urgent queries",
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Support",
      primary: "support@nirmannext.com",
      secondary: "Response within 4 hours",
      action: "Send Email"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      primary: "Instant messaging support",
      secondary: "Available 9 AM - 9 PM",
      action: "Start Chat"
    },
    {
      icon: MapPin,
      title: "Office Visit",
      primary: "Schedule an appointment",
      secondary: "Mumbai, Delhi, Bangalore offices",
      action: "Book Visit"
    }
  ];

  const offices = [
    {
      city: "Mumbai (Head Office)",
      address: "Tower A, Business Park, Andheri East, Mumbai - 400069",
      phone: "+91 22 4567 8900",
      email: "mumbai@nirmannext.com",
      hours: "Mon-Sat: 9 AM - 7 PM"
    },
    {
      city: "Delhi",
      address: "Sector 18, Cyber Hub, Gurugram, Haryana - 122015",
      phone: "+91 11 4567 8900",
      email: "delhi@nirmannext.com",
      hours: "Mon-Sat: 9 AM - 7 PM"
    },
    {
      city: "Bangalore",
      address: "Electronic City Phase 1, Bangalore, Karnataka - 560100",
      phone: "+91 80 4567 8900",
      email: "bangalore@nirmannext.com",
      hours: "Mon-Sat: 9 AM - 7 PM"
    }
  ];

  const departments = [
    { icon: Package, name: "Sales & Orders", description: "Product queries, bulk orders, pricing" },
    { icon: Users, name: "Partnership", description: "Become a retailer or contractor partner" },
    { icon: Building, name: "Quality & Delivery", description: "Quality issues, delivery support" },
    { icon: MessageCircle, name: "General Support", description: "Account support, general queries" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Contact & Support
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              We're Here to <span className="text-primary">Help You Build</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Have questions about products, orders, partnerships, or need technical support? 
              Our expert team is ready to assist you 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Phone className="h-5 w-5 mr-2" />
                Call Support Now
              </Button>
              <Button size="lg" variant="outline">
                <MessageCircle className="h-5 w-5 mr-2" />
                Start Live Chat
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Multiple Ways to Reach Us</h2>
            <p className="text-muted-foreground">
              Choose the most convenient way to get in touch with our support team
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method) => {
              const IconComponent = method.icon;
              return (
                <Card key={method.title} className="text-center hover:shadow-elegant transition-shadow border-2 hover:border-primary/20">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{method.title}</CardTitle>
                    <CardDescription className="font-medium">{method.primary}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{method.secondary}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Send Us a Message</h2>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 4 hours
              </p>
            </div>
            
            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Contact Form */}
                  <div>
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Full Name *</label>
                          <Input placeholder="Enter your full name" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Phone Number *</label>
                          <Input placeholder="+91 9876543210" />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Email Address *</label>
                        <Input type="email" placeholder="your.email@example.com" />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">I am a *</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="contractor">Contractor/Builder</SelectItem>
                            <SelectItem value="architect">Architect/Engineer</SelectItem>
                            <SelectItem value="retailer">Retailer/Dealer</SelectItem>
                            <SelectItem value="homeowner">Homeowner/Individual</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Department</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select department" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sales">Sales & Orders</SelectItem>
                            <SelectItem value="partnership">Partnership</SelectItem>
                            <SelectItem value="quality">Quality & Delivery</SelectItem>
                            <SelectItem value="support">General Support</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Subject *</label>
                        <Input placeholder="Brief subject of your inquiry" />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Message *</label>
                        <Textarea 
                          placeholder="Please provide details about your inquiry, project requirements, or questions..."
                          rows={4}
                        />
                      </div>
                      
                      <Button size="lg" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  </div>
                  
                  {/* Quick Support */}
                  <div>
                    <h3 className="text-xl font-bold mb-6">Quick Support by Department</h3>
                    <div className="space-y-4">
                      {departments.map((dept) => {
                        const IconComponent = dept.icon;
                        return (
                          <Card key={dept.name} className="p-4 hover:bg-accent/50 transition-colors">
                            <div className="flex items-start gap-3">
                              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                <IconComponent className="h-5 w-5 text-primary" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-sm">{dept.name}</h4>
                                <p className="text-xs text-muted-foreground">{dept.description}</p>
                              </div>
                            </div>
                          </Card>
                        );
                      })}
                    </div>
                    
                    <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-5 w-5 text-green-600" />
                        <span className="font-semibold text-green-800">Response Time</span>
                      </div>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Email: Within 4 hours</li>
                        <li>• Phone: Immediate</li>
                        <li>• Chat: Within 2 minutes</li>
                        <li>• Urgent issues: 24/7 support</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Office Locations</h2>
            <p className="text-muted-foreground">
              Visit us at any of our offices across India for in-person support
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {offices.map((office) => (
              <Card key={office.city} className="hover:shadow-elegant transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">{office.city}</CardTitle>
                  </div>
                  {office.city.includes("Head Office") && (
                    <Badge className="w-fit bg-primary/10 text-primary">Headquarters</Badge>
                  )}
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Address:</p>
                    <p className="text-sm">{office.address}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="text-sm">{office.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="text-sm">{office.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-sm">{office.hours}</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Quick answers to common questions
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              {
                question: "What are your delivery timelines?",
                answer: "We offer same-day delivery in metros and 2-3 days delivery in other cities across India."
              },
              {
                question: "Do you offer bulk pricing?",
                answer: "Yes, we provide competitive bulk pricing for contractors and builders with volume discounts."
              },
              {
                question: "How can I become a retail partner?",
                answer: "Fill out our partnership form or call our partnership team. No minimum investment required."
              },
              {
                question: "What quality certifications do you have?",
                answer: "All our products are BIS certified and tested in our in-house laboratory."
              },
              {
                question: "Do you provide technical support?",
                answer: "Yes, our technical experts provide guidance on product selection and application methods."
              },
              {
                question: "What payment options are available?",
                answer: "We accept all major payment methods including UPI, cards, NEFT, and offer 45-day credit terms for partners."
              }
            ].map((faq) => (
              <Card key={faq.question} className="hover:shadow-elegant transition-shadow">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3">{faq.question}</h4>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline">
              View All FAQs
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl mb-8 opacity-90">
            Our support team is available 24/7 to help you with any queries or concerns
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Phone className="h-5 w-5 mr-2" />
              Call Support: 1800-NIRMAN
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <MessageCircle className="h-5 w-5 mr-2" />
              Start Live Chat
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;