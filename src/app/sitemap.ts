import type { MetadataRoute } from "next";

const routes = [
  "",
  "/company",
  "/news/scopwise-funding-2026",
  "/product/map",
  "/product/rules",
  "/product/review",
  "/request-demo",
  "/sign-in",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://scopwise.com${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/product/") ? 0.8 : 0.6,
  }));
}
