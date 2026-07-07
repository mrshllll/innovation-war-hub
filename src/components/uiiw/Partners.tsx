import { Mail } from "lucide-react";

const SPONSOR_PLACEHOLDERS = [
  { label: "Sponsor 1", id: "sponsor-1" },
  { label: "Sponsor 2", id: "sponsor-2" },
  { label: "Sponsor 3", id: "sponsor-3" },
  { label: "Sponsor 4", id: "sponsor-4" },
  { label: "Sponsor 5", id: "sponsor-5" },
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

              <div className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-5">
                {SPONSOR_PLACEHOLDERS.map((sponsor) => (
                  <div
                    key={sponsor.id}
                    className="flex aspect-[3/2] items-center justify-center rounded-xl border border-border bg-muted/40 px-3 text-center text-xs font-medium text-muted-foreground"
                  >
                    {sponsor.label}
                  </div>
                ))}
              </div>
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
      </div>
    </section>
  );
}

