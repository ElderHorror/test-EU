/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: true,
  },
  reactStrictMode: true,
  // Image optimization settings
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    domains: ["images.unsplash.com", "picsum.photos", "source.unsplash.com"],
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Experimental features
  experimental: {
    optimizePackageImports: [
      "@chakra-ui/react",
      "@emotion/react",
      "@emotion/styled",
      "framer-motion",
      "react-icons",
    ],
    optimizeServerReact: true,
    optimizeCss: true,
  },
  // Production optimizations
  productionBrowserSourceMaps: false,
  optimizeFonts: true,
  poweredByHeader: false,
  // Disable caching for blog pages and API routes
  async headers() {
    return [
      {
        source: "/api/blog-post/:path*",
        headers: [
          { key: "Cache-Control", value: "no-store, max-age=0" },
        ],
      },
      {
        source: "/blog/:path*",
        headers: [
          { key: "Cache-Control", value: "no-store, max-age=0" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
