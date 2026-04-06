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
    <div className="min-h-screen bg-black text-white">
      <JsonLd data={jsonLd} />

      <section className="border-b border-neutral-900 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.3),_transparent_48%),linear-gradient(180deg,#05070a_0%,#000_100%)] px-6 pb-16 pt-28 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Podcast Production Service
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Podcast production that turns your expertise into clients
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
            We do not just help you publish a show. We install the recording,
            editing, distribution, and repurposing system that turns one
            conversation into sustained authority and qualified demand.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/apply"
              data-track="podcast-service-hero-apply-cta"
              data-ga-event="apply_strategy_session_click"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-500"
            >
              Apply for a Strategy Session
            </Link>
            <Link
              href="/case-studies/podcast-authority-system"
              className="inline-flex items-center justify-center rounded-xl border border-neutral-700 px-6 py-3 font-semibold text-white transition-colors hover:border-neutral-500 hover:bg-neutral-900"
            >
              See the system in action
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-5 text-sm font-medium text-neutral-400">
            <span>No commitment required</span>
            <span>30-minute strategy call</span>
            <span>Built for serious operators</span>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            What is a podcast production service?
          </h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-neutral-300">
            A podcast production service handles recording support, editing,
            publishing, show notes, and content repurposing. A full-service
            partner like AJ Digital turns each episode into a commercial asset,
            not just a media file. That is the same model covered in the{" "}
            <Link href="/blog/podcast-production-guide">
              podcast production guide
            </Link>{" "}
            and supported by a{" "}
            <Link href="/podcast-production-miami">
              local podcast production Miami
            </Link>{" "}
            workflow when on-site support matters.
          </p>
        </div>
      </section>

      <section className="border-y border-neutral-900 bg-neutral-950 px-6 py-16 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
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
                className="rounded-2xl border border-neutral-800 bg-black p-5 text-neutral-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            We build podcast systems, not just episodes
          </h2>
          <div className="mt-8 rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-950/30 to-neutral-950 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
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
                  className="rounded-2xl border border-neutral-800 bg-black/60 p-5 text-neutral-300"
                >
                  {step}
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-8 rounded-2xl border border-neutral-800 bg-black p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Workflow bridge
            </p>
            <div className="mt-4 flex flex-col gap-2 text-neutral-300">
              <Link href="/blog/podcast-production-cost">
                Review podcast production cost before you scope the system
              </Link>
              <Link href="/blog/what-does-a-podcast-production-agency-do">
                Compare what a podcast production agency actually does
              </Link>
              <Link href="/blog/how-to-start-a-podcast-for-business">
                Learn how to start a podcast for your business the right way
              </Link>
              <Link href="/blog/podcast-roi-for-business">
                See how strong operators measure podcast ROI
              </Link>
              <Link href="/blog/podcast-content-repurposing">
                See how one episode turns into a podcast repurposing workflow
              </Link>
              <Link href="/blog/ai-automation-podcast-production/">
                Read how AI automates podcast production
              </Link>
              <Link href="/blog/content-repurposing-guide/">
                See how one episode becomes a full content repurposing system
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-900 bg-neutral-950 px-6 py-16 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            What is included in the service?
          </h2>
          <div className="mt-8 overflow-x-auto rounded-3xl border border-neutral-800">
            <table className="min-w-full divide-y divide-neutral-800 text-left">
              <thead className="bg-black">
                <tr className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                  <th className="px-5 py-4">Service</th>
                  <th className="px-5 py-4">What we do</th>
                  <th className="px-5 py-4">Outcome</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800 bg-neutral-950 text-sm text-neutral-300">
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
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
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
                className="rounded-3xl border border-neutral-800 bg-black p-6"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                  {step}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-400">{copy}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-4xl text-neutral-300">
            Buyers usually use this process section to compare the scope against
            the{" "}
            <Link href="/blog/podcast-production-cost">
              podcast production cost guide
            </Link>{" "}
            , understand{" "}
            <Link href="/blog/what-does-a-podcast-production-agency-do">
              what a podcast production agency actually does
            </Link>{" "}
            , review{" "}
            <Link href="/blog/how-to-start-a-podcast-for-business">
              how to start a podcast for your business
            </Link>{" "}
            , and validate the economics through{" "}
            <Link href="/blog/podcast-roi-for-business">
              podcast ROI for business
            </Link>{" "}
            , understand how the recording can feed{" "}
            <Link href="/blog/podcast-content-repurposing">
              podcast content repurposing
            </Link>{" "}
            before checking the proof in the{" "}
            <Link href="/case-studies/podcast-authority-system">
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

      <section className="border-y border-neutral-900 bg-neutral-950 px-6 py-16 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Frequently asked questions
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
            Ready to build your podcast authority engine?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-300">
            If the goal is more than publishing, we should talk. Start with a
            strategy session, then build the workflow behind the show.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-500"
            >
              Apply for a Strategy Session
            </Link>
            <Link
              href="/blog/podcast-production-cost"
              className="inline-flex items-center justify-center rounded-xl border border-neutral-700 px-6 py-3 font-semibold text-white transition-colors hover:border-neutral-500 hover:bg-black"
            >
              Review podcast production costs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

