import { ShieldCheck, Apple, Eye, GraduationCap, HeartPulse, BarChart3 } from "lucide-react";

const benefits = [
  { icon: ShieldCheck, title: "Medical Support", desc: "On-site medical team for all training sessions." },
  { icon: Apple, title: "Nutrition Guidance", desc: "Customized diet plans for optimal performance." },
  { icon: Eye, title: "Safety Monitoring", desc: "24/7 surveillance and trained lifeguards on duty." },
  { icon: GraduationCap, title: "Professional Coaching", desc: "Certified coaches with international experience." },
  { icon: HeartPulse, title: "Injury Prevention", desc: "Proactive assessments and warm-up protocols." },
  { icon: BarChart3, title: "Performance Tracking", desc: "Data-driven insights to track your progress." },
];

const BenefitsSection = () => {
  return (
    <section className="py-12 md:py-16 relative">
      <div className="container-main">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-[2rem] font-heading font-bold mb-4">
            Why Choose <span className="gradient-aqua-text">Aqua Pulse</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Everything you need for a safe, effective, and world-class aquatic training experience.
          </p>
        </div>

        {/* All screens: card-based grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group relative rounded-[2rem] border border-white/5 bg-[#0F172A]/30 backdrop-blur-md p-8 lg:p-10 flex flex-col gap-6 hover:scale-[1.03] hover:border-primary/20 hover:bg-[#0F172A]/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.1)] transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex items-center gap-5">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-transparent text-primary border border-primary/10 group-hover:scale-110 group-hover:border-primary/30 group-hover:bg-primary/20 transition-all duration-500 shadow-inner">
                  <b.icon className="w-7 h-7 stroke-[1.5]" />
                </div>
                <h3 className="text-lg lg:text-xl font-heading font-black text-white tracking-tight leading-tight">
                  {b.title}
                </h3>
              </div>
              <p className="relative z-10 text-[15px] lg:text-[16px] text-[#94A3B8] font-medium leading-relaxed group-hover:text-slate-200 transition-colors duration-500">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
