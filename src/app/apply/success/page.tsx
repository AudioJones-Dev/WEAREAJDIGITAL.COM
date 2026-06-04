import { Metadata } from "next";
import Link from "next/link";
import CalendlyEmbed from "@/components/calendly-embed";
import SchedulerFallback from "@/components/scheduler-fallback";
import { getPublicCalendlyUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Application Received | AJ Digital",
  description:
    "Your application has been received. Use the booking handoff page to schedule your AJ Digital strategy session.",
  robots: "noindex, nofollow",
};

export default function ApplySuccessPage() {
  const bookingUrl = getPublicCalendlyUrl();

  return (
    <div className="min-h-screen bg-bg-0 text-fg-1 selection:bg-signal-yellow/30">
      <section className="aj-bg-signal-control-room px-6 pb-16 pt-32 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-accent-green bg-accent-green/10 shadow-[0_0_30px_rgba(61,255,176,0.3)]">
              <svg
                className="h-10 w-10 text-accent-green"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h1 className="t-h1 mb-4">
              Application Received
            </h1>
            <p className="t-mono mb-6 text-xl uppercase text-signal-yellow md:text-2xl">
              Next step: book your strategy session.
            </p>
            <p className="t-lead mx-auto max-w-2xl text-fg-2">
              We&apos;ve got your application. Use the scheduler below to lock
              in the next conversation.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <div className="aj-card p-8">
                <div
                  data-track="scheduler-section"
                  data-ga-event="scheduler_section_reached"
                >
                  <p className="t-label">
                    Booking handoff
                  </p>
                  <h2 className="t-h3 mt-4">
                    Book Your Strategy Session
                  </h2>
                  <p className="mt-3 max-w-2xl t-small text-fg-2">
                    Choose a time that works and we&apos;ll use the session to
                    review fit, workflow priorities, and the right system path
                    for your business.
                  </p>
                </div>

                <div className="mt-6">
                  {bookingUrl ? (
                    <CalendlyEmbed url={bookingUrl} />
                  ) : (
                    <div className="rounded-md border border-dashed border-border-strong bg-bg-0 p-8">
                      <p className="t-mono uppercase text-fg-3">
                        Scheduler unavailable
                      </p>
                      <p className="mt-4 t-small text-fg-2">
                        The booking embed is not configured in this environment.
                        Use the support fallback below to schedule directly.
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-6">
                  <SchedulerFallback bookingUrl={bookingUrl} />
                </div>
              </div>

              <div className="aj-card is-surface-2 p-8">
                <h2 className="t-h3">What happens next?</h2>
                <div className="mt-5 space-y-4 t-body text-fg-2">
                  <p>1. You book your session.</p>
                  <p>2. We review your application context.</p>
                  <p>3. We use the call to map the right system for your business.</p>
                </div>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="aj-card p-8">
                <p className="t-label">
                  Expectations
                </p>
                <div className="mt-5 space-y-4 t-small text-fg-2">
                  <p className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-signal-yellow" />
                    <span>We review applications within 24-48 hours.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-signal-yellow" />
                    <span>Strategy sessions are focused on fit, workflow, and next steps.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-signal-yellow" />
                    <span>You&apos;ll receive confirmation by email after booking.</span>
                  </p>
                </div>
              </div>

              <div className="aj-card is-surface-2 border-[color:var(--line-signal)] p-8">
                <p className="t-label">
                  Trust layer
                </p>
                <h3 className="t-h4 mt-4">
                  Systems, not one-off deliverables
                </h3>
                <p className="mt-4 t-small text-fg-2">
                  AJ Digital is built for businesses that want practical
                  implementation, stronger workflows, and assets that compound.
                </p>
                <Link
                  href="/case-studies/"
                  className="t-mono mt-5 inline-flex font-medium text-fg-1 transition-colors hover:text-signal-yellow"
                >
                  Review case studies {"->"}
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
