import { z } from 'zod';

export const ApplyFormSchema = z.object({
  fullName: z.string().min(1, "Full name is required").trim(),
  email: z.string().email("Valid email is required").trim().toLowerCase(),
  phone: z.string().optional(),
  company: z.string().min(1, "Company is required").trim(),
  website: z.string().optional(),
  
  roleType: z.string().min(1, "Role type is required"),
  hasPodcast: z.string().min(1, "Podcast status is required"),
  
  servicesInterested: z.array(z.string()).min(1, "At least one service is required"),
  
  primaryGoal: z.string().min(1, "Primary goal is required").trim(),
  
  monthlyBudget: z.string().min(1, "Budget is required"),
  
  timeline: z.string().min(1, "Timeline is required"),
  decisionMaker: z.string().min(1, "Decision maker status is required"),
  
  location: z.string().min(1, "Location is required"),
  deliveryMode: z.string().optional(),
});

export type ApplyFormData = z.infer<typeof ApplyFormSchema>;
