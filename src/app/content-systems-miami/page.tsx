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
  title: "Content Systems Miami | AJ Digital",
  description:
    "Content systems and repurposing workflows for Miami businesses. Turn one recording into 30+ assets and build consistent authority.",
};

const faqItems = [
  {
    question: "What is a content system for a business?",
    answer:
      "A content system is the repeatable workflow that turns one source recording into articles, clips, email content, and social assets. It gives the business more reach without requiring the founder to create from scratch every week.",
  },
  {
    question: "How does content repurposing work in Miami?",
    answer:
      "Content repurposing Miami businesses use effectively starts with strong long-form source material and a system for extracting, rewriting, and distributing the best ideas. AJ Digital builds those systems for Miami and South Florida operators who need more consistency and leverage.",
  },
  {
    question: "Can you turn my podcast into social and blog content?",
    answer:
      "Yes. Podcast repurposing service Miami buyers usually want a recording to become blog content, short-form clips, social posts, and email-ready assets. That is a core part of the systems we build.",
  },
  {
    question: "How many assets can I get from one recording?",
    answer:
      "The exact number depends on the quality and density of the source material, but 20 to 30 or more assets from one recording is realistic. The goal is useful outputs, not inflated counts with low quality.",
  },
  {
    question: "Do Miami businesses benefit from content systems?",
    answer:
      "Yes. Content systems Miami businesses use well create more consistency, stronger authority signals, and more entry points into offers. They are especially useful when the team has expertise but not enough bandwidth to publish constantly.",
  },
  {
    question: "Do you offer on-site or remote service?",
    answer:
      "Yes. We work remotely, hybrid, or on-site where relevant across Miami-Dade, Broward, and Palm Beach. The delivery model depends on the content workflow and the kind of production support needed.",
  },
];

export default function ContentSystemsMiamiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${siteUrl}/content-systems-miami/#localbusiness`,
        name: "AJ Digital",
        image: `${siteUrl}/logo.png`,
        url: `${siteUrl}/content-systems-miami`,
        description:
          "Content systems Miami service for operators who want content repurposing, content automation, and repeatable publishing workflows.",
        areaServed: [
          { "@type": "AdministrativeArea", name: "Miami-Dade" },
          { "@type": "AdministrativeArea", name: "Broward" },
          { "@type": "AdministrativeArea", name: "Palm Beach" },
          { "@type": "City", name: "Miami" },
          { "@type": "City", name: "Hialeah" },
          { "@type": "Neighborhood", name: "Brickell" },
          { "@type": "Neighborhood", name: "Wynwood" },
          { "@type": "City", name: "Doral" },
          { "@type": "City", name: "Fort Lauderdale" },
          { "@type": "City", name: "Boca Raton" },
        ],
      },
      {
        "@type": "Service",
        "@id": `${siteUrl}/content-systems-miami/#service`,
        name: "Content Systems Miami",
        serviceType: "Content Systems",
        url: `${siteUrl}/content-systems-miami`,
        description:
          "Content systems and repurposing workflows for Miami businesses. Turn one recording into 30+ assets and build consistent authority.",
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
        { name: "Content Systems Miami", path: "/content-systems-miami" },
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
      pain: "Great ideas exist, but content creation keeps getting pushed behind operations.",
      solve:
        "A content system turns one focused recording into a repeatable set of assets without asking the founder to manually create every day.",
      fit: "AJ Digital fits when the business needs a system builder, not a posting assistant.",
    },
    {
      title: "Coaches and Consultants",
      pain: "Strong expertise is trapped in calls, voice notes, and live delivery.",
      solve:
        "Content repurposing Miami service work makes that expertise usable as articles, clips, and email content.",
      fit: "We help structure expertise into assets that support authority and lead generation.",
    },
    {
      title: "Personal Brands",
      pain: "Visibility is inconsistent because the publishing process is too manual.",
      solve:
        "A system creates more reliable output from interviews, solo recordings, and talking-head content.",
      fit: "AJ Digital is useful when the brand needs more consistency without more chaos.",
    },
    {
      title: "Service Businesses",
      pain: "The team knows what to say, but cannot keep up with blog, social, and email execution.",
      solve:
        "Content automation Miami workflows help transform source material into distribution-ready assets faster.",
      fit: "We build systems that support authority while reducing manual workload.",
    },
    {
      title: "Organizations with recurring messaging needs",
      pain: "The same ideas have to be communicated repeatedly across channels and audiences.",
      solve:
        "A content system makes recurring messaging easier to document, repurpose, and publish consistently.",
      fit: "AJ Digital helps turn recurring communication into a reusable operating system.",
    },
  ];

  const transformationRows = [
    ["Podcast episode", "Blog article, short clips, email summary, social posts", "SEO traffic, social reach, stronger authority"],
    ["Webinar", "Recap article, short-form video, quote graphics, newsletter", "Lead generation and evergreen educational content"],
    ["Founder interview", "Thought-leadership article, clips, content prompts", "Authority and better use of founder time"],
    ["Client conversation", "Case-study content, testimonial snippets, sales support assets", "Trust and more entry points into offers"],
    ["Internal knowledge session", "Team SOPs, training summaries, internal content source material", "Consistency and lower manual workload"],
    ["Short video or talking-head recording", "Platform-specific cuts, captions, blog support copy, email hooks", "Higher content velocity and more publishing consistency"],
  ];

  const buildExamples = [
    "Podcast repurposing workflows that turn episodes into articles, clips, and email content",
    "Content extraction systems that isolate the best ideas from long-form recordings",
    "Blog, short-form, and email conversion from one source asset",
    "Distribution-ready outputs designed for publishing instead of sitting in drafts",
    "AI-assisted content workflows that speed up drafting, summarizing, and formatting",
    "Repeatable operating systems for publishing across multiple channels",
  ];

  const frameworkSteps = [
    {
      title: "Capture long-form content",
      copy:
        "We start with podcasts, interviews, webinars, founder recordings, or recurring messaging sessions.",
    },
    {
      title: "Extract key moments",
      copy:
        "We identify the strongest insights, hooks, stories, and frameworks worth repurposing.",
    },
    {
      title: "Transform into platform-specific assets",
      copy:
        "We rewrite and reformat the material for blogs, short-form video, email, and social outputs.",
    },
    {
      title: "Distribute consistently",
      copy:
        "We organize the assets into a repeatable publishing process instead of leaving them scattered.",
    },
    {
      title: "Optimize for SEO and AEO",
      copy:
        "We structure the written assets so they are more useful for search engines and answer engines.",
    },
    {
      title: "Route attention into leads",
      copy:
        "We connect the content to offers, proof, and the next action so output supports growth.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <JsonLd data={jsonLd} />

      <section className="border-b border-neutral-900 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.24),_transparent_45%),linear-gradient(180deg,#05070a_0%,#000_100%)] px-6 pb-16 pt-28 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Content Systems Miami
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Content Systems in Miami That Turn One Recording Into 30+ Assets
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300 md:text-xl">
            We help Miami-based businesses turn podcasts, videos, interviews,
            and founder content into repeatable content systems that build
            authority, traffic, and leads.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-500"
            >
              Apply for a Strategy Session
            </Link>
            <Link
              href="/services/content-systems/"
              className="inline-flex items-center justify-center rounded-xl border border-neutral-700 px-6 py-3 font-semibold text-white transition-colors hover:border-neutral-500 hover:bg-neutral-900"
            >
              Explore Content Systems
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-5 text-sm font-medium text-neutral-400">
            <span>Built for serious operators</span>
            <span>Not random posting</span>
            <span>Systemized content engine</span>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            What are content systems and why do Miami businesses need them?
          </h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-neutral-300">
            A content system turns one long-form recording into multiple usable
            assets across blogs, email, short-form video, and social channels.
            Content repurposing Miami businesses use well improves consistency,
            expands reach, reduces manual workload, and gives Miami and South
            Florida teams a better way to turn expertise into output.
          </p>
        </div>
      </section>

      <section className="border-y border-neutral-900 bg-neutral-950 px-6 py-16 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Who are content systems for in Miami?
          </h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-neutral-300">
            Content systems Miami businesses need most are usually tied to
            recurring messaging, founder knowledge, and not enough publishing
            bandwidth.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {audienceSegments.map((segment) => (
              <div
                key={segment.title}
                className="rounded-3xl border border-neutral-800 bg-black p-6"
              >
                <h3 className="text-xl font-semibold text-white">
                  {segment.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-neutral-400">
                  <strong className="text-white">Pain point:</strong> {segment.pain}
                </p>
                <p className="mt-3 text-sm leading-7 text-neutral-400">
                  <strong className="text-white">What a system solves:</strong>{" "}
                  {segment.solve}
                </p>
                <p className="mt-3 text-sm leading-7 text-neutral-400">
                  <strong className="text-white">Why AJ Digital fits:</strong>{" "}
                  {segment.fit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            What can one recording become?
          </h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-neutral-300">
            One strong recording can become a full content system when the
            extraction and publishing workflow is designed properly.
          </p>
          <div className="mt-8 overflow-x-auto rounded-3xl border border-neutral-800">
            <table className="min-w-full divide-y divide-neutral-800 text-left">
              <thead className="bg-black">
                <tr className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                  <th className="px-5 py-4">Content input</th>
                  <th className="px-5 py-4">Repurposed assets</th>
                  <th className="px-5 py-4">Business outcome</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800 bg-neutral-950 text-sm text-neutral-300">
                {transformationRows.map((row) => (
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

      <section className="border-y border-neutral-900 bg-neutral-950 px-6 py-16 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            What does AJ Digital actually build for Miami clients?
          </h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-neutral-300">
            AJ Digital builds the practical workflow behind content strategy
            Miami businesses need, not just more deliverables. We create
            systems that make content extraction, repurposing, and publishing
            repeatable.
          </p>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {buildExamples.map((example) => (
              <li
                key={example}
                className="rounded-2xl border border-neutral-800 bg-black px-5 py-4 text-neutral-300"
              >
                {example}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 text-sm font-semibold text-blue-400">
            <Link href="/services/content-systems/">
              Explore the full content systems service
            </Link>
            <Link href="/services/podcast-production/">
              See how podcast production feeds the system
            </Link>
            <Link href="/services/ai-consulting/">
              Understand the AI workflows behind content automation
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            How does our content systems process work?
          </h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-neutral-300">
            The AJ Digital Miami Content Systems Framework is built to turn
            founder knowledge into a repeatable publishing engine.
          </p>
          <div className="mt-8 rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-950/30 to-neutral-950 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              The AJ Digital Miami Content Systems Frameworkâ„¢
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {frameworkSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-neutral-800 bg-black/60 p-5"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-400">
                    {step.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-900 bg-neutral-950 px-6 py-16 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Why choose AJ Digital for content systems in Miami?
          </h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-neutral-300">
            AJ Digital is built for Miami and South Florida operators who need
            more than random social posting. Whether the team is in Miami-Dade,
            Hialeah, Brickell, Wynwood, Doral, Fort Lauderdale, or Boca Raton,
            the focus stays on systems, not disconnected deliverables.
          </p>
          <div className="mt-8 space-y-4 text-neutral-300">
            <p>
              We are not a generic content shop. We integrate podcast
              production, AI-assisted workflows, and content repurposing into a
              structure that is actually usable.
            </p>
            <p>
              Delivery can be remote, hybrid, or on-site where relevant. The
              priority is building a systemized content engine that fits the way
              the business already operates.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            What kind of results can content systems create?
          </h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-neutral-300">
            Content systems create higher content velocity, better repurposing
            output, more consistency, stronger authority signals, and more
            entry points into offers.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="text-xl font-semibold text-white">
                More output from the same source
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                A single recording can support 30 or more assets when the system
                is designed well.
              </p>
            </div>
            <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="text-xl font-semibold text-white">
                Lower manual workload
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                Systems reduce how much founder or expert time gets spent
                rewriting the same ideas repeatedly.
              </p>
            </div>
            <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="text-xl font-semibold text-white">
                Better use of expertise
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                More of the business&apos;s knowledge becomes visible, useful, and
                connected to the offer.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-3 text-sm font-semibold text-blue-400">
            <Link href="/apply">Apply for a strategy session</Link>
            <Link href="/case-studies/podcast-authority-system/">
              See the podcast authority system case study
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-4 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <InlineApplyCta
            eyebrow="Miami content system"
            headline="If you want this content system implemented, apply for a strategy session."
            copy="We help Miami and South Florida operators turn one recording into 30+ assets, reduce manual workload, and build a repeatable authority engine."
            secondaryHref="/services/content-systems/"
            secondaryLabel="Explore content systems"
            trackingId="content-miami-inline-cta"
          />
        </div>
      </section>

      <section className="border-y border-neutral-900 bg-neutral-950 px-6 py-16 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 space-y-5">
            {faqItems.map((item) => (
              <div
                key={item.question}
                className="rounded-3xl border border-neutral-800 bg-black p-6"
              >
                <h3 className="text-xl font-semibold text-white">
                  {item.question}
                </h3>
                <p className="mt-3 text-sm leading-7 text-neutral-400">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-950/40 to-neutral-950 p-10 text-center">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Ready to turn your content into a real system?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-300">
            Build a repeatable engine instead of chasing content week to week.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-500"
            >
              Apply for a Strategy Session
            </Link>
            <Link
              href="/case-studies/"
              className="inline-flex items-center justify-center rounded-xl border border-neutral-700 px-6 py-3 font-semibold text-white transition-colors hover:border-neutral-500 hover:bg-neutral-900"
            >
              See proof
            </Link>
          </div>
          <div className="mt-8 flex flex-col gap-2 text-sm font-semibold text-blue-400">
            <Link href="/blog/content-repurposing-guide/">
              Read the content repurposing guide
            </Link>
            <Link href="/blog/content-repurposing-system/">
              See the content repurposing system basics
            </Link>
            <Link href="/blog/ai-content-automation-guide/">
              Learn how AI content automation supports the workflow
            </Link>
            <Link href="/blog/ai-tools-for-entrepreneurs/">
              Review the AI tools used in content automation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

