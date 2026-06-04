import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/json-ld";
import InlineApplyCta from "@/components/inline-apply-cta";
import { buildBreadcrumbJsonLd, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Podcast Content Repurposing | AJ Digital",
  description:
    "Turn one podcast episode into clips, blogs, emails, and social posts with a repeatable podcast content repurposing workflow.",
  alternates: {
    canonical: "/blog/podcast-content-repurposing",
  },
};

export default function PodcastContentRepurposingPage() {
  const faqs = [
    {
      question: "What is podcast content repurposing?",
      answer:
        "Podcast content repurposing is the process of turning one episode into clips, posts, blogs, emails, and other assets for multiple platforms.",
    },
    {
      question: "What can one podcast episode produce?",
      answer:
        "One episode can usually produce short clips, a website article, newsletter content, quote posts, and multiple social assets when the workflow is structured well.",
    },
    {
      question: "Why does podcast repurposing work so well?",
      answer:
        "It works because one recording creates multiple outputs, saves time, improves consistency, and gives the business more authority from the same source material.",
    },
  ];

  const outputRows = [
    ["Clips", "Instagram, TikTok"],
    ["Blog", "Website"],
    ["Email", "Newsletter"],
    ["Quotes", "Social posts"],
  ];

  const reasons = ["Multiplies content output", "Saves time", "Improves consistency", "Builds authority"];
  const workflow = ["Record", "Clip", "Format", "Publish", "Distribute"];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${siteUrl}/blog/podcast-content-repurposing/#article`,
        headline: "Podcast Content Repurposing: How to Turn One Episode Into 20+ Pieces of Content",
        description:
          "Turn one podcast episode into clips, blogs, emails, and social posts with a repeatable podcast content repurposing workflow.",
        author: { "@type": "Person", name: "Audio Jones" },
        publisher: {
          "@type": "Organization",
          name: "AJ Digital",
          logo: { "@type": "ImageObject", url: `${siteUrl}/logo.png` },
        },
        mainEntityOfPage: `${siteUrl}/blog/podcast-content-repurposing`,
      },
      buildBreadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: "Podcast Content Repurposing", path: "/blog/podcast-content-repurposing" },
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
    <div className="min-h-screen bg-bg-0 text-fg-0">
      <JsonLd data={jsonLd} />
      <main className="mx-auto max-w-4xl px-4 py-16 md:px-8">
        <header className="mb-12 border-b border-border-subtle pb-10">
          <p className="t-mono text-fg-3">
            Published: April 2026 | Updated: April 2026 | By: Audio Jones | Reading Time: 8 min
          </p>
          <h1 className="t-h1 mt-4">
            Podcast Content Repurposing: How to Turn One Episode Into 20+ Pieces of Content
          </h1>
          <p className="t-lead mt-6 text-fg-1">
            Podcast content repurposing allows you to turn one episode into multiple assets across platforms. Instead of creating content from scratch daily, you build once and distribute everywhere.
          </p>
        </header>

        <article className="prose prose-invert max-w-none">
          <div className="aj-callout is-blue mb-10">
            <p className="t-label m-0">Continue the content systems cluster:</p>
            <div className="mt-3 flex flex-col gap-2">
              <Link href="/blog/content-repurposing-system">Content repurposing system {"->"}</Link>
              <Link href="/blog/podcast-production-cost">Podcast production cost {"->"}</Link>
              <Link href="/blog/how-to-start-a-podcast-for-business">How to start a podcast for business {"->"}</Link>
              <Link href="/services/content-systems">Content systems service {"->"}</Link>
              <Link href="/services/podcast-production">Podcast production service {"->"}</Link>
              <Link href="/apply">Apply for a strategy session {"->"}</Link>
            </div>
          </div>

          <h2>What is podcast content repurposing?</h2>
          <p>
            Podcast repurposing is the process of turning one recorded episode into clips, posts, blogs, emails, and other content formats.
          </p>

          <h2>What can one episode produce?</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-border-subtle">
              <thead className="bg-bg-3">
                <tr>
                  <th className="border border-border-subtle px-4 py-3 text-left text-fg-0">Output</th>
                  <th className="border border-border-subtle px-4 py-3 text-left text-fg-0">Platform</th>
                </tr>
              </thead>
              <tbody>
                {outputRows.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell) => (
                      <td key={cell} className="border border-border-subtle px-4 py-3">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Why it works</h2>
          <ul>
            {reasons.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            That is why podcast repurposing connects naturally to the <Link href="/blog/content-repurposing-system">content repurposing system</Link>, the economics in <Link href="/blog/podcast-production-cost">podcast production cost</Link>, the launch logic in <Link href="/blog/how-to-start-a-podcast-for-business">starting a podcast for business</Link>, and the workflow design behind <Link href="/services/content-systems">content systems</Link>.
          </p>

          <h2>The AJ Digital Repurposing Workflow</h2>
          <ol>
            {workflow.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
          <p>
            The episode is the source asset. The workflow is what turns it into a content engine.
          </p>

          <InlineApplyCta
            eyebrow="Podcast leverage"
            headline="If you want a system that turns your podcast into a full content engine, apply for a strategy session."
            copy="We help operators repurpose one episode into multiple assets without rebuilding the workflow every week."
            secondaryHref="/services/content-systems"
            secondaryLabel="Explore content systems"
            trackingId="podcast-content-repurposing-inline-cta"
          />

          <h2>Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="t-h4">{faq.question}</h3>
                <p className="t-body m-0 text-fg-1">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="aj-card mt-16 p-8 text-center">
            <h2 className="t-h2 mt-0">Want a system that turns your podcast into a full content engine?</h2>
            <p className="t-lead mx-auto max-w-2xl text-fg-1">
              Build once, distribute everywhere, and let the workflow carry more of the load.
            </p>
            <Link href="/apply" className="aj-btn-signal mt-4">
              Apply for a Strategy Session
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}
