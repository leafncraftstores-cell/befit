import Image from "next/image";
import { Phone } from "lucide-react";
import { images } from "@/data/images";
import { site } from "@/data/site";
import { telLink } from "@/lib/contact";
import { BLUR_DATA_URL } from "@/components/ui/BrandImage";
import { ButtonLink } from "@/components/ui/Button";

export function FinalCta() {
  return (
    <section
      aria-labelledby="cta-title"
      className="relative isolate overflow-hidden bg-brand-black py-10"
    >
      {/* Rotated red band is pure background; the content sits upright in the normal container */}
      <div
        aria-hidden
        className="absolute inset-x-[-5%] inset-y-10 -z-10 -rotate-2 overflow-hidden bg-brand-red shadow-[0_30px_80px_-20px_rgb(227_30_36/0.6)]"
      >
        <Image
          src={images.cta.src}
          alt=""
          fill
          sizes="100vw"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          className="object-cover opacity-20 mix-blend-multiply grayscale"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[repeating-linear-gradient(-60deg,transparent_0_50px,rgb(0_0_0/0.07)_50px_100px)]"
        />
      </div>
      <div className="container-x relative py-16 text-center sm:py-20">
        <p className="text-xs font-bold tracking-[0.35em] text-white uppercase sm:text-sm">
          <span className="stripes mr-3" aria-hidden />
          Now open in Mahadevapura
          <span className="stripes ml-3" aria-hidden />
        </p>
        <h2 id="cta-title" className="mt-5 text-[clamp(2.6rem,9vw,7.5rem)] text-white">
          <span className="skew-title">
            A new beginning.
            <br />
            <span className="text-brand-black">A stronger you.</span>
          </span>
        </h2>
        <div className="mt-9 flex flex-col items-center justify-center gap-6 lg:flex-row lg:gap-10">
          <ButtonLink href="/contact/#enquiry" variant="dark" size="lg">
            Book Your Free Trial
          </ButtonLink>
          <a
            href={telLink}
            className="group inline-flex items-center gap-3 font-display text-[clamp(2rem,7vw,4rem)] leading-none text-white transition-colors hover:text-brand-black"
          >
            <Phone
              className="size-[0.7em] shrink-0 transition-transform group-hover:rotate-12"
              aria-hidden
            />
            <span className="skew-title">{site.phone.display}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
