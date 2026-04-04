import { Users, Award, Calendar, Layers } from "lucide-react";

const stats = [
  { value: "3000+", label: "Students Trained", icon: Users },
  { value: "10+", label: "Certified Coaches", icon: Award },
  { value: "5+", label: "Years Experience", icon: Calendar },
  { value: "10", label: "Programs Offered", icon: Layers },
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative bg-[#0F172A]/40 backdrop-blur-md rounded-[2rem] border border-white/5 p-6 md:p-10 text-center group hover:scale-[1.05] hover:border-primary/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center mb-6 text-primary border border-primary/10 group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all duration-500 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                   <stat.icon className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div className="text-3xl md:text-5xl font-heading font-black tracking-tighter text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-primary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">{stat.value}</div>
                <p className="text-[10px] md:text-xs text-slate-400 font-bold uppercase tracking-[0.2em]">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
