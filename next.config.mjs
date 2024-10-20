/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pirogami.ru',
        port: '',
        pathname: '/upload/**',
      },
    ],
  },
}
export default nextConfig
