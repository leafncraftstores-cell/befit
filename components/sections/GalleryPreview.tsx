import { ArrowRight } from "lucide-react";
import { gallery } from "@/data/gallery";
import { ButtonLink } from "@/components/ui/Button";
import { GalleryGrid } from "@/components/ui/GalleryGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function GalleryPreview() {
  const preview = gallery.filter((g) => g.src !== null).slice(0, 6);
  return (
    <section aria-labelledby="gallery-title" className="section-y relative bg-brand-charcoal">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            id="gallery-title"
            eyebrow="Gallery"
            title="Inside BE-FIT"
            highlight="BE-FIT"
            subtitle="The gym floor, equipment, classes and community. [Stock imagery, to be replaced with BE-FIT's own photos]"
          />
          <ButtonLink href="/gallery/" variant="outline" className="self-start lg:self-auto">
            View Gallery <ArrowRight className="size-5" aria-hidden />
          </ButtonLink>
        </div>
        <div className="mt-12">
          <GalleryGrid items={preview} />
        </div>
      </div>
    </section>
  );
}
