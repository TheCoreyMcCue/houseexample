/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [75, 88, 90],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
