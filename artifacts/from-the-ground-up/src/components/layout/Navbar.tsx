import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Programs", path: "/programs" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled ? "glass-panel py-3" : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-xl bg-white shadow-sm border border-border group-hover:shadow-md transition-shadow">
              <img 
                src={`${import.meta.env.BASE_URL}images/logo.png`} 
                alt="From The Ground Up Logo" 
                className="w-full h-full object-cover p-1"
              />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-foreground group-hover:text-primary transition-colors">
              From The Ground Up
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative py-1",
                  location === link.path ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.name}
                {location === link.path && (
                  <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
            <Link 
              href="/contact"
              className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              Enroll Now
            </Link>
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
        <div className="md:hidden absolute top-full left-0 right-0 glass-panel border-t border-border/50 animate-in slide-in-from-top-2">
          <div className="px-4 py-4 space-y-4 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-xl text-base font-medium transition-colors",
                  location === link.path 
                    ? "bg-primary/10 text-primary" 
                    : "text-muted-foreground hover:bg-muted/50"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
