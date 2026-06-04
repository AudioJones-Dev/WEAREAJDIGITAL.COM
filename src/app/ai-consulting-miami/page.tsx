import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/json-ld";
import InlineApplyCta from "@/components/inline-apply-cta";
import {
  buildBreadcrumbJsonLd,
  buildOrganizationJsonLd,
  siteUrl,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Marketing & Content Systems in Miami | AJ Digital",
  description:
    "AI-powered marketing and content systems for Miami founders and businesses. Turn your podcast into repurposed content, distribution, and authority across South Florida.",
};

const faqItems = [
  {
    question: "What do AI marketing and content systems do for a Miami business?",
    answer:
      "They turn your podcast and source content into repurposed clips, articles, and distribution so your business builds authority and demand. For Miami businesses, that usually means a content engine that produces consistent output across channels without a bigger team.",
  },
  {
    question: "Are AI content systems only for large companies?",
    answer:
      "No. AI marketing systems for small business Miami operators are often more valuable because lean teams cannot repurpose content fast enough by hand. The goal is reach and authority without adding headcount.",
  },
  {
    question: "How much do AI marketing and content systems cost in Miami?",
    answer:
      "Cost depends on whether you need a focused content engine build, ongoing production and distribution, or full marketing operations. Think in terms of scope, channel volume, and the authority the system creates rather than chasing fake precision.",
  },
  {
    question: "Can you build and run the system, not just advise?",
    answer:
      "Yes. AJ Digital is a content systems partner Miami businesses can use for both planning and hands-on execution. We build the repurposing engine, produce the assets, and run distribution day to day.",
  },
  {
    question: "Do you work with businesses outside Miami-Dade?",
    answer:
      "Yes. We work remotely across South Florida and beyond, including Broward and Palm Beach. We can also support hybrid or on-site work where the engagement makes sense.",
  },
  {
    question: "What businesses benefit most from AI content systems?",
    answer:
      "Founders, consultants, service firms, content-heavy brands, and operator-led small businesses benefit most. The common thread is great source material and a podcast that is not yet compounding into reach and authority.",
  },
];

export default function MarketingOperationsMiamiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${siteUrl}/ai-consulting-miami/#localbusiness`,
        name: "AJ Digital",
        image: `${siteUrl}/logo.png`,
        url: `${siteUrl}/ai-consulting-miami`,
        description:
          "AI marketing and content systems for Miami founders and businesses, turning a podcast into repurposed content, distribution, and authority across South Florida.",
        areaServed: [
          { "@type": "AdministrativeArea", name: "Miami-Dade" },
          { "@type": "AdministrativeArea", name: "Broward" },
          { "@type": "AdministrativeArea", name: "Palm Beach" },
          { "@type": "City", name: "Miami" },
          { "@type": "City", name: "Hialeah" },
          { "@type": "Neighborhood", name: "Brickell" },
          { "@type": "City", name: "Doral" },
          { "@type": "City", name: "Boca Raton" },
        ],
      },
      {
        "@type": "Service",
        "@id": `${siteUrl}/ai-consulting-miami/#service`,
        name: "AI Marketing & Content Systems in Miami",
        serviceType: "Marketing Operations",
        url: `${siteUrl}/ai-consulting-miami`,
        description:
          "AI-powered marketing and content systems for Miami founders and businesses. Turn your podcast into repurposed content, distribution, and authority.",
        provider: buildOrganizationJsonLd(),
        areaServed: [
          { "@type": "AdministrativeArea", name: "Miami-Dade" },
          { "@type": "AdministrativeArea", name: "Broward" },
          { "@type": "AdministrativeArea", name: "Palm Beach" },
        ],
      },
      buildOrganizationJsonLd(),
      buildBreadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "AI Marketing & Content Systems Miami", path: "/ai-consulting-miami" },
      ]),
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  const audienceSegments = [
    {
      title: "Founders",
      bottleneck: "A podcast and great ideas, but no time to repurpose them into reach.",
      improvement:
        "AI can turn each episode into clips, articles, and posts without forcing the founder into another software rabbit hole.",
      fit: "AJ Digital fits when the business needs a Miami content systems partner that can move from planning into production and distribution.",
    },
    {
      title: "Coaches and Consultants",
      bottleneck: "Expertise is trapped in calls, voice notes, and scattered documents.",
      improvement:
        "AI can structure that expertise into reusable content, authority articles, and a steady publishing cadence.",
      fit: "We help turn expertise into a content engine that supports selling, authority, and follow-up.",
    },
    {
      title: "Service Businesses",
      bottleneck: "Inconsistent publishing and content that never leaves one platform.",
      improvement:
        "AI can power repurposing, scheduling, and multi-channel distribution so output stays consistent.",
      fit: "AJ Digital is useful when the business wants a working content engine instead of abstract marketing theory.",
    },
    {
      title: "Content-Heavy Brands",
      bottleneck: "Great source material exists, but the team cannot repurpose it fast enough.",
      improvement:
        "AI-assisted content workflows can speed research, repurposing, and distribution across channels.",
      fit: "We connect content systems and AI so the content engine becomes usable at scale.",
    },
    {
      title: "Operator-Led Small Businesses",
      bottleneck: "Small teams are carrying too much marketing by hand and publishing inconsistently.",
      improvement:
        "AI can power a repeatable content engine that keeps reach and authority growing.",
      fit: "We build simple systems that are realistic for small teams to run every day.",
    },
  ];

  const problemRows = [
    ["Slow content repurposing", "AI-assisted clipping and content workflows", "More assets from every episode with less manual work"],
    ["Manual publishing admin", "Distribution automation and scheduling", "Less operational drag and fewer handoffs"],
    ["Content trapped on one platform", "Multi-channel distribution systems", "Reach across the channels your buyers use"],
    ["Inconsistent publishing cadence", "AI content operating procedures", "Reliable, on-brand output every week"],
    ["No authority signal", "AI-assisted articles and thought leadership", "Compounding authority and inbound demand"],
    ["Podcast and content bottlenecks", "Automation for repurposing", "More assets created from the same source material"],
  ];

  const implementationExamples = [
    "AI-assisted content workflows for clipping, summarizing, and repurposing",
    "AI research and drafting systems that speed up authority articles",
    "Automation for repurposing podcasts and long-form content",
    "Multi-channel distribution and scheduling tied to your platforms",
    "Prompt and workflow design tailored to your content and brand voice",
    "AI content operating procedures that teams can actually follow and maintain",
  ];

  const frameworkSteps = [
    {
      title: "Audit the content pipeline",
      copy:
        "We find where episodes and source material stall before they become published assets.",
    },
    {
      title: "Identify high-leverage formats",
      copy:
        "We focus on the clips, articles, and channels that build authority and demand fastest.",
    },
    {
      title: "Select the right tools",
      copy:
        "We choose the stack based on your content and channels, not on whatever tool is getting the most hype.",
    },
    {
      title: "Build the repurposing engine",
      copy:
        "We keep the system clear enough that your team can actually run and maintain it.",
    },
    {
      title: "Implement and distribute",
      copy:
        "We produce the assets, connect the channels, and ship to your audience on a reliable cadence.",
    },
    {
      title: "Measure and optimize",
      copy:
        "We track reach and authority and refine the engine as the business grows.",
    },
  ];

  return (
    <div className="min-h-screen bg-bg-0 text-fg-1">
      <JsonLd data={jsonLd} />

      <section className="border-b border-border-subtle bg-[radial-gradient(circle_at_top,_rgba(232,255,90,0.12),_transparent_45%),linear-gradient(180deg,var(--surface-1)_0%,var(--bg-base)_100%)] px-5 pb-16 pt-28 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <p className="t-label mb-4">
            AI Marketing & Content Systems Miami
          </p>
          <h1 className="t-h1 max-w-4xl">
            AI Marketing & Content Systems in Miami for Founders and Businesses
          </h1>
          <p className="mt-6 max-w-3xl t-lead text-fg-1">
            We help Miami-based businesses turn a podcast into a content growth
            engine, using AI to power repurposing, distribution, and authority.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/apply"
              className="aj-btn-signal"
            >
              Apply for a Strategy Session
            </Link>
            <Link
              href="/services/ai-consulting/"
              className="aj-btn-intel"
            >
              Explore Marketing Operations
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-5 t-mono text-fg-2">
            <span>No hype</span>
            <span>No theory-only marketing</span>
            <span>Just a content engine that runs</span>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="t-h2">
            What AI marketing and content systems are available in Miami?
          </h2>
          <p className="mt-4 max-w-4xl t-body-lg text-fg-1">
            AI marketing and content systems in Miami can range from a focused
            repurposing engine to full marketing operations. AJ Digital focuses
            on practical support for founders and small businesses across Miami
            and South Florida, including podcast repurposing, content systems,
            multi-channel distribution, and authority-building that teams can
            actually run.
          </p>
        </div>
      </section>

      <section className="border-y border-border-subtle bg-bg-1 px-5 py-16 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="t-h2">
            Who are AI content systems for in Miami?
          </h2>
          <p className="mt-4 max-w-4xl t-body-lg text-fg-1">
            AI marketing systems for small business Miami operators are most
            valuable when the team has great source content but no clean path to
            repurpose and distribute it.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {audienceSegments.map((segment) => (
              <div
                key={segment.title}
                className="aj-card"
              >
                <h3 className="t-h4">
                  {segment.title}
                </h3>
                <p className="mt-4 t-small text-fg-2">
                  <strong className="text-fg-0">Common bottleneck:</strong>{" "}
                  {segment.bottleneck}
                </p>
                <p className="mt-3 t-small text-fg-2">
                  <strong className="text-fg-0">What AI can improve:</strong>{" "}
                  {segment.improvement}
                </p>
                <p className="mt-3 t-small text-fg-2">
                  <strong className="text-fg-0">How AJ Digital fits:</strong>{" "}
                  {segment.fit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="t-h2">
            What problems do AI content systems solve for Miami businesses?
          </h2>
          <p className="mt-4 max-w-4xl t-body-lg text-fg-1">
            The best content systems Miami businesses can build solve marketing
            friction, not abstract curiosity. The table below shows the most
            common problems and the type of system AJ Digital helps implement.
          </p>
          <div className="mt-8 overflow-x-auto rounded-card border border-border-subtle">
            <table className="min-w-full divide-y divide-[color:var(--border-subtle)] text-left">
              <thead className="bg-bg-3">
                <tr className="t-label">
                  <th className="px-5 py-4">Marketing problem</th>
                  <th className="px-5 py-4">AI-powered system</th>
                  <th className="px-5 py-4">Outcome</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[color:var(--border-subtle)] bg-bg-2 text-sm text-fg-1">
                {problemRows.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell) => (
                      <td key={cell} className="px-5 py-4 align-top">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-y border-border-subtle bg-bg-1 px-5 py-16 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="t-h2">
            What does AJ Digital actually build for Miami clients?
          </h2>
          <p className="mt-4 max-w-4xl t-body-lg text-fg-1">
            AJ Digital is a content systems partner Miami businesses can use for
            execution, not just recommendations. We build practical engines
            around podcast repurposing, authority content, distribution, and
            repeatable publishing workflows.
          </p>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {implementationExamples.map((example) => (
              <li
                key={example}
                className="rounded-md border border-border-subtle bg-bg-2 px-5 py-4 text-fg-1"
              >
                {example}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 text-sm font-semibold text-fg-1">
            <Link href="/services/ai-consulting/" className="hover:text-signal-yellow transition-colors">
              Explore the full marketing operations service
            </Link>
            <Link href="/services/content-systems/" className="hover:text-signal-yellow transition-colors">
              See how content systems connect to distribution
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="t-h2">
            How does our marketing operations process work?
          </h2>
          <p className="mt-4 max-w-4xl t-body-lg text-fg-1">
            The AJ Digital Miami Content Growth Framework keeps AI marketing
            Miami businesses can actually act on tied to real production and
            distribution.
          </p>
          <div className="mt-8 rounded-card border border-border-subtle border-l-[3px] border-l-signal-yellow bg-[linear-gradient(90deg,rgba(232,255,90,0.08),transparent),var(--surface-1)] p-8">
            <p className="t-label">
              The AJ Digital Miami Content Growth Framework™
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {frameworkSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-md border border-border-subtle bg-bg-3 p-5"
                >
                  <p className="t-label !text-signal-yellow">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-3 t-h4">
                    {step.title}
                  </h3>
                  <p className="mt-3 t-small text-fg-2">
                    {step.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border-subtle bg-bg-1 px-5 py-16 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="t-h2">
            Why choose AJ Digital for AI marketing and content systems in Miami?
          </h2>
          <p className="mt-4 max-w-4xl t-body-lg text-fg-1">
            AJ Digital understands the pace of Miami and South Florida
            operator-led businesses. Whether the team is based in Miami-Dade,
            Hialeah, Brickell, Doral, Broward, or Boca Raton, the goal stays
            the same: a content engine that turns your podcast into reach and
            authority.
          </p>
          <div className="mt-8 space-y-4 text-fg-1">
            <p>
              We do not sell abstract marketing with no output behind it. We
              build the engine that turns content, podcasting, and distribution
              into compounding authority.
            </p>
            <p>
              We also work well for small businesses that need a Miami content
              systems partner without enterprise-only complexity. Engagements
              can be remote, hybrid, or on-site where relevant to the system
              being installed.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="t-h2">
            How much do AI marketing and content systems cost in Miami?
          </h2>
          <p className="mt-4 max-w-4xl t-body-lg text-fg-1">
            Cost depends on scope, production volume, and whether the work is a
            focused build, ongoing distribution, or full marketing operations.
            The clearest way to think about cost is by engagement type.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="aj-card is-surface-2">
              <h3 className="t-h4">
                One-time content engine build
              </h3>
              <p className="mt-3 t-small text-fg-2">
                Best for businesses that need pipeline analysis, format
                prioritization, and a clear repurposing system to launch.
              </p>
            </div>
            <div className="aj-card is-surface-2">
              <h3 className="t-h4">
                Production and distribution
              </h3>
              <p className="mt-3 t-small text-fg-2">
                Best for businesses that need the assets produced, scheduled,
                and shipped across channels every week.
              </p>
            </div>
            <div className="aj-card is-surface-2">
              <h3 className="t-h4">
                Ongoing marketing operations
              </h3>
              <p className="mt-3 t-small text-fg-2">
                Best for teams that want iteration, reporting, and support as
                reach and authority compound.
              </p>
            </div>
          </div>
          <p className="mt-8 text-fg-1">
            The right fit depends on your content volume and the authority the
            system creates. The next step is to{" "}
            <Link href="/apply" className="text-fg-1 hover:text-signal-yellow transition-colors">
              apply for a strategy session
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="px-5 py-4 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <InlineApplyCta
            eyebrow="Miami content growth"
            headline="If you want your podcast turned into a marketing engine, apply for a strategy session."
            copy="Built for serious Miami and South Florida operators who need a content system that produces repurposed assets, distribution, and authority instead of abstract marketing."
            secondaryHref="/services/ai-consulting/"
            secondaryLabel="Explore marketing operations"
            trackingId="ai-miami-inline-cta"
          />
        </div>
      </section>

      <section className="border-y border-border-subtle bg-bg-1 px-5 py-16 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="t-h2">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 space-y-5">
            {faqItems.map((item) => (
              <div
                key={item.question}
                className="aj-card"
              >
                <h3 className="t-h4">
                  {item.question}
                </h3>
                <p className="mt-3 t-small text-fg-2">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-4xl rounded-card border border-border-subtle bg-bg-2 p-10 text-center">
          <h2 className="t-h2">
            Ready to turn your podcast into a growth engine?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-fg-1">
            Get a content system built around how your business actually creates
            and distributes content.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/apply"
              className="aj-btn-signal"
            >
              Apply for a Strategy Session
            </Link>
            <Link
              href="/case-studies/"
              className="aj-btn-intel"
            >
              See proof
            </Link>
          </div>
          <div className="mt-8 flex flex-col gap-2 text-sm font-semibold text-fg-1">
            <Link href="/blog/ai-content-automation-guide/" className="hover:text-signal-yellow transition-colors">
              Read the AI content automation guide
            </Link>
            <Link href="/blog/ai-tools-for-content-creation/" className="hover:text-signal-yellow transition-colors">
              Review the AI tools we use in content systems
            </Link>
            <Link href="/blog/content-repurposing-system/" className="hover:text-signal-yellow transition-colors">
              See the content repurposing system
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
