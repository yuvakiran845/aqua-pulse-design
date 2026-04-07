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
    <section className="section-padding relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container-main relative">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 tracking-tight">
            Medical <span className="gradient-aqua-text">Support Team</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">Expert medical supervision ensuring elite performance with maximum safety.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">
          {/* Doctor image */}
          <div className="flex justify-center order-2 md:order-1">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative w-[300px] h-[400px] md:w-[340px] md:h-[460px] lg:w-[380px] lg:h-[520px] rounded-3xl overflow-hidden border-4 border-primary/30 shadow-[0_0_50px_rgba(34,211,238,0.2)] group-hover:border-primary/60 transition-all duration-500">
                <img src={doctorImg} alt="Dr. Kumar Chandra" loading="lazy" className="w-full h-full object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs sm:text-sm font-bold px-6 py-2 rounded-full shadow-lg border border-primary/50 whitespace-nowrap">
                15+ YEARS OF EXPERTISE
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6 md:space-y-8 order-1 md:order-2">
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-white mb-2 tracking-tight">
                Dr. Kumar Chandra
              </h3>
              <p className="text-primary font-bold text-base sm:text-lg lg:text-xl uppercase tracking-widest">
                Physical Therapist & Sports Specialist
              </p>
            </div>
            
            <p className="text-slate-400 text-[15px] sm:text-base lg:text-lg leading-relaxed font-medium">
              Board-certified sports medicine specialist and elite consultant for high-performance athletes. With over 15 years of clinical depth in aquatic rehabilitation, Dr. Kumar ensures every member of Aqua Pulse trains within safe physiological bounds while achieving peak physical condition.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
              {services.map((s) => (
                <div key={s.label} className="flex items-center gap-4 bg-white/5 border border-white/5 backdrop-blur-sm rounded-xl px-5 py-4 transition-all duration-300 hover:border-primary/20 hover:bg-white/10 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                    <s.icon className="w-5 h-5 text-primary group-hover:text-black transition-colors" strokeWidth={2} />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-slate-200 group-hover:text-white transition-colors">{s.label}</span>
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
