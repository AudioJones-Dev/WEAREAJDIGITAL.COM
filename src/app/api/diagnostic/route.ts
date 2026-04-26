import { NextResponse } from "next/server";
import type { LeadPayload } from "@/lib/assessment";

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

  const webhookUrl = process.env.DIAGNOSTIC_WEBHOOK_URL;

  if (!webhookUrl) {
    if (process.env.NODE_ENV === "production") {
      console.error("[diagnostic] DIAGNOSTIC_WEBHOOK_URL is not configured");
      return NextResponse.json(
        { success: false, message: "Diagnostic capture is not configured" },
        { status: 503 }
      );
    }

    console.log("[diagnostic] Local diagnostic payload", payload);
    return NextResponse.json({
      success: true,
      captured: false,
      tier: payload.assessment.tier,
    });
  }

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
  } catch (error) {
    console.error("[diagnostic] Webhook delivery error", error);
    return NextResponse.json(
      { success: false, message: "Diagnostic capture failed" },
      { status: 502 }
    );
  }

  return NextResponse.json({
    success: true,
    captured: true,
    tier: payload.assessment.tier,
  });
}
