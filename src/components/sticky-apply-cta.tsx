import Link from "next/link";

export default function StickyApplyCta() {
  return (
    <>
      <div className="pointer-events-none fixed bottom-6 right-6 z-40 hidden lg:block">
        <div className="aj-card pointer-events-auto p-4 backdrop-blur">
          <p className="t-label">
            Limited client capacity
          </p>
          <p className="mt-2 max-w-[220px] text-sm leading-6 text-text-primary">
            Built for serious operators ready to implement systems.
          </p>
          <Link
            href="/apply"
            data-cta-location="sticky"
            data-track="sticky-apply-cta-desktop"
            data-ga-event="apply_strategy_session_click"
            className="aj-btn-signal mt-3 text-sm"
          >
            Apply for a Strategy Session
          </Link>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border-subtle bg-bg-base/95 px-4 py-3 backdrop-blur lg:hidden">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="t-label">
              Built for serious operators
            </p>
            <p className="truncate text-sm text-text-primary">
              Limited client capacity. Apply while openings are available.
            </p>
          </div>
          <Link
            href="/apply"
            data-cta-location="sticky"
            data-track="sticky-apply-cta-mobile"
            data-ga-event="apply_strategy_session_click"
            className="aj-btn-signal shrink-0 text-sm"
          >
            Apply
          </Link>
        </div>
      </div>
    </>
  );
}
