// ── Site Config Types ─────────────────────────────────────────────────────────

export type CTA = {
  label: string;
  href: string;
};

export type AppliedIntellisystemsSiteConfig = {
  meta: {
    title: string;
    description: string;
    path: string;
  };
  brand: {
    name: string;
    category: string;
    definition: string;
    one_liner: string;
  };
  conversion_model: {
    type: string;
    primary_path: string;
    primary_cta: string;
    secondary_cta: string;
    assessment_route: string;
    results_route: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    supporting: string;
    primary_cta: CTA;
    secondary_cta: CTA;
    microcopy: string;
  };
  problem: {
    heading: string;
    intro: string;
    points: string[];
    key_line: string;
  };
  assessment_intro: {
    heading: string;
    copy: string;
    measures: string[];
    cta: CTA;
  };
  diagnostic_frame: {
    heading: string;
    copy: string;
    categories: Array<{ area: string; question: string }>;
  };
  model: {
    id: string;
    heading: string;
    copy: string;
    layers: Array<{
      name: string;
      description: string;
      items: string[];
    }>;
  };
  builds: {
    heading: string;
    copy: string;
    items: Array<{ system: string; output: string }>;
  };
  execution_layer: {
    heading: string;
    description: string;
    positioning_note: string;
    capabilities: string[];
  };
  why: {
    heading: string;
    copy: string;
    points: string[];
    key_line: string;
  };
  fit: {
    heading: string;
    copy: string;
    best_fit: string[];
    not_fit: string[];
  };
  diagnostic_offer: {
    heading: string;
    copy: string;
    deliverables: string[];
    cta: CTA;
  };
  final_cta: {
    headline: string;
    subheadline: string;
    cta: CTA;
  };
};

// ── Assessment Types ──────────────────────────────────────────────────────────

export type QuestionOption = {
  value: string;
  label: string;
  points: number;
};

export type Question = {
  id: string;
  category: string;
  label: string;
  options: QuestionOption[];
};

export type LeadCaptureField = {
  id: string;
  label: string;
  type: string;
  required: boolean;
};

export type ResultTier = {
  id: "hot" | "warm" | "cold";
  label: string;
  min: number;
  max: number;
  route: string;
  primary_cta: string;
};

export type ScoringModel = {
  type: string;
  questions: number;
  points_per_question: { min: number; max: number };
  max_score: number;
  normalized_score_formula: string;
  tiers: ResultTier[];
};

export type ResultPage = {
  tier_label: string;
  headline: string;
  summary: string;
  insights: string[];
  primary_cta: CTA;
  secondary_cta: CTA;
};

export type AssessmentConfig = {
  assessment: {
    id: string;
    title: string;
    route: string;
    estimated_time: string;
    scoring_model: ScoringModel;
    lead_capture: LeadCaptureField[];
    questions: Question[];
    open_response: {
      id: string;
      label: string;
      type: string;
      required: boolean;
    };
  };
  result_pages: {
    hot: ResultPage;
    warm: ResultPage;
    cold: ResultPage;
  };
};

// ── Runtime Assessment State ──────────────────────────────────────────────────

export type AssessmentAnswerMap = Record<string, string>;

export type LeadData = {
  name: string;
  company: string;
  email: string;
  website?: string;
  phone?: string;
};

export type CategoryScores = Record<string, number>;

export type AssessmentResult = {
  rawScore: number;
  normalizedScore: number;
  tier: "hot" | "warm" | "cold";
  categoryScores: CategoryScores;
  answers: AssessmentAnswerMap;
  openResponse?: string;
  lead: LeadData;
  submittedAt: string;
};
