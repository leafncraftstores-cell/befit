import type { Metadata } from "next";
import { site } from "@/data/site";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

/** Consistent per-page metadata: title, description, canonical, OG and Twitter. */
export function pageMetadata({ title, description, path, keywords = [] }: PageMetaInput): Metadata {
  return {
    title,
    description,
    keywords: [...keywords, ...site.keywords],
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url: path,
      siteName: site.name,
      locale: site.locale,
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "BE-FIT Fitness: gym in Mahadevapura, Bengaluru. Now open.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images: ["/og-image.png"],
    },
  };
}
