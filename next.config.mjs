/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only use standalone output when explicitly requested (e.g. Docker containerization).
  // Native Vercel deployment automatically handles serverless and static optimization.
  ...(process.env.STANDALONE === 'true' ? { output: 'standalone' } : {}),

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: '/advisory',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/consulting',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/writing',
        destination: '/books',
        permanent: true,
      },
      {
        source: '/writing/:slug',
        destination: '/articles/:slug',
        permanent: true,
      },
      {
        source: '/masterclass',
        destination: '/teaching',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
