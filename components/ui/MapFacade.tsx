import { MapPin, Navigation } from "lucide-react";
import { site } from "@/data/site";
import { mapsDirectionsLink, mapsEmbedSrc } from "@/lib/contact";
import { cn } from "@/lib/utils";
import { Emblem } from "./Emblem";
import { MapLoader } from "./MapLoader";

/**
 * Click-to-load Google Maps: keeps the heavy third-party map JS off the page until the
 * visitor asks for it. The facade is server-rendered; only the swap is client-side.
 */
export function MapFacade({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative aspect-[4/3] w-full overflow-hidden bg-brand-charcoal sm:aspect-[16/10]",
        className,
      )}
    >
      <MapLoader
        src={mapsEmbedSrc}
        title={`Map showing BE-FIT Fitness, ${site.address.locality}, ${site.address.city}`}
      >
        {/* stylised map background */}
        <span
          aria-hidden
          className="absolute inset-0 opacity-60 [background:linear-gradient(90deg,rgb(255_255_255/0.05)_1px,transparent_1px)_0_0/48px_48px,linear-gradient(rgb(255_255_255/0.05)_1px,transparent_1px)_0_0/48px_48px]"
        />
        <span
          aria-hidden
          className="absolute top-[35%] -left-10 h-3 w-[130%] -rotate-12 bg-white/10"
        />
        <span
          aria-hidden
          className="absolute top-[60%] -left-10 h-5 w-[130%] rotate-6 bg-white/10"
        />
        <span
          aria-hidden
          className="absolute -top-10 left-[62%] h-[130%] w-3 rotate-12 bg-white/10"
        />
        <span className="relative grid size-20 place-items-center rounded-full bg-brand-red shadow-[0_0_0_12px_rgb(227_30_36/0.2)] transition-transform group-hover:scale-110">
          <Emblem className="w-10 text-white" />
        </span>
        <span className="relative">
          <span className="block font-display text-2xl tracking-wide text-white uppercase">
            BE-FIT Fitness · {site.address.locality}
          </span>
          <span className="mt-2 inline-flex items-center gap-2 bg-white px-4 py-2 text-sm font-bold tracking-wider text-brand-black uppercase transition-colors group-hover:bg-brand-red group-hover:text-white">
            <MapPin className="size-4" aria-hidden /> Load map
          </span>
        </span>
      </MapLoader>
      <a
        href={mapsDirectionsLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-3 bottom-3 z-10 inline-flex items-center gap-2 bg-brand-black/90 px-3 py-2 text-xs font-bold tracking-wider text-white uppercase hover:bg-brand-red"
      >
        <Navigation className="size-4" aria-hidden /> Get directions
      </a>
    </div>
  );
}
