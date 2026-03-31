import { Award, BadgeCheck, Medal, MessageCircle, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import founderImg from "@/assets/founder-real.png";

const experiencesData = [
  "Conducted multiple swimming camps across age groups",
  "Led aquatic safety awareness programs",
  "Organized and judged swimming competitions",
  "Expert in adaptive aquatics for special needs",
  "Certified in sports physiology and injury prevention"
];

const WHATSAPP_NUMBER =
  import.meta.env.VITE_WHATSAPP_NUMBER ?? "918330945566";
const WHATSAPP_FOUNDER_MESSAGE =
  import.meta.env.VITE_WHATSAPP_FOUNDER_MESSAGE ?? "Hello, I want to enquire about swimming programs.";

const certificationsData = [
  {
    id: 1,
    title: "NSNIS Certification",
    subtitle: "National Sports Institute of India",
    icon: Medal,
    iconClass: "text-amber-400",
    iconBg: "bg-amber-500/20",
  },
  {
    id: 2,
    title: "WSCA Certification",
    subtitle: "World Swimming Coaches Association – International",
    icon: BadgeCheck,
    iconClass: "text-blue-400",
    iconBg: "bg-blue-500/20",
  },
  {
    id: 3,
    title: "WSCA Membership",
    subtitle: "Official Member – World Swimming Coaches Association",
    icon: Award,
    iconClass: "text-emerald-400",
    iconBg: "bg-emerald-500/20",
  },
  {
    id: 4,
    title: "SFI Coach Member",
    subtitle: "Swimming Federation of India – Coach Member",
    icon: Medal,
    iconClass: "text-amber-400",
    iconBg: "bg-amber-500/20",
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
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-36 md:pt-32">
        <section id="founder-page-section" className="py-16 md:py-20 -mt-[10px]">
          <div className="w-full px-6 md:px-10 lg:px-16 xl:px-24">
            <div className="space-y-4 md:space-y-8">

              {/* Hero: Image + Name/Bio */}
              <div className="grid lg:grid-cols-[auto_1fr] gap-0 lg:gap-4 items-center -mt-[30px]">
                <div className="flex justify-center lg:justify-start mb-6 lg:mb-0">
                  <div className="w-[240px] h-[240px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] rounded-full overflow-hidden border-[3px] border-[rgba(34,211,238,0.5)] shadow-[0_0_24px_rgba(34,211,238,0.3)] transition-transform duration-500 hover:scale-[1.02]">
                    <img src={founderImg} alt="Founder - Mr. Venkata Ramana" className="w-full h-full object-cover object-top" />
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-sm md:text-base font-bold tracking-[1.5px] text-[#22D3EE] uppercase">
                    Head Coach & Program Director
                  </p>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight">
                    Mr. Venkata Ramana
                  </h1>
                  <p className="text-base md:text-lg text-[#cbd5e1] leading-[1.7] max-w-4xl">
                    Founder & Managing Director. "Our vision is to create a world-class aquatic ecosystem where safety,
                    performance, and passion converge to shape the next generation of swimmers."
                  </p>
                </div>
              </div>

              {/* Quick Stats + Certifications */}
              <div className="grid lg:grid-cols-[360px_1fr] gap-8 lg:gap-12 items-start">
                {/* Quick Stats */}
                <div className="space-y-4">
                  <div className="rounded-2xl border border-[rgba(34,211,238,0.2)] bg-[rgba(15,23,42,0.7)] p-5 md:p-6 space-y-4">
                    <h2 className="text-2xl font-heading font-bold text-foreground">Quick Stats</h2>
                    <div className="grid gap-3">
                      {quickStats.map((stat) => (
                        <div key={stat.label} className="rounded-xl border border-[rgba(34,211,238,0.2)] bg-[rgba(15,23,42,0.6)] p-4">
                          <p className={`text-xs uppercase tracking-wider font-semibold ${stat.color}`}>{stat.label}</p>
                          <p className="text-foreground font-medium text-base mt-1">{stat.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Certifications & Affiliations */}
                <div className="space-y-5">
                  <h2 className="text-2xl md:text-3xl font-heading font-bold uppercase tracking-[1.5px] text-[#22D3EE]">
                    Certifications & Affiliations
                  </h2>
                  <div className="rounded-2xl border border-[rgba(34,211,238,0.15)] bg-[rgba(15,23,42,0.5)] p-5 md:p-6 space-y-1">
                    {certificationsData.map((item, idx) => (
                      <div
                        key={item.id}
                        className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-[rgba(34,211,238,0.05)] ${
                          idx < certificationsData.length - 1 ? "border-b border-[rgba(34,211,238,0.1)]" : ""
                        }`}
                      >
                        <div className={`${item.iconBg} p-3 rounded-xl shrink-0`}>
                          <item.icon className={`w-6 h-6 ${item.iconClass}`} />
                        </div>
                        <div>
                          <h3 className="text-foreground font-bold text-base md:text-lg">{item.title}</h3>
                          <p className="text-sm md:text-base text-muted-foreground">{item.subtitle}</p>
                        </div>
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
