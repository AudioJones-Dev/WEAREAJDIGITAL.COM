import type { Metadata } from "next";
import Link from "next/link";
import { getSanityClientConfig } from "@/lib/sanity.client";
import {
  getSanityArticleBySlug,
  getSanityArticleSlugs,
} from "@/lib/sanity.queries";
import SanityTestArticle from "@/components/sanity-test-article";
import SanityTestEmptyState from "@/components/sanity-test-empty-state";

type SanitySlugPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getSanityArticleSlugs();

  return slugs.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: SanitySlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getSanityArticleBySlug(slug);

  return {
    title: article?.seoTitle || article?.title || "Sanity Slug Test",
    description:
      article?.metaDescription ||
      article?.excerpt ||
      "Slug-based Sanity article proof of concept for AJ Digital.",
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function SanitySlugTestPage({
  params,
}: SanitySlugPageProps) {
  const { slug } = await params;
  const sanityConfig = getSanityClientConfig();
  const article = sanityConfig ? await getSanityArticleBySlug(slug) : null;

  return (
    <div className="min-h-screen bg-black px-6 py-24 text-white sm:px-12 lg:px-24">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          Experimental CMS Slug Test
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          Sanity Slug Route Proof of Concept
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
          This isolated route proves the app can fetch one Sanity article by slug using a routing shape that mirrors a future `/blog/[slug]` migration path.
        </p>

        <div className="mt-8 rounded-2xl border border-neutral-800 bg-neutral-950 p-5 text-sm text-neutral-400">
          <p>Requested slug: {slug}</p>
          <p>
            Sanity configured: {sanityConfig ? "yes" : "no"}
          </p>
        </div>

        <div className="mt-10">
          {!sanityConfig ? (
            <SanityTestEmptyState configured={false} />
          ) : null}

          {sanityConfig && !article ? (
            <SanityTestEmptyState configured slug={slug} />
          ) : null}

          {article ? <SanityTestArticle article={article} /> : null}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/sanity-test"
            className="inline-flex rounded-xl border border-neutral-700 px-5 py-3 font-semibold text-white transition-colors hover:border-neutral-500 hover:bg-neutral-950"
          >
            Back to Sanity test index
          </Link>
          <Link
            href="/blog"
            className="inline-flex rounded-xl border border-neutral-700 px-5 py-3 font-semibold text-white transition-colors hover:border-neutral-500 hover:bg-neutral-950"
          >
            Back to live blog
          </Link>
        </div>
      </div>
    </div>
  );
}
