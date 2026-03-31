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
    <section className="section-padding relative">
      <div className="container-main">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Why Choose <span className="gradient-aqua-text">Aqua Pulse</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Everything you need for a safe, effective, and world-class aquatic training experience.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="bg-card rounded-2xl p-6 border border-border/50 card-glow text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <b.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
