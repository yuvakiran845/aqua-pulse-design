import { Button } from "@/components/ui/button";
import { BadgeCheck, Medal, Activity, Shield } from "lucide-react";
import founderImg from "@/assets/founder-real.png";

const services = [
  { icon: BadgeCheck, label: "Certified Aquatic Facility Operator" },
  { icon: Medal, label: "15+ Years Sports Management" },
  { icon: Activity, label: "Former Competitive Swimmer" },
  { icon: Shield, label: "Water Safety Advocate" },
];

const FounderSection = () => {
  return (
    <section id="founder" className="section-padding relative">
      <div className="w-full px-6 md:px-10 lg:px-16 xl:px-24">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-[2rem] font-heading font-bold mb-4">
            Meet the <span className="gradient-aqua-text">Founder</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Founder image */}
          <div className="flex flex-col items-center gap-6">
            <div className="relative">
              <div className="w-[320px] h-[320px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden border-4 border-primary/30 shadow-[0_0_30px_rgba(34,211,238,0.15)]">
                <img src={founderImg} alt="Mr. Venkata Ramana" className="w-full h-full object-cover object-top" />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full whitespace-nowrap">
                Visionary Leader in Aquatic Sports
              </div>
            </div>
            
            <Button variant="aqua" size="lg" className="w-[280px] md:w-[320px] lg:w-[340px] text-lg py-4 font-semibold tracking-wide" asChild>
              <a href="/founder#founder-page-section">Founder Details</a>
            </Button>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-heading font-bold text-foreground">Mr. Venkata Ramana</h3>
              <p className="text-primary font-medium mt-1">Founder & Managing Director</p>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              "Our vision is to create a world-class aquatic ecosystem where safety, performance, and passion converge to shape the next generation of swimmers."
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((s) => (
                <div key={s.label} className="flex items-center gap-3 bg-secondary/50 rounded-xl px-4 py-3">
                  <s.icon className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm text-foreground">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
