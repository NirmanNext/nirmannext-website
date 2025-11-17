// src/pages/Products.tsx
import React, { useMemo, useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Package, Truck, Shield } from "lucide-react";
import { Input } from "@/components/ui/input";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// import products JSON (assumes src/data/products.json exists)
import productsDataRaw from "@/data/products.json";

type Product = {
  id: string;
  name: string;
  brand: string;
  category: string;
  packaging?: string;
  short_description?: string;
  applicationArea?: string;
  description?: string;
  certification?: string;
  image?: string; // path as stored in JSON, e.g. "/src/assets/products/TA01.png"
  available?: boolean;
  tags?: string[];
};

const productsData: Product[] = (productsDataRaw as unknown) as Product[];

/**
 * Glob-import product asset files from src/assets/products/
 * - eager: true -> returns URLs at build time
 * - as: "url" -> returns string URLs (instead of module)
 *
 * Note: Type assertion to Record<string,string> helps TS. Vite provides import.meta.glob.
 */
const importedProductImages = import.meta.glob<
  string
>("/src/assets/products/*.{png,jpg,jpeg,webp,svg}", { eager: true, as: "url" }) as Record<
  string,
  string
>;

/**
 * Utility: resolve an image path from JSON to the actual URL returned by import.meta.glob.
 * - Accepts paths like "/src/assets/products/TA01.png" (what you're using in JSON)
 * - Also attempts basenames if JSON contains only filename or relative path.
 */
function resolveImageUrl(imagePath?: string): string | undefined {
  if (!imagePath) return undefined;

  // direct hit (JSON path matches glob key)
  if (importedProductImages[imagePath]) {
    return importedProductImages[imagePath];
  }

  // normalize: strip leading "./" or "/" if present
  const normalized = imagePath.replace(/^\.\//, "").replace(/^\//, "");

  // Try matching using full 'src/assets/products/...' key produced by glob
  const altKey = `/src/${normalized}`;
  if (importedProductImages[altKey]) return importedProductImages[altKey];

  // Try matching by basename only (TA01.png)
  const base = normalized.split("/").pop();
  if (base) {
    // find a glob entry that endsWith the basename
    const foundEntry = Object.entries(importedProductImages).find(([k]) =>
      k.endsWith(`/products/${base}`)
    );
    if (foundEntry) return foundEntry[1];
  }

  // not found
  return undefined;
}

// derive unique filter lists
const uniqueBrands = Array.from(new Set(productsData.map((p) => p.brand))).filter(Boolean);
const uniqueCategories = Array.from(new Set(productsData.map((p) => p.category))).filter(Boolean);
const uniqueAppAreas = Array.from(
  new Set(productsData.map((p) => p.applicationArea).filter(Boolean))
).filter(Boolean);

export default function Products() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [brandFilter, setBrandFilter] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [appAreaFilter, setAppAreaFilter] = useState<string | null>(null);
  const [availabilityFilter, setAvailabilityFilter] = useState<string>("any"); // 'any'|'in'|'out'

  // debounce search input (300ms)
  React.useEffect(() => {
    const t = setTimeout(() => setDebouncedQuery(query.trim()), 300);
    return () => clearTimeout(t);
  }, [query]);

  const filtered = useMemo(() => {
    const q = debouncedQuery.toLowerCase();
    return productsData.filter((p) => {
      // availability filter
      if (availabilityFilter === "in" && !p.available) return false;
      if (availabilityFilter === "out" && p.available) return false;

      // brand filter
      if (brandFilter && p.brand !== brandFilter) return false;

      // category filter
      if (categoryFilter && p.category !== categoryFilter) return false;

      // application area filter
      if (appAreaFilter && p.applicationArea !== appAreaFilter) return false;

      // search (name, brand, short_description, applicationArea, certification, description, tags)
      if (!q) return true;
      const hay = `${p.name} ${p.brand} ${p.category} ${p.short_description || ""} ${
        p.applicationArea || ""
      } ${p.certification || ""} ${p.description || ""} ${p.tags?.join(" ") || ""}`.toLowerCase();
      return hay.includes(q);
    });
  }, [debouncedQuery, brandFilter, categoryFilter, appAreaFilter, availabilityFilter]);

  // UI helpers
  const clearAllFilters = () => {
    setQuery("");
    setBrandFilter(null);
    setCategoryFilter(null);
    setAppAreaFilter(null);
    setAvailabilityFilter("any");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-subtle py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Premium Construction Materials
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              One-stop catalog for RockGrip adhesives and PlasterKing wall-care products.
            </p>

            {/* Search & Filters */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center max-w-3xl mx-auto">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products, brands, certifications or application area..."
                  className="pl-10"
                  aria-label="Search products"
                />
              </div>

              {/* Brand select */}
              <Select
                value={brandFilter ?? "all"}
                onValueChange={(v) => setBrandFilter(v === "all" ? null : v)}
              >
                <SelectTrigger className="w-full md:w-44">
                  <SelectValue placeholder="Brand" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Brands</SelectItem>
                  {uniqueBrands.map((b) => (
                    // ensure no empty string value
                    <SelectItem key={b} value={b || `brand-${b}`}>
                      {b}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Category select */}
              <Select
                value={categoryFilter ?? "all"}
                onValueChange={(v) => setCategoryFilter(v === "all" ? null : v)}
              >
                <SelectTrigger className="w-full md:w-44">
                  <Package className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {uniqueCategories.map((c) => (
                    <SelectItem key={c} value={c || `cat-${c}`}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Application Area select */}
              <Select
                value={appAreaFilter ?? "all"}
                onValueChange={(v) => setAppAreaFilter(v === "all" ? null : v)}
              >
                <SelectTrigger className="w-full md:w-40">
                  <SelectValue placeholder="Application Area" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Areas</SelectItem>
                  {uniqueAppAreas.map((a) => (
                    <SelectItem key={a} value={a || `area-${a}`}>
                      {a}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Availability */}
              <Select
                value={availabilityFilter}
                onValueChange={(v) => setAvailabilityFilter(v || "any")}
              >
                <SelectTrigger className="w-full md:w-40">
                  <Truck className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Availability" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="in">In Stock</SelectItem>
                  <SelectItem value="out">Out of Stock</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-semibold">Products</h2>
              <p className="text-sm text-muted-foreground">
                Showing {filtered.length} of {productsData.length} products
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                onClick={clearAllFilters}
              >
                Clear filters
              </Button>
              <Badge className="bg-primary/10 text-primary-foreground">
                RockGrip & PlasterKing
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => {
              // attempt to resolve image URL for this product
              const imageUrl = resolveImageUrl(p.image);

              return (
                <Card key={p.id} className="hover:shadow-elegant transition-all">
                  <div className="aspect-video bg-gray-50 flex items-center justify-center overflow-hidden">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={p.name}
                        className="h-36 object-contain"
                        loading="lazy"
                        // on error, hide the image to allow icon fallback
                        onError={(e) => {
                          // hide broken image and clear src so browser doesn't repeatedly try
                          const el = e.currentTarget as HTMLImageElement;
                          el.style.display = "none";
                          el.src = "";
                        }}
                      />
                    ) : (
                      // fallback icon if no image available or resolution failed
                      <Shield className="h-12 w-12 text-muted-foreground/40" aria-hidden />
                    )}
                  </div>

                  <CardContent>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{p.name}</CardTitle>
                        <div className="text-sm text-muted-foreground">
                          {p.brand} • {p.packaging}
                        </div>

                        {p.short_description && (
                          <div className="mt-2 text-sm text-gray-700">{p.short_description}</div>
                        )}

                        {p.applicationArea && (
                          <div className="mt-2 text-sm text-muted-foreground">
                            <strong>Application:</strong> {p.applicationArea}
                          </div>
                        )}

                        {p.certification && (
                          <div className="mt-2 text-xs text-muted-foreground">
                            <strong>Certification:</strong> {p.certification}
                          </div>
                        )}
                      </div>

                      <div className="text-right">
                        <div className="text-xs text-muted-foreground">
                          {p.available ? "In stock" : "Out of stock"}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {p.tags?.slice(0, 3).map((t) => (
                          <Badge key={t} variant="secondary" className="text-xs">
                            {t}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center gap-3">
                        <Button size="sm" variant="ghost" onClick={() => {
                          // simple stub — wire this to RFQ flow
                          window.alert(`Request RFQ for ${p.name}`);
                        }}>
                          Request RFQ
                        </Button>
                        <Button size="sm" onClick={() => {
                          const phone = "919819992488"; // WhatsApp requires country code without +
                          // open WA link fallback (simple)
                          const msg = encodeURIComponent(`Hi, I want to ask about ${p.name} (${p.id})`);
                          const waUrl = `https://wa.me/${phone}?text=${msg}`;
                          // open whatsapp web (user may not have WA installed)
                          window.open(waUrl, "_blank");
                        }}>
                          WhatsApp
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {filtered.length === 0 && (
              <div className="col-span-full p-8 text-center text-muted-foreground">
                No products match your search. Try clearing filters or search terms.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold">Need a sample pack?</h3>
          <p className="text-sm opacity-90 mb-4">Request a sample to test product performance on-site.</p>
          <Button size="lg" variant="secondary">
            Request Sample
          </Button>
        </div>
      </section>
      {/* <FloatingWhatsApp /> */}
    </div>
  );
}
