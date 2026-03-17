import type { Metadata } from "next";
import { Noto_Serif_KR } from "next/font/google";
import "./globals.css";

const notoSerifKR = Noto_Serif_KR({
  variable: "--font-noto-serif-kr",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "성해원(星海園) | 별을 품은 바다정원의 안식처 · 해양장",
  description:
    "하늘과 바다가 맞닿은 곳, 섬들이 지키는 고인의 영원한 안식처. 나로호의 꿈이 시작되는 낭도 앞바다, 프라이빗 해양장 전문 — 성해원",
  keywords: "해양장, 해상추모, 산분, 자연장, 남해, 여수, 낭도, 나로우주센터, 프라이빗 추모, 성해원",
  openGraph: {
    title: "성해원(星海園) | 별을 품은 바다정원의 안식처",
    description: "하늘과 바다가 맞닿은 곳, 섬들이 지키는 고인의 영원한 안식처",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className={`${notoSerifKR.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
