import Link from "next/link";
import type { Metadata } from "next";
import InlineApplyCta from "@/components/inline-apply-cta";

export const metadata: Metadata = {
  title: "Podcast Production Miami | AJ Digital",
  description: "Professional podcast production services in Miami. Recording, editing, and content systems that turn your podcast into clients.",
};

export default function PodcastProductionMiamiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "AJ Digital Podcast Production Miami",
        "image": "https://weareajdigital.com/logo.png",
        "url": "https://weareajdigital.com/podcast-production-miami/",
        "telephone": "",
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "Miami-Dade County"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Broward County"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Palm Beach County"
          },
          {
            "@type": "City",
            "name": "Miami"
          },
          {
            "@type": "City",
            "name": "Fort Lauderdale"
          },
          {
            "@type": "City",
            "name": "Boca Raton"
          },
          {
            "@type": "City",
            "name": "Hialeah"
          }
        ],
        "description": "We help Miami-based entrepreneurs, creators, and organizations build podcast systems that drive authority, content, and clients."
      },
      {
        "@type": "Service",
        "name": "Podcast Production Services Miami",
        "serviceType": "Podcast Production",
        "provider": {
          "@type": "Organization",
          "name": "AJ Digital",
          "url": "https://weareajdigital.com"
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Miami"
          },
          {
            "@type": "AdministrativeArea",
            "name": "South Florida"
          }
        ],
        "description": "Professional podcast production services in Miami. Recording, editing, and content systems that turn your podcast into clients."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does podcast production cost in Miami?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Pricing depends heavily on the scope, but complete end-to-end management for a business podcast in Miami generally ranges between $2,000 and $6,000 per month. This covers strategy, top-tier audio/video editing, and aggressive asset repurposing."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer studio recording in Miami?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We can facilitate access to premier partner studios located in Miami and Fort Lauderdale, or we can build a broadcast-quality recording environment directly inside your company's office or headquarters."
            }
          },
          {
            "@type": "Question",
            "name": "Can you come to my location?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Our mobile production capabilities allow us to travel to your location anywhere within the Miami-Dade, Broward, or Palm Beach areas to handle on-site, multi-camera recordings."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to launch a podcast?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "From initial strategic alignment to launching the first three episodes on Apple and Spotify, our typical runway for South Florida clients takes roughly 30 to 45 days."
            }
          },
          {
            "@type": "Question",
            "name": "Do Miami businesses benefit from podcasts?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. A podcast positions local professionals—such as real estate developers, legal firms, or health tech founders—as immediate authorities, drastically shortening sales cycles within the highly competitive Miami market."
            }
          },
          {
            "@type": "Question",
            "name": "What areas do you serve in South Florida?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We manage remote podcasts globally, but for physical on-site production, we actively service the entire tri-county area including Miami, Hialeah, Fort Lauderdale, and Boca Raton."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://weareajdigital.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Podcast Production Miami",
            "item": "https://weareajdigital.com/podcast-production-miami/"
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="max-w-4xl mx-auto py-16 px-4 md:px-8">
        
        {/* Local Hero */}
        <header className="mb-16 text-center border-b border-neutral-800 pb-12">
          <h1 className="text-4xl md:text-6xl font-bold font-sans tracking-tight mb-6">
            Podcast Production in Miami for Businesses and Brands
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            We help Miami-based entrepreneurs, creators, and organizations build podcast systems that drive authority, content, and clients.
          </p>
          <div className="flex flex-col items-center justify-center space-y-3">
            <Link href="/apply" className="inline-flex py-4 px-10 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-lg transition-colors text-lg shadow-lg shadow-amber-500/20">
              Apply for a Strategy Session →
            </Link>
          </div>
        </header>

        <article className="prose prose-invert max-w-none">

          {/* Intro direct answer */}
          <p className="text-lg leading-relaxed mb-12">
            Miami offers a wide range of podcast production services, from fully equipped rental studios to comprehensive agency-level management. We provide end-to-end production systems specifically tailored for South Florida businesses, meaning we don't just hit record; we handle audio mastering, multi-camera video editing, and strategic distribution. Our focus is transforming your recording into a powerful marketing engine.
          </p>

          <h2>What podcast production services are available in Miami?</h2>
          <p>
            Miami offers a wide range of podcast production services, from fully equipped rental studios to comprehensive agency-level management. We provide end-to-end production systems specifically tailored for South Florida businesses, meaning we don't just hit record; we handle audio mastering, multi-camera video editing, and strategic distribution. Our focus is transforming your recording into a powerful marketing engine.
          </p>

          <h2>Who is podcast production for in Miami?</h2>
          <p>
            Podcast production is for Miami-based B2B organizations, high-ticket consultants, and thought leaders who want to scale their authority without burning hours editing timelines. We primarily partner with founders across Miami-Dade County, Fort Lauderdale, and Boca Raton who recognize that establishing a premier audio and video presence is the sharpest strategy for acquiring affluent clients in the South Florida market.
          </p>

          <h2>What does AJ Digital offer in Miami?</h2>
          <p>
            AJ Digital offers business-focused podcast infrastructure. Rather than treating your podcast as a hobby, we treat it as an acquisition channel.
          </p>

          {/* Output Matrix */}
          <div className="overflow-x-auto my-8">
            <table className="min-w-full border-collapse border border-neutral-800 rounded-lg">
              <thead className="bg-neutral-900 border-b-2 border-amber-500">
                <tr>
                  <th className="border-x border-neutral-800 px-4 py-3 text-left">Service</th>
                  <th className="border-x border-neutral-800 px-4 py-3 text-left">Description</th>
                  <th className="border-x border-neutral-800 px-4 py-3 text-left">Outcome</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-x border-b border-neutral-800 px-4 py-3 font-medium text-neutral-300">Strategy & Development</td>
                  <td className="border-x border-b border-neutral-800 px-4 py-3 text-neutral-400">Mapping out your show's premise, topics, and ideal listener profiles based on your revenue targets.</td>
                  <td className="border-x border-b border-neutral-800 px-4 py-3 text-white font-medium">A clear strategic roadmap designed exclusively for high-intent client acquisition.</td>
                </tr>
                <tr className="bg-neutral-900/40">
                  <td className="border-x border-b border-neutral-800 px-4 py-3 font-medium text-neutral-300">On-Site & Remote Recording</td>
                  <td className="border-x border-b border-neutral-800 px-4 py-3 text-neutral-400">We can organize an on-site recording setup for executives or coordinate high-fidelity remote recording protocols.</td>
                  <td className="border-x border-b border-neutral-800 px-4 py-3 text-white font-medium">Flawless audio and video capture without operational headaches for the founder.</td>
                </tr>
                <tr>
                  <td className="border-x border-b border-neutral-800 px-4 py-3 font-medium text-neutral-300">Post-Production & Engineering</td>
                  <td className="border-x border-b border-neutral-800 px-4 py-3 text-neutral-400">Pro-level audio mixing, noise floor removal, dynamic EQ, and multi-cam video color grading.</td>
                  <td className="border-x border-b border-neutral-800 px-4 py-3 text-white font-medium">A polished, broadcast-quality final episode that commands respect.</td>
                </tr>
                <tr className="bg-neutral-900/40">
                  <td className="border-x border-b border-neutral-800 px-4 py-3 font-medium text-neutral-300">Content Repurposing</td>
                  <td className="border-x border-b border-neutral-800 px-4 py-3 text-neutral-400">Turning your primary episode into shorts, LinkedIn posts, blogs, and marketing newsletters.</td>
                  <td className="border-x border-b border-neutral-800 px-4 py-3 text-white font-medium">An automated marketing machine that fills your content calendar for the week.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Do you offer in-studio or on-site podcast production?</h2>
          <p>
            Yes, we provide flexible production environments to match your logistical needs. For clients situated remotely or preferring convenience, we execute high-end remote recording pipelines. For local organizations throughout Miami-Dade and Broward, we can deploy on-site production teams natively at your headquarters, establishing a professional "fly-on-the-wall" or dedicated studio environment to keep your operations agile.
          </p>

          <h2>How much does podcast production cost in Miami?</h2>
          <p>
            The cost of podcast production in Miami varies wildly depending on whether you are renting a DIY hourly studio ($50–$150/hr) or securing a full-service production agency ($2,000–$6,000+/month). True business podcasts require the latter—an investment in strategy, editing complexity, and content distribution systems—rather than just renting gear.
          </p>

          {/* Deep Linking Block */}
          <div className="p-4 my-10 border-l-4 border-amber-500 bg-neutral-900 rounded-r-lg flex flex-col space-y-2">
             <Link href="/blog/podcast-production-cost" className="hover:text-amber-400 underline underline-offset-4 text-sm font-medium">
                Detailed pricing breakdown: Podcast Production Cost Guide →
             </Link>
          </div>

          <h2>Why choose AJ Digital for podcast production in Miami?</h2>
          <p>
            You choose AJ Digital because our local understanding aligns directly with performance marketing. We are not just a Miami podcast studio that hands you a raw memory card at the end of the hour. We build the entire content system. We understand the South Florida business ecosystem—from Hialeah to the Palm Beaches—and craft bespoke content systems designed for serious operators, not casual vloggers. 
          </p>

          <div className="p-4 my-10 border-l-4 border-amber-500 bg-neutral-900 rounded-r-lg">
            <p className="m-0 font-medium text-amber-500 mb-2">Explore our core service details:</p>
             <div className="flex flex-col space-y-2">
              <Link href="/services/podcast-production" className="hover:text-amber-400 underline underline-offset-4 text-sm font-medium">
                Core Service: The full Podcast Production framework →
              </Link>
              <Link href="/blog/podcast-production-guide" className="hover:text-amber-400 underline underline-offset-4 text-sm font-medium">
                Pillar Guide: The Complete Podcast Production Guide →
              </Link>
              <Link href="/apply" className="hover:text-amber-400 underline underline-offset-4 text-sm font-medium">
                Execution: Apply for representation →
              </Link>
            </div>
          </div>

          <InlineApplyCta
            eyebrow="Local production"
            headline="If you want this Miami podcast system implemented, apply for a strategy session."
            copy="We help South Florida operators build authority podcasts, repurposing workflows, and production systems without adding more founder drag."
            secondaryHref="/case-studies/podcast-authority-system"
            secondaryLabel="See the proof"
            trackingId="podcast-miami-inline-cta"
          />

          <hr className="my-12 border-neutral-800" />

          {/* FAQ Section */}
          <h2>Frequently Asked Questions</h2>
          
          <div className="space-y-6 mt-6">
            <div>
              <h3 className="text-xl font-bold mb-2">How much does podcast production cost in Miami?</h3>
              <p className="text-neutral-300 m-0">Pricing depends heavily on the scope, but complete end-to-end management for a business podcast in Miami generally ranges between $2,000 and $6,000 per month. This covers strategy, top-tier audio/video editing, and aggressive asset repurposing.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2">Do you offer studio recording in Miami?</h3>
              <p className="text-neutral-300 m-0">We can facilitate access to premier partner studios located in Miami and Fort Lauderdale, or we can build a broadcast-quality recording environment directly inside your company's office or headquarters.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2">Can you come to my location?</h3>
              <p className="text-neutral-300 m-0">Yes. Our mobile production capabilities allow us to travel to your location anywhere within the Miami-Dade, Broward, or Palm Beach areas to handle on-site, multi-camera recordings.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">How long does it take to launch a podcast?</h3>
              <p className="text-neutral-300 m-0">From initial strategic alignment to launching the first three episodes on Apple and Spotify, our typical runway for South Florida clients takes roughly 30 to 45 days.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Do Miami businesses benefit from podcasts?</h3>
              <p className="text-neutral-300 m-0">Absolutely. A podcast positions local professionals—such as real estate developers, legal firms, or health tech founders—as immediate authorities, drastically shortening sales cycles within the highly competitive Miami market.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">What areas do you serve in South Florida?</h3>
              <p className="text-neutral-300 m-0">We manage remote podcasts globally, but for physical on-site production, we actively service the entire tri-county area including Miami, Hialeah, Fort Lauderdale, and Boca Raton.</p>
            </div>
          </div>

          {/* Service CTA Section */}
          <div className="mt-16 p-10 bg-neutral-900 border-2 border-amber-500/20 rounded-2xl text-center shadow-xl shadow-amber-500/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-yellow-300"></div>
            <h2 className="!mt-0 mb-4 text-3xl font-bold">Ready to build your podcast in Miami?</h2>
            <Link href="/apply" className="inline-flex py-4 px-10 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-lg transition-colors text-xl shadow-lg shadow-amber-500/20">
              Apply for a Strategy Session →
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
