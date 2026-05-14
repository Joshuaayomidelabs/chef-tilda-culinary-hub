import pastry from "@/assets/course-pastry.jpg";
import smallchops from "@/assets/course-smallchops.jpg";
import mixology from "@/assets/course-mixology.jpg";
import continental from "@/assets/course-continental.jpg";
import jollof from "@/assets/hero-jollof.jpg";
import egusi from "@/assets/gallery-egusi.jpg";
import cake from "@/assets/gallery-cake.jpg";
import catering from "@/assets/gallery-catering.jpg";

export type Course = {
  slug: string;
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  price: string;
  image: string;
  description: string;
};

export const courses: Course[] = [
  { slug: "professional-catering", title: "Professional Catering", level: "Advanced", duration: "8 Weeks", price: "₦250,000", image: catering, description: "Master large-scale event catering, menu planning, costing and on-site execution." },
  { slug: "baking-pastry", title: "Baking & Pastry", level: "Intermediate", duration: "6 Weeks", price: "₦180,000", image: pastry, description: "From breads and viennoiserie to laminated doughs and modern pastries." },
  { slug: "nigerian-cuisine", title: "Nigerian Cuisine", level: "Beginner", duration: "4 Weeks", price: "₦120,000", image: jollof, description: "Authentic jollof, soups, swallows and traditional regional dishes." },
  { slug: "continental-dishes", title: "Continental Dishes", level: "Intermediate", duration: "5 Weeks", price: "₦160,000", image: continental, description: "Pasta, sauces, grills, plating and modern fine-dining technique." },
  { slug: "cake-decoration", title: "Cake Decoration", level: "Advanced", duration: "4 Weeks", price: "₦150,000", image: cake, description: "Tiered cakes, fondant artistry, sugar flowers and gold leaf finishing." },
  { slug: "small-chops", title: "Small Chops & Finger Foods", level: "Beginner", duration: "2 Weeks", price: "₦80,000", image: smallchops, description: "Puff puff, samosa, spring rolls, gizdodo and event-ready packaging." },
  { slug: "mixology", title: "Mixology & Cocktails", level: "Intermediate", duration: "3 Weeks", price: "₦100,000", image: mixology, description: "Classic and signature cocktails, bar service and event mixology." },
  { slug: "food-business", title: "Food Business Masterclass", level: "Advanced", duration: "4 Weeks", price: "₦140,000", image: egusi, description: "Branding, pricing, social media and how to scale your food business." },
];
