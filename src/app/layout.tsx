import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AnalyticsProvider from "@/components/analytics-provider";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import StickyApplyCta from "@/components/sticky-apply-cta";
import HeaderSpacer from "@/components/header-spacer";
import SiteChrome from "@/components/site-chrome";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.weareajdigital.com"),
  title: {
    default: "AJ Digital | Podcast Production, AI Consulting, Content Systems",
    template: "%s | AJ Digital",
  },
  description:
    "AJ Digital builds podcast production systems, AI workflows, and content engines for operators who want authority and measurable growth.",

  // ── Favicons & App Icons ──────────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/favicon.ico",  sizes: "32x32",  type: "image/x-icon" },
      { url: "/favicon.svg",  type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple:    "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",

  // ── Open Graph ────────────────────────────────────────────────────────────
  openGraph: {
    type:        "website",
    locale:      "en_US",
    url:         "https://www.weareajdigital.com",
    siteName:    "AJ Digital",
    title:       "AJ Digital | Podcast Production, AI Consulting, Content Systems",
    description: "AJ Digital builds podcast production systems, AI workflows, and content engines for operators who want authority and measurable growth.",
    images: [
      {
        url:    "/og-default.png",
        width:  1200,
        height: 630,
        alt:    "AJ Digital — Podcast Production, AI Consulting, Content Systems",
      },
    ],
  },

  // ── Twitter / X Card ─────────────────────────────────────────────────────
  twitter: {
    card:        "summary_large_image",
    title:       "AJ Digital | Podcast Production, AI Consulting, Content Systems",
    description: "We build podcast systems, AI workflows, and content engines for operators who want authority and measurable growth.",
    images:      ["/og-default.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <AnalyticsProvider />
        <SiteHeader />
        <HeaderSpacer />
        <main className="min-h-screen">
          {children}
        </main>
        <SiteChrome
          sticky={<StickyApplyCta />}
          footer={<SiteFooter />}
        />
      </body>
    </html>
  );
}
