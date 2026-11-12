import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "dark" | "white" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "btn-sweep inline-flex -skew-x-12 items-center justify-center font-display uppercase tracking-wider whitespace-nowrap transition-[color,border-color] duration-300 disabled:pointer-events-none disabled:opacity-60";

/** Content is counter-skewed so text stays upright inside the slanted button */
function Inner({ children }: { children: ReactNode }) {
  return <span className="inline-flex skew-x-12 items-center gap-2">{children}</span>;
}

const variants: Record<Variant, string> = {
  primary: "bg-brand-red text-white [--sweep:var(--brand-red-dark)]",
  outline:
    "border-2 border-white/90 bg-transparent text-white [--sweep:var(--brand-red)] hover:border-brand-red",
  dark: "bg-brand-black text-white [--sweep:var(--brand-red)]",
  white: "bg-white text-brand-black hover:text-white [--sweep:var(--brand-black)]",
  ghost: "bg-white/5 text-white [--sweep:var(--brand-red)]",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-5 text-sm",
  md: "h-12 px-7 text-base",
  lg: "h-14 px-9 text-lg",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type LinkButtonProps = CommonProps & {
  href: string;
  /** Opens in a new tab (WhatsApp, maps, socials) */
  external?: boolean;
} & Omit<ComponentProps<"a">, "href" | "className" | "children">;

/** Link styled as a button. Internal links use next/link; external ones use <a>. */
export function ButtonLink({
  href,
  external,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: LinkButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const isExternal = external || /^(https?:|tel:|mailto:)/.test(href);
  if (isExternal) {
    const newTab = /^https?:/.test(href);
    return (
      <a
        href={href}
        className={classes}
        {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        <Inner>{children}</Inner>
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...rest}>
      <Inner>{children}</Inner>
    </Link>
  );
}

type ButtonProps = CommonProps & Omit<ComponentProps<"button">, "className" | "children">;

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button type={type} className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      <Inner>{children}</Inner>
    </button>
  );
}
