import type { MetadataRoute } from "next";

const siteUrl = "https://javinhotels.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/rooms",
    "/rooms/executive-suite",
    "/gallery",
    "/events",
    "/contact",
    "/booking-confirmed",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
