import type { Metadata } from "next";
import config from "@/content/applied-intellisystems-site-config.json";
import type { AppliedIntellisystemsSiteConfig } from "@/types/applied-intellisystems";
import {
  AppliedIntellisystemsHero,
  ProblemSection,
  AssessmentIntro,
  DiagnosticFrame,
  AppliedIntellisystemsModel,
  WhatWeBuild,
  ExecutionLayer,
  WhyAJDigital,
  BestFitEngagements,
  DiagnosticOffer,
  FinalCTA,
} from "@/components/applied-intelligence/AppliedIntellisystemsSections";

const pageConfig = config as AppliedIntellisystemsSiteConfig;

export const metadata: Metadata = {
  title: pageConfig.meta.title,
  description: pageConfig.meta.description,
};

export default function AppliedIntelligencePage() {
  return (
    <main className="min-h-screen bg-[#05070F]">
      <AppliedIntellisystemsHero config={pageConfig} />
      <ProblemSection config={pageConfig} />
      <AssessmentIntro config={pageConfig} />
      <DiagnosticFrame config={pageConfig} />
      <AppliedIntellisystemsModel config={pageConfig} />
      <WhatWeBuild config={pageConfig} />
      <ExecutionLayer config={pageConfig} />
      <WhyAJDigital config={pageConfig} />
      <BestFitEngagements config={pageConfig} />
      <DiagnosticOffer config={pageConfig} />
      <FinalCTA config={pageConfig} />
    </main>
  );
}
