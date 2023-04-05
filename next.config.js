/** @type {import('next').NextConfig} */
const { createProxyMiddleware } = require('http-proxy-middleware');

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:5001/api/:path*',
      },
    ];
  },
  async middleware() {
    const middleware = [];

    middleware.push(
      createProxyMiddleware('/api', {
        target: 'http://localhost:5000',
        changeOrigin: true,
      })
    );

    return middleware;
  },
};


module.exports = nextConfig
