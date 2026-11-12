import { cn } from "@/lib/utils";

/**
 * BE-FIT emblem: stacked chevron bars forming a stylised "3F" / "BF" mark.
 * Pure SVG, so it's crisp at any size and works for the navbar, favicon and loaders.
 */
export function Emblem({
  className,
  title,
  color = "currentColor",
}: {
  className?: string;
  title?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 66"
      className={cn("text-brand-red", className)}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      fill={color}
    >
      {title ? <title>{title}</title> : null}
      {/* Left "3" */}
      <polygon points="0,0 56,0 56,14 10,14" />
      <polygon points="14,22 56,22 56,36 24,36" />
      <polygon points="28,44 56,44 56,58 38,58" />
      <polygon points="46,0 56,0 56,66 46,58" />
      {/* Right "F" */}
      <polygon points="64,0 120,0 110,14 64,14" />
      <polygon points="64,22 106,22 96,36 64,36" />
      <polygon points="64,0 74,0 74,58 64,66" />
    </svg>
  );
}
