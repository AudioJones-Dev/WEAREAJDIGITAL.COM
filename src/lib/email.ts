import { Resend } from "resend";
import { ApplyFormData } from "./apply-schema";
import { evaluateApplyQualification } from "./apply-qualification";

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
