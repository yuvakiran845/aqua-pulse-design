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
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Why Choose <span className="gradient-aqua-text">Aqua Pulse</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Everything you need for a safe, effective, and world-class aquatic training experience.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-3">
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
      </div>
    </section>
  );
};

export default BenefitsSection;
