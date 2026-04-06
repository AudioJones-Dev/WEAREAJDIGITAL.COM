import { createClient } from "next-sanity";

export const sanityApiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION?.trim() || "2026-04-04";

export type SanityClientConfig = {
  projectId: string;
  dataset: string;
  apiVersion: string;
  useCdn: boolean;
  token?: string;
};

export function getSanityClientConfig(): SanityClientConfig | null {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim();
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET?.trim();

  if (!projectId || !dataset) {
    return null;
  }

  const token = process.env.SANITY_API_READ_TOKEN?.trim();

  return {
    projectId,
    dataset,
    apiVersion: sanityApiVersion,
    useCdn: !token,
    token: token || undefined,
  };
}

export function isSanityConfigured() {
  return Boolean(getSanityClientConfig());
}

export function getSanityClient() {
  const config = getSanityClientConfig();

  if (!config) {
    return null;
  }

  return createClient(config);
}
