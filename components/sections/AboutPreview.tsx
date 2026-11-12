import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { images } from "@/data/images";
import { BLUR_DATA_URL } from "@/components/ui/BrandImage";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { SkewedTitle } from "@/components/ui/SkewedTitle";

const points = [
  "Certified trainers",
  "Modern equipment",
  "Diet & nutrition support",
  "Open 7 days",
];

export function AboutPreview() {
  return (
    <section
      aria-labelledby="about-title"
      className="section-y relative overflow-hidden bg-white text-brand-black"
    >
      <div aria-hidden className="absolute top-0 -right-32 h-full w-1/3 -skew-x-12 bg-brand-grey" />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Image collage */}
        <div data-reveal="left" className="relative mx-auto w-full max-w-xl pb-10 lg:pb-16">
          <div
            className="absolute -top-4 -left-4 h-[85%] w-[80%] border-4 border-brand-red"
            aria-hidden
          />
          <div className="relative aspect-[4/5] w-[82%] overflow-hidden bg-brand-charcoal">
            <Image
              src={images.aboutMain.src}
              alt={images.aboutMain.alt}
              fill
              sizes="(min-width: 1024px) 36vw, 80vw"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
              className="photo-treat object-cover"
            />
          </div>
          <div className="absolute right-0 bottom-0 aspect-square w-[48%] overflow-hidden border-8 border-white bg-brand-charcoal shadow-2xl">
            <Image
              src={images.aboutSecondary.src}
              alt={images.aboutSecondary.alt}
              fill
              sizes="(min-width: 1024px) 22vw, 45vw"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
              className="photo-treat object-cover"
            />
          </div>
          <div className="absolute top-8 right-2 grid size-28 rotate-12 place-items-center rounded-full bg-brand-red text-center text-white shadow-xl sm:size-32">
            <span className="font-display text-xl leading-tight tracking-wide sm:text-2xl">
              Now
              <br />
              Open
            </span>
          </div>
        </div>

        <div data-reveal="right">
          <Eyebrow tone="light">About BE-FIT</Eyebrow>
          <SkewedTitle
            id="about-title"
            highlight="Stronger"
            className="mt-4 text-[2.6rem] sm:text-6xl lg:text-7xl"
          >
            Built to make you Stronger
          </SkewedTitle>
          <p className="mt-6 text-lg leading-relaxed text-brand-muted-dark">
            BE-FIT Fitness is Mahadevapura&apos;s new home for strength, fitness and transformation.
            Whether you&apos;re starting out or chasing your next PR, our trainers, modern equipment
            and supportive community will help you get stronger today and fitter tomorrow.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 font-semibold">
                <span className="grid size-7 -skew-x-12 place-items-center bg-brand-red text-white">
                  <Check className="size-4 skew-x-12" aria-hidden />
                </span>
                {p}
              </li>
            ))}
          </ul>
          <Link
            href="/about/"
            className="group mt-10 inline-flex items-center gap-3 font-display text-xl tracking-wider text-brand-black uppercase"
          >
            <span className="border-b-2 border-brand-red pb-1">Know More</span>
            <span className="grid size-11 -skew-x-12 place-items-center bg-brand-black text-white transition-colors group-hover:bg-brand-red">
              <ArrowRight
                className="size-5 skew-x-12 transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
