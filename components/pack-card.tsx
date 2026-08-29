import Link from "next/link";
import { AddButton } from "@/components/add-button";
import { ShareButton } from "@/components/share-button";
import type { Pack } from "@/data/packs";

export function PackCard({ pack }: { pack: Pack }) {
  const skillCount = pack.skills.length;

  return (
    <article className="flex h-full flex-col rounded-xl border border-border bg-card p-5 sm:p-6">
      <Link href={`/bots/${pack.slug}`} className="block rounded-sm">
        <p className="text-[11px] font-medium tracking-[0.14em] text-subtle uppercase">
          {pack.category}
        </p>
        <h3 className="mt-4 text-[1.65rem] leading-none font-semibold tracking-tight text-foreground">
          {pack.name}
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">{pack.card}</p>
      </Link>
      <p className="mt-5 text-[13px] text-subtle">
        {skillCount} {skillCount === 1 ? "capability" : "capabilities"}
      </p>
      <div className="mt-auto flex items-center gap-2 pt-6">
        <AddButton pack={pack} />
        <ShareButton slug={pack.slug} variant="icon" />
      </div>
    </article>
  );
}
