import type { Metadata } from "next";
import Link from "next/link";
import { getSanityClientConfig } from "@/lib/sanity.client";
import {
  getSanityArticleSlugs,
  getSanityTestArticle,
} from "@/lib/sanity.queries";
import SanityTestArticle from "@/components/sanity-test-article";
import SanityTestEmptyState from "@/components/sanity-test-empty-state";

export const metadata: Metadata = {
  title: "Sanity Test",
  description:
    "Minimal Sanity proof of concept for fetching and rendering one AJ Digital article without affecting the live blog system.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function SanityTestPage() {
  const sanityConfig = getSanityClientConfig();

  if (!sanityConfig) {
    return (
      <div className="min-h-screen bg-black px-6 py-24 text-white sm:px-12 lg:px-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Experimental CMS Test
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Sanity Blog Proof of Concept
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
            This route is isolated from the live AJ Digital blog. It exists only to prove that one Sanity-backed article can be fetched and rendered cleanly in the current Next.js app.
          </p>
          <div className="mt-10">
            <SanityTestEmptyState configured={false} />
          </div>
        </div>
      </div>
    );
  }

  const [article, slugs] = await Promise.all([
    getSanityTestArticle(),
    getSanityArticleSlugs(),
  ]);

  return (
    <div className="min-h-screen bg-black px-6 py-24 text-white sm:px-12 lg:px-24">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          Experimental CMS Test
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          Sanity Blog Proof of Concept
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
          This page fetches the first available Sanity article and renders a minimal article view without affecting the live static blog routes.
        </p>

        <div className="mt-8 rounded-2xl border border-neutral-800 bg-neutral-950 p-5 text-sm text-neutral-400">
          <p>Project ID: {sanityConfig.projectId}</p>
          <p>Dataset: {sanityConfig.dataset}</p>
          <p>API version: {sanityConfig.apiVersion}</p>
        </div>

        <div className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Real article validation target
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-white">
            Create `podcast-production-cost` in Sanity
          </h2>
          <p className="mt-3 max-w-3xl text-neutral-300">
            The next validation step is to author the real AJ Digital article candidate in Sanity with the slug <span className="font-mono text-white">podcast-production-cost</span>. Once it exists, the intended proof route is <span className="font-mono text-white">/sanity-test/podcast-production-cost</span>.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/sanity-test/podcast-production-cost"
              className="inline-flex rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-blue-500"
            >
              Open the target slug route
            </Link>
            <Link
              href="/blog/podcast-production-cost"
              className="inline-flex rounded-xl border border-neutral-700 px-5 py-3 font-semibold text-white transition-colors hover:border-neutral-500 hover:bg-black"
            >
              Review the live manual article
            </Link>
          </div>
          <ul className="mt-5 space-y-2 text-sm text-neutral-400">
            <li>Required fit: title, slug, category, excerpt, SEO fields, published date, updated date, tags, FAQ items, and body.</li>
            <li>Category for this test article: <span className="font-mono text-white">podcast-production</span>.</li>
            <li>Slug for this test article: <span className="font-mono text-white">podcast-production-cost</span>.</li>
          </ul>
        </div>

        {slugs.length ? (
          <div className="mt-8 rounded-2xl border border-neutral-800 bg-black p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Slug routing test targets
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {slugs.map((item) => (
                <Link
                  key={item.slug}
                  href={`/sanity-test/${item.slug}`}
                  className="rounded-full border border-neutral-700 px-4 py-2 text-sm text-neutral-300 transition-colors hover:border-blue-500/40 hover:text-white"
                >
                  {item.slug}
                </Link>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-10">
          {!article ? <SanityTestEmptyState configured /> : null}

          {article ? <SanityTestArticle article={article} showSlugLink /> : null}
        </div>

        <div className="mt-10">
          <Link
            href="/blog"
            className="inline-flex rounded-xl border border-neutral-700 px-5 py-3 font-semibold text-white transition-colors hover:border-neutral-500 hover:bg-neutral-950"
          >
            Back to the live blog
          </Link>
        </div>
      </div>
    </div>
  );
}
