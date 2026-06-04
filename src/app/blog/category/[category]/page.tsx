import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/json-ld";
import {
  blogCategories,
  getBlogCategory,
  getBlogPostsByCategory,
  type BlogCategorySlug,
} from "@/lib/blog-posts";
import {
  buildBreadcrumbJsonLd,
  buildOrganizationJsonLd,
  siteUrl,
} from "@/lib/site";

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

export async function generateStaticParams() {
  return blogCategories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const categoryData = getBlogCategory(category as BlogCategorySlug);

  if (!categoryData) {
    return { title: "Blog Category" };
  }

  return {
    title: `${categoryData.label} Articles | AJ Digital`,
    description: categoryData.description,
    alternates: {
      canonical: `/blog/category/${categoryData.slug}`,
    },
  };
}

export default async function BlogCategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const categoryData = getBlogCategory(category as BlogCategorySlug);

  if (!categoryData) {
    notFound();
  }

  const normalizedPosts = getBlogPostsByCategory(categoryData.slug, {
    normalizedOnly: true,
  });
  const pillar = getBlogPostsByCategory(categoryData.slug).find((post) => post.pillar);
  const additionalPosts = getBlogPostsByCategory(categoryData.slug).filter(
    (post) => !post.pillar && !post.normalizedFromDraft,
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${siteUrl}/blog/category/${categoryData.slug}/#webpage`,
        url: `${siteUrl}/blog/category/${categoryData.slug}`,
        name: `${categoryData.label} Articles`,
        description: categoryData.description,
      },
      buildOrganizationJsonLd(),
      buildBreadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: categoryData.label, path: `/blog/category/${categoryData.slug}` },
      ]),
      {
        "@type": "ItemList",
        itemListElement: normalizedPosts.map((post, index) => ({
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
          <p className="t-label mb-4">{categoryData.label}</p>
          <h1 className="t-h1 max-w-4xl">
            {categoryData.label} articles and playbooks
          </h1>
          <p className="t-lead mt-6 max-w-3xl text-fg-1">
            {categoryData.description}
          </p>
        </div>
      </section>

      <section className="px-6 py-12 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl rounded-2xl border border-border-subtle bg-bg-2 p-8">
          <p className="t-label">Start here</p>
          <h2 className="t-h3 mt-4">
            {pillar?.title ?? `${categoryData.label} core guide`}
          </h2>
          <p className="t-body mt-3 max-w-3xl text-fg-2">
            Start with the pillar, then move into the supporting imported cluster articles below.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href={`/blog/${categoryData.pillarSlug}`}
              className="aj-btn-signal"
            >
              Read the pillar guide
            </Link>
            {categoryData.serviceHref ? (
              <Link
                href={categoryData.serviceHref}
                className="aj-btn-intel"
              >
                Explore the related service
              </Link>
            ) : null}
          </div>
        </div>
      </section>

      <section className="px-6 pb-12 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <h2 className="t-h2">Normalized article set</h2>
            <p className="t-body mt-2 text-fg-2">
              {normalizedPosts.length} imported articles now mapped into the active blog routing system.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {normalizedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="aj-card flex h-full flex-col p-6"
              >
                <div className="t-mono flex items-center justify-between text-fg-3">
                  <span>{categoryData.label}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="t-h4 mt-4">{post.title}</h3>
                <p className="t-body mt-3 flex-1 text-fg-2">{post.description}</p>
                <span className="t-mono mt-6 text-signal-yellow">
                  Open article {"->"}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {additionalPosts.length > 0 ? (
        <section className="px-6 pb-12 sm:px-12 lg:px-24">
          <div className="mx-auto max-w-6xl rounded-2xl border border-border-subtle bg-bg-0 p-8">
            <h2 className="t-h3">Also in this topic</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {additionalPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="aj-card is-surface-2 p-5"
                >
                  <p className="t-label">Additional cluster</p>
                  <h3 className="t-h4 mt-2 text-fg-0">{post.title}</h3>
                  <p className="t-body mt-2 text-fg-2">{post.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="px-6 pb-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl rounded-2xl border border-border-subtle bg-bg-2 p-8">
          <h2 className="t-h2">Turn the topic into an implemented system</h2>
          <p className="t-body mt-3 max-w-3xl text-fg-1">
            If you want help building the workflow behind these articles, start with the closest service path or apply for a strategy session.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            {categoryData.serviceHref ? (
              <Link
                href={categoryData.serviceHref}
                className="aj-btn-intel"
              >
                Explore the service
              </Link>
            ) : null}
            {categoryData.localHref ? (
              <Link
                href={categoryData.localHref}
                className="aj-btn-intel"
              >
                Explore the local page
              </Link>
            ) : null}
            <Link
              href="/apply"
              className="aj-btn-signal"
            >
              Apply for a Strategy Session
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
