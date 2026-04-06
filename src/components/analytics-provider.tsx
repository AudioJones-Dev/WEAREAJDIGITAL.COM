"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import {
  GA_ID,
  getPageType,
  inferCtaLocation,
  isAnalyticsEnabled,
  trackEvent,
} from "@/lib/analytics";

function isApplyCta(element: HTMLElement) {
  const href =
    element instanceof HTMLAnchorElement
      ? element.getAttribute("href")
      : element.getAttribute("data-href");
  const label = element.textContent?.trim().toLowerCase() || "";

  return href === "/apply" || label.includes("apply for a strategy session");
}

export default function AnalyticsProvider() {
  const pathname = usePathname();
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    if (!isAnalyticsEnabled()) {
      return;
    }

    if (!pathname || lastTrackedPath.current === pathname) {
      return;
    }

    lastTrackedPath.current = pathname;

    const pageType = getPageType(pathname);
    if (pageType) {
      trackEvent(pageType, { page: pathname });
    }

    if (pathname === "/apply/success") {
      trackEvent("schedule_view", {
        page: pathname,
        location: "scheduler",
      });
    }
  }, [pathname]);

  useEffect(() => {
    if (!isAnalyticsEnabled()) {
      return;
    }

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const clickable = target.closest("a,button") as HTMLElement | null;
      if (!clickable) return;

      if (!isApplyCta(clickable)) {
        return;
      }

      trackEvent("cta_click", {
        location: inferCtaLocation(clickable),
        page: window.location.pathname,
        label: "Apply for a Strategy Session",
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  if (!isAnalyticsEnabled()) {
    return null;
  }

  return (
    <>
      <Script
        id="ga4-script"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            send_page_view: true
          });
        `}
      </Script>
    </>
  );
}
