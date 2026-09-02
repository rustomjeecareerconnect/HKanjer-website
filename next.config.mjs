/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
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
