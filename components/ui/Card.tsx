import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/** Base surface card with lift/tilt hover */
export function Card({
  children,
  className,
  tone = "dark",
}: {
  children: ReactNode;
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <div
      className={cn(
        "card-lift clip-card relative border p-4 sm:p-7",
        tone === "dark"
          ? "border-white/10 bg-brand-charcoal hover:border-brand-red/60"
          : "border-black/10 bg-white hover:border-brand-red/60",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Icon + title + text feature card */
export function FeatureCard({
  icon: Icon,
  title,
  text,
  note,
  tone = "dark",
  className,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
  note?: string;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Card tone={tone} className={cn("group h-full", className)}>
      <span className="grid size-10 -skew-x-12 place-items-center bg-brand-red text-white transition-transform duration-300 group-hover:scale-110 sm:size-12">
        <Icon className="size-6 skew-x-12" aria-hidden />
      </span>
      <h3
        className={cn(
          "mt-4 text-xl tracking-wide sm:mt-5 sm:text-2xl",
          tone === "dark" ? "text-white" : "text-brand-black",
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "mt-2 text-sm leading-relaxed sm:text-[0.95rem]",
          tone === "dark" ? "text-white/70" : "text-brand-muted-dark",
        )}
      >
        {text}
      </p>
      {note ? (
        <p
          className={cn(
            "mt-3 inline-block border border-dashed border-amber-500/70 px-2 py-0.5 text-xs font-semibold uppercase",
            tone === "dark" ? "text-amber-300" : "text-amber-800",
          )}
        >
          [{note}]
        </p>
      ) : null}
    </Card>
  );
}
