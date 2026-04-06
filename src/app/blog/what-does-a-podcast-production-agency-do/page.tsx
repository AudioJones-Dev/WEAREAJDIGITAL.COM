import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/json-ld";
import InlineApplyCta from "@/components/inline-apply-cta";
import { buildBreadcrumbJsonLd, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "What Does a Podcast Production Agency Do? | AJ Digital",
  description:
    "Understand what a podcast production agency actually handles, how it differs from freelancers, and when businesses should upgrade to agency support.",
  alternates: {
    canonical: "/blog/what-does-a-podcast-production-agency-do",
  },
};

export default function WhatDoesAPodcastProductionAgencyDoPage() {
  const faqs = [
    {
      question: "What does a podcast production agency actually do?",
      answer:
        "A podcast production agency handles recording workflows, audio and video editing, publishing, and content repurposing. Strong agencies also provide strategy, SEO optimization, and systems that turn episodes into multiple content assets.",
    },
    {
      question: "What is the difference between an agency and a freelancer?",
      answer:
        "A freelancer usually handles a specific task such as editing or show notes. An agency typically owns the broader production system, consistency, and delivery workflow.",
    },
    {
      question: "When do you need an agency?",
      answer:
        "You usually need an agency when content consistency is breaking, you do not have time to manage production, and you want the podcast to drive business results instead of just publishing episodes.",
    },
    {
      question: "Is a podcast production agency worth it for businesses?",
      answer:
        "Yes, when the show is meant to become a growth asset and not just a media hobby. Agencies make more sense when you need systems, repurposing, and predictable execution.",
    },
  ];

  const comparisonRows = [
    ["DIY", "You handle everything", "Testing or hobby"],
    ["Freelancer", "Handles specific tasks", "Partial workflows"],
    ["Agency", "Owns the system", "Business growth"],
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${siteUrl}/blog/what-does-a-podcast-production-agency-do/#article`,
        headline: "What Does a Podcast Production Agency Do? (And When You Actually Need One)",
        description:
          "Understand what a podcast production agency actually handles, how it differs from freelancers, and when businesses should upgrade to agency support.",
        author: { "@type": "Person", name: "Audio Jones" },
        publisher: {
          "@type": "Organization",
          name: "AJ Digital",
          logo: { "@type": "ImageObject", url: `${siteUrl}/logo.png` },
        },
        mainEntityOfPage: `${siteUrl}/blog/what-does-a-podcast-production-agency-do`,
      },
      buildBreadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: "What Does a Podcast Production Agency Do", path: "/blog/what-does-a-podcast-production-agency-do" },
      ]),
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <JsonLd data={jsonLd} />

      <main className="mx-auto max-w-4xl px-4 py-16 md:px-8">
        <header className="mb-12 border-b border-neutral-800 pb-10">
          <p className="text-sm text-neutral-400">
            Published: April 2026 | Updated: April 2026 | By: Audio Jones | Reading Time: 7 min
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            What Does a Podcast Production Agency Do? (And When You Actually Need One)
          </h1>
          <p className="mt-6 text-xl leading-8 text-neutral-300">
            A podcast production agency manages the full lifecycle of a podcast, including recording support, editing, publishing, and content repurposing. The key difference between an agency and a freelancer is that an agency typically owns the system, not just a task.
          </p>
        </header>

        <article className="prose prose-invert max-w-none">
          <div className="mb-10 rounded-r-2xl border-l-4 border-blue-500 bg-neutral-950 p-5">
            <p className="m-0 font-medium text-blue-400">Related podcast production reads:</p>
            <div className="mt-3 flex flex-col gap-2">
              <Link href="/blog/podcast-production-cost">Podcast production cost {"->"}</Link>
              <Link href="/blog/how-to-start-a-podcast-for-business">How to start a podcast for business {"->"}</Link>
              <Link href="/blog/podcast-roi-for-business">Podcast ROI for business {"->"}</Link>
              <Link href="/services/podcast-production">Podcast production service {"->"}</Link>
              <Link href="/apply">Apply to work with AJ Digital {"->"}</Link>
            </div>
          </div>

          <h2>What does a podcast production agency actually do?</h2>
          <p>
            A podcast production agency handles recording workflows, audio and video editing, publishing, and content repurposing. Strong agencies also provide strategy, SEO optimization, and systems that turn episodes into multiple content assets.
          </p>
          <ul>
            <li>Recording setup or guidance</li>
            <li>Audio and video editing</li>
            <li>Show notes and metadata</li>
            <li>Publishing and distribution</li>
            <li>Content repurposing including clips, posts, and blogs</li>
          </ul>

          <h2>Agency vs freelancer vs DIY</h2>
          <p>
            The key difference is workflow ownership. A freelancer usually completes a task. A strong agency manages the system around the show. That is the same distinction most buyers discover when comparing a <Link href="/services/podcast-production">podcast production service</Link> to isolated editing support.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-neutral-800">
              <thead className="bg-neutral-900">
                <tr>
                  <th className="border border-neutral-800 px-4 py-3 text-left">Option</th>
                  <th className="border border-neutral-800 px-4 py-3 text-left">What they do</th>
                  <th className="border border-neutral-800 px-4 py-3 text-left">Best for</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell) => (
                      <td key={cell} className="border border-neutral-800 px-4 py-3">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>When do you actually need an agency?</h2>
          <p>
            You likely need an agency when content consistency is breaking, you do not have time to manage production, you want content to drive business results, and you need repurposing and distribution handled as part of one system. It also helps to compare <Link href="/blog/podcast-production-cost">podcast production costs</Link>, <Link href="/blog/how-to-start-a-podcast-for-business">launching a business podcast</Link>, and <Link href="/blog/podcast-roi-for-business">podcast ROI for business</Link> before you decide what level of support makes sense.
          </p>
          <ul>
            <li>You want content to create more than a finished episode file</li>
            <li>You need repurposing, packaging, and consistency</li>
            <li>You need the show tied to business growth, not vanity publishing</li>
          </ul>

          <InlineApplyCta
            eyebrow="System ownership"
            headline="If you want a podcast system instead of scattered production tasks, apply for a strategy session."
            copy="We help businesses move from editing-only support into production, repurposing, and commercial workflow ownership."
            secondaryHref="/services/podcast-production"
            secondaryLabel="Explore the podcast production service"
            trackingId="podcast-agency-draft-inline-cta"
          />

          <h2>The AJ Digital Production Model</h2>
          <ol>
            <li>Capture</li>
            <li>Edit</li>
            <li>Package</li>
            <li>Multiply</li>
            <li>Convert</li>
          </ol>
          <p>
            For business owners, that distinction determines whether a podcast becomes a growth asset or just another piece of content. If you are comparing support levels, pair this guide with the <Link href="/blog/podcast-production-cost">podcast production cost guide</Link> and <Link href="/blog/podcast-roi-for-business">podcast ROI for business</Link>.
          </p>

          <h2>Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-xl font-bold">{faq.question}</h3>
                <p className="m-0 text-neutral-300">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl border border-blue-500/20 bg-neutral-950 p-8 text-center">
            <h2 className="mt-0 text-3xl font-bold">Want a system instead of scattered production?</h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-300">
              Agency support makes sense when the show needs to create business leverage, not just finished files.
            </p>
            <Link
              href="/apply"
              className="mt-4 inline-flex rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-500"
            >
              Apply for a Strategy Session
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}

