import type { MetadataRoute } from "next";
import { niceClasses } from "@/lib/classes";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://trademarkdashboard.com";
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/search`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/trademark-classes`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/insights`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ];

  const classPages: MetadataRoute.Sitemap = niceClasses.map((c) => ({
    url: `${base}/trademark-classes/class-${c.number}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const guidePages: MetadataRoute.Sitemap = [
    "trademark-search-guide",
    "register-trademark-uk",
    "register-trademark-eu",
    "trademark-vs-copyright-vs-patent",
  ].map((slug) => ({
    url: `${base}/guides/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const toolPages: MetadataRoute.Sitemap = [
    "name-risk-scanner",
    "availability-checker",
    "cost-calculator",
    "strength-scorer",
    "monitoring",
  ].map((slug) => ({
    url: `${base}/tools/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...classPages, ...guidePages, ...toolPages];
}
