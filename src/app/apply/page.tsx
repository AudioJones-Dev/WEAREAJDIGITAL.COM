import { Metadata } from "next";
import Link from "next/link";
import ApplyForm from "./ApplyForm";

export const metadata: Metadata = {
  title: "Apply to Work With AJ Digital",
  description:
    "Apply to work with AJ Digital for podcast production, AI consulting, and content systems. Built for serious operators and growth-focused brands.",
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
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative bg-gradient-to-br from-neutral-900 to-black px-6 pb-16 pt-24 sm:px-12 lg:px-24">
        <div className="absolute inset-0 bg-blue-500/5 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Apply Funnel
          </p>
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Apply for a Strategy Session
          </h1>
          <p className="mx-auto mb-6 max-w-2xl text-xl leading-relaxed text-neutral-300">
            We build podcast, AI, and content systems for serious operators.
            This short application helps us qualify fit fast and route you to
            the right next step.
          </p>
          <p className="mx-auto mb-4 max-w-2xl text-sm font-medium uppercase tracking-[0.16em] text-neutral-400">
            Used by founders, creators, and operators building authority systems
          </p>
          <p className="mx-auto mb-10 max-w-3xl rounded-2xl border border-neutral-800 bg-neutral-950/80 px-5 py-4 text-base font-medium text-neutral-200">
            This is for businesses ready to implement systems, not one-off
            content help.
          </p>
          <div className="mb-10 flex flex-col items-center justify-center gap-4 text-sm font-medium text-neutral-400 sm:flex-row sm:flex-wrap">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              Takes ~2 minutes
            </span>
            <span className="hidden text-neutral-700 sm:inline">/</span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              We&apos;ll never share your info
            </span>
            <span className="hidden text-neutral-700 sm:inline">/</span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              Built for operators, not hobby projects
            </span>
          </div>
          <a
            href="#application-form"
            data-track="apply-scroll-start"
            data-ga-event="apply_scroll_to_form_click"
            className="inline-flex items-center justify-center rounded-lg border border-neutral-700 bg-neutral-900 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:border-blue-500 hover:bg-black"
          >
            Start application
          </a>
        </div>
      </section>

      <section className="bg-black px-6 py-16 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div id="application-form">
              <ApplyForm />
            </div>

            <aside className="space-y-6">
              <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                  Why apply
                </p>
                <h2 className="mt-4 text-2xl font-bold text-white">
                  Built for qualified growth conversations
                </h2>
                <div className="mt-6 space-y-4 text-neutral-300">
                  <p className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
                    <span>Systems, not fluff.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
                    <span>Built for operators who want leverage, not random deliverables.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
                    <span>Practical implementation across podcast, AI, and content workflows.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
                    <span>Limited client capacity so qualified applications move faster.</span>
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-950/20 to-neutral-950 p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                  Proof snippet
                </p>
                <h3 className="mt-4 text-2xl font-bold text-white">
                  30+ content assets from one episode
                </h3>
                <p className="mt-4 text-neutral-300">
                  AJ Digital helped turn one recurring podcast session into a
                  repeatable content engine with faster production, stronger
                  authority, and more usable assets.
                </p>
                <Link
                  href="/case-studies/podcast-authority-system/"
                  className="mt-6 inline-flex font-semibold text-blue-400 transition-colors hover:text-blue-300"
                >
                  Review the case study {"->"}
                </Link>
              </div>

              <div className="rounded-3xl border border-neutral-800 bg-black p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
                  Fit check
                </p>
                <div className="mt-4 space-y-4 text-sm leading-7 text-neutral-400">
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

      <section className="border-t border-neutral-900 bg-gradient-to-t from-neutral-900 to-black px-6 py-20 text-center sm:px-12">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-6 text-2xl font-bold text-white">
            Build an engine, not just a content calendar.
          </h2>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold text-neutral-500">
            <Link href="/services/podcast-production" className="transition-colors hover:text-blue-400">
              Podcast Production
            </Link>
            <span>/</span>
            <Link href="/services/content-systems" className="transition-colors hover:text-blue-400">
              Content Systems
            </Link>
            <span>/</span>
            <Link href="/services/ai-consulting" className="transition-colors hover:text-blue-400">
              AI Workflows
            </Link>
            <span>/</span>
            <Link href="/case-studies" className="transition-colors hover:text-blue-400">
              Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
