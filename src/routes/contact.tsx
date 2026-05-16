import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Instagram, MessageCircle, Send } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Chef Tilda's Culinary School" },
      {
        name: "description",
        content:
          "Visit Chef Tilda's at 6 Aje Street, Ponle Bus Stop, Off Egbeda-Iyana Ipaja Road, Lagos. Call +234 904 337 5328.",
      },
      { property: "og:title", content: "Contact — Chef Tilda's" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="py-20 bg-gradient-burgundy text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-gold tracking-[0.3em] uppercase text-xs">Get in Touch</span>
          <h1 className="font-serif text-4xl md:text-6xl mt-4">Visit Our Kitchen</h1>
          <p className="mt-6 text-primary-foreground/85">
            We'd love to hear from you — call, message or stop by the campus.
          </p>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10">
          <div className="space-y-5">
            <SectionHeading eyebrow="Reach Us" title="Contact Details" center={false} />
            <ContactRow
              icon={MapPin}
              title="Address"
              body="6 Aje Street, Ponle Bus Stop, Off Egbeda-Iyana Ipaja Road, Lagos, Nigeria"
            />
            <ContactRow
              icon={Phone}
              title="Phone"
              body={
                <a href="tel:+2349043375328" className="hover:text-burgundy">
                  +234 904 337 5328
                </a>
              }
            />
            <ContactRow
              icon={MessageCircle}
              title="WhatsApp"
              body={
                <a
                  href="https://wa.me/2349043375328"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-burgundy"
                >
                  Chat with us
                </a>
              }
            />
            <ContactRow
              icon={Mail}
              title="Email"
              body={
                <a href="mailto:hello@cheftildas.com" className="hover:text-burgundy">
                  hello@cheftildas.com
                </a>
              }
            />
            <ContactRow
              icon={Instagram}
              title="Instagram"
              body={
                <a href="#" className="hover:text-burgundy">
                  @cheftildasculinaryschool
                </a>
              }
            />

            <div className="rounded-3xl overflow-hidden shadow-luxury aspect-[4/3] mt-6">
              <iframe
                title="Map"
                src="https://www.google.com/maps?q=Egbeda+Iyana+Ipaja,+Lagos,+Nigeria&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="bg-card rounded-3xl shadow-luxury p-6 md:p-10">
            <h2 className="font-serif text-2xl text-burgundy mb-6">Quick Message</h2>
            {sent ? (
              <div className="text-center py-12">
                <div className="font-serif text-3xl text-burgundy">Message sent!</div>
                <p className="text-muted-foreground mt-2">We'll get back to you within a day.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-4"
              >
                <input
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-gold focus:outline-none"
                />
                <input
                  required
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-gold focus:outline-none"
                />
                <input
                  placeholder="Phone (optional)"
                  className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-gold focus:outline-none"
                />
                <textarea
                  required
                  rows={5}
                  placeholder="Your message"
                  className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-gold focus:outline-none resize-none"
                />
                <button className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-burgundy text-primary-foreground font-medium shadow-luxury">
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  body: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4 bg-card rounded-2xl p-4 shadow-soft">
      <div className="w-11 h-11 rounded-xl bg-gradient-burgundy flex items-center justify-center shrink-0">
        <Icon size={18} className="text-gold" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{title}</div>
        <div className="text-charcoal">{body}</div>
      </div>
    </div>
  );
}
