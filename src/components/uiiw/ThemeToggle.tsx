import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (light) root.classList.add("light");
    else root.classList.remove("light");
  }, [light]);

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setLight((v) => !v)}
      className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border/60 bg-background/40 text-foreground transition-colors hover:text-accent"
    >
      {light ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </button>
  );
}
