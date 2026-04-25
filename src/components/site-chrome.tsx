"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { isStandaloneRoute } from "@/lib/standalone-routes";

export default function SiteChrome({
  footer,
  sticky,
}: {
  footer: ReactNode;
  sticky: ReactNode;
}) {
  const pathname = usePathname();
  if (isStandaloneRoute(pathname)) return null;
  return (
    <>
      {sticky}
      {footer}
    </>
  );
}
