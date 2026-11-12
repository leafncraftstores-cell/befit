import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { programs } from "@/data/programs";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    { path: "/", priority: 1 },
    { path: "/membership/", priority: 0.9 },
    { path: "/programs/", priority: 0.9 },
    { path: "/contact/", priority: 0.9 },
    { path: "/about/", priority: 0.8 },
    { path: "/trainers/", priority: 0.7 },
    { path: "/timetable/", priority: 0.7 },
    { path: "/gallery/", priority: 0.6 },
  ];
  return [
    ...pages.map((p) => ({
      url: `${site.url}${p.path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p.priority,
    })),
    ...programs.map((p) => ({
      url: `${site.url}/programs/${p.slug}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
