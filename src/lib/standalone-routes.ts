// No standalone (chrome-less) routes. The Applied Intelligence funnel that
// previously used this was removed — AJ Digital is a podcast-production brand.
// Mechanism kept so site-header / site-chrome / header-spacer imports stay valid.
const STANDALONE_PREFIXES: string[] = [];

export function isStandaloneRoute(pathname: string): boolean {
  return STANDALONE_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(prefix + "/")
  );
}
