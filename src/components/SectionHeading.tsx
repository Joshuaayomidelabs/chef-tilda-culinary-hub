import { motion } from "framer-motion";

export function SectionHeading({ eyebrow, title, subtitle, center = true }: { eyebrow?: string; title: string; subtitle?: string; center?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`max-w-2xl mb-12 ${center ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <span className="inline-block text-xs tracking-[0.3em] uppercase text-gold font-semibold mb-3">{eyebrow}</span>
      )}
      <h2 className="font-serif text-3xl md:text-5xl text-burgundy leading-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground leading-relaxed">{subtitle}</p>}
    </motion.div>
  );
}
