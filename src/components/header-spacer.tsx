"use client";

import { usePathname } from "next/navigation";

const STANDALONE_PREFIXES = ["/applied-intelligence"];

export default function HeaderSpacer() {
  const pathname = usePathname();
  const isStandalone = STANDALONE_PREFIXES.some((prefix) =>
    pathname.startsWith(prefix)
  );
  if (isStandalone) return null;
  return <div className="h-20" aria-hidden />;
}
