import { Waves, Globe, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/#home" },
  { label: "Founder", href: "/#founder" },
  { label: "Swimming Academy", href: "/swimming-academy" },
  { label: "Sports Arena", href: "/#divisions" },
  { label: "Contact", href: "/#enquiry" },
];

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
              {quickLinks.map((l) => (
                <a key={l.label} href={l.href} className="hover:text-primary transition-colors">{l.label}</a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-foreground">Contact Us</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="https://aquapulsehub.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Globe className="w-4 h-4 text-primary shrink-0" />
                <span>aquapulsehub.in</span>
              </a>
              <a href="mailto:aquapulseswimmingacademy@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span className="break-all">aquapulseswimmingacademy@gmail.com</span>
              </a>
              <a href="https://instagram.com/aquapulse.swimmingacademy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Instagram className="w-4 h-4 text-primary shrink-0" />
                <span>@aquapulse.swimmingacademy</span>
              </a>
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
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-xl bg-[#1877F2]/10 border border-[#1877F2]/20 flex items-center justify-center hover:bg-[#1877F2]/20 transition-all group"
              >
                <Facebook className="w-5 h-5 text-[#1877F2] group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://instagram.com/aquapulse.swimmingacademy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-[#E1306C]/10 border border-[#E1306C]/20 flex items-center justify-center hover:bg-[#E1306C]/20 transition-all group"
              >
                <Instagram className="w-5 h-5 text-[#E1306C] group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-xl bg-[#FF0000]/10 border border-[#FF0000]/20 flex items-center justify-center hover:bg-[#FF0000]/20 transition-all group"
              >
                <Youtube className="w-5 h-5 text-[#FF0000] group-hover:scale-110 transition-transform" />
              </a>
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
