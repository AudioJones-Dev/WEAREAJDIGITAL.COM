"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";
import {
  APPLY_BUDGET_OPTIONS,
  APPLY_DECISION_MAKER_OPTIONS,
  APPLY_TIMELINE_OPTIONS,
} from "@/lib/apply-qualification";
import type { ApplyFormData } from "@/lib/apply-schema";

type ApplyApiResponse =
  | {
      success: true;
      qualified: boolean;
      redirectTo: string | null;
      nextStepMessage: string;
      contactPath: string;
      blogPath: string;
    }
  | {
      success: false;
      message?: string;
      errors?: unknown;
    };

type UnqualifiedState = {
  message: string;
  contactPath: string;
  blogPath: string;
};

type FormData = ApplyFormData;

const INITIAL_DATA: ApplyFormData = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  website: "",
  roleType: "",
  hasPodcast: "",
  servicesInterested: [],
  primaryGoal: "",
  monthlyBudget: "",
  timeline: "",
  decisionMaker: "",
  location: "",
  deliveryMode: "",
};

const stepTitles = [
  "Identity",
  "Context",
  "Services",
  "Goals",
  "Budget",
  "Timeline",
] as const;

export default function ApplyForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [redirectMessage, setRedirectMessage] = useState("");
  const [unqualifiedState, setUnqualifiedState] =
    useState<UnqualifiedState | null>(null);
  const hasTrackedStart = useRef(false);

  const totalSteps = 6;
  const progressPercentage = Math.round((step / totalSteps) * 100);
  const progressLabel =
    step >= totalSteps
      ? "Final step"
      : step >= totalSteps - 1
        ? "Almost there"
        : "Moving quickly";

  const validateStep = () => {
    const newErrors: { [key: string]: string } = {};

    if (step === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
      if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
        newErrors.email = "Valid email is required";
      }
      if (!formData.company.trim()) newErrors.company = "Company or brand is required";
    }

    if (step === 2) {
      if (!formData.roleType) newErrors.roleType = "Please select a role";
      if (!formData.hasPodcast) newErrors.hasPodcast = "Please select podcast status";
    }

    if (step === 3 && formData.servicesInterested.length === 0) {
      newErrors.servicesInterested = "Please select at least one service";
    }

    if (step === 4 && !formData.primaryGoal.trim()) {
      newErrors.primaryGoal = "Please briefly explain your goal";
    }

    if (step === 5 && !formData.monthlyBudget) {
      newErrors.monthlyBudget = "Please select a budget range";
    }

    if (step === 6) {
      if (!formData.timeline) newErrors.timeline = "Please select a timeline";
      if (!formData.decisionMaker) {
        newErrors.decisionMaker = "Please select decision-maker status";
      }
      if (!formData.location) newErrors.location = "Please select a location";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const scrollToFormTop = () => {
    const target = document.getElementById("application-form");
    if (!target) return;
    window.scrollTo({
      top: target.offsetTop - 100,
      behavior: "smooth",
    });
  };

  const trackApplyStart = () => {
    if (hasTrackedStart.current) {
      return;
    }

    hasTrackedStart.current = true;
    trackEvent("apply_start", {
      page: "/apply",
    });
  };

  const nextStep = () => {
    if (validateStep() && step < totalSteps) {
      trackApplyStart();
      trackEvent("apply_step", {
        page: "/apply",
        step: step + 1,
      });
      setStep((prev) => prev + 1);
      scrollToFormTop();
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
      scrollToFormTop();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep()) return;

    trackApplyStart();
    trackEvent("apply_submit", {
      page: "/apply",
      step,
      services_count: formData.servicesInterested.length,
    });

    setIsSubmitting(true);
    setRedirectMessage("");
    setUnqualifiedState(null);

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = (await response.json()) as ApplyApiResponse;

      if (data.success && data.qualified && data.redirectTo) {
        setRedirectMessage(data.nextStepMessage);
        trackEvent("schedule_click", {
          page: "/apply",
          location: "qualified_redirect",
        });
        window.setTimeout(() => {
          window.location.assign(data.redirectTo as string);
        }, 500);
        return;
      }

      if (data.success && !data.qualified) {
        setUnqualifiedState({
          message: data.nextStepMessage,
          contactPath: data.contactPath,
          blogPath: data.blogPath,
        });
        setIsSubmitting(false);
        return;
      }

      console.error("Submission failed validation or broke:", data);
      alert("There was an error submitting the application. Please try again.");
      setIsSubmitting(false);
    } catch (err) {
      console.error("Network error during submission:", err);
      alert("A network error occurred. Please check your connection and try again.");
      setIsSubmitting(false);
    }
  };

  const toggleService = (service: string) => {
    trackApplyStart();
    setFormData((prev) => ({
      ...prev,
      servicesInterested: prev.servicesInterested.includes(service)
        ? prev.servicesInterested.filter((item) => item !== service)
        : [...prev.servicesInterested, service],
    }));
  };

  return (
    <div className="w-full overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950 shadow-2xl">
      <div className="h-2 w-full bg-neutral-900">
        <div
          className="h-full bg-blue-500 transition-all duration-300 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      <div className="p-6 md:p-10">
        <div className="mb-8 flex flex-col gap-4 border-b border-neutral-800 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              {progressPercentage}% complete
            </p>
            <h2 className="mt-2 text-2xl font-bold text-white">
              {stepTitles[step - 1]}
            </h2>
            <p className="mt-2 text-sm text-neutral-400">
              Step {step} of {totalSteps} - {progressLabel.toLowerCase()}.
            </p>
            <p className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">
              Time to complete: ~2 minutes
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-800 bg-black px-4 py-3 text-sm text-neutral-400">
            <p>Takes ~2 minutes.</p>
            <p>We&apos;ll never share your information.</p>
            <p>Built for serious operators, not one-off projects.</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
          data-track="apply-form"
          data-ga-event="apply_form_view"
          data-funnel-step={step}
          onFocusCapture={trackApplyStart}
          onClickCapture={trackApplyStart}
        >
          {redirectMessage ? (
            <div className="rounded-2xl border border-blue-500/20 bg-blue-950/20 px-5 py-4 text-sm leading-7 text-blue-100">
              {redirectMessage}
            </div>
          ) : null}

          {unqualifiedState ? (
            <div className="rounded-3xl border border-neutral-800 bg-black p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Next step
              </p>
              <h3 className="mt-4 text-2xl font-bold text-white">
                Thanks for applying
              </h3>
              <p className="mt-4 text-sm leading-7 text-neutral-300">
                {unqualifiedState.message}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={unqualifiedState.contactPath}
                  className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-500"
                >
                  Contact AJ Digital
                </Link>
                <Link
                  href={unqualifiedState.blogPath}
                  className="inline-flex items-center justify-center rounded-lg border border-neutral-700 px-6 py-3 font-semibold text-white transition-colors hover:border-neutral-500 hover:bg-neutral-900"
                >
                  Explore the Blog
                </Link>
              </div>
              <p className="mt-5 text-xs leading-6 text-neutral-500">
                When your timing, budget, or decision-making context changes,
                you can return and reapply.
              </p>
            </div>
          ) : null}

          {!unqualifiedState && step === 1 && (
            <div className="animate-in slide-in-from-bottom-4 space-y-5 duration-300">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-neutral-300">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-white transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <p className="mt-1 text-xs text-neutral-500">
                    Use the best name for scheduling and follow-up.
                  </p>
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-400">{errors.fullName}</p>
                  )}
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-neutral-300">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-white transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <p className="mt-1 text-xs text-neutral-500">
                    We&apos;ll send confirmation and next steps here.
                  </p>
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-neutral-300">
                    Company or Brand *
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-white transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <p className="mt-1 text-xs text-neutral-500">
                    This helps us understand the business context quickly.
                  </p>
                  {errors.company && (
                    <p className="mt-1 text-xs text-red-400">{errors.company}</p>
                  )}
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-neutral-300">
                    Website or Social URL
                  </label>
                  <input
                    type="url"
                    placeholder="https://"
                    value={formData.website}
                    onChange={(e) =>
                      setFormData({ ...formData, website: e.target.value })
                    }
                    className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-white transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <p className="mt-1 text-xs text-neutral-500">
                    Optional, but useful if you want faster, better-fit feedback.
                  </p>
                </div>
              </div>
            </div>
          )}

          {!unqualifiedState && step === 2 && (
            <div className="animate-in slide-in-from-bottom-4 space-y-8 duration-300">
              <div>
                <label className="mb-3 block text-sm font-medium text-neutral-300">
                  What best describes you? *
                </label>
                <p className="mb-3 text-xs text-neutral-500">
                  We use this to understand how the system would need to fit your business.
                </p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {[
                    "Entrepreneur",
                    "Coach / Consultant",
                    "Creator / Personal Brand",
                    "Church / Organization",
                    "Other",
                  ].map((role) => (
                    <button
                      key={role}
                      type="button"
                      onClick={() => setFormData({ ...formData, roleType: role })}
                      className={`rounded-lg border px-4 py-3 text-left transition-all ${
                        formData.roleType === role
                          ? "border-blue-500 bg-blue-900/30 text-blue-400"
                          : "border-neutral-700 bg-neutral-900 text-neutral-300 hover:border-neutral-500"
                      }`}
                    >
                      {role}
                    </button>
                  ))}
                </div>
                {errors.roleType && (
                  <p className="mt-1 text-xs text-red-400">{errors.roleType}</p>
                )}
              </div>

              <div>
                <label className="mb-3 block text-sm font-medium text-neutral-300">
                  Do you currently have a podcast? *
                </label>
                <p className="mb-3 text-xs text-neutral-500">
                  This helps us understand whether the starting point is launch, cleanup, or scale.
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {["Yes, active", "Yes, inactive", "No, starting from scratch"].map(
                    (status) => (
                      <button
                        key={status}
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, hasPodcast: status })
                        }
                        className={`rounded-lg border px-4 py-3 text-left transition-all ${
                          formData.hasPodcast === status
                            ? "border-blue-500 bg-blue-900/30 text-blue-400"
                            : "border-neutral-700 bg-neutral-900 text-neutral-300 hover:border-neutral-500"
                        }`}
                      >
                        {status}
                      </button>
                    ),
                  )}
                </div>
                {errors.hasPodcast && (
                  <p className="mt-1 text-xs text-red-400">{errors.hasPodcast}</p>
                )}
              </div>
            </div>
          )}

          {!unqualifiedState && step === 3 && (
            <div className="animate-in slide-in-from-bottom-4 space-y-6 duration-300">
              <div>
                <label className="mb-3 block text-sm font-medium text-neutral-300">
                  What are you interested in? *
                </label>
                <p className="mb-4 text-xs text-neutral-500">
                  Select the systems you want help implementing. Most qualified applicants have one primary priority.
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    {
                      id: "Podcast Production",
                      desc: "Strategy, recording, editing, and publishing support.",
                    },
                    {
                      id: "Content Systems",
                      desc: "Repurposing workflows that turn one recording into multiple assets.",
                    },
                    {
                      id: "AI Consulting",
                      desc: "Practical AI workflow design and implementation.",
                    },
                    {
                      id: "Full Authority Engine",
                      desc: "The full podcast, AI, and content system together.",
                    },
                  ].map((service) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => toggleService(service.id)}
                      className={`flex flex-col rounded-lg border px-5 py-4 text-left transition-all ${
                        formData.servicesInterested.includes(service.id)
                          ? "border-blue-500 bg-blue-900/30 text-blue-400"
                          : "border-neutral-700 bg-neutral-900 text-neutral-300 hover:border-neutral-500"
                      }`}
                    >
                      <span className="font-bold text-white">{service.id}</span>
                      <span className="mt-1 text-sm">{service.desc}</span>
                    </button>
                  ))}
                </div>
                {errors.servicesInterested && (
                  <p className="mt-2 text-xs text-red-400">
                    {errors.servicesInterested}
                  </p>
                )}
              </div>
            </div>
          )}

          {!unqualifiedState && step === 4 && (
            <div className="animate-in slide-in-from-bottom-4 space-y-6 duration-300">
              <div>
                <label className="mb-3 block text-sm font-medium text-neutral-300">
                  What is your primary goal with content or systems? *
                </label>
                <p className="mb-3 text-xs text-neutral-500">
                  A clear goal helps us qualify quickly. Example: generate leads, increase output, reclaim team time, or build a system around a founder show.
                </p>
                <textarea
                  rows={5}
                  value={formData.primaryGoal}
                  onChange={(e) =>
                    setFormData({ ...formData, primaryGoal: e.target.value })
                  }
                  className="w-full resize-none rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-white transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="We want to..."
                />
                {errors.primaryGoal && (
                  <p className="mt-1 text-xs text-red-400">{errors.primaryGoal}</p>
                )}
              </div>
            </div>
          )}

          {!unqualifiedState && step === 5 && (
            <div className="animate-in slide-in-from-bottom-4 space-y-6 duration-300">
              <div>
                <label className="mb-3 block text-sm font-medium text-neutral-300">
                  What level are you prepared to invest monthly? *
                </label>
                <p className="mb-4 text-xs text-neutral-500">
                  We use this to scope the right level of implementation, not to force-fit you into something unnecessary.
                </p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {APPLY_BUDGET_OPTIONS.map(
                    (budget) => (
                      <button
                        key={budget}
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, monthlyBudget: budget })
                        }
                        className={`rounded-lg border px-4 py-4 text-center font-bold transition-all ${
                          formData.monthlyBudget === budget
                            ? "border-blue-500 bg-blue-900/30 text-blue-400"
                            : "border-neutral-700 bg-neutral-900 text-neutral-300 hover:border-neutral-500"
                        }`}
                      >
                        {budget}
                      </button>
                    ),
                  )}
                </div>
                {errors.monthlyBudget && (
                  <p className="mt-2 text-xs text-red-400">
                    {errors.monthlyBudget}
                  </p>
                )}
              </div>
            </div>
          )}

          {!unqualifiedState && step === 6 && (
            <div className="animate-in slide-in-from-bottom-4 space-y-8 duration-300">
              <div>
                <label className="mb-3 block text-sm font-medium text-neutral-300">
                  When are you looking to start? *
                </label>
                <p className="mb-3 text-xs text-neutral-500">
                  Timing helps us gauge urgency and fit.
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {APPLY_TIMELINE_OPTIONS.map(
                    (time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setFormData({ ...formData, timeline: time })}
                        className={`rounded-lg border px-5 py-4 text-left transition-all ${
                          formData.timeline === time
                            ? "border-blue-500 bg-blue-900/30 text-blue-400"
                            : "border-neutral-700 bg-neutral-900 text-neutral-300 hover:border-neutral-500"
                        }`}
                      >
                        {time}
                      </button>
                    ),
                  )}
                </div>
                {errors.timeline && (
                  <p className="mt-2 text-xs text-red-400">{errors.timeline}</p>
                )}
              </div>

              <div>
                <label className="mb-3 block text-sm font-medium text-neutral-300">
                  Are you a decision maker for this project? *
                </label>
                <p className="mb-3 text-xs text-neutral-500">
                  This helps us understand how quickly the project can move if
                  there is a fit.
                </p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {APPLY_DECISION_MAKER_OPTIONS.map((decision) => (
                    <button
                      key={decision}
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, decisionMaker: decision })
                      }
                      className={`rounded-lg border px-4 py-4 text-center font-bold transition-all ${
                        formData.decisionMaker === decision
                          ? "border-blue-500 bg-blue-900/30 text-blue-400"
                          : "border-neutral-700 bg-neutral-900 text-neutral-300 hover:border-neutral-500"
                      }`}
                    >
                      {decision}
                    </button>
                  ))}
                </div>
                {errors.decisionMaker && (
                  <p className="mt-2 text-xs text-red-400">
                    {errors.decisionMaker}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-3 block text-sm font-medium text-neutral-300">
                  Where are you located? *
                </label>
                <p className="mb-3 text-xs text-neutral-500">
                  We work remotely, with local availability across South Florida.
                </p>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                  {["Miami-Dade", "Broward", "Palm Beach", "Fort Myers", "Other"].map(
                    (location) => (
                      <button
                        key={location}
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, location })
                        }
                        className={`rounded-lg border px-3 py-3 text-center transition-all ${
                          formData.location === location
                            ? "border-blue-500 bg-blue-900/30 text-blue-400"
                            : "border-neutral-700 bg-neutral-900 text-neutral-300 hover:border-neutral-500"
                        }`}
                      >
                        {location}
                      </button>
                    ),
                  )}
                </div>
                {errors.location && (
                  <p className="mt-2 text-xs text-red-400">{errors.location}</p>
                )}
              </div>
            </div>
          )}

          {!unqualifiedState ? (
            <div className="mt-8 flex border-t border-neutral-800 pt-8">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                data-track="apply-form-back"
                data-ga-event="apply_form_back_click"
                className="mr-auto rounded-lg border border-neutral-700 px-6 py-3 font-semibold text-neutral-300 transition-all hover:bg-neutral-800"
              >
                Back
              </button>
            )}
            {step < totalSteps && (
              <button
                type="button"
                onClick={nextStep}
                data-track="apply-form-next"
                data-ga-event="apply_form_next_click"
                className="ml-auto rounded-lg bg-blue-600 px-8 py-3 font-bold text-white shadow-lg transition-all hover:bg-blue-500 hover:shadow-blue-500/25"
              >
                Continue
              </button>
            )}
            {step === totalSteps && (
              <button
                type="submit"
                disabled={isSubmitting}
                data-track="apply-form-submit"
                data-ga-event="apply_form_submit_click"
                className="ml-auto flex min-w-[240px] items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-10 py-3 font-bold text-white shadow-lg transition-all hover:shadow-blue-500/30 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? (
                  <svg
                    className="h-5 w-5 animate-spin text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                ) : (
                  "Submit Application"
                )}
              </button>
            )}
            </div>
          ) : null}
        </form>
      </div>
    </div>
  );
}
