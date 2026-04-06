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
    <div className="min-h-screen bg-black text-white">
      <JsonLd data={jsonLd} />

      <section className="border-b border-neutral-900 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.18),_transparent_45%),linear-gradient(180deg,#05070a_0%,#000_100%)] px-6 pb-16 pt-28 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            {categoryData.label}
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            {categoryData.label} articles and playbooks
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
            {categoryData.description}
          </p>
        </div>
      </section>

      <section className="px-6 py-12 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Start here
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white">
            {pillar?.title ?? `${categoryData.label} core guide`}
          </h2>
          <p className="mt-3 max-w-3xl text-neutral-400">
            Start with the pillar, then move into the supporting imported cluster articles below.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href={`/blog/${categoryData.pillarSlug}`}
              className="inline-flex rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-blue-500"
            >
              Read the pillar guide
            </Link>
            {categoryData.serviceHref ? (
              <Link
                href={categoryData.serviceHref}
                className="inline-flex rounded-xl border border-neutral-700 px-5 py-3 font-semibold text-neutral-200 transition-colors hover:border-blue-500/40"
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
            <h2 className="text-3xl font-semibold text-white">Normalized article set</h2>
            <p className="mt-2 text-neutral-400">
              {normalizedPosts.length} imported articles now mapped into the active blog routing system.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {normalizedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="flex h-full flex-col rounded-3xl border border-neutral-900 bg-neutral-950 p-6 transition-colors hover:border-blue-500/40"
              >
                <div className="flex items-center justify-between text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                  <span>{categoryData.label}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{post.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-neutral-400">{post.description}</p>
                <span className="mt-6 text-sm font-semibold text-blue-400">
                  Open article {"->"}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {additionalPosts.length > 0 ? (
        <section className="px-6 pb-12 sm:px-12 lg:px-24">
          <div className="mx-auto max-w-6xl rounded-3xl border border-neutral-900 bg-black p-8">
            <h2 className="text-2xl font-semibold text-white">Also in this topic</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {additionalPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="rounded-2xl border border-neutral-800 bg-neutral-950 p-5 text-neutral-300 transition-colors hover:border-neutral-700"
                >
                  <p className="text-sm font-semibold text-blue-400">Additional cluster</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{post.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-400">{post.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="px-6 pb-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
          <h2 className="text-3xl font-semibold text-white">Turn the topic into an implemented system</h2>
          <p className="mt-3 max-w-3xl text-neutral-300">
            If you want help building the workflow behind these articles, start with the closest service path or apply for a strategy session.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            {categoryData.serviceHref ? (
              <Link
                href={categoryData.serviceHref}
                className="inline-flex rounded-xl border border-neutral-700 px-5 py-3 font-semibold text-neutral-200 transition-colors hover:border-blue-500/40"
              >
                Explore the service
              </Link>
            ) : null}
            {categoryData.localHref ? (
              <Link
                href={categoryData.localHref}
                className="inline-flex rounded-xl border border-neutral-700 px-5 py-3 font-semibold text-neutral-200 transition-colors hover:border-blue-500/40"
              >
                Explore the local page
              </Link>
            ) : null}
            <Link
              href="/apply"
              className="inline-flex rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-blue-500"
            >
              Apply for a Strategy Session
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
