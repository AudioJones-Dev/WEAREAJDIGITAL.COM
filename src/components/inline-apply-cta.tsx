import Link from "next/link";

type InlineApplyCtaProps = {
  eyebrow?: string;
  headline: string;
  copy: string;
  ctaLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  trackingId?: string;
};

export default function InlineApplyCta({
  eyebrow = "Next step",
  headline,
  copy,
  ctaLabel = "Apply for a Strategy Session",
  secondaryHref = "/case-studies/podcast-authority-system",
  secondaryLabel = "See the system in action",
  trackingId = "inline-apply-cta",
}: InlineApplyCtaProps) {
  return (
    <div className="my-14 rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-950/30 to-neutral-950 p-8 not-prose">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold text-white">{headline}</h2>
      <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-300">
        {copy}
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/apply"
          data-cta-location="mid-content"
          data-track={trackingId}
          data-ga-event="apply_strategy_session_click"
          className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-500"
        >
          {ctaLabel}
        </Link>
        <Link
          href={secondaryHref}
          className="inline-flex items-center justify-center rounded-xl border border-neutral-700 px-6 py-3 font-semibold text-white transition-colors hover:border-neutral-500 hover:bg-black"
        >
          {secondaryLabel}
        </Link>
      </div>
      <div className="mt-5 flex flex-wrap gap-4 text-sm text-neutral-500">
        <span>30+ assets from one recording</span>
        <span>Systems, not one-off deliverables</span>
        <span>Built for serious operators</span>
      </div>
    </div>
  );
}
