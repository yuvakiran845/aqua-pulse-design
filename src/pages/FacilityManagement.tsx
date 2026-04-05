import { useEffect } from "react";
import { 
  ShieldCheck, Dumbbell, Award, GraduationCap, 
  Stethoscope, Activity, Apple, Users, ArrowUpRight 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FacilityManagement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-24 lg:pt-32">
        {/* Intro & Features Section */}
        <section className="section-padding relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="container-main relative">
            {/* Intro Header */}
            <div className="text-center lg:text-left mb-12 md:mb-16">
              <div className="max-w-4xl space-y-6">
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                  <span className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] sm:text-xs font-black tracking-widest uppercase">
                    ACADEMY SYSTEM
                  </span>
                  <span className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] sm:text-xs font-black tracking-widest uppercase">
                    ATHLETE DEVELOPMENT
                  </span>
                </div>

                <h1 className="text-[clamp(2.25rem,6vw,3.5rem)] font-heading font-black leading-[1.1] tracking-tight">
                  AQUA PULSE ATHLETE<br />
                  <span className="gradient-aqua-text">DEVELOPMENT SYSTEM</span>
                </h1>
                
                <p className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-white/90 max-w-2xl">
                  More than just swimming — a complete athlete development journey
                </p>
                <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-transparent rounded-full mx-auto lg:mx-0" />
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                { icon: ArrowUpRight, title: "Structured Pathway", desc: "Clear milestones mapping from beginner confidence to competitive excellence.", color: "text-cyan-400", bg: "bg-cyan-500/10 border-cyan-500/20", glow: "hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]" },
                { icon: Dumbbell, title: "Dry Land Workouts", desc: "Specialized fitness routines to build core strength and endurance out of the water.", color: "text-orange-400", bg: "bg-orange-500/10 border-orange-500/20", glow: "hover:shadow-[0_0_30px_rgba(251,146,60,0.15)]" },
                { icon: Award, title: "Skill Certification", desc: "Recognized certificates rewarding skill mastery at every level of development.", color: "text-purple-400", bg: "bg-purple-500/10 border-purple-500/20", glow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]" },
                { icon: ShieldCheck, title: "Safety Protocol", desc: "Stringent hygiene and professional supervision in a controlled environment.", color: "text-green-400", bg: "bg-green-500/10 border-green-500/20", glow: "hover:shadow-[0_0_30px_rgba(74,222,128,0.15)]" },
              ].map((feature, idx) => (
                <div key={idx} className={`flex flex-col p-8 rounded-[2rem] bg-card/40 backdrop-blur-md border border-white/5 shadow-2xl hover:bg-white/[0.05] hover:border-white/10 hover:-translate-y-2 ${feature.glow} transition-all duration-500 group relative overflow-hidden`}>
                   <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
                   <div className={`relative z-10 w-16 h-16 flex items-center justify-center rounded-2xl border ${feature.bg} group-hover:scale-110 transition-transform duration-500 mb-6 shadow-inner`}>
                    <feature.icon className={`w-8 h-8 ${feature.color}`} strokeWidth={1.5} />
                  </div>
                  <div className="relative z-10 space-y-3">
                    <h3 className="font-heading font-black text-white text-xl sm:text-2xl tracking-tight leading-none group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-slate-400 text-sm font-medium leading-relaxed group-hover:text-slate-200 transition-colors">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Student Progression & Certification */}
        <section className="section-padding relative">
          <div className="container-main">
            <div className="text-center lg:text-left mb-12 md:mb-16">
              <h2 className="text-[clamp(1.75rem,5vw,2.5rem)] font-heading font-black mb-4">
                <span className="gradient-aqua-text uppercase">STUDENT PROGRESSION SYSTEM</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base font-medium max-w-2xl">A structured, multi-tier program tracking growth across essential swimming disciplines.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Beginner */}
              <div className="relative p-8 rounded-[2.5rem] bg-card/60 backdrop-blur-xl border border-cyan-500/20 overflow-hidden group hover:shadow-[0_0_40px_rgba(34,211,238,0.1)] transition-all duration-500 hover:border-cyan-500/40">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent pointer-events-none group-hover:scale-110 transition-transform duration-700" />
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <h3 className="text-2xl sm:text-3xl font-heading font-black text-white tracking-tight">Beginner</h3>
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-black text-2xl border border-cyan-500/30 shadow-inner group-hover:rotate-12 transition-transform">B</div>
                </div>
                <div className="mb-6 inline-block px-4 py-1.5 bg-cyan-500/10 text-cyan-400 text-[10px] font-black tracking-widest uppercase rounded-full border border-cyan-500/20">Levels 1 – 3</div>
                <ul className="space-y-4 relative z-10">
                  {["Water Confidence", "Beginner Skills", "Stroke Development"].map(item => (
                    <li key={item} className="flex items-center gap-3 text-sm sm:text-base font-bold text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Intermediate */}
              <div className="relative p-8 rounded-[2.5rem] bg-card/60 backdrop-blur-xl border border-purple-500/20 overflow-hidden group hover:shadow-[0_0_40px_rgba(168,85,247,0.1)] transition-all duration-500 hover:border-purple-500/40">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent pointer-events-none group-hover:scale-110 transition-transform duration-700" />
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <h3 className="text-2xl sm:text-3xl font-heading font-black text-white tracking-tight">Intermediate</h3>
                  <div className="w-14 h-14 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-black text-2xl border border-purple-500/30 shadow-inner group-hover:rotate-12 transition-transform">I</div>
                </div>
                <div className="mb-6 inline-block px-4 py-1.5 bg-purple-500/10 text-purple-400 text-[10px] font-black tracking-widest uppercase rounded-full border border-purple-500/20">Level 4</div>
                <ul className="space-y-4 relative z-10">
                  {["Advanced Stroke Mastery", "Endurance Building", "Breathing Technique"].map(item => (
                    <li key={item} className="flex items-center gap-3 text-sm sm:text-base font-bold text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Advanced */}
              <div className="relative p-8 rounded-[2.5rem] bg-card/60 backdrop-blur-xl border border-amber-500/20 overflow-hidden group hover:shadow-[0_0_40px_rgba(245,158,11,0.1)] transition-all duration-500 hover:border-amber-500/40">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent pointer-events-none group-hover:scale-110 transition-transform duration-700" />
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <h3 className="text-2xl sm:text-3xl font-heading font-black text-white tracking-tight">Advanced</h3>
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-black text-2xl border border-amber-500/30 shadow-inner group-hover:rotate-12 transition-transform">A</div>
                </div>
                <div className="mb-6 inline-block px-4 py-1.5 bg-amber-500/10 text-amber-400 text-[10px] font-black tracking-widest uppercase rounded-full border border-amber-500/20">Levels 5 – 6</div>
                <ul className="space-y-4 relative z-10">
                  {["Performance Coaching", "Competitive Readiness", "Speed Optimization"].map(item => (
                    <li key={item} className="flex items-center gap-3 text-sm sm:text-base font-bold text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Athlete Support System */}
        <section className="section-padding relative">
          <div className="container-main">
            <div className="text-center lg:text-left mb-12">
              <h2 className="text-[clamp(1.75rem,5vw,2.5rem)] font-heading font-black mb-3">
                <span className="gradient-aqua-text uppercase">ATHLETE SUPPORT SYSTEM</span>
              </h2>
              <p className="text-lg text-white font-bold tracking-tight">Complete support beyond the pool — nurturing the whole athlete</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {[
                { title: "Medical Support", desc: "Access to professional medical assessment and injury management.", icon: Stethoscope, color: "text-red-400", border: "border-red-500/30", bg: "from-red-500/10", shadow: "hover:shadow-[0_0_20px_rgba(248,113,113,0.15)]", glow: "group-hover:bg-red-500/20" },
                { title: "Physiotherapy", desc: "Expert physical therapy aiding recovery, flexibility, and muscle longevity.", icon: Activity, color: "text-cyan-400", border: "border-cyan-500/30", bg: "from-cyan-500/10", shadow: "hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]", glow: "group-hover:bg-cyan-500/20" },
                { title: "Nutrition", desc: "Personalized dietary plans optimizing energy levels and physical performance.", icon: Apple, color: "text-green-400", border: "border-green-500/30", bg: "from-green-500/10", shadow: "hover:shadow-[0_0_20px_rgba(74,222,128,0.15)]", glow: "group-hover:bg-green-500/20" },
                { title: "Counseling", desc: "Mental conditioning, stress management, and mentorship programs.", icon: Users, color: "text-purple-400", border: "border-purple-500/30", bg: "from-purple-500/10", shadow: "hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]", glow: "group-hover:bg-purple-500/20" },
                { title: "Dry Land", desc: "Cross-training modules tailored for strength, conditioning, and flexibility.", icon: Dumbbell, color: "text-orange-400", border: "border-orange-500/30", bg: "from-orange-500/10", shadow: "hover:shadow-[0_0_20px_rgba(251,146,60,0.15)]", glow: "group-hover:bg-orange-500/20" },
              ].map((item, idx) => (
                <div key={idx} className={`relative p-6 rounded-3xl bg-card/40 backdrop-blur-md border ${item.border} overflow-hidden ${item.shadow} hover:-translate-y-2 transition-all duration-500 group`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.bg} to-transparent opacity-30 pointer-events-none group-hover:scale-110 transition-transform duration-700`} />
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border border-white/5 bg-white/5 ${item.glow} transition-all duration-500 mb-6 relative z-10 shadow-inner`}>
                    <item.icon className={`w-7 h-7 ${item.color}`} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-heading font-black text-white mb-2 relative z-10 tracking-tight leading-none">{item.title}</h3>
                  <p className="text-slate-400 text-xs font-medium relative z-10 leading-relaxed group-hover:text-slate-200 transition-colors">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skill Certification Highlight */}
        <section className="px-4 py-12 md:py-16 mb-12">
          <div className="container-main">
            <div className="relative p-10 md:p-14 rounded-[3rem] overflow-hidden border border-primary/20 shadow-[0_0_80px_rgba(34,211,238,0.15)] bg-card/8 backdrop-blur-xl group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-1/2 -translate-y-1/2 right-[10%] w-[400px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
              
              <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-[2rem] bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0 shadow-2xl group-hover:scale-110 transition-transform duration-700 group-hover:rotate-6">
                  <GraduationCap className="w-12 h-12 sm:w-14 sm:h-14 text-primary-foreground" strokeWidth={1.5} />
                </div>
                <div className="text-center lg:text-left space-y-4">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tighter uppercase leading-none">
                    SKILL CERTIFICATION
                  </h2>
                  <p className="text-lg sm:text-xl lg:text-2xl text-slate-400 leading-relaxed font-bold tracking-tight">
                    Students receive Aqua Pulse <span className="text-primary tracking-wide">SWIMMING SKILL CERTIFICATES</span> after mastery of each level requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default FacilityManagement;
