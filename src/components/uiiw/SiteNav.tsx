export function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/40 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="font-display text-sm font-semibold tracking-tight">
            UIIW <span className="text-muted-foreground">2026</span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <a href="#theme" className="transition-colors hover:text-foreground">
            Theme
          </a>
          <a href="#timeline" className="transition-colors hover:text-foreground">
            Timeline
          </a>
          <a href="#sponsor" className="transition-colors hover:text-foreground">
            Sponsor
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#"
            className="inline-flex h-8 items-center justify-center rounded-md bg-[image:var(--gradient-primary)] px-3 text-xs font-semibold text-accent-foreground hover:opacity-95"
          >
            Daftar
          </a>
        </div>
      </div>
    </header>
  );
}
