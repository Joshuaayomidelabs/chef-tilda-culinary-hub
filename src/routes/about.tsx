import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, ChefHat, Heart, Target } from "lucide-react";
import studentsCooking from "@/assets/students-cooking.jpg";
import studentsSpread from "@/assets/students-spread.jpg";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Chef Tilda's Culinary School" },
      { name: "description", content: "Learn about Chef Tilda's, Lagos's premier culinary academy committed to hands-on training, professionalism and entrepreneurship." },
      { property: "og:title", content: "About — Chef Tilda's Culinary School" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: ChefHat, title: "Mastery", desc: "We teach craft the way it should be taught — by the hand, in the kitchen, every day." },
  { icon: Heart, title: "Passion", desc: "Every recipe carries soul. We nurture the love of food alongside the skill of cooking." },
  { icon: Award, title: "Excellence", desc: "Premium standards in technique, presentation, hygiene and hospitality." },
  { icon: Target, title: "Empowerment", desc: "Beyond skill — we equip you with the business tools to thrive." },
];

function AboutPage() {
  return (
    <>
      <section className="py-24 bg-gradient-burgundy text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-gold tracking-[0.3em] uppercase text-xs">Our Story</span>
          <h1 className="font-serif text-4xl md:text-6xl mt-4">About Chef Tilda's</h1>
          <p className="mt-6 text-primary-foreground/85 leading-relaxed">A premium culinary institute in the heart of Lagos — built on the belief that great food changes lives, careers and families.</p>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.img initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} src={studentsCooking} alt="Students in training" className="rounded-3xl shadow-luxury" loading="lazy" />
          <div>
            <SectionHeading eyebrow="Our Mission" title="Cooking Skill, Built for Real Life" center={false} />
            <p className="text-charcoal leading-relaxed mb-4">From our first class in 2018, Chef Tilda's has been about practical mastery. We don't believe in spectator learning. Every student stands at a station, holds the knife, fires the burner and plates the dish — every single day.</p>
            <p className="text-charcoal leading-relaxed">Our graduates run catering companies, lead hotel kitchens, supply pastries to retailers and host their own brands. That outcome — independent, profitable culinary careers — is the only metric we measure.</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="What Drives Us" title="Our Core Values" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-card rounded-3xl p-6 shadow-soft hover:shadow-luxury transition">
                <div className="w-12 h-12 rounded-xl bg-gradient-burgundy flex items-center justify-center mb-4">
                  <v.icon className="text-gold" size={22} />
                </div>
                <h3 className="font-serif text-xl text-burgundy mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading eyebrow="Founder" title="Meet Chef Tilda" center={false} />
            <p className="text-charcoal leading-relaxed mb-4">A passionate culinary educator with over a decade of experience in catering, hospitality and pastry, Chef Tilda founded the school to give Nigerian aspirants the kind of hands-on, business-ready training she wished she had at the start of her career.</p>
            <p className="text-charcoal leading-relaxed">Her philosophy is simple: teach the technique, share the business, and let the student's passion do the rest.</p>
          </div>
          <motion.img initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} src={studentsSpread} alt="Chef Tilda and students" className="rounded-3xl shadow-luxury" loading="lazy" />
        </div>
      </section>
    </>
  );
}
