import { Quote } from "lucide-react";
import founderImg from "@/assets/founder.jpg";

const FounderSection = () => {
  return (
    <section id="founder" className="section-padding relative">
      <div className="container-main">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Meet the <span className="gradient-aqua-text">Founder</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-80 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-lg">
                <img src={founderImg} alt="Founder" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Quote className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-5">
            <div>
              <h3 className="text-2xl font-heading font-bold text-foreground">Venkata Ramana</h3>
              <p className="text-primary font-medium">Founder & Managing Director</p>
            </div>

            <div className="bg-secondary/50 rounded-xl p-4 border-l-4 border-primary">
              <p className="text-sm text-foreground italic leading-relaxed">
                "Our vision is to create a world-class aquatic ecosystem where safety, performance, and passion converge to shape the next generation of swimmers."
              </p>
            </div>

            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• Certified Aquatic Facility Operator</p>
              <p>• 15+ years in sports management</p>
              <p>• Former competitive swimmer</p>
              <p>• Passionate advocate for water safety education</p>
            </div>

            <div className="inline-block bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs font-semibold px-4 py-2 rounded-full">
              🏆 Visionary Leader in Aquatic Sports
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
