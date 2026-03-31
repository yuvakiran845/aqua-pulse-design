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

        {/* Mobile / small screens: compact list */}
        <div className="max-w-2xl mx-auto space-y-3 md:hidden">
          {benefits.map((b) => (
            <div key={b.title} className="flex items-start gap-3">
              <b.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <p className="text-sm text-foreground">
                <span className="font-semibold">{b.title}</span>
                <span className="text-muted-foreground"> – {b.desc}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Tablet / desktop: card-based grid layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="card-glow rounded-xl border border-border/60 bg-gradient-to-b from-navy-mid/60 to-navy-light/40 p-5 lg:p-6 flex flex-col gap-3"
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <b.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base lg:text-lg font-semibold text-foreground">
                  {b.title}
                </h3>
              </div>
              <p className="text-sm lg:text-base text-muted-foreground">
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
