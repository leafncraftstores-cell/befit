import type { ReactNode } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export type AccordionItem = { id: string; title: ReactNode; content: ReactNode };

/**
 * Zero-JS accordion built on <details>/<summary>: keyboard accessible and works without
 * JavaScript. Items sharing `name` behave exclusively in modern browsers.
 */
export function Accordion({
  items,
  name,
  tone = "dark",
  defaultOpen,
  className,
}: {
  items: AccordionItem[];
  name?: string;
  tone?: "dark" | "light";
  defaultOpen?: string;
  className?: string;
}) {
  return (
    <div
      className={cn("divide-y", tone === "dark" ? "divide-white/10" : "divide-black/10", className)}
    >
      {items.map((item) => (
        <details
          key={item.id}
          name={name}
          open={item.id === defaultOpen || undefined}
          className="group"
        >
          <summary
            className={cn(
              "flex cursor-pointer items-center justify-between gap-6 py-5 text-left text-lg font-bold transition-colors sm:text-xl",
              tone === "dark"
                ? "text-white hover:text-brand-red-light"
                : "text-brand-black hover:text-brand-red",
            )}
          >
            <span>{item.title}</span>
            <span
              aria-hidden
              className="grid size-9 shrink-0 -skew-x-12 place-items-center bg-brand-red text-white transition-transform duration-300 group-open:rotate-45"
            >
              <Plus className="size-5 skew-x-12" />
            </span>
          </summary>
          <div
            className={cn(
              "pr-12 pb-6 leading-relaxed",
              tone === "dark" ? "text-white/75" : "text-brand-muted-dark",
            )}
          >
            {item.content}
          </div>
        </details>
      ))}
    </div>
  );
}
