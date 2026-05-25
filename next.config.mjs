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
    return [
      {
        source: '/applied-intelligence',
        destination: '/founder-intelligence',
        permanent: true,
      },
      {
        source: '/applied-intelligence/diagnostic',
        destination: '/founder-intelligence/diagnostic',
        permanent: true,
      },
      {
        source: '/applied-intelligence/results/:tier',
        destination: '/founder-intelligence/results/:tier',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
