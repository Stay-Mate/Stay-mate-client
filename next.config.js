/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://3106.solrukas.me/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
