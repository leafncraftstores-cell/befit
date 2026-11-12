import { site } from "@/data/site";

/** schema.org ExerciseGym / HealthClub (both LocalBusiness subtypes) for local SEO. */
export function gymJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["ExerciseGym", "HealthClub"],
    "@id": `${site.url}/#gym`,
    name: site.name,
    alternateName: "BE-FIT",
    description: site.description,
    slogan: site.tagline,
    url: site.url,
    telephone: site.phone.e164,
    email: site.email,
    image: `${site.url}/og-image.png`,
    logo: `${site.url}/emblem.svg`,
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: `${site.address.locality}, ${site.address.city}`,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.address.geo.latitude,
      longitude: site.address.geo.longitude,
    },
    areaServed: ["Mahadevapura", "Whitefield", "KR Puram", "Marathahalli", "Bengaluru"],
    openingHoursSpecification: site.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    sameAs: Object.values(site.socials),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a.replace(/\s*\[[^\]]*\]/g, "") },
    })),
  };
}
