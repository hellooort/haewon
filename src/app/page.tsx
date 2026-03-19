"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import FadeInOnScroll from "@/components/FadeInOnScroll";

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-soft-gold/10">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-6 text-left"
      >
        <span className="pr-4 font-sans text-lg font-medium tracking-normal text-white/90 md:text-xl">
          {q}
        </span>
        <span
          className={`shrink-0 text-soft-gold transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          open ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <p className="font-sans text-lg leading-[1.5] tracking-normal text-white/90">{a}</p>
      </div>
    </div>
  );
}

type IntroPhase = "logo" | "brand" | "done";

export default function Home() {
  const [introPhase, setIntroPhase] = useState<IntroPhase>("logo");
  const [ctaVisible, setCtaVisible] = useState(false);
  const [heroReady, setHeroReady] = useState(false);
  useEffect(() => {
    const t1 = setTimeout(() => setIntroPhase("brand"), 1800);
    const t2 = setTimeout(() => setIntroPhase("done"), 3600);
    const t3 = setTimeout(() => setHeroReady(true), 4200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const handleScroll = useCallback(() => {
    setCtaVisible(window.scrollY > window.innerHeight * 0.5);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <main className="overflow-x-hidden bg-deep-navy">
      {/* ===== Intro Overlay (코스모스 스타일) ===== */}
      <div
        className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-deep-navy transition-all duration-1000 ${
          introPhase === "done" ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <div
          className={`transition-all duration-1000 ease-out ${
            introPhase === "logo"
              ? "scale-100 opacity-100"
              : "scale-90 opacity-0 -translate-y-4"
          }`}
        >
          <Image
            src="/images/logo.png"
            alt="성해원(星海園) 로고"
            width={160}
            height={160}
            className="drop-shadow-2xl"
            priority
          />
        </div>

        <div
          className={`absolute flex flex-col items-center text-center transition-all duration-1000 ease-out ${
            introPhase === "brand"
              ? "opacity-100 translate-y-0"
              : introPhase === "logo"
              ? "opacity-0 translate-y-8"
              : "opacity-0 -translate-y-8"
          }`}
        >
          <p className="font-serif text-5xl tracking-[0.2em] text-soft-gold md:text-6xl">
            성해원
          </p>
          <p className="mt-2 font-serif text-xl tracking-[0.15em] text-soft-gold/60 md:text-2xl">
            星海園
          </p>
          <p className="mt-3 font-sans text-sm tracking-[0.3em] text-white/90">
            별을 품은 바다정원의 안식처
          </p>
        </div>
      </div>

      {/* ===== Navigation ===== */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          introPhase === "done" ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12 md:py-5">
          <a href="#" className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="성해원(星海園)" width={44} height={44} className="md:h-12 md:w-12" />
            <span className="font-serif text-2xl tracking-normal text-soft-gold drop-shadow-lg md:text-3xl">
              성해원
            </span>
          </a>
          <a
            href="tel:01025197592"
            className="rounded-full border border-soft-gold/30 bg-soft-gold/10 px-6 py-2.5 font-sans text-lg tracking-normal text-soft-gold backdrop-blur-md transition-all hover:bg-soft-gold/20 md:px-7 md:py-3 md:text-lg"
          >
            24시간 상담
          </a>
        </div>
      </nav>

      {/* ===== Section 1: Hero (영상 배경) ===== */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <iframe
            src="https://www.youtube.com/embed/Jq5iJ5QMhUU?autoplay=1&mute=1&loop=1&playlist=Jq5iJ5QMhUU&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1&enablejsapi=1"
            title="성해원(星海園) 영상"
            className="pointer-events-none absolute inset-0 h-full w-full border-0 object-cover"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
          <div className="absolute inset-0 bg-gradient-to-b from-deep-navy/40 via-transparent to-deep-navy/60" />
        </div>

        <div className="relative z-10 flex h-full flex-col items-end justify-end px-6 pb-28 text-center md:pb-32">
          <div
            className={`w-full transition-all duration-[2000ms] ease-out ${
              heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="font-serif text-2xl font-light leading-snug tracking-normal text-white md:text-4xl lg:text-5xl">
              하늘과 바다가 맞닿은 곳,
              <br />
              <span className="mt-1 block">
                섬들이 지키는 고인의 <span className="text-soft-gold">영원한 안식처</span>
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl font-sans text-sm leading-normal tracking-normal text-white/90 md:text-base">
              고인을 가장 빛나는 별로, 푸른 바다의 품으로 모시는 정직한 길잡이
              <br />
              성해원(星海園)
            </p>
          </div>

          <div
            className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-[1500ms] ${
              heroReady ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex flex-col items-center gap-2">
              <div className="h-10 w-px bg-gradient-to-b from-soft-gold/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Section 2: 단독 추모선 ===== */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/KakaoTalk_20260225_100018662.jpg"
            alt="잔잔한 남해 바다와 바위섬"
            fill
            className="object-cover"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/80 via-deep-navy/50 to-deep-navy/20" />
        </div>

        <div className="relative z-10 flex min-h-screen items-center px-6 py-24 md:px-12 lg:px-24">
          <div>
            <FadeInOnScroll delay={200}>
              <h2 className="mt-6 font-serif text-3xl font-light leading-snug tracking-normal text-white md:text-5xl lg:text-6xl">
                <span className="md:hidden">누구에게도<br />방해받지 않는</span>
                <span className="hidden md:inline">누구에게도 방해받지 않는</span>
                <br />
                <span className="text-soft-gold">우리만의 바다 정원</span>
              </h2>
            </FadeInOnScroll>

            <FadeInOnScroll delay={400}>
              <div className="mt-6 h-px w-12 bg-soft-gold/40" />
            </FadeInOnScroll>

            <FadeInOnScroll delay={500}>
              <p className="mt-10 font-serif text-lg font-light leading-[1.5] tracking-normal text-white/90 md:text-xl">
                오직 한 가족만을 위한 단독선으로
                <br />
                온전한 진심을 전하세요.
              </p>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* ===== Section 3: 별을 품은 남해 ===== */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/KakaoTalk_20260225_100044188_03.jpg"
            alt="남해 바다 위로 비치는 따뜻한 햇살"
            fill
            className="object-cover"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-deep-navy/40 via-deep-navy/50 to-deep-navy/80" />
        </div>

        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center md:px-12">
          <FadeInOnScroll>
            <div className="mx-auto h-px w-12 bg-soft-gold/60 mb-10" />
          </FadeInOnScroll>

          <FadeInOnScroll delay={200}>
            <h2 className="font-serif text-3xl font-light leading-snug tracking-normal text-white md:text-5xl lg:text-6xl">
              별을 품은 남해를
              <br />
              또 한번 섬이 둘러싼,
              <br />
              <span className="text-soft-gold/80"><span className="md:hidden">하늘과 가장 맞닿은<br />바다 정원</span><span className="hidden md:inline">하늘과 가장 맞닿은 바다 정원</span></span>
            </h2>
          </FadeInOnScroll>

          <FadeInOnScroll delay={400}>
            <div className="mx-auto mt-12 max-w-2xl">
              <p className="font-serif text-lg font-light leading-[1.5] tracking-normal text-white/90 md:text-xl">
                좁은 납골당과 장지의 답답함을 벗어나,
                <br />
                본연의 모습 그대로 자유로울 수 있는 곳.
              </p>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll delay={600}>
            <div className="mx-auto mt-8 max-w-2xl">
              <p className="font-serif text-lg font-light leading-[1.5] tracking-normal text-white/90 md:text-xl">
                나로호의 꿈이 시작되는 낭도 앞바다에서
                <br />
                고인을 가장 빛나는 별로 모십니다.
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ===== Section 4: 자연장이란? ===== */}
      <section className="bg-deep-navy">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-12 md:py-36">
          <FadeInOnScroll delay={200}>
            <h2 className="text-center font-serif text-3xl font-light leading-snug tracking-normal text-white md:text-4xl lg:text-5xl">
              법률이 보장하는{" "}
              <span className="text-soft-gold">자연장</span>
            </h2>
          </FadeInOnScroll>

          <FadeInOnScroll delay={300}>
            <div className="mx-auto mt-4 h-px w-12 bg-soft-gold/40" />
          </FadeInOnScroll>

          <FadeInOnScroll delay={400}>
            <div className="mx-auto mt-10 max-w-3xl rounded-sm border border-soft-gold/10 bg-white/[0.03] p-8">
              <p className="font-sans text-lg tracking-normal text-soft-gold/60">
                「장사 등에 관한 법률」 제2조 제3항
              </p>
              <p className="mt-4 font-serif text-lg font-light leading-[1.5] tracking-normal text-white/90 md:text-xl">
                &ldquo;자연장(自然葬)&rdquo;이란 화장한
                <br className="md:hidden" />
                {" "}유골의 골분(骨粉)을 수목·화초·잔디 등의 밑이나
                <br className="md:hidden" />
                {" "}주변에 묻거나 해양 등 대통령령으로
                <br className="md:hidden" />
                {" "}정하는 구역에 뿌려 장사하는 것을 말한다.
              </p>
            </div>
          </FadeInOnScroll>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                label: "합법적",
                title: "법률이 보장하는 자연장",
                desc: "「장사 등에 관한 법률」 제2조 제3항에 의거, 해안으로부터 5km 이상 떨어진 해역에서 시행하는 합법적인 장례 방식입니다.",
              },
              {
                label: "친환경",
                title: "자연으로 완전한 회귀",
                desc: "고온 화장 후 미세하게 분골된 유골은 \n자연 성분(칼슘·인)만 남아 해양 생태계에 \n어떠한 해도 끼치지 않습니다.",
              },
              {
                label: "영속적",
                title: "묘지 관리 부담 제로",
                desc: "묘지 이전, 벌초, 관리비 걱정 없이 \n매년 바다를 찾아 자유롭게 추모할 수 있어 \n후손의 부담이 완전히 사라집니다.",
              },
            ].map((item, i) => (
              <FadeInOnScroll key={i} delay={i * 150 + 500}>
                <div className="flex h-full flex-col rounded-sm border border-soft-gold/10 bg-white/[0.03] p-8">
                  <span className="font-sans text-sm font-medium tracking-[0.2em] text-soft-gold">
                    {item.label}
                  </span>
                  <h3 className="mt-3 font-serif text-xl font-medium tracking-normal text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 whitespace-pre-line font-sans text-lg leading-[1.6] tracking-normal text-white/90 md:whitespace-normal">
                    {item.desc}
                  </p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Section 5: 나로우주센터 뷰 ===== */}
      <section className="bg-[#0d1a2a]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-40">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
            <FadeInOnScroll>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src="/images/KakaoTalk_20260225_100018662_02.jpg"
                  alt="나로우주센터가 보이는 탁 트인 바다"
                  fill
                  className="object-cover"
                  quality={85}
                />
              </div>
            </FadeInOnScroll>

            <div>
              <FadeInOnScroll delay={300}>
                <h2 className="mt-5 font-serif text-3xl font-light leading-snug tracking-normal text-white md:text-4xl lg:text-5xl">
                  우주로 향하는 바다,
                  <br />
                  가장 맑고 탁 트인
                  <br />
                  <span className="text-soft-gold">대자연의 명당</span>
                </h2>
              </FadeInOnScroll>

              <FadeInOnScroll delay={400}>
                <div className="mt-4 h-px w-12 bg-soft-gold/40" />
              </FadeInOnScroll>

              <FadeInOnScroll delay={500}>
                <p className="mt-8 font-serif text-lg font-light leading-[1.5] tracking-normal text-white/90 md:text-xl">
                  성해원(星海園)은 해안선 5km 밖, 오염되지 않은
                  <br />
                  가장 깊은 남해 먼바다로 향합니다.
                </p>
              </FadeInOnScroll>

              <FadeInOnScroll delay={600}>
                <p className="mt-6 font-serif text-lg font-light leading-[1.5] tracking-normal text-white/90 md:text-xl">
                  고흥 나로우주센터가 보이는 시원한 시야는,
                  <br />
                  고인의 영원한 비상(飛上)을 기원하는
                  <br />
                  <span className="md:hidden">성해원(星海園)만의<br />독보적인 산분 포인트입니다.</span>
                  <span className="hidden md:inline">성해원(星海園)만의 독보적인 산분 포인트입니다.</span>
                </p>
              </FadeInOnScroll>
            </div>
          </div>

          <div className="mt-20 grid gap-4 md:grid-cols-3">
            <FadeInOnScroll>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src="/images/KakaoTalk_20260225_100044188_02.jpg"
                  alt="청정 남해 수평선"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  quality={80}
                />
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll delay={150}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src="/images/KakaoTalk_20260225_100044188_10.jpg"
                  alt="나로우주센터 근접 뷰"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  quality={80}
                />
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll delay={300}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src="/images/KakaoTalk_20260225_100044188_22.jpg"
                  alt="남해 노을과 바다"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  quality={80}
                />
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* ===== Section 6: 추모 당일 절차 타임라인 ===== */}
      <section className="bg-deep-navy">
        <div className="mx-auto max-w-5xl px-6 py-24 md:px-12 md:py-36">
          <FadeInOnScroll delay={200}>
            <h2 className="text-center font-serif text-3xl font-light leading-snug tracking-normal text-white md:text-4xl lg:text-5xl">
              <span className="md:hidden">추모 당일,<br />이렇게 진행됩니다</span>
              <span className="hidden md:inline">추모 당일, 이렇게 진행됩니다</span>
            </h2>
          </FadeInOnScroll>

          <FadeInOnScroll delay={300}>
            <div className="mx-auto mt-4 h-px w-12 bg-soft-gold/40" />
          </FadeInOnScroll>

          <div className="relative mt-16">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-soft-gold/10 md:left-1/2 md:-translate-x-px" />

            {[
              {
                time: "STEP 01",
                title: "추모실 집결 및 안내",
                desc: "여수 낭도 성해원(星海園) 추모실로 고인을 모시고, \n당일 절차를 안내합니다. (제사는 선택사항)",
              },
              {
                time: "STEP 02",
                title: "단독 추모선 출항",
                desc: "오직 고인과 유족분들만 태운 \n단독 추모선이 출항합니다. (최대 16인승)",
              },
              {
                time: "STEP 03",
                title: "해양장지 도착",
                desc: "해안선 5km 밖 산분 포인트에 도착합니다.",
              },
              {
                time: "STEP 04",
                title: "산분 및 헌화",
                desc: "고인과의 마지막 인사 후 산분하고, \n마지막으로 헌화를 진행합니다.",
              },
              {
                time: "STEP 05",
                title: "귀항 및 증명서 발급",
                desc: "귀항 후 고인을 모신 해양장지의 \nGPS 좌표를 기록한 증명서를 발급합니다.",
              },
            ].map((step, i) => (
              <FadeInOnScroll key={i} delay={i * 100 + 400}>
                <div className={`relative mb-12 flex flex-col pl-12 md:pl-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}>
                    <span className="font-sans text-sm font-medium tracking-[0.2em] text-soft-gold/80">
                      {step.time}
                    </span>
                    <h3 className="mt-2 font-serif text-lg font-medium tracking-normal text-white md:text-xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 whitespace-pre-line font-sans text-lg leading-[1.6] tracking-normal text-white/90 md:whitespace-normal">
                      {step.desc}
                    </p>
                  </div>
                  <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-soft-gold/20 bg-deep-navy md:static md:shrink-0">
                    <div className="h-2.5 w-2.5 rounded-full bg-soft-gold/60" />
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Section 7: 추모대기실 안내 ===== */}
      <section className="bg-[#0d1a2a]">
        <div className="mx-auto max-w-5xl px-6 py-24 md:px-12 md:py-36">
          <div className="text-center">
            <FadeInOnScroll delay={200}>
              <h2 className="mt-6 font-serif text-3xl font-light leading-snug tracking-normal text-white md:text-5xl lg:text-6xl">
                추모대기실에서
                <br />
                <span className="text-soft-gold">편안하게 기다리실 수 있습니다</span>
              </h2>
            </FadeInOnScroll>

            <FadeInOnScroll delay={300}>
              <div className="mx-auto mt-6 h-px w-12 bg-soft-gold/40" />
            </FadeInOnScroll>
          </div>

          <FadeInOnScroll delay={400}>
            <div className="mx-auto mt-16 max-w-3xl text-center">
              <p className="font-serif text-lg font-light leading-[1.5] tracking-normal text-white/90 md:text-xl">
                성해원은 추모 대기실이 따로 마련되어 있어
                <br />
                배 위에서 제사를 지내는 것이 아닌
                <br />
                추모실에서 안전하고 편안하게
                <br className="md:hidden" />
                {" "}제사를 지낼 수 있습니다.
              </p>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll delay={500}>
            <div className="mx-auto mt-10 max-w-3xl text-center">
              <p className="font-serif text-lg font-light leading-[1.5] tracking-normal text-white/90 md:text-xl">
                고령이시거나 배멀미가 심하신 분,
                <br />
                꼭 함께 승선하지 않아도 되는 분들은
                <br />
                <span className="md:hidden">성해원(星海園) 추모 대기실에서<br />편안히 대기하실 수 있습니다.</span>
                <span className="hidden md:inline">성해원(星海園) 추모 대기실에서 편안히 대기하실 수 있습니다.</span>
              </p>
            </div>
          </FadeInOnScroll>

          {/* 추모대기실 이미지 — 추후 추가 예정 */}
        </div>
      </section>

      {/* ===== Section 8: FAQ ===== */}
      <section className="bg-deep-navy">
        <div className="mx-auto max-w-4xl px-6 py-24 md:px-12 md:py-36">
          <FadeInOnScroll delay={200}>
            <h2 className="text-center font-serif text-3xl font-light leading-snug tracking-normal text-white md:text-4xl lg:text-5xl">
              자주 묻는 질문
            </h2>
          </FadeInOnScroll>

          <FadeInOnScroll delay={300}>
            <div className="mx-auto mt-4 h-px w-12 bg-soft-gold/40" />
          </FadeInOnScroll>

          <FadeInOnScroll delay={400}>
            <div className="mt-14">
              <FAQItem
                q="해양장은 합법인가요?"
                a="네, 「장사 등에 관한 법률」 제2조 제3항에 따라 화장한 유골의 골분을 해안으로부터 5km 이상 떨어진 해역에 산분하는 것은 합법적인 장례 방법입니다."
              />
              <FAQItem
                q="날씨가 안 좋으면 어떻게 되나요?"
                a="유족들의 안전이 최우선입니다. 기상 상황에 따라 출항이 어려운 경우 추모실에 임시 안치 후 가장 가까운 좋은 날씨의 날짜로 일정을 변경하여 산분하거나 대신하여 산분하여 드립니다. 고인은 안전하게 보관됩니다."
              />
              <FAQItem
                q="멀미가 걱정됩니다."
                a="성해원(星海園)이 운항하는 남해 먼바다는 내해(內海) 특성상 비교적 파도가 잔잔합니다. 또한 16인승 선박은 안정성이 높으나 기상 상황에 따른 혹시 모를 상황에 대비해 멀미약도 준비되어 있습니다."
              />
              <FAQItem
                q="유골함은 어떻게 준비하나요?"
                a="해양장은 유골함에서 유골만 꺼내어 산분하는 형태이기 때문에 비싼 유골함은 쓰실 필요가 없으며 목함에 모셔오는 것이 가장 좋습니다."
              />
              <FAQItem
                q="기존 묘지에서 개장(이장)도 가능한가요?"
                a="물론입니다! 성해원(星海園)과 협업체인 장묘업체가 있으며 전국적으로 서비스를 진행해 드릴 수 있습니다. 개장부터 해양장까지 원스톱으로 진행 가능합니다."
              />
              <FAQItem
                q="기일 추모 서비스가 있을까요?"
                a="네, 저희 성해원(星海園)은 49제, 기일 추모 서비스를 진행하고 있습니다. 산분 포인트가 정확하기 때문에 언제든 추모가 가능합니다."
              />
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ===== Section 9: CTA ===== */}
      <section className="relative min-h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/KakaoTalk_20260225_100018662_15.jpg"
            alt="남해 바다 석양"
            fill
            className="object-cover"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 via-deep-navy/50 to-deep-navy/30" />
        </div>

        <div className="relative z-10 flex min-h-[80vh] flex-col items-center justify-center px-6 py-24 text-center md:px-12">
          <FadeInOnScroll>
            <div className="mx-auto h-px w-12 bg-soft-gold/60 mb-10" />
          </FadeInOnScroll>

          <FadeInOnScroll delay={200}>
            <h2 className="font-serif text-2xl font-light leading-snug tracking-normal text-white md:text-4xl lg:text-5xl">
              <span className="md:hidden">고인을 추모하는 일에만<br />집중할 수 있도록,</span>
              <span className="hidden md:inline">고인을 추모하는 일에만 집중할 수 있도록,</span>
              <br />
              <span className="md:hidden">복잡한 절차와 준비는<br /><span className="text-soft-gold">성해원(星海園)이 모두 다 하겠습니다.</span></span>
              <span className="hidden md:inline">복잡한 절차와 준비는 <span className="text-soft-gold">성해원(星海園)이 모두 다 하겠습니다.</span></span>
            </h2>
          </FadeInOnScroll>

          <FadeInOnScroll delay={400}>
            <div className="mx-auto mt-6 h-px w-12 bg-soft-gold/30" />
          </FadeInOnScroll>

          <FadeInOnScroll delay={500}>
            <p className="mx-auto mt-10 max-w-2xl font-serif text-lg font-light leading-[1.5] tracking-normal text-white/90 md:text-xl">
              성해원(星海園)은 대표가 직접 상담을 진행합니다.
              <br />
              한 통의 전화면 충분합니다.
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll delay={600}>
            <p className="mx-auto mt-6 max-w-2xl font-serif text-lg font-light leading-[1.5] tracking-normal text-white/90 md:text-xl">
              가족의 마음으로 깊이 공감하되,
              <br />
              <span className="md:hidden">전문가의 시선으로 모든 과정을<br />빈틈없이 챙기겠습니다.</span>
              <span className="hidden md:inline">전문가의 시선으로 모든 과정을 빈틈없이 챙기겠습니다.</span>
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll delay={800}>
            <a
              href="tel:01025197592"
              className="mt-14 inline-flex items-center gap-3 rounded-full border border-soft-gold/30 bg-soft-gold/10 px-10 py-4 font-sans text-lg tracking-normal text-soft-gold backdrop-blur-md transition-all hover:bg-soft-gold/20"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              010-2519-7592
            </a>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="bg-[#080f18] py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="flex flex-col items-center gap-8 text-center">
            <div className="flex flex-col items-center gap-4">
              <Image src="/images/logo.png" alt="성해원(星海園)" width={72} height={72} />
              <div>
                <p className="font-serif text-4xl tracking-normal text-soft-gold md:text-5xl">
                  성해원(星海園)
                </p>
                <p className="mt-2 font-sans text-lg tracking-normal text-white/90">
                  별을 품은 바다정원의 안식처 · 프라이빗 해상 추모 · 해양장 전문
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-start justify-center gap-x-8 gap-y-4 text-center md:gap-x-12">
              <div>
                <p className="font-sans text-sm tracking-normal text-soft-gold/40">대표</p>
                <p className="mt-0.5 font-sans text-lg text-white/90">윤태관</p>
              </div>
              <div>
                <p className="font-sans text-sm tracking-normal text-soft-gold/40">상담 전화</p>
                <p className="mt-0.5 font-sans text-lg text-white/90">010-2519-7592</p>
              </div>
              <div>
                <p className="font-sans text-sm tracking-normal text-soft-gold/40">승선 주소</p>
                <p className="mt-0.5 font-sans text-lg leading-snug text-white/90">
                  전라남도 여수시 화정면 낭도리 낭도선착장
                </p>
              </div>
              <div>
                <p className="font-sans text-sm tracking-normal text-soft-gold/40">사업장 주소</p>
                <p className="mt-0.5 font-sans text-lg leading-snug text-white/90">
                  광주광역시 북구 서하로 463, 2층 B24호(각화동)
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/5 pt-6 text-center">
            <p className="font-sans text-sm tracking-normal text-white/70">
              © 2026 성해원(星海園). All rights reserved. | 사업자등록번호 431-99-02171 | 대표 윤태관
            </p>
          </div>
        </div>
      </footer>

      {/* ===== 플로팅 버튼 (우측 하단) ===== */}
      <div
        className={`fixed bottom-6 right-5 z-50 flex flex-col items-center gap-3 transition-all duration-700 ease-out md:bottom-8 md:right-8 ${
          ctaVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0 pointer-events-none"
        }`}
      >
        <a
          href="tel:01025197592"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-soft-gold shadow-lg shadow-soft-gold/20 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-soft-gold/30"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a2332" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
          </svg>
          <span className="absolute right-full mr-3 whitespace-nowrap rounded-full bg-soft-gold px-3 py-1.5 font-sans text-sm tracking-normal text-deep-navy opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
            전화 상담
          </span>
        </a>
        <a
          href="http://pf.kakao.com/_eVxjxhX/chat"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#FEE500] shadow-lg shadow-yellow-500/20 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-yellow-500/30"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#3C1E1E">
            <path d="M12 3C6.48 3 2 6.58 2 11c0 2.83 1.88 5.31 4.7 6.72-.15.56-.8 2.95-.83 3.12 0 0-.02.14.07.2.09.05.2.01.2.01.26-.04 3.04-2 3.98-2.65.6.09 1.22.13 1.88.13 5.52 0 10-3.58 10-8s-4.48-8-10-8z"/>
          </svg>
          <span className="absolute right-full mr-3 whitespace-nowrap rounded-full bg-[#FEE500] px-3 py-1.5 font-sans text-sm tracking-normal text-[#3C1E1E] opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
            카카오톡 문의
          </span>
        </a>
      </div>
    </main>
  );
}
