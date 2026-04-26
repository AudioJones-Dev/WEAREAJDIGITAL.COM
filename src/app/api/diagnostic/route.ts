import { NextResponse } from "next/server";
import type { LeadPayload } from "@/lib/assessment";
import { sendDiagnosticNotification } from "@/lib/email";
import { getSupabaseAdmin } from "@/lib/supabase";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isValidDiagnosticPayload(value: unknown): value is LeadPayload {
  if (!isRecord(value)) return false;
  if (!isRecord(value.lead) || !isRecord(value.assessment)) return false;

  return (
    typeof value.lead.email === "string" &&
    value.lead.email.length > 0 &&
    typeof value.assessment.assessmentId === "string" &&
    value.assessment.assessmentId.length > 0 &&
    typeof value.assessment.tier === "string" &&
    value.assessment.tier.length > 0
  );
}

export async function POST(request: Request) {
  let payload: LeadPayload;

  try {
    const body = await request.json();
    if (!isValidDiagnosticPayload(body)) {
      return NextResponse.json(
        { success: false, message: "Invalid diagnostic payload" },
        { status: 400 }
      );
    }
    payload = body;
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid JSON payload" },
      { status: 400 }
    );
  }

  // Persist to Supabase (non-blocking — delivery path below is the reliable fallback)
  try {
    const supabase = getSupabaseAdmin();
    await supabase.from("diagnostic_submissions").insert({
      name: payload.lead.name,
      email: payload.lead.email,
      company: payload.lead.company ?? null,
      website: payload.lead.website ?? null,
      phone: payload.lead.phone ?? null,
      assessment_id: payload.assessment.assessmentId,
      raw_score: payload.assessment.rawScore,
      normalized_score: payload.assessment.normalizedScore,
      tier: payload.assessment.tier,
      category_scores: payload.assessment.categoryScores,
      answers: payload.assessment.answers,
      open_response: payload.assessment.openResponse ?? null,
      utm_source: payload.tracking?.utm_source ?? null,
      utm_medium: payload.tracking?.utm_medium ?? null,
      utm_campaign: payload.tracking?.utm_campaign ?? null,
      referrer: payload.tracking?.referrer ?? null,
      page_path: payload.tracking?.pagePath ?? null,
      submitted_at: payload.tracking?.submittedAt
        ? new Date(payload.tracking.submittedAt)
        : null,
      ip_address: request.headers.get("x-forwarded-for") ?? null,
      user_agent: request.headers.get("user-agent") ?? null,
    });
  } catch (dbErr) {
    console.error("[diagnostic] Supabase write failed:", dbErr);
  }

  const webhookUrl = process.env.DIAGNOSTIC_WEBHOOK_URL;

  if (webhookUrl) {
    try {
      const webhookRes = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!webhookRes.ok) {
        const responseText = await webhookRes.text().catch(() => "");
        console.error(
          "[diagnostic] Webhook delivery failed",
          webhookRes.status,
          responseText
        );
        return NextResponse.json(
          { success: false, message: "Diagnostic capture failed" },
          { status: 502 }
        );
      }

      return NextResponse.json({
        success: true,
        captured: true,
        delivery: "webhook",
        tier: payload.assessment.tier,
      });
    } catch (error) {
      console.error("[diagnostic] Webhook delivery error", error);
      return NextResponse.json(
        { success: false, message: "Diagnostic capture failed" },
        { status: 502 }
      );
    }
  }

  const emailResult = await sendDiagnosticNotification(payload);

  if (!emailResult.success) {
    return NextResponse.json(
      { success: false, message: "Diagnostic capture failed" },
      { status: 502 }
    );
  }

  return NextResponse.json({
    success: true,
    captured: true,
    delivery: "email",
    tier: payload.assessment.tier,
  });
}
