import { cn } from "@/lib/utils";

/**
 * Angled divider between sections: a solid wedge plus a red slash, like the poster.
 * `from` is the colour of the section above, `to` the section below.
 */
export function DiagonalDivider({
  from = "black",
  to = "white",
  flip = false,
  className,
}: {
  from?: "black" | "white" | "charcoal" | "red";
  to?: "black" | "white" | "charcoal" | "red";
  flip?: boolean;
  className?: string;
}) {
  const fill = {
    black: "var(--brand-black)",
    white: "#ffffff",
    charcoal: "var(--brand-charcoal)",
    red: "var(--brand-red)",
  };
  return (
    <div
      aria-hidden
      className={cn("relative h-[6vw] min-h-8 w-full overflow-hidden", className)}
      style={{ background: fill[from] }}
    >
      <svg
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
        className={cn("absolute inset-0 h-full w-full", flip && "-scale-x-100")}
      >
        <polygon points="0,10 100,0 100,10" fill={fill[to]} />
        <polygon points="0,10 100,1.6 100,0 0,8.4" fill="var(--brand-red)" opacity="0.95" />
      </svg>
    </div>
  );
}

/** Rough red brush-stroke shape for backgrounds */
export function BrushStroke({ className, opacity = 1 }: { className?: string; opacity?: number }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 600 120"
      preserveAspectRatio="none"
      className={cn("pointer-events-none", className)}
      style={{ opacity }}
    >
      <path
        fill="var(--brand-red)"
        d="M8 70 C 60 40, 140 30, 230 26 L 300 18 C 380 12, 470 6, 592 2 L 586 22 C 520 30, 470 34, 430 40 L 560 34 L 548 58 C 470 66, 380 74, 300 82 C 220 92, 120 104, 14 118 L 30 98 L 4 100 C 30 90, 60 84, 90 78 Z"
      />
    </svg>
  );
}
