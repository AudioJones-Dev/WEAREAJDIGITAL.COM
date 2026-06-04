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
    <div className="aj-card my-14 p-8 not-prose">
      <p className="t-label">
        {eyebrow}
      </p>
      <h2 className="t-h3 mt-3">{headline}</h2>
      <p className="mt-4 max-w-2xl text-base leading-7 text-text-primary">
        {copy}
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/apply"
          data-cta-location="mid-content"
          data-track={trackingId}
          data-ga-event="apply_strategy_session_click"
          className="aj-btn-signal"
        >
          {ctaLabel}
        </Link>
        <Link
          href={secondaryHref}
          className="aj-btn-intel"
        >
          {secondaryLabel}
        </Link>
      </div>
      <div className="mt-5 flex flex-wrap gap-4 text-sm text-text-muted">
        <span>30+ assets from one recording</span>
        <span>Systems, not one-off deliverables</span>
        <span>Built for serious operators</span>
      </div>
    </div>
  );
}
