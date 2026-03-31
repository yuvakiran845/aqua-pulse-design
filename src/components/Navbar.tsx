import { useState, useEffect, useRef, type CSSProperties } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/aqua-pulse-logo-blue.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Swimming Academy", href: "#divisions" },
  { label: "Sports Arena", href: "#divisions" },
  { label: "Facility Management", href: "#divisions" },
  { label: "Founder", href: "#founder" },
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
        <a href="#home" className="flex items-center gap-3 md:gap-4 shrink-0 min-w-0">
          <img
            src={logoImg}
            alt="Aqua Pulse Swimming Academy"
            className="h-[46px] md:h-[64px] w-auto object-contain shrink-0"
            style={{ imageRendering: "auto", WebkitImageRendering: "optimize-contrast" } as CSSProperties}
          />
          <div className="flex flex-col justify-center leading-[1.1] whitespace-nowrap min-w-0">
            <span className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-bold text-[#22D3EE]">
              AQUA PULSE
            </span>
            <span className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] tracking-[1px] text-[#94A3B8]">
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
              className="text-sm text-muted-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              {l.label}
            </a>
          ))}
          <Button variant="navCta" size="sm" asChild>
            <a href="#enquiry">Register</a>
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
                className="text-sm text-muted-foreground hover:text-primary transition-colors py-2"
              >
                {l.label}
              </a>
            ))}
            <Button variant="navCta" size="sm" asChild>
              <a href="#enquiry" onClick={() => setOpen(false)}>Register</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
