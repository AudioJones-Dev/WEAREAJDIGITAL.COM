/** @type {import('next').NextConfig} */
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
  async redirects() {
    // Generic AI-advisory posts removed in the podcast/marketing refocus.
    // 301 to the nearest on-brand page to preserve SEO link equity.
    return [
      {
        source: '/blog/ai-consulting-for-small-business',
        destination: '/services/ai-consulting',
        permanent: true,
      },
      {
        source: '/blog/ai-consulting-small-business',
        destination: '/services/ai-consulting',
        permanent: true,
      },
      {
        source: '/blog/chatgpt-for-business-owners',
        destination: '/blog/ai-content-automation-guide',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
