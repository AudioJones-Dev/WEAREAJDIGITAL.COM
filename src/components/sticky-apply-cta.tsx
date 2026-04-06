import Link from "next/link";

export default function StickyApplyCta() {
  return (
    <>
      <div className="pointer-events-none fixed bottom-6 right-6 z-40 hidden lg:block">
        <div className="pointer-events-auto rounded-2xl border border-blue-500/30 bg-black/90 p-4 shadow-[0_0_30px_rgba(37,99,235,0.18)] backdrop-blur">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
            Limited client capacity
          </p>
          <p className="mt-2 max-w-[220px] text-sm leading-6 text-neutral-300">
            Built for serious operators ready to implement systems.
          </p>
          <Link
            href="/apply"
            data-cta-location="sticky"
            data-track="sticky-apply-cta-desktop"
            data-ga-event="apply_strategy_session_click"
            className="mt-3 inline-flex rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
          >
            Apply for a Strategy Session
          </Link>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-neutral-800 bg-black/95 px-4 py-3 backdrop-blur lg:hidden">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
              Built for serious operators
            </p>
            <p className="truncate text-sm text-neutral-300">
              Limited client capacity. Apply while openings are available.
            </p>
          </div>
          <Link
            href="/apply"
            data-cta-location="sticky"
            data-track="sticky-apply-cta-mobile"
            data-ga-event="apply_strategy_session_click"
            className="shrink-0 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
          >
            Apply
          </Link>
        </div>
      </div>
    </>
  );
}
