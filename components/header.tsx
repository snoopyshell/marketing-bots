import Link from "next/link";
import { LogoMark } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { buttonClass, cn } from "@/lib/cn";
import { site } from "@/lib/site";

export function Header() {
  return (
    <header className="border-b border-border/80">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-3 px-5 py-4 sm:h-16 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6 sm:py-0">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 text-[15px] font-semibold tracking-tight text-foreground"
          >
            <LogoMark className="size-[18px] fill-current" />
            <span>{site.name}</span>
          </Link>
          <div className="flex items-center gap-1.5 sm:hidden">
            <ThemeToggle />
            <Link
              href="/publish"
              data-slot="button"
              className={cn(buttonClass.base, buttonClass.outline, "h-9 px-3.5")}
            >
              Publish a bot
            </Link>
          </div>
        </div>
        <nav
          aria-label="Primary"
          className="flex items-center justify-between gap-5 sm:justify-end sm:gap-6"
        >
          <div className="flex items-center gap-5 text-[13.5px] text-muted">
            <Link href="/#bots" className="transition-colors hover:text-foreground">
              Bots
            </Link>
            <Link href="/categories" className="transition-colors hover:text-foreground">
              Categories
            </Link>
            <Link href="/publish" className="transition-colors hover:text-foreground">
              Publish
            </Link>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <ThemeToggle />
            <Link
              href="/publish"
              data-slot="button"
              className={cn(buttonClass.base, buttonClass.outline, "h-9 px-3.5")}
            >
              Publish a bot
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
