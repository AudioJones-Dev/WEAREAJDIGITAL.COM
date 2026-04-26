import { NextResponse } from 'next/server';
import { ApplyFormSchema } from '@/lib/apply-schema';
import { evaluateApplyQualification } from '@/lib/apply-qualification';
import { sendBusinessNotification } from '@/lib/email';
import { getSupabaseAdmin } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const rawBody = await request.json();

    const parsed = ApplyFormSchema.safeParse(rawBody);

    if (!parsed.success) {
      return NextResponse.json({
        success: false,
        message: 'Validation failed',
        errors: parsed.error.flatten()
      }, { status: 400 });
    }

    const payload = parsed.data;
    const qualification = evaluateApplyQualification(payload);

    // Persist to Supabase (non-blocking — email is the reliable fallback)
    try {
      const supabase = getSupabaseAdmin();
      await supabase.from('apply_submissions').insert({
        full_name: payload.fullName,
        email: payload.email,
        phone: payload.phone ?? null,
        company: payload.company,
        website: payload.website ?? null,
        location: payload.location,
        role_type: payload.roleType,
        has_podcast: payload.hasPodcast,
        services_interested: payload.servicesInterested,
        primary_goal: payload.primaryGoal,
        monthly_budget: payload.monthlyBudget,
        timeline: payload.timeline,
        decision_maker: payload.decisionMaker,
        delivery_mode: payload.deliveryMode ?? null,
        qualified: qualification.qualified,
        redirect_to: qualification.redirectTo ?? null,
        ip_address: request.headers.get('x-forwarded-for') ?? null,
        user_agent: request.headers.get('user-agent') ?? null,
      });
    } catch (dbErr) {
      console.error('[apply] Supabase write failed:', dbErr);
    }

    const emailResult = await sendBusinessNotification(payload);

    if (!emailResult.success) {
      console.error("[CRIT] Application capture email failed to route.");
    }

    return NextResponse.json({
      success: true,
      qualified: qualification.qualified,
      redirectTo: qualification.redirectTo,
      nextStepMessage: qualification.nextStepMessage,
      contactPath: qualification.contactPath,
      blogPath: qualification.blogPath,
    });

  } catch (error) {
    console.error("AJ Digital Application API Pipeline Error:", error);

    return NextResponse.json({
      success: false,
      message: 'Internal server error while processing the application.'
    }, { status: 500 });
  }
}
