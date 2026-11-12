import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";
import { telLink, whatsappLink } from "@/lib/contact";
import { cn } from "@/lib/utils";
import { HoursCard } from "@/components/ui/HoursCard";
import { LazyContactForm } from "@/components/ui/LazyContactForm";
import { MapFacade } from "@/components/ui/MapFacade";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsappIcon } from "@/components/ui/SocialIcons";

export function ContactDetails({ className }: { className?: string }) {
  const rows = [
    { icon: Phone, label: "Call", value: site.phone.display, href: telLink },
    { icon: WhatsappIcon, label: "WhatsApp", value: site.phone.display, href: whatsappLink() },
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    {
      icon: MapPin,
      label: "Address",
      value: `${site.address.street}, ${site.address.locality}, ${site.address.city}, ${site.address.region}`,
    },
  ];
  return (
    <ul className={cn("grid gap-4 sm:grid-cols-2", className)}>
      {rows.map(({ icon: Icon, label, value, href }) => {
        const inner = (
          <>
            <span className="grid size-12 shrink-0 -skew-x-12 place-items-center bg-brand-red">
              <Icon className="size-5 skew-x-12" />
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-bold tracking-[0.25em] text-white/60 uppercase">
                {label}
              </span>
              <span className="block font-semibold break-words text-white">{value}</span>
            </span>
          </>
        );
        return (
          <li key={label}>
            {href ? (
              <a
                href={href}
                {...(href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="flex items-center gap-4 border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-brand-red"
              >
                {inner}
              </a>
            ) : (
              <div className="flex items-center gap-4 border border-white/10 bg-white/[0.03] p-4">
                {inner}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export function ContactSection({ heading = true }: { heading?: boolean }) {
  return (
    <section
      id="enquiry"
      aria-labelledby="contact-title"
      className="section-y relative bg-brand-black"
    >
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          {heading ? (
            <SectionHeading
              id="contact-title"
              eyebrow="Free Trial"
              title="Book your free trial"
              highlight="free trial"
              subtitle="Tell us a little about your goals and we'll reserve a session with a trainer. Your new gym in Mahadevapura is open."
            />
          ) : (
            <h2 id="contact-title" className="text-4xl text-white sm:text-5xl">
              <span className="skew-title">
                Send an <span className="text-brand-red">enquiry</span>
              </span>
            </h2>
          )}
          <div
            data-reveal
            className="clip-card mt-10 border border-white/10 bg-brand-charcoal p-6 sm:p-8"
          >
            <LazyContactForm />
          </div>
        </div>
        <div className="space-y-6" data-reveal="right">
          <MapFacade className="clip-card border border-white/10" />
          <HoursCard />
          <ContactDetails />
        </div>
      </div>
    </section>
  );
}
