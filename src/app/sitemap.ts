import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

/** Next.js가 자동으로 /sitemap.xml 에 제공합니다. */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
