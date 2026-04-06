import Link from 'next/link';
import { Metadata } from 'next';
import InlineApplyCta from "@/components/inline-apply-cta";

export const metadata: Metadata = {
  title: 'Case Study: How a Business Turned One Podcast Into 30+ Monthly Content Assets',
  description: 'See how AJ Digital transformed an inconsistent content approach into a structured podcast and content system generating 30+ assets per month and inbound leads.',
  openGraph: {
    title: 'Case Study: One Podcast to 30+ Content Assets',
    description: 'See how AJ Digital transformed an inconsistent content approach into a structured podcast and content system.',
    type: 'article',
  },
};

export default function PodcastAuthoritySystemCaseStudy() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'How a Business Turned One Podcast Into 30+ Monthly Content Assets and Inbound Leads',
        description: 'See how AJ Digital transformed an inconsistent content approach into a structured podcast and content system generating 30+ assets per month.',
        author: {
          '@type': 'Organization',
          name: 'AJ Digital',
          url: 'https://weareajdigital.com',
        },
        publisher: {
          '@type': 'Organization',
          name: 'AJ Digital',
          logo: {
            '@type': 'ImageObject',
            url: 'https://weareajdigital.com/logo.png',
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://weareajdigital.com/case-studies/podcast-authority-system',
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://weareajdigital.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Case Studies',
            item: 'https://weareajdigital.com/case-studies',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Podcast Authority System',
            item: 'https://weareajdigital.com/case-studies/podcast-authority-system',
          },
        ],
      },
    ],
  };

  return (
    <article className="min-h-screen bg-neutral-900 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section */}
      <header className="py-20 px-6 sm:px-12 lg:px-24 bg-gradient-to-br from-neutral-900 to-black border-b border-neutral-800">
        <div className="max-w-4xl mx-auto">
          <p className="text-blue-400 font-semibold tracking-wide uppercase mb-4">Case Study</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-tight text-white">
            How a Business Turned One Podcast Into 30+ Monthly Content Assets and Inbound Leads
          </h1>
          
          {/* Section 1: Above the Fold Summary */}
          <div className="bg-neutral-800/50 rounded-xl p-8 border border-neutral-700">
            <h2 className="text-xl font-semibold mb-6 flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              At a Glance
            </h2>
            <ul className="space-y-4 text-neutral-300">
              <li><strong className="text-white">Client Type:</strong> Entrepreneur / Brand / Organization</li>
              <li><strong className="text-white">Problem:</strong> No system, inconsistent content output, and significant time bottlenecks.</li>
              <li><strong className="text-white">Solution:</strong> End-to-end Podcast Production + Content Repurposing System + AI Workflows.</li>
              <li><strong className="text-white">Result:</strong> 30+ strategic content assets per episode and newly generated inbound leads.</li>
            </ul>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto prose prose-invert prose-lg prose-a:text-blue-400 hover:prose-a:text-blue-300">
          
          {/* Section 2: The Problem */}
          <h2 className="text-3xl font-bold mt-12 mb-6">The Problem: Content Without a System</h2>
          <p>
            Before engaging AJ Digital, the client struggled with a scattered digital presence. They were attempting to create content on multiple platforms, but the execution was flawed:
          </p>
          <ul>
            <li><strong>No consistent content output:</strong> Posting happened sporadically, usually in reactive bursts.</li>
            <li><strong>Time bottlenecks:</strong> Filming, editing, and writing content consumed dozens of hours per month with minimal ROI.</li>
            <li><strong>No repurposing system:</strong> Valuable ideas and conversations were posted once and forgotten.</li>
            <li><strong>No distribution strategy:</strong> Assets were not optimized or segmented for their ideal platforms.</li>
            <li><strong>Content not converting into business outcomes:</strong> Despite the effort, the content failed to turn audience attention into reliable results.</li>
          </ul>

          {/* Section 3: The System Implemented */}
          <h2 className="text-3xl font-bold mt-16 mb-6">The System Implemented</h2>
          <p>
            We stopped the random acts of marketing and deployed a unified, centralized strategy using our core service architectures.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">1. The Podcast System</h3>
          <p>
            We established a <Link href="/services/podcast-production/">podcast production</Link> pipeline acting as the primary source of all content. By sitting down for one recording session, the client fed the entire ecosystem.
          </p>
          <ul>
            <li><strong>Recording Setup:</strong> Configured a high-quality, frictionless remote recording environment so the client only had to show up and speak.</li>
            <li><strong>Episode Structure:</strong> Designed an interview and solo-topic framework designed specifically to tease out highly clippable moments and educational value. Read more about <Link href="/blog/podcast-production-guide/">our podcast frameworks</Link>.</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4">2. The Content System</h3>
          <p>
            We instituted a rigid <Link href="/services/content-systems/">content repurposing system</Link> to ensure no recording went to waste.
          </p>
          <ul>
            <li><strong>Repurposing Workflow:</strong> Mapped the complete lifecycle of one 45-minute episode into YouTube videos, newsletters, and social micro-assets. Dive deeper into the mechanics of a <Link href="/blog/content-repurposing-guide/">repurposing system</Link>.</li>
            <li><strong>Asset Generation:</strong> Established clear format definitions for short-form video (TikTok/Reels), LinkedIn carousels, and long-form written articles.</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4">3. AI Integration</h3>
          <p>
            We layered <Link href="/services/ai-consulting/">AI automation workflows</Link> on top of the content team to drastically remove human bottlenecks and lower overhead costs.
          </p>
          <ul>
            <li><strong>Tools Used:</strong> Implemented AI-driven transcriptions, automated clipping tools, and LLM drafting tailored specifically to the client's brand voice.</li>
            <li><strong>Automation Introduced:</strong> Built data pipelines tying content files directly to approval project management boards.</li>
          </ul>

          {/* Section 4: Execution */}
          <h2 className="text-3xl font-bold mt-16 mb-6">Execution: A Step-by-Step Build</h2>
          <p>
            Transformation requires process. Here is how we rolled out the system:
          </p>
          <ol>
            <li><strong>Strategy Alignment:</strong> Defined target ICP, brand narrative, and content pillars.</li>
            <li><strong>System Build:</strong> Assembled the technical recording environment and AI workflow pipelines.</li>
            <li><strong>Content Production:</strong> Initiated the first continuous recordings, yielding raw anchor content.</li>
            <li><strong>Repurposing:</strong> Pushed anchor content through our system, cutting specific formats for LinkedIn, YouTube, and X.</li>
            <li><strong>Distribution:</strong> Synced final assets into an automated publishing loop directly hitting the client's audience.</li>
            <li><strong>Optimization:</strong> Monitored engagement metrics to adjust hooks, titles, and thumbnails for subsequent batches.</li>
          </ol>

          {/* Section 5: Results */}
          <div className="bg-gradient-to-r from-blue-900/40 to-neutral-800 border border-blue-800/50 rounded-xl p-8 my-16">
            <h2 className="text-3xl font-bold mt-0 mb-6 text-white">The Results</h2>
            <p className="text-neutral-200 font-medium mb-6">
              By replacing scattered effort with targeted machinery, the outcomes were immediate and undeniable:
            </p>
            <div className="grid gap-4 md:grid-cols-4 not-prose mb-8">
              {[
                ["30+", "Content assets per episode"],
                ["10+ hrs", "Monthly founder time reclaimed"],
                ["1 system", "Connected production, AI, and repurposing workflow"],
                ["Early pipeline", "Inbound interest generated from authority content"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-blue-500/20 bg-black/40 p-5 text-center">
                  <p className="text-3xl font-black text-white">{value}</p>
                  <p className="mt-2 text-sm leading-6 text-neutral-300">{label}</p>
                </div>
              ))}
            </div>
            <ul className="text-white space-y-3 font-semibold marker:text-blue-400">
              <li>30+ high-quality content assets generated per episode.</li>
              <li>Consistent, unshakeable weekly publishing schedule.</li>
              <li>Drastically reduced manual workload for the client.</li>
              <li>Exponentially increased content velocity.</li>
              <li>Generation of early inbound interest and tangible authority growth.</li>
            </ul>
          </div>

          <InlineApplyCta
            eyebrow="System handoff"
            headline="If you want this system implemented for your business, apply for a strategy session."
            copy="We map the workflow, qualify fit quickly, and show where podcast production, AI automation, and content systems create the clearest leverage."
            secondaryHref="/services/podcast-production"
            secondaryLabel="Explore the podcast production service"
            trackingId="case-study-system-inline-cta"
          />

          {/* Section 6: Key Takeaways */}
          <h2 className="text-3xl font-bold mt-16 mb-6">Key Takeaways</h2>
          <p>
            When scaling thought leadership, intent isn't enough. You need infrastructure.
          </p>
          <ul>
            <li><strong>Systems outperform effort:</strong> Hard work without a pipeline scales poorly. Systems compound.</li>
            <li><strong>Repurposing drives scale:</strong> You do not need more ideas; you need more expressions of your best ideas.</li>
            <li><strong>AI accelerates execution:</strong> Automating the drudge work leaves humans free to handle strategy and relationships.</li>
            <li><strong>Content must connect to business:</strong> Views are vanity metrics unless structurally routed to a funnel or offer.</li>
          </ul>

          <InlineApplyCta
            eyebrow="Results"
            headline="If you're serious about building this, apply for a strategy session."
            copy="Built for serious operators who want systems, not one-off deliverables, and who need authority content tied to business outcomes."
            secondaryHref="/services/content-systems"
            secondaryLabel="Explore content systems"
            trackingId="case-study-results-inline-cta"
          />

        </div>
      </main>

      {/* Section 7: CTA */}
      <section className="py-24 px-6 relative overflow-hidden bg-neutral-900 border-t border-neutral-800">
        <div className="absolute inset-0 bg-blue-900/10" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Want to build a system like this?</h2>
          <p className="text-xl text-neutral-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Get a system, not just content. Stop producing single-use assets and start building an authority engine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/apply" 
              data-track="case-study-apply-cta"
              data-ga-event="apply_strategy_session_click"
              className="inline-flex justify-center items-center px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/25 border border-blue-500/50"
            >
              Apply for a Strategy Session
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

    </article>
  );
}
