import type { MetadataRoute } from "next";

const BASE_URL = "https://www.weareajdigital.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Core pages
  const corePages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/apply`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Service pages
  const servicePages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/services/podcast-production`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/ai-consulting`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/content-systems`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  // Local landing pages
  const localPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/podcast-production-miami`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/ai-consulting-miami`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/content-systems-miami`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Case studies
  const caseStudyPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/case-studies`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/case-studies/podcast-authority-system`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Blog index
  const blogIndex: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // Blog articles
  const blogSlugs = [
    "ai-automation-for-content-creators",
    "ai-automation-podcast-production",
    "ai-consulting-for-small-business",
    "ai-consulting-small-business",
    "ai-content-automation-guide",
    "ai-tools-for-content-creation",
    "ai-tools-for-entrepreneurs",
    "chatgpt-for-business-owners",
    "content-repurposing-guide",
    "content-repurposing-system",
    "how-to-build-authority-online",
    "how-to-launch-podcast-business",
    "how-to-start-a-podcast-for-business",
    "personal-brand-strategy-for-entrepreneurs",
    "podcast-content-repurposing",
    "podcast-production-agency",
    "podcast-production-cost",
    "podcast-production-guide",
    "podcast-roi-for-business",
    "what-does-a-podcast-production-agency-do",
  ];

  const blogArticles: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...corePages,
    ...servicePages,
    ...localPages,
    ...caseStudyPages,
    ...blogIndex,
    ...blogArticles,
  ];
}
