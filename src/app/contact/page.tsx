import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | AJ Digital",
  description:
    "Contact AJ Digital for general questions, partnerships, media requests, or lighter-touch outreach.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-bg-0 text-fg-1">
      <section className="aj-bg-signal-control-room border-b border-border-subtle px-6 pb-16 pt-28 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="t-label mb-4">Contact</p>
          <h1 className="t-h1">
            General inquiries and lighter-touch outreach
          </h1>
          <p className="t-lead mx-auto mt-6 max-w-2xl text-fg-2">
            Use this page for general questions, partnerships, media requests,
            or conversations that are not yet a fit for the strategy-session
            application funnel.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-12 lg:px-24">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          <div className="aj-card p-8">
            <p className="t-label">
              Best for
            </p>
            <div className="mt-5 space-y-4 t-body text-fg-2">
              <p>General questions about AJ Digital</p>
              <p>Partnership or collaboration outreach</p>
              <p>Media, podcast guesting, or speaking requests</p>
              <p>Early-stage conversations not ready for implementation</p>
            </div>
          </div>

          <div className="aj-card is-surface-2 p-8">
            <p className="t-label">
              Contact path
            </p>
            <h2 className="t-h3 mt-4">
              Reach AJ Digital directly
            </h2>
            <p className="mt-4 t-small text-fg-2">
              Email <span className="font-semibold text-fg-0">dev@audiojones.com</span>{" "}
              and include enough context so the request can be routed quickly.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href="mailto:dev@audiojones.com" className="aj-btn-signal">
                Email AJ Digital
              </a>
              <Link href="/apply" className="aj-btn-intel">
                Apply for a Strategy Session
              </Link>
            </div>
          </div>
        </div>

        <div className="aj-card mx-auto mt-10 max-w-4xl p-8 text-center">
          <h2 className="t-h3">
            Need more context before reaching out?
          </h2>
          <p className="t-body-lg mx-auto mt-4 max-w-2xl text-fg-2">
            Review the blog, case studies, and service pages to understand how
            AJ Digital approaches podcast production, Marketing Operations, and
            content systems.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
            <Link href="/blog" className="aj-btn-intel">
              Explore the Blog
            </Link>
            <Link href="/case-studies" className="aj-btn-intel">
              Review Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
