import Link from "next/link";
import type { Metadata } from "next";

const services = [
  {
    title: "Podcast Production",
    description:
      "Studio-quality production systems built to turn long-form conversations into authority and demand.",
    href: "/services/podcast-production",
  },
  {
    title: "Marketing Operations",
    description:
      "An AI-powered content engine that turns your podcast into repurposed assets, distribution, and authority that drives growth.",
    href: "/services/ai-consulting",
  },
  {
    title: "Content Systems",
    description:
      "Operational content infrastructure that turns one recording into a repeatable multi-channel publishing engine.",
    href: "/services/content-systems",
  },
] as const;

export const metadata: Metadata = {
  title: "Services | AJ Digital",
  description:
    "Explore AJ Digital services across podcast production, marketing operations, and content systems.",
};

export default function ServicesPage() {
  return (
    <div className="bg-bg-0 text-fg-1">
      <section className="px-6 py-28 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <span className="t-label mb-5 inline-block">
              Services
            </span>
            <h1 className="t-h1 mb-6">
              Systems built for production, distribution, and growth.
            </h1>
            <p className="t-lead text-fg-2">
              We do not sell disconnected deliverables. We build the production,
              marketing, and content systems that make your expertise easier to
              publish, repurpose, and turn into pipeline.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.href}
                className="aj-card"
              >
                <h2 className="t-h4 mb-4">
                  {service.title}
                </h2>
                <p className="t-body mb-8 text-fg-2">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center font-semibold text-fg-1 transition-colors hover:text-signal-yellow"
                >
                  Explore service →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
