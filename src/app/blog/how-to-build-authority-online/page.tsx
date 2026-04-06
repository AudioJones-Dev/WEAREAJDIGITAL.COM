import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/json-ld";
import InlineApplyCta from "@/components/inline-apply-cta";
import { buildBreadcrumbJsonLd, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "How to Build Authority Online | AJ Digital",
  description:
    "Learn how entrepreneurs build authority online through positioning, consistency, distribution, and systems instead of trend chasing.",
  alternates: {
    canonical: "/blog/how-to-build-authority-online",
  },
};

export default function HowToBuildAuthorityOnlinePage() {
  const faqs = [
    {
      question: "What is authority online?",
      answer:
        "Authority online is the perception that you are a trusted and credible source in your field. It is built through clear positioning, useful content, and consistent visibility over time.",
    },
    {
      question: "What actually builds authority online?",
      answer:
        "Authority grows through consistent content, strong messaging, clear positioning, reliable distribution, and enough repetition for the market to recognize your expertise.",
    },
    {
      question: "What is the biggest mistake people make when trying to build authority?",
      answer:
        "The biggest mistake is chasing trends instead of building a system. Short bursts of activity can create attention, but authority compounds when the message and workflow stay consistent.",
    },
  ];

  const authorityDrivers = [
    "Consistent content",
    "Clear messaging",
    "Strong positioning",
    "Distribution systems",
    "Time and repetition",
  ];

  const framework = ["Position", "Capture", "Multiply", "Distribute", "Convert"];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${siteUrl}/blog/how-to-build-authority-online/#article`,
        headline: "How to Build Authority Online in 2026 (Without Chasing Trends)",
        description:
          "Learn how entrepreneurs build authority online through positioning, consistency, distribution, and systems instead of trend chasing.",
        author: { "@type": "Person", name: "Audio Jones" },
        publisher: {
          "@type": "Organization",
          name: "AJ Digital",
          logo: { "@type": "ImageObject", url: `${siteUrl}/logo.png` },
        },
        mainEntityOfPage: `${siteUrl}/blog/how-to-build-authority-online`,
      },
      buildBreadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: "How to Build Authority Online", path: "/blog/how-to-build-authority-online" },
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
            Published: April 2026 | Updated: April 2026 | By: Audio Jones | Reading Time: 9 min
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            How to Build Authority Online in 2026 (Without Chasing Trends)
          </h1>
          <p className="mt-6 text-xl leading-8 text-neutral-300">
            Authority online is built through consistency, positioning, and systems, not viral moments. The goal is to become a trusted voice in your niche and turn that trust into a real business asset.
          </p>
        </header>

        <article className="prose prose-invert max-w-none">
          <div className="mb-10 rounded-r-2xl border-l-4 border-blue-500 bg-neutral-950 p-5">
            <p className="m-0 font-medium text-blue-400">Continue the authority-building cluster:</p>
            <div className="mt-3 flex flex-col gap-2">
              <Link href="/blog/personal-brand-strategy-for-entrepreneurs">Personal brand strategy for entrepreneurs {"->"}</Link>
              <Link href="/blog/content-repurposing-system">Content repurposing system {"->"}</Link>
              <Link href="/blog/how-to-start-a-podcast-for-business">How to start a podcast for business {"->"}</Link>
              <Link href="/blog/podcast-content-repurposing">Podcast content repurposing {"->"}</Link>
              <Link href="/services/content-systems">Content systems service {"->"}</Link>
              <Link href="/apply">Apply for a strategy session {"->"}</Link>
            </div>
          </div>

          <h2>What is authority online?</h2>
          <p>
            Authority online is the perception that you are a trusted, credible source in your field, built through consistent content and clear positioning. It is not a single viral post. It is the cumulative result of being easy to understand, easy to remember, and consistently useful.
          </p>

          <h2>What builds authority?</h2>
          <p>
            Authority grows when the market repeatedly sees the same strong message attached to useful ideas and a reliable distribution system.
          </p>
          <ul>
            {authorityDrivers.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            This is why authority building usually overlaps with a <Link href="/blog/content-repurposing-system">content repurposing system</Link>, a clearer approach to <Link href="/blog/how-to-start-a-podcast-for-business">long-form content creation</Link>, and even <Link href="/blog/podcast-content-repurposing">podcast repurposing</Link> when one conversation is meant to support multiple channels. The system is what keeps the message visible long enough to matter.
          </p>

          <h2>What is the biggest mistake?</h2>
          <p>
            The biggest mistake is chasing trends instead of building a system. Trend chasing creates short-term activity, but it rarely creates consistent positioning or compounding trust.
          </p>
          <p>
            Businesses often confuse attention with authority. Authority is slower, but it is more durable because it is tied to message clarity and repeatable execution.
          </p>

          <h2>The AJ Digital Authority Engine</h2>
          <ol>
            {framework.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
          <p>
            That sequence is what turns random content into authority infrastructure. It is also why entrepreneurs often pair this topic with <Link href="/blog/personal-brand-strategy-for-entrepreneurs">personal brand strategy</Link> and the workflow support inside <Link href="/services/content-systems">content systems</Link>.
          </p>

          <InlineApplyCta
            eyebrow="Authority"
            headline="If you want authority built through systems instead of trend chasing, apply for a strategy session."
            copy="We help entrepreneurs turn positioning, content, and distribution into a repeatable authority engine."
            secondaryHref="/services/content-systems"
            secondaryLabel="Explore content systems"
            trackingId="authority-online-inline-cta"
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
            <h2 className="mt-0 text-3xl font-bold">Ready to build real authority instead of posting randomly?</h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-300">
              Build the message, workflow, and distribution system that compounds over time.
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
