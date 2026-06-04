import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border-subtle bg-bg-base pb-10 pt-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="aj-wordmark mb-6 inline-block text-2xl transition-colors hover:text-signal-yellow"
            >
              AJ<span className="aj-wordmark--accent">DIGITAL</span>
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-fg-2">
              Podcast, AI, and content systems for authority-driven businesses.
            </p>
            <p className="t-label mb-6">
              Serving Miami and South Florida
            </p>
            <Link
              href="/apply"
              data-track="footer-apply-cta"
              data-ga-event="apply_strategy_session_click"
              className="aj-btn-intel"
            >
              Apply for a Strategy Session
            </Link>
          </div>

          <div>
            <h4 className="t-h4 mb-6 text-lg">Services</h4>
            <ul className="flex flex-col gap-4 text-sm font-semibold text-fg-2">
              <li>
                <Link
                  href="/services/podcast-production/"
                  className="transition-colors hover:text-signal-yellow"
                >
                  Podcast Production
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ai-consulting/"
                  className="transition-colors hover:text-signal-yellow"
                >
                  Marketing Operations
                </Link>
              </li>
              <li>
                <Link
                  href="/services/content-systems/"
                  className="transition-colors hover:text-signal-yellow"
                >
                  Content Systems
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies/"
                  className="mt-2 inline-block text-text-muted transition-colors hover:text-signal-yellow"
                >
                  View Client Results {"->"}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="t-h4 mb-6 text-lg">Resources</h4>
            <ul className="flex flex-col gap-4 text-sm font-semibold text-fg-2">
              <li>
                <Link
                  href="/blog/podcast-production-guide/"
                  className="transition-colors hover:text-signal-yellow"
                >
                  Podcast Production Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/content-repurposing-guide/"
                  className="transition-colors hover:text-signal-yellow"
                >
                  Content Repurposing Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/ai-content-automation-guide/"
                  className="transition-colors hover:text-signal-yellow"
                >
                  AI Automation Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies/podcast-authority-system/"
                  className="transition-colors hover:text-signal-yellow"
                >
                  Featured Case Study
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="t-h4 mb-6 text-lg">Local Delivery</h4>
            <ul className="flex flex-col gap-4 text-sm font-semibold text-fg-2">
              <li>
                <Link
                  href="/podcast-production-miami"
                  className="transition-colors hover:text-signal-yellow"
                >
                  Podcast Production Miami
                </Link>
              </li>
              <li>
                <Link
                  href="/ai-consulting-miami"
                  className="transition-colors hover:text-signal-yellow"
                >
                  Marketing Operations Miami
                </Link>
              </li>
              <li>
                <Link
                  href="/content-systems-miami"
                  className="transition-colors hover:text-signal-yellow"
                >
                  Content Systems Miami
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="t-h4 mb-6 text-lg">Company</h4>
            <ul className="flex flex-col gap-4 text-sm font-semibold text-fg-2">
              <li>
                <Link href="/about" className="transition-colors hover:text-signal-yellow">
                  About AJ Digital
                </Link>
              </li>
              <li>
                <Link href="/apply" className="transition-colors hover:text-signal-yellow">
                  Apply for a Strategy Session
                </Link>
              </li>
              <li>
                <Link href="/blog" className="transition-colors hover:text-signal-yellow">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="transition-colors hover:text-signal-yellow"
                >
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border-subtle pt-8 md:flex-row">
          <p className="text-center text-sm font-medium text-text-muted md:text-left">
            Copyright {new Date().getFullYear()} AJ Digital. Serving Miami-Dade,
            Broward, and Palm Beach.
          </p>
          <div className="flex items-center gap-6 text-text-muted">
            <span className="text-sm">Built for continuous growth.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
