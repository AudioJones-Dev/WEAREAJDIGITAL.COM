/* eslint-disable no-console */

/**
 * Environment validation for weareajdigital.com.
 * Call validateEnv() at startup (next.config.ts) to catch misconfigurations early.
 */

const env = process.env;

function isMissing(value: string | undefined): boolean {
  return value === undefined || value.trim() === "";
}

function requireKeys(keys: string[], label: string): void {
  const missing = keys.filter((k) => isMissing(env[k]));
  if (missing.length > 0) {
    throw new Error(
      [
        "",
        `❌ Missing required environment variables for: ${label}`,
        "",
        ...missing.map((k) => `  - ${k}`),
        "",
        "Add these to your .env.local or Vercel project settings.",
      ].join("\n")
    );
  }
}

function warnMissing(keys: string[], label: string): void {
  const missing = keys.filter((k) => isMissing(env[k]));
  if (missing.length > 0) {
    console.warn(
      [
        "",
        `⚠️  Optional env vars missing for: ${label}`,
        ...missing.map((k) => `  - ${k}`),
        "",
      ].join("\n")
    );
  }
}

function validateUrl(key: string): void {
  const value = env[key];
  if (isMissing(value)) return;
  try {
    new URL(value as string);
  } catch {
    throw new Error(`❌ ${key} must be a valid URL. Got: "${value}"`);
  }
}

function validateBoolean(key: string): void {
  const value = env[key];
  if (isMissing(value)) return;
  if (!["true", "false"].includes(value as string)) {
    throw new Error(`❌ ${key} must be "true" or "false". Got: "${value}"`);
  }
}

export function validateEnv(): void {
  const isProd = env.NODE_ENV === "production";

  // ── Core ──────────────────────────────────────────────────
  validateUrl("NEXT_PUBLIC_APP_URL");

  if (isProd) {
    requireKeys(["NEXT_PUBLIC_APP_URL"], "App URL");
  }

  // ── Supabase ──────────────────────────────────────────────
  requireKeys(
    ["NEXT_PUBLIC_SUPABASE_URL", "NEXT_PUBLIC_SUPABASE_ANON_KEY"],
    "Supabase (public)"
  );

  if (isProd) {
    requireKeys(["SUPABASE_SERVICE_ROLE_KEY"], "Supabase (server)");
  } else {
    warnMissing(["SUPABASE_SERVICE_ROLE_KEY"], "Supabase (server)");
  }

  validateUrl("NEXT_PUBLIC_SUPABASE_URL");

  // ── Email — Resend ────────────────────────────────────────
  if (isProd) {
    requireKeys(
      ["RESEND_API_KEY", "APPLY_NOTIFICATION_EMAIL", "EMAIL_FROM"],
      "Resend email"
    );
  } else {
    warnMissing(["RESEND_API_KEY", "APPLY_NOTIFICATION_EMAIL", "EMAIL_FROM"], "Resend email");
  }

  // ── CMS — Sanity ──────────────────────────────────────────
  warnMissing(
    ["NEXT_PUBLIC_SANITY_PROJECT_ID", "NEXT_PUBLIC_SANITY_DATASET"],
    "Sanity CMS"
  );

  // ── Optional feature flags ────────────────────────────────
  validateBoolean("NEXT_PUBLIC_ENABLE_ANALYTICS");
  validateUrl("DIAGNOSTIC_WEBHOOK_URL");
  validateUrl("NEXT_PUBLIC_CALENDLY_URL");
}
