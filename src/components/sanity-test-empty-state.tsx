export default function SanityTestEmptyState({
  configured,
  slug,
}: {
  configured: boolean;
  slug?: string;
}) {
  const targetSlug = slug || "podcast-production-cost";

  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
      <h2 className="text-2xl font-semibold text-white">
        {!configured
          ? "Sanity is not configured yet"
          : slug
            ? `No Sanity article found for "${slug}"`
            : "No Sanity article found yet"}
      </h2>
      <p className="mt-4 max-w-3xl text-neutral-300">
        {!configured
          ? "Add the Sanity environment variables first, then start the Studio and create one article document to validate the integration."
          : slug
            ? "The slug-based route is working, but Sanity did not return an article for that slug. Create or publish an article with the matching slug to complete the routing test."
            : "The Sanity client is configured, but no published `article` document is available yet. Create one article in Sanity with a title, slug, and body to validate the fetch and render flow."}
      </p>
      <ol className="mt-6 list-decimal space-y-2 pl-5 text-neutral-400">
        <li>Set the Sanity env vars listed in `.env.example`.</li>
        <li>Run `npm run sanity:dev` to start the Studio.</li>
        <li>Create one `article` document with title, slug, category, excerpt, SEO fields, dates, tags, FAQ items, and body content.</li>
        <li>For the real validation test, use the slug <span className="font-mono text-white">{targetSlug}</span>.</li>
        <li>Run `npm run dev` and open <span className="font-mono text-white">/sanity-test/{targetSlug}</span>.</li>
      </ol>
    </div>
  );
}
