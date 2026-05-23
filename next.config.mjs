/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  reactCompiler: true,

  trailingSlash: true,

  images: {
    unoptimized: true,

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