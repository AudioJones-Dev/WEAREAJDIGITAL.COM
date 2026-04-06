import Link from "next/link";
import type { Metadata } from "next";
import InlineApplyCta from "@/components/inline-apply-cta";

export const metadata: Metadata = {
  title: "AI Consulting for Entrepreneurs | AI Strategy & Implementation",
  description:
    "AI consulting for entrepreneurs and small businesses bridging strategy with workflow execution. We build practical AI automation systems that save time and maximize output.",
};

export default function AIConsultingServicePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "AI Consulting for Entrepreneurs and Small Businesses",
        serviceType: "AI Consulting",
        provider: {
          "@type": "Organization",
          name: "AJ Digital",
          url: "https://weareajdigital.com",
          logo: "https://weareajdigital.com/logo.png",
        },
        areaServed: { "@type": "City", name: "Miami" },
        description:
          "AI consulting for entrepreneurs and small businesses bridging strategy with workflow execution. We build practical AI automation systems that save time and maximize output.",
        offers: {
          "@type": "Offer",
          url: "https://weareajdigital.com/services/ai-consulting/",
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
            name: "What is AI consulting?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "AI consulting helps a business identify bottlenecks and implement practical AI systems that improve workflows, content production, and execution speed.",
            },
          },
          {
            "@type": "Question",
            name: "Who needs an AI consultant?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "AI consulting is valuable for entrepreneurs, operators, and small teams that understand AI has leverage but need help turning it into a reliable working system.",
            },
          },
          {
            "@type": "Question",
            name: "How much does AI consulting cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "AI consulting costs vary by scope. A focused strategy and workflow build may start in the low thousands, while larger implementation projects cost more based on system depth and integration work.",
            },
          },
          {
            "@type": "Question",
            name: "What tools do you recommend?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Tool recommendations depend on the workflow. Common stacks include ChatGPT or Claude, research tools, automation layers like n8n, and content production tools where they fit the system.",
            },
          },
          {
            "@type": "Question",
            name: "Can you help implement workflows?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Implementation is the point. We design the workflow, connect the tools, test the outputs, and help your team use the system in real operations.",
            },
          },
          {
            "@type": "Question",
            name: "Is AI consulting only for large companies?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. AI consulting is often most useful for small businesses because better systems can create leverage without forcing the team to hire ahead of capacity.",
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://weareajdigital.com/" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://weareajdigital.com/services/" },
          { "@type": "ListItem", position: 3, name: "AI Consulting", item: "https://weareajdigital.com/services/ai-consulting/" },
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
            AI Consulting for Entrepreneurs and Small Businesses
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            We turn AI from noise into practical systems that save time, increase output, and improve how your business operates.
          </p>
          <div className="flex flex-col items-center justify-center space-y-3">
            <Link href="/apply" className="inline-flex py-4 px-10 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-lg transition-colors text-lg shadow-lg shadow-amber-500/20">
              Apply for a Strategy Session
            </Link>
            <p className="text-sm font-medium text-neutral-400">No fluff. No hype. Just practical systems.</p>
          </div>
        </header>

        <article className="prose prose-invert max-w-none">
          <p className="text-lg leading-relaxed mb-12">
            AI consulting for entrepreneurs and small businesses is a practical service for designing and implementing workflows that reduce manual work. We map the bottlenecks, choose the right tools, and build systems your team can actually use.
          </p>

          <h2>What is AI consulting?</h2>
          <p>
            AI consulting is a strategy and implementation service built to help entrepreneurs integrate AI into real workflows. We assess operational drag, choose the right models and tools, and build systems that improve execution instead of adding more noise. For a local commercial path, that same model is available through <Link href="/ai-consulting-miami">AI consulting Miami</Link>.
          </p>

          <h2>Who is AI consulting for?</h2>
          <p>
            This service is built for entrepreneurs, founders, and small businesses that are losing time to repetitive digital work or inconsistent operations. It fits teams that want leverage from AI but need a practical implementation partner, not just another tool recommendation.
          </p>

          <h2>What problems does AI consulting solve?</h2>
          <p>
            AI consulting solves the bottlenecks that keep a business from scaling cleanly. That includes slow content production, manual admin work, weak lead follow-up, poor knowledge access, and workflows that break under pressure.
          </p>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full border-collapse border border-neutral-800 rounded-lg">
              <caption className="text-left text-amber-500 font-bold mb-4 uppercase tracking-wider text-sm">The AI Transformation Matrix</caption>
              <thead className="bg-neutral-900 border-b-2 border-amber-500">
                <tr>
                  <th className="border-x border-neutral-800 px-4 py-3 text-left">Business Problem</th>
                  <th className="border-x border-neutral-800 px-4 py-3 text-left">AI Solution</th>
                  <th className="border-x border-neutral-800 px-4 py-3 text-left">Outcome</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-x border-b border-neutral-800 px-4 py-3 font-medium text-neutral-300">Slow content production</td>
                  <td className="border-x border-b border-neutral-800 px-4 py-3 text-neutral-400">AI-assisted content workflows</td>
                  <td className="border-x border-b border-neutral-800 px-4 py-3 text-white font-medium">More output without more headcount</td>
                </tr>
                <tr className="bg-neutral-900/40">
                  <td className="border-x border-b border-neutral-800 px-4 py-3 font-medium text-neutral-300">Repetitive admin work</td>
                  <td className="border-x border-b border-neutral-800 px-4 py-3 text-neutral-400">Automation layers like n8n</td>
                  <td className="border-x border-b border-neutral-800 px-4 py-3 text-white font-medium">Time recovered for higher-value work</td>
                </tr>
                <tr>
                  <td className="border-x border-b border-neutral-800 px-4 py-3 font-medium text-neutral-300">Inconsistent workflows</td>
                  <td className="border-x border-b border-neutral-800 px-4 py-3 text-neutral-400">Systemized SOP and prompt design</td>
                  <td className="border-x border-b border-neutral-800 px-4 py-3 text-white font-medium">More reliable execution</td>
                </tr>
                <tr className="bg-neutral-900/40">
                  <td className="border-x border-b border-neutral-800 px-4 py-3 font-medium text-neutral-300">Weak knowledge access</td>
                  <td className="border-x border-b border-neutral-800 px-4 py-3 text-neutral-400">Internal retrieval and knowledge workflows</td>
                  <td className="border-x border-b border-neutral-800 px-4 py-3 text-white font-medium">Faster access to internal information</td>
                </tr>
                <tr>
                  <td className="border-x border-b border-neutral-800 px-4 py-3 font-medium text-neutral-300">Manual repurposing</td>
                  <td className="border-x border-b border-neutral-800 px-4 py-3 text-neutral-400">Extraction, transcription, and formatting systems</td>
                  <td className="border-x border-b border-neutral-800 px-4 py-3 text-white font-medium">One asset becomes multiple outputs</td>
                </tr>
                <tr className="bg-neutral-900/40">
                  <td className="border-x border-b border-neutral-800 px-4 py-3 font-medium text-neutral-300">Poor lead follow-up</td>
                  <td className="border-x border-b border-neutral-800 px-4 py-3 text-neutral-400">AI-assisted qualification and routing</td>
                  <td className="border-x border-b border-neutral-800 px-4 py-3 text-white font-medium">Faster response and cleaner handoff</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>What does AJ Digital actually help you implement?</h2>
          <p>
            We help you implement the logic between your tools, your knowledge, and your actual workflow. That can mean designing a content automation system, structuring internal knowledge, improving lead handling, or building AI support around day-to-day execution. This service connects directly to <Link href="/blog/ai-automation-podcast-production">AI podcast automation</Link>, the stack in <Link href="/blog/ai-tools-for-entrepreneurs">AI tools for entrepreneurs</Link>, the creator workflow in <Link href="/blog/ai-automation-for-content-creators">AI automation for content creators</Link>, and the proof inside the <Link href="/case-studies/podcast-authority-system">podcast authority system case study</Link>.
          </p>

          <h2>What results can you expect from AI consulting?</h2>
          <p>
            You can expect less operational drag, faster output, and better workflow consistency. The strongest gains usually come when AI is tied to repeatable tasks, content leverage, and measurable execution. That often starts with <Link href="/blog/ai-tools-for-entrepreneurs">AI tools for entrepreneurs</Link>, practical use cases in <Link href="/blog/chatgpt-for-business-owners">ChatGPT for business owners</Link>, the buyer-fit lens in <Link href="/blog/ai-consulting-for-small-business">AI consulting for small business</Link>, and the publishing layer described in the <Link href="/blog/content-repurposing-system">content repurposing system</Link> article.
          </p>

          <h2>How does our AI consulting process work?</h2>
          <p>
            Our process starts with the bottleneck, not the software. We work backward from the result you want, then build the workflow that gets you there.
          </p>

          <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800 my-8">
            <h3 className="text-amber-500 font-bold text-xl mb-6 mt-0">The AJ Digital AI Implementation Framework</h3>
            <ol className="text-neutral-300 space-y-4 m-0">
              <li><strong className="text-white">Audit bottlenecks</strong>: Identify the recurring tasks slowing your team down.</li>
              <li><strong className="text-white">Identify high-leverage use cases</strong>: Find the fastest wins with real operational value.</li>
              <li><strong className="text-white">Select the right tools</strong>: Choose a lean stack that fits the workflow.</li>
              <li><strong className="text-white">Design simple workflows</strong>: Build logic that is practical, resilient, and easy to manage.</li>
              <li><strong className="text-white">Implement and test</strong>: Connect the tools, test the outputs, and tighten the system.</li>
              <li><strong className="text-white">Train and optimize</strong>: Hand over clear operating rules and improve the system over time.</li>
            </ol>
          </div>

          <h2>Why choose AJ Digital over generic AI consultants?</h2>
          <p>
            AJ Digital is built around implementation. Many consultants stop at strategy, tool lists, or prompt ideas. We build systems that are meant to run inside real businesses, with execution quality, workflow clarity, and commercial use in mind.
          </p>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full border-collapse border border-neutral-800 rounded-lg">
              <thead className="bg-neutral-900">
                <tr>
                  <th className="border-x border-neutral-800 px-4 py-4 text-left text-red-400 font-bold w-1/2">Generic AI Consultant</th>
                  <th className="border-x border-neutral-800 px-4 py-4 text-left text-amber-500 font-bold w-1/2">AJ Digital</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-x border-b border-neutral-800 px-4 py-4 text-neutral-400">Strategy only</td>
                  <td className="border-x border-b border-neutral-800 px-4 py-4 font-bold text-white bg-amber-500/5">Strategy plus implementation</td>
                </tr>
                <tr className="bg-neutral-900/30">
                  <td className="border-x border-b border-neutral-800 px-4 py-4 text-neutral-400">Broad tool suggestions</td>
                  <td className="border-x border-b border-neutral-800 px-4 py-4 font-bold text-white bg-amber-500/5">Working systems tied to real workflows</td>
                </tr>
                <tr>
                  <td className="border-x border-b border-neutral-800 px-4 py-4 text-neutral-400">Theoretical use cases</td>
                  <td className="border-x border-b border-neutral-800 px-4 py-4 font-bold text-white bg-amber-500/5">Applied operational execution</td>
                </tr>
                <tr className="bg-neutral-900/30">
                  <td className="border-x border-b border-neutral-800 px-4 py-4 text-neutral-400">Disconnected recommendations</td>
                  <td className="border-x border-b border-neutral-800 px-4 py-4 font-bold text-white bg-amber-500/5">Content, workflow, and business system alignment</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 my-10 border-l-4 border-amber-500 bg-neutral-900 rounded-r-lg">
            <p className="m-0 font-medium text-amber-500 mb-2">Explore our execution resources:</p>
            <div className="flex flex-col space-y-2">
              <Link href="/blog/ai-content-automation-guide" className="hover:text-amber-400 underline underline-offset-4 text-sm font-medium">Pillar hub: AI content automation</Link>
              <Link href="/blog/ai-consulting-for-small-business" className="hover:text-amber-400 underline underline-offset-4 text-sm font-medium">Resource: AI consulting for small business</Link>
              <Link href="/blog/ai-tools-for-entrepreneurs" className="hover:text-amber-400 underline underline-offset-4 text-sm font-medium">Stack: AI tools for entrepreneurs</Link>
              <Link href="/blog/chatgpt-for-business-owners" className="hover:text-amber-400 underline underline-offset-4 text-sm font-medium">Use case: ChatGPT for business owners</Link>
              <Link href="/blog/ai-automation-for-content-creators" className="hover:text-amber-400 underline underline-offset-4 text-sm font-medium">Workflow: AI automation for content creators</Link>
              <Link href="/blog/content-repurposing-system" className="hover:text-amber-400 underline underline-offset-4 text-sm font-medium">Workflow: content repurposing system</Link>
              <Link href="/services/content-systems" className="hover:text-amber-400 underline underline-offset-4 text-sm font-medium">Execution: content systems</Link>
              <Link href="/case-studies/podcast-authority-system" className="hover:text-amber-400 underline underline-offset-4 text-sm font-medium">Proof: podcast authority system case study</Link>
            </div>
          </div>

          <InlineApplyCta eyebrow="Implementation partner" headline="If you want practical AI systems implemented, apply for a strategy session." copy="We help operators move from tool testing into practical workflow design, implementation, and measurable leverage." secondaryHref="/ai-consulting-miami" secondaryLabel="See the Miami AI consulting page" trackingId="ai-service-inline-cta" />

          <hr className="my-12 border-neutral-800" />

          <h2>Frequently Asked Questions</h2>
          <div className="space-y-6 mt-6">
            <div>
              <h3 className="text-xl font-bold mb-2">What is AI consulting?</h3>
              <p className="text-neutral-300 m-0">AI consulting helps a business identify bottlenecks and implement practical AI systems that improve workflows, content production, and execution speed.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Who needs an AI consultant?</h3>
              <p className="text-neutral-300 m-0">Entrepreneurs and small teams usually benefit most when they need leverage but do not have the technical bandwidth to build the system alone.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">How much does AI consulting cost?</h3>
              <p className="text-neutral-300 m-0">Cost depends on scope. Focused strategy and workflow builds start lower, while larger implementation projects cost more based on complexity and integration depth.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">What tools do you recommend?</h3>
              <p className="text-neutral-300 m-0">The best stack depends on the workflow. Common tools include ChatGPT or Claude, research tools, automation layers like n8n, and content production tools where they fit.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Can you help implement workflows?</h3>
              <p className="text-neutral-300 m-0">Yes. We design the workflow, connect the tools, test the outputs, and help your team operate the system with confidence.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Is AI consulting only for large companies?</h3>
              <p className="text-neutral-300 m-0">No. Smaller businesses often gain the most because better systems create leverage without forcing premature hiring.</p>
            </div>
          </div>

          <div className="mt-16 p-10 bg-neutral-900 border-2 border-amber-500/20 rounded-2xl text-center shadow-xl shadow-amber-500/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-yellow-300"></div>
            <h2 className="!mt-0 mb-4 text-3xl font-bold">Ready to implement AI that actually helps your business?</h2>
            <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">Get strategy, implementation, and systems designed around how your business actually works.</p>
            <Link href="/apply" className="inline-flex py-4 px-10 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-lg transition-colors text-xl shadow-lg shadow-amber-500/20">Apply for a Strategy Session</Link>
          </div>
        </article>
      </main>
    </>
  );
}

