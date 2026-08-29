import { buttonClass, cn } from "@/lib/cn";
import type { Pack } from "@/data/packs";

export function AddButton({
  pack,
  className,
}: {
  pack: Pack;
  className?: string;
}) {
  if (!pack.shareUrl) {
    return (
      <button
        type="button"
        disabled
        data-slot="button"
        aria-label="Coming soon — this Grok Bot template is not published yet"
        className={cn(buttonClass.base, buttonClass.comingSoon, className)}
      >
        Coming soon
      </button>
    );
  }

  return (
    <a
      href={pack.shareUrl}
      target="_blank"
      rel="noopener noreferrer"
      data-slot="button"
      aria-label={`Add ${pack.name} in Grok Bot`}
      className={cn(buttonClass.base, buttonClass.primary, className)}
    >
      Add
    </a>
  );
}
