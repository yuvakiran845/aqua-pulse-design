import { Button } from "@/components/ui/button";
import founderImg from "@/assets/founder-real.png";

const FounderSection = () => {
  return (
    <section id="founder" className="section-padding relative">
      <div className="w-full px-6 md:px-10 lg:px-16 xl:px-24">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Meet the <span className="gradient-aqua-text">Founder</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-[auto_1fr] items-center">
          {/* Image */}
          <div className="flex flex-col items-center gap-5 mb-8 md:mb-0 md:mr-10 lg:mr-16">
            <div className="w-[280px] h-[280px] md:w-[320px] md:h-[320px] lg:w-[340px] lg:h-[340px] rounded-full overflow-hidden border-4 border-primary/30 shadow-[0_0_30px_rgba(34,211,238,0.15)]">
              <img src={founderImg} alt="Founder - Mr. Venkata Ramana" className="w-full h-full object-cover" />
            </div>
            <Button variant="aqua" size="lg" className="w-[280px] md:w-[320px] lg:w-[340px] text-lg py-4 font-semibold tracking-wide" asChild>
              <a href="/founder#founder-page-section">Founder Details</a>
            </Button>
          </div>

          {/* Info */}
          <div className="space-y-5">
            <div>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Mr. Venkata Ramana</h3>
              <p className="text-primary font-semibold text-lg mt-1">Founder & Managing Director</p>
            </div>

            <div className="bg-secondary/50 rounded-xl p-5 border-l-4 border-primary">
              <p className="text-base md:text-lg text-foreground italic leading-relaxed">
                "Our vision is to create a world-class aquatic ecosystem where safety, performance, and passion converge to shape the next generation of swimmers."
              </p>
            </div>

            <div className="space-y-3 text-base md:text-lg text-muted-foreground">
              <p>• Certified Aquatic Facility Operator</p>
              <p>• 15+ years in sports management</p>
              <p>• Former competitive swimmer</p>
              <p>• Passionate advocate for water safety education</p>
            </div>

            <div className="inline-block bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-full">
              🏆 Visionary Leader in Aquatic Sports
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
