import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Clock, ArrowRight } from "lucide-react";
import type { Course } from "@/lib/courses";

export function CourseCard({ course, index = 0 }: { course: Course; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-luxury transition-all duration-500 hover:-translate-y-2"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gold text-burgundy text-xs font-semibold">
          {course.level}
        </span>
        {course.format === "Online" && (
          <span className="absolute top-14 left-4 px-3 py-1 rounded-full bg-burgundy text-primary-foreground text-[10px] uppercase tracking-wider font-semibold">
            Online
          </span>
        )}
        <div className="absolute top-4 right-4 glass text-primary-foreground px-3 py-1 rounded-full text-xs flex items-center gap-1">
          <Clock size={12} /> {course.duration}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl text-burgundy mb-2">{course.title}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{course.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-gold font-semibold">{course.price}</span>
          <Link
            to="/enroll"
            className="inline-flex items-center gap-1 text-sm font-medium text-burgundy group/btn"
          >
            Enroll{" "}
            <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
