"use client";

import { usePathname } from "next/navigation";
import { isStandaloneRoute } from "@/lib/standalone-routes";

export default function HeaderSpacer() {
  const pathname = usePathname();
  if (isStandaloneRoute(pathname)) return null;
  return <div className="h-20" aria-hidden />;
}
