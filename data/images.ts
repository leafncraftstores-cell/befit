/**
 * Every photo on the site lives here so BE-FIT's own photography can replace stock images
 * in one place. All current images are from Unsplash (free for commercial use under the
 * Unsplash License: https://unsplash.com/license).
 *
 * To swap in a real photo:
 *  - Self-hosted (recommended for hero images): put the original in assets/photos/,
 *    run `npm run images`, and use local("<file-name>") below.
 *  - Remote: paste any https://images.unsplash.com/... or https://images.pexels.com/... URL.
 *  - Local: drop an optimised JPG/WebP (≤ 200 KB, ~1600px wide) into /public/images and use
 *    "/images/your-file.webp" as the `src`.
 */

export type Img = {
  src: string;
  alt: string;
};

const u = (id: string) => `https://images.unsplash.com/photo-${id}`;

/**
 * Self-hosted photo from assets/photos/<name>.jpg, resized by `npm run images` into
 * public/img/<name>-<width>.webp. Used for above-the-fold images (fastest LCP).
 */
const local = (name: string) => `/img/${name}.webp`;

export const images = {
  // Hero: two low-key athlete back shots, shown as split diagonal panels.
  // Self-hosted (above the fold). Source: https://images.unsplash.com/photo-1434682881908-b43d0467b798
  heroFemale: {
    src: local("hero-female"),
    alt: "Female athlete seen from behind in a dark gym, showing a strong, toned back",
  },
  // Self-hosted (above the fold). Source: https://images.unsplash.com/photo-1603287681836-b174ce5074c2
  heroMale: {
    src: local("hero-male"),
    alt: "Male athlete flexing his back muscles under dramatic low-key lighting",
  },

  // Self-hosted (above the fold). Source: https://images.unsplash.com/photo-1611672585731-fa10603fb9e0
  aboutMain: {
    src: local("about-main"),
    alt: "Athlete with headphones training among dumbbell racks in a dark gym",
  },
  aboutSecondary: {
    src: u("1534438327276-14e5300c3a48"),
    alt: "Rows of dumbbells on racks in a modern gym",
  },
  nourish: {
    src: u("1512621776951-a57141f2eefd"),
    alt: "Colourful healthy bowl with vegetables, chickpeas and avocado",
  },
  bmi: {
    src: u("1549060279-7e168fcee0c2"),
    alt: "Close-up of an athlete gripping a barbell",
  },
  cta: {
    src: u("1605296867304-46d5465a13f1"),
    alt: "Athlete preparing for a heavy deadlift in a dark gym",
  },
  // Self-hosted (above the fold). Source: https://images.unsplash.com/photo-1567598508481-65985588e295
  timetable: {
    src: local("timetable"),
    alt: "Woman training with dumbbells in a bright gym",
  },
  // Self-hosted (above the fold). Source: https://images.unsplash.com/photo-1540497077202-7c8a3999166f
  contact: {
    src: local("gym-floor"),
    alt: "Spacious gym floor with cardio and strength machines",
  },
  // Self-hosted (above the fold). Source: https://images.unsplash.com/photo-1580261450046-d0a30080dc9b
  notFound: {
    src: local("not-found"),
    alt: "Empty squat rack with a loaded barbell at sunset",
  },

  // Programs
  // Self-hosted (above the fold). Source: https://images.unsplash.com/photo-1517836357463-d25dfeac3438
  strength: {
    src: local("strength"),
    alt: "Athlete lifting a loaded barbell off the gym floor",
  },
  // Self-hosted (above the fold). Source: https://images.unsplash.com/photo-1599058917212-d750089bc07e
  weightLoss: {
    src: local("weight-loss"),
    alt: "Woman training with battle ropes",
  },
  // Self-hosted (above the fold). Source: https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e
  muscle: {
    src: local("muscle"),
    alt: "Muscular man doing a dumbbell curl",
  },
  // Self-hosted (above the fold). Source: https://images.unsplash.com/photo-1585152968992-d2b9444408cc
  personal: {
    src: local("personal-training"),
    alt: "Trainer spotting a member on the dumbbell bench press",
  },
  // Self-hosted (above the fold). Source: https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3
  functional: {
    src: local("functional"),
    alt: "Athlete doing a kettlebell Turkish get-up",
  },
  // Self-hosted (above the fold). Source: https://images.unsplash.com/photo-1534258936925-c58bed479fcb
  hiit: {
    src: local("hiit"),
    alt: "Athlete doing a high-intensity battle rope workout",
  },
  // Self-hosted (above the fold). Source: https://images.unsplash.com/photo-1524594152303-9fd13543fe6e
  zumba: {
    src: local("zumba"),
    alt: "Group dance fitness class in a studio",
  },
  // Self-hosted (above the fold). Source: https://images.unsplash.com/photo-1588286840104-8957b019727f
  yoga: {
    src: local("yoga"),
    alt: "Group yoga and mobility class in a studio",
  },
  // Self-hosted (above the fold). Source: https://images.unsplash.com/photo-1490645935967-10de6ba17061
  nutrition: {
    src: local("nutrition"),
    alt: "Healthy meal with eggs, greens and vegetables",
  },

  // Trainer placeholders: replace with real trainer portraits
  trainer1: { src: u("1567013127542-490d757e51fc"), alt: "Placeholder trainer photo" },
  trainer2: { src: u("1548690312-e3b507d8c110"), alt: "Placeholder trainer photo" },
  trainer3: { src: u("1597452485669-2c7bb5fef90d"), alt: "Placeholder trainer photo" },
  trainer4: { src: u("1594381898411-846e7d193883"), alt: "Placeholder trainer photo" },
  trainer5: { src: u("1579758629938-03607ccdbaba"), alt: "Placeholder trainer photo" },
  trainer6: { src: u("1550345332-09e3ac987658"), alt: "Placeholder trainer photo" },
} satisfies Record<string, Img>;

export { u as unsplash };
