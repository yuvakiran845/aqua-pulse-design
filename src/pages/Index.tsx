import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

// Below-the-fold sections lazy-loaded for faster initial paint
const DivisionsSection = lazy(() => import("@/components/DivisionsSection"));
const FounderSection = lazy(() => import("@/components/FounderSection"));
const BenefitsSection = lazy(() => import("@/components/BenefitsSection"));
const MedicalSection = lazy(() => import("@/components/MedicalSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const EnquirySection = lazy(() => import("@/components/EnquirySection"));

const SectionLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-8 h-8 rounded-full border-2 border-transparent border-t-cyan-500 animate-spin" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <Suspense fallback={<SectionLoader />}>
        <DivisionsSection />
        <FounderSection />
        <BenefitsSection />
        <MedicalSection />
        <AboutSection />
        <EnquirySection />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Index;
