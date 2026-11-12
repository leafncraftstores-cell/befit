import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { images } from "@/data/images";
import { site } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { BrushStroke } from "@/components/ui/DiagonalDivider";

export function Hero() {
  return (
    <section
      aria-label="BE-FIT Fitness: now open in Mahadevapura"
      className="grain relative isolate flex min-h-[100svh] items-center overflow-hidden bg-brand-black pt-[var(--header-h)]"
    >
      {/* Red brush strokes behind the athletes */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div
          className="anim-slash absolute top-[8%] -right-[10%] h-[38%] w-[75%] bg-brand-red lg:right-[-4%] lg:w-[58%]"
          style={{ ["--d" as string]: "100ms" }}
        />
        <div
          className="anim-slash absolute top-[52%] -right-[20%] h-[12%] w-[70%] bg-brand-red-dark lg:w-[50%]"
          style={{ ["--d" as string]: "250ms" }}
        />
        <BrushStroke
          className="absolute bottom-[14%] left-[-10%] h-24 w-[90%] -rotate-6 sm:h-32 lg:left-[25%] lg:w-[70%]"
          opacity={0.85}
        />
      </div>

      {/* Athletes: two diagonal photo panels, back to back */}
      <div aria-hidden className="absolute inset-y-0 right-0 -z-10 w-full lg:w-[64%]">
        {/* lighten blend lets the red strokes glow through the dark backdrops, like the poster */}
        <div className="absolute inset-0 mix-blend-lighten [clip-path:polygon(0_0,56%_0,40%_100%,0_100%)]">
          <div className="absolute inset-y-0 left-0 w-[58%]">
            <Image
              src={images.heroFemale.src}
              alt=""
              fill
              priority
              fetchPriority="high"
              sizes="(min-width: 1024px) 38vw, 58vw"
              quality={60}
              className="photo-treat object-cover object-[50%_25%]"
            />
          </div>
        </div>
        <div className="absolute inset-0 mix-blend-lighten [clip-path:polygon(58%_0,100%_0,100%_100%,42%_100%)]">
          <div className="absolute inset-y-0 right-0 w-[58%]">
            <Image
              src={images.heroMale.src}
              alt=""
              fill
              priority
              fetchPriority="high"
              sizes="(min-width: 1024px) 38vw, 58vw"
              quality={60}
              className="photo-treat object-cover object-[50%_30%]"
            />
          </div>
        </div>
        {/* red rim-light slash between the two */}
        <div className="absolute inset-0 bg-brand-red [clip-path:polygon(56%_0,58%_0,42%_100%,40%_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgb(227_30_36/0.35),transparent_60%)] mix-blend-screen" />
      </div>

      {/* Legibility gradients */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-black via-brand-black/70 to-brand-black/10 lg:from-brand-black lg:from-25% lg:via-brand-black/45 lg:via-45% lg:to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-brand-black to-transparent"
      />

      <div className="container-x relative py-16 sm:py-20">
        <div className="max-w-3xl">
          <p className="anim-rise flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.7rem] font-bold tracking-[0.28em] uppercase sm:text-sm">
            <span className="stripes text-brand-red-light" aria-hidden />
            <span>
              Stronger today. <span className="text-brand-red-light">Fitter tomorrow.</span>
            </span>
            <span className="stripes hidden text-brand-red-light sm:inline-block" aria-hidden />
          </p>

          <h1 className="anim-nudge mt-5">
            <span className="skew-title block font-display text-[clamp(5.2rem,22vw,13.5rem)] leading-[0.82] tracking-tight drop-shadow-[0_8px_30px_rgb(0_0_0/0.6)]">
              BE-<span className="text-brand-red">FIT</span>
            </span>
            <span className="mt-3 block pl-2 font-sans text-[clamp(1.1rem,4.4vw,2.4rem)] font-bold tracking-[0.55em] text-white">
              FITNESS
            </span>
            <span className="sr-only">: gym in Mahadevapura, Bengaluru</span>
          </h1>

          <div className="anim-rise mt-7" style={{ ["--d" as string]: "160ms" }}>
            <span className="inline-flex -skew-x-12 items-center gap-3 bg-brand-red px-5 py-2.5 shadow-[0_10px_40px_-10px_rgb(227_30_36/0.8)]">
              <span className="relative flex size-2.5 skew-x-12">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75 motion-reduce:hidden" />
                <span className="relative inline-flex size-2.5 rounded-full bg-white" />
              </span>
              <span className="skew-x-12 font-display text-lg tracking-[0.18em] sm:text-2xl">
                Now Open · Mahadevapura
              </span>
            </span>
          </div>

          <p
            className="anim-rise mt-6 font-display text-2xl tracking-wide uppercase sm:text-4xl"
            style={{ ["--d" as string]: "240ms" }}
          >
            <span className="skew-title">
              A new beginning. <span className="text-brand-red">A stronger you.</span>
            </span>
          </p>
          <p
            className="anim-rise mt-3 max-w-lg text-base text-white/80 sm:text-lg"
            style={{ ["--d" as string]: "280ms" }}
          >
            Your new gym in Mahadevapura is open: modern equipment, certified trainers and a
            community that pushes you further. Open from {site.hours[0]?.opensDisplay}.
          </p>

          <div
            className="anim-rise mt-9 flex flex-col gap-3 sm:flex-row"
            style={{ ["--d" as string]: "340ms" }}
          >
            <ButtonLink href="/contact/#enquiry" size="lg">
              Book a Free Trial
            </ButtonLink>
            <ButtonLink href="/membership/" size="lg" variant="outline">
              View Membership
            </ButtonLink>
          </div>
        </div>
      </div>

      <a
        href="#pillars"
        aria-label="Scroll to explore"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-[0.65rem] font-bold tracking-[0.3em] text-white/70 uppercase sm:flex"
      >
        Scroll
        <ChevronDown className="anim-scroll-cue size-6 text-brand-red" aria-hidden />
      </a>
    </section>
  );
}
