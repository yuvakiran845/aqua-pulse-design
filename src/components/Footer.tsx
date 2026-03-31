import { Waves, Globe, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import logoImg from "@/assets/aqua-pulse-logo.png";

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
            <a href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity shrink-0 min-w-0">
              <div className="w-[58px] h-[58px] md:w-[68px] md:h-[68px] rounded-full overflow-hidden shrink-0 shadow-[0_0_14px_rgba(34,211,238,0.22)]">
                <img
                  src={logoImg}
                  alt="Aqua Pulse Swimming Academy"
                  className="w-full h-full object-cover object-center block"
                  style={{ mixBlendMode: "normal", filter: "none", imageRendering: "-webkit-optimize-contrast", transform: "scale(1.12)", transformOrigin: "center center" }}
                />
              </div>
              <div 
                className="flex flex-col justify-center gap-[2px] leading-[1.1] whitespace-nowrap min-w-0 antialiased"
                style={{ fontFamily: "'Poppins', 'Inter', sans-serif", textRendering: "optimizeLegibility" }}
              >
                <span className="text-[26px] font-[700] tracking-[1px] text-[#22D3EE] uppercase">
                  AQUA PULSE
                </span>
                <span className="text-[14px] font-[500] tracking-[3px] text-[#94A3B8] uppercase">
                  SWIMMING ACADEMY
                </span>
              </div>
            </a>
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

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Vinayak Sagar, Tirupati</span>
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
