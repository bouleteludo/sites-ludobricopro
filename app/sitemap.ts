import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

const ROUTES = ["/", "/services", "/a-propos", "/devis", "/rendez-vous", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "/" ? 1 : 0.7,
  }));
}
