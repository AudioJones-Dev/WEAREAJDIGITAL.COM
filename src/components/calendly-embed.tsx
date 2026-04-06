import { buildCalendlyEmbedUrl } from "@/lib/site";

type CalendlyEmbedProps = {
  url: string;
  title?: string;
  minHeight?: number;
};

export default function CalendlyEmbed({
  url,
  title = "Book your strategy session",
  minHeight = 760,
}: CalendlyEmbedProps) {
  const embedUrl = buildCalendlyEmbedUrl(url);

  return (
    <div
      className="overflow-hidden rounded-2xl border border-neutral-800 bg-black"
      data-track="scheduler-embed-container"
      data-ga-event="scheduler_embed_view"
    >
      <iframe
        src={embedUrl}
        title={title}
        className="block w-full"
        style={{ minHeight }}
        loading="eager"
      />
    </div>
  );
}
