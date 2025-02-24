// next.config.ts

import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    // Remove serverExternalPackages
  },
  webpack: (config) => {
    config.externals = {
      ...config.externals,
      'pdfmake': 'pdfmake',
      'pdfkit': 'pdfkit',
      'jspdf': 'jspdf',
      'jspdf-autotable': 'jspdf-autotable',
    };

    // Fixes for using pdfkit with Next.js
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      crypto: false,
      stream: false,
      zlib: false,
      net: false,
      tls: false,
    };
    return config;
  },
};

export default nextConfig;
