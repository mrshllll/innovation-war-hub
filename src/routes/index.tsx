import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/uiiw/SiteNav";
import { Hero } from "@/components/uiiw/Hero";
import { ThemeBanner } from "@/components/uiiw/ThemeBanner";
import { Pillars } from "@/components/uiiw/Pillars";
import { Partners } from "@/components/uiiw/Partners";
import { SiteFooter } from "@/components/uiiw/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UI Innovation War 2026 — Pitch the future" },
      {
        name: "description",
        content:
          "UIIW 2026 — the premier business innovation battle. Develop sustainable innovation through nature-based intelligence and circular strategy.",
      },
      { property: "og:title", content: "UI Innovation War 2026" },
      {
        property: "og:description",
        content:
          "Compete in UIIW 2026 — sustainable, nature-based, circular ventures. Register your team now.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <SiteNav />
      <main>
        <Hero />
        <ThemeBanner />
        <Pillars />
        <Partners />
      </main>
      <SiteFooter />
    </div>
  );
}
