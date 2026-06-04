"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { mainNavConfig } from "./nav-config";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleNav = () => setIsOpen(!isOpen);
  const closeNav = () => setIsOpen(false);

  const toggleSection = (title: string) => {
    setExpandedSection(expandedSection === title ? null : title);
  };

  return (
    <>
      <button
        onClick={toggleNav}
        className="flex min-h-[44px] min-w-[44px] items-center justify-center p-2 text-fg-0 hover:text-signal-yellow focus-visible:outline-none focus:ring-2 focus:ring-accent-blue rounded-md transition-colors"
        aria-label="Toggle Menu"
        aria-expanded={isOpen}
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Slide-over Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-bg-base top-[80px] h-[calc(100vh-80px)] overflow-hidden">
          <div className="flex-1 overflow-y-auto px-6 py-8">
            <nav className="flex flex-col gap-6">
              {mainNavConfig.map((item) => (
                <div key={item.title} className="border-b border-border-subtle pb-4">
                  {item.items && item.items.length > 0 ? (
                    <div>
                      <button
                        onClick={() => toggleSection(item.title)}
                        className="flex min-h-[44px] items-center justify-between w-full text-left font-bold text-xl text-fg-0 py-2 focus-visible:outline-none"
                      >
                        {item.title}
                        <svg
                          className={`w-6 h-6 text-text-muted transition-transform ${
                            expandedSection === item.title ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {expandedSection === item.title && (
                        <div className="pt-4 pl-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.title}
                              href={subItem.href || "#"}
                              onClick={closeNav}
                              className="block py-2 text-text-primary font-semibold hover:text-signal-yellow transition-colors"
                            >
                              <div className="text-base">{subItem.title}</div>
                              {subItem.description && (
                                <p className="text-sm text-text-muted mt-1">{subItem.description}</p>
                              )}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href || "#"}
                      onClick={closeNav}
                      className="block font-bold text-xl text-fg-0 py-2 hover:text-signal-yellow transition-colors"
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>

          <div className="p-6 border-t border-border-subtle bg-bg-base sticky bottom-0">
            <Link
              href="/apply"
              onClick={closeNav}
              data-track="mobile-nav-apply-cta"
              data-ga-event="apply_strategy_session_click"
              className="aj-btn-signal w-full"
            >
              Apply for a Strategy Session
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
