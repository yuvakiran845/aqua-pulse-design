import { Button } from "@/components/ui/button";
import { Waves, Trophy, Building2 } from "lucide-react";

const divisions = [
  {
    icon: Waves,
    title: "Swimming Academy",
    description: "Expert coaching for all ages and skill levels. From beginners to competitive swimmers, our programs develop confidence and technique in the water.",
    color: "from-primary to-accent",
  },
  {
    icon: Trophy,
    title: "Sports Arena",
    description: "State-of-the-art multi-sport facility hosting tournaments and training sessions. Experience world-class infrastructure for peak performance.",
    color: "from-accent to-cyan",
  },
  {
    icon: Building2,
    title: "Facility Management",
    description: "Professional management of aquatic and sports facilities. We ensure safety, hygiene, and operational excellence at every touchpoint.",
    color: "from-cyan to-primary",
  },
];

const DivisionsSection = () => {
  return (
    <section id="divisions" className="section-padding relative">
      <div className="container-main">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Our <span className="gradient-aqua-text">Core Divisions</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Three pillars of excellence driving our mission to create world-class aquatic experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {divisions.map((d) => (
            <div
              key={d.title}
              className="group bg-card rounded-2xl p-8 border border-border/50 card-glow cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${d.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <d.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">{d.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{d.description}</p>
              <Button variant="ghost" className="text-primary hover:text-accent p-0 h-auto font-medium text-sm">
                Explore More →
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DivisionsSection;
