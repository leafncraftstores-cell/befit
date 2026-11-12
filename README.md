# BE-FIT Fitness: Website

Marketing website for **BE-FIT Fitness**, a gym in Mahadevapura, Bengaluru. It is front-end
only: there is no backend, database or login. Every page is pre-rendered to static HTML, and
all content lives in typed files in `/data`.

**Stack:** Next.js 15 (App Router, `output: "export"`), React 19, TypeScript (strict),
Tailwind CSS v4, lucide-react, react-hook-form + zod (enquiry form only).

---

## Quick start

Requires **Node.js 20 or newer**.

```bash
npm i            # install
npm run dev      # dev server at http://localhost:3000
npm run build    # production build → static site in /out
npm start        # preview the built site from /out (http://localhost:3000)
```

Other scripts:

| Script              | What it does                                                      |
| ------------------- | ----------------------------------------------------------------- |
| `npm run images`    | Resizes photos in `assets/photos/` to WebP files in `public/img/` |
| `npm run lint`      | ESLint (Next.js core-web-vitals + TypeScript rules)               |
| `npm run typecheck` | TypeScript, no emit                                               |
| `npm run format`    | Prettier (with Tailwind class sorting)                            |

---

## Editing content

All copy, prices, hours and images live in `/data`. Edit a file and the change shows up
everywhere it's used.

| File                   | Controls                                                                     |
| ---------------------- | ---------------------------------------------------------------------------- |
| `data/site.ts`         | Name, phone/WhatsApp, email, address, **opening hours**, socials, nav, stats |
| `data/plans.ts`        | **Membership prices**, plan features, add-ons, comparison table, terms       |
| `data/programs.ts`     | The 9 programs and their detail pages (`/programs/[slug]`)                   |
| `data/trainers.ts`     | Trainer names, roles, certifications, photos, social links                   |
| `data/timetable.ts`    | Weekly class schedule and class types (filter chips)                         |
| `data/gallery.ts`      | Gallery photos and categories                                                |
| `data/faqs.ts`         | Homepage FAQs and membership FAQs                                            |
| `data/testimonials.ts` | Member reviews                                                               |
| `data/features.ts`     | "Why BE-FIT" grid and the five brand pillars                                 |
| `data/images.ts`       | Every other photo used on the site                                           |

### Prices

In `data/plans.ts`, set each price as a number of rupees. `null` displays as **₹—**.

```ts
prices: { monthly: 1999, quarterly: 5499, halfYearly: 9999, yearly: 17999 },
```

The "Join Now" buttons open WhatsApp with the plan name and billing period already filled in.

### Hours

Edit `site.hours` in `data/site.ts`. The footer, contact page, timetable page and the Google
structured data (JSON-LD) all update automatically.

### Placeholders still to confirm with BE-FIT

Anything shown in `[square brackets]` on the site is a placeholder:

- the full street address,
- email and social profile URLs,
- prices,
- trainer names, photos and certifications,
- class times and coaches,
- member reviews and transformation photos,
- the stats figures (500+ members and so on),
- parking, the ladies' batch and female trainer details,
- membership terms.

Search the code for `[` or `confirm` to find them all.

> Reviews and transformation photos are deliberately **not** invented. Add only genuine
> ones, with the member's permission.

---

## Images

All current photos are from **Unsplash**, which is free for commercial use under the
[Unsplash License](https://unsplash.com/license). The site applies a consistent brand
treatment (slight desaturation, extra contrast, red/black overlays) so that mixed photos look
like one shoot.

There are two ways to use a photo.

**1. Self-hosted (recommended for hero and banner photos, and fastest):**

1. Put the original (JPG, PNG or WebP, ideally at least 1920px wide) in `assets/photos/`,
   for example `assets/photos/front-desk.jpg`.
2. Run `npm run images`. This writes `public/img/front-desk-384.webp` through
   `front-desk-1920.webp`, keeping each file at or under ~200 KB.
3. Use it in `data/images.ts` with `src: local("front-desk")`.

The hero photos and all program and banner photos are already self-hosted this way.

**2. Remote:** paste any `https://images.unsplash.com/...` or `https://images.pexels.com/...`
URL. The image loader (`lib/image-loader.ts`) requests the exact width needed, and the CDN
serves AVIF or WebP.

**Logo:** the header, footer, favicon and loaders use an SVG recreation of the BE-FIT emblem
and wordmark (`components/ui/Emblem.tsx`, `components/ui/Logo.tsx`, `app/icon.svg`,
`public/emblem.svg`), so they stay sharp at any size and need no image download. To use the
supplied raster logo instead, put it at `public/logo.png` and swap the markup in `Logo.tsx`
for a `next/image`, as the comment in that file explains.

---

## Deploying to Vercel

1. Push this folder to a GitHub, GitLab or Bitbucket repository.
2. In Vercel, choose **Add New → Project** and import the repository. The framework preset
   (Next.js) is detected automatically, and no settings need changing.
3. Under **Environment Variables**, set `NEXT_PUBLIC_SITE_URL` to the final domain, for
   example `https://www.befitfitness.in`. This is used for canonical URLs, the sitemap,
   Open Graph tags and JSON-LD.
4. Deploy. To use a custom domain, add it under **Settings → Domains**.

Because the build is a plain static site (`/out`), it also works on Netlify, Cloudflare
Pages, GitHub Pages or any web server.

---

## Project structure

```
app/                  Routes (App Router). Every page is statically pre-rendered.
  page.tsx            Home (16 sections)
  about/ programs/ programs/[slug]/ trainers/ membership/ timetable/ gallery/ contact/
  not-found.tsx       404 ("Rest day? Not here.")
  og-image.png/       Social share image, generated at build time
  sitemap.ts robots.ts icon.svg globals.css (design tokens and brand utilities)
components/
  layout/             Header (server markup + small client shell), NavLink, Footer
  sections/           Page sections (Hero, PillarsStrip, Stats, ProgramsGrid, …)
  ui/                 Reusable parts: Button, Badge, SectionHeading, SkewedTitle,
                      DiagonalDivider, Card, PricingCard, TrainerCard, Counter, Tabs,
                      Accordion, Carousel, BMICalculator, BeforeAfterSlider, Lightbox,
                      GalleryGrid, ContactForm, MapFacade, FloatingActions, MobileBottomBar
data/                 All editable content (see above)
lib/                  Helpers: WhatsApp/tel links, SEO metadata, JSON-LD, image loader
scripts/              optimize-images.mjs
assets/               Original photos and the font used for the share image
public/               Static files (self-hosted photos, emblem, grain texture)
```

---

## Performance, SEO and accessibility notes

- **JavaScript:** Server Components by default. The homepage ships about 119 KB of gzipped
  JS, of which about 103 KB is the Next.js/React baseline. The enquiry form (react-hook-form
  - zod), BMI calculator, before/after slider and lightbox load only when they are about to
    be used, and the stat counters are pure CSS.
- **Rendering:** offscreen sections use `content-visibility: auto`. The display font has a
  metric-matched fallback so headlines don't jump when the font loads, and the Google Map
  loads only when someone clicks it.
- **SEO:** each page has its own title, description and canonical URL, plus Open Graph and
  Twitter tags. The site includes `sitemap.xml`, `robots.txt`, and JSON-LD for
  `ExerciseGym`/`HealthClub` (with opening hours, phone and area), `FAQPage` and
  `BreadcrumbList`. Copy targets local searches such as "gym in Mahadevapura" and "personal
  trainer Mahadevapura".
- **Accessibility:** a skip link, visible focus rings, keyboard-operable tabs, accordions,
  carousels and lightbox, labelled icon buttons, WCAG AA colour contrast, and support for
  `prefers-reduced-motion`.
- **Measured locally:** Lighthouse mobile scores were 94–96 for Performance and 100 for
  Accessibility, Best Practices and SEO on all main pages, with CLS ≤ 0.04. Lighthouse's
  _simulated_ LCP is about 2.8s. The _observed_ LCP in the same runs was about 0.3–0.5s.
  Re-run Lighthouse against the deployed URL, where CDN caching applies.
#   b e f i t  
 