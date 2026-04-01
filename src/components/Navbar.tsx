import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/aqua-pulse-logo.png";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Founder", href: "/founder#founder-page-section" },
  { label: "Swimming Academy", href: "/swimming-academy" },
  { label: "Hub Sports Arena", href: "/hub-sports-arena" },
  { label: "Facility Management", href: "/facility-management" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/50">
      <div className="container-main flex items-center justify-between min-h-[80px] py-2.5">
        <a href="/" className="flex items-center gap-2 sm:gap-3 shrink-0 min-w-0">
          <div className="w-[48px] h-[48px] sm:w-[58px] sm:h-[58px] md:w-[68px] md:h-[68px] rounded-full overflow-hidden shrink-0 shadow-[0_0_14px_rgba(34,211,238,0.22)] border border-cyan-500/20">
            <img
              src={logoImg}
              alt="Aqua Pulse Swimming Academy"
              className="w-full h-full object-cover object-center block"
              style={{ mixBlendMode: "normal", filter: "none", imageRendering: "-webkit-optimize-contrast", transform: "scale(1.12)", transformOrigin: "center center" }}
            />
          </div>
          <div 
            className="flex flex-col justify-center gap-[1px] leading-[1.1] whitespace-nowrap min-w-0 antialiased"
            style={{ fontFamily: "'Poppins', 'Inter', sans-serif", textRendering: "optimizeLegibility" }}
          >
            <span className="text-base sm:text-xl md:text-2xl font-[700] tracking-[1px] text-[#22D3EE] uppercase leading-none">
              AQUA PULSE
            </span>
            <span className="text-[9px] sm:text-[11px] md:text-xs font-[500] tracking-[2px] text-[#94A3B8] uppercase">
              SWIMMING ACADEMY
            </span>
          </div>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8 flex-1 justify-end">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[15px] font-bold text-foreground/80 hover:text-[#22D3EE] transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#22D3EE] after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              {l.label}
            </a>
          ))}
          <Button variant="navCta" size="sm" asChild>
            <a href="/register">Student Registration</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden glass-effect border-t border-border/50 py-4">
          <div className="container-main flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-bold text-foreground/90 hover:text-[#22D3EE] transition-colors py-2 border-b border-white/5"
              >
                {l.label}
              </a>
            ))}
            <Button variant="navCta" size="sm" asChild>
              <a href="/register" onClick={() => setOpen(false)}>Student Registration</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
