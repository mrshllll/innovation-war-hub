import { Image, Mail } from "lucide-react";

const SPONSOR_PLACEHOLDERS = [
  { label: "Sponsor 1", id: "sponsor-1", tone: "from-accent/20 to-primary/10" },
  { label: "Sponsor 2", id: "sponsor-2", tone: "from-sky-400/20 to-accent/10" },
  { label: "Sponsor 3", id: "sponsor-3", tone: "from-amber-300/25 to-primary/10" },
  { label: "Sponsor 4", id: "sponsor-4", tone: "from-rose-300/20 to-accent/10" },
  { label: "Sponsor 5", id: "sponsor-5", tone: "from-emerald-300/20 to-cyan-300/10" },
  { label: "Sponsor 6", id: "sponsor-6", tone: "from-violet-300/20 to-accent/10" },
];

export function Partners() {
  return (
    <section id="sponsor" className="px-4 pb-24 pt-8 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-12 sm:px-12 sm:py-16">
          <div className="absolute inset-0 bg-mesh opacity-60" />
          <div className="relative grid gap-8 sm:grid-cols-[1.4fr_1fr] sm:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Collaborate with UIIW
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
                Sponsorship & Media Partners
              </h2>
              <p className="mt-4 max-w-lg text-sm text-muted-foreground sm:text-base">
                Put your brand in front of Southeast Asia's most ambitious founders. Co-create
                challenges, host workshops, or run a stage.
              </p>
            </div>
            <div className="flex justify-start sm:justify-end">
              <a
                href="#"
                className="group inline-flex h-12 items-center justify-center rounded-md bg-[image:var(--gradient-primary)] px-7 text-base font-semibold text-accent-foreground hover:opacity-95 glow-ring"
              >
                <Mail className="mr-1 size-4" /> Connect with Us
              </a>
            </div>
          </div>
        </div>

        <div className="mt-7">
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Sponsor Gallery
              </p>
              <h3 className="mt-1 font-display text-2xl font-bold">Partner placeholders</h3>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {SPONSOR_PLACEHOLDERS.map((sponsor) => (
              <div
                key={sponsor.id}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]"
              >
                <div
                  className={`flex aspect-[4/3] items-center justify-center bg-gradient-to-br ${sponsor.tone}`}
                >
                  <div className="grid size-12 place-items-center rounded-full border border-border/70 bg-background/70 text-muted-foreground backdrop-blur">
                    <Image className="size-5" />
                  </div>
                </div>
                <div className="border-t border-border px-3 py-2 text-center text-xs font-semibold text-muted-foreground transition-colors group-hover:text-foreground">
                  {sponsor.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
