import { gallery, galleryCategories } from "@/data/gallery";
import { images } from "@/data/images";
import { pageMetadata } from "@/lib/seo";
import { GalleryGrid } from "@/components/ui/GalleryGrid";
import { FinalCta } from "@/components/sections/FinalCta";
import { PageHero } from "@/components/sections/PageHero";

export const metadata = pageMetadata({
  title: "Gallery: Inside Our Mahadevapura Gym",
  description:
    "Take a look inside BE-FIT Fitness, Mahadevapura: the gym floor, equipment, group classes, events and member transformations.",
  path: "/gallery/",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Inside BE-FIT"
        highlight="BE-FIT"
        subtitle="The floor, the classes and the community. [Stock imagery, to be replaced with BE-FIT's own photos]"
        image={images.contact}
        crumbs={[{ name: "Gallery", path: "/gallery/" }]}
      />
      <section aria-label="Photo gallery" className="section-y bg-brand-black">
        <div className="container-x">
          <GalleryGrid items={gallery} categories={galleryCategories} />
        </div>
      </section>
      <FinalCta />
    </>
  );
}
