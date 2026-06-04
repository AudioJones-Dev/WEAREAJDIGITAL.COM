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
    "Browse AJ Digital guides on podcast production, Marketing Operations, content systems, and authority-building workflows.",
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
          "A collection of AJ Digital articles covering podcast production, Marketing Operations, and content systems.",
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
    <div className="min-h-screen bg-bg-0 text-fg-0">
      <JsonLd data={jsonLd} />

      <section className="relative overflow-hidden border-b border-border-subtle bg-bg-0 px-6 pb-16 pt-28 sm:px-12 lg:px-24">
        <div
          aria-hidden
          className="bg-glow-signal pointer-events-none absolute inset-0"
        />
        <div className="relative mx-auto max-w-6xl">
          <p className="t-label mb-4">AJ Digital Blog</p>
          <h1 className="t-h1 max-w-4xl">
            Pillar guides and system playbooks for authority-driven growth
          </h1>
          <p className="t-lead mt-6 max-w-3xl text-fg-1">
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
              className="t-mono flex min-h-[44px] items-center rounded-full border border-border-subtle bg-bg-2 px-4 py-2 text-fg-1 transition-colors hover:border-signal-yellow hover:text-signal-yellow"
            >
              {category.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="px-6 pb-10 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <h2 className="t-h2">Featured articles</h2>
            <p className="t-body mt-2 text-fg-2">
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
                  className="aj-card flex flex-col p-7"
                >
                  <div className="t-label flex items-center justify-between text-signal-yellow">
                    <span>{category?.label ?? post.category}</span>
                    <span className="text-fg-3">{post.readTime}</span>
                  </div>
                  <h3 className="t-h4 mt-4">{post.title}</h3>
                  <p className="t-body mt-4 text-fg-2">{post.description}</p>
                  <span className="t-mono mt-6 inline-flex text-signal-yellow">
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
            <h2 className="t-h2">All articles</h2>
            <p className="t-body mt-2 text-fg-2">
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
                  className="aj-card flex h-full flex-col p-6"
                >
                  <div className="t-mono flex items-center justify-between text-fg-3">
                    <span>{category?.label ?? post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="t-h4 mt-4">{post.title}</h3>
                  <p className="t-body mt-3 flex-1 text-fg-2">
                    {post.description}
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="t-mono text-fg-3">
                      {post.pillar ? "Pillar guide" : "Cluster article"}
                    </span>
                    <span className="t-mono text-signal-yellow">
                      Open {"->"}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-16 rounded-2xl border border-border-subtle bg-bg-2 p-8">
            <p className="t-label">Commercial path</p>
            <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <Link
                href="/services/podcast-production"
                className="t-body flex min-h-[44px] items-center rounded-2xl border border-border-subtle bg-bg-0 p-5 text-fg-1 transition-colors hover:border-accent-blue"
              >
                Explore the podcast production service
              </Link>
              <Link
                href="/services/ai-consulting"
                className="t-body flex min-h-[44px] items-center rounded-2xl border border-border-subtle bg-bg-0 p-5 text-fg-1 transition-colors hover:border-accent-blue"
              >
                Explore Marketing Operations
              </Link>
              <Link
                href="/services/content-systems"
                className="t-body flex min-h-[44px] items-center rounded-2xl border border-border-subtle bg-bg-0 p-5 text-fg-1 transition-colors hover:border-accent-blue"
              >
                Explore content systems services
              </Link>
              <Link
                href="/case-studies/podcast-authority-system"
                className="t-body flex min-h-[44px] items-center rounded-2xl border border-border-subtle bg-bg-0 p-5 text-fg-1 transition-colors hover:border-accent-blue"
              >
                Review the podcast authority system case study
              </Link>
            </div>
            <div className="mt-6">
              <Link href="/apply" className="aj-btn-signal">
                Apply for a Strategy Session
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
