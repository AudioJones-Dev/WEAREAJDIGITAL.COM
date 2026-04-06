import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/json-ld";
import {
  blogCategories,
  blogPosts,
  getBlogCategory,
} from "@/lib/blog-posts";
import {
  buildBreadcrumbJsonLd,
  buildOrganizationJsonLd,
  siteUrl,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Browse AJ Digital guides on podcast production, AI consulting, content systems, and authority-building workflows.",
};

export default function BlogIndexPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${siteUrl}/blog/#webpage`,
        url: `${siteUrl}/blog`,
        name: "AJ Digital Blog",
        description:
          "A collection of AJ Digital articles covering podcast production, AI consulting, and content systems.",
      },
      buildOrganizationJsonLd(),
      buildBreadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
      ]),
      {
        "@type": "ItemList",
        itemListElement: blogPosts.map((post, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${siteUrl}/blog/${post.slug}`,
          name: post.title,
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <JsonLd data={jsonLd} />

      <section className="border-b border-neutral-900 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.28),_transparent_45%),linear-gradient(180deg,#05070a_0%,#000_100%)] px-6 pb-16 pt-28 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            AJ Digital Blog
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Pillar guides and system playbooks for authority-driven growth
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
            This library covers podcast production, content repurposing, AI
            automation, and commercial workflows built for serious operators.
          </p>
        </div>
      </section>

      <section className="px-6 py-10 sm:px-12 lg:px-24">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-3">
          {blogCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/blog/category/${category.slug}`}
              className="rounded-full border border-neutral-800 bg-neutral-950 px-4 py-2 text-sm font-medium text-neutral-300 transition-colors hover:border-blue-500/40 hover:text-white"
            >
              {category.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="px-6 pb-10 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Featured articles
            </h2>
            <p className="mt-2 text-neutral-400">
              Start with the pillar guides, then move into the supporting
              clusters and commercial-intent explainers.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {featuredPosts.map((post) => {
              const category = getBlogCategory(post.category);

              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="rounded-3xl border border-neutral-900 bg-neutral-950 p-7 transition-colors hover:border-blue-500/50"
                >
                  <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                    <span>{category?.label ?? post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-white">
                    {post.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-neutral-400">
                    {post.description}
                  </p>
                  <span className="mt-6 inline-flex text-sm font-semibold text-blue-400">
                    Read article {"->"}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              All articles
            </h2>
            <p className="mt-2 text-neutral-400">
              Browse the full cluster structure across podcast production, AI,
              and content systems.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {blogPosts.map((post) => {
              const category = getBlogCategory(post.category);

              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="flex h-full flex-col rounded-3xl border border-neutral-900 bg-black p-6 transition-colors hover:border-neutral-700"
                >
                  <div className="flex items-center justify-between text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                    <span>{category?.label ?? post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-white">
                    {post.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-neutral-400">
                    {post.description}
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm font-medium text-neutral-500">
                      {post.pillar ? "Pillar guide" : "Cluster article"}
                    </span>
                    <span className="text-sm font-semibold text-blue-400">
                      Open {"->"}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-16 rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Commercial path
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <Link
                href="/services/podcast-production"
                className="rounded-2xl border border-neutral-800 bg-black p-5 text-neutral-300 transition-colors hover:border-blue-500/40"
              >
                Explore the podcast production service
              </Link>
              <Link
                href="/services/ai-consulting"
                className="rounded-2xl border border-neutral-800 bg-black p-5 text-neutral-300 transition-colors hover:border-blue-500/40"
              >
                Explore AI consulting services
              </Link>
              <Link
                href="/services/content-systems"
                className="rounded-2xl border border-neutral-800 bg-black p-5 text-neutral-300 transition-colors hover:border-blue-500/40"
              >
                Explore content systems services
              </Link>
              <Link
                href="/case-studies/podcast-authority-system"
                className="rounded-2xl border border-neutral-800 bg-black p-5 text-neutral-300 transition-colors hover:border-blue-500/40"
              >
                Review the podcast authority system case study
              </Link>
            </div>
            <div className="mt-6">
              <Link
                href="/apply"
                className="inline-flex rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-500"
              >
                Apply for a Strategy Session
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
