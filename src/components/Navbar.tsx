import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
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
  const [activeNavItem, setActiveNavItem] = useState<string | null>(null);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Initialize active tab based on path, but respect "no default blue for Home"
    const currentPath = location.pathname;
    if (currentPath === "/" || currentPath.includes("index.html")) {
      // Don't set Home as active by default to satisfy user request
      setActiveNavItem(null);
    } else {
      const active = navLinks.find(l => l.href !== "/" && !l.href.startsWith("/#") && currentPath.startsWith(l.href.split('#')[0]));
      setActiveNavItem(active?.label || null);
    }
  }, [location.pathname]);

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
        <div className="hidden lg:flex items-center gap-3 flex-1 justify-end">
          {navLinks.map((l) => {
            const isHighlighted = activeNavItem === l.label;

            return (
              <Link
                key={l.label}
                to={l.href}
                onClick={() => setActiveNavItem(l.label)}
                className={cn(
                  "px-4 py-2.5 text-[14px] font-bold tracking-wide rounded-xl transition-all duration-300 whitespace-nowrap border flex items-center justify-center active:scale-95",
                  isHighlighted 
                    ? "bg-[#22D3EE] text-[#0F172A] border-[#22D3EE] shadow-[0_0_20px_rgba(34,211,238,0.35)]" 
                    : "bg-[#0F172A]/30 text-[#CBD5E1] border-white/5 hover:border-[#22D3EE]/30 hover:bg-[#22D3EE]/10 hover:text-[#22D3EE] hover:shadow-[0_0_15px_rgba(34,211,238,0.15)]"
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden glass-effect border-t border-border/50 py-6 animate-fade-in">
          <div className="container-main flex flex-col gap-3">
            {navLinks.map((l) => {
              const isHighlighted = activeNavItem === l.label;
              return (
                <Link
                  key={l.label}
                  to={l.href}
                  onClick={() => {
                    setActiveNavItem(l.label);
                    setOpen(false);
                  }}
                  className={cn(
                    "text-base font-bold px-5 py-3.5 rounded-2xl transition-all duration-200 border flex items-center",
                    isHighlighted 
                      ? "bg-[#22D3EE] text-[#0F172A] border-[#22D3EE] shadow-[0_0_15px_rgba(34,211,238,0.25)]" 
                      : "bg-white/5 text-foreground/90 border-white/5 hover:bg-white/10 hover:text-[#22D3EE]"
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
