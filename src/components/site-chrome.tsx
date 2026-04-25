"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

const STANDALONE_PREFIXES = ["/applied-intelligence"];

export default function SiteChrome({
  footer,
  sticky,
}: {
  footer: ReactNode;
  sticky: ReactNode;
}) {
  const pathname = usePathname();
  const isStandalone = STANDALONE_PREFIXES.some((prefix) =>
    pathname.startsWith(prefix)
  );
  if (isStandalone) return null;
  return (
    <>
      {sticky}
      {footer}
    </>
  );
}
