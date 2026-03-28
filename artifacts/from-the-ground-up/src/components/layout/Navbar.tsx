import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Programs", path: "/programs" },
    { name: "Careers", path: "/careers" },
    { name: "Earn", path: "/earn" },
    { name: "Resources", path: "/resources" },
  ];

  const aboutLinks = [
    { name: "About Us", path: "/about" },
    { name: "Governance", path: "/governance" },
    { name: "Bylaws", path: "/bylaws" },
    { name: "FAQ", path: "/faq" },
    { name: "100-Year Roadmap", path: "/roadmap" },
    { name: "DC Startup Guide", path: "/startup-guide" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
        isScrolled ? "glass-panel py-3" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative w-12 h-12 overflow-hidden bg-white/90 shadow-xl border border-white/50 group-hover:shadow-2xl transition-all duration-300 flex items-center justify-center" style={{ borderRadius: '4px 16px 4px 16px' }}>
              <img 
                src={`${import.meta.env.BASE_URL}images/logo.png`} 
                alt="From The Ground Up Logo" 
                className="w-full h-full object-contain p-1.5 transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-xl tracking-widest text-foreground uppercase leading-none group-hover:text-primary transition-colors">
                From The
              </span>
              <span className="font-sans font-bold text-sm tracking-[0.2em] text-foreground/70 uppercase leading-none mt-1">
                Ground Up
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  "text-sm font-bold uppercase tracking-wider transition-colors hover:text-primary relative py-2",
                  location === link.path ? "text-primary" : "text-foreground/80"
                )}
              >
                {link.name}
              </Link>
            ))}

            <div 
              className="relative"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button 
                className={cn(
                  "text-sm font-bold uppercase tracking-wider transition-colors hover:text-primary relative py-2 flex items-center gap-1",
                  aboutLinks.some(l => location === l.path) ? "text-primary" : "text-foreground/80"
                )}
              >
                About <ChevronDown size={14} className={cn("transition-transform", aboutDropdownOpen && "rotate-180")} />
              </button>
              
              {aboutDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-56 pt-2 animate-in fade-in slide-in-from-top-2">
                  <div className="glass-panel rounded-xl overflow-hidden py-2 flex flex-col shadow-2xl">
                    {aboutLinks.map((link) => (
                      <Link
                        key={link.path}
                        href={link.path}
                        className={cn(
                          "px-4 py-2 text-sm font-semibold transition-colors hover:bg-primary/10 hover:text-primary",
                          location === link.path ? "text-primary bg-primary/5" : "text-foreground/80"
                        )}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className={cn(
                "text-sm font-bold uppercase tracking-wider transition-colors hover:text-primary relative py-2",
                location === "/contact" ? "text-primary" : "text-foreground/80"
              )}
            >
              Contact
            </Link>

            <div className="flex items-center gap-4 ml-4">
              <Link 
                href="/donate"
                className="px-6 py-2.5 rounded-none border-2 border-primary text-primary font-bold uppercase tracking-wider text-sm hover:bg-primary hover:text-white transition-all duration-300"
              >
                Donate
              </Link>
              <Link 
                href="/contact"
                className="px-6 py-2.5 rounded-none bg-foreground text-background font-bold uppercase tracking-wider text-sm hover:bg-primary hover:text-primary-foreground shadow-xl transition-all duration-300"
              >
                Enroll Now
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-panel border-t border-border/50 animate-in slide-in-from-top-2 max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="px-4 py-4 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-xl text-base font-bold uppercase tracking-wider transition-colors",
                  location === link.path 
                    ? "bg-primary/10 text-primary" 
                    : "text-foreground/80 hover:bg-muted/50"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "px-4 py-3 rounded-xl text-base font-bold uppercase tracking-wider transition-colors",
                location === "/contact" ? "bg-primary/10 text-primary" : "text-foreground/80 hover:bg-muted/50"
              )}
            >
              Contact
            </Link>

            <div className="mt-3 mb-1 px-4">
              <span className="text-xs font-bold uppercase tracking-widest text-foreground/40">About & Organization</span>
            </div>
            {aboutLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors",
                  location === link.path 
                    ? "bg-primary/10 text-primary" 
                    : "text-foreground/70 hover:bg-muted/50"
                )}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 mt-3 border-t border-border/30 flex flex-col gap-3">
              <Link 
                href="/donate"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 text-center border-2 border-primary text-primary font-bold uppercase tracking-wider text-sm hover:bg-primary hover:text-white transition-all"
              >
                Donate
              </Link>
              <Link 
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 text-center bg-foreground text-background font-bold uppercase tracking-wider text-sm hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}