import type { Metadata } from "next";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { images } from "@/data/images";
import { ButtonLink } from "@/components/ui/Button";
import { Emblem } from "@/components/ui/Emblem";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { BLUR_DATA_URL } from "@/components/ui/BrandImage";
import { whatsappLink } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="grain relative flex min-h-[100svh] items-center overflow-hidden bg-brand-black">
      <Image
        src={images.notFound.src}
        alt=""
        fill
        sizes="100vw"
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
        className="photo-treat object-cover opacity-40"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent"
      />
      <div
        aria-hidden
        className="absolute -right-24 bottom-24 h-28 w-[120%] -rotate-6 bg-brand-red/80"
      />
      <div className="container-x relative z-[2] py-32">
        <Emblem className="w-20" />
        <p className="text-outline mt-6 font-display text-[7rem] leading-none sm:text-[11rem]">
          404
        </p>
        <Eyebrow className="mt-2">Page not found</Eyebrow>
        <h1 className="mt-4 text-5xl text-white sm:text-7xl">
          <span className="skew-title">
            Rest day? <span className="text-brand-red">Not here.</span>
          </span>
        </h1>
        <p className="mt-5 max-w-md text-lg text-white/75">
          This page skipped leg day and wandered off. Let&apos;s get you back to the training floor.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <ButtonLink href="/" size="lg">
            <ArrowLeft className="size-5" aria-hidden /> Back to Home
          </ButtonLink>
          <ButtonLink href={whatsappLink()} variant="outline" size="lg">
            Book a Free Trial
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
