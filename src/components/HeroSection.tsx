import { Button } from "@/components/ui/button";
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

      <div className="relative container-main text-center pt-16 pb-12 -mt-5 md:-mt-8">
        <div className="max-w-4xl mx-auto space-y-5 md:space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-[3.4rem] lg:text-6xl font-heading font-bold leading-tight tracking-tight">
            <span className="gradient-aqua-text">AQUA PULSE</span>
            <br />
            <span className="text-foreground">SWIMMING ACADEMY</span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional Swimming Training & Aquatic Programs
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1.5 text-primary/80 text-[11px] sm:text-xs md:text-base font-medium tracking-widest uppercase mb-4">
            <span className="whitespace-nowrap">Learn</span>
            <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-primary shrink-0" />
            <span className="whitespace-nowrap">Train</span>
            <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-primary shrink-0" />
            <span className="whitespace-nowrap">Perform</span>
            <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-primary shrink-0" />
            <span className="whitespace-nowrap">Stay Safe</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button variant="aqua" size="lg" className="w-[80%] max-w-[240px] sm:w-auto sm:min-w-[200px] sm:max-w-none text-base" asChild>
              <a href="#enquiry">Register Now</a>
            </Button>
            <Button variant="whatsapp" size="lg" className="w-[80%] max-w-[240px] sm:w-auto sm:min-w-[200px] sm:max-w-none text-base" asChild>
              <a href="https://wa.me/918330945566" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
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
