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
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden flex-1">
        {/* Concentric Rings Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
          <div className="absolute w-[300px] h-[300px] rounded-full border border-white" />
          <div className="absolute w-[600px] h-[600px] rounded-full border border-white" />
          <div className="absolute w-[900px] h-[900px] rounded-full border border-white" />
          <div className="absolute w-[1200px] h-[1200px] rounded-full border border-white" />
          <div className="absolute w-[1500px] h-[1500px] rounded-full border border-white" />
        </div>

        <div className="container-main relative z-10">
          <div className="max-w-3xl space-y-8">
            {/* Badges */}
            <div className="flex flex-wrap gap-2.5">
              <span className="px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 text-[10px] sm:text-xs font-black tracking-widest uppercase">
                SPORTS DEVELOPMENT
              </span>
              <span className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-[10px] sm:text-xs font-black tracking-widest uppercase">
                EVENT MANAGEMENT
              </span>
              <span className="px-4 py-1.5 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-400 text-[10px] sm:text-xs font-black tracking-widest uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                COMING SOON
              </span>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-[clamp(2.5rem,10vw,4.5rem)] font-heading font-black tracking-tighter leading-none">
                <span className="block text-white">HUB SPORTS</span>
                <span className="block gradient-aqua-text">ARENA</span>
              </h1>
              <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-transparent rounded-full" />
            </div>

            {/* Subtitle */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl text-primary font-bold tracking-tight">
                Nurturing Champions. Hosting Excellence.
              </h2>
              <p className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl font-medium">
                A dedicated ecosystem for building sporting excellence and managing professional
                events, from grassroots development to elite competitive stages.
              </p>
            </div>

            {/* Coming Soon Card */}
            <div className="inline-flex flex-col sm:flex-row items-center gap-6 px-8 py-6 bg-card/60 backdrop-blur-xl rounded-[2rem] border border-white/5 shadow-2xl relative group">
               <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
               <div className="text-5xl sm:text-6xl shrink-0 drop-shadow-[0_0_20px_rgba(245,158,11,0.3)] animate-pulse">⏳</div>
               <div className="text-center sm:text-left">
                <h3 className="text-2xl font-heading font-black text-amber-500 tracking-widest mb-1">
                  PRE-LAUNCH STATUS
                </h3>
                <p className="text-slate-400 text-sm font-medium">
                  We're crafting a world-class experience. Stay updated!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/20 relative">
        <div className="container-main max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-[#FCD34D] tracking-wide uppercase mb-3 drop-shadow-[0_0_15px_rgba(252,211,77,0.2)]">
              WHAT'S COMING
            </h2>
            <p className="text-[#22D3EE] font-medium text-sm md:text-base">
              Here's a glimpse of what Hub Sports Arena will offer
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="group relative bg-[#0F172A] border border-white/5 rounded-2xl p-6 md:p-8 overflow-hidden hover:border-[#FBBF24]/30 hover:bg-[#1E293B] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300"
              >
                {/* Background watermark emoji */}
                <div className="absolute -right-4 -bottom-4 text-8xl opacity-[0.03] group-hover:opacity-[0.06] group-hover:scale-110 transition-all duration-500 pointer-events-none grayscale">
                  {f.emoji}
                </div>
                
                <div className="text-3xl mb-5 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-300 transform origin-left">
                  {f.emoji}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed group-hover:text-[#CBD5E1] transition-colors">
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
