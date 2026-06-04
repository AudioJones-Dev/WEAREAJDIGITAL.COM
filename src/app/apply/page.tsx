import { Metadata } from "next";
import Link from "next/link";
import ApplyForm from "./ApplyForm";

export const metadata: Metadata = {
  title: "Apply to Work With AJ Digital",
  description:
    "Apply to work with AJ Digital for podcast production, Marketing Operations, and content systems. Built for serious operators and growth-focused brands.",
};

export default function ApplyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://weareajdigital.com/apply",
        url: "https://weareajdigital.com/apply",
        name: "Apply to Work With AJ Digital",
        description:
          "Complete our qualification application for podcast production and AI systems.",
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://weareajdigital.com/#website",
          name: "AJ Digital",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://weareajdigital.com/#organization",
        name: "AJ Digital",
        url: "https://weareajdigital.com",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://weareajdigital.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Apply",
            item: "https://weareajdigital.com/apply",
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-bg-0 text-fg-1 selection:bg-signal-yellow/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative aj-bg-signal-control-room px-6 pb-16 pt-24 sm:px-12 lg:px-24">
        <div className="absolute inset-0 bg-glow-signal [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="t-label mb-4">
            Apply Funnel
          </p>
          <h1 className="t-h1 mb-6">
            Apply for a Strategy Session
          </h1>
          <p className="t-lead mx-auto mb-6 max-w-2xl text-fg-2">
            We build podcast, AI, and content systems for serious operators.
            This short application helps us qualify fit fast and route you to
            the right next step.
          </p>
          <p className="t-mono mx-auto mb-4 max-w-2xl uppercase text-fg-3">
            Used by founders, creators, and operators building authority systems
          </p>
          <div className="mx-auto mb-10 max-w-3xl">
            <p className="aj-callout t-body text-fg-1">
              This is for businesses ready to implement systems, not one-off
              content help.
            </p>
          </div>
          <div className="mb-10 flex flex-col items-center justify-center gap-4 t-small text-fg-2 sm:flex-row sm:flex-wrap">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-signal-yellow" />
              Takes ~2 minutes
            </span>
            <span className="hidden text-fg-3 sm:inline">/</span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-signal-yellow" />
              We&apos;ll never share your info
            </span>
            <span className="hidden text-fg-3 sm:inline">/</span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-signal-yellow" />
              Built for operators, not hobby projects
            </span>
          </div>
          <a
            href="#application-form"
            data-track="apply-scroll-start"
            data-ga-event="apply_scroll_to_form_click"
            className="aj-btn-intel uppercase"
          >
            Start application
          </a>
        </div>
      </section>

      <section className="bg-bg-0 px-6 py-16 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div id="application-form">
              <ApplyForm />
            </div>

            <aside className="space-y-6">
              <div className="aj-card p-8">
                <p className="t-label">
                  Why apply
                </p>
                <h2 className="t-h3 mt-4">
                  Built for qualified growth conversations
                </h2>
                <div className="mt-6 space-y-4 t-body text-fg-2">
                  <p className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-signal-yellow" />
                    <span>Systems, not fluff.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-signal-yellow" />
                    <span>Built for operators who want leverage, not random deliverables.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-signal-yellow" />
                    <span>Practical implementation across podcast, AI, and content workflows.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-signal-yellow" />
                    <span>Limited client capacity so qualified applications move faster.</span>
                  </p>
                </div>
              </div>

              <div className="aj-card is-surface-2 border-[color:var(--line-signal)] p-8">
                <p className="t-label">
                  Proof snippet
                </p>
                <h3 className="t-h3 mt-4">
                  30+ content assets from one episode
                </h3>
                <p className="mt-4 t-body text-fg-2">
                  AJ Digital helped turn one recurring podcast session into a
                  repeatable content engine with faster production, stronger
                  authority, and more usable assets.
                </p>
                <Link
                  href="/case-studies/podcast-authority-system/"
                  className="t-mono mt-6 inline-flex font-medium text-fg-1 transition-colors hover:text-signal-yellow"
                >
                  Review the case study {"->"}
                </Link>
              </div>

              <div className="aj-card is-surface-2 p-8">
                <p className="t-mono uppercase text-fg-3">
                  Fit check
                </p>
                <div className="mt-4 space-y-4 t-small text-fg-2">
                  <p>
                    Best fit for businesses that want authority, workflow
                    leverage, and better operational systems.
                  </p>
                  <p>
                    Not built for one-off editing help, disconnected content
                    tasks, or lowest-cost vendor shopping.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-t border-border-subtle bg-bg-1 px-6 py-20 text-center sm:px-12">
        <div className="mx-auto max-w-2xl">
          <h2 className="t-h3 mb-6">
            Build an engine, not just a content calendar.
          </h2>
          <div className="flex flex-wrap justify-center gap-4 t-mono uppercase text-fg-3">
            <Link href="/services/podcast-production" className="transition-colors hover:text-signal-yellow">
              Podcast Production
            </Link>
            <span>/</span>
            <Link href="/services/content-systems" className="transition-colors hover:text-signal-yellow">
              Content Systems
            </Link>
            <span>/</span>
            <Link href="/services/ai-consulting" className="transition-colors hover:text-signal-yellow">
              AI Workflows
            </Link>
            <span>/</span>
            <Link href="/case-studies" className="transition-colors hover:text-signal-yellow">
              Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
