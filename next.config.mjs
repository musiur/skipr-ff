/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'w3mantra.com',
          },
          {
            protocol: 'https',
            hostname: 'miro.medium.com',
          },
        ],
      },
};

export default nextConfig;
