import { createFileRoute } from "@tanstack/react-router";
import { courses } from "@/lib/courses";
import { CourseCard } from "@/components/CourseCard";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses — Chef Tilda's Culinary School" },
      {
        name: "description",
        content:
          "Explore catering, baking, pastry, mixology, Nigerian and continental cuisine, and food business courses at Chef Tilda's.",
      },
      { property: "og:title", content: "Culinary Courses — Chef Tilda's" },
      { property: "og:url", content: "/courses" },
    ],
    links: [{ rel: "canonical", href: "/courses" }],
  }),
  component: CoursesPage,
});

function CoursesPage() {
  return (
    <>
      <section className="py-20 bg-gradient-burgundy text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-gold tracking-[0.3em] uppercase text-xs">Our Programs</span>
          <h1 className="font-serif text-4xl md:text-6xl mt-4">Find Your Course</h1>
          <p className="mt-6 text-primary-foreground/85">
            Eight specialized programs designed to transform passion into profession.
          </p>
        </div>
      </section>
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="All Courses" title="Programs Built for Mastery" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map((c, i) => (
              <CourseCard key={c.slug} course={c} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
