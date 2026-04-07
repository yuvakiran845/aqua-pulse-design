import { useNavigate } from "react-router-dom";
import { Droplets, Trophy, Building2, ShieldCheck, Zap, Target, Star, Users, Briefcase } from "lucide-react";


const divisions = [
  {
    icon: Droplets,
    title: "Swimming Academy",
    description: "Expert aquatic coaching for all skill levels, focusing on confidence and elite technical development.",
    gradient: "from-primary to-accent",
    bgGlow: "bg-primary/20",
    borderColor: "border-primary/60",
    accentColor: "hsl(var(--primary))",
    hoverShadow: "hover:shadow-[0_0_50px_rgba(34,211,238,0.25)]",
    link: "/swimming-academy",
    features: [
      { label: "Elite Coaching", icon: Star },
      { label: "All Age Groups", icon: Users },
      { label: "Pro Safety", icon: ShieldCheck }
    ],
  },
  {
    icon: Trophy,
    title: "Hub Sports Arena",
    description: "A world-class multi-sport venue hosting elite tournaments and specialized professional training.",
    gradient: "from-amber-400 to-orange-500",
    bgGlow: "bg-amber-500/15",
    borderColor: "border-amber-500/30",
    accentColor: "#F59E0B",
    hoverShadow: "hover:shadow-[0_0_50px_rgba(245,158,11,0.25)]",
    link: "/hub-sports-arena",
    features: [
      { label: "Olympic Specs", icon: Building2 },
      { label: "Multi-Sport", icon: Target },
      { label: "Peak Performance", icon: Zap }
    ],
  },
  {
    icon: Building2,
    title: "Facility Management",
    description: "Professional management solutions prioritizing safety, hygiene, and operational excellence for premium venues.",
    gradient: "from-purple-400 to-violet-500",
    bgGlow: "bg-purple-500/15",
    borderColor: "border-purple-500/30",
    accentColor: "#A855F7",
    hoverShadow: "hover:shadow-[0_0_50px_rgba(168,85,247,0.25)]",
    link: "/facility-management",
    features: [
      { label: "Safety First", icon: ShieldCheck },
      { label: "Bespoke Ops", icon: Briefcase },
      { label: "Hygiene Pro", icon: Star }
    ],
  },
];

const DivisionsSection = () => {
  const navigate = useNavigate();

  return (
    <section id="divisions" className="section-padding relative overflow-hidden bg-[#03080F]">
      {/* Dynamic background highlights */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-40 mix-blend-screen" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none opacity-30 mix-blend-screen" />

      <div className="container-main relative">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-4">
             Explore Our Sectors
          </div>
          <h2 className="text-[clamp(2.5rem,6vw,3.5rem)] font-heading font-black mb-6 tracking-tight leading-none px-4">
            Our <span className="gradient-aqua-text">Core Divisions</span>
          </h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto text-sm md:text-lg font-medium leading-relaxed px-6">
            Three pillars of excellence driving our mission to create <br className="hidden md:block" /> world-class aquatic experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {divisions.map((d, i) => (
            <div
              key={d.title}
              className={`group relative rounded-[2rem] border ${d.borderColor} p-6 md:p-8 cursor-pointer overflow-hidden transition-all duration-700 hover:scale-[1.02] ${d.hoverShadow} bg-navy-mid/10 backdrop-blur-sm shadow-xl active:scale-[0.98] border-opacity-30 hover:border-opacity-100 flex flex-col items-start`}
              onClick={() => {
                if (d.link) navigate(d.link);
              }}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {/* Complex gradient background glow */}
              <div className={`absolute inset-0 ${d.bgGlow} opacity-0 group-hover:opacity-40 transition-opacity duration-700 ease-in-out`} />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-60 pointer-events-none" />
              
              {/* Premium Corner Glow */}
              <div className="pointer-events-none absolute -top-20 -right-20 w-48 h-48 rounded-full opacity-20 transition-all duration-700 group-hover:opacity-60 blur-3xl" style={{ backgroundColor: d.accentColor }} />

              {/* Content */}
              <div className="relative z-10 w-full h-full flex flex-col">
                {/* Modern Icon container with neon effects */}
                <div className="relative mb-6">
                  {/* Glow effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${d.gradient} blur-xl opacity-0 group-hover:opacity-40 transition-all duration-700`} />
                  
                  {/* The Box Layout */}
                  <div className={`relative w-[60px] h-[60px] rounded-2xl p-[2px] bg-gradient-to-br ${d.gradient} shadow-lg shadow-black/20`}>
                    <div className="w-full h-full rounded-[14px] bg-[#03080F] flex items-center justify-center">
                      <d.icon className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-500 stroke-[1.5]" />
                    </div>
                  </div>
                </div>

                <div className="flex-grow">
                  <h3 className="text-xl md:text-2xl font-heading font-black mb-3 text-white tracking-tight leading-tight transition-all duration-500 group-hover:translate-x-1">
                    {d.title}
                  </h3>
                  <p className="text-[#94A3B8] text-[14px] md:text-[15px] font-medium leading-relaxed mb-6 group-hover:text-slate-200 transition-all duration-500 pr-2">
                    {d.description}
                  </p>

                  {/* Feature badges with Icons */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {d.features.map((f) => (
                      <span
                        key={f.label}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 backdrop-blur-md text-[10px] md:text-[12px] text-slate-300 font-bold border border-white/5 group-hover:border-white/10 group-hover:bg-white/10 transition-all duration-500"
                      >
                        <f.icon className="w-3 h-3 opacity-70" />
                        {f.label}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-2 flex items-center gap-2 text-white font-black text-xs md:text-sm tracking-wide uppercase transition-all duration-500 group-hover:gap-4 group-hover:text-primary">
                   Explore More
                   <span className="text-lg leading-none">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DivisionsSection;
