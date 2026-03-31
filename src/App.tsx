import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import SwimmingAcademy from "./pages/SwimmingAcademy.tsx";
import FounderPage from "./pages/FounderPage.tsx";
import NotFound from "./pages/NotFound.tsx";
import FloatingElements from "./components/FloatingElements.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <FloatingElements />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/swimming-academy" element={<SwimmingAcademy />} />
          <Route path="/founder" element={<FounderPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
