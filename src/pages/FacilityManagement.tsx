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
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-[125px] flex-col flex pb-0 md:pt-28 md:pb-0">
        {/* Intro & Features Section */}
        <section className="section-padding relative">
          <div className="container-main">
            {/* Intro Header */}
            <div className="flex flex-col mb-10">
              <div className="max-w-3xl space-y-5">
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider font-heading">
                    OUR SYSTEM
                  </span>
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider font-heading">
                    PROFESSIONAL DEVELOPMENT
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-[2.5rem] font-heading font-bold leading-tight">
                  AQUA PULSE ATHLETE<br />
                  <span className="gradient-aqua-text">DEVELOPMENT SYSTEM</span>
                </h1>
                
                <p className="text-lg md:text-xl font-heading font-medium text-foreground/85 mt-2">
                  More than just swimming — a complete athlete development journey
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: ArrowUpRight, title: "Structured Progression Pathway", desc: "Clear milestones mapping from beginner confidence to competitive excellence.", color: "text-cyan-400", bgIcon: "bg-cyan-500/10 border-cyan-500/20", glow: "hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]" },
                { icon: Dumbbell, title: "Dry Land Workouts", desc: "Specialized fitness routines to build core strength and endurance out of the water.", color: "text-orange-400", bgIcon: "bg-orange-500/10 border-orange-500/20", glow: "hover:shadow-[0_0_30px_rgba(251,146,60,0.15)]" },
                { icon: Award, title: "Skill Certification", desc: "Recognized certificates rewarding skill mastery at every level of development.", color: "text-purple-400", bgIcon: "bg-purple-500/10 border-purple-500/20", glow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]" },
                { icon: ShieldCheck, title: "Safety First", desc: "Stringent hygiene and professional supervision in a controlled environment.", color: "text-green-400", bgIcon: "bg-green-500/10 border-green-500/20", glow: "hover:shadow-[0_0_30px_rgba(74,222,128,0.15)]" },
              ].map((feature, idx) => (
                <div key={idx} className={`flex flex-col p-6 rounded-2xl bg-card border border-white/5 shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:bg-white/[0.03] hover:border-white/10 hover:-translate-y-2 ${feature.glow} transition-all duration-300 group`}>
                  <div className={`w-14 h-14 flex items-center justify-center rounded-xl border ${feature.bgIcon} group-hover:scale-110 transition-transform mb-5`}>
                    <feature.icon className={`w-7 h-7 ${feature.color}`} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground text-xl mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}


            </div>
          </div>
        </section>

        {/* Student Progression & Certification */}
        <section className="section-padding relative">
          <div className="container-main">
            <div className="text-center md:text-left mb-10">
              <h2 className="text-3xl md:text-[2rem] font-heading font-bold">
                <span className="gradient-aqua-text">STUDENT PROGRESSION & CERTIFICATION</span>
              </h2>
              <p className="text-muted-foreground mt-2 max-w-2xl">A structured, multi-tier program tracking growth across essential swimming disciplines.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Beginner */}
              <div className="relative p-6 rounded-2xl bg-card border border-cyan-500/30 overflow-hidden hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent pointer-events-none" />
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <h3 className="text-2xl font-heading font-bold text-foreground">Beginner Level</h3>
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-lg border border-cyan-500/30">B</div>
                </div>
                <div className="mb-4 inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-semibold rounded-md border border-cyan-500/20">Levels 1 – 3</div>
                <ul className="space-y-3 relative z-10">
                  {["Water Confidence", "Beginner Skills", "Stroke Development"].map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="text-cyan-400 mt-0.5">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Intermediate */}
              <div className="relative p-6 rounded-2xl bg-card border border-purple-500/30 overflow-hidden hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent pointer-events-none" />
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <h3 className="text-2xl font-heading font-bold text-foreground">Intermediate Level</h3>
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-lg border border-purple-500/30">I</div>
                </div>
                <div className="mb-4 inline-block px-3 py-1 bg-purple-500/10 text-purple-400 text-xs font-semibold rounded-md border border-purple-500/20">Level 4</div>
                <ul className="space-y-3 relative z-10">
                  {["Stroke Improvement"].map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="text-purple-400 mt-0.5">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Advanced */}
              <div className="relative p-6 rounded-2xl bg-card border border-amber-500/30 overflow-hidden hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent pointer-events-none" />
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <h3 className="text-2xl font-heading font-bold text-foreground">Advanced Level</h3>
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-lg border border-amber-500/30">A</div>
                </div>
                <div className="mb-4 inline-block px-3 py-1 bg-amber-500/10 text-amber-400 text-xs font-semibold rounded-md border border-amber-500/20">Levels 5 – 6</div>
                <ul className="space-y-3 relative z-10">
                  {["Advanced Techniques", "Competitive Development"].map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="text-amber-400 mt-0.5">•</span> {item}
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
            <div className="text-center md:text-left mb-10">
              <h2 className="text-3xl md:text-[2rem] font-heading font-bold mb-3 flex items-center justify-center md:justify-start gap-2">
                <span className="gradient-aqua-text uppercase">Athlete Support System</span>
              </h2>
              <p className="text-lg text-foreground/90 font-medium">Complete support beyond the pool — we care about the whole athlete</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {[
                { title: "Medical Support", desc: "Access to professional medical assessment and injury management.", icon: Stethoscope, color: "text-red-400", border: "border-red-500/30", bg: "from-red-500/10", shadow: "hover:shadow-[0_0_20px_rgba(248,113,113,0.15)]", glow: "group-hover:bg-red-500/20" },
                { title: "Physiotherapy Support", desc: "Expert physical therapy aiding recovery, flexibility, and muscle longevity.", icon: Activity, color: "text-cyan-400", border: "border-cyan-500/30", bg: "from-cyan-500/10", shadow: "hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]", glow: "group-hover:bg-cyan-500/20" },
                { title: "Nutrition Guidance", desc: "Personalized dietary plans optimizing energy levels and physical performance.", icon: Apple, color: "text-green-400", border: "border-green-500/30", bg: "from-green-500/10", shadow: "hover:shadow-[0_0_20px_rgba(74,222,128,0.15)]", glow: "group-hover:bg-green-500/20" },
                { title: "Counseling & Interraction", desc: "Mental conditioning, stress management, and mentorship programs.", icon: Users, color: "text-purple-400", border: "border-purple-500/30", bg: "from-purple-500/10", shadow: "hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]", glow: "group-hover:bg-purple-500/20" },
                { title: "Dry Land Training", desc: "Cross-training modules tailored for strength, conditioning, and flexibility.", icon: Dumbbell, color: "text-orange-400", border: "border-orange-500/30", bg: "from-orange-500/10", shadow: "hover:shadow-[0_0_20px_rgba(251,146,60,0.15)]", glow: "group-hover:bg-orange-500/20" },
              ].map((item, idx) => (
                <div key={idx} className={`relative p-6 rounded-2xl bg-card/60 backdrop-blur-sm border ${item.border} overflow-hidden ${item.shadow} hover:-translate-y-1 transition-all duration-300 group`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.bg} to-transparent opacity-50 pointer-events-none`} />
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center border border-white/5 bg-white/5 ${item.glow} transition-colors duration-300 mb-5 relative z-10`}>
                    <item.icon className={`w-7 h-7 ${item.color}`} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2 relative z-10">{item.title}</h3>
                  <p className="text-muted-foreground text-sm relative z-10">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skill Certification Highlight */}
        <section className="px-4 py-8 md:py-12 mb-10">
          <div className="container-main">
            <div className="relative p-8 md:p-10 rounded-3xl overflow-hidden border border-primary/30 shadow-[0_0_40px_rgba(34,211,238,0.1)] bg-card/80 backdrop-blur-md group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-blue-500/5 to-transparent pointer-events-none" />
              <div className="absolute top-1/2 -translate-y-1/2 right-10 w-40 h-40 bg-primary/20 blur-3xl rounded-full pointer-events-none" />
              
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-500">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3 flex items-center justify-center md:justify-start gap-2">
                    <span className="text-foreground">SKILL CERTIFICATION</span>
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    Students receive Aqua Pulse <span className="text-primary font-medium">Swimming Skill Certificates</span> after completing each level.
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
