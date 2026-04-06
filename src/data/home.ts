// ─── AJ Digital Homepage Data ───────────────────────────────────────────────

export const pillarCards = [
  {
    title: "Podcast Production",
    description:
      "High-fidelity audio and cinematic multi-cam video capture that positions you as a category leader.",
    imageSrc: "/images/home/pillar-podcast-production.jpg",
    imageAlt:
      "Professional podcast studio with premium microphones and atmospheric studio lighting",
  },
  {
    title: "Content Repurposing",
    description:
      "Turning single episodes into dozens of high-impact clips, threads, and newsletters across all platforms.",
    imageSrc: "/images/home/pillar-content-repurposing.jpg",
    imageAlt:
      "Multiple screens displaying social media clips and vertical video edits from podcast repurposing workflow",
  },
  {
    title: "Marketing Operations",
    description:
      "Strategic distribution and backend systems that ensure your message reaches the right decision-makers.",
    imageSrc: "/images/home/pillar-marketing-ops.jpg",
    imageAlt:
      "Marketing operations dashboard showing analytics, workflow automation, and content planning",
  },
] as const;

export const stats = [
  { value: "50M+",  label: "Impressions Generated" },
  { value: "250+",  label: "Episodes Produced" },
  { value: "12+",   label: "Markets Penetrated" },
] as const;

export const personas = [
  {
    title: "Founders",
    subtitle: "Build Authority",
    imageSrc: "/images/home/persona-founder.jpg",
    imageAlt:
      "Confident founder recording a business podcast in a professional office studio setup",
  },
  {
    title: "Consultants",
    subtitle: "Attract Premium Leads",
    imageSrc: "/images/home/persona-consultant.jpg",
    imageAlt:
      "Strategic consultant speaking into a premium microphone during a branded podcast interview",
  },
  {
    title: "Creators",
    subtitle: "Scale Production",
    imageSrc: "/images/home/persona-creator.jpg",
    imageAlt:
      "Content creator filming a talking-head podcast episode with professional studio lighting",
  },
  {
    title: "Service Biz",
    subtitle: "Local Dominance",
    imageSrc: "/images/home/persona-local-business.jpg",
    imageAlt:
      "Local business owner recording branded marketing content in a professional production setup",
  },
] as const;

export const workflowSteps = [
  {
    number: "01",
    title: "Record",
    description: "Capture raw genius with our mobile or remote high-end kits.",
  },
  {
    number: "02",
    title: "Edit",
    description: "Cinematic narrative editing that keeps retention high.",
  },
  {
    number: "03",
    title: "Repurpose",
    description: "Extracting micro-content for TikTok, Reels, and LinkedIn.",
  },
  {
    number: "04",
    title: "Distribute",
    description: "Strategic syndication across all major platforms.",
  },
] as const;

export const locations = [
  "Miami",
  "Broward",
  "West Palm",
  "Fort Myers",
] as const;

export const services = [
  {
    tag: "System 01",
    title: "Elite Production",
    description:
      "We don't just record; we produce. From lighting design to sound engineering, we ensure your visual and sonic identity matches your brand's prestige.",
    imageSrc: "/images/home/service-podcast-production.jpg",
    imageAlt:
      "Extreme close-up of a high-end studio microphone with blurred premium studio gear in the background",
    href: "/services/podcast-production",
  },
  {
    tag: "System 02",
    title: "Content Multiplication",
    description:
      "One recording session generates weeks of content. Our editorial team extracts the gold from every episode and formats it for maximum platform reach.",
    imageSrc: "/images/home/service-content-repurposing.jpg",
    imageAlt:
      "Content repurposing workflow showing vertical clips, editing timeline, and multi-platform deliverables",
    href: "/services/content-systems",
  },
  {
    tag: "System 03",
    title: "Marketing Operations",
    description:
      "Calendars, automation, reporting, and strategic distribution. We build the operational backbone so your content actually reaches the audience it deserves.",
    imageSrc: "/images/home/service-marketing-ops.jpg",
    imageAlt:
      "Marketing operations setup with content calendar, analytics dashboard, and workflow automation",
    href: "/services/ai-consulting",
  },
] as const;
