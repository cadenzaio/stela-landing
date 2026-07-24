type StelaMarkVariant = "full" | "compact";
type StelaMarkSize = "small" | "nav" | "display" | "hero" | "favicon-16" | "favicon-24" | "favicon-32";
type StelaMarkTone = "light" | "dark" | "etched";

export function StelaMark({
  variant = "compact",
  size = "nav",
  tone = "light",
  label,
}: {
  variant?: StelaMarkVariant;
  size?: StelaMarkSize;
  tone?: StelaMarkTone;
  label?: string;
}) {
  return (
    <span
      className={`stela-mark stela-mark-${variant} stela-mark-${size} stela-mark-${tone}`}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? "img" : undefined}
    >
      <svg viewBox="0 0 100 100" fill="none" aria-hidden="true">
        <path d="M50 9L91 50L50 91L9 50Z" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
        {variant === "full" && (
          <path d="M50 28L72 50L50 72L28 50Z" stroke="currentColor" strokeWidth="2" strokeLinecap="square" opacity="0.72" />
        )}
        <path d="M43 53L68 46" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
        <circle className="stela-mark-origin-cutout" cx="43" cy="53" r="4" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="43" cy="53" r="1.5" fill="currentColor" />
      </svg>
    </span>
  );
}
