import { Target, Award, Building } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-main">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-[2rem] font-heading font-bold">
              About <span className="gradient-aqua-text">Aqua Pulse</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Aqua Pulse Swimming Academy is a premier aquatic training center dedicated to nurturing swimmers
              of all levels. From young beginners taking their first strokes to competitive athletes pushing
              their limits, we provide world-class coaching, facilities, and support.
            </p>

            <div className="space-y-4">
              {[
                { icon: Target, title: "Our Mission", text: "To make swimming accessible, safe, and performance-driven for everyone." },
                { icon: Award, title: "Training Quality", text: "Internationally certified coaches using proven methodologies." },
                { icon: Building, title: "Facilities", text: "Temperature-controlled pools, advanced filtration, and modern amenities." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground text-sm">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative flex justify-center">
            <div className="w-full max-w-md aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-card to-accent/20 border border-border/50 flex items-center justify-center">
              <div className="text-center space-y-4 p-8">
                <div className="text-6xl font-heading font-bold gradient-aqua-text">500+</div>
                <p className="text-muted-foreground">Students trained successfully</p>
                <div className="flex justify-center gap-8 pt-4">
                  <div>
                    <div className="text-2xl font-heading font-bold text-foreground">10+</div>
                    <p className="text-xs text-muted-foreground">Certified Coaches</p>
                  </div>
                  <div>
                    <div className="text-2xl font-heading font-bold text-foreground">5+</div>
                    <p className="text-xs text-muted-foreground">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
