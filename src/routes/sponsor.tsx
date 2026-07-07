import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/uiiw/SiteNav";
import { Partners } from "@/components/uiiw/Partners";
import { SiteFooter } from "@/components/uiiw/SiteFooter";

export const Route = createFileRoute("/sponsor")({
  head: () => ({
    meta: [
      { title: "Sponsorship | UI Innovation War 2026" },
      {
        name: "description",
        content: "Sponsorship and media partner opportunities for UI Innovation War 2026.",
      },
    ],
  }),
  component: SponsorPage,
});

function SponsorPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <SiteNav />
      <main className="pt-24">
        <Partners />
      </main>
      <SiteFooter />
    </div>
  );
}
