/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ams.aghorimediahouse.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
