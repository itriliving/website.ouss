/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['flagcdn.com'],
  },
  async headers() {
    return [
      {
        // Configure les en-têtes pour les fichiers JSON de traduction
        source: '/locales/:locale/:file*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Mise en cache pendant 1 an
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
