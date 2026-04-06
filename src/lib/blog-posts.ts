export type BlogCategorySlug =
  | "podcast-production"
  | "content-systems"
  | "ai-consulting"
  | "authority-building";

export type BlogCategory = {
  slug: BlogCategorySlug;
  label: string;
  description: string;
  serviceHref?: string;
  pillarSlug: string;
  localHref?: string;
};

export type BlogPostSummary = {
  slug: string;
  title: string;
  description: string;
  category: BlogCategorySlug;
  readTime: string;
  pillar: boolean;
  featured?: boolean;
  normalizedFromDraft?: boolean;
};

export const blogCategories: BlogCategory[] = [
  {
    slug: "podcast-production",
    label: "Podcast Production",
    description:
      "Business podcast strategy, launch systems, pricing, agencies, and ROI for operator-led brands.",
    serviceHref: "/services/podcast-production",
    pillarSlug: "podcast-production-guide",
    localHref: "/podcast-production-miami",
  },
  {
    slug: "content-systems",
    label: "Content Systems",
    description:
      "Repurposing workflows, publishing systems, and long-form content leverage for consistent authority building.",
    serviceHref: "/services/content-systems",
    pillarSlug: "content-repurposing-guide",
    localHref: "/content-systems-miami",
  },
  {
    slug: "ai-consulting",
    label: "AI Consulting",
    description:
      "Practical AI systems for entrepreneurs, workflow automation, content leverage, and implementation support.",
    serviceHref: "/services/ai-consulting",
    pillarSlug: "ai-content-automation-guide",
    localHref: "/ai-consulting-miami",
  },
  {
    slug: "authority-building",
    label: "Authority Building",
    description:
      "Authority building systems for entrepreneurs using positioning, personal brand strategy, and repeatable content workflows.",
    pillarSlug: "how-to-build-authority-online",
  },
];

export const blogPosts: BlogPostSummary[] = [
  {
    slug: "podcast-production-guide",
    title: "The Complete Guide to Podcast Production for Businesses",
    description:
      "Learn how to structure, launch, and scale a podcast that builds authority and routes listeners into revenue.",
    category: "podcast-production",
    readTime: "12 min read",
    pillar: true,
    featured: true,
  },
  {
    slug: "content-repurposing-guide",
    title: "Content Repurposing Guide: How to Turn One Idea Into 30+ Pieces of Content",
    description:
      "Turn one recording into 30+ assets with a repeatable content repurposing and distribution workflow.",
    category: "content-systems",
    readTime: "12 min read",
    pillar: true,
    featured: true,
  },
  {
    slug: "ai-content-automation-guide",
    title: "The Complete Guide to AI Content Automation",
    description:
      "Learn how AI content automation works and how to build systems that scale content, consistency, and business growth.",
    category: "ai-consulting",
    readTime: "16 min read",
    pillar: true,
    featured: true,
  },
  {
    slug: "podcast-production-cost",
    title: "How Much Does Podcast Production Cost in 2026?",
    description:
      "A transparent guide to podcast production pricing for business owners comparing DIY, freelance, and full-service systems.",
    category: "podcast-production",
    readTime: "8 min read",
    pillar: false,
    featured: true,
    normalizedFromDraft: true,
  },
  {
    slug: "what-does-a-podcast-production-agency-do",
    title: "What Does a Podcast Production Agency Do?",
    description:
      "Understand what agencies own, how they differ from freelancers, and when a business should upgrade to full workflow support.",
    category: "podcast-production",
    readTime: "7 min read",
    pillar: false,
    normalizedFromDraft: true,
  },
  {
    slug: "how-to-start-a-podcast-for-business",
    title: "How to Start a Podcast for Your Business",
    description:
      "A practical launch framework for businesses that want a podcast to generate authority, content leverage, and clients.",
    category: "podcast-production",
    readTime: "9 min read",
    pillar: false,
    normalizedFromDraft: true,
  },
  {
    slug: "podcast-roi-for-business",
    title: "Podcast ROI for Business",
    description:
      "Measure whether a business podcast is creating authority, content output, and client acquisition instead of vanity metrics.",
    category: "podcast-production",
    readTime: "8 min read",
    pillar: false,
    normalizedFromDraft: true,
  },
  {
    slug: "content-repurposing-system",
    title: "Content Repurposing System: How to Turn One Recording Into 30+ Assets",
    description:
      "Build the workflow that turns one source asset into articles, clips, emails, and social posts without starting from zero.",
    category: "content-systems",
    readTime: "8 min read",
    pillar: false,
    normalizedFromDraft: true,
  },
  {
    slug: "podcast-content-repurposing",
    title: "Podcast Content Repurposing: How to Turn One Episode Into 20+ Pieces of Content",
    description:
      "Turn one episode into clips, blogs, emails, and social posts with a structured podcast repurposing workflow.",
    category: "content-systems",
    readTime: "8 min read",
    pillar: false,
    normalizedFromDraft: true,
  },
  {
    slug: "ai-tools-for-entrepreneurs",
    title: "AI Tools for Entrepreneurs in 2026",
    description:
      "A lean AI stack for entrepreneurs focused on research, content, automation, and workflow clarity.",
    category: "ai-consulting",
    readTime: "9 min read",
    pillar: false,
    normalizedFromDraft: true,
  },
  {
    slug: "chatgpt-for-business-owners",
    title: "ChatGPT for Business Owners",
    description:
      "Practical ChatGPT use cases that help operators save time, support content workflows, and improve execution quality.",
    category: "ai-consulting",
    readTime: "8 min read",
    pillar: false,
    normalizedFromDraft: true,
  },
  {
    slug: "ai-consulting-for-small-business",
    title: "AI Consulting for Small Business: What It Is and When You Actually Need It",
    description:
      "Learn when small businesses need AI consulting, what problems it solves, and how the right system reduces manual work.",
    category: "ai-consulting",
    readTime: "8 min read",
    pillar: false,
    normalizedFromDraft: true,
  },
  {
    slug: "ai-automation-for-content-creators",
    title: "AI Automation for Content Creators: Build a System That Runs Without You",
    description:
      "Use AI automation to produce, repurpose, and distribute content through systems instead of manual repetition.",
    category: "ai-consulting",
    readTime: "8 min read",
    pillar: false,
    normalizedFromDraft: true,
  },
  {
    slug: "how-to-build-authority-online",
    title: "How to Build Authority Online in 2026",
    description:
      "Build authority online through positioning, consistency, and systems instead of chasing trends.",
    category: "authority-building",
    readTime: "9 min read",
    pillar: true,
    normalizedFromDraft: true,
  },
  {
    slug: "personal-brand-strategy-for-entrepreneurs",
    title: "Personal Brand Strategy for Entrepreneurs",
    description:
      "Build a personal brand strategy that turns consistent messaging and content systems into influence that converts.",
    category: "authority-building",
    readTime: "9 min read",
    pillar: false,
    normalizedFromDraft: true,
  },
  {
    slug: "ai-automation-podcast-production",
    title: "How to Automate Podcast Production with AI",
    description:
      "Learn how AI podcast automation turns one episode into faster production, clips, articles, and distribution-ready assets.",
    category: "ai-consulting",
    readTime: "12 min read",
    pillar: false,
  },
];

export function getBlogCategory(slug: BlogCategorySlug) {
  return blogCategories.find((category) => category.slug === slug);
}

export function getBlogPostsByCategory(
  slug: BlogCategorySlug,
  options?: { normalizedOnly?: boolean },
) {
  return blogPosts.filter((post) => {
    if (post.category !== slug) {
      return false;
    }

    if (options?.normalizedOnly) {
      return Boolean(post.normalizedFromDraft);
    }

    return true;
  });
}
