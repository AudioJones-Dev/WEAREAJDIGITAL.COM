export type NavItem = {
  title: string;
  href?: string;
  description?: string;
  items?: NavItem[];
};

export const mainNavConfig: NavItem[] = [
  {
    title: "Services",
    items: [
      {
        title: "Podcast Production",
        href: "/services/podcast-production",
        description: "Studio-quality podcast systems for authority and growth.",
      },
      {
        title: "AI Consulting",
        href: "/services/ai-consulting",
        description: "Practical AI workflows to drastically scale content execution.",
      },
      {
        title: "Content Systems",
        href: "/services/content-systems",
        description: "Turn one recording into 30+ consistent cross-platform assets.",
      },
    ],
  },
  {
    title: "Results",
    items: [
      {
        title: "Case Studies Index",
        href: "/case-studies",
        description: "Browse all results and proof of our systems at work.",
      },
      {
        title: "Featured: Podcast Authority System",
        href: "/case-studies/podcast-authority-system",
        description: "How one business scaled to 30+ inbound assets a month.",
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        title: "Podcast Production Guide",
        href: "/blog/podcast-production-guide",
        description: "Blueprint for B2B lead generation via podcasting.",
      },
      {
        title: "Content Repurposing Guide",
        href: "/blog/content-repurposing-guide",
        description: "The exact pipeline to turn 1 hour into a month of content.",
      },
      {
        title: "AI Content Automation Guide",
        href: "/blog/ai-content-automation-guide",
        description: "Replacing editorial tasks with reliable LLM workflows.",
      },
      {
        title: "Podcast Production Cost",
        href: "/blog/podcast-production-cost",
        description: "A breakdown of investment vs. return.",
      },
      {
        title: "AI Tools for Entrepreneurs",
        href: "/blog/ai-tools-for-entrepreneurs",
        description: "A practical AI stack for entrepreneurs focused on research, content, and workflow leverage.",
      },
      {
        title: "View All Articles",
        href: "/blog",
        description: "Browse our complete library of system guides.",
      },
    ],
  },
  {
    title: "Local",
    description: "Serving Miami-Dade, Broward, and Palm Beach",
    items: [
      {
        title: "Podcast Production Miami",
        href: "/podcast-production-miami",
      },
      {
        title: "AI Consulting Miami",
        href: "/ai-consulting-miami",
      },
      {
        title: "Content Systems Miami",
        href: "/content-systems-miami",
      },
    ],
  },
  {
    title: "About",
    href: "/about",
  },
];


