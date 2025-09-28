import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Truck, Shield } from "lucide-react";
import cementImage from "@/assets/cement-category.jpg";
import adhesivesImage from "@/assets/adhesives-category.jpg";

const ProductShowcase = () => {
  const categories = [
    {
      name: "Cement & Concrete",
      image: cementImage,
      products: "150+ Products",
      badge: "Best Seller",
      description: "Premium cement brands with guaranteed strength and consistency for all construction needs."
    },
    {
      name: "Adhesives & Sealants", 
      image: adhesivesImage,
      products: "80+ Products",
      badge: "Private Label",
      description: "High-performance adhesives and sealants for professional applications and DIY projects."
    },
    {
      name: "Construction Tools",
      image: null,
      products: "200+ Products", 
      badge: "Bulk Discounts",
      description: "Professional-grade tools and equipment for contractors, builders, and professionals."
    },
    {
      name: "Sand & Aggregates",
      image: null,
      products: "50+ Variants",
      badge: "Fast Delivery",
      description: "Quality-tested sand, gravel, and aggregates delivered directly to your construction site."
    }
  ];

  const privateLabelProducts = [
    {
      name: "RockGrip Block Adhesives",
      category: "Premium AAC Block Adhesive",
      savings: "Upto 20% Cost Savings",
      features: ["BIS Certified", "In-house Tested", "Professional Grade"],
      rating: 4.8
    },
    {
      name: "RockGrip Tile Adhesives", 
      category: "Tile Adhesive",
      savings: "Upto 30% Cost Savings",
      features: ["Weather Resistant", "High Bond Strength", "Quick Setting"],
      rating: 4.9
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Product Categories */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Complete Construction Material Range
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From foundation to finishing, find everything you need with guaranteed quality, 
              competitive pricing, and reliable delivery.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {categories.map((category, index) => (
              <Card key={index} className="group hover:shadow-elevated transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border-0 shadow-card-custom overflow-hidden">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  {category.image ? (
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-construction flex items-center justify-center">
                      <span className="text-4xl font-bold text-steel">
                        {category.name.split(' ')[0][0]}
                      </span>
                    </div>
                  )}
                  <Badge className="absolute top-3 right-3 bg-construction-orange text-white border-0">
                    {category.badge}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-foreground">
                    {category.name}
                  </h3>
                  <p className="text-sm text-construction-orange font-medium mb-3">
                    {category.products}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {category.description}
                  </p>
                  <Button variant="ghost" size="sm" className="w-full group-hover:text-primary transition-colors duration-300">
                    Explore Category
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="construction" size="lg">
              Browse All Categories
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>

        {/* Private Label Spotlight */}
        <div className="bg-gradient-construction rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Private Label Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our exclusive private-label products deliver premium quality at unbeatable prices, 
              rigorously tested and BIS certified.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {privateLabelProducts.map((product, index) => (
              <Card key={index} className="border-0 shadow-card-custom">
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground">
                        {product.category}
                      </p>
                    </div>
                    <Badge variant="secondary" className="bg-construction-green text-white">
                      {product.savings}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center mb-6">
                    <div className="flex items-center mr-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                      <span className="ml-2 text-sm font-medium text-muted-foreground">
                        {product.rating}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <Shield className="w-4 h-4 text-construction-green mr-3" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    View Product Details
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center text-muted-foreground">
              <Truck className="w-5 h-5 mr-2" />
              <span>Factory Pricing on bulk orders</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <Shield className="w-5 h-5 mr-2" />
              <span>Quality guarantee</span>
            </div>
            <Button variant="construction">
              Explore Private Label Range
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;