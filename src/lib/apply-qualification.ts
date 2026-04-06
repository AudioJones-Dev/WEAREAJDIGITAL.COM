import type { ApplyFormData } from "@/lib/apply-schema";
import {
  BLOG_PATH,
  CALENDLY_STRATEGY_SESSION_URL,
  CONTACT_PATH,
} from "@/lib/site";

export const APPLY_BUDGET_OPTIONS = [
  "$500-$1,500",
  "$1,500-$3,000",
  "$3,000-$5,000",
  "$5,000+",
] as const;

export const APPLY_TIMELINE_OPTIONS = [
  "ASAP",
  "Within 30 days",
  "Within 60 days",
  "Just exploring",
] as const;

export const APPLY_DECISION_MAKER_OPTIONS = [
  "Yes",
  "Partially",
  "No",
] as const;

export const QUALIFIED_BUDGETS = new Set<string>([
  "$1,500-$3,000",
  "$3,000-$5,000",
  "$5,000+",
]);

export const QUALIFIED_TIMELINES = new Set<string>([
  "ASAP",
  "Within 30 days",
  "Within 60 days",
]);

export const QUALIFIED_DECISION_MAKERS = new Set<string>(["Yes", "Partially"]);

export type QualificationResult = {
  qualified: boolean;
  redirectTo: string | null;
  nextStepMessage: string;
  contactPath: string;
  blogPath: string;
};

export function evaluateApplyQualification(
  payload: ApplyFormData,
): QualificationResult {
  const qualified =
    QUALIFIED_BUDGETS.has(payload.monthlyBudget) &&
    QUALIFIED_TIMELINES.has(payload.timeline) &&
    QUALIFIED_DECISION_MAKERS.has(payload.decisionMaker);

  if (qualified) {
    return {
      qualified: true,
      redirectTo: CALENDLY_STRATEGY_SESSION_URL,
      nextStepMessage:
        "You look like a strong fit. Redirecting you to book your strategy session now.",
      contactPath: CONTACT_PATH,
      blogPath: BLOG_PATH,
    };
  }

  return {
    qualified: false,
    redirectTo: null,
    nextStepMessage:
      "Thanks for applying. Based on your current timing, budget, or decision-making context, the best next step is to review our resources or reach out with a general inquiry.",
    contactPath: CONTACT_PATH,
    blogPath: BLOG_PATH,
  };
}
