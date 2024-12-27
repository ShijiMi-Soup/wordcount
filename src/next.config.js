import nextPWA from "next-pwa"

const withPWA = nextPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  fallbacks: {
    document: "/_offline"
  },
  runtimeCaching: [
    {
      urlPattern: /\/_next\/static\//,
      handler: "CacheFirst",
      options: {
        cacheName: "static-resources",
        expiration: {
          maxAgeSeconds: 60 * 60 * 24 * 30 // Cache for 30 days
        }
      }
    },
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|ico)$/,
      handler: "CacheFirst",
      options: {
        cacheName: "image-assets",
        expiration: {
          maxEntries: 50, // Limit the number of cached images
          maxAgeSeconds: 60 * 60 * 24 * 30 // Cache for 30 days
        }
      }
    }
  ]
})

const nextConfig = withPWA({
  reactStrictMode: true
})

export default nextConfig
