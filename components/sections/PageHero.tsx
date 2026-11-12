import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Img } from "@/data/images";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { Badge } from "@/components/ui/Badge";
import { BLUR_DATA_URL } from "@/components/ui/BrandImage";
import { Eyebrow } from "@/components/ui/SectionHeading";

/** Inner-page hero: dark photo, skewed H1, breadcrumbs (+ BreadcrumbList JSON-LD). */
export function PageHero({
  eyebrow,
  title,
  highlight,
  subtitle,
  image,
  crumbs,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  image: Img;
  crumbs: { name: string; path: string }[];
}) {
  const parts = highlight && title.includes(highlight) ? title.split(highlight) : null;
  const all = [{ name: "Home", path: "/" }, ...crumbs];

  return (
    <section className="clip-bottom grain relative isolate flex min-h-[62svh] items-start overflow-hidden bg-brand-black pt-[calc(var(--header-h)+max(3rem,12svh))] pb-[calc(4vw+3.5rem)] sm:min-h-[68svh]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(all)) }}
      />
      <Image
        src={image.src}
        alt=""
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        quality={60}
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
        className="photo-treat -z-20 object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-black via-brand-black/80 to-brand-black/30"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-brand-black to-transparent"
      />
      {/* Slashes sit in the bottom padding so they never cross the heading */}
      <div
        aria-hidden
        className="anim-slash absolute right-[-8%] bottom-[calc(4vw+1.25rem)] -z-10 h-3 w-[58%] bg-brand-red sm:h-4"
      />
      <div
        aria-hidden
        className="anim-slash absolute right-[-8%] bottom-[calc(4vw+2.5rem)] -z-10 h-1.5 w-[38%] bg-brand-red/70"
        style={{ ["--d" as string]: "150ms" }}
      />

      <div className="container-x">
        <nav aria-label="Breadcrumb" className="anim-rise mb-6">
          <ol className="flex flex-wrap items-center gap-1 text-xs font-semibold tracking-widest text-white/70 uppercase">
            {all.map((c, i) => (
              <li key={c.path} className="flex items-center gap-1">
                {i > 0 ? (
                  <ChevronRight className="size-3.5 text-brand-red-light" aria-hidden />
                ) : null}
                {i === all.length - 1 ? (
                  <span aria-current="page" className="text-white">
                    {c.name}
                  </span>
                ) : (
                  <Link href={c.path} className="hover:text-white">
                    {c.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <Badge className="anim-rise mb-5">Now Open · Mahadevapura</Badge>
        <br />
        <Eyebrow className="anim-rise">{eyebrow}</Eyebrow>
        <h1 className="anim-nudge mt-4 max-w-5xl text-[clamp(3rem,11vw,8rem)] text-white">
          <span className="skew-title">
            {parts ? (
              <>
                {parts[0]}
                <span className="text-brand-red">{highlight}</span>
                {parts[1]}
              </>
            ) : (
              title
            )}
          </span>
        </h1>
        {subtitle ? (
          <p
            className="anim-rise mt-5 max-w-2xl text-lg text-white/80"
            style={{ ["--d" as string]: "150ms" }}
          >
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
