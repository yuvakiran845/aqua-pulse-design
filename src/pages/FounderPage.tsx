import { Award, BadgeCheck, Medal, ChevronRight, Download } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import founderImg from "@/assets/founder-real.png";

import { toast } from "sonner";
import { cn } from "@/lib/utils";

const experiencesData = [
  "Conducted multiple swimming camps across age groups",
  "Led aquatic safety awareness programs",
  "Organized and judged swimming competitions",
  "Expert in adaptive aquatics for special needs",
  "Certified in sports physiology and injury prevention"
];



const certificationsData = [
  {
    id: 1,
    title: "NSNIS Certification",
    subtitle: "National Sports Institute of India",
    icon: Medal,
    iconClass: "text-amber-400",
    iconBg: "bg-amber-500/20",
    pdfUrl: "/certificates/nsnis-cert.pdf"
  },
  {
    id: 2,
    title: "WSCA Certification",
    subtitle: "World Swimming Coaches Association – International",
    icon: BadgeCheck,
    iconClass: "text-blue-400",
    iconBg: "bg-blue-500/20",
    pdfUrl: "/certificates/wsca-cert.pdf"
  },
  {
    id: 3,
    title: "WSCA Membership",
    subtitle: "Official Member – World Swimming Coaches Association",
    icon: Award,
    iconClass: "text-emerald-400",
    iconBg: "bg-emerald-500/20",
    pdfUrl: "/certificates/wsca-member.pdf"
  },
  {
    id: 4,
    title: "SFI Coach Member",
    subtitle: "Swimming Federation of India – Coach Member",
    icon: Medal,
    iconClass: "text-amber-400",
    iconBg: "bg-amber-500/20",
    pdfUrl: "/certificates/sfi-cert.pdf"
  },
  {
    id: 5,
    title: "Life Saving Society Certification",
    subtitle: "Professional Lifeguard & Water Safety Training",
    icon: Award,
    iconClass: "text-red-400",
    iconBg: "bg-red-500/20",
    pdfUrl: "/certificates/lifesaving-cert.pdf"
  },
];

const quickStats = [
  { label: "Role", value: "Founder, Head Coach & Program Director", color: "text-rose-400" },
  { label: "Academy", value: "Aqua Pulse Swimming Academy", color: "text-green-400" },
  { label: "Experience", value: "10+ Years of Experience", color: "text-yellow-400" },
  { label: "Students", value: "3,000+ Trained", color: "text-cyan-400" },
];

const FounderPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-24 lg:pt-32">
        <section id="founder-page-section" className="section-padding relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="container-main relative">
            <div className="space-y-12 md:space-y-20">

              {/* Hero: Image + Name/Bio */}
              <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                <div className="shrink-0 order-2 lg:order-1">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden border-4 border-primary/30 shadow-[0_0_50px_rgba(34,211,238,0.2)] group-hover:border-primary/60 transition-all duration-500">
                      <img src={founderImg} alt="Founder - E. NAGA VENKAT" className="w-full h-full object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-primary-foreground text-[10px] sm:text-xs font-bold px-6 py-2 rounded-full shadow-xl tracking-wider">
                      FOUNDER & MD
                    </div>
                  </div>
                </div>

                <div className="text-center lg:text-left space-y-5 flex-1 order-1 lg:order-2">
                  <div>
                    <p className="text-sm sm:text-base font-bold tracking-[0.2em] text-primary uppercase mb-2">
                       Visionary Leadership
                    </p>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-black text-white tracking-tight leading-none">
                      E. NAGA VENKAT
                    </h1>
                  </div>
                  <p className="text-base sm:text-lg lg:text-xl text-slate-400 leading-relaxed font-medium max-w-3xl">
                    "Our vision is to create a world-class aquatic ecosystem where safety,
                    performance, and passion converge to shape the next generation of swimmers. 
                    At Aqua Pulse, we don't just teach swimming; we build champions for life."
                  </p>
                  
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-slate-300">
                       <Award className="w-4 h-4 text-primary" />
                       14+ YEARS EXP
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-slate-300">
                       <BadgeCheck className="w-4 h-4 text-primary" />
                       ELITE COACH
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats + Certifications */}
              <div className="grid lg:grid-cols-[400px_1fr] gap-10 md:gap-16 items-start">
                {/* Quick Stats */}
                <div className="space-y-6">
                  <div className="rounded-[2rem] border border-white/5 bg-card/40 backdrop-blur-md p-8 sm:p-10 space-y-6 shadow-2xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                    <h2 className="text-2xl font-heading font-black text-white tracking-tight flex items-center gap-3">
                      <div className="w-8 h-1 bg-primary rounded-full" />
                      QUICK STATS
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
                      {quickStats.map((stat) => (
                        <div key={stat.label} className="rounded-2xl border border-white/5 bg-navy-mid/30 p-4 sm:p-5 transition-all duration-300 hover:bg-navy-mid/50 hover:border-primary/20 group/stat">
                          <p className={`text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-black ${stat.color} mb-1 sm:mb-1.5`}>{stat.label}</p>
                          <p className="text-white font-bold text-sm sm:text-base lg:text-lg tracking-tight group-hover/stat:translate-x-1 transition-transform duration-300">{stat.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Certifications & Affiliations */}
                <div className="space-y-8">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-white tracking-tight text-center lg:text-left">
                    PROFESSIONAL <span className="gradient-aqua-text">CREDENTIALS</span>
                  </h2>
                  <div className="rounded-[2.5rem] border border-white/5 bg-card/40 backdrop-blur-md p-2 sm:p-4 shadow-2xl space-y-2">
                    {certificationsData.map((item, idx) => (
                      <div
                        key={item.id}
                        className={cn(
                          "flex items-center gap-3 sm:gap-6 p-4 sm:p-6 rounded-3xl transition-all duration-500 hover:bg-white/5 group/cert",
                          idx < certificationsData.length - 1 ? "border-b border-white/5" : ""
                        )}
                      >
                        <div className={cn(item.iconBg, "w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shrink-0 group-hover/cert:scale-110 transition-transform duration-500 shadow-inner")}>
                          <item.icon className={cn("w-6 h-6 sm:w-8 sm:h-8", item.iconClass)} strokeWidth={1.5} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-white font-black text-base sm:text-lg lg:text-xl tracking-tight mb-1">{item.title}</h3>
                          <p className="text-[10px] sm:text-xs lg:text-sm text-slate-400 font-medium leading-relaxed">{item.subtitle}</p>
                        </div>
                        <button 
                          onClick={() => {
                            if (item.pdfUrl) {
                              const link = document.createElement('a');
                              link.href = item.pdfUrl;
                              link.download = `${item.title.replace(/\s+/g, '_')}.pdf`;
                              document.body.appendChild(link);
                              link.click();
                              document.body.removeChild(link);
                              toast.info(`Downloading credential...`, {
                                description: `Verifying: ${item.title}`
                              });
                            }
                          }}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-black hover:border-primary transition-all duration-300 group/btn shrink-0 shadow-lg"
                          title="Download Certification"
                        >
                          <Download className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:scale-110 transition-transform" strokeWidth={2.5} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Experiences */}
              <div className="mt-20 pt-10 flex flex-col items-center">
                <h2 className="text-2xl md:text-3xl font-heading font-bold uppercase tracking-[1.5px] text-[#22D3EE] text-center mb-8">
                  EXPERIENCES
                </h2>
                
                <div className="max-w-3xl mx-auto rounded-3xl border border-[rgba(34,211,238,0.15)] bg-[rgba(15,23,42,0.4)] backdrop-blur-sm p-8 md:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:border-[rgba(34,211,238,0.3)] transition-all duration-300">
                  <div className="space-y-5">
                    {experiencesData.map((exp, idx) => (
                      <div key={idx} className="flex items-start gap-4 group/item">
                        <ChevronRight className="w-5 h-5 text-blue-400 mt-0.5 shrink-0 transition-transform group-hover/item:translate-x-1" />
                        <p className="text-[#E2E8F0] text-base md:text-lg leading-relaxed font-medium">
                          {exp}
                        </p>
                      </div>
                    ))}
                  </div>
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

export default FounderPage;
