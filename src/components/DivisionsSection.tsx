import { Button } from "@/components/ui/button";

const divisions = [
  {
    emoji: "🏊",
    title: "Swimming Academy",
    description: "Expert coaching for all ages and skill levels. From beginners to competitive swimmers, our programs develop confidence and technique in the water.",
    gradient: "from-cyan-500 to-blue-600",
    bgGlow: "bg-cyan-500/20",
    borderColor: "border-cyan-500/40",
    hoverShadow: "hover:shadow-[0_0_40px_hsl(192_82%_50%/0.35)]",
    link: "/swimming-academy",
    features: ["🎓 Certified Coaches", "🏅 All Levels", "💧 Safe Environment"],
  },
  {
    emoji: "🏆",
    title: "Hub Sports Arena",
    description: "State-of-the-art multi-sport facility hosting tournaments and training sessions. Experience world-class infrastructure for peak performance.",
    gradient: "from-amber-500 to-orange-600",
    bgGlow: "bg-amber-500/20",
    borderColor: "border-amber-500/40",
    hoverShadow: "hover:shadow-[0_0_40px_hsl(38_92%_50%/0.35)]",
    link: "/hub-sports-arena",
    features: ["🏟️ World-class Facility", "🎯 Multi-sport", "⚡ Peak Performance"],
  },
  {
    emoji: "🏢",
    title: "Facility Management",
    description: "Professional management of aquatic and sports facilities. We ensure safety, hygiene, and operational excellence at every touchpoint.",
    gradient: "from-purple-500 to-violet-600",
    bgGlow: "bg-purple-500/20",
    borderColor: "border-purple-500/40",
    hoverShadow: "hover:shadow-[0_0_40px_hsl(270_70%_50%/0.35)]",
    link: "/facility-management",
    features: ["🛡️ Safety First", "✨ Hygiene Standards", "⚙️ Operations"],
  },
];

const DivisionsSection = () => {
  return (
    <section id="divisions" className="section-padding relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container-main relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Our <span className="gradient-aqua-text">Core Divisions</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
            Three pillars of excellence driving our mission to create world-class aquatic experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {divisions.map((d, i) => (
            <div
              key={d.title}
              className={`group relative rounded-2xl border ${d.borderColor} p-6 md:p-8 cursor-pointer overflow-hidden transition-all duration-500 hover:scale-[1.03] ${d.hoverShadow} hover:border-opacity-80`}
              onClick={() => {
                if (d.link) window.location.href = d.link;
              }}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {/* Gradient background glow */}
              <div className={`absolute inset-0 ${d.bgGlow} opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />
              <div className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/5 blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <div className="pointer-events-none absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-white/3 blur-xl group-hover:scale-125 transition-transform duration-700" />

              {/* Content */}
              <div className="relative z-10">
                {/* Emoji icon with animated gradient ring */}
                <div className="relative w-16 h-16 mb-6">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${d.gradient} opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500`} />
                  <div className="relative w-full h-full rounded-2xl bg-black/30 backdrop-blur-sm flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform duration-500">
                    {d.emoji}
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-heading font-bold mb-3 text-foreground group-hover:text-white transition-colors duration-300">{d.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 group-hover:text-foreground/80 transition-colors duration-300">{d.description}</p>

                {/* Feature badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {d.features.map((f) => (
                    <span
                      key={f}
                      className="inline-flex items-center px-2.5 py-1 rounded-full bg-black/25 backdrop-blur-sm text-[11px] md:text-xs text-foreground/90 font-medium border border-white/10 group-hover:border-white/20 transition-colors duration-300"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {d.link ? (
                  <Button variant="ghost" className="hover:bg-transparent text-primary hover:text-accent p-0 h-auto font-semibold text-sm group-hover:translate-x-1 transition-transform duration-300" asChild>
                    <a href={d.link}>Explore More →</a>
                  </Button>
                ) : (
                  <Button variant="ghost" className="hover:bg-transparent text-primary hover:text-accent p-0 h-auto font-semibold text-sm group-hover:translate-x-1 transition-transform duration-300">
                    Explore More →
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DivisionsSection;
