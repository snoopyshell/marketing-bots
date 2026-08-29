import type { MetadataRoute } from "next";
import { packs } from "@/data/packs";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticRoutes = ["", "/publish", "/categories"].map((path) => ({
    url: `${site.url}${path || "/"}`,
    lastModified,
  }));

  return [
    ...staticRoutes,
    ...packs.map((pack) => ({
      url: `${site.url}/bots/${pack.slug}`,
      lastModified,
    })),
  ];
}
