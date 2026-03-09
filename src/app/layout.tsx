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
  title: "해원(海苑) | 프라이빗 해상 추모 · 해양장",
  description:
    "대자연의 끝없는 품에서 영원한 안식을 만나다. 나로우주센터 앞바다, 청정 남해 해양장 전문 — 해원",
  keywords: "해양장, 해상추모, 산골, 자연장, 남해, 고흥, 나로우주센터, 프라이빗 추모",
  openGraph: {
    title: "해원(海苑) | 프라이빗 해상 추모 · 해양장",
    description: "대자연의 끝없는 품에서 영원한 안식을 만나다",
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
