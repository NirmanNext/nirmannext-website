import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Products from "./pages/Products";
import Professionals from "./pages/Professionals";
import Retailers from "./pages/Retailers";
import Quality from "./pages/Quality";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Faqs from "./pages/Faqs";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Career from "./pages/Career";
import Payment from "./pages/Payment";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/professionals" element={<Professionals />} />
          <Route path="/retailers" element={<Retailers />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Privacy-Policy" element={<Privacy />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/career" element={<Career />} />
          <Route path="/payment" element={<Payment />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
