const stats = [
  { value: "500+", label: "Students Trained", emoji: "🏊" },
  { value: "10+", label: "Certified Coaches", emoji: "🎓" },
  { value: "5+", label: "Years Experience", emoji: "⭐" },
  { value: "10", label: "Programs Offered", emoji: "📋" },
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
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
      </div>
    </section>
  );
};

export default AboutSection;
