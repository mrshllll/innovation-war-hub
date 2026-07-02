import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="absolute inset-0 bg-mesh" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6">
        <div className="inline-flex flex-col items-center gap-2 rounded-xl border border-accent/40 bg-card/40 p-4 backdrop-blur-sm glow-ring">
          <div className="flex items-center gap-2 font-display text-[clamp(1.5rem,5vw,3rem)] font-bold leading-none tracking-tight text-foreground">
            <span>00</span>
            <span className="text-accent">:</span>
            <span>00</span>
            <span className="text-accent">:</span>
            <span>00</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground sm:gap-3">
            <span>Days</span>
            <span className="text-accent">:</span>
            <span>Hours</span>
            <span className="text-accent">:</span>
            <span>Min</span>
            <span className="text-accent">:</span>
            <span>Sec</span>
          </div>
        </div>

        <h1 className="mt-6 font-display text-[clamp(2.5rem,8vw,5.5rem)] font-bold leading-[0.95] tracking-tight">
          UI Innovation
          <br />
          <span className="text-gradient-accent">War 2026</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg">
          The premier business innovation battle. Founders, builders, and dreamers face off to
          pitch the next generation of sustainable, nature-powered, circular ventures.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#"
            className="group inline-flex h-12 items-center justify-center rounded-md bg-[image:var(--gradient-primary)] px-7 text-base font-semibold text-accent-foreground hover:opacity-95 glow-ring"
          >
            Daftar Sekarang
            <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 border-border bg-card/50 px-7 text-base font-semibold text-foreground backdrop-blur hover:bg-card"
          >
            <a href="#">
              <BookOpen className="mr-1 size-4" /> Access Guidebook
            </a>
          </Button>
        </div>

        <dl className="mx-auto mt-14 grid max-w-2xl grid-cols-3 gap-4 border-t border-border/60 pt-8 text-left sm:gap-8">
          {[
            ["120+", "Teams expected"],
            ["IDR 250M", "Total prize pool"],
            ["6 weeks", "Build & pitch"],
          ].map(([v, l]) => (
            <div key={l}>
              <dt className="font-display text-xl font-bold sm:text-2xl">{v}</dt>
              <dd className="text-xs text-muted-foreground sm:text-sm">{l}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
