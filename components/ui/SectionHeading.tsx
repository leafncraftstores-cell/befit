import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { SkewedTitle } from "./SkewedTitle";

/** Eyebrow label with the "////" stripe motif */
export function Eyebrow({
  children,
  tone = "dark",
  both = false,
  className,
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  both?: boolean;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-3 text-xs font-bold tracking-[0.3em] uppercase sm:text-sm",
        tone === "dark" ? "text-brand-red-light" : "text-brand-red",
        className,
      )}
    >
      <span className="stripes" aria-hidden />
      <span className={tone === "dark" ? "text-white" : "text-brand-black"}>{children}</span>
      {both ? <span className="stripes" aria-hidden /> : null}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = "left",
  tone = "dark",
  as = "h2",
  className,
  id,
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  as?: "h1" | "h2" | "h3";
  className?: string;
  id?: string;
}) {
  return (
    <div
      data-reveal
      className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}
    >
      {eyebrow ? (
        <Eyebrow tone={tone} both={align === "center"}>
          {eyebrow}
        </Eyebrow>
      ) : null}
      <SkewedTitle
        as={as}
        id={id}
        highlight={highlight}
        className={cn(
          "mt-4 text-[2.6rem] sm:text-6xl lg:text-7xl",
          tone === "dark" ? "text-white" : "text-brand-black",
        )}
      >
        {title}
      </SkewedTitle>
      {subtitle ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-white/75" : "text-brand-muted-dark",
            align === "center" && "mx-auto max-w-2xl",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
