import { PortableText } from "@portabletext/react";
import Link from "next/link";
import type { SanityArticle } from "@/lib/sanity.queries";

function formatDate(value?: string) {
  if (!value) {
    return null;
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export default function SanityTestArticle({
  article,
  showSlugLink = false,
}: {
  article: SanityArticle;
  showSlugLink?: boolean;
}) {
  return (
    <article className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
      <div className="flex flex-wrap gap-3 text-sm text-neutral-400">
        {article.category ? (
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-blue-300">
            {article.category}
          </span>
        ) : null}
        {formatDate(article.publishedAt) ? <span>Published: {formatDate(article.publishedAt)}</span> : null}
        {formatDate(article.updatedAt) ? <span>Updated: {formatDate(article.updatedAt)}</span> : null}
      </div>

      <h2 className="mt-6 text-3xl font-semibold text-white">{article.title}</h2>
      <p className="mt-3 text-sm text-neutral-500">Slug: {article.slug}</p>

      {article.excerpt ? (
        <p className="mt-6 text-lg leading-8 text-neutral-300">{article.excerpt}</p>
      ) : null}

      {showSlugLink ? (
        <div className="mt-6">
          <Link
            href={`/sanity-test/${article.slug}`}
            className="inline-flex rounded-xl border border-neutral-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-blue-500/40 hover:bg-black"
          >
            Open slug test route
          </Link>
        </div>
      ) : null}

      {article.tags?.length ? (
        <div className="mt-6 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-neutral-700 px-3 py-1 text-xs uppercase tracking-[0.2em] text-neutral-400"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}

      {article.body?.length ? (
        <div className="prose prose-invert mt-10 max-w-none">
          <PortableText value={article.body} />
        </div>
      ) : (
        <p className="mt-10 rounded-2xl border border-neutral-800 bg-black p-4 text-neutral-400">
          No body content found yet. Add Portable Text blocks in Sanity to test body rendering.
        </p>
      )}

      {article.faqItems?.length ? (
        <section className="mt-12 border-t border-neutral-800 pt-8">
          <h3 className="text-2xl font-semibold text-white">FAQ Test</h3>
          <div className="mt-6 space-y-5">
            {article.faqItems.map((item) => (
              <div key={item.question} className="rounded-2xl border border-neutral-800 bg-black p-5">
                <h4 className="text-lg font-semibold text-white">{item.question}</h4>
                <p className="mt-2 text-neutral-300">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}
