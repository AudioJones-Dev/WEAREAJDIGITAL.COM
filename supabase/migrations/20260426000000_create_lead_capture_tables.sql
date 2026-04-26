-- Enable required extensions
create extension if not exists "uuid-ossp";

-- ============================================================
-- apply_submissions: business inquiry / apply form leads
-- ============================================================
create table public.apply_submissions (
  id              uuid primary key default uuid_generate_v4(),
  created_at      timestamptz not null default now(),

  -- Contact
  full_name       text not null,
  email           text not null,
  phone           text,
  company         text not null,
  website         text,
  location        text not null,

  -- Qualification fields
  role_type       text not null,
  has_podcast     text not null,
  services_interested text[] not null,
  primary_goal    text not null,
  monthly_budget  text not null,
  timeline        text not null,
  decision_maker  text not null,
  delivery_mode   text,

  -- Computed qualification
  qualified       boolean,
  redirect_to     text,

  -- Meta
  ip_address      text,
  user_agent      text
);

create index on public.apply_submissions (email);
create index on public.apply_submissions (created_at desc);
create index on public.apply_submissions (qualified);

-- ============================================================
-- diagnostic_submissions: AI readiness quiz results
-- ============================================================
create table public.diagnostic_submissions (
  id                  uuid primary key default uuid_generate_v4(),
  created_at          timestamptz not null default now(),

  -- Lead contact
  name                text not null,
  email               text not null,
  company             text,
  website             text,
  phone               text,

  -- Assessment results
  assessment_id       text not null,
  raw_score           integer not null,
  normalized_score    integer not null,
  tier                text not null check (tier in ('hot', 'warm', 'cold')),
  category_scores     jsonb not null default '{}',
  answers             jsonb not null default '{}',
  open_response       text,

  -- UTM / tracking
  utm_source          text,
  utm_medium          text,
  utm_campaign        text,
  referrer            text,
  page_path           text,
  submitted_at        timestamptz,

  -- Meta
  ip_address          text,
  user_agent          text
);

create index on public.diagnostic_submissions (email);
create index on public.diagnostic_submissions (created_at desc);
create index on public.diagnostic_submissions (tier);
create index on public.diagnostic_submissions (normalized_score);

-- ============================================================
-- Row-level security: service role only (all writes via API routes)
-- ============================================================
alter table public.apply_submissions enable row level security;
alter table public.diagnostic_submissions enable row level security;

create policy "service_role_all_apply"
  on public.apply_submissions
  for all
  using (auth.role() = 'service_role');

create policy "service_role_all_diagnostic"
  on public.diagnostic_submissions
  for all
  using (auth.role() = 'service_role');
