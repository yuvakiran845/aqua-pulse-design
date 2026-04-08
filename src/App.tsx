import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import FloatingElements from "./components/FloatingElements.tsx";

// Eager-load the home page for instant first paint
import Index from "./pages/Index.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";

// Lazy-load all secondary pages — only downloaded when the user navigates to them
const SwimmingAcademy = lazy(() => import("./pages/SwimmingAcademy.tsx"));
const FounderPage = lazy(() => import("./pages/FounderPage.tsx"));
const FacilityManagement = lazy(() => import("./pages/FacilityManagement.tsx"));
const HubSportsArena = lazy(() => import("./pages/HubSportsArena.tsx"));
const Registration = lazy(() => import("./pages/Registration.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient();

// Premium loading spinner matching the site's dark + cyan aesthetic
const PageLoader = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-2 border-cyan-500/20" />
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-500 animate-spin" />
      </div>
      <p className="text-muted-foreground text-sm font-medium tracking-wide animate-pulse">
        Loading...
      </p>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollToTop />
        <FloatingElements />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/swimming-academy" element={<SwimmingAcademy />} />
            <Route path="/founder" element={<FounderPage />} />
            <Route path="/facility-management" element={<FacilityManagement />} />
            <Route path="/hub-sports-arena" element={<HubSportsArena />} />
            <Route path="/register" element={<Registration />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
