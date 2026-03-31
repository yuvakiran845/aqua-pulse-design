import { Waves, Phone, MapPin, Mail, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="container-main py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Waves className="w-6 h-6 text-primary" />
              <span className="font-heading font-bold gradient-aqua-text text-lg">Aqua Pulse</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Professional swimming training & aquatic programs for all ages and skill levels.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-foreground">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              {["Home", "Swimming Academy", "Sports Arena", "Founder", "Contact"].map((l) => (
                <a key={l} href={`#${l.toLowerCase().replace(/ /g, "-")}`} className="hover:text-primary transition-colors">{l}</a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-foreground">Contact Us</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>+91 99999 99999</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>info@aquapulse.in</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Hyderabad, Telangana, India</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-foreground">Follow Us</h4>
            <div className="flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-secondary/50 border border-border/50 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all"
                >
                  <Icon className="w-4 h-4 text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border/50 py-6">
        <div className="container-main text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Aqua Pulse Swimming Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
