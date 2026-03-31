import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-pool.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Swimming pool" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative container-main text-center pt-20 pb-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight tracking-tight">
            <span className="gradient-aqua-text">AQUA PULSE</span>
            <br />
            <span className="text-foreground">SWIMMING ACADEMY</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional Swimming Training & Aquatic Programs
          </p>

          <div className="flex items-center justify-center gap-2 text-primary/80 text-sm md:text-base font-medium tracking-widest uppercase">
            <span>Learn</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>Train</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>Perform</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>Stay Safe</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button variant="aqua" size="lg" className="min-w-[200px] text-base" asChild>
              <a href="#enquiry">Register Now</a>
            </Button>
            <Button variant="whatsapp" size="lg" className="min-w-[200px] text-base" asChild>
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Enquire on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
