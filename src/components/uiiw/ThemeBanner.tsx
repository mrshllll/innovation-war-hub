import { Sparkles } from "lucide-react";

export function ThemeBanner() {
  return (
    <section id="theme" className="relative px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-14 glow-ring">
          <div className="absolute -inset-px rounded-3xl bg-[image:var(--gradient-mesh)] opacity-70" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              <Sparkles className="size-3.5" /> Grand Theme 2026
            </span>
            <h2 className="mt-6 text-balance font-display text-3xl font-bold leading-tight sm:text-5xl">
              Developing{" "}
              <span className="text-gradient-accent">Sustainable Innovation</span> Through{" "}
              Nature-Based Intelligence and Circular Strategy
            </h2>
            <p className="mt-6 max-w-2xl text-sm text-muted-foreground sm:text-base">
              Build ventures that learn from living systems. Close the loop. Turn waste into
              capital. Compete on impact, not vanity metrics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
