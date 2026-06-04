"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { mainNavConfig } from "./nav-config";
import MobileNav from "./mobile-nav";
import { isStandaloneRoute } from "@/lib/standalone-routes";

export default function SiteHeader() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isStandalone = isStandaloneRoute(pathname);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close when pressing Escape
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenDropdown(null);
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (isStandalone) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-base/80 backdrop-blur-lg border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* LEFT - Logo */}
        <div className="flex-shrink-0 flex items-center">
          <Link
            href="/"
            className="aj-wordmark text-xl hover:text-signal-yellow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded"
          >
            AJ<span className="aj-wordmark--accent">DIGITAL</span>
          </Link>
        </div>

        {/* CENTER - Desktop Nav */}
        <nav 
          className="hidden lg:flex items-center gap-1 xl:gap-4" 
          aria-label="Main Navigation"
          ref={dropdownRef}
        >
          {mainNavConfig.map((item) => {
            const isOpen = openDropdown === item.title;

            if (item.items && item.items.length > 0) {
              return (
                <div key={item.title} className="relative">
                  <button
                    onClick={() => setOpenDropdown(isOpen ? null : item.title)}
                    className={`px-4 py-2 text-sm font-semibold rounded-md flex items-center gap-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue ${
                      isOpen ? "text-fg-0 bg-surface-1" : "text-fg-2 hover:text-fg-0 hover:bg-surface-1"
                    }`}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                  >
                    {item.title}
                    <svg 
                      className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} 
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown Content */}
                  {isOpen && (
                    <div className="absolute top-full left-0 mt-2 w-[400px] bg-surface-1 border border-border-subtle rounded-lg shadow-[var(--shadow-card)] p-2 z-50">
                      {item.description && (
                        <div className="px-4 py-3 mb-2 border-b border-border-subtle">
                          <p className="t-label">{item.description}</p>
                        </div>
                      )}
                      <ul className="flex flex-col gap-1">
                        {item.items.map((subItem) => (
                          <li key={subItem.title}>
                            <Link
                              href={subItem.href || "#"}
                              onClick={() => setOpenDropdown(null)}
                              className="block p-3 rounded-lg hover:bg-surface-2 transition-colors focus-visible:outline-none focus-visible:bg-surface-2"
                            >
                              <div className="font-semibold text-fg-0 text-sm">{subItem.title}</div>
                              {subItem.description && (
                                <p className="text-xs text-text-muted mt-1">{subItem.description}</p>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            }

            // Simple links (like About)
            return (
              <Link
                key={item.title}
                href={item.href || "#"}
                className="px-4 py-2 text-sm font-semibold text-fg-2 rounded-md transition-colors hover:text-fg-0 hover:bg-surface-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT - CTAs */}
        <div className="hidden lg:flex items-center gap-6">
          <Link
            href="/case-studies"
            className="text-sm font-semibold text-fg-2 hover:text-fg-0 transition-colors focus-visible:outline-none focus-visible:underline"
          >
            Case Studies
          </Link>
          <Link
            href="/apply"
            data-track="global-header-apply-cta"
            data-ga-event="apply_strategy_session_click"
            className="aj-btn-signal"
          >
            Apply for a Strategy Session
          </Link>
        </div>

        {/* MOBILE MENU TRIGGER */}
        <div className="lg:hidden flex items-center">
          <MobileNav />
        </div>

      </div>
    </header>
  );
}
