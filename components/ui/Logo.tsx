import Link from "next/link";
import { cn } from "@/lib/utils";
import { Emblem } from "./Emblem";

/**
 * BE-FIT FITNESS wordmark, built in HTML/SVG so it stays sharp and needs no image request.
 * "BE-" follows the surrounding text colour (white on dark, black on light), "FIT" is red.
 * To use the supplied raster logo instead, swap this for next/image with src="/logo.png".
 */
export function Logo({
  className,
  tone = "dark",
  size = "md",
}: {
  className?: string;
  /** dark = for dark backgrounds */
  tone?: "dark" | "light";
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: { word: "text-2xl", sub: "text-[0.5rem] tracking-[0.42em]", emblem: "w-8" },
    md: { word: "text-[1.9rem]", sub: "text-[0.55rem] tracking-[0.5em]", emblem: "w-10" },
    lg: { word: "text-5xl", sub: "text-xs tracking-[0.55em]", emblem: "w-16" },
  }[size];

  return (
    <Link href="/" className={cn("group inline-flex items-center gap-2.5", className)}>
      <Emblem
        className={cn(sizes.emblem, "shrink-0 transition-transform group-hover:-skew-x-12")}
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "skew-title font-display leading-none tracking-tight",
            sizes.word,
            tone === "dark" ? "text-white" : "text-brand-black",
          )}
        >
          BE-<span className="text-brand-red">FIT</span>
        </span>
        <span
          className={cn(
            "mt-0.5 pl-0.5 font-semibold uppercase",
            sizes.sub,
            tone === "dark" ? "text-white/80" : "text-brand-black/80",
          )}
        >
          Fitness
        </span>
        <span className="sr-only"> home</span>
      </span>
    </Link>
  );
}
