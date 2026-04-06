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
    title: "AI Consulting",
    description:
      "Practical AI workflow design that removes manual bottlenecks and gives your team usable execution leverage.",
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
    "Explore AJ Digital services across podcast production, AI consulting, and content systems.",
};

export default function ServicesPage() {
  return (
    <div className="bg-black text-white">
      <section className="px-6 py-28 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <span className="mb-5 inline-block text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
              Services
            </span>
            <h1 className="mb-6 text-5xl font-black tracking-tight text-white">
              Systems built for production, distribution, and growth.
            </h1>
            <p className="text-lg leading-relaxed text-neutral-300">
              We do not sell disconnected deliverables. We build the production,
              AI, and content systems that make your expertise easier to publish,
              repurpose, and turn into pipeline.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.href}
                className="rounded-2xl border border-neutral-800 bg-neutral-950 p-8"
              >
                <h2 className="mb-4 text-2xl font-bold text-white">
                  {service.title}
                </h2>
                <p className="mb-8 leading-relaxed text-neutral-400">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center font-semibold text-blue-400 transition-colors hover:text-blue-300"
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
