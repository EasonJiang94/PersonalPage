/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['easonchiang.com'],
  },
  // 如果您要使用自己的域名，這裡不需要 basePath
}

module.exports = nextConfig 