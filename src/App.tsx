import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import IndianBankCaseStudy from "./pages/IndianBankCaseStudy";
import NirmaanUIProject from "./pages/NirmaanUIProject";
import NatyaAIProject from "./pages/NatyaAIProject";
import ChromaGenProject from "./pages/ChromaGenProject";
import TechStack from "./pages/TechStack";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/indian-bank" element={<IndianBankCaseStudy />} />
          <Route path="/projects/nirmaan-ui" element={<NirmaanUIProject />} />
          <Route path="/projects/natya-ai" element={<NatyaAIProject />} />
          <Route path="/projects/chroma-gen" element={<ChromaGenProject />} />
          <Route path="/tech-stack" element={<TechStack />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
