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
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <section className="bg-gradient-to-br from-neutral-900 to-black px-6 pb-16 pt-32 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-blue-500 bg-blue-600/20 shadow-[0_0_30px_rgba(37,99,235,0.3)]">
              <svg
                className="h-10 w-10 text-blue-400"
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

            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Application Received
            </h1>
            <p className="mb-6 text-xl font-semibold text-blue-400 md:text-2xl">
              Next step: book your strategy session.
            </p>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-neutral-400">
              We&apos;ve got your application. Use the scheduler below to lock
              in the next conversation.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
                <div
                  data-track="scheduler-section"
                  data-ga-event="scheduler_section_reached"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                    Booking handoff
                  </p>
                  <h2 className="mt-4 text-2xl font-bold text-white">
                    Book Your Strategy Session
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-400">
                    Choose a time that works and we&apos;ll use the session to
                    review fit, workflow priorities, and the right system path
                    for your business.
                  </p>
                </div>

                <div className="mt-6">
                  {bookingUrl ? (
                    <CalendlyEmbed url={bookingUrl} />
                  ) : (
                    <div className="rounded-2xl border border-dashed border-neutral-700 bg-black p-8">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
                        Scheduler unavailable
                      </p>
                      <p className="mt-4 text-sm leading-7 text-neutral-400">
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

              <div className="rounded-3xl border border-neutral-800 bg-black p-8">
                <h2 className="text-2xl font-bold text-white">What happens next?</h2>
                <div className="mt-5 space-y-4 text-neutral-300">
                  <p>1. You book your session.</p>
                  <p>2. We review your application context.</p>
                  <p>3. We use the call to map the right system for your business.</p>
                </div>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                  Expectations
                </p>
                <div className="mt-5 space-y-4 text-sm leading-7 text-neutral-300">
                  <p className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
                    <span>We review applications within 24-48 hours.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
                    <span>Strategy sessions are focused on fit, workflow, and next steps.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
                    <span>You&apos;ll receive confirmation by email after booking.</span>
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-950/20 to-neutral-950 p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                  Trust layer
                </p>
                <h3 className="mt-4 text-xl font-bold text-white">
                  Systems, not one-off deliverables
                </h3>
                <p className="mt-4 text-sm leading-7 text-neutral-300">
                  AJ Digital is built for businesses that want practical
                  implementation, stronger workflows, and assets that compound.
                </p>
                <Link
                  href="/case-studies/"
                  className="mt-5 inline-flex font-semibold text-blue-400 transition-colors hover:text-blue-300"
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
