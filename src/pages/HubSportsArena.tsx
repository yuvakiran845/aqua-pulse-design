import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER ?? "918330945566";
const WHATSAPP_MESSAGE = "Hi, I would like to get notified when Hub Sports Arena goes live.";

const features = [
  {
    emoji: "🏆",
    title: "Sports Development",
    desc: "Structured training programs across multiple sports disciplines",
  },
  {
    emoji: "🎪",
    title: "Event Management",
    desc: "Professional sports events, tournaments and competitions",
  },
  {
    emoji: "🤝",
    title: "Athlete Support",
    desc: "End-to-end support for athletes at all levels",
  },
  {
    emoji: "📋",
    title: "Sports Consulting",
    desc: "Expert guidance for sports organizations and academies",
  },
  {
    emoji: "🎯",
    title: "Talent Scouting",
    desc: "Identifying and nurturing sporting talent from the grassroots",
  },
  {
    emoji: "🌟",
    title: "Sponsorship & Branding",
    desc: "Connecting sports talent with brands and opportunities",
  },
];

const successStories = [
  {
    badge: "🥇 State Level Medallist",
    title: "State Level Swimming Competition",
    subtitle: "Freestyle & Backstroke",
    quote: "We are very proud of Deekshith's progress. The coaching and discipline at Aqua Pulse Swimming Academy helped him achieve success at the state level.",
    student: "Deekshith",
    grade: "Grade 3 Student",
    author: "Sasidhar & Barghavi (Parents)",
  },
  {
    badge: "🌟 Young Achiever",
    title: "Excellent swimming technique",
    subtitle: "Developed at an early age",
    quote: "At such a young age, Kruthika swims beautifully and confidently. We are thankful to Aqua Pulse Swimming Academy for nurturing her skills.",
    student: "Kruthika",
    grade: "Grade 1 Student",
    author: "Sudheer (Parent)",
  },
  {
    badge: "💪 Adult Achievement",
    title: "Mastered all major strokes",
    subtitle: "As an adult learner",
    quote: "Learning swimming at 34 felt difficult at first, but with proper coaching and guidance from Aqua Pulse Swimming Academy, I achieved my goal.",
    student: "Arun",
    grade: "Adult Swimmer, Age 34",
    author: "Arun",
  },
];

const HubSportsArena = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col pt-20">
      <Navbar />

      {/* Hero Section with Mesh Gradient & Grid */}
      <section className="relative pt-24 pb-24 md:pt-32 md:pb-32 overflow-hidden flex-1">
        {/* Modern Professional Background Theme */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Base Mesh Gradient */}
          <div className="absolute inset-0 bg-[#020617]" />
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#FBBF24]/10 rounded-full blur-[120px] mix-blend-screen opacity-40" />
          <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-[#22D3EE]/5 rounded-full blur-[120px] mix-blend-screen opacity-30" />
          
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          
          {/* Animated Light Orbs */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#FCD34D]/5 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-[#22D3EE]/5 rounded-full blur-[80px]" style={{ animationDelay: '2s' }} />
          
          {/* Concentric Rings (refined) */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
             {[300, 600, 900, 1200, 1500].map((size) => (
               <div key={size} className="absolute border border-white rounded-full" style={{ width: `${size}px`, height: `${size}px` }} />
             ))}
          </div>
        </div>

        <div className="container-main relative z-10 max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center md:text-left">
            {/* Badges */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-10">
              <span className="px-4 py-1.5 rounded-full border border-[#FBBF24]/30 bg-[#FBBF24]/5 text-[#FBBF24] text-xs font-bold tracking-[0.1em] uppercase shadow-[0_0_15px_rgba(251,191,36,0.1)] backdrop-blur-sm">
                Sports Development
              </span>
              <span className="px-4 py-1.5 rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/5 text-[#22D3EE] text-xs font-bold tracking-[0.1em] uppercase shadow-[0_0_15px_rgba(34,211,238,0.1)] backdrop-blur-sm">
                Event Management
              </span>
              <span className="px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/5 text-red-400 text-[10px] font-bold tracking-[0.15em] uppercase flex items-center gap-2 backdrop-blur-sm shadow-[0_0_15px_rgba(239,68,68,0.1)]">
                 Coming Soon
              </span>
            </div>

            {/* Main Title with Premium Typography */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black tracking-tight leading-[0.95] mb-8">
              <span className="block text-white mb-2">HUB SPORTS</span>
              <span className="block bg-gradient-to-r from-[#FBBF24] via-[#FCD34D] to-[#FBBF24] bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">ARENA</span>
            </h1>

            {/* Single Accent Line */}
            <div className="w-24 h-1 bg-gradient-to-r from-[#FBBF24] to-transparent mb-8 mx-auto md:mx-0 shadow-[0_0_10px_rgba(251,191,36,0.4)]" />

            {/* Subtitle */}
            <div className="inline-block relative mb-6">
              <h2 className="text-2xl md:text-3xl text-[#22D3EE] font-heading font-bold tracking-tight uppercase">
                Sports Development & Event Management
              </h2>
              <div className="absolute -inset-1 bg-[#22D3EE]/5 blur-md rounded-lg pointer-events-none" />
            </div>

            {/* Description */}
            <p className="text-[#94A3B8] text-base md:text-xl leading-relaxed max-w-2xl mb-12 mx-auto md:mx-0 font-medium">
              A dedicated platform for building sporting excellence, managing professional
              events, and developing athletes from grassroots to elite levels.
            </p>

            {/* Coming Soon Card (Professional Style) */}
            <div className="inline-flex flex-col sm:flex-row items-center gap-6 px-10 py-7 bg-white/[0.03] backdrop-blur-xl rounded-[2.5rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-500 hover:border-[#FBBF24]/30 hover:bg-white/[0.05] group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FBBF24] to-[#B45309] flex items-center justify-center text-3xl shadow-[0_8px_20px_rgba(180,83,9,0.3)] group-hover:scale-110 transition-transform duration-500">
                ⌛
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-heading font-black text-[#FCD34D] tracking-widest mb-1">
                  COMING SOON...
                </h3>
                <p className="text-slate-400 font-medium tracking-wide">
                  Building the future of sports. Stay tuned!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Grid Background */}
      <section className="py-24 md:py-32 bg-[#030816] relative overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FBBF24]/10 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-[#FBBF24]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container-main max-w-7xl mx-auto relative z-10 px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-heading font-black text-white tracking-tight uppercase mb-6">
              WHAT'S <span className="text-[#FCD34D]">COMING</span>
            </h2>
            <div className="w-24 h-1 bg-[#FCD34D] mx-auto mb-6 rounded-full" />
            <p className="text-[#22D3EE] font-bold text-base md:text-xl tracking-[0.2em] uppercase">
               Exclusive Platform Preview
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className="group relative bg-[#0F172A]/40 backdrop-blur-sm border border-white/10 rounded-[2rem] p-8 md:p-10 overflow-hidden transition-all duration-500 hover:border-[#FBBF24]/50 hover:bg-[#0F172A]/80 hover:-translate-y-2 shadow-[0_10px_40px_rgba(0,0,0,0.3)]"
              >
                {/* Neon accent corner */}
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#FBBF24]/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl mb-8 group-hover:bg-[#FBBF24]/20 group-hover:border-[#FBBF24]/30 transition-all duration-500">
                  {f.emoji}
                </div>
                
                <h3 className="text-xl md:text-2xl font-heading font-black text-white mb-4 tracking-tight group-hover:text-[#FCD34D] transition-colors">
                  {f.title}
                </h3>
                <p className="text-[#94A3B8] text-base md:text-lg leading-relaxed group-hover:text-slate-300 transition-colors font-medium">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="py-20 md:py-24 relative bg-background">
        <div className="container-main max-w-6xl mx-auto">
          <div className="mb-14 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-[#22D3EE] tracking-wide uppercase mb-3 drop-shadow-[0_0_15px_rgba(34,211,238,0.2)]">
              STUDENT SUCCESS STORIES
            </h2>
            <p className="text-muted-foreground font-medium text-sm md:text-base">
              Real achievements from our students and their families
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successStories.map((story, i) => (
              <div 
                key={i}
                className="group relative flex flex-col bg-[#0B132B]/60 backdrop-blur-sm border border-[#22D3EE]/20 hover:border-[#FBBF24]/40 rounded-3xl p-8 hover:-translate-y-2 hover:shadow-[0_15px_40px_-15px_rgba(251,191,36,0.25)] transition-all duration-500"
              >
                {/* Badge */}
                <div className="mb-6">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#FBBF24]/30 bg-[#FBBF24]/10 text-[#FBBF24] text-xs font-semibold tracking-wide shadow-inner">
                    {story.badge}
                  </span>
                </div>

                {/* Quote Icon */}
                <div className="text-4xl font-serif text-[#22D3EE]/40 leading-none mb-4 group-hover:text-[#22D3EE] transition-colors">
                  "
                </div>

                {/* Achievement Highlight */}
                <h3 className="text-[15px] font-semibold text-white mb-1 leading-snug">
                  <span className="text-[#22D3EE] inline-block mr-1.5">✦</span> 
                  {story.title}
                </h3>
                <h4 className="text-[#94A3B8] text-sm mb-6 border-b border-white/5 pb-4">
                  {story.subtitle}
                </h4>

                {/* Testimonial Quote */}
                <p className="text-[#CBD5E1] text-sm leading-relaxed mb-auto italic font-medium">
                  {story.quote}
                </p>

                {/* Author Info */}
                <div className="mt-8 pt-5 border-t border-white/5 space-y-1">
                  <p className="text-white font-semibold text-base">
                    {story.student}
                  </p>
                  <p className="text-[#94A3B8] text-xs">
                    {story.grade}
                  </p>
                  <p className="text-[#22D3EE] text-xs italic mt-1 font-medium">
                    - {story.author}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Notify Section */}
      <section className="py-20 md:py-24 bg-secondary/20 relative">
        <div className="container-main max-w-4xl mx-auto">
          <div className="bg-[#0B132B] border border-white/10 rounded-3xl p-10 md:p-14 text-center shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
            {/* Subtle radial glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#FBBF24]/5 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="text-5xl mb-6 relative z-10 animate-bounce" style={{ animationDuration: '3s' }}>🔔</div>
            
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#FCD34D] tracking-wider uppercase mb-5 relative z-10">
              BE THE FIRST TO KNOW
            </h2>
            
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-lg mx-auto mb-10 relative z-10">
              Hub Sports Arena launches soon. Contact us on WhatsApp to get notified when we go live.
            </p>
            
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold py-3 px-8 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] hover:-translate-y-0.5 transition-all duration-300 relative z-10"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Notify Me on WhatsApp
            </a>

            <div className="mt-12 pt-8 border-t border-white/5 relative z-10">
              <p className="text-[#64748B] text-xs font-medium tracking-wide">
                Powered by Aqua Pulse Swimming Academy
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HubSportsArena;
