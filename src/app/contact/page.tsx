import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | AJ Digital",
  description:
    "Contact AJ Digital for general questions, partnerships, media requests, or lighter-touch outreach.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="border-b border-neutral-900 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.22),_transparent_45%),linear-gradient(180deg,#05070a_0%,#000_100%)] px-6 pb-16 pt-28 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Contact
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            General inquiries and lighter-touch outreach
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
            Use this page for general questions, partnerships, media requests,
            or conversations that are not yet a fit for the strategy-session
            application funnel.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-12 lg:px-24">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Best for
            </p>
            <div className="mt-5 space-y-4 text-neutral-300">
              <p>General questions about AJ Digital</p>
              <p>Partnership or collaboration outreach</p>
              <p>Media, podcast guesting, or speaking requests</p>
              <p>Early-stage conversations not ready for implementation</p>
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-black p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Contact path
            </p>
            <h2 className="mt-4 text-2xl font-bold text-white">
              Reach AJ Digital directly
            </h2>
            <p className="mt-4 text-sm leading-7 text-neutral-400">
              Email <span className="font-semibold text-white">dev@audiojones.com</span>{" "}
              and include enough context so the request can be routed quickly.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:dev@audiojones.com"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-500"
              >
                Email AJ Digital
              </a>
              <Link
                href="/apply"
                className="inline-flex items-center justify-center rounded-xl border border-neutral-700 px-6 py-3 font-semibold text-white transition-colors hover:border-neutral-500 hover:bg-neutral-900"
              >
                Apply for a Strategy Session
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-neutral-800 bg-neutral-950 p-8 text-center">
          <h2 className="text-2xl font-bold text-white">
            Need more context before reaching out?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-300">
            Review the blog, case studies, and service pages to understand how
            AJ Digital approaches podcast production, AI consulting, and
            content systems.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-xl border border-neutral-700 px-6 py-3 font-semibold text-white transition-colors hover:border-neutral-500 hover:bg-black"
            >
              Explore the Blog
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center rounded-xl border border-neutral-700 px-6 py-3 font-semibold text-white transition-colors hover:border-neutral-500 hover:bg-black"
            >
              Review Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
