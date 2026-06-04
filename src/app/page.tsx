import Link from "next/link";
import { Metadata } from "next";
import InlineApplyCta from "@/components/inline-apply-cta";
import Hero from "@/components/home/hero";
import Pillars from "@/components/home/pillars";
import Stats from "@/components/home/stats";
import Personas from "@/components/home/personas";
import HowItWorks from "@/components/home/how-it-works";
import Locations from "@/components/home/locations";
import ServicesPreview from "@/components/home/services-preview";
import HomeCTA from "@/components/home/cta";
import Container from "@/components/home/container";

export const metadata: Metadata = {
  title: "AJ Digital | Podcast Production, AI Consulting, Content Systems",
  description:
    "AJ Digital builds podcast systems, AI workflows, and content engines for entrepreneurs and businesses in Miami and South Florida.",
  openGraph: {
    title: "AJ Digital | Podcast Production, AI Consulting, Content Systems",
    description:
      "AJ Digital builds podcast systems, AI workflows, and content engines for entrepreneurs and businesses in Miami and South Florida.",
    type: "website",
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.weareajdigital.com/#website",
        url: "https://www.weareajdigital.com",
        name: "AJ Digital",
        description:
          "AJ Digital builds podcast systems, AI workflows, and content engines.",
        publisher: { "@id": "https://www.weareajdigital.com/#organization" },
      },
      {
        "@type": "Organization",
        "@id": "https://www.weareajdigital.com/#organization",
        name: "AJ Digital",
        url: "https://www.weareajdigital.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.weareajdigital.com/logo.png",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.weareajdigital.com/#localbusiness",
        name: "AJ Digital",
        url: "https://www.weareajdigital.com",
        image: "https://www.weareajdigital.com/logo.png",
        areaServed: [
          { "@type": "City", name: "Miami", region: "FL" },
          { "@type": "City", name: "Fort Lauderdale", region: "FL" },
          { "@type": "City", name: "West Palm Beach", region: "FL" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What does AJ Digital do?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "AJ Digital builds robust podcast systems, AI automation workflows, and content repurposing engines. We transform raw ideas into highly structured, scalable content pipelines.",
            },
          },
          {
            "@type": "Question",
            name: "Who do you work with?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We partner directly with entrepreneurs, coaches, B2B founders, and operator-led businesses who want to scale their authority through high-leverage content systems.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer podcast production in Miami?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we provide end-to-end podcast production services in Miami-Dade, Broward, and Palm Beach, offering both in-studio and on-site setups.",
            },
          },
          {
            "@type": "Question",
            name: "Can you help implement AI systems?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolutely. We design and implement custom AI workflows that automate marketing drudge work, bridging content generation mapping directly into your CRM or scheduling tools.",
            },
          },
          {
            "@type": "Question",
            name: "What is a content system?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A content system is infrastructure that turns a single pillar asset (like a podcast) into dozens of micro-assets (videos, carousels, articles) consistently and predictably without manual intervention.",
            },
          },
          {
            "@type": "Question",
            name: "How do I get started?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can get started by filling out our short qualification application to book a strategy session, where we will map out the exact system needed for your growth.",
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="bg-bg-0 text-fg-1 selection:bg-signal-yellow/20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <Hero />

      {/* ── 2. TRUST STRIP ──────────────────────────────────────────────── */}
      <section className="py-6 bg-surface-1 border-y border-border-subtle">
        <Container>
          <div className="flex flex-wrap justify-center sm:justify-between items-center gap-6 font-mono text-xs font-medium text-fg-2 uppercase tracking-[0.16em]">
            <span>30+ assets from one recording</span>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-border-strong" />
            <span>Systems over random posting</span>
            <span className="hidden md:block w-1 h-1 rounded-full bg-border-strong" />
            <span>Podcast + AI + Repurposing</span>
            <span className="hidden lg:block w-1 h-1 rounded-full bg-border-strong" />
            <span>Built for lead generation</span>
          </div>
        </Container>
      </section>

      {/* ── 3. CORE PILLARS ─────────────────────────────────────────────── */}
      <Pillars />

      {/* ── 4. STATS ────────────────────────────────────────────────────── */}
      <Stats />

      {/* ── 5. WHO WE SERVE (PERSONAS) ──────────────────────────────────── */}
      <Personas />

      {/* ── 6. HOW IT WORKS ─────────────────────────────────────────────── */}
      <HowItWorks />

      {/* ── 7. NOT AN AGENCY — DIFFERENTIATOR TABLE ─────────────────────── */}
      <section className="py-32 bg-bg-1">
        <Container>
          <div className="text-center mb-16">
            <h2 className="t-h2 mb-4">
              Not a content shop. A systems partner.
            </h2>
          </div>
          <div className="overflow-x-auto rounded-card border border-border-subtle">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-6 border-b border-border-subtle t-h4 text-fg-2 w-1/2">
                    Typical Agency
                  </th>
                  <th className="p-6 border-b-2 border-signal-yellow/40 t-h4 text-fg-0 w-1/2 bg-surface-2">
                    AJ Digital
                  </th>
                </tr>
              </thead>
              <tbody className="t-body">
                {[
                  ["One-off deliverables", "Repeatable, compounding systems"],
                  ["Editing only", "Full authority engine architecture"],
                  ["AI hype and toys", "Practical workflow implementation"],
                  ["Just posting content", "Routing content to business outcomes"],
                  ["Disconnected, manual assets", "Integrated, automated distribution"],
                ].map(([left, right], i) => (
                  <tr key={i} className="border-b border-border-subtle last:border-0">
                    <td className="p-6 text-fg-2">{left}</td>
                    <td className="p-6 text-fg-0 font-semibold bg-surface-2/40">
                      {right}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* ── 8. SERVICES PREVIEW ─────────────────────────────────────────── */}
      <ServicesPreview />

      {/* ── 9. LOCATIONS ────────────────────────────────────────────────── */}
      <Locations />

      {/* ── 10. FEATURED CASE STUDY ─────────────────────────────────────── */}
      <section className="py-32 bg-bg-1">
        <Container>
          <div className="overflow-hidden rounded-card border border-border-subtle bg-surface-1">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-3/5 p-10 md:p-16 flex flex-col justify-center">
                <span className="t-label mb-6 block">
                  Featured Case Study
                </span>
                <h3 className="t-h3 mb-6">
                  How a Business Turned One Podcast Into 30+ Monthly Content
                  Assets
                </h3>
                <p className="t-body-lg text-fg-2 mb-4">
                  <strong className="text-fg-0">The Problem:</strong> No
                  system, inconsistent posting, and massive time bottlenecks
                  causing burnout.
                </p>
                <p className="t-body-lg text-fg-2 mb-10">
                  <strong className="text-fg-0">The Result:</strong>{" "}
                  End-to-end production systems yielded high-velocity outbound
                  content, skyrocketing authority.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/case-studies/podcast-authority-system"
                    className="aj-btn-signal"
                  >
                    Read Case Study
                  </Link>
                  <Link
                    href="/case-studies"
                    className="aj-btn-intel"
                  >
                    View All Work
                  </Link>
                </div>
              </div>
              <div className="lg:w-2/5 bg-surface-2 min-h-[280px] flex items-center justify-center p-12">
                <div className="text-center">
                  <div className="font-mono text-7xl font-medium text-signal-yellow mb-4">
                    30+
                  </div>
                  <p className="t-label text-fg-0 text-xl mb-2">
                    Assets / Month
                  </p>
                  <p className="t-mono text-fg-2">
                    From 1 Recording Session
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 11. SOUTH FLORIDA LOCAL SEO ─────────────────────────────────── */}
      <section className="py-32 bg-bg-0">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="t-h2 mb-6">
                Serving Miami and South Florida
              </h2>
              <p className="t-body-lg text-fg-2 mb-6">
                We provide localized studio implementation and on-site strategy
                across Miami-Dade, Broward, and Palm Beach—paired with seamless
                remote delivery options nationwide.
              </p>
              <p className="t-body text-fg-2 mb-10">
                Build your authority right in your own backyard.
              </p>
              <Link
                href="/apply"
                className="text-fg-1 font-bold hover:text-signal-yellow transition-colors flex items-center gap-2"
              >
                Discuss local options →
              </Link>
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 gap-4">
              {[
                {
                  label: "Podcast Production Miami",
                  href: "/podcast-production-miami",
                },
                { label: "AI Consulting Miami", href: "/ai-consulting-miami" },
                {
                  label: "Content Systems Miami",
                  href: "/content-systems-miami",
                },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="bg-surface-1 border border-border-subtle hover:border-border-strong p-6 rounded-card flex justify-between items-center group transition-all"
                >
                  <span className="t-body font-bold text-fg-0">
                    {item.label}
                  </span>
                  <span className="text-signal-yellow group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── 12. PROCESS INLINE CTA ──────────────────────────────────────── */}
      <section className="py-24 bg-bg-1">
        <Container>
          <InlineApplyCta
            eyebrow="Implementation"
            headline="If you want this authority system implemented, apply for a strategy session."
            copy="Built for serious operators who want 30+ assets from one recording, practical workflow design, and systems that route attention into real pipeline."
            secondaryHref="/case-studies/podcast-authority-system"
            secondaryLabel="See the proof"
            trackingId="homepage-process-inline-cta"
          />
        </Container>
      </section>

      {/* ── 13. INSIGHTS / BLOG ─────────────────────────────────────────── */}
      <section className="py-32 bg-bg-0">
        <Container>
          <div className="flex flex-col sm:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="t-h2 mb-4">
                Resources for building authority
              </h2>
              <p className="t-body-lg text-fg-2">
                Detailed guides and operational blueprints from our internal
                playbook.
              </p>
            </div>
            <Link
              href="/blog"
              className="hidden sm:inline-flex text-fg-1 font-bold hover:text-signal-yellow transition-colors whitespace-nowrap"
            >
              View All Articles →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "The Ultimate Guide to Business Podcast Production",
                desc: "How to structure, record, and scale a podcast designed explicitly for B2B lead generation.",
                link: "/blog/podcast-production-guide",
              },
              {
                title: "How to Build a Content Repurposing System",
                desc: "The exact pipeline we use to turn a single hour of audio into a month of multi-channel content.",
                link: "/blog/content-repurposing-guide",
              },
              {
                title: "The Complete Guide to AI Content Automation",
                desc: "Replacing repetitive editorial tasks with reliable, structured Large Language Model workflows.",
                link: "/blog/ai-content-automation-guide",
              },
            ].map((article) => (
              <div
                key={article.link}
                className="aj-card flex flex-col h-full"
              >
                <h3 className="t-h4 mb-4 line-clamp-2">
                  {article.title}
                </h3>
                <p className="t-body text-fg-2 mb-8 flex-grow line-clamp-3">
                  {article.desc}
                </p>
                <Link
                  href={article.link}
                  className="text-fg-1 font-bold inline-flex items-center gap-1 group hover:text-signal-yellow hover:gap-2 transition-all"
                >
                  Read Article{" "}
                  <span className="group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 14. FAQ ─────────────────────────────────────────────────────── */}
      <section className="py-32 bg-bg-1">
        <Container>
          <h2 className="t-h2 text-center mb-16">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                q: "What does AJ Digital do?",
                a: "AJ Digital builds robust podcast systems, AI automation workflows, and content repurposing engines. We transform raw ideas into highly structured, scalable content pipelines.",
              },
              {
                q: "Who do you work with?",
                a: "We partner directly with entrepreneurs, coaches, B2B founders, and operator-led businesses who want to scale their authority through high-leverage content systems.",
              },
              {
                q: "Do you offer podcast production in Miami?",
                a: "Yes, we provide end-to-end podcast production services in Miami-Dade, Broward, and Palm Beach, offering both in-studio and on-site setups.",
              },
              {
                q: "Can you help implement AI systems?",
                a: "Absolutely. We design and implement custom AI workflows that automate marketing drudge work, bridging content generation mapping directly into your CRM or scheduling tools.",
              },
              {
                q: "What is a content system?",
                a: "A content system is infrastructure that turns a single pillar asset (like a podcast) into dozens of micro-assets (videos, carousels, articles) consistently and predictably without manual intervention.",
              },
              {
                q: "How do I get started?",
                a: "You can get started by filling out our short qualification application on the /apply page to book a strategy session. We'll map out the exact system needed for your growth.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="border-b border-border-subtle pb-8 last:border-0 last:pb-0"
              >
                <h3 className="t-h4 mb-3">
                  {faq.q}
                </h3>
                <p className="t-body text-fg-2">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 15. FINAL CTA ───────────────────────────────────────────────── */}
      <HomeCTA />
    </div>
  );
}
