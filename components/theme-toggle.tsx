import { Monitor, Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  return (
    <button
      type="button"
      data-theme-toggle=""
      data-theme="dark"
      aria-label="Toggle theme"
      title="Theme"
      className="relative z-10 inline-flex size-9 shrink-0 items-center justify-center rounded-md text-muted transition-colors hover:bg-hover hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <span data-theme-icon="dark">
        <Moon className="size-4" strokeWidth={1.75} aria-hidden="true" />
      </span>
      <span data-theme-icon="light" hidden>
        <Sun className="size-4" strokeWidth={1.75} aria-hidden="true" />
      </span>
      <span data-theme-icon="system" hidden>
        <Monitor className="size-4" strokeWidth={1.75} aria-hidden="true" />
      </span>
    </button>
  );
}
