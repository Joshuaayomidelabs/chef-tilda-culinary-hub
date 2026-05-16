import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  CreditCard,
  Wallet,
  CalendarClock,
} from "lucide-react";
import { courses } from "@/lib/courses";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/enroll")({
  head: () => ({
    meta: [
      { title: "Enroll — Chef Tilda's Culinary School" },
      {
        name: "description",
        content:
          "Register for catering, baking, pastry, mixology and food business courses at Chef Tilda's. Flexible payment plans via Paystack and Flutterwave.",
      },
      { property: "og:title", content: "Enroll Now — Chef Tilda's" },
      { property: "og:url", content: "/enroll" },
    ],
    links: [{ rel: "canonical", href: "/enroll" }],
  }),
  component: EnrollPage,
});

const PHONE = "2349043375328";

function EnrollPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    course: courses[0].title,
    schedule: "Weekday",
    level: "Beginner",
    message: "",
  });

  const update =
    (k: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) return;
    setSubmitted(true);
  };

  const whatsappLink = () => {
    const text = encodeURIComponent(
      `Hello Chef Tilda's, I'd like to register.\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nCourse: ${form.course}\nSchedule: ${form.schedule}\nLevel: ${form.level}\n\n${form.message}`,
    );
    return `https://wa.me/${PHONE}?text=${text}`;
  };

  return (
    <>
      <section className="py-20 bg-gradient-burgundy text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-gold tracking-[0.3em] uppercase text-xs">Enrollment</span>
          <h1 className="font-serif text-4xl md:text-6xl mt-4">Reserve Your Seat</h1>
          <p className="mt-6 text-primary-foreground/85">
            Fill the form below and we'll confirm your spot. Payment plans available.
          </p>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="bg-card rounded-3xl shadow-luxury p-6 md:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-gold mx-auto flex items-center justify-center mb-4">
                    <CheckCircle2 className="text-burgundy" size={32} />
                  </div>
                  <h3 className="font-serif text-3xl text-burgundy mb-2">Registration Received!</h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you, {form.name.split(" ")[0]}. Our team will contact you within 24 hours.
                  </p>
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 text-white font-medium"
                  >
                    <MessageCircle size={18} /> Continue on WhatsApp
                  </a>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="font-serif text-2xl text-burgundy mb-2">Student Registration</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Full Name" required>
                      <input
                        required
                        value={form.name}
                        onChange={update("name")}
                        className="input"
                      />
                    </Field>
                    <Field label="Email" required>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={update("email")}
                        className="input"
                      />
                    </Field>
                    <Field label="Phone" required>
                      <input
                        required
                        type="tel"
                        value={form.phone}
                        onChange={update("phone")}
                        className="input"
                      />
                    </Field>
                    <Field label="Address">
                      <input value={form.address} onChange={update("address")} className="input" />
                    </Field>
                    <Field label="Selected Course">
                      <select value={form.course} onChange={update("course")} className="input">
                        {courses.map((c) => (
                          <option key={c.slug}>{c.title}</option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Preferred Schedule">
                      <select value={form.schedule} onChange={update("schedule")} className="input">
                        <option>Weekday</option>
                        <option>Weekend</option>
                        <option>Intensive</option>
                      </select>
                    </Field>
                    <Field label="Experience Level">
                      <select value={form.level} onChange={update("level")} className="input">
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                      </select>
                    </Field>
                  </div>
                  <Field label="Message">
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={update("message")}
                      className="input resize-none"
                      placeholder="Tell us about your goals..."
                    />
                  </Field>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <button
                      type="submit"
                      className="px-7 py-3 rounded-full bg-gradient-burgundy text-primary-foreground font-medium shadow-luxury"
                    >
                      Register Now
                    </button>
                    <a
                      href={whatsappLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-7 py-3 rounded-full bg-emerald-500 text-white font-medium inline-flex items-center gap-2"
                    >
                      <MessageCircle size={18} /> Chat on WhatsApp
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>

          <aside className="space-y-5">
            <div className="bg-card rounded-3xl p-6 shadow-soft">
              <h3 className="font-serif text-xl text-burgundy mb-4">Payment Options</h3>
              <div className="space-y-3">
                <PaymentRow icon={Wallet} title="Full Payment" desc="Pay once and save 5%" />
                <PaymentRow
                  icon={CalendarClock}
                  title="Deposit Reservation"
                  desc="Lock your seat with 30% down"
                />
                <PaymentRow
                  icon={CreditCard}
                  title="Installments"
                  desc="Split into 2 or 3 monthly payments"
                />
              </div>
              <div className="mt-5 pt-5 border-t border-border flex items-center gap-2 text-xs text-muted-foreground">
                <ShieldCheck size={14} className="text-gold" /> Secure checkout via Paystack &
                Flutterwave
              </div>
            </div>
            <div className="bg-gradient-burgundy text-primary-foreground rounded-3xl p-6 shadow-luxury">
              <h3 className="font-serif text-xl text-gold mb-2">Need help?</h3>
              <p className="text-sm text-primary-foreground/80 mb-4">
                Speak directly with our admissions team.
              </p>
              <a
                href={`tel:+${PHONE}`}
                className="block text-center px-4 py-2.5 rounded-full bg-gold text-burgundy font-medium"
              >
                +234 904 337 5328
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-charcoal mb-1.5 block">
        {label}
        {required && <span className="text-burgundy"> *</span>}
      </span>
      {children}
      <style>{`
        .input { width: 100%; padding: 0.7rem 1rem; border-radius: 0.75rem; background: var(--color-input); color: var(--color-foreground); border: 1px solid var(--color-border); font-size: 0.9rem; transition: all .2s; }
        .input:focus { outline: none; border-color: var(--color-gold); box-shadow: 0 0 0 3px oklch(0.78 0.14 80 / 0.2); }
      `}</style>
    </label>
  );
}

function PaymentRow({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-xl bg-muted">
      <div className="w-9 h-9 rounded-lg bg-gradient-burgundy flex items-center justify-center shrink-0">
        <Icon size={16} className="text-gold" />
      </div>
      <div>
        <div className="font-medium text-burgundy text-sm">{title}</div>
        <div className="text-xs text-muted-foreground">{desc}</div>
      </div>
    </div>
  );
}
