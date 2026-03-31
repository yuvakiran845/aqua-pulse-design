import { Award, BadgeCheck, Medal, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import founderImg from "@/assets/founder-real.png";

const WHATSAPP_NUMBER =
  import.meta.env.VITE_WHATSAPP_NUMBER ?? "919999999999";
const WHATSAPP_FOUNDER_MESSAGE =
  import.meta.env.VITE_WHATSAPP_FOUNDER_MESSAGE ?? "Hello, I want to enquire about swimming programs.";

const certificationsData = [
  {
    id: 1,
    title: "Elite Coaching Certification",
    subtitle: "International Aquatic Training Institute",
    file: "/certificates/sample1.pdf",
    icon: Medal,
    iconClass: "text-amber-300",
    iconWrapClass: "bg-[linear-gradient(135deg,rgba(251,191,36,0.35),rgba(34,211,238,0.15))]",
  },
  {
    id: 2,
    title: "Advanced Swimming Techniques",
    subtitle: "Global Swimming Federation",
    file: "/certificates/sample2.pdf",
    icon: BadgeCheck,
    iconClass: "text-blue-300",
    iconWrapClass: "bg-[linear-gradient(135deg,rgba(96,165,250,0.35),rgba(34,211,238,0.15))]",
  },
  {
    id: 3,
    title: "Professional Aquatic Safety",
    subtitle: "World Safety Council",
    file: "/certificates/sample3.pdf",
    icon: Award,
    iconClass: "text-teal-300",
    iconWrapClass: "bg-[linear-gradient(135deg,rgba(45,212,191,0.35),rgba(59,130,246,0.15))]",
  },
  {
    id: 4,
    title: "Sports Physiology Certification",
    subtitle: "International Sports Science Board",
    file: "/certificates/sample4.pdf",
    icon: Medal,
    iconClass: "text-yellow-300",
    iconWrapClass: "bg-[linear-gradient(135deg,rgba(253,224,71,0.3),rgba(34,211,238,0.15))]",
  },
];

const FounderPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24">
        <section id="founder-page-section" className="py-20 px-5">
          <div className="container-main">
            <div className="max-w-6xl mx-auto space-y-6 animate-fade-up">
              <div className="grid lg:grid-cols-[280px_1fr] gap-6 md:gap-8 items-center">
                <div className="flex justify-center lg:justify-start">
                  <div className="w-[240px] h-[240px] rounded-full overflow-hidden border-[3px] border-[rgba(34,211,238,0.5)] shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-transform duration-500 hover:scale-[1.02]">
                    <img src={founderImg} alt="Founder" className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-sm md:text-base font-bold tracking-[1px] text-[#22D3EE] uppercase">
                    Head Coach & Program Director
                  </p>
                  <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                    Mr. Venkata Ramana
                  </h1>
                  <p className="text-[#cbd5e1] leading-[1.6] max-w-4xl">
                    Founder & Managing Director. "Our vision is to create a world-class aquatic ecosystem where safety,
                    performance, and passion converge to shape the next generation of swimmers."
                  </p>
                </div>
              </div>

              <div className="grid lg:grid-cols-[320px_1fr] gap-6 md:gap-8 items-start">
                <div className="space-y-3">
                  <div className="rounded-[14px] border border-[rgba(34,211,238,0.2)] bg-[rgba(15,23,42,0.7)] p-4 space-y-3">
                    <h2 className="text-xl font-heading font-semibold text-foreground">Quick Stats</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3">
                      <div className="rounded-xl border border-[rgba(34,211,238,0.2)] bg-[rgba(15,23,42,0.6)] p-4">
                        <p className="text-xs uppercase tracking-wider text-primary/80">Role</p>
                        <p className="text-foreground font-medium">Founder & Managing Director</p>
                      </div>
                      <div className="rounded-xl border border-[rgba(34,211,238,0.2)] bg-[rgba(15,23,42,0.6)] p-4">
                        <p className="text-xs uppercase tracking-wider text-primary/80">Academy</p>
                        <p className="text-foreground font-medium">Aqua Pulse Swimming Academy</p>
                      </div>
                      <div className="rounded-xl border border-[rgba(34,211,238,0.2)] bg-[rgba(15,23,42,0.6)] p-4">
                        <p className="text-xs uppercase tracking-wider text-primary/80">Experience</p>
                        <p className="text-foreground font-medium">15+ years in sports management</p>
                      </div>
                      <div className="rounded-xl border border-[rgba(34,211,238,0.2)] bg-[rgba(15,23,42,0.6)] p-4">
                        <p className="text-xs uppercase tracking-wider text-primary/80">Students</p>
                        <p className="text-foreground font-medium">Guided across age groups</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-xl md:text-2xl font-heading font-bold uppercase tracking-[1px] text-[#22D3EE]">
                      Certifications & Affiliations
                    </h2>
                    <div className="space-y-4">
                      {certificationsData.map((item) => (
                        <a
                          key={item.id}
                          href={item.file}
                          download
                          className="rounded-[14px] p-4 border border-[rgba(34,211,238,0.2)] bg-[linear-gradient(135deg,rgba(34,211,238,0.15),rgba(59,130,246,0.15))] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_12px_rgba(34,211,238,0.3)] cursor-pointer"
                        >
                          <div className="flex items-start gap-3">
                            <div className={`${item.iconWrapClass} p-2 rounded-[10px] shrink-0`}>
                              <item.icon className={`w-5 h-5 ${item.iconClass}`} />
                            </div>
                            <div>
                              <h3 className="text-foreground font-semibold">{item.title}</h3>
                              <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl font-heading font-semibold text-foreground uppercase tracking-wide">
                  Key Highlights
                </h2>
                <ul className="space-y-2 text-[#e2e8f0] leading-[1.8]">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 inline-block w-2 h-2 rounded-full bg-[#22D3EE] shrink-0" />
                    <span>Former competitive swimmer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 inline-block w-2 h-2 rounded-full bg-[#22D3EE] shrink-0" />
                    <span>Built a structured aquatic training ecosystem</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 inline-block w-2 h-2 rounded-full bg-[#22D3EE] shrink-0" />
                    <span>Guided swimmer development across age groups</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 inline-block w-2 h-2 rounded-full bg-[#22D3EE] shrink-0" />
                    <span>Promoted community-focused water safety programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 inline-block w-2 h-2 rounded-full bg-[#22D3EE] shrink-0" />
                    <span>Passionate advocate for water safety education</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_FOUNDER_MESSAGE)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-foreground shadow-[0_0_10px_rgba(37,211,102,0.6)] hover:brightness-110 transition-all duration-300"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      <Footer />
    </div>
  );
};

export default FounderPage;
