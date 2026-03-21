import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/sitemap", destination: "/sitemap.xml", permanent: true },
    ];
  },
  async rewrites() {
    return [
      // Linux 배포 시 URL 대소문자 구분 → /RSS 요청도 /rss 라우트로 처리 (200 + 본문)
      { source: "/RSS", destination: "/rss" },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 80, 85, 90],
  },
};

export default nextConfig;
