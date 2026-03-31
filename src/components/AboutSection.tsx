import { Target, Award, Building, Droplets, Users, Shield } from "lucide-react";

const stats = [
  { value: "500+", label: "Students Trained", emoji: "🏊" },
  { value: "10+", label: "Certified Coaches", emoji: "🎓" },
  { value: "5+", label: "Years Experience", emoji: "⭐" },
  { value: "10", label: "Programs Offered", emoji: "📋" },
];

const highlights = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To make swimming accessible, safe, and performance-driven for everyone.",
    gradient: "from-cyan-500/20 to-blue-500/10",
    border: "border-cyan-500/30",
  },
  {
    icon: Award,
    title: "Training Quality",
    text: "Internationally certified coaches using proven methodologies.",
    gradient: "from-amber-500/20 to-orange-500/10",
    border: "border-amber-500/30",
  },
  {
    icon: Building,
    title: "Facilities",
    text: "Temperature-controlled pools, advanced filtration, and modern amenities.",
    gradient: "from-purple-500/20 to-violet-500/10",
    border: "border-purple-500/30",
  },
  {
    icon: Shield,
    title: "Safety First",
    text: "Lifeguard supervision, CPR-trained staff, and rigorous safety protocols.",
    gradient: "from-green-500/20 to-emerald-500/10",
    border: "border-green-500/30",
  },
  {
    icon: Users,
    title: "Community",
    text: "A thriving community of swimmers, parents, and coaches growing together.",
    gradient: "from-pink-500/20 to-rose-500/10",
    border: "border-pink-500/30",
  },
  {
    icon: Droplets,
    title: "Water Quality",
    text: "Multi-stage filtration and UV treatment ensuring crystal-clear, safe water.",
    gradient: "from-teal-500/20 to-cyan-500/10",
    border: "border-teal-500/30",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-main relative">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            About <span className="gradient-aqua-text">Aqua Pulse</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Aqua Pulse Swimming Academy is a premier aquatic training center dedicated to nurturing swimmers
            of all levels — from young beginners taking their first strokes to competitive athletes pushing
            their limits.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative bg-gradient-to-br from-primary/10 via-card to-accent/5 rounded-2xl border border-primary/20 p-5 md:p-6 text-center group hover:scale-[1.03] hover:border-primary/40 hover:shadow-[0_0_30px_hsl(192_82%_50%/0.15)] transition-all duration-300 overflow-hidden"
            >
              <div className="pointer-events-none absolute -top-4 -right-4 w-16 h-16 rounded-full bg-white/5 blur-xl" />
              <div className="text-2xl mb-2">{stat.emoji}</div>
              <div className="text-3xl md:text-4xl font-heading font-bold gradient-aqua-text mb-1">{stat.value}</div>
              <p className="text-xs md:text-sm text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {highlights.map((item) => (
            <div
              key={item.title}
              className={`relative bg-gradient-to-br ${item.gradient} rounded-2xl border ${item.border} p-5 md:p-6 group hover:scale-[1.02] hover:shadow-[0_0_24px_hsl(192_82%_50%/0.2)] transition-all duration-300 overflow-hidden`}
            >
              <div className="pointer-events-none absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/5 blur-2xl" />
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-black/20 backdrop-blur-sm flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-heading font-bold text-foreground text-base mb-1">{item.title}</h4>
                  <p className="text-foreground/70 text-xs md:text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
