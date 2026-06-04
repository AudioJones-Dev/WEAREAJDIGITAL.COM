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
  title: "AI Consulting Miami | AJ Digital",
  description:
    "AI consulting for Miami entrepreneurs and small businesses. Practical AI systems for content, workflows, and business operations.",
};

const faqItems = [
  {
    question: "What does an AI consultant do for a Miami business?",
    answer:
      "An AI consultant audits how your business works, identifies repetitive bottlenecks, and designs practical systems that improve speed, consistency, and output. For Miami businesses, that often includes workflow automation, content operations, and better internal knowledge access.",
  },
  {
    question: "Is AI consulting only for large companies?",
    answer:
      "No. AI consulting for small business Miami operators is often more valuable because lean teams feel process friction faster. The goal is to create leverage without adding unnecessary overhead.",
  },
  {
    question: "How much does AI consulting cost in Miami?",
    answer:
      "Cost depends on whether you need a focused strategy engagement, implementation support, or ongoing optimization. Most businesses should think in terms of scope, complexity, and the value of time saved rather than chasing fake precision.",
  },
  {
    question: "Can you help implement workflows, not just strategy?",
    answer:
      "Yes. AJ Digital is an AI automation consultant Miami businesses can use for both planning and hands-on implementation. We build workflows, test them, and help teams use them in day-to-day operations.",
  },
  {
    question: "Do you work with businesses outside Miami-Dade?",
    answer:
      "Yes. We work remotely across South Florida and beyond, including Broward and Palm Beach. We can also support hybrid or on-site work where the engagement makes sense.",
  },
  {
    question: "What businesses benefit most from AI consulting?",
    answer:
      "Entrepreneurs, consultants, service firms, content-heavy brands, and operator-led small businesses benefit most. The common thread is too much manual work and not enough workflow leverage.",
  },
];

export default function AIConsultingMiamiPage() {
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
          "AI consulting Miami service for entrepreneurs and small businesses focused on practical implementation across workflows, content systems, and operations.",
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
        name: "AI Consulting Miami",
        serviceType: "AI Consulting",
        url: `${siteUrl}/ai-consulting-miami`,
        description:
          "AI consulting for Miami entrepreneurs and small businesses. Practical AI systems for content, workflows, and business operations.",
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
        { name: "AI Consulting Miami", path: "/ai-consulting-miami" },
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
      title: "Entrepreneurs",
      bottleneck: "Too many repetitive decisions and not enough execution bandwidth.",
      improvement:
        "AI can tighten research, response drafting, and content preparation without forcing the founder into another software rabbit hole.",
      fit: "AJ Digital fits when the business needs an AI strategy consulting Miami partner that can move from planning into implementation.",
    },
    {
      title: "Coaches and Consultants",
      bottleneck: "Knowledge is trapped in calls, voice notes, and scattered documents.",
      improvement:
        "AI can structure expertise into reusable content, searchable knowledge, and faster delivery workflows.",
      fit: "We help turn expertise into systems that support selling, delivery, and follow-up.",
    },
    {
      title: "Service Businesses",
      bottleneck: "Manual admin, fragmented lead handling, and inconsistent internal processes.",
      improvement:
        "AI can improve intake, drafting, routing, and standard operating procedures.",
      fit: "AJ Digital is useful when the business wants practical workflow improvement instead of abstract AI theory.",
    },
    {
      title: "Content-Heavy Brands",
      bottleneck: "Great source material exists, but the team cannot repurpose it fast enough.",
      improvement:
        "AI-assisted content workflows can speed research, repurposing, and distribution.",
      fit: "We bridge content systems and AI implementation so the content engine becomes usable at scale.",
    },
    {
      title: "Operator-Led Small Businesses",
      bottleneck: "Small teams are carrying too much context in their heads and too much execution by hand.",
      improvement:
        "AI can improve internal knowledge access, repeatable workflows, and team clarity.",
      fit: "We build simple systems that are realistic for small teams to use every day.",
    },
  ];

  const problemRows = [
    ["Slow content production", "AI-assisted content workflows", "Faster output with less manual drafting"],
    ["Repetitive admin work", "Workflow automation and routing", "Less operational drag and fewer handoffs"],
    ["Poor internal knowledge access", "Internal knowledge systems", "Faster answers and smoother onboarding"],
    ["Manual lead follow-up", "Prompted response and qualification flows", "Quicker response times and better consistency"],
    ["Inconsistent workflows", "AI operating procedures for teams", "Cleaner execution and fewer missed steps"],
    ["Podcast and content bottlenecks", "Automation for repurposing", "More assets created from the same source material"],
  ];

  const implementationExamples = [
    "AI-assisted content workflows for drafting, summarizing, and repurposing",
    "AI research systems that reduce prep time and improve clarity",
    "Automation for repurposing podcasts and long-form content",
    "Internal knowledge systems that make team information searchable",
    "Prompt and workflow design tailored to specific business processes",
    "AI operating procedures that teams can actually follow and maintain",
  ];

  const frameworkSteps = [
    {
      title: "Audit bottlenecks",
      copy:
        "We identify where time is being lost across content, operations, and team workflows.",
    },
    {
      title: "Identify high-leverage use cases",
      copy:
        "We focus on the specific process where AI will create the clearest operational gain first.",
    },
    {
      title: "Select the right tools",
      copy:
        "We choose the stack based on the workflow, not on whatever tool is currently getting the most hype.",
    },
    {
      title: "Build simple workflows",
      copy:
        "We keep implementation clear enough that your team can actually use and maintain it.",
    },
    {
      title: "Implement and test",
      copy:
        "We connect the moving parts, run the workflow, and check for reliability before scaling it.",
    },
    {
      title: "Train and optimize",
      copy:
        "We help the team understand how to use the system and refine it as the business changes.",
    },
  ];

  return (
    <div className="min-h-screen bg-bg-0 text-fg-1">
      <JsonLd data={jsonLd} />

      <section className="border-b border-border-subtle bg-[radial-gradient(circle_at_top,_rgba(232,255,90,0.12),_transparent_45%),linear-gradient(180deg,var(--surface-1)_0%,var(--bg-base)_100%)] px-5 pb-16 pt-28 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <p className="t-label mb-4">
            AI Consulting Miami
          </p>
          <h1 className="t-h1 max-w-4xl">
            AI Consulting in Miami for Entrepreneurs and Small Businesses
          </h1>
          <p className="mt-6 max-w-3xl t-lead text-fg-1">
            We help Miami-based businesses turn AI into practical systems that
            improve workflows, content production, and day-to-day execution.
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
              Explore AI Consulting
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-5 t-mono text-fg-2">
            <span>No hype</span>
            <span>No theory-only consulting</span>
            <span>Just practical systems and implementation</span>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="t-h2">
            What AI consulting services are available in Miami?
          </h2>
          <p className="mt-4 max-w-4xl t-body-lg text-fg-1">
            AI consulting Miami services can range from broad strategic advice
            to hands-on implementation. AJ Digital focuses on practical support
            for entrepreneurs and small businesses across Miami and South
            Florida, including workflow improvement, content systems, knowledge
            workflows, and implementation support that teams can actually use.
          </p>
        </div>
      </section>

      <section className="border-y border-border-subtle bg-bg-1 px-5 py-16 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="t-h2">
            Who is AI consulting for in Miami?
          </h2>
          <p className="mt-4 max-w-4xl t-body-lg text-fg-1">
            AI consulting for small business Miami operators is most valuable
            when the team has clear bottlenecks but no clean implementation
            path.
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
            What problems does AI consulting solve for Miami businesses?
          </h2>
          <p className="mt-4 max-w-4xl t-body-lg text-fg-1">
            The best AI consultant Miami businesses can hire solves operational
            friction, not abstract curiosity. The table below shows the most
            common problems and the type of system AJ Digital helps implement.
          </p>
          <div className="mt-8 overflow-x-auto rounded-card border border-border-subtle">
            <table className="min-w-full divide-y divide-[color:var(--border-subtle)] text-left">
              <thead className="bg-bg-3">
                <tr className="t-label">
                  <th className="px-5 py-4">Business problem</th>
                  <th className="px-5 py-4">AI solution</th>
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
            What does AJ Digital actually help Miami clients implement?
          </h2>
          <p className="mt-4 max-w-4xl t-body-lg text-fg-1">
            AJ Digital is an AI automation consultant Miami businesses can use
            for implementation, not just recommendations. We build practical
            systems around content, research, knowledge management, and repeatable
            team workflows.
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
              Explore the full AI consulting service
            </Link>
            <Link href="/services/content-systems/" className="hover:text-signal-yellow transition-colors">
              See how content systems connect to implementation
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="t-h2">
            How does our AI consulting process work?
          </h2>
          <p className="mt-4 max-w-4xl t-body-lg text-fg-1">
            The AJ Digital Miami AI Implementation Framework keeps AI strategy
            consulting Miami businesses can actually act on tied to practical
            execution.
          </p>
          <div className="mt-8 rounded-card border border-border-subtle border-l-[3px] border-l-signal-yellow bg-[linear-gradient(90deg,rgba(232,255,90,0.08),transparent),var(--surface-1)] p-8">
            <p className="t-label">
              The AJ Digital Miami AI Implementation Framework™
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
            Why choose AJ Digital for AI consulting in Miami?
          </h2>
          <p className="mt-4 max-w-4xl t-body-lg text-fg-1">
            AJ Digital understands the pace of Miami and South Florida
            operator-led businesses. Whether the team is based in Miami-Dade,
            Hialeah, Brickell, Doral, Broward, or Boca Raton, the goal stays
            the same: practical implementation that improves execution.
          </p>
          <div className="mt-8 space-y-4 text-fg-1">
            <p>
              We do not sell abstract consulting with no operating reality
              behind it. We help build workflows that support content,
              podcasting, research, and internal execution.
            </p>
            <p>
              We also work well for small businesses that need an AI consultant
              Miami partner without enterprise-only complexity. Engagements can
              be remote, hybrid, or on-site where relevant to the system being
              installed.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="t-h2">
            How much does AI consulting cost in Miami?
          </h2>
          <p className="mt-4 max-w-4xl t-body-lg text-fg-1">
            AI consulting cost depends on scope, implementation depth, and
            whether the work is strategic, operational, or ongoing. The clearest
            way to think about cost is by engagement type.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="aj-card is-surface-2">
              <h3 className="t-h4">
                One-time strategy and system design
              </h3>
              <p className="mt-3 t-small text-fg-2">
                Best for businesses that need workflow analysis, use-case
                prioritization, and a clear implementation roadmap.
              </p>
            </div>
            <div className="aj-card is-surface-2">
              <h3 className="t-h4">
                Implementation support
              </h3>
              <p className="mt-3 t-small text-fg-2">
                Best for businesses that need the workflows built, tested, and
                connected to day-to-day operations.
              </p>
            </div>
            <div className="aj-card is-surface-2">
              <h3 className="t-h4">
                Ongoing optimization
              </h3>
              <p className="mt-3 t-small text-fg-2">
                Best for teams that want iteration, refinement, and support as
                workflows expand.
              </p>
            </div>
          </div>
          <p className="mt-8 text-fg-1">
            The right fit depends on the process being improved and the value of
            time reclaimed. The next step is to{" "}
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
            eyebrow="Miami implementation"
            headline="If you want practical AI systems implemented in your business, apply for a strategy session."
            copy="Built for serious Miami and South Florida operators who need workflow leverage, content systems, and AI implementation instead of abstract consulting."
            secondaryHref="/services/ai-consulting/"
            secondaryLabel="Explore AI consulting"
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
            Ready to implement AI that actually helps your business?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-fg-1">
            Get practical systems built around how your business actually
            works.
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
            <Link href="/blog/ai-consulting-for-small-business/" className="hover:text-signal-yellow transition-colors">
              Learn how AI consulting works for small business
            </Link>
            <Link href="/blog/ai-tools-for-entrepreneurs/" className="hover:text-signal-yellow transition-colors">
              Review the AI tools we use in content systems
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


