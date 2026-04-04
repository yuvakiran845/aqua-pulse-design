import { useState, useEffect, useCallback, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  { src: "/images/swim4.webp", alt: "Swimming training session", position: "center center" },
  { src: "/images/swim2.webp", alt: "Butterfly stroke action", position: "center center" },
  { src: "/images/swim1.webp", alt: "Freestyle swimmer underwater", position: "center center" }
];

const HeroSection = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-[75vh] md:min-h-[85vh] lg:min-h-screen flex items-center justify-center overflow-hidden"
      role="region"
      aria-label="Welcome section with background slider"
    >
      {/* Background image Carousel - z-0 */}
      <div className="absolute inset-0 z-0 bg-[#0B1D2A]">
        <AnimatePresence>
          <motion.img
            key={active}
            src={images[active].src}
            alt={images[active].alt}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.03 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: images[active].position }}
          />
        </AnimatePresence>
      </div>

      {/* Specific Gradient Overlay - z-10 */}
      <div 
        className="absolute inset-0 z-10" 
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.4), rgba(0,0,0,0.7))"
        }}
      />

      {/* Hero Content - z-20 */}
      <div className="relative z-20 container-main text-center pt-[100px] sm:pt-28 md:pt-32 pb-24 sm:pb-16 md:pb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-5 sm:space-y-6 md:space-y-8"
        >
          {/* Heading Section */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <h1 className="text-[clamp(2.5rem,10vw,4.5rem)] font-heading font-black tracking-tight leading-[1.05] md:leading-tight px-2 drop-shadow-2xl">
              <span className="gradient-aqua-text whitespace-nowrap">AQUA PULSE</span>
              <br />
              <span className="text-white">SWIMMING ACADEMY</span>
            </h1>
            
            <div className="flex items-center justify-center gap-4 py-2">
              <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-cyan-500/50" />
              <p className="text-[clamp(0.875rem,2.5vw,1.25rem)] font-bold tracking-[0.3em] text-cyan-400 uppercase drop-shadow-md">
                Train • Transform • Triumph
              </p>
              <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-cyan-500/50" />
            </div>
          </div>

          <p className="text-[clamp(0.875rem,2vw,1.125rem)] text-white/80 max-w-2xl mx-auto font-medium px-4 leading-relaxed">
            Expert-led aquatic training designed for all age groups, focusing on safety, confidence, and performance excellence.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-cyan-400 text-[clamp(0.65rem,1.5vw,0.875rem)] font-bold tracking-widest uppercase">
            <span>Learn</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
            <span>Train</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
            <span>Perform</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
            <span>Stay Safe</span>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 pt-4">
            <Button variant="whatsapp" size="lg" className="w-[85%] max-w-[280px] sm:w-auto sm:min-w-[240px] font-bold text-base shadow-[0_0_20px_rgba(34,197,94,0.2)]" asChild>
              <a href="https://wa.me/918330945566" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Enquire on WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Navigation Dots - Matching Academy Pattern */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex gap-2.5 z-30">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-2.5 rounded-full transition-all duration-500 ${
              i === active ? "w-10 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]" : "w-2.5 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
