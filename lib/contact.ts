import { site } from "@/data/site";

/** wa.me link with a prefilled message */
export function whatsappLink(message: string = site.whatsapp.defaultMessage): string {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export const telLink = `tel:${site.phone.e164}`;

export const mapsDirectionsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `BE-FIT Fitness ${site.address.mapQuery}`,
)}`;

export const mapsEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  site.address.mapQuery,
)}&z=14&output=embed`;
