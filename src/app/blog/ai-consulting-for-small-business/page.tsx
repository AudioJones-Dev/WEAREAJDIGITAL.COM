import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/json-ld";
import InlineApplyCta from "@/components/inline-apply-cta";
import { buildBreadcrumbJsonLd, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Consulting for Small Business | AJ Digital",
  description:
    "AI consulting for small business helps companies build practical AI systems that reduce manual work and improve output.",
  alternates: {
    canonical: "/blog/ai-consulting-for-small-business",
  },
};

export default function AIConsultingForSmallBusinessDraftPage() {
  const faqs = [
    {
      question: "What is AI consulting for small business?",
      answer:
        "AI consulting helps small businesses identify where AI can improve operations, content, and communication, then build the workflows that make those tools useful.",
    },
    {
      question: "What problems does AI consulting solve?",
      answer:
        "It helps reduce repetitive tasks, improve content consistency, speed up research, and connect disconnected tools into a more reliable system.",
    },
    {
      question: "When does a business need AI consulting?",
      answer:
        "A business usually needs AI consulting when the team is overwhelmed, the workflow is inefficient, or there are already tools in place but no system connecting them.",
    },
  ];

  const problems = [
    "Manual repetitive tasks",
    "Inconsistent content output",
    "Slow research and decision-making",
    "Disconnected tools and workflows",
  ];

  const signals = [
    "You are overwhelmed with tasks",
    "Content production is inconsistent",
    "Your team is inefficient",
    "You have tools but no system",
  ];

  const framework = [
    "Identify bottlenecks",
    "Select tools",
    "Build workflows",
    "Train usage",
    "Optimize system",
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${siteUrl}/blog/ai-consulting-for-small-business/#article`,
        headline: "AI Consulting for Small Business: What It Is and When You Actually Need It",
        description:
          "AI consulting for small business helps companies build practical AI systems that reduce manual work and improve output.",
        author: { "@type": "Person", name: "Audio Jones" },
        publisher: {
          "@type": "Organization",
          name: "AJ Digital",
          logo: { "@type": "ImageObject", url: `${siteUrl}/logo.png` },
        },
        mainEntityOfPage: `${siteUrl}/blog/ai-consulting-for-small-business`,
      },
      buildBreadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: "AI Consulting for Small Business", path: "/blog/ai-consulting-for-small-business" },
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
            AI Consulting for Small Business: What It Is and When You Actually Need It
          </h1>
          <p className="mt-6 text-xl leading-8 text-neutral-300">
            AI consulting for small business helps companies identify where AI can improve operations, content, and decision-making. Instead of chasing tools, the goal is to build systems that reduce manual work and increase output.
          </p>
        </header>

        <article className="prose prose-invert max-w-none">
          <div className="mb-10 rounded-r-2xl border-l-4 border-blue-500 bg-neutral-950 p-5">
            <p className="m-0 font-medium text-blue-400">Continue the AI consulting cluster:</p>
            <div className="mt-3 flex flex-col gap-2">
              <Link href="/blog/ai-tools-for-entrepreneurs">AI tools for entrepreneurs {"->"}</Link>
              <Link href="/blog/chatgpt-for-business-owners">ChatGPT for business owners {"->"}</Link>
              <Link href="/blog/ai-automation-for-content-creators">AI automation for content creators {"->"}</Link>
              <Link href="/blog/content-repurposing-system">Content repurposing system {"->"}</Link>
              <Link href="/services/ai-consulting">AI consulting service {"->"}</Link>
              <Link href="/apply">Apply for a strategy session {"->"}</Link>
            </div>
          </div>

          <h2>What is AI consulting for small business?</h2>
          <p>
            AI consulting helps small businesses implement tools and workflows that improve efficiency, reduce manual work, and increase output across content, operations, and communication.
          </p>

          <h2>What problems does AI consulting solve?</h2>
          <p>
            The main goal is to stop treating AI like a pile of disconnected tools and start using it as part of a system.
          </p>
          <ul>
            {problems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            That is why this topic overlaps with <Link href="/blog/ai-tools-for-entrepreneurs">AI tools for entrepreneurs</Link>, <Link href="/blog/chatgpt-for-business-owners">ChatGPT for business owners</Link>, the creator workflow in <Link href="/blog/ai-automation-for-content-creators">AI automation for content creators</Link>, and the broader <Link href="/services/ai-consulting">AI consulting service</Link>.
          </p>

          <h2>When does a business need AI consulting?</h2>
          <p>
            A business usually needs AI consulting when the team is running out of time, work is piling up, and the current stack is not creating leverage.
          </p>
          <ul>
            {signals.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>The AJ Digital AI Implementation Model</h2>
          <ol>
            {framework.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
          <p>
            The point is not to add more software. The point is to build a workflow that improves execution every week.
          </p>
          <p>
            For businesses where content is part of the bottleneck, that usually means connecting the AI workflow to a <Link href="/blog/content-repurposing-system">content repurposing system</Link> instead of solving each task in isolation.
          </p>

          <InlineApplyCta
            eyebrow="Small business AI"
            headline="If you need AI implemented properly instead of tested endlessly, apply for a strategy session."
            copy="We help small businesses turn AI into practical systems that reduce manual work and improve output."
            secondaryHref="/services/ai-consulting"
            secondaryLabel="Explore AI consulting"
            trackingId="ai-consulting-small-business-draft-inline-cta"
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
            <h2 className="mt-0 text-3xl font-bold">Need help implementing AI into your business properly?</h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-300">
              Build the workflow first, then make the tools serve it.
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
