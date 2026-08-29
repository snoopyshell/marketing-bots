import { SquareArrowOutUpRight } from "lucide-react";
import { buttonClass, cn } from "@/lib/cn";

export function ShareButton({
  slug,
  variant,
}: {
  slug: string;
  variant: "icon" | "label";
}) {
  if (variant === "icon") {
    return (
      <button
        type="button"
        data-slot="button"
        data-share-slug={slug}
        data-share-idle="Copy bot link"
        data-state="idle"
        aria-label="Copy bot link"
        className={cn(buttonClass.base, buttonClass.outline, "size-10")}
      >
        <SquareArrowOutUpRight className="size-4" strokeWidth={1.75} aria-hidden="true" />
      </button>
    );
  }

  return (
    <button
      type="button"
      data-share-slug={slug}
      data-share-idle="Share bot"
      data-state="idle"
      aria-live="polite"
      className={cn(
        buttonClass.base,
        buttonClass.outline,
        "h-10 min-w-[9.5rem] px-4",
      )}
    >
      <SquareArrowOutUpRight className="size-3.5" strokeWidth={1.75} aria-hidden="true" />
      <span data-share-label="true">Share bot</span>
    </button>
  );
}
