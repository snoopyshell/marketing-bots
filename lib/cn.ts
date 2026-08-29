export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export const buttonClass = {
  base: "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0",
  primary:
    "bg-primary text-primary-foreground hover:opacity-90 h-10 px-4 disabled:opacity-40",
  comingSoon:
    "bg-primary text-primary-foreground hover:opacity-90 h-10 px-4 disabled:bg-primary-disabled disabled:text-primary-disabled-foreground disabled:opacity-100",
  outline:
    "border border-border-strong bg-transparent text-foreground hover:bg-hover disabled:opacity-40",
};
