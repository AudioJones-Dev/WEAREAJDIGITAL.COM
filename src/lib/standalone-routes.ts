const STANDALONE_PREFIXES = ["/applied-intelligence"];

export function isStandaloneRoute(pathname: string): boolean {
  return STANDALONE_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(prefix + "/")
  );
}
