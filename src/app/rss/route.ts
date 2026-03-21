import { NextResponse } from "next/server";
import { getSiteUrl } from "@/lib/site-url";

const TITLE = "성해원(星海園) | 별을 품은 바다정원의 안식처 · 해양장";
const DESCRIPTION =
  "하늘과 바다가 맞닿은 곳, 섬들이 지키는 고인의 영원한 안식처. 나로호의 꿈이 시작되는 낭도 앞바다, 프라이빗 해양장 전문 — 성해원";

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** GET /rss — RSS 2.0 피드 (원페이지라 항목은 메인 1개) */
export function GET() {
  const base = getSiteUrl();
  const now = new Date().toUTCString();

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(TITLE)}</title>
    <link>${escapeXml(base)}</link>
    <description>${escapeXml(DESCRIPTION)}</description>
    <language>ko</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${escapeXml(base)}/rss" rel="self" type="application/rss+xml" />
    <item>
      <title>${escapeXml(TITLE)}</title>
      <link>${escapeXml(base)}</link>
      <guid isPermaLink="true">${escapeXml(base)}</guid>
      <description>${escapeXml(DESCRIPTION)}</description>
      <pubDate>${now}</pubDate>
    </item>
  </channel>
</rss>`;

  return new NextResponse(body, {
    status: 200,
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
