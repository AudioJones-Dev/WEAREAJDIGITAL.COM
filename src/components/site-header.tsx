"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { mainNavConfig } from "./nav-config";
import MobileNav from "./mobile-nav";

const STANDALONE_PREFIXES = ["/applied-intelligence"];

export default function SiteHeader() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isStandalone = STANDALONE_PREFIXES.some((prefix) => pathname.startsWith(prefix));

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LEFT - Logo */}
        <div className="flex-shrink-0 flex items-center">
          <Link 
            href="/" 
            className="text-xl font-black tracking-tighter text-white hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
          >
            AJ<span className="text-blue-500">DIGITAL</span>
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
                    className={`px-4 py-2 text-sm font-semibold rounded-md flex items-center gap-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                      isOpen ? "text-white bg-neutral-900" : "text-neutral-400 hover:text-white hover:bg-neutral-900"
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
                    <div className="absolute top-full left-0 mt-2 w-[400px] bg-neutral-950 border border-neutral-800 rounded-xl shadow-2xl p-2 z-50">
                      {item.description && (
                        <div className="px-4 py-3 mb-2 border-b border-neutral-900">
                          <p className="text-xs font-bold text-blue-500 uppercase tracking-wider">{item.description}</p>
                        </div>
                      )}
                      <ul className="flex flex-col gap-1">
                        {item.items.map((subItem) => (
                          <li key={subItem.title}>
                            <Link
                              href={subItem.href || "#"}
                              onClick={() => setOpenDropdown(null)}
                              className="block p-3 rounded-lg hover:bg-neutral-900 transition-colors focus-visible:outline-none focus-visible:bg-neutral-900"
                            >
                              <div className="font-semibold text-white text-sm">{subItem.title}</div>
                              {subItem.description && (
                                <p className="text-xs text-neutral-500 mt-1">{subItem.description}</p>
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
                className="px-4 py-2 text-sm font-semibold text-neutral-400 rounded-md transition-colors hover:text-white hover:bg-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
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
            className="text-sm font-semibold text-neutral-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:underline"
          >
            Case Studies
          </Link>
          <Link 
            href="/apply" 
            data-track="global-header-apply-cta"
            data-ga-event="apply_strategy_session_click"
            className="px-5 py-2.5 text-sm font-bold bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
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
