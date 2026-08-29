export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <circle cx="12" cy="6.6" r="3.35" />
      <circle cx="7.15" cy="16.15" r="3.35" />
      <circle cx="16.85" cy="16.15" r="3.35" />
    </svg>
  );
}
