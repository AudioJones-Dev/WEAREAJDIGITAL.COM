import Link from "next/link";
import type { AppliedIntellisystemsSiteConfig, CTA } from "@/types/applied-intellisystems";

// ── Primitives ────────────────────────────────────────────────────────────────

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative px-6 py-20 sm:px-8 lg:px-12 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 inline-flex rounded-full border border-[#1E293B] bg-[#0B1020]/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#C8A96A]">
      {children}
    </p>
  );
}

function PrimaryButton({ cta }: { cta: CTA }) {
  return (
    <Link
      href={cta.href}
      className="inline-flex items-center justify-center rounded-full bg-[#3B5BFF] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_36px_rgba(59,91,255,0.35)] transition hover:-translate-y-0.5 hover:bg-[#5F7BFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B5BFF]"
    >
      {cta.label}
    </Link>
  );
}

function SecondaryButton({ cta }: { cta: CTA }) {
  return (
    <Link
      href={cta.href}
      className="inline-flex items-center justify-center rounded-full border border-[#1E293B] bg-[#0B1020]/70 px-7 py-3.5 text-sm font-semibold text-[#F8FAFC] transition hover:border-[#3B5BFF] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B5BFF]"
    >
      {cta.label}
    </Link>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-3xl border border-[#1E293B] bg-[#0B1020]/80 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] ${className}`}
    >
      {children}
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────

export function AppliedIntellisystemsHero({
  config,
}: {
  config: AppliedIntellisystemsSiteConfig;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[#05070F] px-6 pb-20 pt-10 text-[#F8FAFC] sm:px-8 lg:px-12 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(59,91,255,0.28),transparent_34%),radial-gradient(circle_at_20%_20%,rgba(9,17,187,0.35),transparent_32%)]" />

      <div className="mx-auto max-w-7xl">
        {/* Minimal standalone nav */}
        <header className="mb-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-sm font-bold tracking-[0.24em] text-white hover:text-[#C8A96A] transition-colors"
          >
            {config.brand.name}
          </Link>
          <Link
            href={config.hero.primary_cta.href}
            className="hidden rounded-full border border-[#1E293B] px-4 py-2 text-xs font-semibold text-[#94A3B8] transition hover:border-[#3B5BFF] hover:text-white sm:inline-flex"
          >
            Start Diagnostic
          </Link>
        </header>

        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Copy */}
          <div>
            <Eyebrow>{config.hero.eyebrow}</Eyebrow>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              {config.hero.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#CBD5E1] sm:text-xl">
              {config.hero.subheadline}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#94A3B8]">
              {config.hero.supporting}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton cta={config.hero.primary_cta} />
              <SecondaryButton cta={config.hero.secondary_cta} />
            </div>
            <p className="mt-5 text-sm text-[#94A3B8]">{config.hero.microcopy}</p>
          </div>

          {/* System model visual */}
          <Card className="relative overflow-hidden p-0">
            <div className="border-b border-[#1E293B] px-5 py-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#C8A96A]">
                Signal → Structure → Execution → Feedback
              </p>
            </div>
            <div className="grid gap-3 p-5">
              {config.model.layers.map((layer, index) => (
                <div
                  key={layer.name}
                  className="flex items-start gap-4 rounded-2xl border border-[#1E293B] bg-[#05070F]/70 p-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0911BB] text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{layer.name}</h3>
                    <p className="mt-0.5 text-xs text-[#94A3B8]">{layer.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

// ── Problem ───────────────────────────────────────────────────────────────────

export function ProblemSection({
  config,
}: {
  config: AppliedIntellisystemsSiteConfig;
}) {
  return (
    <Section className="bg-[#05070F] text-white">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Eyebrow>Constraint Diagnosis</Eyebrow>
          <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">
            {config.problem.heading}
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#94A3B8]">{config.problem.intro}</p>
        </div>
        <Card>
          <div className="grid gap-3 sm:grid-cols-2">
            {config.problem.points.map((point) => (
              <div
                key={point}
                className="rounded-2xl border border-[#1E293B] bg-[#05070F]/70 p-4 text-sm leading-6 text-[#CBD5E1]"
              >
                {point}
              </div>
            ))}
          </div>
          <p className="mt-5 rounded-2xl border border-[#C8A96A]/30 bg-[#C8A96A]/10 p-5 text-base font-semibold text-[#F8FAFC]">
            {config.problem.key_line}
          </p>
        </Card>
      </div>
    </Section>
  );
}

// ── Assessment Intro ──────────────────────────────────────────────────────────

export function AssessmentIntro({
  config,
}: {
  config: AppliedIntellisystemsSiteConfig;
}) {
  return (
    <Section className="bg-[#071024] text-white">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <Eyebrow>3–5 Minute Diagnostic</Eyebrow>
          <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">
            {config.assessment_intro.heading}
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#94A3B8]">
            {config.assessment_intro.copy}
          </p>
          <div className="mt-8">
            <PrimaryButton cta={config.assessment_intro.cta} />
          </div>
        </div>
        <Card>
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-[#C8A96A]">
            Measures
          </p>
          <div className="space-y-3">
            {config.assessment_intro.measures.map((measure) => (
              <div
                key={measure}
                className="flex items-center gap-3 rounded-2xl bg-[#05070F]/70 px-4 py-3 text-sm text-[#CBD5E1]"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#3B5BFF]" />
                {measure}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
}

// ── Diagnostic Frame ──────────────────────────────────────────────────────────

export function DiagnosticFrame({
  config,
}: {
  config: AppliedIntellisystemsSiteConfig;
}) {
  return (
    <Section className="bg-[#05070F] text-white">
      <div className="mb-10 max-w-3xl">
        <Eyebrow>Diagnostic First</Eyebrow>
        <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">
          {config.diagnostic_frame.heading}
        </h2>
        <p className="mt-5 text-lg leading-8 text-[#94A3B8]">
          {config.diagnostic_frame.copy}
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {config.diagnostic_frame.categories.map((category) => (
          <Card key={category.area}>
            <h3 className="text-xl font-semibold text-white">{category.area}</h3>
            <p className="mt-3 text-[#94A3B8]">{category.question}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

// ── Applied Intellisystems™ Model ─────────────────────────────────────────────

export function AppliedIntellisystemsModel({
  config,
}: {
  config: AppliedIntellisystemsSiteConfig;
}) {
  return (
    <Section id={config.model.id} className="bg-[#071024] text-white">
      <div className="mb-12 max-w-3xl">
        <Eyebrow>System Model</Eyebrow>
        <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">
          {config.model.heading}
        </h2>
        <p className="mt-5 text-lg leading-8 text-[#94A3B8]">{config.model.copy}</p>
      </div>
      <div className="grid gap-5 lg:grid-cols-4">
        {config.model.layers.map((layer, index) => (
          <Card key={layer.name} className="flex flex-col">
            <p className="font-mono text-xs text-[#C8A96A]">0{index + 1}</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">{layer.name}</h3>
            <p className="mt-2 text-sm text-[#94A3B8]">{layer.description}</p>
            <ul className="mt-5 space-y-2 text-sm text-[#CBD5E1]">
              {layer.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-[#3B5BFF]" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}

// ── What We Build ─────────────────────────────────────────────────────────────

export function WhatWeBuild({
  config,
}: {
  config: AppliedIntellisystemsSiteConfig;
}) {
  return (
    <Section className="bg-[#05070F] text-white">
      <div className="mb-10 max-w-3xl">
        <Eyebrow>Execution Outputs</Eyebrow>
        <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">
          {config.builds.heading}
        </h2>
        <p className="mt-5 text-lg leading-8 text-[#94A3B8]">{config.builds.copy}</p>
      </div>
      <div className="overflow-hidden rounded-3xl border border-[#1E293B]">
        {config.builds.items.map((item) => (
          <div
            key={item.system}
            className="grid gap-3 border-b border-[#1E293B] bg-[#0B1020]/70 p-5 last:border-b-0 md:grid-cols-[0.35fr_0.65fr]"
          >
            <h3 className="font-semibold text-white">{item.system}</h3>
            <p className="text-[#94A3B8]">{item.output}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ── Execution Layer ───────────────────────────────────────────────────────────

export function ExecutionLayer({
  config,
}: {
  config: AppliedIntellisystemsSiteConfig;
}) {
  return (
    <Section className="bg-[#071024] text-white">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Eyebrow>Internal Layer</Eyebrow>
          <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">
            {config.execution_layer.heading}
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#94A3B8]">
            {config.execution_layer.description}
          </p>
        </div>
        <Card>
          <div className="grid gap-3 sm:grid-cols-2">
            {config.execution_layer.capabilities.map((capability) => (
              <div
                key={capability}
                className="rounded-2xl border border-[#1E293B] bg-[#05070F]/70 p-4 text-sm text-[#CBD5E1]"
              >
                {capability}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
}

// ── Why AJ DIGITAL ────────────────────────────────────────────────────────────

export function WhyAJDigital({
  config,
}: {
  config: AppliedIntellisystemsSiteConfig;
}) {
  return (
    <Section className="bg-[#05070F] text-white">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Eyebrow>Why AJ DIGITAL</Eyebrow>
          <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">
            {config.why.heading}
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#94A3B8]">{config.why.copy}</p>
          <p className="mt-6 rounded-2xl border border-[#3B5BFF]/40 bg-[#3B5BFF]/10 p-5 text-base font-semibold text-white">
            {config.why.key_line}
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 content-start">
          {config.why.points.map((point) => (
            <Card key={point} className="p-5">
              <p className="font-semibold text-white">{point}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ── Best-Fit Engagements ──────────────────────────────────────────────────────

export function BestFitEngagements({
  config,
}: {
  config: AppliedIntellisystemsSiteConfig;
}) {
  return (
    <Section id="fit" className="bg-[#071024] text-white">
      <div className="mb-10 max-w-3xl">
        <Eyebrow>Fit Filter</Eyebrow>
        <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">
          {config.fit.heading}
        </h2>
        <p className="mt-5 text-lg leading-8 text-[#94A3B8]">{config.fit.copy}</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <h3 className="text-xl font-semibold text-white">Best fit if you need</h3>
          <ul className="mt-5 space-y-3 text-[#CBD5E1]">
            {config.fit.best_fit.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 text-[#3B5BFF]" aria-hidden>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </Card>
        <Card>
          <h3 className="text-xl font-semibold text-white">Not best fit if</h3>
          <ul className="mt-5 space-y-3 text-[#94A3B8]">
            {config.fit.not_fit.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 shrink-0 text-[#94A3B8]" aria-hidden>—</span>
                {item}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  );
}

// ── Diagnostic Offer ──────────────────────────────────────────────────────────

export function DiagnosticOffer({
  config,
}: {
  config: AppliedIntellisystemsSiteConfig;
}) {
  return (
    <Section className="bg-[#05070F] text-white">
      <Card className="grid gap-10 p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
        <div>
          <Eyebrow>Strategic Diagnostic</Eyebrow>
          <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">
            {config.diagnostic_offer.heading}
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#94A3B8]">
            {config.diagnostic_offer.copy}
          </p>
          <div className="mt-8">
            <PrimaryButton cta={config.diagnostic_offer.cta} />
          </div>
        </div>
        <div className="grid gap-3 content-start sm:grid-cols-2">
          {config.diagnostic_offer.deliverables.map((deliverable) => (
            <div
              key={deliverable}
              className="rounded-2xl border border-[#1E293B] bg-[#05070F]/70 p-4 text-sm leading-6 text-[#CBD5E1]"
            >
              {deliverable}
            </div>
          ))}
        </div>
      </Card>
    </Section>
  );
}

// ── Final CTA ─────────────────────────────────────────────────────────────────

export function FinalCTA({
  config,
}: {
  config: AppliedIntellisystemsSiteConfig;
}) {
  return (
    <Section className="bg-[#05070F] pb-28 text-white">
      <div className="rounded-[2rem] border border-[#1E293B] bg-[radial-gradient(circle_at_top_right,rgba(59,91,255,0.32),transparent_36%),#0B1020] p-8 text-center shadow-[0_30px_120px_rgba(59,91,255,0.15)] lg:p-14">
        <Eyebrow>Start Here</Eyebrow>
        <h2 className="mx-auto max-w-4xl text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">
          {config.final_cta.headline}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#94A3B8]">
          {config.final_cta.subheadline}
        </p>
        <div className="mt-8">
          <PrimaryButton cta={config.final_cta.cta} />
        </div>
      </div>
    </Section>
  );
}
