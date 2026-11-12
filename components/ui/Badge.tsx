import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  children,
  variant = "red",
  className,
}: {
  children: ReactNode;
  variant?: "red" | "outline" | "dark" | "placeholder";
  className?: string;
}) {
  const variants = {
    red: "bg-brand-red text-white",
    outline: "border border-white/30 text-white",
    dark: "bg-brand-black text-white",
    placeholder: "border border-dashed border-amber-400/70 bg-amber-400/10 text-amber-300",
  };
  return (
    <span
      className={cn(
        "inline-flex -skew-x-12 items-center gap-1.5 px-3 py-1 text-xs font-bold tracking-[0.18em] uppercase",
        variants[variant],
        className,
      )}
    >
      <span className="inline-flex skew-x-12 items-center gap-1.5">{children}</span>
    </span>
  );
}
