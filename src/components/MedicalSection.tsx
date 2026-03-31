import { ShieldCheck, HeartPulse, Activity, Stethoscope } from "lucide-react";
import doctorImg from "@/assets/doctor.jpg";

const services = [
  { icon: ShieldCheck, label: "Injury Prevention" },
  { icon: HeartPulse, label: "Health Monitoring" },
  { icon: Stethoscope, label: "Physiotherapy Support" },
  { icon: Activity, label: "Recovery Guidance" },
];

const MedicalSection = () => {
  return (
    <section className="section-padding relative">
      <div className="w-full px-6 md:px-10 lg:px-16 xl:px-24">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-[2rem] font-heading font-bold mb-4">
            Medical <span className="gradient-aqua-text">Support Team</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Doctor image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-[320px] h-[320px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden border-4 border-primary/30 shadow-[0_0_30px_rgba(34,211,238,0.15)]">
                <img src={doctorImg} alt="Dr. Kumar Chandra Reddy" className="w-full h-full object-cover object-top" />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full">
                15+ Years Experience
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-heading font-bold text-foreground">Dr. Kumar Chandra Reddy D</h3>
              <p className="text-primary font-medium mt-1">Physical Therapist & Sports Specialist</p>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Board-certified sports medicine specialist with extensive experience in athlete rehabilitation,
              injury prevention, and performance optimization. Ensuring every swimmer trains safely and recovers efficiently.
            </p>
            <div className="grid grid-cols-2 gap-4">
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

export default MedicalSection;
