export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          <span className="grid size-6 place-items-center rounded-md bg-[image:var(--gradient-primary)] font-display text-xs font-bold text-accent-foreground">
            U
          </span>
          <span className="font-display text-sm font-semibold">UIIW 2026</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © 2026 UI Innovation War. Built for builders.
        </p>
      </div>
    </footer>
  );
}
