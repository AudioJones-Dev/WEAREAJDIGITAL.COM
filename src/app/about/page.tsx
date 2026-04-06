import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/json-ld";
import {
  buildBreadcrumbJsonLd,
  buildOrganizationJsonLd,
  siteUrl,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how AJ Digital builds podcast production, AI consulting, and content systems for serious operators.",
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${siteUrl}/about/#webpage`,
        url: `${siteUrl}/about`,
        name: "About AJ Digital",
        description:
          "AJ Digital builds authority systems through podcast production, AI consulting, and content operations.",
      },
      buildOrganizationJsonLd(),
      buildBreadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
      ]),
    ],
  };

  const principles = [
    "Systems beat scattered output.",
    "Authority compounds when content is structured.",
    "AI should remove friction, not create more noise.",
    "Execution matters more than trend chasing.",
  ];

  const services = [
    {
      title: "Podcast Production",
      href: "/services/podcast-production",
      description:
        "Build a flagship show that becomes the source asset for your authority engine.",
    },
    {
      title: "AI Consulting",
      href: "/services/ai-consulting",
      description:
        "Install practical workflows that reclaim time and improve operational throughput.",
    },
    {
      title: "Content Systems",
      href: "/services/content-systems",
      description:
        "Turn one recording into structured articles, clips, emails, and social assets.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <JsonLd data={jsonLd} />

      <section className="border-b border-neutral-900 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.22),_transparent_45%),linear-gradient(180deg,#05070a_0%,#000_100%)] px-6 pb-16 pt-28 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            About AJ Digital
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">
            We build authority systems for businesses that want leverage, not
            more noise.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300 md:text-xl">
            AJ Digital operates at the intersection of podcast production, AI
            implementation, and content operations. The goal is simple: create
            infrastructure that turns expertise into consistent demand.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-12 lg:px-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-neutral-900 bg-neutral-950 p-8">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">
              Why the agency exists
            </h2>
            <div className="mt-6 space-y-5 text-neutral-300">
              <p>
                Most operators do not need more disconnected deliverables. They
                need a repeatable way to extract expertise, distribute it
                across channels, and route attention back into revenue.
              </p>
              <p>
                AJ Digital was built to solve that problem with tighter
                systems, stronger positioning, and practical automation. The
                work starts with strategy, but it does not stop there. We
                implement the engine.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-900 bg-neutral-950 p-8">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">
              Operating principles
            </h2>
            <ul className="mt-6 space-y-4 text-neutral-300">
              {principles.map((principle) => (
                <li key={principle} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
                  <span>{principle}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-900 bg-neutral-950 px-6 py-16 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            What we build
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="rounded-3xl border border-neutral-800 bg-black p-6 transition-colors hover:border-blue-500/50"
              >
                <h3 className="text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-neutral-400">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-950/40 to-neutral-950 p-10 text-center">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Ready to build the system behind your content?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-300">
            Start with a strategy session. We will map the highest-leverage
            path across podcast production, AI consulting, or content systems.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-500"
            >
              Apply for a Strategy Session
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center rounded-xl border border-neutral-700 px-6 py-3 font-semibold text-white transition-colors hover:border-neutral-500 hover:bg-neutral-900"
            >
              Review Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
