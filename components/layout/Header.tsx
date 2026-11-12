import { Phone } from "lucide-react";
import { nav, site } from "@/data/site";
import { telLink, whatsappLink } from "@/lib/contact";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { WhatsappIcon } from "@/components/ui/SocialIcons";
import { HeaderShell } from "./HeaderShell";
import { NavLink } from "./NavLink";

/**
 * Sticky header. Markup is server-rendered; HeaderShell adds the scroll/menu behaviour and
 * NavLink adds active-route highlighting.
 */
export function Header() {
  return (
    <HeaderShell
      bar={
        <>
          {/* visibility lives on wrappers: the components set their own display */}
          <span className="relative z-50 sm:hidden">
            <Logo size="sm" />
          </span>
          <span className="relative z-50 hidden sm:block">
            <Logo size="md" />
          </span>
          <nav aria-label="Main" className="hidden xl:block">
            <ul className="flex items-center gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <NavLink href={item.href} label={item.label} variant="desktop" />
                </li>
              ))}
            </ul>
          </nav>
          <span className="relative z-50 ml-auto hidden sm:block xl:ml-0">
            <ButtonLink href="/contact/#enquiry" size="sm">
              Book a Free Trial
            </ButtonLink>
          </span>
        </>
      }
      menu={
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute top-24 -right-20 h-24 w-[140%] -rotate-12 bg-brand-red/15"
          />
          <nav
            aria-label="Mobile"
            className="container-x relative flex min-h-full flex-col pt-[calc(var(--header-h)+1.5rem)] pb-10"
          >
            <ul className="space-y-1">
              {nav.map((item, i) => (
                <li
                  key={item.href}
                  className="anim-rise"
                  style={{ ["--d" as string]: `${i * 40}ms` }}
                >
                  <NavLink href={item.href} label={item.label} variant="mobile" />
                </li>
              ))}
            </ul>
            <div className="mt-auto grid gap-3 pt-10 sm:grid-cols-2">
              <ButtonLink href={telLink} variant="outline" size="lg">
                <Phone className="size-5" aria-hidden /> Call {site.phone.display}
              </ButtonLink>
              <ButtonLink
                href={whatsappLink()}
                size="lg"
                className="bg-[#1fa855] [--sweep:#178a45]"
              >
                <WhatsappIcon className="size-5" /> WhatsApp Us
              </ButtonLink>
            </div>
          </nav>
        </>
      }
    />
  );
}
