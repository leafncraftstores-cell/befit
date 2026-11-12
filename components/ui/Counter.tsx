import type { CSSProperties } from "react";

/**
 * Count-up number with ZERO JavaScript: a registered CSS @property integer transitions from 0
 * to `value` when its [data-reveal] ancestor becomes visible (see globals.css).
 * Browsers without @property simply show the final value. Screen readers get the real text.
 */
export function Counter({
  value,
  suffix = "",
  className,
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  return (
    <span className={className}>
      <span aria-hidden className="css-counter" style={{ "--to": value } as CSSProperties} />
      <span aria-hidden>{suffix}</span>
      <span className="sr-only">
        {value}
        {suffix}
      </span>
    </span>
  );
}
