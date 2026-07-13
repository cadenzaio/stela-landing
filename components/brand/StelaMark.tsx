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
      <span className="stela-mark-outline" />
      <span className="stela-mark-inner" />
      <span className="stela-mark-trace" />
      <span className="stela-mark-point" />
    </span>
  );
}
