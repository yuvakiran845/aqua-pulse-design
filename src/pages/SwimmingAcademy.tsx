import { useEffect, useMemo, useState, type TouchEvent } from "react";
import {
  Dumbbell,
  ShieldCheck,
  Timer,
  TrendingUp,
  UserCheck2,
  Trophy,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const heroSlides = [
  {
    src: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=2400&q=80",
    alt: "Swimmer in competitive pool lane with clear blue water",
  },
  {
    src: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&w=2400&q=80",
    alt: "Olympic swimming pool with lane dividers",
  },
  {
    src: "https://images.unsplash.com/photo-1560090995-01632a28895b?auto=format&fit=crop&w=2400&q=80",
    alt: "Swimming training session in indoor pool",
  },
  {
    src: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?auto=format&fit=crop&w=2400&q=80",
    alt: "Competitive swimmer doing butterfly stroke",
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
  { emoji: string; color: string; desc: string; points: string[] }
> = {
  "Summer Camp": {
    emoji: "☀️",
    color: "from-amber-500/20 to-orange-500/10 border-amber-500/30",
    desc: "Seasonal aquatic training for children and beginners focused on confidence, breathing, and water safety.",
    points: ["🌊 Water confidence", "🫁 Breath control", "🛟 Water safety"],
  },
  "Beginners Program": {
    emoji: "🏊",
    color: "from-cyan-500/20 to-blue-500/10 border-cyan-500/30",
    desc: "First-step coaching that builds water comfort, basic movement control, and strong swimming foundations.",
    points: ["💧 Pool entry basics", "🤽 Floating skills", "🧭 Guided progression"],
  },
  "Intermediate Program": {
    emoji: "⚡",
    color: "from-yellow-500/20 to-lime-500/10 border-yellow-500/30",
    desc: "Skill-up training for swimmers improving stroke technique, endurance, and overall aquatic efficiency.",
    points: ["🔄 Stroke refinement", "⏱️ Endurance building", "🎯 Turn technique"],
  },
  "Advanced Program": {
    emoji: "🏆",
    color: "from-purple-500/20 to-violet-500/10 border-purple-500/30",
    desc: "Performance-focused sessions tailored for swimmers preparing for higher-level competitive milestones.",
    points: ["🏁 Race strategy", "📈 Performance tracking", "🥇 Competitive readiness"],
  },
  "Aqua Sprouts (Toddlers)": {
    emoji: "👶",
    color: "from-pink-500/20 to-rose-500/10 border-pink-500/30",
    desc: "Gentle toddler sessions that nurture early water confidence through safe, guided aquatic activities.",
    points: ["🧸 Play-based learning", "🤗 Parent support", "💙 Safe acclimatization"],
  },
  "Ladies Exclusive Program": {
    emoji: "👩",
    color: "from-fuchsia-500/20 to-pink-500/10 border-fuchsia-500/30",
    desc: "Dedicated women-only batches offering comfortable, focused training with personalized progression.",
    points: ["🚺 Women-only batches", "🤝 Supportive environment", "🏊 Flexible pace"],
  },
  "Special Kids Aquatic Program": {
    emoji: "❤️",
    color: "from-red-500/20 to-orange-500/10 border-red-500/30",
    desc: "Adaptive aquatic sessions with personalized support that improve confidence, mobility, and comfort in water.",
    points: ["🫶 Adaptive coaching", "🌈 Sensory-friendly", "📊 Progress guidance"],
  },
  "Senior Citizen Swimming": {
    emoji: "🧘",
    color: "from-teal-500/20 to-emerald-500/10 border-teal-500/30",
    desc: "Low-impact swimming and aquatic fitness routines designed for seniors with health-focused supervision.",
    points: ["🦴 Joint-friendly", "💓 Cardio wellness", "😌 Relaxed pace"],
  },
  "Aqua Rehabilitation": {
    emoji: "🩺",
    color: "from-green-500/20 to-cyan-500/10 border-green-500/30",
    desc: "Therapeutic water-based recovery sessions that support post-injury rehabilitation and controlled mobility.",
    points: ["💪 Recovery support", "🌡️ Controlled intensity", "🩹 Guided sessions"],
  },
  "1-1 Personal Training": {
    emoji: "🎯",
    color: "from-blue-500/20 to-indigo-500/10 border-blue-500/30",
    desc: "One-on-one coaching designed around individual goals for faster corrections and measurable growth.",
    points: ["📋 Goal-based plan", "🧠 Technique feedback", "🚀 Rapid improvement"],
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
          <div className="container-main">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                Our <span className="gradient-aqua-text">Programs</span>
              </h2>
              <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
                Expert-designed programs for every swimmer — from toddlers to competitive athletes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              {existingPrograms.map((title) => {
                const item = programMeta[title];
                return (
                  <article
                    key={title}
                    className={`relative bg-gradient-to-br ${item.color} rounded-2xl border p-5 md:p-6 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_32px_hsl(192_82%_50%/0.25)] overflow-hidden`}
                  >
                    {/* decorative blur blob */}
                    <div className="pointer-events-none absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/5 blur-2xl" />
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-black/20 backdrop-blur-sm flex items-center justify-center shrink-0 text-3xl shadow-inner">
                        {item.emoji}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg md:text-xl font-heading font-bold text-foreground mb-1">{title}</h3>
                        <p className="text-xs md:text-sm text-foreground/70 leading-relaxed mb-4">{item.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.points.map((point) => (
                            <span
                              key={point}
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/25 backdrop-blur-sm text-[11px] md:text-xs text-foreground/90 font-medium border border-white/10"
                            >
                              {point}
                            </span>
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
