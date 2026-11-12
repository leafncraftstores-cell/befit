import Image from "next/image";
import { Award } from "lucide-react";
import type { Trainer } from "@/data/trainers";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";
import { BLUR_DATA_URL } from "./BrandImage";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "./SocialIcons";

export function TrainerCard({ trainer, className }: { trainer: Trainer; className?: string }) {
  const socials = [
    { href: trainer.socials.instagram, label: "Instagram", Icon: InstagramIcon },
    { href: trainer.socials.facebook, label: "Facebook", Icon: FacebookIcon },
    { href: trainer.socials.youtube, label: "YouTube", Icon: YoutubeIcon },
  ].filter((s): s is typeof s & { href: string } => Boolean(s.href));

  return (
    <article className={cn("group card-lift clip-card relative bg-brand-charcoal", className)}>
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={trainer.image.src}
          alt={`${trainer.image.alt}: ${trainer.role}`}
          fill
          sizes="(min-width: 1280px) 320px, (min-width: 768px) 40vw, 80vw"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          className="photo-treat object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent"
        />
        <Badge variant="placeholder" className="absolute top-4 left-4 bg-black/60 text-[0.6rem]">
          Placeholder photo
        </Badge>
        {/* Socials slide in on hover/focus */}
        {socials.length ? (
          <ul className="absolute top-4 right-4 flex flex-col gap-2 transition-all duration-300 md:translate-x-14 md:opacity-0 md:group-focus-within:translate-x-0 md:group-focus-within:opacity-100 md:group-hover:translate-x-0 md:group-hover:opacity-100">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${trainer.name} on ${label}`}
                  className="grid size-10 place-items-center bg-brand-red text-white transition-colors hover:bg-white hover:text-brand-red"
                >
                  <Icon className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        ) : null}
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="text-xs font-bold tracking-[0.25em] text-brand-red-light uppercase">
            {trainer.role}
          </p>
          <h3 className="mt-1 text-3xl text-white">
            <span className="skew-title">{trainer.name}</span>
          </h3>
        </div>
      </div>
      <div className="space-y-1.5 border-t-2 border-brand-red p-5 text-sm text-white/75">
        <p>{trainer.specialisation}</p>
        <p className="flex items-center gap-2">
          <Award className="size-4 text-brand-red-light" aria-hidden />
          {trainer.certification} · {trainer.experience}
        </p>
      </div>
    </article>
  );
}
