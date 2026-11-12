"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const styles = {
  desktop: {
    base: "relative px-3 py-2 text-[0.82rem] font-bold tracking-[0.14em] uppercase transition-colors after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:origin-left after:-skew-x-12 after:bg-brand-red after:transition-transform after:duration-300",
    active: "text-white after:scale-x-100",
    idle: "text-white/75 after:scale-x-0 hover:text-white hover:after:scale-x-100",
  },
  mobile: {
    base: "skew-title font-display text-[2.6rem] leading-[1.15] uppercase transition-colors sm:text-6xl",
    active: "text-brand-red",
    idle: "text-white hover:text-brand-red",
  },
};

/** Nav link that highlights itself for the current route. */
export function NavLink({
  href,
  label,
  variant,
}: {
  href: string;
  label: string;
  variant: keyof typeof styles;
}) {
  const pathname = usePathname();
  const active = href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/\/$/, ""));
  const s = styles[variant];
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(s.base, active ? s.active : s.idle)}
    >
      {label}
    </Link>
  );
}
