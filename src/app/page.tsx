import Link from 'next/link';
import { Metadata } from 'next';
import InlineApplyCta from "@/components/inline-apply-cta";

export const metadata: Metadata = {
  title: 'AJ Digital | Podcast Production, AI Consulting, Content Systems',
  description: 'AJ Digital builds podcast systems, AI workflows, and content engines for entrepreneurs and businesses in Miami and South Florida.',
  openGraph: {
    title: 'AJ Digital | Podcast Production, AI Consulting, Content Systems',
    description: 'AJ Digital builds podcast systems, AI workflows, and content engines for entrepreneurs and businesses in Miami and South Florida.',
    type: 'website',
  },
};

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://weareajdigital.com/#website',
        url: 'https://weareajdigital.com',
        name: 'AJ Digital',
        description: 'AJ Digital builds podcast systems, AI workflows, and content engines.',
        publisher: {
          '@id': 'https://weareajdigital.com/#organization'
        }
      },
      {
        '@type': 'Organization',
        '@id': 'https://weareajdigital.com/#organization',
        name: 'AJ Digital',
        url: 'https://weareajdigital.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://weareajdigital.com/logo.png',
        },
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://weareajdigital.com/#localbusiness',
        name: 'AJ Digital',
        url: 'https://weareajdigital.com',
        image: 'https://weareajdigital.com/logo.png',
        telephone: '', // Add if applicable
        areaServed: [
          { '@type': 'City', name: 'Miami', region: 'FL' },
          { '@type': 'City', name: 'Fort Lauderdale', region: 'FL' },
          { '@type': 'City', name: 'West Palm Beach', region: 'FL' }
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What does AJ Digital do?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'AJ Digital builds robust podcast systems, AI automation workflows, and content repurposing engines. We transform raw ideas into highly structured, scalable content pipelines.'
            }
          },
          {
            '@type': 'Question',
            name: 'Who do you work with?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We partner directly with entrepreneurs, coaches, B2B founders, and operator-led businesses who want to scale their authority through high-leverage content systems.'
            }
          },
          {
            '@type': 'Question',
            name: 'Do you offer podcast production in Miami?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, we provide end-to-end podcast production services in Miami-Dade, Broward, and Palm Beach, offering both in-studio and on-site setups.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can you help implement AI systems?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Absolutely. We design and implement custom AI workflows that automate marketing drudge work, bridging content generation mapping directly into your CRM or scheduling tools.'
            }
          },
          {
            '@type': 'Question',
            name: 'What is a content system?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A content system is infrastructure that turns a single pillar asset (like a podcast) into dozens of micro-assets (videos, carousels, articles) consistently and predictably without manual intervention.'
            }
          },
          {
            '@type': 'Question',
            name: 'How do I get started?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You can get started by filling out our short qualification application to book a strategy session, where we will map out the exact system needed for your growth.'
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 sm:px-12 lg:px-24 bg-black overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-black to-black opacity-80" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/20 border border-blue-500/30 text-blue-400 text-sm font-semibold mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Building Authority Engines for Modern Businesses
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400">
            Podcast, AI, and Content Systems That Turn Attention Into Clients
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            We help entrepreneurs, brands, and operator-led businesses build podcast systems, AI workflows, and content engines that create authority, consistency, and growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-12">
            <Link 
              href="/apply" 
              data-cta-location="hero"
              data-track="homepage-hero-apply-cta"
              data-ga-event="apply_strategy_session_click"
              className="inline-flex justify-center items-center px-10 py-5 text-lg font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-500 transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)]"
            >
              Apply for a Strategy Session
            </Link>
            <Link 
              href="/case-studies" 
              className="inline-flex justify-center items-center px-10 py-5 text-lg font-semibold text-white bg-neutral-900 border border-neutral-700 rounded-xl hover:bg-neutral-800 hover:border-neutral-500 transition-all"
            >
              See Results
            </Link>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-sm font-medium text-neutral-400">
            <span className="flex items-center"><svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Built for serious operators</span>
            <span className="flex items-center"><svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Strategy + implementation</span>
            <span className="flex items-center"><svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>No fluff, no random posting</span>
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <section className="border-t border-b border-neutral-800 bg-neutral-950 py-8 relative z-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-wrap justify-center sm:justify-between items-center gap-8 text-sm md:text-base font-bold text-neutral-500 uppercase tracking-widest">
          <span>30+ assets from one recording</span>
          <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-neutral-700"></span>
          <span>Systems over random posting</span>
          <span className="hidden md:inline-block w-1 h-1 rounded-full bg-neutral-700"></span>
          <span>Podcast + AI + Repurposing</span>
          <span className="hidden lg:inline-block w-1 h-1 rounded-full bg-neutral-700"></span>
          <span>Built for lead generation</span>
        </div>
      </section>

      {/* 3. WHAT AJ DIGITAL ACTUALLY BUILDS */}
      <section className="py-24 px-6 sm:px-12 lg:px-24 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">What AJ Digital actually builds</h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">Infrastructure, not just assets. We build the engines that scale your reach.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/services/podcast-production/" className="group block h-full">
              <div className="bg-neutral-900 border border-neutral-800 hover:border-blue-500/50 rounded-2xl p-8 h-full flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(37,99,235,0.3)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
                <h3 className="text-2xl font-bold text-white mb-4">Podcast Production</h3>
                <p className="text-neutral-400 mb-8 flex-grow leading-relaxed">
                  Studio-quality podcast systems for authority, audience, and client growth. End-to-end recording to launch.
                </p>
                <div className="text-blue-400 font-bold flex items-center mt-auto">
                  Explore Podcast Systems
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </div>
              </div>
            </Link>

            <Link href="/services/ai-consulting/" className="group block h-full">
              <div className="bg-neutral-900 border border-neutral-800 hover:border-blue-500/50 rounded-2xl p-8 h-full flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(37,99,235,0.3)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
                <h3 className="text-2xl font-bold text-white mb-4">AI Consulting</h3>
                <p className="text-neutral-400 mb-8 flex-grow leading-relaxed">
                  Practical AI systems that improve workflow, drastically scale content execution, and remove administrative friction.
                </p>
                <div className="text-blue-400 font-bold flex items-center mt-auto">
                  Explore AI Workflows
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </div>
              </div>
            </Link>

            <Link href="/services/content-systems/" className="group block h-full">
              <div className="bg-neutral-900 border border-neutral-800 hover:border-blue-500/50 rounded-2xl p-8 h-full flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(37,99,235,0.3)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
                <h3 className="text-2xl font-bold text-white mb-4">Content Systems</h3>
                <p className="text-neutral-400 mb-8 flex-grow leading-relaxed">
                  Repurposing and automation systems that turn one podcast recording into 30+ cross-platform assets consistently.
                </p>
                <div className="text-blue-400 font-bold flex items-center mt-auto">
                  Explore Content Automation
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. WHO THIS IS FOR */}
      <section className="py-24 px-6 sm:px-12 lg:px-24 bg-neutral-950 border-y border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Built for businesses that want more than content</h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">We engineer solutions for leaders seeking authority and leverage.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-black border border-neutral-800 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4 border-b border-neutral-800 pb-4">Entrepreneurs</h3>
              <p className="text-sm font-semibold text-neutral-500 mb-2 uppercase">The Pain</p>
              <p className="text-neutral-300 mb-4 text-sm leading-relaxed">No time to write, film, or edit while running execution.</p>
              <p className="text-sm font-semibold text-neutral-500 mb-2 uppercase">The Fit</p>
              <p className="text-neutral-300 text-sm leading-relaxed">We extract your expertise in 60 minutes and systemize the rest.</p>
            </div>
            <div className="bg-black border border-neutral-800 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4 border-b border-neutral-800 pb-4">Coaches / Consultants</h3>
              <p className="text-sm font-semibold text-neutral-500 mb-2 uppercase">The Pain</p>
              <p className="text-neutral-300 mb-4 text-sm leading-relaxed">Struggling to stand out and generate qualified high-ticket leads.</p>
              <p className="text-sm font-semibold text-neutral-500 mb-2 uppercase">The Fit</p>
              <p className="text-neutral-300 text-sm leading-relaxed">We build authority podcasts that position you as the definitive expert.</p>
            </div>
            <div className="bg-black border border-neutral-800 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4 border-b border-neutral-800 pb-4">Personal Brands</h3>
              <p className="text-sm font-semibold text-neutral-500 mb-2 uppercase">The Pain</p>
              <p className="text-neutral-300 mb-4 text-sm leading-relaxed">Inconsistent posting schedules killing algorithmic momentum.</p>
              <p className="text-sm font-semibold text-neutral-500 mb-2 uppercase">The Fit</p>
              <p className="text-neutral-300 text-sm leading-relaxed">We deploy repurposing pipelines delivering 30+ assets a month.</p>
            </div>
            <div className="bg-black border border-neutral-800 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4 border-b border-neutral-800 pb-4">Organizations</h3>
              <p className="text-sm font-semibold text-neutral-500 mb-2 uppercase">The Pain</p>
              <p className="text-neutral-300 mb-4 text-sm leading-relaxed">Massive archives of talks/events that no one discovers online.</p>
              <p className="text-sm font-semibold text-neutral-500 mb-2 uppercase">The Fit</p>
              <p className="text-neutral-300 text-sm leading-relaxed">We index, optimize, and distribute your historical IP via AI systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CORE DIFFERENTIATOR */}
      <section className="py-24 px-6 sm:px-12 lg:px-24 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Not a content shop. A systems partner.</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-6 border-b border-neutral-800 text-xl font-bold text-neutral-500 w-1/2">Typical Agency</th>
                  <th className="p-6 border-b-2 border-blue-600 text-xl font-bold text-white w-1/2 bg-blue-900/10 rounded-tr-xl">AJ Digital</th>
                </tr>
              </thead>
              <tbody className="text-lg">
                <tr className="border-b border-neutral-800/50">
                  <td className="p-6 text-neutral-400">One-off deliverables</td>
                  <td className="p-6 text-white font-semibold bg-blue-900/5">Repeatable, compounding systems</td>
                </tr>
                <tr className="border-b border-neutral-800/50">
                  <td className="p-6 text-neutral-400">Editing only</td>
                  <td className="p-6 text-white font-semibold bg-blue-900/5">Full authority engine architecture</td>
                </tr>
                <tr className="border-b border-neutral-800/50">
                  <td className="p-6 text-neutral-400">AI hype and toys</td>
                  <td className="p-6 text-white font-semibold bg-blue-900/5">Practical workflow implementation</td>
                </tr>
                <tr className="border-b border-neutral-800/50">
                  <td className="p-6 text-neutral-400">Just posting content</td>
                  <td className="p-6 text-white font-semibold bg-blue-900/5">Routing content to business outcomes</td>
                </tr>
                <tr>
                  <td className="p-6 text-neutral-400">Disconnected, manual assets</td>
                  <td className="p-6 text-white font-semibold bg-blue-900/5 rounded-br-xl">Integrated, automated distribution</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. PROCESS SECTION */}
      <section className="py-24 px-6 sm:px-12 lg:px-24 bg-neutral-950 border-y border-neutral-900 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">How it works</h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">The AJ Digital Authority Engine™</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Strategy", desc: "We map your exact business goals, target ICP, and authority pillars before touching a microphone." },
              { num: "02", title: "System Design", desc: "Constructing the technical architecture, from studio logistics to programmatic database pipelines." },
              { num: "03", title: "Production", desc: "Recording high-fidelity audio/video master assets demanding only 60 minutes of your time." },
              { num: "04", title: "Repurposing", desc: "Extracting the gold. Splicing the master file into 30+ platform-native micro-assets." },
              { num: "05", title: "Distribution", desc: "Pushing optimized assets into automated pipelines that feed YouTube, LinkedIn, and newsletters." },
              { num: "06", title: "Optimization", desc: "Measuring retention graphs and AEO signals to iterate and scale the next production cycle." }
            ].map(step => (
              <div key={step.num} className="bg-black border border-neutral-800 rounded-xl p-8 relative overflow-hidden group hover:border-blue-600 transition-colors">
                <div className="text-6xl font-black text-neutral-900 absolute top-4 right-4 group-hover:text-blue-900/20 transition-colors">{step.num}</div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10 pt-4">{step.title}</h3>
                <p className="text-neutral-400 leading-relaxed relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>

          <InlineApplyCta
            eyebrow="Implementation"
            headline="If you want this authority system implemented, apply for a strategy session."
            copy="Built for serious operators who want 30+ assets from one recording, practical workflow design, and systems that route attention into real pipeline."
            secondaryHref="/case-studies/podcast-authority-system"
            secondaryLabel="See the proof"
            trackingId="homepage-process-inline-cta"
          />
        </div>
      </section>

      {/* 7. FEATURED CASE STUDY SECTION */}
      <section className="py-24 px-6 sm:px-12 lg:px-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-neutral-900 to-black border border-neutral-800 rounded-3xl p-1 md:p-1 overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0 bg-blue-500/5 mix-blend-overlay"></div>
            <div className="flex flex-col lg:flex-row relative z-10">
              <div className="w-full lg:w-3/5 p-10 md:p-16 flex flex-col justify-center">
                <p className="text-sm font-bold tracking-widest uppercase text-blue-500 mb-6">Featured Case Study</p>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
                  How a Business Turned One Podcast Into 30+ Monthly Content Assets
                </h3>
                <p className="text-neutral-400 mb-4 text-lg">
                  <strong className="text-white">The Problem:</strong> No system, inconsistent posting, and massive time bottlenecks causing burnout.
                </p>
                <p className="text-neutral-400 mb-10 text-lg">
                  <strong className="text-white">The Result:</strong> End-to-end production systems yielded high-velocity outbound content, skyrocketing authority.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/case-studies/podcast-authority-system" 
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition-colors"
                  >
                    Read Case Study
                  </Link>
                  <Link 
                    href="/case-studies" 
                    className="inline-flex items-center px-6 py-3 border border-neutral-700 text-white font-bold rounded-lg hover:bg-neutral-800 transition-colors"
                  >
                    View All Work
                  </Link>
                </div>
              </div>
              <div className="w-full lg:w-2/5 bg-neutral-950 border-l border-neutral-800 min-h-[300px] flex items-center justify-center p-12">
                <div className="text-center">
                  <div className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-600 mb-4">
                    30+
                  </div>
                  <p className="text-neutral-300 font-bold uppercase tracking-wider text-xl mb-2">Assets / Month</p>
                  <p className="text-neutral-500 font-semibold text-sm">From 1 Recording Session</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. LOCAL SOUTH FLORIDA SECTION */}
      <section className="py-24 px-6 sm:px-12 lg:px-24 bg-neutral-900 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Serving Miami and South Florida</h2>
            <p className="text-xl text-neutral-300 mb-6 leading-relaxed">
              We provide localized studio implementation and on-site strategy across Miami-Dade, Broward, and Palm Beach—paired with seamless remote delivery options nationwide.
            </p>
            <p className="text-lg text-neutral-400 mb-10">
              Build your authority right in your own backyard.
            </p>
            <Link href="/apply" className="text-blue-400 font-bold text-lg hover:text-blue-300 flex items-center">
              Discuss local options <span className="ml-2">→</span>
            </Link>
          </div>
          <div className="w-full lg:w-1/2 grid grid-cols-1 gap-4">
            <Link href="/podcast-production-miami" className="bg-black border border-neutral-800 hover:border-blue-500/50 p-6 rounded-xl flex justify-between items-center group transition-colors">
              <span className="font-bold text-lg text-white">Podcast Production Miami</span>
              <span className="text-blue-500 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link href="/ai-consulting-miami" className="bg-black border border-neutral-800 hover:border-blue-500/50 p-6 rounded-xl flex justify-between items-center group transition-colors">
              <span className="font-bold text-lg text-white">AI Consulting Miami</span>
              <span className="text-blue-500 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link href="/content-systems-miami" className="bg-black border border-neutral-800 hover:border-blue-500/50 p-6 rounded-xl flex justify-between items-center group transition-colors">
              <span className="font-bold text-lg text-white">Content Systems Miami</span>
              <span className="text-blue-500 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 9. INSIGHTS / AUTHORITY SECTION */}
      <section className="py-24 px-6 sm:px-12 lg:px-24 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-4 text-white">Resources for building authority</h2>
              <p className="text-neutral-400 text-lg">Detailed guides and operational blueprints from our internal playbook.</p>
            </div>
            <Link href="/blog" className="hidden sm:inline-flex text-blue-400 font-bold hover:text-blue-300">
              View All Articles →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "The Ultimate Guide to Business Podcast Production",
                desc: "How to structure, record, and scale a podcast designed explicitly for B2B lead generation.",
                link: "/blog/podcast-production-guide/"
              },
              {
                title: "How to Build a Content Repurposing System",
                desc: "The exact pipeline we use to turn a single hour of audio into a month of multi-channel content.",
                link: "/blog/content-repurposing-guide/"
              },
              {
                title: "The Complete Guide to AI Content Automation",
                desc: "Replacing repetitive editorial tasks with reliable, structured Large Language Model workflows.",
                link: "/blog/ai-content-automation-guide/"
              }
            ].map(article => (
              <div key={article.link} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-white mb-4 line-clamp-2">{article.title}</h3>
                <p className="text-neutral-400 mb-8 flex-grow leading-relaxed line-clamp-3">{article.desc}</p>
                <Link href={article.link} className="text-blue-400 font-bold hover:text-blue-300 inline-flex items-center w-max mt-auto group">
                  Read Article <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section className="py-24 px-6 sm:px-12 lg:px-24 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center text-white">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {[
              {
                q: "What does AJ Digital do?",
                a: "AJ Digital builds robust podcast systems, AI automation workflows, and content repurposing engines. We transform raw ideas into highly structured, scalable content pipelines."
              },
              {
                q: "Who do you work with?",
                a: "We partner directly with entrepreneurs, coaches, B2B founders, and operator-led businesses who want to scale their authority through high-leverage content systems."
              },
              {
                q: "Do you offer podcast production in Miami?",
                a: "Yes, we provide end-to-end podcast production services in Miami-Dade, Broward, and Palm Beach, offering both in-studio and on-site setups."
              },
              {
                q: "Can you help implement AI systems?",
                a: "Absolutely. We design and implement custom AI workflows that automate marketing drudge work, bridging content generation mapping directly into your CRM or scheduling tools."
              },
              {
                q: "What is a content system?",
                a: "A content system is infrastructure that turns a single pillar asset (like a podcast) into dozens of micro-assets (videos, carousels, articles) consistently and predictably without manual intervention."
              },
              {
                q: "How do I get started?",
                a: "You can get started by filling out our short qualification application on the /apply page to book a strategy session. We'll map out the exact system needed for your growth."
              }
            ].map((faq, i) => (
              <div key={i} className="border-b border-neutral-800 pb-8 last:border-0 last:pb-0">
                <h3 className="text-xl font-bold text-white mb-3">{faq.q}</h3>
                <p className="text-neutral-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA SECTION */}
      <section className="py-32 px-6 sm:px-12 relative overflow-hidden bg-black border-t border-neutral-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/30 via-black to-black" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold border-none mb-8 text-white tracking-tight">
            Ready to build a system behind your content?
          </h2>
          <p className="text-xl text-neutral-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Apply for a strategy session and we'll map the podcast, AI, or content system that makes the most sense for your business trajectory.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/apply" 
              className="inline-flex justify-center items-center px-10 py-5 text-lg font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-500 transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)]"
            >
              Apply for a Strategy Session
            </Link>
            <Link 
              href="/case-studies" 
              className="inline-flex justify-center items-center px-10 py-5 text-lg font-semibold text-white bg-neutral-900 border border-neutral-700 rounded-xl hover:bg-neutral-800 transition-all"
            >
              See Proof
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
