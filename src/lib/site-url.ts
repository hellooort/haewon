/** 공식 사이트 URL (sitemap·RSS·canonical 등) */
const CANONICAL_SITE = "https://www.seonghaewon.co.kr";

/**
 * NEXT_PUBLIC_SITE_URL 이 있으면 최우선.
 * 로컬 개발: localhost. Vercel 프리뷰: 배포 URL. 그 외 프로덕션: 공식 도메인.
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;

  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }

  if (process.env.VERCEL_ENV === "preview" && process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return CANONICAL_SITE;
}
