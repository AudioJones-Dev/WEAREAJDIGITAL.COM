export const siteUrl = "https://weareajdigital.com";
export const CALENDLY_STRATEGY_SESSION_URL =
  "https://calendly.com/audiojones-ajdigital/30min";
export const CONTACT_PATH = "/contact";
export const BLOG_PATH = "/blog";

export function getPublicCalendlyUrl() {
  const rawUrl = process.env.NEXT_PUBLIC_CALENDLY_URL?.trim();

  if (!rawUrl) {
    return CALENDLY_STRATEGY_SESSION_URL;
  }

  try {
    return new URL(rawUrl).toString();
  } catch {
    return CALENDLY_STRATEGY_SESSION_URL;
  }
}

export function buildCalendlyEmbedUrl(url: string) {
  const calendlyUrl = new URL(url);

  if (!calendlyUrl.searchParams.has("hide_gdpr_banner")) {
    calendlyUrl.searchParams.set("hide_gdpr_banner", "1");
  }

  if (!calendlyUrl.searchParams.has("background_color")) {
    calendlyUrl.searchParams.set("background_color", "0a0a0a");
  }

  if (!calendlyUrl.searchParams.has("text_color")) {
    calendlyUrl.searchParams.set("text_color", "ffffff");
  }

  if (!calendlyUrl.searchParams.has("primary_color")) {
    calendlyUrl.searchParams.set("primary_color", "2563eb");
  }

  return calendlyUrl.toString();
}

export function buildOrganizationJsonLd() {
  return {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "AJ Digital",
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/logo.png`,
    },
    description:
      "Podcast production, AI consulting, and content systems for operator-led businesses.",
  };
}

export function buildBreadcrumbJsonLd(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}
