import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import cake from "@/assets/gallery-cake.jpg";
import egusi from "@/assets/gallery-egusi.jpg";
import catering from "@/assets/gallery-catering.jpg";
import jollof from "@/assets/hero-jollof.jpg";
import smallchops from "@/assets/course-smallchops.jpg";
import continental from "@/assets/course-continental.jpg";
import mixology from "@/assets/course-mixology.jpg";
import pastry from "@/assets/course-pastry.jpg";
import students1 from "@/assets/students-cooking.jpg";
import students2 from "@/assets/students-spread.jpg";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Chef Tilda's Culinary School" },
      { name: "description", content: "Student practicals, cakes, pastries, catering events and graduation moments at Chef Tilda's." },
      { property: "og:title", content: "Gallery — Chef Tilda's" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const images = [
  { src: students2, alt: "International cuisine spread", span: "row-span-2" },
  { src: cake, alt: "Decorated celebration cake", span: "row-span-2" },
  { src: jollof, alt: "Plated jollof rice", span: "" },
  { src: smallchops, alt: "Small chops platter", span: "" },
  { src: catering, alt: "Catering event", span: "col-span-2" },
  { src: egusi, alt: "Nigerian egusi", span: "" },
  { src: continental, alt: "Continental fine dining", span: "" },
  { src: mixology, alt: "Cocktail mixology", span: "" },
  { src: pastry, alt: "Tiered pastry", span: "" },
  { src: students1, alt: "Students cooking", span: "col-span-2" },
];

function GalleryPage() {
  return (
    <>
      <section className="py-20 bg-gradient-burgundy text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-gold tracking-[0.3em] uppercase text-xs">Gallery</span>
          <h1 className="font-serif text-4xl md:text-6xl mt-4">From Our Kitchen</h1>
          <p className="mt-6 text-primary-foreground/85">Real students. Real plates. Real moments.</p>
        </div>
      </section>
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="Showcase" title="Student Work & Events" />
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className={`relative overflow-hidden rounded-2xl shadow-soft hover:shadow-luxury group ${img.span}`}
              >
                <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-deep/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-primary-foreground text-sm font-medium">{img.alt}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
