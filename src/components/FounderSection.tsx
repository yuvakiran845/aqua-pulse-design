import { Button } from "@/components/ui/button";
import founderImg from "@/assets/founder-real.png";

const FounderSection = () => {
  return (
    <section id="founder" className="section-padding relative">
      <div className="container-main">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-[2rem] font-heading font-bold mb-4">
            Meet the <span className="gradient-aqua-text">Founder</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
          {/* Image */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-[280px] md:w-[300px] lg:w-[320px] aspect-[4/5] rounded-2xl overflow-hidden border-2 border-primary/30 shadow-lg">
              <img src={founderImg} alt="Founder" className="w-full h-full object-cover" />
            </div>
            <Button variant="aqua" size="sm" asChild>
              <a href="/#founder">Founder Details</a>
            </Button>
          </div>

          {/* Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-heading font-bold text-foreground">Mr. Venkata Ramana</h3>
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
