import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-neutral-900 bg-black pb-10 pt-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="mb-6 inline-block text-2xl font-black tracking-tighter text-white transition-colors hover:text-neutral-300"
            >
              AJ<span className="text-blue-500">DIGITAL</span>
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-neutral-400">
              Podcast, AI, and content systems for authority-driven businesses.
            </p>
            <p className="mb-6 text-xs font-bold uppercase tracking-widest text-neutral-500">
              Serving Miami and South Florida
            </p>
            <Link
              href="/apply"
              data-track="footer-apply-cta"
              data-ga-event="apply_strategy_session_click"
              className="inline-block rounded-lg border border-blue-600/50 px-4 py-2 text-sm font-bold text-blue-400 transition-colors hover:border-blue-500 hover:bg-blue-600/10"
            >
              Apply for a Strategy Session
            </Link>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-bold text-white">Services</h4>
            <ul className="flex flex-col gap-4 text-sm font-semibold text-neutral-400">
              <li>
                <Link
                  href="/services/podcast-production/"
                  className="transition-colors hover:text-blue-400"
                >
                  Podcast Production
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ai-consulting/"
                  className="transition-colors hover:text-blue-400"
                >
                  AI Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/services/content-systems/"
                  className="transition-colors hover:text-blue-400"
                >
                  Content Systems
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies/"
                  className="mt-2 inline-block text-neutral-500 transition-colors hover:text-blue-400"
                >
                  View Client Results {"->"}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-bold text-white">Resources</h4>
            <ul className="flex flex-col gap-4 text-sm font-semibold text-neutral-400">
              <li>
                <Link
                  href="/blog/podcast-production-guide/"
                  className="transition-colors hover:text-blue-400"
                >
                  Podcast Production Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/content-repurposing-guide/"
                  className="transition-colors hover:text-blue-400"
                >
                  Content Repurposing Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/ai-content-automation-guide/"
                  className="transition-colors hover:text-blue-400"
                >
                  AI Automation Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies/podcast-authority-system/"
                  className="transition-colors hover:text-blue-400"
                >
                  Featured Case Study
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-bold text-white">Local Delivery</h4>
            <ul className="flex flex-col gap-4 text-sm font-semibold text-neutral-400">
              <li>
                <Link
                  href="/podcast-production-miami"
                  className="transition-colors hover:text-blue-400"
                >
                  Podcast Production Miami
                </Link>
              </li>
              <li>
                <Link
                  href="/ai-consulting-miami"
                  className="transition-colors hover:text-blue-400"
                >
                  AI Consulting Miami
                </Link>
              </li>
              <li>
                <Link
                  href="/content-systems-miami"
                  className="transition-colors hover:text-blue-400"
                >
                  Content Systems Miami
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-bold text-white">Company</h4>
            <ul className="flex flex-col gap-4 text-sm font-semibold text-neutral-400">
              <li>
                <Link href="/about" className="transition-colors hover:text-blue-400">
                  About AJ Digital
                </Link>
              </li>
              <li>
                <Link href="/apply" className="transition-colors hover:text-blue-400">
                  Apply for a Strategy Session
                </Link>
              </li>
              <li>
                <Link href="/blog" className="transition-colors hover:text-blue-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="transition-colors hover:text-blue-400"
                >
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-neutral-900 pt-8 md:flex-row">
          <p className="text-center text-sm font-medium text-neutral-500 md:text-left">
            Copyright {new Date().getFullYear()} AJ Digital. Serving Miami-Dade,
            Broward, and Palm Beach.
          </p>
          <div className="flex items-center gap-6 text-neutral-500">
            <span className="text-sm">Built for continuous growth.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
