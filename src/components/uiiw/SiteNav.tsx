import { ThemeToggle } from "./ThemeToggle";

const NAV_ITEMS = [
  { label: "Theme", href: "/#theme" },
  { label: "Timeline", href: "/#timeline" },
  { label: "Highlights", href: "/#past-highlights" },
  { label: "Sponsor", href: "/sponsor" },
];

export function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
        <a
          href="/"
          className="group flex min-w-0 items-center gap-2.5 rounded-full border border-border/70 bg-background/80 px-2.5 py-2 shadow-[var(--shadow-card)] backdrop-blur-xl transition hover:border-accent/40"
        >
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[image:var(--gradient-primary)] font-display text-[10px] font-bold tracking-tight text-accent-foreground">
            UIIW
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block font-display text-sm font-semibold tracking-tight">
              UI Innovation Wars
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              2026
            </span>
          </span>
        </a>

        <div className="flex items-center gap-1.5 rounded-full border border-border/70 bg-background/80 p-1.5 shadow-[var(--shadow-card)] backdrop-blur-xl">
          <nav className="hidden items-center gap-1 text-sm font-medium text-muted-foreground md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
          <a
            href="#"
            className="inline-flex h-9 items-center justify-center rounded-md bg-[image:var(--gradient-primary)] px-3.5 text-xs font-semibold text-accent-foreground hover:opacity-95"
          >
            Daftar
          </a>
        </div>
      </div>
    </header>
  );
}
