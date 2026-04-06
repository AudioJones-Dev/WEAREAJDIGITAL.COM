export type AnalyticsParams = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID?.trim() || "";

export function isAnalyticsEnabled() {
  return Boolean(GA_ID);
}

export function trackEvent(name: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", name, params);
}

export function getPageType(pathname: string) {
  if (pathname.startsWith("/services/")) {
    return "service_page_view";
  }

  if (pathname.startsWith("/case-studies/") && pathname !== "/case-studies") {
    return "case_study_view";
  }

  if (pathname.startsWith("/blog/")) {
    const pillarSlugs = new Set([
      "/blog/podcast-production-guide",
      "/blog/content-repurposing-guide",
      "/blog/ai-content-automation-guide",
    ]);

    return pillarSlugs.has(pathname) ? "pillar_page_view" : "cluster_page_view";
  }

  return null;
}

export function inferCtaLocation(
  element: HTMLElement,
): "hero" | "mid-content" | "sticky" | "footer" | "header" | "scheduler" | "unknown" {
  const explicitLocation = element.dataset.ctaLocation;
  if (explicitLocation === "hero" || explicitLocation === "mid-content" || explicitLocation === "sticky" || explicitLocation === "footer" || explicitLocation === "header" || explicitLocation === "scheduler") {
    return explicitLocation;
  }

  const trackId = element.dataset.track || "";
  if (trackId.includes("sticky")) return "sticky";
  if (trackId.includes("footer")) return "footer";
  if (trackId.includes("header") || trackId.includes("nav")) return "header";
  if (trackId.includes("hero")) return "hero";
  if (trackId.includes("scheduler")) return "scheduler";

  return "mid-content";
}
