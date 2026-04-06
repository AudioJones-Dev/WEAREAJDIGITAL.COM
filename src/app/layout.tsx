import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AnalyticsProvider from "@/components/analytics-provider";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import StickyApplyCta from "@/components/sticky-apply-cta";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.weareajdigital.com"),
  title: {
    default: "AJ Digital | Podcast Production, AI Consulting, Content Systems",
    template: "%s | AJ Digital",
  },
  description:
    "AJ Digital builds podcast production systems, AI workflows, and content engines for operators who want authority and measurable growth.",
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
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <StickyApplyCta />
        <SiteFooter />
      </body>
    </html>
  );
}
