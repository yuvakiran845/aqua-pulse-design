import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DivisionsSection from "@/components/DivisionsSection";
import MedicalSection from "@/components/MedicalSection";
import BenefitsSection from "@/components/BenefitsSection";
import EnquirySection from "@/components/EnquirySection";
import AboutSection from "@/components/AboutSection";
import FounderSection from "@/components/FounderSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <DivisionsSection />
      <FounderSection />
      <BenefitsSection />
      <MedicalSection />
      <AboutSection />
      <EnquirySection />
      <Footer />
    </div>
  );
};

export default Index;
