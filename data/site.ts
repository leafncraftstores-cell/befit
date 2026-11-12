/**
 * Core business details. Edit this file to update contact info, hours and socials
 * everywhere on the site (header, footer, contact page, JSON-LD, WhatsApp links).
 */

export type DayHours = {
  /** Display label, e.g. "Mon – Sat" */
  label: string;
  /** schema.org day names this row covers */
  days: ("Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday")[];
  /** 24h "HH:MM" */
  opens: string;
  closes: string;
  /** Human-readable, e.g. "5:00 AM – 10:00 PM" */
  display: string;
  /** Human-readable opening time, e.g. "5:00 AM" */
  opensDisplay: string;
};

export const site = {
  name: "BE-FIT Fitness",
  shortName: "BE-FIT",
  tagline: "Stronger today. Fitter tomorrow.",
  secondaryTagline: "A new beginning. A stronger you.",
  description:
    "BE-FIT Fitness is the new gym in Mahadevapura, Bengaluru: strength training, weight loss, personal training, HIIT, Zumba, yoga and nutrition coaching. Now open. Book your free trial.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://befit-fitness.vercel.app",
  locale: "en_IN",

  phone: {
    /** E.164 format, used in tel: and wa.me links */
    e164: "+919686625077",
    display: "+91 96866 25077",
  },
  whatsapp: {
    number: "919686625077",
    defaultMessage: "Hi BE-FIT, I'd like to book a free trial",
  },
  email: "hello@befitfitness.in", // [placeholder: confirm with BE-FIT]

  address: {
    street: "[Full street address to be confirmed]",
    locality: "Mahadevapura",
    city: "Bengaluru",
    region: "Karnataka",
    postalCode: "560048",
    country: "IN",
    /** Used for the Google Maps embed and directions link */
    mapQuery: "Mahadevapura, Bengaluru, Karnataka",
    geo: { latitude: 12.9892, longitude: 77.6975 },
  },

  /** Placeholder hours: confirm with BE-FIT */
  hours: [
    {
      label: "Mon – Sat",
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "05:00",
      closes: "22:00",
      display: "5:00 AM – 10:00 PM",
      opensDisplay: "5:00 AM",
    },
    {
      label: "Sunday",
      days: ["Sunday"],
      opens: "06:00",
      closes: "12:00",
      display: "6:00 AM – 12:00 PM",
      opensDisplay: "6:00 AM",
    },
  ] satisfies DayHours[],

  /** Placeholder URLs: replace with real profiles */
  socials: {
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
    youtube: "https://www.youtube.com/",
  },

  keywords: [
    "gym in Mahadevapura",
    "fitness centre Mahadevapura Bengaluru",
    "personal trainer Mahadevapura",
    "best gym Mahadevapura",
    "gym near Whitefield",
    "weight loss gym Bengaluru",
    "Zumba classes Mahadevapura",
    "BE-FIT Fitness",
  ],
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/programs/", label: "Programs" },
  { href: "/trainers/", label: "Trainers" },
  { href: "/membership/", label: "Membership" },
  { href: "/timetable/", label: "Timetable" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/contact/", label: "Contact" },
] as const;

/** Homepage stats counter: placeholder numbers, edit freely */
export const stats = [
  { value: 500, suffix: "+", label: "Members" },
  { value: 10, suffix: "+", label: "Expert Trainers" },
  { value: 50, suffix: "+", label: "Weekly Classes" },
  { value: 5, suffix: " AM", label: "Weekday Opening" },
] as const;
