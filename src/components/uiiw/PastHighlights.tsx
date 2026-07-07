import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HIGHLIGHTS: { src: string; alt: string; year: string }[] = [
  { src: "/images/past-event-1.jpg", alt: "UIIW 2022 finals stage", year: "2022" },
  { src: "/images/past-event-2.jpg", alt: "UIIW 2023 pitch battle", year: "2023" },
  { src: "/images/past-event-3.jpg", alt: "UIIW 2024 grand final", year: "2024" },
  { src: "/images/past-event-4.jpg", alt: "UIIW 2025 award ceremony", year: "2025" },
  { src: "/images/past-event-5.jpg", alt: "UIIW 2025 networking night", year: "2025" },
];

export function PastHighlights() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      const max = el.scrollWidth - el.clientWidth;
      setProgress(max > 0 ? el.scrollLeft / max : 0);
    };
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="past-highlights" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Archive
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
              Past Highlights
            </h2>
            <p className="mt-3 max-w-lg text-sm text-muted-foreground sm:text-base">
              A look back at the energy, innovation, and ideas from our previous editions.
            </p>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              aria-label="Scroll left"
              onClick={() => scrollBy(-1)}
              className="grid size-10 place-items-center rounded-full border border-border bg-card/60 text-foreground transition hover:border-accent/50 hover:text-accent"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Scroll right"
              onClick={() => scrollBy(1)}
              className="grid size-10 place-items-center rounded-full border border-border bg-card/60 text-foreground transition hover:border-accent/50 hover:text-accent"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {HIGHLIGHTS.map((item, i) => (
            <article
              key={i}
              className="group relative aspect-[4/3] w-[85%] shrink-0 snap-start overflow-hidden rounded-2xl border border-border bg-card sm:w-[55%] md:w-[42%] lg:w-[32%]"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                <span className="font-display text-sm font-semibold text-foreground">
                  UIIW {item.year}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                  Edition
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-4 h-[2px] w-full overflow-hidden rounded-full bg-border">
          <div
            className="h-full rounded-full bg-[image:var(--gradient-primary)] transition-[width] duration-200"
            style={{ width: `${Math.max(12, progress * 100)}%` }}
          />
        </div>
      </div>
    </section>
  );
}
