"use client";

import { trackEvent } from "@/lib/analytics";

type SchedulerFallbackProps = {
  bookingUrl: string | null;
};

export default function SchedulerFallback({
  bookingUrl,
}: SchedulerFallbackProps) {
  const handleBookingClick = () => {
    trackEvent("schedule_click", {
      page: "/apply/success",
      location: "scheduler",
    });
    trackEvent("cta_click", {
      page: "/apply/success",
      location: "scheduler",
      label: "Apply for a Strategy Session",
    });
  };

  return (
    <div className="rounded-2xl border border-neutral-800 bg-black p-6">
      <h3 className="text-lg font-bold text-white">
        Having trouble with the scheduler?
      </h3>
      {bookingUrl ? (
        <>
          <p className="mt-3 text-sm leading-7 text-neutral-400">
            If the embedded scheduler does not load correctly on your device,
            open the booking page directly in a new tab.
          </p>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
            onClick={handleBookingClick}
            data-cta-location="scheduler"
            data-track="scheduler-fallback-cta"
            data-ga-event="scheduler_fallback_click"
            className="mt-5 inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-blue-500"
          >
            Open Booking Page
          </a>
        </>
      ) : (
        <p className="mt-3 text-sm leading-7 text-neutral-400">
          Email dev@audiojones.com and we&apos;ll help you schedule directly.
        </p>
      )}
    </div>
  );
}
