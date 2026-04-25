"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import type {
  AssessmentConfig,
  AssessmentAnswerMap,
  LeadData,
} from "@/types/applied-intellisystems";
import {
  calculateRawScore,
  calculateCategoryScores,
  normalizeScore,
  classifyTier,
  buildLeadPayload,
} from "@/lib/assessment";

// ── Primitives ────────────────────────────────────────────────────────────────

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-3xl border border-[#1E293B] bg-[#0B1020]/80 shadow-[0_20px_80px_rgba(0,0,0,0.35)] ${className}`}>
      {children}
    </div>
  );
}

function PrimaryBtn({
  children,
  onClick,
  disabled = false,
  type = "button",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="inline-flex items-center justify-center rounded-full bg-[#3B5BFF] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_36px_rgba(59,91,255,0.35)] transition hover:-translate-y-0.5 hover:bg-[#5F7BFF] disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B5BFF]"
    >
      {children}
    </button>
  );
}

function GhostBtn({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center justify-center rounded-full border border-[#1E293B] bg-transparent px-6 py-3 text-sm font-semibold text-[#94A3B8] transition hover:border-[#3B5BFF] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B5BFF]"
    >
      {children}
    </button>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 inline-flex rounded-full border border-[#1E293B] bg-[#0B1020]/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#C8A96A]">
      {children}
    </p>
  );
}

// ── Progress Bar ──────────────────────────────────────────────────────────────

function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="mb-8">
      <div className="mb-2 flex justify-between text-xs text-[#94A3B8]">
        <span>Question {current} of {total}</span>
        <span>{pct}%</span>
      </div>
      <div className="h-1 w-full overflow-hidden rounded-full bg-[#1E293B]">
        <div
          className="h-full rounded-full bg-[#3B5BFF] transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

// ── Step: Lead Capture ────────────────────────────────────────────────────────

function LeadCaptureStep({
  config,
  onNext,
}: {
  config: AssessmentConfig;
  onNext: (data: LeadData) => void;
}) {
  const [form, setForm] = useState<LeadData>({
    name: "",
    company: "",
    email: "",
    website: "",
    phone: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof LeadData, string>>>({});

  const validate = (): boolean => {
    const next: typeof errors = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.company.trim()) next.company = "Company is required";
    if (!form.email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) onNext(form);
  };

  const field = (
    id: keyof LeadData,
    label: string,
    type: string,
    required: boolean,
    placeholder: string
  ) => (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-[#CBD5E1]">
        {label} {required && <span className="text-[#3B5BFF]">*</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        placeholder={placeholder}
        value={form[id] ?? ""}
        onChange={(e) => setForm((p) => ({ ...p, [id]: e.target.value }))}
        className="w-full rounded-2xl border border-[#1E293B] bg-[#05070F] px-4 py-3 text-sm text-[#F8FAFC] placeholder-[#94A3B8]/60 outline-none transition focus:border-[#3B5BFF] focus:ring-1 focus:ring-[#3B5BFF]"
      />
      {errors[id] && (
        <p className="mt-1 text-xs text-red-400">{errors[id]}</p>
      )}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Eyebrow>Applied Intellisystems™ Diagnostic</Eyebrow>
        <h2 className="text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
          Let&apos;s start with a few quick details
        </h2>
        <p className="mt-3 text-[#94A3B8]">
          Your answers stay private and are used only to personalize your constraint profile.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {field("name", "Name", "text", true, "Your name")}
        {field("company", "Company", "text", true, "Company name")}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {field("email", "Email", "email", true, "you@company.com")}
        {field("website", "Website", "url", false, "https://yoursite.com")}
      </div>
      {field("phone", "Phone", "tel", false, "+1 (555) 000-0000")}

      <div className="pt-2">
        <PrimaryBtn type="submit">Start the Diagnostic →</PrimaryBtn>
      </div>
    </form>
  );
}

// ── Step: Question ────────────────────────────────────────────────────────────

function QuestionStep({
  question,
  questionIndex,
  totalQuestions,
  selectedValue,
  onSelect,
  onBack,
  onNext,
}: {
  question: AssessmentConfig["assessment"]["questions"][number];
  questionIndex: number;
  totalQuestions: number;
  selectedValue: string | undefined;
  onSelect: (value: string) => void;
  onBack: () => void;
  onNext: () => void;
}) {
  return (
    <div className="space-y-6">
      <ProgressBar current={questionIndex + 1} total={totalQuestions} />

      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C8A96A]">
          {question.category.replace(/_/g, " ")}
        </p>
        <h2 className="text-xl font-semibold tracking-[-0.02em] text-white sm:text-2xl">
          {question.label}
        </h2>
      </div>

      <div className="space-y-3">
        {question.options.map((option) => {
          const isSelected = selectedValue === option.value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onSelect(option.value)}
              className={`w-full rounded-2xl border px-5 py-4 text-left text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B5BFF] ${
                isSelected
                  ? "border-[#3B5BFF] bg-[#3B5BFF]/15 text-white"
                  : "border-[#1E293B] bg-[#05070F]/70 text-[#CBD5E1] hover:border-[#3B5BFF]/50 hover:text-white"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      <div className="flex items-center gap-3 pt-2">
        <GhostBtn onClick={onBack}>← Back</GhostBtn>
        <PrimaryBtn onClick={onNext} disabled={!selectedValue}>
          {questionIndex + 1 < totalQuestions ? "Next →" : "Finish →"}
        </PrimaryBtn>
      </div>
    </div>
  );
}

// ── Step: Open Response ───────────────────────────────────────────────────────

function OpenResponseStep({
  label,
  value,
  onChange,
  onBack,
  onSubmit,
  isSubmitting,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  onBack: () => void;
  onSubmit: () => void;
  isSubmitting: boolean;
}) {
  return (
    <div className="space-y-6">
      <div>
        <Eyebrow>Final Question</Eyebrow>
        <h2 className="text-xl font-semibold tracking-[-0.02em] text-white sm:text-2xl">
          {label}
        </h2>
        <p className="mt-2 text-sm text-[#94A3B8]">Optional — skip if you prefer.</p>
      </div>

      <textarea
        rows={5}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Share what you are building and what you are trying to scale..."
        className="w-full rounded-2xl border border-[#1E293B] bg-[#05070F] px-4 py-3 text-sm text-[#F8FAFC] placeholder-[#94A3B8]/60 outline-none transition focus:border-[#3B5BFF] focus:ring-1 focus:ring-[#3B5BFF] resize-none"
      />

      <div className="flex items-center gap-3">
        <GhostBtn onClick={onBack}>← Back</GhostBtn>
        <PrimaryBtn onClick={onSubmit} disabled={isSubmitting}>
          {isSubmitting ? "Calculating…" : "Get My Constraint Profile →"}
        </PrimaryBtn>
      </div>
    </div>
  );
}

// ── Main Form Orchestrator ────────────────────────────────────────────────────

const RESULT_KEY = "ais_diagnostic_result";

export default function DiagnosticForm({
  assessmentConfig,
}: {
  assessmentConfig: AssessmentConfig;
}) {
  const router = useRouter();
  const { assessment, result_pages } = assessmentConfig;
  const questions = assessment.questions;

  // Steps: 0 = lead capture, 1..N = questions, N+1 = open response
  const LEAD_STEP = 0;
  const OPEN_STEP = questions.length + 1;

  const [step, setStep] = useState(LEAD_STEP);
  const [lead, setLead] = useState<LeadData | null>(null);
  const [answers, setAnswers] = useState<AssessmentAnswerMap>({});
  const [openResponse, setOpenResponse] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentQuestionIndex = step - 1; // 0-indexed into questions array
  const currentQuestion = questions[currentQuestionIndex];

  const handleLeadNext = useCallback((data: LeadData) => {
    setLead(data);
    setStep(1);
  }, []);

  const handleAnswer = useCallback(
    (value: string) => {
      setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }));
    },
    [currentQuestion]
  );

  const handleQuestionNext = useCallback(() => {
    setStep((s) => s + 1);
  }, []);

  const handleBack = useCallback(() => {
    setStep((s) => Math.max(0, s - 1));
  }, []);

  const handleSubmit = useCallback(async () => {
    if (!lead) return;
    setIsSubmitting(true);

    const rawScore = calculateRawScore(answers, questions);
    const categoryScores = calculateCategoryScores(answers, questions);
    const normalizedScore = normalizeScore(rawScore, assessment.scoring_model.max_score);
    const tier = classifyTier(normalizedScore, assessment.scoring_model.tiers);

    const result = {
      assessmentId: assessment.id,
      rawScore,
      normalizedScore,
      tier,
      categoryScores,
      openResponse: openResponse || undefined,
    };

    const payload = buildLeadPayload(lead, answers, result);

    // Persist result for the results page to read
    try {
      sessionStorage.setItem(
        RESULT_KEY,
        JSON.stringify({ ...result, lead, normalizedScore })
      );
    } catch {
      // sessionStorage unavailable — results page falls back to URL params
    }

    // Log payload (replace with API call when backend is ready)
    console.log("[Applied Intellisystems™ Diagnostic]", payload);

    router.push(
      `/applied-intelligence/results/${tier}?score=${normalizedScore}&name=${encodeURIComponent(lead.name)}`
    );
  }, [lead, answers, openResponse, questions, assessment, router]);

  return (
    <Card className="p-8 lg:p-12">
      {step === LEAD_STEP && (
        <LeadCaptureStep config={assessmentConfig} onNext={handleLeadNext} />
      )}

      {step >= 1 && step <= questions.length && currentQuestion && (
        <QuestionStep
          question={currentQuestion}
          questionIndex={currentQuestionIndex}
          totalQuestions={questions.length}
          selectedValue={answers[currentQuestion.id]}
          onSelect={handleAnswer}
          onBack={handleBack}
          onNext={handleQuestionNext}
        />
      )}

      {step === OPEN_STEP && (
        <OpenResponseStep
          label={assessment.open_response.label}
          value={openResponse}
          onChange={setOpenResponse}
          onBack={handleBack}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      )}
    </Card>
  );
}

export { RESULT_KEY };
