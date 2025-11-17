// src/pages/Career.tsx
import React, { useEffect, useMemo, useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Loader2, AlertCircle, X } from "lucide-react";


type Role = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string; // Full-time / Part-time / Contract
  experience?: string;
  summary?: string;
  responsibilities?: string[];
  qualifications?: string[];
  applyEmail?: string;
  postedAt?: string; // ISO or human date
};

// Simple utility to format date
const formatDate = (dateString?: string) => {
    if (!dateString) return null;
    try {
        return new Date(dateString).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    } catch (e) {
        return dateString;
    }
};

const FILTER_ALL_VALUE = "__all__";


export default function Career() {
  const [roles, setRoles] = useState<Role[] | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);


  // filters / search
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState<string>(FILTER_ALL_VALUE);
  const [departmentFilter, setDepartmentFilter] = useState<string>(FILTER_ALL_VALUE);
  const [typeFilter, setTypeFilter] = useState<string>(FILTER_ALL_VALUE);


  // load roles dynamically (defensive)
  useEffect(() => {
    let mounted = true;

    const loadRoles = async () => {
      try {
        setIsLoading(true);
        setLoadError(null);

        // NOTE: Replace with your actual careers.json import path
        const mod = await import("@/data/careers.json");
        const data = (mod.default ?? mod) as Role[];

        if (!Array.isArray(data)) {
          throw new Error("careers.json must export an array of roles");
        }

        // Validate data structure and add fallbacks
        const validatedData = data.filter((role, index) => {
          if (!role || typeof role !== 'object') {
            console.warn(`Invalid role at index ${index}: not an object`);
            return false;
          }

          // Ensure critical fields exist
          if (!role.id || !role.title || !role.department || !role.location || !role.type) {
            console.warn(`Invalid role at index ${index}: missing required fields`, role);
            return false;
          }

          return true;
        });

        if (mounted) {
          setRoles(validatedData);
          setIsLoading(false);
        }
      } catch (err: any) {
        console.error("Failed to load careers.json:", err);
        if (mounted) {
          setLoadError(err?.message || "Failed to load job openings. Please try again later.");
          setRoles([]);
          setIsLoading(false);
        }
      }
    };

    loadRoles();

    return () => {
      mounted = false;
    };
  }, []);


  // debounce search
  useEffect(() => {
    const t = setTimeout(() => setDebouncedQuery(query.trim()), 300);
    return () => clearTimeout(t);
  }, [query]);


  // derive filter options with proper typing
  const uniqueLocations = useMemo(() => {
    if (!roles) return [];
    const locations = Array.from(new Set(roles.map((r) => r.location).filter(Boolean)));
    return locations.sort();
  }, [roles]);


  const uniqueDepartments = useMemo(() => {
    if (!roles) return [];
    const departments = Array.from(new Set(roles.map((r) => r.department).filter(Boolean)));
    return departments.sort();
  }, [roles]);


  const uniqueTypes = useMemo(() => {
    if (!roles) return [];
    const types = Array.from(new Set(roles.map((r) => r.type).filter(Boolean)));
    return types.sort();
  }, [roles]);


  // filtered roles with null safety
  const filtered = useMemo(() => {
    if (!roles) return [];

    const q = debouncedQuery.toLowerCase();

    return roles.filter((r) => {
      // Apply filters
      const locationMatch = locationFilter === FILTER_ALL_VALUE || r.location === locationFilter;
      const departmentMatch = departmentFilter === FILTER_ALL_VALUE || r.department === departmentFilter;
      const typeMatch = typeFilter === FILTER_ALL_VALUE || r.type === typeFilter;

      if (!locationMatch || !departmentMatch || !typeMatch) return false;

      // Apply search query
      if (!q) return true;

      const searchableText = [
        r.title,
        r.department,
        r.location,
        r.summary || "",
        r.experience || "",
        ...(r.responsibilities || []),
        ...(r.qualifications || [])
      ].join(" ").toLowerCase();

      return searchableText.includes(q);
    });
  }, [roles, debouncedQuery, locationFilter, departmentFilter, typeFilter]);


  // scroll to openings when Explore Roles clicked
  const gotoOpenings = () => {
    const el = document.getElementById("openings");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };


  // Handle apply click with validation
  const handleApply = (role: Role) => {
    const email = role.applyEmail || "careers@nirmannext.com";
    const subject = `Application for ${role.title}`;
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

    try {
      window.location.href = mailtoLink;
    } catch (err) {
      console.error("Failed to open email client:", err);
      alert(`Please send your application to: ${email}`);
    }
  };


  // Handle view role details
  const handleViewRole = (role: Role) => {
    setSelectedRole(role);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };


  // Close role details modal
  const closeRoleModal = () => {
    setSelectedRole(null);
    document.body.style.overflow = 'auto';
  };


  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedRole) {
        closeRoleModal();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [selectedRole]);


  // Reset all filters
  const resetFilters = () => {
    setQuery("");
    setDebouncedQuery(""); // Reset debounced query immediately too
    setLocationFilter(FILTER_ALL_VALUE);
    setDepartmentFilter(FILTER_ALL_VALUE);
    setTypeFilter(FILTER_ALL_VALUE);
  };


  const hasActiveFilters =
    query.trim() !== "" ||
    locationFilter !== FILTER_ALL_VALUE ||
    departmentFilter !== FILTER_ALL_VALUE ||
    typeFilter !== FILTER_ALL_VALUE;


  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-subtle py-20 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Careers</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Build with NirmanNext</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Join us in building a one-stop procurement platform for construction chemicals — from private-label manufacturing to depot logistics and product experience.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-primary" onClick={gotoOpenings}>
                Explore Roles
              </Button>
              {/* <Button
                size="lg"
                variant="outline"
                onClick={() => window.location.href = "mailto:careers@nirmannext.com"}
              >
                Contact HR
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Why NirmanNext?</h2>
          <p className="text-muted-foreground mb-6">
            Work on real problems in construction supply chains — product quality, depot logistics, and digital procurement. We value ownership, practical engineering, and a bias for action.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            <Card className="p-4">
              <CardHeader>
                <CardTitle className="text-lg">Impact at Scale</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Make an immediate impact on operations, product adoption and customer savings.
                </p>
              </CardContent>
            </Card>

            <Card className="p-4">
              <CardHeader>
                <CardTitle className="text-lg">Learning & Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Cross-functional exposure across product, manufacturing and field operations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Openings (dynamic) */}
      <section id="openings" className="py-12 bg-muted/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6 gap-4">
            <div>
              <h2 className="text-2xl font-semibold">Open Roles</h2>
              {!isLoading && (
                <p className="text-sm text-muted-foreground">
                  {filtered.length} {filtered.length === 1 ? "role" : "roles"} found
                  {hasActiveFilters && " with current filters"}
                </p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  className="pl-10"
                  placeholder="Search roles, skills..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  disabled={isLoading}
                />
              </div>

              <Select
                value={locationFilter}
                onValueChange={setLocationFilter}
                disabled={isLoading || uniqueLocations.length === 0}
              >
                <SelectTrigger className="w-full sm:w-44">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={FILTER_ALL_VALUE}>All Locations</SelectItem>
                  {uniqueLocations.map((loc) => (
                    <SelectItem key={loc} value={loc}>
                      {loc}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={departmentFilter}
                onValueChange={setDepartmentFilter}
                disabled={isLoading || uniqueDepartments.length === 0}
              >
                <SelectTrigger className="w-full sm:w-44">
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={FILTER_ALL_VALUE}>All Departments</SelectItem>
                  {uniqueDepartments.map((d) => (
                    <SelectItem key={d} value={d}>
                      {d}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={typeFilter}
                onValueChange={setTypeFilter}
                disabled={isLoading || uniqueTypes.length === 0}
              >
                <SelectTrigger className="w-full sm:w-36">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={FILTER_ALL_VALUE}>Any Type</SelectItem>
                  {uniqueTypes.map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>


          {hasActiveFilters && !isLoading && (
            <div className="mb-4">
              <Button
                variant="outline"
                size="sm"
                onClick={resetFilters}
                className="text-xs"
              >
                Clear all filters
              </Button>
            </div>
          )}


          {/* Loading State */}
          {isLoading && (
            <div className="flex flex-col items-center justify-center py-16">
              <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
              <p className="text-muted-foreground">Loading open positions...</p>
            </div>
          )}


          {/* Error State */}
          {loadError && !isLoading && (
            <div className="p-6 mb-6 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-red-800 dark:text-red-400 mb-1">
                    Failed to load job openings
                  </h3>
                  <p className="text-sm text-red-700 dark:text-red-500 mb-3">
                    {loadError}
                  </p>
                  <p className="text-xs text-red-600 dark:text-red-500">
                    Please ensure <code className="bg-red-100 dark:bg-red-900/40 px-1 py-0.5 rounded">src/data/careers.json</code> exists and contains valid job listings.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-3"
                    onClick={() => window.location.reload()}
                  >
                    Retry
                  </Button>
                </div>
              </div>
            </div>
          )}


          {/* Job Listings */}
          {!isLoading && !loadError && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filtered.map((r) => (
                <Card key={r.id} className="hover:shadow-elegant transition-all">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1 pr-4">
                        <h3 className="text-lg font-semibold mb-1">{r.title}</h3>
                        <div className="text-sm text-muted-foreground">
                          {r.department} • {r.location} • {r.type}
                        </div>
                        {r.experience && (
                          <div className="text-sm text-muted-foreground mt-1">
                            Experience: {r.experience}
                          </div>
                        )}
                      </div>
                      <div className="text-right shrink-0">
                        {r.postedAt && (
                          <Badge className="bg-primary/10 text-primary">
                            {formatDate(r.postedAt) || 'Date N/A'}
                          </Badge>
                        )}
                      </div>
                    </div>


                    {r.summary && (
                      <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
                        {r.summary}
                      </p>
                    )}


                    {(r.responsibilities && r.responsibilities.length > 0) && (
                      <div className="mt-3">
                        <p className="text-xs font-semibold text-muted-foreground mb-1">
                          Key Responsibilities:
                        </p>
                        <ul className="list-disc pl-5 text-xs text-muted-foreground space-y-0.5">
                          {r.responsibilities.slice(0, 2).map((item, i) => (
                            <li key={i} className="line-clamp-1">{item}</li>
                          ))}
                          {r.responsibilities.length > 2 && (
                            <li className="text-primary">+{r.responsibilities.length - 2} more</li>
                          )}
                        </ul>
                      </div>
                    )}


                    <div className="mt-4 flex items-center gap-3">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 sm:flex-none"
                        onClick={() => handleViewRole(r)}
                      >
                        View Details
                      </Button>
                      <Button
                        size="sm"
                        className="bg-primary flex-1 sm:flex-none"
                        onClick={() => handleApply(r)}
                      >
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}


          {/* Empty State */}
          {!isLoading && !loadError && filtered.length === 0 && (
            <div className="p-12 text-center">
              <div className="max-w-md mx-auto">
                <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No matching roles found</h3>
                <p className="text-muted-foreground mb-4">
                  {hasActiveFilters
                    ? "Try adjusting your filters or search terms to find more opportunities."
                    : "We don't have any open positions at the moment. Check back soon!"}
                </p>
                {hasActiveFilters && (
                  <Button variant="outline" onClick={resetFilters}>
                    Clear Filters
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </section>


      {/* CTA */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h3 className="text-2xl font-semibold mb-2">Can't find the right role?</h3>
          <p className="text-muted-foreground mb-4">
            Send us your resume at <strong>careers@nirmannext.com</strong> — we'll keep it on file and reach out when a fit opens up.
          </p>
          <a href="mailto:careers@nirmannext.com" style={{ textDecoration: "none" }}>
            <Button size="lg" variant="secondary">Send Resume</Button>
          </a>
        </div>
      </section>

      {/* ==============================
        FIX: ROLE DETAILS MODAL COMPONENT
        ==============================
      */}
      {selectedRole && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 transition-opacity duration-300"
          onClick={closeRoleModal} // Close on backdrop click
        >
          <div 
            className="bg-background rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto transform scale-100 transition-transform duration-300"
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
          >
            <div className="p-6 sm:p-8">
              <div className="flex justify-between items-start mb-4 border-b pb-4">
                <div>
                  <h2 className="text-2xl font-bold">{selectedRole.title}</h2>
                  <div className="text-sm text-muted-foreground mt-1">
                    {selectedRole.department} • {selectedRole.location} • {selectedRole.type}
                  </div>
                  {selectedRole.experience && (
                    <div className="text-sm text-muted-foreground mt-1">
                      Experience: {selectedRole.experience}
                    </div>
                  )}
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={closeRoleModal} 
                  className="mt-1 flex-shrink-0"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {selectedRole.summary && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Summary</h3>
                  <p className="text-muted-foreground text-sm">{selectedRole.summary}</p>
                </div>
              )}

              {selectedRole.responsibilities && selectedRole.responsibilities.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Responsibilities</h3>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    {selectedRole.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedRole.qualifications && selectedRole.qualifications.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Qualifications</h3>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    {selectedRole.qualifications.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="border-t pt-4 flex justify-end">
                <Button 
                  size="lg" 
                  className="bg-primary"
                  onClick={() => handleApply(selectedRole)}
                >
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* ==============================
        END: ROLE DETAILS MODAL COMPONENT
        ==============================
      */}
    </div>
  );
}