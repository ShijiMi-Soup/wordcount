import nextPWA from "next-pwa"

const withPWA = nextPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  fallbacks: {
    document: "/"
  }
})

const nextConfig = withPWA({
  reactStrictMode: true
})

export default nextConfig
