import type { Metadata } from "next";
import Link from "next/link";
import assessmentConfig from "@/content/applied-intellisystems-assessment-config.json";
import type { AssessmentConfig } from "@/types/applied-intellisystems";
import DiagnosticForm from "@/components/applied-intelligence/DiagnosticForm";

export const metadata: Metadata = {
  title: "Applied Intellisystems™ Diagnostic | AJ DIGITAL",
  description:
    "Answer 15 questions to identify the system constraint blocking your company's growth. Free. Takes 3–5 minutes.",
};

export default function DiagnosticPage() {
  const config = assessmentConfig as AssessmentConfig;

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
          href="/applied-intelligence"
          className="text-xs font-semibold text-[#94A3B8] transition hover:text-white"
        >
          ← Back to Overview
        </Link>
      </header>

      <main className="mx-auto max-w-3xl px-6 pb-28 pt-6 sm:px-8">
        {/* Page heading */}
        <div className="mb-10 text-center">
          <p className="mb-4 inline-flex rounded-full border border-[#1E293B] bg-[#0B1020]/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#C8A96A]">
            {config.assessment.title}
          </p>
          <h1 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
            Identify the Constraint in Your Business System
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#94A3B8]">
            {config.assessment.estimated_time} · Free · Personalized constraint profile
          </p>
        </div>

        <DiagnosticForm assessmentConfig={config} />

        <p className="mt-6 text-center text-xs text-[#94A3B8]">
          Your answers are private. We use them only to generate your constraint profile.
        </p>
      </main>
    </div>
  );
}
