import type { Metadata } from "next";
import Link from "next/link";
import { categoryCounts } from "@/data/packs";

export const metadata: Metadata = {
  title: "Categories",
  description: "Browse Marketing Bots by category.",
  alternates: { canonical: "/categories" },
};

export default function CategoriesPage() {
  return (
    <main className="flex-1">
      <div className="mx-auto w-full max-w-[1120px] px-5 pt-16 pb-24 sm:px-6 sm:pt-24">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Categories
        </h1>
        <p className="mt-4 max-w-lg text-[16px] text-muted">
          Open a category to filter the directory. Every listing is a Grok Bot
          you add in one click.
        </p>
        <ul className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {categoryCounts().map(({ category, count }) => (
            <li key={category}>
              <Link
                href={`/?category=${category}#bots`}
                className="flex items-center justify-between rounded-xl border border-border bg-card px-5 py-4 transition-colors hover:border-border-strong"
              >
                <span className="font-medium text-foreground">{category}</span>
                <span className="text-[13px] text-subtle">
                  {count} {count === 1 ? "bot" : "bots"}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
