import { useEffect, useMemo, useState, type ComponentType, type TouchEvent } from "react";
import {
  Baby,
  Dumbbell,
  HeartHandshake,
  ShieldCheck,
  Timer,
  TrendingUp,
  UserCheck2,
  Users,
  Waves,
  Zap,
  Trophy,
  SunMedium,
  HeartPulse,
  PersonStanding,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const heroSlides = [
  {
    src: "https://images.unsplash.com/photo-1600965962361-9035dbfd1c50?auto=format&fit=crop&w=2400&q=80",
    alt: "Professional swimming pool with competition lanes",
  },
  {
    src: "https://images.unsplash.com/photo-1622629797619-c100e3e67e2b?auto=format&fit=crop&w=2400&q=80",
    alt: "Kids learning swimming with coach supervision",
  },
  {
    src: "https://images.unsplash.com/photo-1622629798327-5f392ff35f56?auto=format&fit=crop&w=2400&q=80",
    alt: "Swimming coaching technique session",
  },
  {
    src: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=2400&q=80",
    alt: "Competitive swimmer in training",
  },
  {
    src: "https://images.unsplash.com/photo-1604442999455-7da6b6197d3d?auto=format&fit=crop&w=2400&q=80",
    alt: "Young swimmers practicing in a training lane",
  },
  {
    src: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=2400&q=80",
    alt: "Coach guiding swimmer technique in pool",
  },
];

// Reused program catalog shown across the product, transformed locally for this page.
const existingPrograms = [
  "Summer Camp",
  "Beginners Program",
  "Intermediate Program",
  "Advanced Program",
  "Aqua Sprouts (Toddlers)",
  "Ladies Exclusive Program",
  "Special Kids Aquatic Program",
  "Senior Citizen Swimming",
  "Aqua Rehabilitation",
  "1-1 Personal Training",
] as const;

const programMeta: Record<
  (typeof existingPrograms)[number],
  { icon: ComponentType<{ className?: string }>; desc: string; points: string[] }
> = {
  "Summer Camp": {
    icon: SunMedium,
    desc: "Seasonal aquatic training for children and beginners focused on confidence, breathing, and water safety.",
    points: ["🌊 Water confidence", "🫁 Breath control", "🛟 Water safety"],
  },
  "Beginners Program": {
    icon: Waves,
    desc: "First-step coaching that builds water comfort, basic movement control, and strong swimming foundations.",
    points: ["💧 Pool entry basics", "🏊 Floating skills", "🧭 Guided progression"],
  },
  "Intermediate Program": {
    icon: Zap,
    desc: "Skill-up training for swimmers improving stroke technique, endurance, and overall aquatic efficiency.",
    points: ["⚡ Stroke refinement", "⏱️ Endurance building", "🎯 Turn technique"],
  },
  "Advanced Program": {
    icon: Trophy,
    desc: "Performance-focused sessions tailored for swimmers preparing for higher-level competitive milestones.",
    points: ["🏁 Race strategy", "📈 Performance tracking", "🥇 Competitive readiness"],
  },
  "Aqua Sprouts (Toddlers)": {
    icon: Baby,
    desc: "Gentle toddler sessions that nurture early water confidence through safe, guided aquatic activities.",
    points: ["🧸 Play-based learning", "👶 Parent support", "💙 Safe acclimatization"],
  },
  "Ladies Exclusive Program": {
    icon: Users,
    desc: "Dedicated women-only batches offering comfortable, focused training with personalized progression.",
    points: ["👩 Women-only batches", "🤝 Supportive environment", "🏊 Flexible pace"],
  },
  "Special Kids Aquatic Program": {
    icon: HeartHandshake,
    desc: "Adaptive aquatic sessions with personalized support that improve confidence, mobility, and comfort in water.",
    points: ["❤️ Adaptive coaching", "🫶 Sensory-friendly support", "📊 Progress guidance"],
  },
  "Senior Citizen Swimming": {
    icon: PersonStanding,
    desc: "Low-impact swimming and aquatic fitness routines designed for seniors with health-focused supervision.",
    points: ["🦴 Joint-friendly movement", "💓 Cardio wellness", "🧘 Relaxed pace"],
  },
  "Aqua Rehabilitation": {
    icon: HeartPulse,
    desc: "Therapeutic water-based recovery sessions that support post-injury rehabilitation and controlled mobility.",
    points: ["💪 Recovery support", "🌡️ Controlled intensity", "🩺 Guided sessions"],
  },
  "1-1 Personal Training": {
    icon: UserCheck2,
    desc: "One-on-one coaching designed around individual goals for faster corrections and measurable growth.",
    points: ["🎯 Goal-based plan", "🧠 Technique feedback", "🚀 Rapid improvement"],
  },
};

const benefits = [
  { label: "Expert coaching", icon: UserCheck2 },
  { label: "Safe environment", icon: ShieldCheck },
  { label: "Flexible timings", icon: Timer },
  { label: "Skill progression", icon: TrendingUp },
  { label: "Fitness & endurance", icon: Dumbbell },
  { label: "Certified trainers", icon: Trophy },
];

const landingGallery = [
  {
    src: "https://images.unsplash.com/photo-1622629798327-5f392ff35f56?auto=format&fit=crop&w=1800&q=80",
    alt: "Swim coach training lane movement",
  },
  {
    src: "https://images.unsplash.com/photo-1604442999455-7da6b6197d3d?auto=format&fit=crop&w=1800&q=80",
    alt: "Kids swim training session in pool",
  },
  {
    src: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1800&q=80",
    alt: "Competitive swimmer underwater motion",
  },
  {
    src: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=1800&q=80",
    alt: "Swimming instructor assisting student",
  },
];

const SwimmingAcademy = () => {
  const [active, setActive] = useState(0);
  const [failedIndices, setFailedIndices] = useState<number[]>([]);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const availableSlides = useMemo(
    () => heroSlides.filter((_, idx) => !failedIndices.includes(idx)),
    [failedIndices]
  );

  useEffect(() => {
    if (availableSlides.length <= 1) return;
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % availableSlides.length);
    }, 4000);
    return () => window.clearInterval(id);
  }, [availableSlides.length]);

  useEffect(() => {
    if (active >= availableSlides.length) setActive(0);
  }, [active, availableSlides.length]);

  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const onTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null || availableSlides.length <= 1) return;
    const delta = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(delta) < 40) return;
    setActive((prev) => (delta < 0 ? (prev + 1) % availableSlides.length : (prev - 1 + availableSlides.length) % availableSlides.length));
    setTouchStartX(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20">
        <section
          className="relative min-h-[74vh] md:min-h-[82vh] overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="absolute inset-0 bg-[#0B1D2A]" />

          {availableSlides.length > 0 ? (
            availableSlides.map((slide, idx) => (
              <img
                key={slide.src}
                src={slide.src}
                alt={slide.alt}
                loading={idx === 0 ? "eager" : "lazy"}
                onError={() =>
                  setFailedIndices((prev) => {
                    const originalIndex = heroSlides.findIndex((s) => s.src === slide.src);
                    return originalIndex === -1 ? prev : [...new Set([...prev, originalIndex])];
                  })
                }
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
                  idx === active ? "opacity-100 scale-[1.03]" : "opacity-0 scale-100"
                }`}
              />
            ))
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A192F] via-[#0B1D2A] to-[#07101A]" />
          )}

          <div className="absolute inset-0 bg-black/60" />

          <div className="relative container-main min-h-[74vh] md:min-h-[82vh] flex items-center justify-center text-center">
            <div className="max-w-3xl space-y-5">
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground">
                Swimming <span className="gradient-aqua-text">Academy</span>
              </h1>
              <p className="text-lg md:text-2xl text-foreground">Train. Transform. Triumph in Water.</p>
              <p className="text-sm md:text-base text-foreground/90 max-w-2xl mx-auto leading-relaxed">
                Expert-led aquatic training designed for all age groups, focusing on safety, confidence, and performance excellence.
              </p>

              {availableSlides.length > 1 && (
                <div className="flex justify-center gap-2 pt-1" aria-label="Hero image carousel indicators">
                  {availableSlides.map((_, idx) => (
                    <button
                      key={`slide-dot-${idx}`}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        idx === active ? "w-8 bg-primary" : "w-2.5 bg-foreground/50 hover:bg-foreground/70"
                      }`}
                      onClick={() => setActive(idx)}
                      aria-label={`Open slide ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-main mb-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {landingGallery.map((image) => (
                <div key={image.src} className="rounded-2xl overflow-hidden border border-border/60 bg-card">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full h-28 md:h-36 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="container-main">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-[2rem] font-heading font-bold">
                Our <span className="gradient-aqua-text">Programs</span>
              </h2>
            </div>

            <div className="space-y-4 md:space-y-5">
              {existingPrograms.map((title) => {
                const item = programMeta[title];
                return (
                  <article
                    key={title}
                    className="bg-card rounded-2xl border border-border/60 p-5 md:p-6 transition-all duration-300 ease-in-out hover:scale-[1.01] hover:border-primary/50 hover:shadow-[0_0_24px_hsl(192_82%_50%/0.2)]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <item.icon className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-xl md:text-2xl font-heading font-semibold text-foreground mb-2">{title}</h3>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">{item.desc}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                          {item.points.map((point) => (
                            <p key={point} className="text-xs md:text-sm text-foreground/90">
                              {point}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="pb-12">
          <div className="container-main">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-[2rem] font-heading font-bold">
                Program <span className="gradient-aqua-text">Benefits</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {benefits.map((item) => (
                <div
                  key={item.label}
                  className="bg-card border border-border/60 rounded-2xl p-4 md:p-5 flex items-center gap-3"
                  role="group"
                  aria-label={item.label}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <p className="text-sm md:text-base text-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SwimmingAcademy;
