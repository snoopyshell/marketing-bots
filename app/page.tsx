import Link from "next/link";
import { PackDirectory } from "@/components/pack-directory";
import { buttonClass, cn } from "@/lib/cn";
import { site } from "@/lib/site";

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;

  return (
    <main>
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0" />
        <div className="relative mx-auto w-full max-w-[1120px] px-5 pt-20 pb-16 sm:px-6 sm:pt-28 sm:pb-20">
          <h1 className="max-w-[640px] text-[2.75rem] leading-[1.05] font-semibold tracking-tight text-foreground sm:text-6xl lg:text-[4.25rem]">
            Marketing bots you add in one click.
          </h1>
          <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-muted sm:text-[17px]">
            {site.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#bots"
              data-slot="button"
              className={cn(buttonClass.base, buttonClass.primary)}
            >
              Browse bots
            </a>
            <Link
              href="/publish"
              data-slot="button"
              className={cn(buttonClass.base, buttonClass.outline, "h-10 px-4")}
            >
              Publish yours
            </Link>
          </div>
        </div>
      </section>
      <section id="bots" className="scroll-mt-8 pb-24">
        <div className="mx-auto w-full max-w-[1120px] px-5 sm:px-6">
          <PackDirectory category={category} />
        </div>
      </section>
    </main>
  );
}
