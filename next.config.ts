/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.public.blob.vercel-storage.com',
      },
      {
        protocol: 'https',
        hostname: 'restaurant-with-next-mongo-db-and-p.vercel.app',
      },
    ],
  },
}

export default nextConfig
