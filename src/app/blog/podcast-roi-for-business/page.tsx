import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/json-ld";
import InlineApplyCta from "@/components/inline-apply-cta";
import { buildBreadcrumbJsonLd, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Podcast ROI for Business | AJ Digital",
  description:
    "Measure whether your podcast is creating leads, authority, and content leverage instead of only vanity metrics like downloads.",
  alternates: {
    canonical: "/blog/podcast-roi-for-business",
  },
};

export default function PodcastRoiForBusinessPage() {
  const faqs = [
    {
      question: "What is podcast ROI?",
      answer:
        "Podcast ROI measures the return generated from your podcast in terms of leads, clients, brand authority, and content output, not just audience size.",
    },
    {
      question: "Are downloads enough to measure a business podcast?",
      answer:
        "No. Downloads are one signal, but business podcasts are usually more valuable for trust, authority, and sales momentum than for raw audience volume alone.",
    },
    {
      question: "What actually drives ROI?",
      answer:
        "Trust, content volume, distribution reach, and inbound leads are the clearest business drivers. The more leverage one episode creates, the stronger the return.",
    },
    {
      question: "When does podcast ROI improve?",
      answer:
        "ROI usually improves when the show is connected to repurposing, distribution, and offers. That is when a podcast starts functioning as a system instead of a file output.",
    },
  ];

  const metricRows = [
    ["Downloads", "Vanity"],
    ["Leads", "Real"],
    ["Clients", "Real"],
    ["Engagement", "Mixed"],
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${siteUrl}/blog/podcast-roi-for-business/#article`,
        headline: "Podcast ROI for Business: How to Measure If Your Show Is Actually Working",
        description:
          "Measure whether your podcast is creating leads, authority, and content leverage instead of only vanity metrics like downloads.",
        author: { "@type": "Person", name: "Audio Jones" },
        publisher: {
          "@type": "Organization",
          name: "AJ Digital",
          logo: { "@type": "ImageObject", url: `${siteUrl}/logo.png` },
        },
        mainEntityOfPage: `${siteUrl}/blog/podcast-roi-for-business`,
      },
      buildBreadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: "Podcast ROI for Business", path: "/blog/podcast-roi-for-business" },
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
            Published: April 2026 | Updated: April 2026 | By: Audio Jones | Reading Time: 8 min
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Podcast ROI for Business: How to Measure If Your Show Is Actually Working
          </h1>
          <p className="mt-6 text-xl leading-8 text-neutral-300">
            Podcast ROI is not just downloads. For business owners, the real return comes from authority, trust, and client acquisition.
          </p>
        </header>

        <article className="prose prose-invert max-w-none">
          <div className="mb-10 rounded-r-2xl border-l-4 border-blue-500 bg-neutral-950 p-5">
            <p className="m-0 font-medium text-blue-400">Continue the measurement cluster:</p>
            <div className="mt-3 flex flex-col gap-2">
              <Link href="/blog/podcast-production-cost">Podcast production cost {"->"}</Link>
              <Link href="/blog/what-does-a-podcast-production-agency-do">What a podcast production agency does {"->"}</Link>
              <Link href="/blog/content-repurposing-system">Content repurposing system {"->"}</Link>
              <Link href="/services/podcast-production">Podcast production service {"->"}</Link>
              <Link href="/apply">Apply for a strategy session {"->"}</Link>
            </div>
          </div>

          <h2>What is podcast ROI?</h2>
          <p>
            Podcast ROI measures the return generated from your podcast in terms of leads, clients, brand authority, and content output, not just audience size. For business owners, the real return comes from authority, trust, and client acquisition.
          </p>

          <h2>What actually drives ROI?</h2>
          <ul>
            <li>Trust and credibility</li>
            <li>Content volume</li>
            <li>Distribution reach</li>
            <li>Inbound leads</li>
          </ul>

          <h2>ROI vs vanity metrics</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-neutral-800">
              <thead className="bg-neutral-900">
                <tr>
                  <th className="border border-neutral-800 px-4 py-3 text-left">Metric</th>
                  <th className="border border-neutral-800 px-4 py-3 text-left">Type</th>
                </tr>
              </thead>
              <tbody>
                {metricRows.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell) => (
                      <td key={cell} className="border border-neutral-800 px-4 py-3">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>The AJ Digital ROI Model</h2>
          <ol>
            <li>Content output</li>
            <li>Authority growth</li>
            <li>Lead generation</li>
            <li>Conversion</li>
          </ol>
          <p>
            That is why business podcast ROI often improves only after the show connects to repurposing and a clear commercial workflow. If you are still measuring success only by downloads, you are probably missing the more valuable business signals.
          </p>

          <InlineApplyCta
            eyebrow="Business impact"
            headline="If you want your podcast measured like a business asset, apply for a strategy session."
            copy="We help operators connect podcast output to authority, content leverage, and lead generation instead of vanity metrics alone."
            secondaryHref="/services/podcast-production"
            secondaryLabel="Explore the podcast production service"
            trackingId="podcast-roi-inline-cta"
          />

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
            <h2 className="mt-0 text-3xl font-bold">Want your podcast to generate real business results?</h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-300">
              The biggest gains usually come from treating the podcast as infrastructure instead of isolated content.
            </p>
            <Link href="/apply" className="mt-4 inline-flex rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-500">
              Apply for a Strategy Session
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}
