import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Big uppercase condensed heading with the brand skew. Wrap words in `highlight` to colour
 * them red, e.g. <SkewedTitle highlight="Stronger">Get Stronger</SkewedTitle>.
 */
export function SkewedTitle({
  as: Tag = "h2",
  children,
  highlight,
  className,
  id,
}: {
  as?: ElementType;
  children: string;
  highlight?: string;
  className?: string;
  id?: string;
}) {
  let content: ReactNode = children;
  if (highlight && children.includes(highlight)) {
    const [before, after] = children.split(highlight);
    content = (
      <>
        {before}
        <span className="text-brand-red">{highlight}</span>
        {after}
      </>
    );
  }
  return (
    <Tag id={id} className={cn("font-display uppercase", className)}>
      <span className="skew-title">{content}</span>
    </Tag>
  );
}
