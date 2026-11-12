import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { nav, site } from "@/data/site";
import { programs } from "@/data/programs";
import { mapsDirectionsLink, telLink, whatsappLink } from "@/lib/contact";
import { Logo } from "@/components/ui/Logo";
import { SocialLinks, WhatsappIcon } from "@/components/ui/SocialIcons";

export function Footer() {
  return (
    <footer className="grain relative overflow-hidden bg-brand-black pb-24 md:pb-0">
      {/* red diagonal accent */}
      <div aria-hidden className="absolute -top-10 -left-10 h-24 w-[130%] -rotate-3 bg-brand-red" />
      <div aria-hidden className="absolute -top-2 -left-10 h-3 w-[130%] -rotate-3 bg-white/90" />

      <div className="container-x relative z-[2] pt-28 pb-10">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div className="col-span-2 lg:col-span-1">
            <Logo size="lg" />
            <p className="mt-5 font-display text-2xl tracking-wide text-white uppercase">
              <span className="skew-title">
                Stronger today. <span className="text-brand-red">Fitter tomorrow.</span>
              </span>
            </p>
            <p className="mt-3 max-w-sm text-white/70">
              Mahadevapura&apos;s new home for strength, fitness and transformation. Now open.
            </p>
            <SocialLinks className="mt-6" />
          </div>

          <div>
            <h2 className="text-xl tracking-widest text-white">Quick Links</h2>
            <ul className="mt-5 space-y-2.5">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-white/70 transition-colors hover:text-brand-red-light"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl tracking-widest text-white">Programs</h2>
            <ul className="mt-5 space-y-2.5">
              {programs.slice(0, 7).map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/programs/${p.slug}/`}
                    className="text-white/70 transition-colors hover:text-brand-red-light"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <h2 className="text-xl tracking-widest text-white">Visit Us</h2>
            <ul className="mt-5 space-y-4 text-white/75">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-brand-red-light" aria-hidden />
                <a
                  href={mapsDirectionsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {site.address.street}
                  <br />
                  {site.address.locality}, {site.address.city}, {site.address.region}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-brand-red-light" aria-hidden />
                <a href={telLink} className="font-semibold text-white hover:text-brand-red-light">
                  {site.phone.display}
                </a>
              </li>
              <li className="flex gap-3">
                <WhatsappIcon className="mt-0.5 size-5 shrink-0 text-[#25D366]" />
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp us
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-5 shrink-0 text-brand-red-light" aria-hidden />
                <a href={`mailto:${site.email}`} className="break-all hover:text-white">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-5 shrink-0 text-brand-red-light" aria-hidden />
                <span>
                  {site.hours.map((h) => (
                    <span key={h.label} className="block">
                      <span className="font-semibold text-white">{h.label}:</span> {h.display}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 BE-FIT Fitness. All rights reserved.</p>
          <p>Gym in Mahadevapura, Bengaluru · Now Open</p>
        </div>
      </div>
    </footer>
  );
}
