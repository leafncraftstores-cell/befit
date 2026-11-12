"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, type MouseEvent, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Client shell for the header: scroll state (transparent → solid black + blur) and the
 * mobile menu toggle. All markup inside is server-rendered and passed in.
 */
export function HeaderShell({ bar, menu }: { bar: ReactNode; menu: ReactNode }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Close when any link in the menu is used (including the current page)
  const onMenuClick = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest("a")) setOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300",
        scrolled || open
          ? "bg-brand-black/90 shadow-[0_1px_0_rgb(255_255_255/0.08)] backdrop-blur-md"
          : "bg-gradient-to-b from-black/60 to-transparent",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-brand-red focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <div className="container-x flex h-[var(--header-h)] items-center justify-between gap-4">
        {bar}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative z-50 grid size-11 shrink-0 -skew-x-12 place-items-center bg-white/10 text-white transition-colors hover:bg-brand-red xl:hidden"
        >
          {open ? <X className="size-6 skew-x-12" /> : <Menu className="size-6 skew-x-12" />}
        </button>
      </div>
      <div
        id="mobile-menu"
        hidden={!open}
        onClick={onMenuClick}
        className="fixed inset-0 z-40 overflow-y-auto bg-brand-black xl:hidden"
      >
        {menu}
      </div>
    </header>
  );
}
