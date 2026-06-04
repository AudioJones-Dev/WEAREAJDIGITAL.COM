import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/json-ld";
import {
  buildBreadcrumbJsonLd,
  buildOrganizationJsonLd,
  siteUrl,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "See how AJ Digital uses podcast systems, content workflows, and AI automation to create measurable business outcomes.",
};

const featuredCaseStudy = {
  title: "How a Business Turned One Podcast Into 30+ Monthly Content Assets",
  slug: "podcast-authority-system",
  category: ["Podcast Production", "Content Systems", "AI Systems"],
  problem: "Scattered execution, inconsistent output, and too much founder time lost in production.",
  result:
    "Installed an end-to-end podcast production and repurposing system that created 30+ usable assets each month.",
  keyStat: "30+ Assets / Month",
};

const supportingRoutes = [
  {
    title: "Podcast Production Service",
    href: "/services/podcast-production",
    description:
      "See the commercial offer behind the production and distribution workflow.",
  },
  {
    title: "Content Systems Service",
    href: "/services/content-systems",
    description:
      "Understand how the repurposing and distribution layer is built.",
  },
  {
    title: "Podcast Production Guide",
    href: "/blog/podcast-production-guide",
    description:
      "Read the pillar article that explains the system architecture in more detail.",
  },
];

export default function CaseStudiesIndex() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${siteUrl}/case-studies/#webpage`,
        url: `${siteUrl}/case-studies`,
        name: "Case Studies | AJ Digital",
        description:
          "See how AJ Digital uses podcast systems, content workflows, and AI automation to create measurable business outcomes.",
      },
      buildOrganizationJsonLd(),
      buildBreadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Case Studies", path: "/case-studies" },
      ]),
      {
        "@type": "ItemList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            url: `${siteUrl}/case-studies/${featuredCaseStudy.slug}`,
            name: featuredCaseStudy.title,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-bg-base text-fg-0">
      <JsonLd data={jsonLd} />

      <section className="relative border-b border-border-subtle bg-bg-base px-6 pb-16 pt-24 sm:px-12 lg:px-24">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="t-h1">
            Case studies that show what the systems actually do
          </h1>
          <p className="t-lead mx-auto mt-6 max-w-2xl text-fg-2">
            Review the proof behind AJ Digital&apos;s podcast production,
            content systems, and AI workflow engagements.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/apply"
              data-track="case-studies-hero-apply-cta"
              data-ga-event="apply_strategy_session_click"
              className="aj-btn-signal"
            >
              Apply for a Strategy Session
            </Link>
            <Link
              href="/services/podcast-production"
              className="aj-btn-intel"
            >
              Explore Podcast Production
            </Link>
          </div>
        </div>
      </section>

      <div className="border-b border-border-subtle bg-surface-1 py-8">
        <div className="t-mono mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-6 text-fg-2 sm:justify-between sm:px-12">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-signal-yellow" />
            30+ assets from one recording
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-signal-yellow" />
            Systems over random posting
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-signal-yellow" />
            Strategy plus implementation
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-signal-yellow" />
            Authority-focused growth
          </div>
        </div>
      </div>

      <main className="px-6 py-16 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20">
            <h2 className="t-label mb-6 text-fg-3">
              Featured case study
            </h2>
            <div className="aj-card relative flex flex-col overflow-hidden p-0 md:flex-row">
              <div className="relative z-10 w-full p-8 md:w-1/2 md:p-12">
                <div className="mb-6 flex flex-wrap gap-2">
                  {featuredCaseStudy.category.map((category) => (
                    <span
                      key={category}
                      className="aj-badge is-p2"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <h3 className="t-h3 text-fg-0">
                  {featuredCaseStudy.title}
                </h3>
                <p className="t-body mt-6 leading-8 text-fg-2">
                  <strong className="text-fg-0">Problem:</strong>{" "}
                  {featuredCaseStudy.problem}
                </p>
                <p className="t-body mt-4 leading-8 text-fg-2">
                  <strong className="text-fg-0">Result:</strong>{" "}
                  {featuredCaseStudy.result}
                </p>
                <Link
                  href={`/case-studies/${featuredCaseStudy.slug}`}
                  className="mt-8 inline-flex items-center font-bold text-fg-1 transition-colors hover:text-signal-yellow"
                >
                  Read full case study {"->"}
                </Link>
              </div>
              <div className="flex min-h-[300px] w-full items-center justify-center border-t border-border-subtle bg-surface-2 p-8 md:w-1/2 md:border-l md:border-t-0">
                <div className="text-center">
                  <p className="t-mono mb-2 text-6xl font-medium text-signal-yellow md:text-7xl">
                    {featuredCaseStudy.keyStat}
                  </p>
                  <p className="t-label mt-4 text-fg-2">
                    Measurable outcome
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="aj-card is-surface-2 mb-16 p-8 md:p-12">
            <div className="max-w-3xl">
              <h2 className="t-h2 mb-6 text-fg-0">
                Why systems beat random effort
              </h2>
              <div className="t-body-lg space-y-4 leading-relaxed text-fg-2">
                <p>
                  Most agencies sell ideas, deliverables, or strategy decks.
                  Case studies matter because they prove implementation.
                </p>
                <p>
                  High-intent buyers do not want scattered deliverables. They
                  want infrastructure that compounds.
                </p>
                <p>
                  AJ Digital focuses on building{" "}
                  <Link
                    href="/services/content-systems"
                    className="text-fg-1 underline underline-offset-4 decoration-fg-2/40 hover:text-signal-yellow"
                  >
                    content systems
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/services/ai-consulting"
                    className="text-fg-1 underline underline-offset-4 decoration-fg-2/40 hover:text-signal-yellow"
                  >
                    AI automation workflows
                  </Link>{" "}
                  that create measurable outputs.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="t-label mb-6 text-fg-3">
              Explore the rest of the system
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {supportingRoutes.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="aj-card group"
                >
                  <h3 className="t-h4 text-fg-0">{item.title}</h3>
                  <p className="t-small mt-3 leading-7 text-fg-2">
                    {item.description}
                  </p>
                  <span className="mt-6 inline-flex text-sm font-semibold text-signal-yellow transition-colors">
                    Open {"->"}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <section className="relative overflow-hidden border-t border-border-subtle bg-surface-1 px-6 py-24">
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h2 className="t-h2 text-fg-0">
            Want results like these in your business?
          </h2>
          <p className="t-lead mx-auto mt-6 max-w-2xl text-fg-2">
            Build a system for content, authority, and growth instead of
            adding more disconnected deliverables.
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              href="/apply"
              data-track="case-studies-footer-apply-cta"
              data-ga-event="apply_strategy_session_click"
              className="aj-btn-signal"
            >
              Apply for a Strategy Session
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
