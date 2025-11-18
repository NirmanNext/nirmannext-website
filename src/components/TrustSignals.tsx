// src/components/TrustSignals.tsx
import React, { useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Quote,
  Play,
  TrendingUp,
  Users,
  Award
} from "lucide-react";

// Import JSON data
import rawData from "@/data/testimonials.json";

type TestimonialItem = {
  name: string;
  role: string;
  rating?: number;
  quote?: string;
  impact?: string;
};

type StatItem = {
  icon?: string;
  number?: string;
  label?: string;
  growth?: string;
};

type TestimonialsJson = {
  testimonials?: TestimonialItem[];
  stats?: StatItem[];
  partners?: string[];
};

// icon map (string -> component)
const ICON_MAP: Record<string, React.ComponentType<any>> = {
  Users,
  TrendingUp,
  Award
};

const TrustSignals: React.FC = () => {
  // Defensive validation of imported JSON
  const data = useMemo(() => {
    const parsed: TestimonialsJson = (rawData as unknown) as TestimonialsJson;

    // Ensure arrays exist and are arrays
    const testimonials = Array.isArray(parsed.testimonials) ? parsed.testimonials : [];
    const stats = Array.isArray(parsed.stats) ? parsed.stats : [];
    const partners = Array.isArray(parsed.partners) ? parsed.partners : [];

    // Filter/normalize testimonials to safe shape
    const safeTestimonials: TestimonialItem[] = testimonials
      .filter((t) => t && typeof t === "object" && (t.name || t.quote))
      .map((t) => ({
        name: t.name || "Anonymous",
        role: t.role || "",
        rating: typeof t.rating === "number" ? Math.max(0, Math.min(5, t.rating)) : 0,
        quote: t.quote || "",
        impact: t.impact || ""
      }));

    // Normalize stats
    const safeStats: StatItem[] = stats
      .filter((s) => s && typeof s === "object")
      .map((s) => ({
        icon: s.icon || undefined,
        number: s.number || "",
        label: s.label || "",
        growth: s.growth || ""
      }));

    const safePartners = partners.filter((p) => typeof p === "string");

    return {
      testimonials: safeTestimonials,
      stats: safeStats,
      partners: safePartners
    };
  }, []);

  const { testimonials, stats, partners } = data;

  return (
    <section className="py-20 bg-gradient-construction">
      <div className="container mx-auto px-4">
        {/* Growth Stats */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Trusted by Professionals</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Join a growing community of contractors, retailers, and builders who have transformed their business with NirmanNext.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {stats.length > 0 ? (
              stats.map((stat, index) => {
                const IconComponent = stat.icon && ICON_MAP[stat.icon] ? ICON_MAP[stat.icon] : Users;
                return (
                  <Card key={index} className="text-center border-0 shadow-card-custom">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <div className="text-3xl font-bold text-foreground mb-1">{stat.number || "—"}</div>
                      <div className="text-muted-foreground mb-2">{stat.label || "—"}</div>
                      {stat.growth && (
                        <Badge variant="secondary" className="bg-construction-green/10 text-construction-green border-0">
                          {stat.growth}
                        </Badge>
                      )}
                    </CardContent>
                  </Card>
                );
              })
            ) : (
              // Fallback hardcoded small cards if stats missing
              <>
                <Card className="text-center border-0 shadow-card-custom">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-1">100+</div>
                    <div className="text-muted-foreground mb-2">Active Professionals</div>
                    <Badge variant="secondary" className="bg-construction-green/10 text-construction-green border-0">10x this year</Badge>
                  </CardContent>
                </Card>

                <Card className="text-center border-0 shadow-card-custom">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-1">5000 Ton+</div>
                    <div className="text-muted-foreground mb-2">Materials Delivered</div>
                    <Badge variant="secondary" className="bg-construction-green/10 text-construction-green border-0">+25% MoM</Badge>
                  </CardContent>
                </Card>

                <Card className="text-center border-0 shadow-card-custom">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-1">20+</div>
                    <div className="text-muted-foreground mb-2">Cities Served</div>
                    <Badge variant="secondary" className="bg-construction-green/10 text-construction-green border-0">Expanding quarterly</Badge>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Real Stories from Real Professionals</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how NirmanNext has helped professionals across India build better, faster, and more profitably.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {testimonials.length > 0 ? (
              testimonials.map((testimonial, index) => (
                <Card key={index} className="group hover:shadow-elevated transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-card-custom">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                      <Quote className="h-6 w-6 text-primary" />
                    </div>

                    <div className="flex items-center mb-4">
                      {Array.from({ length: testimonial.rating || 0 }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400" />
                      ))}
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.quote}"</p>

                    {testimonial.impact && (
                      <Badge className="mb-6 bg-construction-orange text-white border-0">{testimonial.impact}</Badge>
                    )}

                    <div className="border-t pt-6">
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-full p-8 text-center text-muted-foreground">
                No testimonials available. Check back later.
              </div>
            )}
          </div>

          {/* Optional Video CTA - kept commented (same as original) */}
          {/* <div className="text-center">
            <Button variant="outline" size="lg" className="group">
              <Play className="mr-2 group-hover:scale-110 transition-transform duration-300" />
              Watch Customer Success Stories
            </Button>
          </div> */}
        </div>

        {/* Partner Logos */}
        {/* <div>
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-2">Partnered with Leading Brands</h3>
            <p className="text-muted-foreground">We work with India's most trusted construction material manufacturers</p>
          </div>

          <div className="bg-background rounded-xl p-8 shadow-card-custom">
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {partners.length > 0 ? (
                partners.map((partner, index) => (
                  <div
                    key={index}
                    className="text-lg font-semibold text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer"
                  >
                    {partner}
                  </div>
                ))
              ) : (
                // Fallback partner names
                ["RockGrip", "ACC Limited", "Tata Steel"].map((p, i) => (
                  <div key={i} className="text-lg font-semibold text-muted-foreground">{p}</div>
                ))
              )}
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default TrustSignals;
