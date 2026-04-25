import type {
  Question,
  AssessmentAnswerMap,
  CategoryScores,
  ResultTier,
} from "@/types/applied-intellisystems";

export function calculateRawScore(
  answers: AssessmentAnswerMap,
  questions: Question[]
): number {
  return questions.reduce((total, question) => {
    const selectedValue = answers[question.id];
    if (!selectedValue) return total;
    const option = question.options.find((o) => o.value === selectedValue);
    return total + (option?.points ?? 0);
  }, 0);
}

export function calculateCategoryScores(
  answers: AssessmentAnswerMap,
  questions: Question[]
): CategoryScores {
  const scores: CategoryScores = {};
  for (const question of questions) {
    const selectedValue = answers[question.id];
    if (!selectedValue) continue;
    const option = question.options.find((o) => o.value === selectedValue);
    const pts = option?.points ?? 0;
    scores[question.category] = (scores[question.category] ?? 0) + pts;
  }
  return scores;
}

export function normalizeScore(rawScore: number, maxScore: number): number {
  return Math.round((rawScore / maxScore) * 100);
}

export function classifyTier(
  normalizedScore: number,
  tiers: ResultTier[]
): "hot" | "warm" | "cold" {
  for (const tier of tiers) {
    if (normalizedScore >= tier.min && normalizedScore <= tier.max) {
      return tier.id;
    }
  }
  return "cold";
}

export type LeadPayload = {
  lead: {
    name: string;
    company: string;
    email: string;
    website?: string;
    phone?: string;
  };
  assessment: {
    assessmentId: string;
    rawScore: number;
    normalizedScore: number;
    tier: string;
    categoryScores: CategoryScores;
    answers: AssessmentAnswerMap;
    openResponse?: string;
  };
  tracking: {
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    referrer?: string;
    pagePath: string;
    submittedAt: string;
  };
};

export function buildLeadPayload(
  formData: { name: string; company: string; email: string; website?: string; phone?: string },
  answers: AssessmentAnswerMap,
  result: {
    assessmentId: string;
    rawScore: number;
    normalizedScore: number;
    tier: string;
    categoryScores: CategoryScores;
    openResponse?: string;
  },
  tracking?: Partial<LeadPayload["tracking"]>
): LeadPayload {
  return {
    lead: formData,
    assessment: {
      assessmentId: result.assessmentId,
      rawScore: result.rawScore,
      normalizedScore: result.normalizedScore,
      tier: result.tier,
      categoryScores: result.categoryScores,
      answers,
      openResponse: result.openResponse,
    },
    tracking: {
      pagePath: "/applied-intelligence/diagnostic",
      submittedAt: new Date().toISOString(),
      ...tracking,
    },
  };
}
