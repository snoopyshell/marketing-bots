import Link from "next/link";
import { PackCard } from "@/components/pack-card";
import { categories, filterPacks, isCategory } from "@/data/packs";
import { cn } from "@/lib/cn";

export function PackDirectory({
  category,
}: {
  category?: string | null;
}) {
  const active = isCategory(category) ? category : null;
  const visible = filterPacks(active);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filter bots by category"
        className="flex flex-wrap gap-2"
      >
        <Link
          href="/#bots"
          role="tab"
          aria-selected={!active}
          className={cn(
            "inline-flex h-9 items-center rounded-md border px-3.5 text-[13.5px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            !active
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border-strong bg-transparent text-foreground hover:bg-hover",
          )}
        >
          All
        </Link>
        {categories.map((item) => {
          const selected = active === item;
          return (
            <Link
              key={item}
              href={`/?category=${item}#bots`}
              role="tab"
              aria-selected={selected}
              className={cn(
                "inline-flex h-9 items-center rounded-md border px-3.5 text-[13.5px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                selected
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border-strong bg-transparent text-foreground hover:bg-hover",
              )}
            >
              {item}
            </Link>
          );
        })}
      </div>
      <ul
        className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
        aria-label="Bots"
      >
        {visible.map((pack) => (
          <li key={pack.slug}>
            <PackCard pack={pack} />
          </li>
        ))}
      </ul>
    </div>
  );
}
