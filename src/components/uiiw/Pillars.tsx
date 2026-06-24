import { Briefcase, Leaf, RefreshCcw } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const PILLARS: { icon: LucideIcon; title: string; body: string; tag: string }[] = [
  {
    icon: Briefcase,
    title: "Business Plan Innovation",
    body: "Reframe markets, models, and unit economics. Defensible pitches that survive due diligence.",
    tag: "Track 01",
  },
  {
    icon: Leaf,
    title: "Sustainable Strategy",
    body: "Bio-inspired thinking, ESG-aligned roadmaps, and ventures that scale with the planet.",
    tag: "Track 02",
  },
  {
    icon: RefreshCcw,
    title: "Circular Tech",
    body: "Closed-loop products, regenerative supply chains, and tech that turns waste into yield.",
    tag: "Track 03",
  },
];

export function Pillars() {
  return (
    <section id="pillars" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Competition tracks
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
              Three battlegrounds. <br className="hidden sm:block" />
              One winner.
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Pick the track that fits your weapon of choice. Judging panels rotate top operators
            from each domain.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {PILLARS.map(({ icon: Icon, title, body, tag }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-2xl glass-card p-6 transition-all hover:-translate-y-1 hover:glow-ring"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
                style={{ background: "var(--gradient-mesh)" }}
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="grid size-11 place-items-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                    <Icon className="size-5" />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {tag}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
