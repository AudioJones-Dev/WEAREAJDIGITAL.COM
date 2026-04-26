import { Resend } from "resend";
import { ApplyFormData } from "./apply-schema";
import { evaluateApplyQualification } from "./apply-qualification";
import type { LeadPayload } from "./assessment";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

const NOTIFICATION_EMAIL =
  process.env.APPLY_NOTIFICATION_EMAIL || "dev@audiojones.com";
const FROM_EMAIL =
  process.env.EMAIL_FROM || "Acquisitions <onboarding@resend.dev>";

export async function sendBusinessNotification(payload: ApplyFormData) {
  const qualification = evaluateApplyQualification(payload);
  const serviceTopic =
    payload.servicesInterested.length > 0
      ? payload.servicesInterested[0]
      : "General Strategy";

  const subject = `New AJ Digital Application - ${payload.fullName} - ${serviceTopic}`;

  const textBody = `
NEW AJ DIGITAL APPLICATION:

IDENTITY
-------------
Name: ${payload.fullName}
Email: ${payload.email}
Phone: ${payload.phone || "N/A"}
Company: ${payload.company}
Website: ${payload.website || "N/A"}

CONTEXT
-------------
Role: ${payload.roleType}
Has Podcast: ${payload.hasPodcast}
Services of Interest: ${payload.servicesInterested.join(", ")}

GOALS AND LOGISTICS
-------------
Primary Goal: ${payload.primaryGoal}
Monthly Budget: ${payload.monthlyBudget}
Start Timeline: ${payload.timeline}
Decision Maker: ${payload.decisionMaker}

Location: ${payload.location}
Delivery Mode: ${payload.deliveryMode}

QUALIFICATION
-------------
Qualified: ${qualification.qualified ? "Yes" : "No"}
Next Step Message: ${qualification.nextStepMessage}

Submitted: ${new Date().toISOString()}
`;

  if (!resend) {
    if (process.env.NODE_ENV === "production") {
      console.error("[apply] RESEND_API_KEY is not configured");
      return { success: false, error: "RESEND_API_KEY is not configured" };
    }
    console.log("==========================================");
    console.log("EMAIL SYSTEM OFFLINE. WOULD HAVE SENT:");
    console.log("SUBJECT:", subject);
    console.log(textBody);
    console.log("==========================================");
    return { success: true, simulated: true };
  }

  try {
    const data = await resend.emails.send({
      from: FROM_EMAIL,
      to: NOTIFICATION_EMAIL,
      subject,
      text: textBody,
    });

    return { success: true, data };
  } catch (error) {
    console.error("Email delivery failed:", error);
    return { success: false, error };
  }
}

export async function sendDiagnosticNotification(payload: LeadPayload) {
  const subject = `New Applied Intellisystems Diagnostic - ${payload.lead.name} - ${payload.assessment.tier}`;
  const categoryScores = Object.entries(payload.assessment.categoryScores)
    .map(([category, score]) => `${category}: ${score}`)
    .join("\n");
  const answers = Object.entries(payload.assessment.answers)
    .map(([question, answer]) => `${question}: ${answer}`)
    .join("\n");

  const textBody = `
NEW APPLIED INTELLISYSTEMS DIAGNOSTIC:

IDENTITY
-------------
Name: ${payload.lead.name}
Email: ${payload.lead.email}
Phone: ${payload.lead.phone || "N/A"}
Company: ${payload.lead.company}
Website: ${payload.lead.website || "N/A"}

RESULT
-------------
Assessment ID: ${payload.assessment.assessmentId}
Tier: ${payload.assessment.tier}
Raw Score: ${payload.assessment.rawScore}
Normalized Score: ${payload.assessment.normalizedScore}

CATEGORY SCORES
-------------
${categoryScores || "N/A"}

ANSWERS
-------------
${answers || "N/A"}

OPEN RESPONSE
-------------
${payload.assessment.openResponse || "N/A"}

TRACKING
-------------
Page Path: ${payload.tracking.pagePath}
Submitted: ${payload.tracking.submittedAt}
Referrer: ${payload.tracking.referrer || "N/A"}
UTM Source: ${payload.tracking.utm_source || "N/A"}
UTM Medium: ${payload.tracking.utm_medium || "N/A"}
UTM Campaign: ${payload.tracking.utm_campaign || "N/A"}
`;

  if (!resend) {
    if (process.env.NODE_ENV === "production") {
      console.error("[diagnostic] RESEND_API_KEY is not configured");
      return { success: false, error: "RESEND_API_KEY is not configured" };
    }

    console.log("==========================================");
    console.log("DIAGNOSTIC EMAIL SYSTEM OFFLINE. WOULD HAVE SENT:");
    console.log("SUBJECT:", subject);
    console.log(textBody);
    console.log("==========================================");
    return { success: true, simulated: true };
  }

  try {
    const data = await resend.emails.send({
      from: FROM_EMAIL,
      to: NOTIFICATION_EMAIL,
      subject,
      text: textBody,
    });

    return { success: true, data };
  } catch (error) {
    console.error("Diagnostic email delivery failed:", error);
    return { success: false, error };
  }
}
