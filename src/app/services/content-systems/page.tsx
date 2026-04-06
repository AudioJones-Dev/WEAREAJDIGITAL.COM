import Link from "next/link";
import type { Metadata } from "next";
import InlineApplyCta from "@/components/inline-apply-cta";

export const metadata: Metadata = {
  title: "Content Repurposing Systems | AJ Digital Strategy & Execution",
  description:
    "We build content systems that transform a single podcast or interview into 30+ lead-generating assets. Learn our content repurposing system today.",
};

export default function ContentSystemsServicePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Content Systems That Turn One Recording Into 30+ Assets",
        serviceType: "Content Repurposing System",
        provider: {
          "@type": "Organization",
          name: "AJ Digital",
          url: "https://weareajdigital.com",
          logo: "https://weareajdigital.com/logo.png",
        },
        areaServed: { "@type": "City", name: "Miami" },
        description:
          "We build content systems that transform a single podcast or interview into 30+ lead-generating assets. Learn our content repurposing system today.",
        offers: {
          "@type": "Offer",
          url: "https://weareajdigital.com/services/content-systems/",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "Organization",
        name: "AJ Digital",
        url: "https://weareajdigital.com",
        logo: "https://weareajdigital.com/logo.png",
        description:
          "Podcast Production, AI Consulting, and Content Systems Agency based in Miami.",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is a content system?",
            acceptedAnswer: { "@type": "Answer", text: "A content system is a repeatable workflow that turns one strong source asset into multiple distribution-ready outputs across blog, social, email, and sales support channels." },
          },
          {
            "@type": "Question",
            name: "How many assets can one recording produce?",
            acceptedAnswer: { "@type": "Answer", text: "One strong recording can often produce 30 or more usable assets, depending on the format, quality, and distribution plan behind it." },
          },
          {
            "@type": "Question",
            name: "Is content repurposing worth it?",
            acceptedAnswer: { "@type": "Answer", text: "Yes. Content repurposing increases output, consistency, and reach without forcing the business to create every asset from scratch." },
          },
          {
            "@type": "Question",
            name: "Do you automate workflows?",
            acceptedAnswer: { "@type": "Answer", text: "Yes. We use automation where it reduces manual drag and keeps the publishing system moving more reliably." },
          },
          {
            "@type": "Question",
            name: "Can this work with my podcast or video content?",
            acceptedAnswer: { "@type": "Answer", text: "Yes. Podcasts, interviews, webinars, and founder recordings are all strong inputs for a content system when the workflow is designed properly." },
          },
          {
            "@type": "Question",
            name: "How long does it take to set up a system?",
            acceptedAnswer: { "@type": "Answer", text: "A foundational content system can usually be designed and launched within a few weeks, depending on the complexity of the workflow and how quickly source content is available." },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://weareajdigital.com/" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://weareajdigital.com/services/" },
          { "@type": "ListItem", position: 3, name: "Content Systems", item: "https://weareajdigital.com/services/content-systems/" },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="max-w-4xl mx-auto py-16 px-4 md:px-8">
        <header className="mb-16 text-center border-b border-neutral-800 pb-12">
          <h1 className="text-4xl md:text-6xl font-bold font-sans tracking-tight mb-6">
            Content Systems That Turn One Recording Into 30+ Assets
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            We build content systems that turn podcasts, videos, and interviews into a consistent engine for blogs, clips, social posts, and lead-generating content.
          </p>
          <div className="flex flex-col items-center justify-center space-y-3">
            <Link href="/apply" className="inline-flex py-4 px-10 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-lg transition-colors text-lg shadow-lg shadow-amber-500/20">
              Apply for a Strategy Session
            </Link>
            <p className="text-sm font-medium text-neutral-400">Built for serious operators | Systemized, not improvised | Strategy plus execution</p>
          </div>
        </header>

        <article className="prose prose-invert max-w-none">
          <p className="text-lg leading-relaxed mb-12">
            A content system is a repeatable workflow that captures one strong source asset and turns it into multiple outputs. Instead of creating each post, article, or clip from scratch, the business builds a structure that lets one recording support a full publishing engine.
          </p>

          <h2>What is a content system?</h2>
          <p>
            A content system is a defined workflow that records expertise once and transforms it into multiple assets across search, social, email, and sales support channels. It reduces the pressure to create from zero every week and gives the business a repeatable way to stay visible. For a localized acquisition path, that same model is reflected on the <Link href="/content-systems-miami">content systems Miami</Link> page.
          </p>

          <h2>Who needs a content system?</h2>
          <p>
            This service is built for founders, consultants, and expert-led businesses that already have useful ideas but do not have the workflow to distribute them at scale. If your team is recording strong conversations but failing to turn them into consistent assets, you do not need more random posting. You need a better system.
          </p>

          <h2>What problems does a content system solve?</h2>
          <p>
            A content system removes the constant pressure of deciding what to publish next. It creates a stockpile of usable assets from one source session and connects long-form expertise to real distribution. That is why operators often connect this service to <Link href="/blog/content-repurposing-system">content repurposing systems</Link>, <Link href="/blog/podcast-content-repurposing">podcast content repurposing</Link>, <Link href="/blog/ai-tools-for-entrepreneurs">AI tools for entrepreneurs</Link>, and even <Link href="/blog/how-to-start-a-podcast-for-business">starting a business podcast</Link> when long-form content is the raw input.
          </p>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full border-collapse border border-neutral-800 rounded-lg">
              <caption className="text-left text-amber-500 font-bold mb-4 uppercase tracking-wider text-sm">The Repurposing Output Matrix</caption>
              <thead className="bg-neutral-900 border-b-2 border-amber-500">
                <tr>
                  <th className="border-x border-neutral-800 px-4 py-3 text-left">Content Input</th>
                  <th className="border-x border-neutral-800 px-4 py-3 text-left">Repurposed Assets</th>
                  <th className="border-x border-neutral-800 px-4 py-3 text-left">Business Outcome</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-x border-b border-neutral-800 px-4 py-3 font-medium text-neutral-300">Podcast episode</td>
                  <td className="border-x border-b border-neutral-800 px-4 py-3 text-neutral-400">Clips, a blog post, social captions, email copy</td>
                  <td className="border-x border-b border-neutral-800 px-4 py-3 text-white font-medium">Authority, consistency, and reach</td>
                </tr>
                <tr className="bg-neutral-900/40">
                  <td className="border-x border-b border-neutral-800 px-4 py-3 font-medium text-neutral-300">Webinar</td>
                  <td className="border-x border-b border-neutral-800 px-4 py-3 text-neutral-400">Lead magnets, summary articles, follow-up emails</td>
                  <td className="border-x border-b border-neutral-800 px-4 py-3 text-white font-medium">Education and conversion</td>
                </tr>
                <tr>
                  <td className="border-x border-b border-neutral-800 px-4 py-3 font-medium text-neutral-300">Founder interview</td>
                  <td className="border-x border-b border-neutral-800 px-4 py-3 text-neutral-400">Short clips, quote posts, newsletters</td>
                  <td className="border-x border-b border-neutral-800 px-4 py-3 text-white font-medium">Positioning and thought leadership</td>
                </tr>
                <tr className="bg-neutral-900/40">
                  <td className="border-x border-b border-neutral-800 px-4 py-3 font-medium text-neutral-300">Customer conversation</td>
                  <td className="border-x border-b border-neutral-800 px-4 py-3 text-neutral-400">Case study assets, testimonials, proof content</td>
                  <td className="border-x border-b border-neutral-800 px-4 py-3 text-white font-medium">Sales enablement</td>
                </tr>
                <tr>
                  <td className="border-x border-b border-neutral-800 px-4 py-3 font-medium text-neutral-300">Internal training video</td>
                  <td className="border-x border-b border-neutral-800 px-4 py-3 text-neutral-400">SOPs, onboarding material, internal docs</td>
                  <td className="border-x border-b border-neutral-800 px-4 py-3 text-white font-medium">Operational consistency</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>What does AJ Digital actually build?</h2>
          <p>
            We build the workflow between raw media and finished distribution assets. That includes repurposing logic, automation support, editorial structure, and publishing-ready outputs. We design the system, train the team on the process, and connect the moving parts so content compounds over time. The result is easier to visualize in the <Link href="/case-studies/podcast-authority-system">podcast authority system case study</Link>.
          </p>

          <h2>What content assets can one recording produce?</h2>
          <p>
            One well-structured recording can feed a meaningful part of a company&apos;s content calendar. The stronger the source material and workflow, the more leverage the business gets from each session.
          </p>

          <h2>How does our content systems process work?</h2>
          <p>
            Our process works like a production line. The source content enters once, moves through extraction, formatting, editing, and distribution, then exits as assets ready for multiple channels.
          </p>

          <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800 my-8">
            <h3 className="text-amber-500 font-bold text-xl mb-6 mt-0">The AJ Digital Content Systems Framework</h3>
            <ol className="text-neutral-300 space-y-4 m-0">
              <li><strong className="text-white">Capture long-form content</strong>: Record dense, high-signal source material.</li>
              <li><strong className="text-white">Extract key ideas and moments</strong>: Surface the strongest frameworks, stories, and hooks.</li>
              <li><strong className="text-white">Transform into platform-specific assets</strong>: Convert the source into assets for search, social, and email.</li>
              <li><strong className="text-white">Distribute consistently</strong>: Publish through a repeatable workflow instead of ad hoc posting.</li>
              <li><strong className="text-white">Optimize for SEO and AEO</strong>: Structure outputs so they are easier to rank and easier to extract.</li>
              <li><strong className="text-white">Route attention into offers</strong>: Tie content back to proof, offers, and qualified next steps.</li>
            </ol>
          </div>

          <h2>Why choose AJ Digital over a normal content agency?</h2>
          <p>
            Most content agencies focus on deliverables. AJ Digital focuses on the system behind the deliverables. That means workflow design, repurposing logic, automation where it helps, and a clearer path from content to authority and leads.
          </p>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full border-collapse border border-neutral-800 rounded-lg">
              <thead className="bg-neutral-900">
                <tr>
                  <th className="border-x border-neutral-800 px-4 py-4 text-left text-red-400 font-bold w-1/2">Typical Content Agency</th>
                  <th className="border-x border-neutral-800 px-4 py-4 text-left text-amber-500 font-bold w-1/2">AJ Digital</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-x border-b border-neutral-800 px-4 py-4 text-neutral-400">One-off deliverables</td>
                  <td className="border-x border-b border-neutral-800 px-4 py-4 font-bold text-white bg-amber-500/5">Repeatable content systems</td>
                </tr>
                <tr className="bg-neutral-900/30">
                  <td className="border-x border-b border-neutral-800 px-4 py-4 text-neutral-400">Manual posting</td>
                  <td className="border-x border-b border-neutral-800 px-4 py-4 font-bold text-white bg-amber-500/5">Scalable content infrastructure</td>
                </tr>
                <tr>
                  <td className="border-x border-b border-neutral-800 px-4 py-4 text-neutral-400">Disconnected workflows</td>
                  <td className="border-x border-b border-neutral-800 px-4 py-4 font-bold text-white bg-amber-500/5">Automation-enabled systems</td>
                </tr>
                <tr className="bg-neutral-900/30">
                  <td className="border-x border-b border-neutral-800 px-4 py-4 text-neutral-400">Vanity metrics</td>
                  <td className="border-x border-b border-neutral-800 px-4 py-4 font-bold text-white bg-amber-500/5">Authority, traffic, and lead generation</td>
                </tr>
                <tr>
                  <td className="border-x border-b border-neutral-800 px-4 py-4 text-neutral-400">Isolated assets</td>
                  <td className="border-x border-b border-neutral-800 px-4 py-4 font-bold text-white bg-amber-500/5">Integrated content engines</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 my-10 border-l-4 border-amber-500 bg-neutral-900 rounded-r-lg">
            <p className="m-0 font-medium text-amber-500 mb-2">Explore the architecture blueprints:</p>
            <div className="flex flex-col space-y-2">
              <Link href="/blog/content-repurposing-guide" className="hover:text-amber-400 underline underline-offset-4 text-sm font-medium">Pillar guide: content repurposing guide</Link>
              <Link href="/blog/content-repurposing-system" className="hover:text-amber-400 underline underline-offset-4 text-sm font-medium">Cluster: content repurposing system basics</Link>
              <Link href="/blog/podcast-content-repurposing" className="hover:text-amber-400 underline underline-offset-4 text-sm font-medium">Cluster: podcast content repurposing</Link>
              <Link href="/blog/ai-content-automation-guide" className="hover:text-amber-400 underline underline-offset-4 text-sm font-medium">Pillar guide: AI content automation</Link>
              <Link href="/blog/ai-tools-for-entrepreneurs" className="hover:text-amber-400 underline underline-offset-4 text-sm font-medium">Stack: AI tools for entrepreneurs</Link>
              <Link href="/blog/how-to-start-a-podcast-for-business" className="hover:text-amber-400 underline underline-offset-4 text-sm font-medium">Launch path: start a podcast for your business</Link>
              <Link href="/blog/how-to-build-authority-online" className="hover:text-amber-400 underline underline-offset-4 text-sm font-medium">Authority: how to build authority online</Link>
              <Link href="/services/podcast-production" className="hover:text-amber-400 underline underline-offset-4 text-sm font-medium">Execution: podcast production service</Link>
              <Link href="/services/ai-consulting" className="hover:text-amber-400 underline underline-offset-4 text-sm font-medium">Execution: AI consulting strategy</Link>
              <Link href="/content-systems-miami" className="hover:text-amber-400 underline underline-offset-4 text-sm font-medium">Local page: content systems Miami</Link>
              <Link href="/case-studies/podcast-authority-system" className="hover:text-amber-400 underline underline-offset-4 text-sm font-medium">Proof: podcast authority system case study</Link>
            </div>
          </div>

          <InlineApplyCta eyebrow="Content engine" headline="If you want this content system implemented, apply for a strategy session." copy="Built for serious operators who want systems, not one-off deliverables, and content tied to authority, traffic, and leads." secondaryHref="/content-systems-miami" secondaryLabel="See the Miami content systems page" trackingId="content-systems-service-inline-cta" />

          <hr className="my-12 border-neutral-800" />

          <h2>Frequently Asked Questions</h2>
          <div className="space-y-6 mt-6">
            <div>
              <h3 className="text-xl font-bold mb-2">What is a content system?</h3>
              <p className="text-neutral-300 m-0">A content system is a repeatable workflow that takes one strong source asset and turns it into multiple useful outputs across blog, social, email, and sales support channels.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">How many assets can one recording produce?</h3>
              <p className="text-neutral-300 m-0">One strong recording can often produce 30 or more usable assets, depending on the structure, quality, and distribution plan behind it.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Is content repurposing worth it?</h3>
              <p className="text-neutral-300 m-0">Yes. Repurposing gives the business more output, more consistency, and better reach without forcing the team to create every asset from zero.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Do you automate workflows?</h3>
              <p className="text-neutral-300 m-0">Yes. We use automation where it reduces manual drag and keeps the content workflow moving more reliably.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Can this work with my podcast or video content?</h3>
              <p className="text-neutral-300 m-0">Absolutely. Podcasts, interviews, webinars, and founder recordings are all strong inputs when the content system is designed properly.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">How long does it take to set up a system?</h3>
              <p className="text-neutral-300 m-0">A foundational system can usually be designed and launched within a few weeks, depending on the workflow and how quickly source content is available.</p>
            </div>
          </div>

          <div className="mt-16 p-10 bg-neutral-900 border-2 border-amber-500/20 rounded-2xl text-center shadow-xl shadow-amber-500/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-yellow-300"></div>
            <h2 className="!mt-0 mb-4 text-3xl font-bold">Ready to turn your content into a real system?</h2>
            <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">Stop relying on random posting. Build a repeatable engine that compounds.</p>
            <Link href="/apply" className="inline-flex py-4 px-10 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-lg transition-colors text-xl shadow-lg shadow-amber-500/20">Apply for a Strategy Session</Link>
          </div>
        </article>
      </main>
    </>
  );
}
