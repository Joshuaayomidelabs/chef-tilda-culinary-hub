import pastry from "@/assets/course-pastry.jpg";
import smallchops from "@/assets/course-smallchops.jpg";
import mixology from "@/assets/course-mixology.jpg";
import continental from "@/assets/course-continental.jpg";
import jollof from "@/assets/hero-jollof.jpg";
import egusi from "@/assets/gallery-egusi.jpg";
import cateringSpread from "@/assets/ctcs-catering-spread.jpg";
import weddingCakes from "@/assets/ctcs-wedding-cakes.jpg";

export type Course = {
  slug: string;
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  price: string;
  image: string;
  description: string;
  format?: "On-Campus" | "Online";
};

export const courses: Course[] = [
  {
    slug: "full-catering",
    title: "Full Catering Class",
    level: "Advanced",
    duration: "2 Months",
    price: "₦350,000",
    image: cateringSpread,
    format: "On-Campus",
    description:
      "Our flagship catering program — Nigerian, continental, pastry, small chops, plating and event execution.",
  },
  {
    slug: "advanced-wedding-cake",
    title: "Advanced Wedding Cake Class",
    level: "Advanced",
    duration: "4 Weeks",
    price: "₦210,000",
    image: weddingCakes,
    format: "On-Campus",
    description:
      "Master tiered wedding cakes — fondant artistry, sugar work, gold leaf finishing and luxury bridal designs.",
  },
  {
    slug: "online-street-food",
    title: "Online Street Food Class",
    level: "Beginner",
    duration: "2 Weeks",
    price: "₦55,000",
    image: smallchops,
    format: "Online",
    description:
      "Learn Nigerian street food favorites from home — shawarma, suya, boli, akara and more.",
  },
  {
    slug: "online-pizza-masterclass",
    title: "Online Pizza Masterclass",
    level: "Beginner",
    duration: "1 Week",
    price: "₦35,000",
    image: continental,
    format: "Online",
    description:
      "Authentic dough, sauces and toppings. Build a pizza menu you can sell from your kitchen.",
  },
  {
    slug: "online-commercial-yogurt",
    title: "Online Commercial Yogurt Class",
    level: "Intermediate",
    duration: "2 Weeks",
    price: "₦55,000",
    image: pastry,
    format: "Online",
    description:
      "Produce thick, creamy commercial yogurt and parfaits — costing, packaging and shelf life included.",
  },
  {
    slug: "nigerian-cuisine",
    title: "Nigerian Cuisine",
    level: "Beginner",
    duration: "4 Weeks",
    price: "₦120,000",
    image: jollof,
    format: "On-Campus",
    description: "Authentic jollof, soups, swallows and traditional regional dishes.",
  },
  {
    slug: "mixology",
    title: "Mixology & Cocktails",
    level: "Intermediate",
    duration: "3 Weeks",
    price: "₦100,000",
    image: mixology,
    format: "On-Campus",
    description: "Classic and signature cocktails, bar service and event mixology.",
  },
  {
    slug: "food-business",
    title: "Food Business Masterclass",
    level: "Advanced",
    duration: "4 Weeks",
    price: "₦140,000",
    image: egusi,
    format: "On-Campus",
    description: "Branding, pricing, social media and how to scale your food business.",
  },
];
