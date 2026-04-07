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
    <div className="min-h-screen bg-[#030712] text-foreground transition-all duration-500 overflow-hidden">
      <Navbar />

      {/* Professional Theme Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-50">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, #ffffff 1px, transparent 0)', backgroundSize: '48px 48px' }} />
      </div>

      <main className="relative z-10 pt-[125px] flex-col flex pb-0 md:pt-32 md:pb-0">
        {/* Intro & Features Section */}
        <section className="py-12 md:py-20 relative">
          <div className="container-main max-w-7xl mx-auto px-4">
            {/* Intro Header */}
            <div className="flex flex-col mb-16 text-center md:text-left">
              <div className="max-w-4xl space-y-6">
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  <span className="px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold tracking-[0.15em] uppercase backdrop-blur-md">
                    Facility Management
                  </span>
                  <span className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-[0.15em] uppercase backdrop-blur-md">
                    Professional Standards
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black tracking-tight leading-[0.95] text-white">
                  AQUA PULSE ATHLETE<br />
                  <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">DEVELOPMENT SYSTEM</span>
                </h1>
                
                <p className="text-xl md:text-2xl font-heading font-medium text-slate-400 mt-4 max-w-3xl leading-relaxed">
                  Redefining aquatic excellence through structured management and holistic athlete support.
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: ArrowUpRight, title: "Structured Progression", desc: "Clear milestones mapping from beginner confidence to competitive excellence.", color: "text-purple-400", bgIcon: "bg-purple-500/10 border-purple-500/20", glow: "hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]" },
                { icon: Dumbbell, title: "Precision Training", desc: "Specialized fitness routines to build core strength and endurance out of the water.", color: "text-blue-400", bgIcon: "bg-blue-500/10 border-blue-500/20", glow: "hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]" },
                { icon: Award, title: "Global Standards", desc: "Professional management following international safety and hygiene protocols.", color: "text-violet-400", bgIcon: "bg-violet-500/10 border-violet-500/20", glow: "hover:shadow-[0_0_40px_rgba(139,92,246,0.2)]" },
                { icon: ShieldCheck, title: "Hygiene Excellence", desc: "Stringent hygiene and professional supervision in a controlled environment.", color: "text-indigo-400", bgIcon: "bg-indigo-500/10 border-indigo-500/20", glow: "hover:shadow-[0_0_40px_rgba(99,102,241,0.2)]" },
              ].map((feature, idx) => (
                <div key={idx} className={`flex flex-col p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-2xl hover:bg-white/[0.05] hover:border-white/20 hover:-translate-y-2 ${feature.glow} transition-all duration-500 group`}>
                  <div className={`w-16 h-16 flex items-center justify-center rounded-2xl border ${feature.bgIcon} group-hover:scale-110 transition-transform duration-500 mb-8`}>
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <div>
                    <h3 className="font-heading font-black text-white text-2xl mb-3 tracking-tight">{feature.title}</h3>
                    <p className="text-slate-400 text-base leading-relaxed font-medium">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Student Progression & Certification */}
        <section className="py-20 md:py-32 relative bg-black/20">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
          <div className="container-main max-w-7xl mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-6 tracking-tight uppercase">
                GROWTH <span className="text-purple-400">& CERTIFICATION</span>
              </h2>
              <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full mb-6" />
              <p className="text-[#22D3EE] font-bold text-lg tracking-[0.2em] uppercase">Structured Multi-Tier Discipline</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Beginner */}
              <div className="group relative p-10 rounded-[3rem] bg-[#0F172A]/40 border border-cyan-500/20 overflow-hidden transition-all duration-500 hover:border-cyan-500/50 hover:bg-[#0F172A]/60 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-50 pointer-events-none group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center justify-between mb-8 relative z-10">
                  <h3 className="text-3xl font-heading font-black text-white tracking-tight">Beginner</h3>
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-black text-2xl border border-cyan-500/30">B</div>
                </div>
                <div className="mb-6 inline-block px-4 py-2 bg-cyan-500/10 text-cyan-400 text-xs font-bold rounded-xl border border-cyan-500/20 tracking-widest uppercase">Levels 1 – 3</div>
                <ul className="space-y-4 relative z-10">
                  {["Water Confidence", "Basic Technique", "Breath Control", "Foundation Strokes"].map(item => (
                    <li key={item} className="flex items-center gap-3 text-base text-slate-300 font-medium">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Intermediate */}
              <div className="group relative p-10 rounded-[3rem] bg-[#0F172A]/40 border border-purple-500/20 overflow-hidden transition-all duration-500 hover:border-purple-500/50 hover:bg-[#0F172A]/60 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-50 pointer-events-none group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center justify-between mb-8 relative z-10">
                  <h3 className="text-3xl font-heading font-black text-white tracking-tight">Intermediate</h3>
                  <div className="w-14 h-14 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-black text-2xl border border-purple-500/30">I</div>
                </div>
                <div className="mb-6 inline-block px-4 py-2 bg-purple-500/10 text-purple-400 text-xs font-bold rounded-xl border border-purple-500/20 tracking-widest uppercase">Level 4</div>
                <ul className="space-y-4 relative z-10">
                  {["Stroke Refinement", "Endurance Building", "Technical Precision", "Complex Drills"].map(item => (
                    <li key={item} className="flex items-center gap-3 text-base text-slate-300 font-medium">
                      <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.6)]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Advanced */}
              <div className="group relative p-10 rounded-[3rem] bg-[#0F172A]/40 border border-amber-500/20 overflow-hidden transition-all duration-500 hover:border-amber-500/50 hover:bg-[#0F172A]/60 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-50 pointer-events-none group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center justify-between mb-8 relative z-10">
                  <h3 className="text-3xl font-heading font-black text-white tracking-tight">Advanced</h3>
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-black text-2xl border border-amber-500/30">A</div>
                </div>
                <div className="mb-6 inline-block px-4 py-2 bg-amber-500/10 text-amber-400 text-xs font-bold rounded-xl border border-amber-500/20 tracking-widest uppercase">Levels 5 – 6</div>
                <ul className="space-y-4 relative z-10">
                  {["Elite Techniques", "Performance Coaching", "Competitive Readiness", "Master Classes"].map(item => (
                    <li key={item} className="flex items-center gap-3 text-base text-slate-300 font-medium">
                      <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.6)]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Athlete Support System */}
        <section className="py-24 md:py-32 relative">
          <div className="container-main max-w-7xl mx-auto px-4">
            <div className="text-center md:text-left mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-6 uppercase tracking-tight">
                Athlete <span className="text-purple-400">Support System</span>
              </h2>
              <div className="w-24 h-1 bg-white/10 md:mx-0 mx-auto mb-6" />
              <p className="text-lg text-slate-400 font-medium max-w-2xl">A holistic approach to development—supporting our athletes both in and out of the water.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {[
                { title: "Medical Support", desc: "Access to professional medical assessment and injury management.", icon: Stethoscope, color: "text-red-400", border: "border-red-500/30", bg: "from-red-500/10", shadow: "hover:shadow-[0_0_30px_rgba(248,113,113,0.2)]", glow: "group-hover:bg-red-500/20" },
                { title: "Physiotherapy", desc: "Expert physical therapy aiding recovery, flexibility, and muscle longevity.", icon: Activity, color: "text-cyan-400", border: "border-cyan-500/30", bg: "from-cyan-500/10", shadow: "hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]", glow: "group-hover:bg-cyan-500/20" },
                { title: "Nutrition", desc: "Personalized dietary plans optimizing energy levels and physical performance.", icon: Apple, color: "text-green-400", border: "border-green-500/30", bg: "from-green-500/10", shadow: "hover:shadow-[0_0_30px_rgba(74,222,128,0.2)]", glow: "group-hover:bg-green-500/20" },
                { title: "Counseling", desc: "Mental conditioning, stress management, and professional mentorship.", icon: Users, color: "text-purple-400", border: "border-purple-500/30", bg: "from-purple-500/10", shadow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]", glow: "group-hover:bg-purple-500/20" },
                { title: "Dry Land Training", desc: "Cross-training modules tailored for strength, conditioning, and flexibility.", icon: Dumbbell, color: "text-orange-400", border: "border-orange-500/30", bg: "from-orange-500/10", shadow: "hover:shadow-[0_0_30px_rgba(251,146,60,0.2)]", glow: "group-hover:bg-orange-500/20" },
              ].map((item, idx) => (
                <div key={idx} className={`relative p-8 rounded-[2rem] bg-white/[0.02] border border-white/10 backdrop-blur-md overflow-hidden ${item.shadow} hover:bg-white/[0.04] hover:-translate-y-2 transition-all duration-500 group`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.bg} to-transparent opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity`} />
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border border-white/10 bg-white/5 ${item.glow} transition-colors duration-500 mb-8 relative z-10`}>
                    <item.icon className={`w-8 h-8 ${item.color}`} />
                  </div>
                  <h3 className="text-xl font-heading font-black text-white mb-4 relative z-10 tracking-tight leading-tight">{item.title}</h3>
                  <p className="text-slate-400 text-base relative z-10 leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skill Certification Highlight */}
        <section className="px-4 py-20 md:py-32 mb-10">
          <div className="container-main max-w-7xl mx-auto px-4">
            <div className="relative p-12 md:p-20 rounded-[4rem] overflow-hidden border border-purple-500/30 shadow-[0_0_100px_rgba(168,85,247,0.15)] bg-white/[0.02] backdrop-blur-3xl group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/5 to-transparent pointer-events-none" />
              <div className="absolute top-1/2 -translate-y-1/2 right-20 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
              
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
                <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shrink-0 shadow-[0_20px_50px_rgba(168,85,247,0.3)] group-hover:scale-110 transition-transform duration-700">
                  <GraduationCap className="w-14 h-14 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-6 uppercase tracking-tight">
                    Professional <span className="text-purple-400">Skill Certification</span>
                  </h2>
                  <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-medium">
                    Our excellence is recognized globally. Students receive **Aqua Pulse Swimming Skill Certificates** that map directly to international competitive standards.
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
