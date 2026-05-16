import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-7xl text-burgundy">404</h1>
        <h2 className="mt-4 font-serif text-2xl text-charcoal">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for has wandered off the menu.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-burgundy px-6 py-3 text-sm font-medium text-primary-foreground shadow-luxury"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-2xl text-burgundy">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">Please try again in a moment.</p>
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-burgundy px-6 py-3 text-sm font-medium text-primary-foreground"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Chef Tilda's Culinary School — Premier Culinary Institute in Lagos" },
      {
        name: "description",
        content:
          "Premium Nigerian culinary academy offering professional catering, baking, pastry, mixology and food business training in Lagos. Turn your passion into profit.",
      },
      { name: "author", content: "Chef Tilda's Culinary School" },
      { name: "theme-color", content: "#581c2e" },
      {
        property: "og:title",
        content: "Chef Tilda's Culinary School — Premier Culinary Institute in Lagos",
      },
      {
        property: "og:description",
        content:
          "Premium Nigerian culinary academy offering professional catering, baking, pastry, mixology and food business training in Lagos. Turn your passion into profit.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Chef Tilda's Culinary School" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Chef Tilda's Culinary School — Premier Culinary Institute in Lagos",
      },
      {
        name: "twitter:description",
        content:
          "Premium Nigerian culinary academy offering professional catering, baking, pastry, mixology and food business training in Lagos. Turn your passion into profit.",
      },
      {
        property: "og:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a4709c01-debf-4519-81fb-63c476493e92/id-preview-af5640cb--6cc38c2e-bb79-49d7-b0a0-5e78ee0af65d.lovable.app-1778758733852.png",
      },
      {
        name: "twitter:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a4709c01-debf-4519-81fb-63c476493e92/id-preview-af5640cb--6cc38c2e-bb79-49d7-b0a0-5e78ee0af65d.lovable.app-1778758733852.png",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "Chef Tilda's Culinary School",
          description:
            "Premier culinary, catering and food business training institute in Lagos, Nigeria.",
          telephone: "+234 904 337 5328",
          address: {
            "@type": "PostalAddress",
            streetAddress: "6 Aje Street, Ponle Bus Stop, Off Egbeda-Iyana Ipaja Road",
            addressLocality: "Lagos",
            addressCountry: "NG",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </QueryClientProvider>
  );
}
