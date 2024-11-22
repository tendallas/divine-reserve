/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
      fileName: false,
    },
  },
  output: 'standalone',
  reactStrictMode: true,
}

module.exports = nextConfig
