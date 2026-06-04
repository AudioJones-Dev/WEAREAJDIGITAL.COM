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
  title: "Podcast Production Service",
  description:
    "Full-service podcast production that turns one recording into authority, reach, and qualified pipeline for your business.",
};

export default function PodcastProductionServicePage() {
  const faqItems = [
    {
      question: "What is a podcast production service?",
      answer:
        "A podcast production service manages recording support, editing, publishing, show notes, and content repurposing so your team can focus on showing up with expertise.",
    },
    {
      question: "How much does podcast production cost?",
      answer:
        "Podcast production typically ranges from a few hundred dollars for light editing to several thousand dollars per month for full production, repurposing, and growth systems.",
    },
    {
      question: "Do you offer remote podcast production?",
      answer:
        "Yes. AJ Digital supports remote and local podcast production, including Miami-area recording coordination and nationwide remote workflows.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "Most clients see faster content output in the first 30 days, with stronger authority and pipeline impact compounding over the next 60 to 90 days.",
    },
    {
      question: "What makes AJ Digital different from a standard podcast editor?",
      answer:
        "We build the commercial system around the show, including repurposing, distribution, and conversion paths, not just edited files.",
    },
    {
      question: "Who is this service for?",
      answer:
        "It is built for founders, consultants, coaches, and operator-led brands that want authority and client acquisition from long-form content.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteUrl}/services/podcast-production/#service`,
        name: "Podcast Production Service",
        serviceType: "Podcast Production",
        url: `${siteUrl}/services/podcast-production`,
        description:
          "A full-service podcast production system for recording, editing, distribution, repurposing, and authority growth.",
        provider: buildOrganizationJsonLd(),
        areaServed: [
          { "@type": "City", name: "Miami" },
          { "@type": "AdministrativeArea", name: "South Florida" },
          { "@type": "Country", name: "United States" },
        ],
      },
      buildOrganizationJsonLd(),
      buildBreadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services/podcast-production" },
        { name: "Podcast Production", path: "/services/podcast-production" },
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

  const includedRows = [
    ["Recording support", "Studio or remote session design", "Clean capture and less friction"],
    ["Editing and mastering", "Audio and video post-production", "Broadcast-ready episodes"],
    ["Show notes and SEO", "Structured summaries and article-ready transcripts", "Search visibility and clarity"],
    ["Distribution", "Publishing setup and platform routing", "Consistent weekly delivery"],
    ["Repurposing", "Clips, posts, and long-form assets", "30+ usable assets from one session"],
    ["Strategy", "Positioning, messaging, and conversion path", "Authority linked to pipeline"],
  ];

  return (
    <div className="min-h-screen bg-bg-0 text-fg-1">
      <JsonLd data={jsonLd} />

      <section className="border-b border-border-subtle bg-[radial-gradient(circle_at_top,_rgba(232,255,90,0.10),_transparent_48%),linear-gradient(180deg,#0F0F0F_0%,#080808_100%)] px-6 pb-16 pt-28 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <p className="t-label mb-4">
            Podcast Production Service
          </p>
          <h1 className="t-h1 max-w-4xl">
            Podcast production that turns your expertise into clients
          </h1>
          <p className="mt-6 max-w-3xl t-lead text-fg-2">
            We do not just help you publish a show. We install the recording,
            editing, distribution, and repurposing system that turns one
            conversation into sustained authority and qualified demand.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/apply"
              data-track="podcast-service-hero-apply-cta"
              data-ga-event="apply_strategy_session_click"
              className="aj-btn-signal"
            >
              Apply for a Strategy Session
            </Link>
            <Link
              href="/case-studies/podcast-authority-system"
              className="aj-btn-intel"
            >
              See the system in action
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-5 t-small text-fg-2">
            <span>No commitment required</span>
            <span>30-minute strategy call</span>
            <span>Built for serious operators</span>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="t-h2">
            What is a podcast production service?
          </h2>
          <p className="mt-4 max-w-4xl t-body-lg text-fg-2">
            A podcast production service handles recording support, editing,
            publishing, show notes, and content repurposing. A full-service
            partner like AJ Digital turns each episode into a commercial asset,
            not just a media file. That is the same model covered in the{" "}
            <Link href="/blog/podcast-production-guide" className="text-fg-1 hover:text-signal-yellow transition-colors">
              podcast production guide
            </Link>{" "}
            and supported by a{" "}
            <Link href="/podcast-production-miami" className="text-fg-1 hover:text-signal-yellow transition-colors">
              local podcast production Miami
            </Link>{" "}
            workflow when on-site support matters.
          </p>
        </div>
      </section>

      <section className="border-y border-border-subtle bg-bg-1 px-6 py-16 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="t-h2">
            Why most business podcasts stall out
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              "No system behind content",
              "Inconsistent publishing",
              "No repurposing workflow",
              "No distribution strategy",
              "No conversion path tied to the show",
              "Too much founder time lost in post-production",
            ].map((item) => (
              <div
                key={item}
                className="aj-card p-5 text-fg-1"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="t-h2">
            We build podcast systems, not just episodes
          </h2>
          <div className="mt-8 aj-card is-surface-2 p-8">
            <p className="t-label">
              The AJ Digital Podcast Authority System
            </p>
            <ol className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                "Record once with a clear authority angle.",
                "Repurpose the conversation into 30+ assets.",
                "Distribute across channels with consistency.",
                "Convert attention into qualified conversations.",
              ].map((step) => (
                <li
                  key={step}
                  className="rounded-card border border-border-subtle bg-bg-0/60 p-5 text-fg-1"
                >
                  {step}
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-8 aj-card p-6">
            <p className="t-label">
              Workflow bridge
            </p>
            <div className="mt-4 flex flex-col gap-2 text-fg-1">
              <Link href="/blog/podcast-production-cost" className="hover:text-signal-yellow transition-colors">
                Review podcast production cost before you scope the system
              </Link>
              <Link href="/blog/what-does-a-podcast-production-agency-do" className="hover:text-signal-yellow transition-colors">
                Compare what a podcast production agency actually does
              </Link>
              <Link href="/blog/how-to-start-a-podcast-for-business" className="hover:text-signal-yellow transition-colors">
                Learn how to start a podcast for your business the right way
              </Link>
              <Link href="/blog/podcast-roi-for-business" className="hover:text-signal-yellow transition-colors">
                See how strong operators measure podcast ROI
              </Link>
              <Link href="/blog/podcast-content-repurposing" className="hover:text-signal-yellow transition-colors">
                See how one episode turns into a podcast repurposing workflow
              </Link>
              <Link href="/blog/ai-automation-podcast-production/" className="hover:text-signal-yellow transition-colors">
                Read how AI automates podcast production
              </Link>
              <Link href="/blog/content-repurposing-guide/" className="hover:text-signal-yellow transition-colors">
                See how one episode becomes a full content repurposing system
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border-subtle bg-bg-1 px-6 py-16 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="t-h2">
            What is included in the service?
          </h2>
          <div className="mt-8 overflow-x-auto rounded-panel border border-border-subtle">
            <table className="min-w-full divide-y divide-border-subtle text-left">
              <thead className="bg-bg-3">
                <tr className="t-label">
                  <th className="px-5 py-4">Service</th>
                  <th className="px-5 py-4">What we do</th>
                  <th className="px-5 py-4">Outcome</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle bg-bg-2 text-sm text-fg-1">
                {includedRows.map((row) => (
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

      <section className="px-6 py-16 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="t-h2">
            How the production process works
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["Step 1", "Strategy call", "We map the audience, positioning, and commercial goal."],
              ["Step 2", "System build", "We design the workflow, brand structure, and production stack."],
              ["Step 3", "You record", "You focus on the conversation while we manage execution."],
              ["Step 4", "Growth engine", "We distribute, repurpose, and optimize the assets."],
            ].map(([step, title, copy]) => (
              <div
                key={step}
                className="aj-card p-6"
              >
                <p className="t-label">
                  {step}
                </p>
                <h3 className="mt-3 t-h4">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-fg-2">{copy}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-4xl text-fg-1">
            Buyers usually use this process section to compare the scope against
            the{" "}
            <Link href="/blog/podcast-production-cost" className="text-fg-1 hover:text-signal-yellow transition-colors">
              podcast production cost guide
            </Link>{" "}
            , understand{" "}
            <Link href="/blog/what-does-a-podcast-production-agency-do" className="text-fg-1 hover:text-signal-yellow transition-colors">
              what a podcast production agency actually does
            </Link>{" "}
            , review{" "}
            <Link href="/blog/how-to-start-a-podcast-for-business" className="text-fg-1 hover:text-signal-yellow transition-colors">
              how to start a podcast for your business
            </Link>{" "}
            , and validate the economics through{" "}
            <Link href="/blog/podcast-roi-for-business" className="text-fg-1 hover:text-signal-yellow transition-colors">
              podcast ROI for business
            </Link>{" "}
            , understand how the recording can feed{" "}
            <Link href="/blog/podcast-content-repurposing" className="text-fg-1 hover:text-signal-yellow transition-colors">
              podcast content repurposing
            </Link>{" "}
            before checking the proof in the{" "}
            <Link href="/case-studies/podcast-authority-system" className="text-fg-1 hover:text-signal-yellow transition-colors">
              podcast authority system case study
            </Link>
            .
          </p>

          <InlineApplyCta
            eyebrow="Production implementation"
            headline="If you want this podcast production system implemented, apply for a strategy session."
            copy="Built for serious operators who want 30+ assets from one recording, consistent publishing, and a workflow tied to real pipeline."
            secondaryHref="/case-studies/podcast-authority-system"
            secondaryLabel="See the proof"
            trackingId="podcast-service-inline-cta"
          />
        </div>
      </section>

      <section className="border-y border-border-subtle bg-bg-1 px-6 py-16 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="t-h2">
            Frequently asked questions
          </h2>
          <div className="mt-8 space-y-5">
            {faqItems.map((item) => (
              <div
                key={item.question}
                className="aj-card p-6"
              >
                <h3 className="t-h4">
                  {item.question}
                </h3>
                <p className="mt-3 text-sm leading-7 text-fg-2">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-4xl aj-card is-surface-2 p-10 text-center">
          <h2 className="t-h2">
            Ready to build your podcast authority engine?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-fg-2">
            If the goal is more than publishing, we should talk. Start with a
            strategy session, then build the workflow behind the show.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/apply"
              className="aj-btn-signal"
            >
              Apply for a Strategy Session
            </Link>
            <Link
              href="/blog/podcast-production-cost"
              className="aj-btn-intel"
            >
              Review podcast production costs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

