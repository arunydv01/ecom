const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wowslider.com",
      },
      {
        protocol: "https",
        hostname: "i0.wp.com",
      },
      {
        protocol: "https",
        hostname: "cdn.britannica.com",
      },
      {
        protocol: "https",
        hostname: "example.com",
      },
      {
        protocol: "https",
        hostname: "ayatrio-images.s3.ap-south-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "localhost:5173",
      },
      {
        protocol: "http",
        hostname: "localhost:3000",
      },
      {
        protocol: "https",
        hostname: "wellgroomedgentleman.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "ecom-data3.s3.ap-south-1.amazonaws.com",
      },
    ],
    // domains: ["images.unsplash.com"],
  },
  distDir: "build",
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

module.exports = withBundleAnalyzer(nextConfig);
