/** @type {import('next').NextConfig} */

// ── Content Security Policy ────────────────────────────────────────────────
// Baseline policy designed to be compatible with:
//   - Next.js inline runtime / hydration  (script-src 'unsafe-inline')
//   - Tailwind / styled-components        (style-src 'unsafe-inline')
//   - Google Analytics (GA4) via gtag      (googletagmanager + google-analytics)
//   - Sanity CDN images                    (cdn.sanity.io)
//   - Calendly embedded scheduler          (calendly.com via frame-src)
//   - Supabase + Resend API calls          (supabase.co, api.resend.com)
//
// Exceptions documented in docs/SECURITY.md.
const cspDirectives = {
  "default-src": ["'self'"],
  "base-uri": ["'self'"],
  "form-action": ["'self'"],
  "frame-ancestors": ["'none'"],
  "object-src": ["'none'"],
  "script-src": [
    "'self'",
    // Next.js relies on inline bootstrap + framework-evaluated code.
    "'unsafe-inline'",
    "'unsafe-eval'",
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
  ],
  "style-src": [
    "'self'",
    "'unsafe-inline'",
    "https://fonts.googleapis.com",
  ],
  "img-src": [
    "'self'",
    "data:",
    "blob:",
    "https://cdn.sanity.io",
    "https://www.google-analytics.com",
    "https://www.googletagmanager.com",
  ],
  "font-src": [
    "'self'",
    "data:",
    "https://fonts.gstatic.com",
  ],
  "connect-src": [
    "'self'",
    "https://*.supabase.co",
    "https://api.resend.com",
    "https://www.google-analytics.com",
    "https://*.analytics.google.com",
    "https://*.googletagmanager.com",
    "https://cdn.sanity.io",
    "https://*.apicdn.sanity.io",
    "https://*.api.sanity.io",
  ],
  "frame-src": [
    "'self'",
    "https://calendly.com",
    "https://*.calendly.com",
  ],
  "media-src": ["'self'", "https://cdn.sanity.io"],
  "manifest-src": ["'self'"],
  "worker-src": ["'self'", "blob:"],
  "upgrade-insecure-requests": [],
};

const contentSecurityPolicy = Object.entries(cspDirectives)
  .map(([directive, values]) =>
    values.length > 0 ? `${directive} ${values.join(" ")}` : directive
  )
  .join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: [
      "accelerometer=()",
      "autoplay=()",
      "camera=()",
      "geolocation=()",
      "gyroscope=()",
      "magnetometer=()",
      "microphone=()",
      "payment=()",
      "usb=()",
    ].join(", "),
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
