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
      primary: "+91 981 999 2488",
      secondary: "Available 24/7 for urgent queries",
      action: "Call Now",
      href: "tel:+919819992488"
    },
    {
      icon: Mail,
      title: "Email Support",
      primary: "support@nirmannext.com",
      secondary: "Response within 4 hours",
      action: "Send Email",
      href: "mailto:support@nirmannext.com"
    }
  ];

  const offices = [
    {
      city: "Lucknow",
      officeType: "Headquarters",
      address: "2nd Floor, Cyber Heights, Vibhuti Khand, Gomti Nagar,Lucknow, 226010",
      phone: "+91-9819992488",
      email: "admin@nirmannext.com",
      hours: "Mon-Fri: 9 AM - 7 PM",
      geoLocation: "https://www.google.com/maps?rlz=1C1CHBD_enIN1123IN1123&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgNGB4yCggCEAAYCBgNGB4yCggDEAAYgAQYogQyCggEEAAYgAQYogQyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQg1MDM1ajBqNKgCALACAQ&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KT2eU8gI45s5MQsIO-8cKqxj&daddr=2nd+Floor,+Cyber+Heights,+Vibhuti+Khand,+Gomti+Nagar,+Lucknow,+Uttar+Pradesh+226010"
    },
    {
      city: "Orai",
      officeType: "Manufacturing Plant",
      address: "NirmanNext Factry, 858, Mohammdabad, Orai, Jalaun 285122",
      phone: "+91- 8960981283",
      email: "admin@nirmannext.com",
      hours: "Mon-Sat: 8 AM - 6 PM",
      geoLocation: "https://www.google.com/maps?rlz=1C1CHBD_enIN1123IN1123&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQIRgKGKABMgkIAhAhGAoYoAEyCQgDECEYChigATIJCAQQIRgKGKABMgkIBRAhGAoYoAEyBggGECEYFTIHCAcQIRiPAjIHCAgQIRiPAjIHCAkQIRiPAtIBCDU0NzVqMGo0qAIAsAIB&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KVVrFF4AfZ05MVeZE4wJ2pdX&daddr=khasara+858,+Nirman+Next,+Mohammdabad,+Uttar+Pradesh+285122"
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
              <a href="tel:+919819992488" style={{ textDecoration: 'none' }}>
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Support Now
                </Button>
              </a>
              {/* <Button size="lg" variant="outline">
                <MessageCircle className="h-5 w-5 mr-2" />
                Start Live Chat
              </Button> */}
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
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
                    {method.href ? (
                      <a href={method.href} style={{ textDecoration: 'none' }}>
                        <Button variant="outline" size="sm" className="w-full">
                          {method.action}
                        </Button>
                      </a>
                    ) : (
                      <Button variant="outline" size="sm" className="w-full">
                        {method.action}
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Locations</h2>
            <p className="text-muted-foreground">
              Visit us at any of our premises for in-person support
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
            {offices.map((office) => (
              <Card key={office.city} className="hover:shadow-elegant transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">{office.city}</CardTitle>
                  </div>
                <Badge className="w-fit bg-primary/10 text-primary">{office.officeType}</Badge>
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
                  <a
                    href={office.geoLocation}
                    target="_blank"
                    rel="noopener noreferrer"
                  > 
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    Get Directions
                  </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
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
            <a href="tel:+919819992488" style={{ textDecoration: 'none' }}>
            <Button size="lg" variant="secondary">
              <Phone className="h-5 w-5 mr-2" />
              Call Support
            </Button>
            </a>
            {/* <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <MessageCircle className="h-5 w-5 mr-2" />
              Start Live Chat
            </Button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
