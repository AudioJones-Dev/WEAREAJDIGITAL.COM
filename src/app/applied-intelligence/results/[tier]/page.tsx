import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import assessmentConfig from "@/content/applied-intellisystems-assessment-config.json";
import type { AssessmentConfig } from "@/types/applied-intellisystems";

const config = assessmentConfig as AssessmentConfig;
const VALID_TIERS = ["hot", "warm", "cold"] as const;
type Tier = (typeof VALID_TIERS)[number];

export function generateStaticParams() {
  return VALID_TIERS.map((tier) => ({ tier }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tier: string }>;
}): Promise<Metadata> {
  const { tier } = await params;
  if (!VALID_TIERS.includes(tier as Tier)) return {};
  const page = config.result_pages[tier as Tier];
  return {
    title: `${page.tier_label} | Applied Intellisystems™ Diagnostic`,
    description: page.summary,
  };
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-3xl border border-[#1E293B] bg-[#0B1020]/80 shadow-[0_20px_80px_rgba(0,0,0,0.35)] ${className}`}>
      {children}
    </div>
  );
}

function ScoreDial({ score, tier }: { score: number; tier: Tier }) {
  const color =
    tier === "hot" ? "#3B5BFF" : tier === "warm" ? "#C8A96A" : "#94A3B8";
  const circumference = 2 * Math.PI * 44;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="relative flex h-32 w-32 items-center justify-center">
      <svg className="absolute" width="128" height="128" viewBox="0 0 128 128">
        <circle
          cx="64" cy="64" r="44"
          fill="none" stroke="#1E293B" strokeWidth="8"
        />
        <circle
          cx="64" cy="64" r="44"
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 64 64)"
          style={{ transition: "stroke-dashoffset 1s ease" }}
        />
      </svg>
      <div className="text-center">
        <p className="text-2xl font-bold text-white">{score}</p>
        <p className="text-xs text-[#94A3B8]">/ 100</p>
      </div>
    </div>
  );
}

export default async function ResultPage({
  params,
  searchParams,
}: {
  params: Promise<{ tier: string }>;
  searchParams: Promise<{ score?: string }>;
}) {
  const { tier } = await params;
  const { score: scoreParam } = await searchParams;

  if (!VALID_TIERS.includes(tier as Tier)) notFound();

  const typedTier = tier as Tier;
  const page = config.result_pages[typedTier];

  const rawParsed = scoreParam !== undefined ? parseInt(scoreParam, 10) : NaN;
  const score = !isNaN(rawParsed) ? Math.min(100, Math.max(0, rawParsed)) : null;

  return (
    <div className="min-h-screen bg-[#05070F] text-[#F8FAFC]">
      {/* Minimal nav */}
      <header className="flex items-center justify-between px-6 py-6 sm:px-8 lg:px-12">
        <Link
          href="/applied-intelligence"
          className="text-sm font-bold tracking-[0.24em] text-white hover:text-[#C8A96A] transition-colors"
        >
          AJ DIGITAL
        </Link>
        <Link
          href="/applied-intelligence/diagnostic"
          className="text-xs font-semibold text-[#94A3B8] transition hover:text-white"
        >
          Retake Diagnostic
        </Link>
      </header>

      <main className="mx-auto max-w-3xl px-6 pb-28 pt-6 sm:px-8">
        {/* Tier badge */}
        <div className="mb-8 text-center">
          <p className="inline-flex rounded-full border border-[#1E293B] bg-[#0B1020]/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#C8A96A]">
            {page.tier_label}
          </p>
        </div>

        {/* Score + headline */}
        <Card className="mb-6 p-8 text-center">
          {score !== null && (
            <div className="mb-6 flex justify-center">
              <ScoreDial score={score} tier={typedTier} />
            </div>
          )}
          <h1 className="text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
            {page.headline}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#94A3B8]">
            {page.summary}
          </p>
        </Card>

        {/* Insights */}
        <Card className="mb-6 p-8">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-[#C8A96A]">
            Key Insights
          </p>
          <ul className="space-y-4">
            {page.insights.map((insight, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0911BB] text-xs font-bold text-white">
                  {i + 1}
                </span>
                <p className="text-[#CBD5E1] leading-6">{insight}</p>
              </li>
            ))}
          </ul>
        </Card>

        {/* CTAs */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href={page.primary_cta.href}
            className="flex-1 rounded-full bg-[#3B5BFF] px-7 py-4 text-center text-sm font-semibold text-white shadow-[0_0_36px_rgba(59,91,255,0.35)] transition hover:-translate-y-0.5 hover:bg-[#5F7BFF]"
          >
            {page.primary_cta.label}
          </Link>
          <Link
            href={page.secondary_cta.href}
            className="flex-1 rounded-full border border-[#1E293B] bg-[#0B1020]/70 px-7 py-4 text-center text-sm font-semibold text-[#F8FAFC] transition hover:border-[#3B5BFF] hover:text-white"
          >
            {page.secondary_cta.label}
          </Link>
        </div>

        {/* Footer note */}
        <p className="mt-8 text-center text-xs text-[#94A3B8]">
          Applied Intellisystems™ Diagnostic by AJ DIGITAL. Free and private.
        </p>
      </main>
    </div>
  );
}
