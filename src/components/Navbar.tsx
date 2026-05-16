import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/courses", label: "Courses" },
  { to: "/gallery", label: "Gallery" },
  { to: "/enroll", label: "Enroll" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-light shadow-soft py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Chef Tilda's Culinary School"
            className="h-12 w-12 rounded-full object-cover ring-2 ring-gold/40"
          />
          <div className="hidden sm:block leading-tight">
            <div className="font-serif text-burgundy text-lg font-semibold">Chef Tilda's</div>
            <div className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
              Culinary School
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-charcoal hover:text-burgundy transition-colors relative group"
              activeProps={{ className: "text-burgundy" }}
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        <Link
          to="/enroll"
          className="hidden lg:inline-flex items-center px-6 py-2.5 rounded-full bg-gradient-burgundy text-primary-foreground text-sm font-medium shadow-luxury hover:scale-105 transition-transform"
        >
          Enroll Now
        </Link>

        <button
          aria-label="Toggle menu"
          className="lg:hidden p-2 rounded-full bg-burgundy/10 text-burgundy"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-light border-t border-border mt-2 overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-lg text-charcoal hover:bg-burgundy/5 hover:text-burgundy"
                  activeProps={{ className: "bg-burgundy/10 text-burgundy" }}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/enroll"
                onClick={() => setOpen(false)}
                className="mt-2 text-center px-4 py-3 rounded-full bg-gradient-burgundy text-primary-foreground font-medium"
              >
                Enroll Now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
