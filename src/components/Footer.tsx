import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Phone, Mail, MapPin, ChefHat } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-burgundy text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <ChefHat className="text-gold" />
            <span className="font-serif text-xl">Chef Tilda's</span>
          </div>
          <p className="text-sm text-primary-foreground/75 leading-relaxed">
            A premier Nigerian culinary academy turning passion for cooking into profitable,
            world-class skill.
          </p>
          <div className="flex gap-3 mt-5">
            <a
              href="#"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-gold hover:text-burgundy transition"
            >
              <Instagram size={16} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-gold hover:text-burgundy transition"
            >
              <Facebook size={16} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg text-gold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            {[
              { to: "/about", label: "About" },
              { to: "/courses", label: "Courses" },
              { to: "/gallery", label: "Gallery" },
              { to: "/enroll", label: "Enroll" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-gold transition">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg text-gold mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="text-gold mt-0.5 shrink-0" /> 6 Aje Street, Ponle Bus
              Stop, Off Egbeda-Iyana Ipaja Road, Lagos
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-gold" />{" "}
              <a href="tel:+2349043375328" className="hover:text-gold">
                +234 904 337 5328
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-gold" /> hello@cheftildas.com
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg text-gold mb-4">Newsletter</h4>
          <p className="text-sm text-primary-foreground/75 mb-3">
            Recipes, tips & enrollment news.
          </p>
          <form className="flex glass rounded-full overflow-hidden p-1">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-transparent px-4 py-2 text-sm placeholder:text-primary-foreground/50 focus:outline-none"
            />
            <button className="px-4 py-2 rounded-full bg-gold text-burgundy text-sm font-semibold">
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row gap-2 items-center justify-between text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Chef Tilda's Culinary School. All rights reserved.</p>
          <p>Crafted with passion in Lagos, Nigeria.</p>
        </div>
      </div>
    </footer>
  );
}
