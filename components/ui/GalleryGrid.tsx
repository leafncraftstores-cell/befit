"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { Expand, ImageIcon } from "lucide-react";
import { useMemo, useState } from "react";
import type { GalleryCategory, GalleryItem } from "@/data/gallery";
import { cn } from "@/lib/utils";
import { BLUR_DATA_URL } from "./BrandImage";
import type { LightboxImage } from "./Lightbox";

// Loaded on first click, so the lightbox costs nothing until it is used.
const Lightbox = dynamic(() => import("./Lightbox").then((m) => m.Lightbox), { ssr: false });

const shapeClass: Record<GalleryItem["shape"], string> = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
};

/** Masonry gallery (CSS columns) with optional filter chips and a lightbox. */
export function GalleryGrid({
  items,
  categories,
}: {
  items: GalleryItem[];
  /** Pass categories to show filter chips */
  categories?: readonly GalleryCategory[];
}) {
  const [filter, setFilter] = useState<GalleryCategory | "All">("All");
  const [open, setOpen] = useState<number | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? items : items.filter((i) => i.category === filter)),
    [items, filter],
  );
  const viewable: LightboxImage[] = useMemo(
    () =>
      visible
        .filter((i): i is GalleryItem & { src: string } => i.src !== null)
        .map(({ src, alt }) => ({ src, alt })),
    [visible],
  );

  return (
    <div>
      {categories ? (
        <div role="group" aria-label="Filter gallery" className="mb-8 flex flex-wrap gap-2">
          {(["All", ...categories] as const).map((cat) => (
            <button
              key={cat}
              type="button"
              aria-pressed={filter === cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "-skew-x-12 px-4 py-2 text-sm font-bold tracking-wider uppercase transition-colors",
                filter === cat
                  ? "bg-brand-red text-white"
                  : "bg-white/5 text-white/75 hover:bg-white/10 hover:text-white",
              )}
            >
              <span className="inline-block skew-x-12">{cat}</span>
            </button>
          ))}
        </div>
      ) : null}

      <ul className="columns-2 gap-3 sm:gap-4 lg:columns-3 [&>li]:mb-3 sm:[&>li]:mb-4">
        {visible.map((item) => {
          if (item.src === null) {
            return (
              <li key={`${item.alt}-${visible.indexOf(item)}`} className="break-inside-avoid">
                <div
                  className={cn(
                    shapeClass[item.shape],
                    "grid place-items-center border-2 border-dashed border-amber-400/50 bg-[repeating-linear-gradient(-45deg,#1c1c1e_0_14px,#232326_14px_28px)] p-4 text-center",
                  )}
                >
                  <div>
                    <ImageIcon className="mx-auto size-8 text-white/40" aria-hidden />
                    <p className="mt-2 text-sm font-semibold text-amber-300">{item.alt}</p>
                  </div>
                </div>
              </li>
            );
          }
          const vi = viewable.findIndex((v) => v.src === item.src);
          return (
            <li key={item.src} className="break-inside-avoid">
              <button
                type="button"
                onClick={() => setOpen(vi)}
                aria-label={`View larger: ${item.alt}`}
                className={cn(
                  "group relative block w-full overflow-hidden bg-brand-charcoal",
                  shapeClass[item.shape],
                )}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, 48vw"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                  className="photo-treat object-cover transition duration-700 group-hover:scale-105 group-hover:filter-none"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                />
                <span
                  aria-hidden
                  className="absolute right-3 bottom-3 grid size-10 translate-y-3 place-items-center bg-brand-red opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <Expand className="size-5" />
                </span>
                <span className="absolute bottom-3 left-3 text-left text-xs font-bold tracking-widest text-white uppercase opacity-0 transition-opacity group-hover:opacity-100">
                  {item.category}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      {open !== null ? (
        <Lightbox images={viewable} index={open} onClose={() => setOpen(null)} onIndex={setOpen} />
      ) : null}
    </div>
  );
}
