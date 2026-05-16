import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  ChefHat,
  GraduationCap,
  Sparkles,
  Users,
  CheckCircle2,
  Star,
  MapPin,
  Phone,
} from "lucide-react";
import heroImg from "@/assets/hero-jollof.jpg";
import studentsSpread from "@/assets/students-spread.jpg";
import studentsCooking from "@/assets/students-cooking.jpg";
import { courses } from "@/lib/courses";
import { CourseCard } from "@/components/CourseCard";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chef Tilda's Culinary School — Premier Culinary Institute in Lagos" },
      {
        name: "description",
        content:
          "Turn your passion for cooking into a profitable skill. Premium catering, baking, pastry and food business training in Lagos.",
      },
      { property: "og:title", content: "Chef Tilda's Culinary School — Lagos" },
      {
        property: "og:description",
        content:
          "Premium culinary academy in Lagos. Hands-on training, certification, and business mentorship.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const stats = [
  { icon: Users, value: "1,200+", label: "Students Trained" },
  { icon: ChefHat, value: "8", label: "Specialized Courses" },
  { icon: Sparkles, value: "100%", label: "Practical Sessions" },
  { icon: GraduationCap, value: "950+", label: "Certified Graduates" },
];

const reasons = [
  {
    icon: ChefHat,
    title: "Hands-on Practical Training",
    desc: "Every class is built around real kitchen execution — no spectator learning.",
  },
  {
    icon: Award,
    title: "Experienced Instructors",
    desc: "Industry chefs with years of catering and pastry experience.",
  },
  {
    icon: GraduationCap,
    title: "Certification",
    desc: "Receive recognized certificates upon successful completion.",
  },
  {
    icon: Sparkles,
    title: "Modern Facilities",
    desc: "State-of-the-art kitchen equipped for professional training.",
  },
  {
    icon: Users,
    title: "Business Mentorship",
    desc: "Launch and scale your own food business with expert guidance.",
  },
  {
    icon: CheckCircle2,
    title: "Flexible Schedules",
    desc: "Weekday, weekend and intensive options to match your lifestyle.",
  },
];

const testimonials = [
  {
    name: "Adaeze O.",
    role: "Catering Business Owner",
    quote:
      "I started Chef Tilda's with zero experience. Six months later, I'm fully booked for weekends. The training changed my life.",
    rating: 5,
  },
  {
    name: "Tunde A.",
    role: "Pastry Entrepreneur",
    quote:
      "The pastry course was world-class. The instructors don't hold back — they pour everything into you.",
    rating: 5,
  },
  {
    name: "Blessing E.",
    role: "Hotel Chef, Lagos",
    quote:
      "I got hired before I even finished the program. The hands-on approach is exactly what employers want.",
    rating: 5,
  },
];

const faqs = [
  {
    q: "Do I need prior experience?",
    a: "No. Our beginner courses start from absolute basics — knife handling, ingredients, fire safety — and build up from there.",
  },
  {
    q: "Are certificates provided?",
    a: "Yes, every graduate receives a Chef Tilda's Culinary School certificate of completion recognized by industry partners.",
  },
  {
    q: "Are classes physical or online?",
    a: "Classes are physical at our Lagos campus. We believe culinary skill is built hand-to-hand in a real kitchen.",
  },
  {
    q: "How long are courses?",
    a: "Courses range from 2 weeks (small chops) to 8 weeks (professional catering).",
  },
  {
    q: "Can I start my own food business after training?",
    a: "Absolutely. Our Food Business Masterclass and built-in mentorship are designed to help you launch profitably.",
  },
  {
    q: "Are installment payments available?",
    a: "Yes — we offer full payment, deposit reservation and installment plans via Paystack and Flutterwave.",
  },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-burgundy" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-burgundy-deep/95 via-burgundy/70 to-transparent" />

        {/* floating gold orbs */}
        <div className="absolute top-1/4 right-10 w-72 h-72 rounded-full bg-gold/20 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 rounded-full bg-burgundy/30 blur-3xl" />

        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center pt-24 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-primary-foreground"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs tracking-[0.25em] uppercase mb-6">
              <Sparkles size={14} className="text-gold" /> Lagos · Est. 2018
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl leading-[1.05] mb-6">
              Turn Your Passion <br />
              For Cooking Into A <span className="text-gradient-gold italic">Profitable Skill</span>
            </h1>
            <p className="text-lg text-primary-foreground/85 max-w-xl mb-8 leading-relaxed">
              Professional culinary and catering training designed to empower aspiring chefs, bakers
              and food entrepreneurs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/enroll"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-gold text-burgundy font-semibold shadow-gold hover:scale-105 transition-transform"
              >
                Enroll Now <ArrowRight size={18} />
              </Link>
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full glass text-primary-foreground font-medium hover:bg-white/15"
              >
                Explore Courses
              </Link>
            </div>
          </motion.div>

          {/* floating stat cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative h-[500px]"
          >
            <div className="absolute top-0 right-10 w-72 rounded-3xl overflow-hidden shadow-luxury animate-float">
              <img
                src={studentsSpread}
                alt="Students with international cuisine"
                className="w-full h-80 object-cover"
              />
            </div>
            <div
              className="absolute bottom-10 left-0 w-60 rounded-3xl overflow-hidden shadow-luxury animate-float"
              style={{ animationDelay: "1.5s" }}
            >
              <img
                src={studentsCooking}
                alt="Students in training"
                className="w-full h-72 object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 glass-light rounded-2xl p-5 shadow-luxury">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                  <Star className="text-burgundy" size={20} fill="currentColor" />
                </div>
                <div>
                  <div className="font-serif text-2xl text-burgundy">4.9/5</div>
                  <div className="text-xs text-muted-foreground">From 200+ graduates</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-cream py-10 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-card rounded-2xl p-6 shadow-luxury">
            {stats.map((s) => (
              <div key={s.label} className="text-center px-2">
                <s.icon className="mx-auto text-burgundy mb-2" size={22} />
                <div className="font-serif text-2xl md:text-3xl text-burgundy">{s.value}</div>
                <div className="text-[10px] md:text-xs uppercase tracking-wider text-muted-foreground mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-luxury">
              <img
                src={studentsCooking}
                alt="Chef Tilda's students cooking"
                className="w-full h-[520px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-gradient-burgundy text-primary-foreground rounded-3xl p-6 shadow-luxury max-w-xs">
              <div className="font-serif text-4xl text-gold">7+</div>
              <div className="text-sm">Years of training Nigeria's next generation of chefs</div>
            </div>
          </motion.div>
          <div>
            <SectionHeading
              eyebrow="About Us"
              title="A Culinary Institute Built on Excellence"
              subtitle="Chef Tilda's Culinary School is a premier Nigerian academy where passion meets profession. We blend hands-on practical training with real kitchen experience, business mentorship and hospitality professionalism — preparing every student to thrive."
              center={false}
            />
            <ul className="space-y-3">
              {[
                "100% practical, kitchen-first training",
                "Industry-experienced instructors",
                "Entrepreneurship and business empowerment",
                "Recognized certification at completion",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="text-gold shrink-0 mt-0.5" size={20} />
                  <span className="text-charcoal">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-burgundy text-primary-foreground font-medium shadow-luxury"
            >
              Learn More <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section className="py-24 bg-gradient-to-b from-cream to-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Our Programs"
            title="Courses Crafted for Mastery"
            subtitle="From foundational skills to advanced specialization — find the program that matches your dream."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.slice(0, 4).map((c, i) => (
              <CourseCard key={c.slug} course={c} index={i} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border-2 border-burgundy text-burgundy font-medium hover:bg-burgundy hover:text-primary-foreground transition"
            >
              View All Courses <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 bg-burgundy-deep relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover" }}
        />
        <div className="container mx-auto px-4 relative">
          <SectionHeading eyebrow="Why Choose Us" title="The Chef Tilda's Difference" subtitle="" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="glass rounded-2xl p-6 text-primary-foreground hover:bg-white/10 transition"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center mb-4">
                  <r.icon className="text-burgundy" size={22} />
                </div>
                <h3 className="font-serif text-xl mb-2 text-gold">{r.title}</h3>
                <p className="text-sm text-primary-foreground/75 leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <SectionHeading title="" />
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="Student Stories" title="Voices from Our Kitchen" />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-3xl p-8 shadow-soft hover:shadow-luxury transition"
              >
                <div className="flex gap-1 text-gold mb-4">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="font-serif italic text-lg text-charcoal mb-6 leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-gradient-burgundy text-primary-foreground flex items-center justify-center font-serif text-lg">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-burgundy">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Questions, Answered" />
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <motion.details
                key={f.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="group bg-card rounded-2xl p-6 shadow-soft open:shadow-luxury"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-serif text-lg text-burgundy">{f.q}</span>
                  <span className="w-8 h-8 rounded-full bg-burgundy/10 text-burgundy flex items-center justify-center group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">{f.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-burgundy text-primary-foreground relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gold/20 blur-3xl" />
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="font-serif text-4xl md:text-6xl mb-6">Ready to Begin Your Journey?</h2>
          <p className="max-w-xl mx-auto text-primary-foreground/85 mb-8">
            Join hundreds of culinary entrepreneurs trained at Chef Tilda's. Your kitchen story
            starts here.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/enroll"
              className="px-8 py-4 rounded-full bg-gradient-gold text-burgundy font-semibold shadow-gold hover:scale-105 transition"
            >
              Enroll Now
            </Link>
            <a
              href="https://wa.me/2349043375328"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full glass text-primary-foreground font-medium hover:bg-white/15"
            >
              Chat on WhatsApp
            </a>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/80">
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} className="text-gold" /> Lagos, Nigeria
            </span>
            <span className="inline-flex items-center gap-2">
              <Phone size={16} className="text-gold" /> +234 904 337 5328
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
