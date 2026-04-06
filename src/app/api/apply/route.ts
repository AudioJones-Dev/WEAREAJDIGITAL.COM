import { NextResponse } from 'next/server';
import { ApplyFormSchema } from '@/lib/apply-schema';
import { evaluateApplyQualification } from '@/lib/apply-qualification';
import { sendBusinessNotification } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const rawBody = await request.json();
    
    // 1. Validate payload securely
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

    // 2. Send business notification
    // Future Strategy: Insert Airtable DB write or n8n webhook post here
    const emailResult = await sendBusinessNotification(payload);

    if (!emailResult.success) {
      // In production, failure to send email might trigger an alert to a secondary monitoring stack.
      // We log it defensively so as not to crash the end-user flow.
      console.error("[CRIT] Application capture email failed to route.");
    }

    // 3. Return clean redirect response
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
