import { Button } from "@/components/ui/button";

export function SiteNav({ onRegister }: { onRegister: () => void }) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/40 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid size-7 place-items-center rounded-md bg-[image:var(--gradient-primary)] font-display text-sm font-bold text-accent-foreground">
            U
          </span>
          <span className="font-display text-sm font-semibold tracking-tight">
            UIIW <span className="text-muted-foreground">2026</span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <a href="#theme" className="transition-colors hover:text-foreground">
            Theme
          </a>
          <a href="#pillars" className="transition-colors hover:text-foreground">
            Pillars
          </a>
          <a href="#partners" className="transition-colors hover:text-foreground">
            Partners
          </a>
        </nav>
        <Button
          size="sm"
          onClick={onRegister}
          className="bg-[image:var(--gradient-primary)] font-semibold text-accent-foreground hover:opacity-95"
        >
          Daftar
        </Button>
      </div>
    </header>
  );
}
