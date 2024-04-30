/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ajouter une configuration pour les actifs statiques
  async headers() {
    return [
      {
        source: '/fonts/(.*)',
        headers: [
          // X-Content-Type-Options
          { key: 'X-Content-Type-Options', value: 'nosniff' },

          // X-Frame-Options
          { key: 'X-Frame-Options', value: 'DENY' },

          // Cache-Control (pour les autres chemins)
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, must-revalidate',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
