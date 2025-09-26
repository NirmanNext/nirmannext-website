import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Package, Truck, Shield, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Products = () => {
  const productCategories = [
    {
      name: "Cement & Concrete",
      image: "/src/assets/cement-category.jpg",
      products: 45,
      description: "Premium quality cement, concrete mix, and additives",
      featured: ["OPC 53 Grade", "PPC Cement", "Ready Mix Concrete"]
    },
    {
      name: "Adhesives & Sealants",
      image: "/src/assets/adhesives-category.jpg", 
      products: 32,
      description: "Tile adhesives, wall putty, and waterproofing solutions",
      featured: ["PlasterKing Pro", "RockGrip Adhesive", "Waterproof Sealant"]
    },
    {
      name: "Construction Tools",
      image: "/src/assets/hero-construction.jpg",
      products: 28,
      description: "Professional tools for construction and finishing work",
      featured: ["Power Tools", "Hand Tools", "Safety Equipment"]
    },
    {
      name: "Building Materials", 
      image: "/src/assets/cement-category.jpg",
      products: 67,
      description: "Bricks, blocks, sand, aggregates, and steel",
      featured: ["Red Bricks", "AAC Blocks", "River Sand"]
    },
    {
      name: "Finishing Materials",
      image: "/src/assets/adhesives-category.jpg",
      products: 89,
      description: "Tiles, paints, plasters, and decorative materials",
      featured: ["Ceramic Tiles", "Wall Paints", "Decorative Plaster"]
    },
    {
      name: "Plumbing & Electrical",
      image: "/src/assets/hero-construction.jpg", 
      products: 124,
      description: "Pipes, fittings, wires, and electrical accessories",
      featured: ["PVC Pipes", "Copper Wires", "Junction Boxes"]
    }
  ];

  const privateLabelBrands = [
    {
      name: "PlasterKing",
      tagline: "Premium Wall Care Solutions",
      products: ["Wall Putty", "Primer", "Texture Finish"],
      savings: "Save up to 30%",
      quality: "ISO 9001:2015 Certified"
    },
    {
      name: "RockGrip", 
      tagline: "Superior Adhesive Technology",
      products: ["Tile Adhesive", "Stone Fix", "Waterproof Bond"],
      savings: "Save up to 25%", 
      quality: "Lab Tested Quality"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-16 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Premium Construction Materials
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover our comprehensive range of quality-assured materials for every construction need. 
              From cement to finishing touches, we've got you covered.
            </p>
            
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input 
                  placeholder="Search products, brands, or categories..." 
                  className="pl-10"
                />
              </div>
              <Select>
                <SelectTrigger className="w-full md:w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filter by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="category">Category</SelectItem>
                  <SelectItem value="brand">Brand</SelectItem>
                  <SelectItem value="price">Price Range</SelectItem>
                  <SelectItem value="availability">Availability</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Private Label Brands */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Private Label Brands</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Exclusive brands offering superior quality at competitive prices
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {privateLabelBrands.map((brand) => (
              <Card key={brand.name} className="overflow-hidden border-2 hover:shadow-elegant transition-shadow">
                <CardHeader className="bg-gradient-primary text-primary-foreground">
                  <CardTitle className="text-2xl">{brand.name}</CardTitle>
                  <CardDescription className="text-primary-foreground/80">
                    {brand.tagline}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-primary" />
                      <span className="font-medium">{brand.quality}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {brand.savings}
                      </Badge>
                    </div>
                    <div>
                      <p className="font-medium mb-2">Featured Products:</p>
                      <div className="flex flex-wrap gap-1">
                        {brand.products.map((product) => (
                          <Badge key={product} variant="outline">
                            {product}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full mt-4">
                      View {brand.name} Products
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Product Categories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse our extensive catalog organized by construction phases and material types
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category) => (
              <Card key={category.name} className="group hover:shadow-elegant transition-all duration-300 overflow-hidden">
                <div className="aspect-video bg-gradient-subtle relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                  <div className="absolute top-4 right-4 z-20">
                    <Badge className="bg-primary/90 text-primary-foreground">
                      {category.products} Products
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 z-20">
                    <h3 className="text-xl font-bold text-white mb-1">{category.name}</h3>
                  </div>
                  <Package className="absolute inset-0 m-auto h-16 w-16 text-muted-foreground/30" />
                </div>
                
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-sm mb-2">Featured Items:</p>
                      <div className="flex flex-wrap gap-1">
                        {category.featured.map((item) => (
                          <Badge key={item} variant="secondary" className="text-xs">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Truck className="h-4 w-4" />
                        <span>Free Delivery</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>4.8+ Rating</span>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Browse {category.name}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get bulk pricing, expert guidance, and reliable delivery for your construction needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Request Bulk Quote
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Speak to Expert
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;