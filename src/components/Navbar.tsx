import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Waves } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Swimming Academy", href: "#divisions" },
  { label: "Sports Arena", href: "#divisions" },
  { label: "Facility Management", href: "#divisions" },
  { label: "Founder", href: "#founder" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/50">
      <div className="container-main flex items-center justify-between h-16 md:h-18">
        <a href="#home" className="flex items-center gap-2 group">
          <Waves className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
          <span className="text-lg font-heading font-bold gradient-aqua-text">Aqua Pulse</span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
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
