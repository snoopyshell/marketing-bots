import Link from "next/link";
import { buttonClass, cn } from "@/lib/cn";

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center">
      <div className="mx-auto w-full max-w-[1120px] px-5 py-24 sm:px-6">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">
          Page not found
        </h1>
        <p className="mt-3 max-w-md text-[15px] text-muted">
          That bot or page is not in the catalog.
        </p>
        <Link
          href="/#bots"
          data-slot="button"
          className={cn(buttonClass.base, buttonClass.primary, "mt-8")}
        >
          Browse bots
        </Link>
      </div>
    </main>
  );
}
