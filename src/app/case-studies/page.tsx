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
    <div className="min-h-screen bg-neutral-900 text-white">
      <JsonLd data={jsonLd} />

      <section className="relative border-b border-neutral-800 bg-gradient-to-br from-neutral-900 to-black px-6 pb-16 pt-24 sm:px-12 lg:px-24">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Case studies that show what the systems actually do
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-neutral-300">
            Review the proof behind AJ Digital&apos;s podcast production,
            content systems, and AI workflow engagements.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/apply"
              data-track="case-studies-hero-apply-cta"
              data-ga-event="apply_strategy_session_click"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-4 text-base font-bold text-white transition-colors hover:bg-blue-500"
            >
              Apply for a Strategy Session
            </Link>
            <Link
              href="/services/podcast-production"
              className="inline-flex items-center justify-center rounded-lg border border-neutral-700 bg-neutral-800 px-8 py-4 text-base font-semibold text-white transition-colors hover:border-neutral-500 hover:bg-neutral-700"
            >
              Explore Podcast Production
            </Link>
          </div>
        </div>
      </section>

      <div className="border-b border-neutral-800 bg-black py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-6 text-sm font-semibold text-neutral-400 sm:justify-between sm:px-12 md:text-base">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            30+ assets from one recording
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            Systems over random posting
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            Strategy plus implementation
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            Authority-focused growth
          </div>
        </div>
      </div>

      <main className="px-6 py-16 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20">
            <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-neutral-500">
              Featured case study
            </h2>
            <div className="relative flex flex-col overflow-hidden rounded-2xl border border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-900 md:flex-row">
              <div className="absolute inset-0 bg-blue-500/5 mix-blend-overlay" />
              <div className="relative z-10 w-full p-8 md:w-1/2 md:p-12">
                <div className="mb-6 flex flex-wrap gap-2">
                  {featuredCaseStudy.category.map((category) => (
                    <span
                      key={category}
                      className="rounded-md border border-neutral-700 bg-neutral-950 px-3 py-1 text-xs font-semibold text-blue-400"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl font-bold leading-tight text-white md:text-4xl">
                  {featuredCaseStudy.title}
                </h3>
                <p className="mt-6 leading-8 text-neutral-300">
                  <strong className="text-white">Problem:</strong>{" "}
                  {featuredCaseStudy.problem}
                </p>
                <p className="mt-4 leading-8 text-neutral-300">
                  <strong className="text-white">Result:</strong>{" "}
                  {featuredCaseStudy.result}
                </p>
                <Link
                  href={`/case-studies/${featuredCaseStudy.slug}`}
                  className="mt-8 inline-flex items-center font-bold text-blue-400 transition-colors hover:text-blue-300"
                >
                  Read full case study {"->"}
                </Link>
              </div>
              <div className="flex min-h-[300px] w-full items-center justify-center border-l border-neutral-800 bg-black p-8 md:w-1/2">
                <div className="text-center">
                  <p className="mb-2 text-6xl font-black text-transparent bg-gradient-to-br from-blue-400 to-blue-600 bg-clip-text md:text-7xl">
                    {featuredCaseStudy.keyStat}
                  </p>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-neutral-400">
                    Measurable outcome
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16 rounded-2xl border border-neutral-800 bg-neutral-950 p-8 md:p-12">
            <div className="max-w-3xl">
              <h2 className="mb-6 text-3xl font-bold text-white">
                Why systems beat random effort
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-neutral-300">
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
                    className="text-blue-400 underline underline-offset-4 decoration-blue-500/30 hover:text-blue-300"
                  >
                    content systems
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/services/ai-consulting"
                    className="text-blue-400 underline underline-offset-4 decoration-blue-500/30 hover:text-blue-300"
                  >
                    AI automation workflows
                  </Link>{" "}
                  that create measurable outputs.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-neutral-500">
              Explore the rest of the system
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {supportingRoutes.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl border border-neutral-800 bg-black p-6 transition-colors hover:border-blue-500/40"
                >
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-400">
                    {item.description}
                  </p>
                  <span className="mt-6 inline-flex text-sm font-semibold text-blue-400">
                    Open {"->"}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <section className="relative overflow-hidden border-t border-neutral-800 bg-black px-6 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Want results like these in your business?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-neutral-400">
            Build a system for content, authority, and growth instead of
            adding more disconnected deliverables.
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              href="/apply"
              data-track="case-studies-footer-apply-cta"
              data-ga-event="apply_strategy_session_click"
              className="inline-flex items-center justify-center rounded-lg border border-blue-500/50 bg-blue-600 px-10 py-5 text-lg font-bold text-white transition-colors hover:bg-blue-500"
            >
              Apply for a Strategy Session
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
