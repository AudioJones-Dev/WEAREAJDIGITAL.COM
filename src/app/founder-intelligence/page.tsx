import type { Metadata } from "next";
import config from "@/content/founder-intelligence-systems-site-config.json";
import type { FounderIntelligenceSystemsSiteConfig } from "@/types/founder-intelligence-systems";
import {
  FounderIntelligenceSystemsHero,
  ProblemSection,
  AssessmentIntro,
  DiagnosticFrame,
  FounderIntelligenceSystemsModel,
  WhatWeBuild,
  ExecutionLayer,
  WhyAJDigital,
  BestFitEngagements,
  DiagnosticOffer,
  FinalCTA,
} from "@/components/founder-intelligence/FounderIntelligenceSystemsSections";

const pageConfig = config as FounderIntelligenceSystemsSiteConfig;

export const metadata: Metadata = {
  title: pageConfig.meta.title,
  description: pageConfig.meta.description,
};

export default function FounderIntelligencePage() {
  return (
    <main className="min-h-screen bg-[#05070F]">
      <FounderIntelligenceSystemsHero config={pageConfig} />
      <ProblemSection config={pageConfig} />
      <AssessmentIntro config={pageConfig} />
      <DiagnosticFrame config={pageConfig} />
      <FounderIntelligenceSystemsModel config={pageConfig} />
      <WhatWeBuild config={pageConfig} />
      <ExecutionLayer config={pageConfig} />
      <WhyAJDigital config={pageConfig} />
      <BestFitEngagements config={pageConfig} />
      <DiagnosticOffer config={pageConfig} />
      <FinalCTA config={pageConfig} />
    </main>
  );
}
