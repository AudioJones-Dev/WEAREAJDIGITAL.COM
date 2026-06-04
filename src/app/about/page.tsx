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
    "Learn how AJ Digital builds podcast production, Marketing Operations, and content systems for serious operators.",
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
          "AJ Digital builds authority systems through podcast production, Marketing Operations, and content systems.",
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
      title: "Marketing Operations",
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
    <div className="min-h-screen bg-bg-0 text-fg-1">
      <JsonLd data={jsonLd} />

      <section className="aj-bg-signal-control-room border-b border-border-subtle px-6 pb-16 pt-28 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <p className="t-label mb-4">
            <span className="aj-signal-line" aria-hidden="true" />
            About AJ Digital
          </p>
          <h1 className="t-h1 max-w-4xl">
            We build authority systems for businesses that want leverage, not
            more noise.
          </h1>
          <p className="t-lead mt-6 max-w-3xl text-fg-2">
            AJ Digital operates at the intersection of podcast production, AI
            implementation, and content operations. The goal is simple: create
            infrastructure that turns expertise into consistent demand.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-12 lg:px-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="aj-card p-8">
            <h2 className="t-h3">
              Why the agency exists
            </h2>
            <div className="mt-6 space-y-5 t-body text-fg-2">
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

          <div className="aj-card p-8">
            <h2 className="t-h3">
              Operating principles
            </h2>
            <ul className="mt-6 space-y-4 t-body text-fg-2">
              {principles.map((principle) => (
                <li key={principle} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-signal-yellow" />
                  <span>{principle}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-border-subtle bg-bg-1 px-6 py-16 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="t-h2">
            What we build
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="aj-card-signal"
              >
                <div className="aj-card-inner">
                  <h3 className="t-h4">
                    {service.title}
                  </h3>
                  <p className="mt-3 t-small text-fg-2">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-12 lg:px-24">
        <div className="aj-card mx-auto max-w-4xl border-[color:var(--line-signal)] p-10 text-center">
          <h2 className="t-h2">
            Ready to build the system behind your content?
          </h2>
          <p className="t-body-lg mx-auto mt-4 max-w-2xl text-fg-2">
            Start with a strategy session. We will map the highest-leverage
            path across podcast production, Marketing Operations, or content systems.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:items-center">
            <Link href="/apply" className="aj-btn-signal">
              Apply for a Strategy Session
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
