"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import FadeInOnScroll from "@/components/FadeInOnScroll";

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-foreground/8">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-6 text-left"
      >
        <span className="pr-4 font-sans text-sm font-medium tracking-wide text-deep-navy md:text-base">
          {q}
        </span>
        <span
          className={`shrink-0 text-ocean-blue transition-transform duration-300 ${
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
        <p className="font-sans text-sm leading-[1.7] tracking-wide text-muted-text">{a}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setCtaVisible(window.scrollY > window.innerHeight * 0.5);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12">
          <a href="#" className="font-serif text-xl tracking-widest text-white drop-shadow-lg md:text-2xl">
            海苑
          </a>
          <a
            href="tel:01012345678"
            className="rounded-full border border-white/40 bg-white/10 px-5 py-2 font-sans text-xs tracking-wider text-white backdrop-blur-md transition-all hover:bg-white/20 md:text-sm"
          >
            24시간 상담
          </a>
        </div>
      </nav>

      {/* ===== Section 1: Hero ===== */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/KakaoTalk_20260225_100044188_02.jpg"
            alt="청정 남해 탁 트인 수평선"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/50" />
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <div
            className={`transition-all duration-[2000ms] ease-out ${
              heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="mb-4 font-sans text-xs tracking-[0.35em] text-white/70 md:text-sm">
              PRIVATE OCEAN MEMORIAL
            </p>
          </div>

          <h1
            className={`font-serif text-3xl font-light leading-snug tracking-wide text-white md:text-5xl lg:text-6xl transition-all duration-[2000ms] ease-out delay-300 ${
              heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            대자연의 끝없는 품에서
            <br />
            <span className="mt-2 block">영원한 안식을 만나다</span>
          </h1>

          <div
            className={`mt-6 transition-all duration-[2000ms] ease-out delay-700 ${
              heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="font-serif text-lg font-extralight tracking-wider text-white/80 md:text-xl">
              해원(海苑)
            </p>
          </div>

          <div
            className={`mt-10 transition-all duration-[2000ms] ease-out delay-1000 ${
              heroLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="max-w-xl font-sans text-xs leading-normal tracking-wide text-white/60 md:text-sm">
              우주를 향해 열린 바다,
              <br className="md:hidden" />
              나로우주센터가 조망되는
              <br className="md:hidden" />
              청정 남해 해양장
            </p>
          </div>

          <div
            className={`absolute bottom-10 transition-all duration-1000 delay-[1500ms] ${
              heroLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="font-sans text-[10px] tracking-[0.3em] text-white/40">SCROLL</span>
              <div className="h-12 w-px bg-gradient-to-b from-white/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Section 2: 공감과 포용 ===== */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/KakaoTalk_20260225_100044188_03.jpg"
            alt="남해 바다 위로 비치는 따뜻한 햇살"
            fill
            className="object-cover"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/60" />
        </div>

        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center md:px-12">
          <FadeInOnScroll>
            <div className="mx-auto h-px w-12 bg-soft-gold/60 mb-10" />
          </FadeInOnScroll>

          <FadeInOnScroll delay={200}>
            <h2 className="font-serif text-2xl font-light leading-snug tracking-wide text-white md:text-4xl lg:text-5xl">
              가장 넓고 자유로운
              <br />
              자연의 품으로 모시는
              <br />
              <span className="text-soft-gold/80">아름다운 배웅</span>
            </h2>
          </FadeInOnScroll>

          <FadeInOnScroll delay={400}>
            <div className="mx-auto mt-12 max-w-2xl">
              <p className="font-serif text-sm font-light leading-[1.8] tracking-wide text-white/80 md:text-base">
                이제 막 곁을 떠나신
                <br className="md:hidden" />
                부모님의 첫 안식처를
                <br className="md:hidden" />
                찾으시는 분들도,
                <br className="hidden md:block" />
                오랜 시간 모셔둔 산소나
                <br className="md:hidden" />
                추모관에서 더 넓은 자연으로
                <br className="hidden md:block" />
                이장을 준비하시는 분들도.
              </p>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll delay={600}>
            <div className="mx-auto mt-8 max-w-2xl">
              <p className="font-serif text-sm font-light leading-[1.8] tracking-wide text-white/70 md:text-base">
                해원은 얽매임 없는
                <br className="md:hidden" />
                끝없는 바다에서
                <br className="hidden md:block" />
                고인에게는
                <br className="md:hidden" />
                완전한 자유와 평온을,
                <br className="hidden md:block" />
                남은 가족에게는
                <br className="md:hidden" />
                깊은 위로를 선물합니다.
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ===== Section: 해양장이란? ===== */}
      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-6 py-24 md:px-12 md:py-36">
          <FadeInOnScroll>
            <p className="text-center font-sans text-xs tracking-[0.3em] text-ocean-blue/60">
              ABOUT OCEAN BURIAL
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll delay={200}>
            <h2 className="mt-5 text-center font-serif text-2xl font-light leading-snug tracking-wide text-deep-navy md:text-3xl lg:text-4xl">
              해양장(海葬)이란?
            </h2>
          </FadeInOnScroll>

          <FadeInOnScroll delay={300}>
            <div className="mx-auto mt-4 h-px w-12 bg-soft-gold/40" />
          </FadeInOnScroll>

          <FadeInOnScroll delay={400}>
            <p className="mx-auto mt-10 max-w-2xl text-center font-serif text-sm font-light leading-[1.8] tracking-wide text-muted-text md:text-base">
              해양장은 화장 후 분골된 유골을
              <br className="md:hidden" />
              바다에 정중히 모시는
              <br className="hidden md:block" />
              대한민국 「장사 등에 관한 법률」
              <br className="md:hidden" />
              제2조에 따른 합법적인 자연장입니다.
            </p>
          </FadeInOnScroll>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                label: "합법적",
                title: "법률이 보장하는 장법",
                desc: "「장사 등에 관한 법률」 제2조 제4호에 의거, 해안으로부터 5km 이상 떨어진 해역에서 시행하는 합법적인 장례 방식입니다.",
              },
              {
                label: "친환경",
                title: "자연으로 완전한 회귀",
                desc: "고온 화장 후 미세하게 분골된 유골은 자연 성분(칼슘·인)만 남아 해양 생태계에 어떠한 해도 끼치지 않습니다.",
              },
              {
                label: "영속적",
                title: "묘지 관리 부담 제로",
                desc: "묘지 이전, 벌초, 관리비 걱정 없이 매년 바다를 찾아 자유롭게 추모할 수 있어 후손의 부담이 완전히 사라집니다.",
              },
            ].map((item, i) => (
              <FadeInOnScroll key={i} delay={i * 150 + 500}>
                <div className="rounded-sm border border-foreground/5 bg-white p-8">
                  <span className="font-sans text-[10px] font-medium tracking-[0.2em] text-ocean-blue">
                    {item.label}
                  </span>
                  <h3 className="mt-3 font-serif text-lg font-medium tracking-wide text-deep-navy">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-sans text-xs leading-[1.7] tracking-wide text-muted-text md:text-sm">
                    {item.desc}
                  </p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Section 3: 나로우주센터 뷰 ===== */}
      <section className="bg-warm-white">
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
              <FadeInOnScroll delay={200}>
                <p className="font-sans text-xs tracking-[0.3em] text-ocean-blue/60">
                  THE LOCATION
                </p>
              </FadeInOnScroll>

              <FadeInOnScroll delay={300}>
                <h2 className="mt-5 font-serif text-2xl font-light leading-snug tracking-wide text-deep-navy md:text-3xl lg:text-4xl">
                  우주로 향하는 바다,
                  <br />
                  가장 맑고 탁 트인
                  <br />
                  <span className="text-ocean-blue">대자연의 명당</span>
                </h2>
              </FadeInOnScroll>

              <FadeInOnScroll delay={400}>
                <div className="mt-4 h-px w-12 bg-soft-gold/40" />
              </FadeInOnScroll>

              <FadeInOnScroll delay={500}>
                <p className="mt-8 font-serif text-sm font-light leading-[1.8] tracking-wide text-muted-text md:text-base">
                  해원은 해안선 5km 밖,
                  <br className="md:hidden" />
                  오염되지 않은
                  <br className="hidden lg:block" />
                  가장 깊은 남해
                  <br className="md:hidden" />
                  먼바다로 향합니다.
                </p>
              </FadeInOnScroll>

              <FadeInOnScroll delay={600}>
                <p className="mt-6 font-serif text-sm font-light leading-[1.8] tracking-wide text-muted-text md:text-base">
                  고흥 나로우주센터가
                  <br className="md:hidden" />
                  정면으로 마주 보이는
                  <br className="hidden lg:block" />
                  시원한 시야는, 고인의
                  <br className="md:hidden" />
                  영원한 비상(飛上)을 기원하는
                  <br className="hidden lg:block" />
                  해원만의 독보적인
                  <br className="md:hidden" />
                  산골 포인트입니다.
                </p>
              </FadeInOnScroll>
            </div>
          </div>

          <div className="mt-20 grid gap-4 md:grid-cols-3">
            <FadeInOnScroll>
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
                <Image
                  src="/images/KakaoTalk_20260225_100018662_03.jpg"
                  alt="나로도 해안선"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  quality={80}
                />
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll delay={150}>
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
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
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
                <Image
                  src="/images/KakaoTalk_20260225_100044188_16.jpg"
                  alt="탁 트인 남해 바다와 하늘"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  quality={80}
                />
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* ===== Section 4: 프라이빗 추모선 ===== */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/KakaoTalk_20260225_100018662.jpg"
            alt="잔잔한 남해 바다와 바위섬"
            fill
            className="object-cover"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/10" />
        </div>

        <div className="relative z-10 flex min-h-screen items-center px-6 py-24 md:px-12 lg:px-24">
          <div className="max-w-xl">
            <FadeInOnScroll>
              <p className="font-sans text-xs tracking-[0.3em] text-white/50">
                PRIVATE MEMORIAL
              </p>
            </FadeInOnScroll>

            <FadeInOnScroll delay={200}>
              <h2 className="mt-6 font-serif text-2xl font-light leading-snug tracking-wide text-white md:text-4xl lg:text-5xl">
                오직 상주님 가족만을 위해
                <br />
                허락된,
                <br />
                <span className="text-soft-gold/80">온전한 1시간 30분</span>
              </h2>
            </FadeInOnScroll>

            <FadeInOnScroll delay={400}>
              <div className="mt-6 h-px w-12 bg-soft-gold/40" />
            </FadeInOnScroll>

            <FadeInOnScroll delay={500}>
              <p className="mt-10 font-serif text-sm font-light leading-[1.8] tracking-wide text-white/75 md:text-base">
                모르는 사람들과 섞여
                <br className="md:hidden" />
                쫓기듯 인사하고
                <br className="hidden md:block" />
                돌아오는 길이
                <br className="md:hidden" />
                되지 않도록.
              </p>
            </FadeInOnScroll>

            <FadeInOnScroll delay={600}>
              <p className="mt-6 font-serif text-sm font-light leading-[1.8] tracking-wide text-white/75 md:text-base">
                해원은 오직 한 가족
                <br className="md:hidden" />
                (최대 10인)만을 모시는
                <br className="hidden md:block" />
                단독 추모선으로 출항합니다.
              </p>
            </FadeInOnScroll>

            <FadeInOnScroll delay={700}>
              <p className="mt-6 font-serif text-sm font-light leading-[1.8] tracking-wide text-white/60 md:text-base">
                바다 한가운데서
                <br className="md:hidden" />
                배의 엔진을 끄고,
                <br className="hidden md:block" />
                잔잔한 음악과 함께
                <br className="md:hidden" />
                누구의 눈치도 보지 않고
                <br className="hidden md:block" />
                마음껏 추모할 수 있는
                <br className="md:hidden" />
                프라이빗한 시간을 드립니다.
              </p>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* ===== Section: 추모 당일 절차 타임라인 ===== */}
      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-6 py-24 md:px-12 md:py-36">
          <FadeInOnScroll>
            <p className="text-center font-sans text-xs tracking-[0.3em] text-ocean-blue/60">
              CEREMONY FLOW
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll delay={200}>
            <h2 className="mt-5 text-center font-serif text-2xl font-light leading-snug tracking-wide text-deep-navy md:text-3xl lg:text-4xl">
              추모 당일,
              <br className="md:hidden" />
              이렇게 진행됩니다
            </h2>
          </FadeInOnScroll>

          <FadeInOnScroll delay={300}>
            <div className="mx-auto mt-4 h-px w-12 bg-soft-gold/40" />
          </FadeInOnScroll>

          <div className="relative mt-16">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-ocean-blue/10 md:left-1/2 md:-translate-x-px" />

            {[
              {
                time: "출항 30분 전",
                title: "선착장 집결 · 안내",
                desc: "고흥 나로도 선착장에서 대표가 직접 영접합니다. 유골함을 정중히 모시고, 당일 절차를 차분하게 안내드립니다.",
              },
              {
                time: "출항",
                title: "단독 추모선 출항",
                desc: "오직 한 가족만을 위한 10인승 추모선이 출항합니다. 나로우주센터를 바라보며 청정 먼바다를 향해 나아갑니다.",
              },
              {
                time: "약 30분 후",
                title: "해상 도착 · 엔진 정지",
                desc: "해안선 5km 밖 산골 포인트에 도착하면 엔진을 끕니다. 잔잔한 파도 소리와 추모 음악만 남은 고요한 시간이 시작됩니다.",
              },
              {
                time: "추모 의식",
                title: "묵념 · 추도사 · 헌화",
                desc: "미니 제단 앞에서 묵념과 추도의 시간을 갖습니다. 준비된 생화 꽃잎으로 바다 위에 헌화하며 마지막 인사를 나눕니다.",
              },
              {
                time: "산골",
                title: "자연의 품으로",
                desc: "분골된 유골을 바다에 정중히 모십니다. 꽃잎이 파도에 퍼져 나가는 장면은 평생 잊지 못할 아름다운 배웅이 됩니다.",
              },
              {
                time: "귀항",
                title: "GPS 좌표 기록 · 증명서 발급",
                desc: "고인이 잠드신 정확한 위도·경도 좌표를 기록하고, 고급 해양장 안치 증명서를 발급해 드립니다.",
              },
            ].map((step, i) => (
              <FadeInOnScroll key={i} delay={i * 100 + 400}>
                <div className={`relative mb-12 flex flex-col pl-12 md:pl-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}>
                    <span className="font-sans text-[10px] font-medium tracking-[0.2em] text-ocean-blue/80">
                      {step.time}
                    </span>
                    <h3 className="mt-2 font-serif text-base font-medium tracking-wide text-deep-navy md:text-lg">
                      {step.title}
                    </h3>
                    <p className="mt-2 font-sans text-xs leading-[1.7] tracking-wide text-muted-text md:text-sm">
                      {step.desc}
                    </p>
                  </div>
                  <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-ocean-blue/20 bg-cream md:static md:shrink-0">
                    <div className="h-2.5 w-2.5 rounded-full bg-ocean-blue/60" />
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Section 5: 전문성 - 원스톱 ===== */}
      <section className="bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-40">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
            <div className="order-2 md:order-1">
              <FadeInOnScroll>
                <p className="font-sans text-xs tracking-[0.3em] text-ocean-blue/60">
                  PROFESSIONAL
                </p>
              </FadeInOnScroll>

              <FadeInOnScroll delay={200}>
                <h2 className="mt-5 font-serif text-2xl font-light leading-snug tracking-wide text-deep-navy md:text-3xl lg:text-4xl">
                  첫 이별의 순간부터
                  <br />
                  새로운 안식처로의
                  <br className="md:hidden" />
                  이장까지,
                  <br />
                  <span className="text-ocean-blue">모든 여정을 함께합니다</span>
                </h2>
              </FadeInOnScroll>

              <FadeInOnScroll delay={300}>
                <div className="mt-4 h-px w-12 bg-soft-gold/40" />
              </FadeInOnScroll>

              <FadeInOnScroll delay={400}>
                <p className="mt-8 font-serif text-sm font-light leading-[1.8] tracking-wide text-muted-text md:text-base">
                  경황없는 3일장의
                  <br className="md:hidden" />
                  끝자락에서
                  <br className="hidden lg:block" />
                  바다로 모시는 절차부터,
                </p>
              </FadeInOnScroll>

              <FadeInOnScroll delay={500}>
                <p className="mt-4 font-serif text-sm font-light leading-[1.8] tracking-wide text-muted-text md:text-base">
                  기존의 묘지를
                  <br className="md:hidden" />
                  개장(파묘)하여
                  <br className="hidden lg:block" />
                  정중하게 옮겨 모시는
                  <br className="md:hidden" />
                  복잡한 과정까지.
                </p>
              </FadeInOnScroll>

              <FadeInOnScroll delay={600}>
                <p className="mt-6 font-serif text-sm font-light leading-[1.8] tracking-wide text-foreground/80 md:text-base">
                  장묘 및 의전 전문가{" "}
                  <span className="font-medium text-ocean-blue">뿌리깊은 장묘</span>의
                  <br className="hidden lg:block" />
                  노하우를 담아,
                  <br className="md:hidden" />
                  흩어진 절차를 하나로 모아
                  <br className="hidden lg:block" />
                  대표가 직접
                  <br className="md:hidden" />
                  처음부터 끝까지 책임집니다.
                </p>
              </FadeInOnScroll>
            </div>

            <FadeInOnScroll className="order-1 md:order-2">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/KakaoTalk_20260225_100018662_15.jpg"
                  alt="남해 바다 석양"
                  fill
                  className="object-cover"
                  quality={85}
                />
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* ===== Section 6: 가격과 신뢰 ===== */}
      <section className="bg-deep-navy">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-40">
          <div className="text-center">
            <FadeInOnScroll>
              <p className="font-sans text-xs tracking-[0.3em] text-white/40">
                TRANSPARENT PRICING
              </p>
            </FadeInOnScroll>

            <FadeInOnScroll delay={200}>
              <h2 className="mt-6 font-serif text-2xl font-light leading-snug tracking-wide text-white md:text-4xl lg:text-5xl">
                처음 약속한
                <br className="md:hidden" />
                금액 그대로,
                <br />
                <span className="text-soft-gold">변함없는 예우를
                <br className="md:hidden" />
                다합니다</span>
              </h2>
            </FadeInOnScroll>

            <FadeInOnScroll delay={300}>
              <div className="mx-auto mt-6 h-px w-12 bg-soft-gold/40" />
            </FadeInOnScroll>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "110만 원 단일 정찰제",
                desc: "추가 비용(수고비, 유류비 등) 일절 없음",
                icon: "₩",
              },
              {
                title: "VIP 단독 출항",
                desc: "오직 한 가족만을 위한 단독 선박 왕복 운항",
                icon: "⚓",
              },
              {
                title: "프리미엄 의전",
                desc: "해상 헌화용 생화 꽃잎, 추모 음악, 미니 제단 세팅",
                icon: "✿",
              },
              {
                title: "영원한 기록",
                desc: "고인이 잠드신 바다의 위도/경도 좌표가 기록된 고급 증명서 발급",
                icon: "📜",
              },
            ].map((item, i) => (
              <FadeInOnScroll key={i} delay={i * 150 + 400}>
                <div className="group rounded-sm border border-white/8 bg-white/[0.03] p-8 transition-all duration-500 hover:border-soft-gold/20 hover:bg-white/[0.06]">
                  <span className="block text-3xl">{item.icon}</span>
                  <h3 className="mt-5 font-serif text-base font-medium tracking-wide text-white md:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-sans text-xs leading-normal tracking-wide text-white/50 md:text-sm">
                    {item.desc}
                  </p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>

          <FadeInOnScroll delay={200}>
            <div className="mt-16 flex flex-col items-center">
              <div className="rounded-sm border border-soft-gold/20 bg-soft-gold/5 px-12 py-8 text-center">
                <p className="font-sans text-xs tracking-[0.2em] text-soft-gold/60">
                  ALL-INCLUSIVE
                </p>
                <p className="mt-3 font-serif text-4xl font-light tracking-wider text-soft-gold md:text-5xl">
                  110<span className="ml-1 text-2xl md:text-3xl">만 원</span>
                </p>
                <p className="mt-2 font-sans text-xs tracking-wide text-white/40">
                  추가 비용 없는 단일 정찰제
                </p>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ===== Section: FAQ ===== */}
      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-6 py-24 md:px-12 md:py-36">
          <FadeInOnScroll>
            <p className="text-center font-sans text-xs tracking-[0.3em] text-ocean-blue/60">
              FAQ
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll delay={200}>
            <h2 className="mt-5 text-center font-serif text-2xl font-light leading-snug tracking-wide text-deep-navy md:text-3xl lg:text-4xl">
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
                a="네, 「장사 등에 관한 법률」 제2조 제4호에 따라 화장한 유골의 골분을 해안으로부터 5km 이상 떨어진 해역에 뿌리는 것은 완전히 합법적인 장례 방법입니다. 별도의 신고나 허가가 필요하지 않습니다."
              />
              <FAQItem
                q="날씨가 안 좋으면 어떻게 되나요?"
                a="안전이 최우선입니다. 기상 상황에 따라 출항이 어려운 경우 사전에 연락드리며, 가장 가까운 좋은 날씨의 날짜로 무상 변경해 드립니다. 유골함은 안전하게 보관됩니다."
              />
              <FAQItem
                q="멀미가 걱정됩니다."
                a="해원이 운항하는 남해 먼바다는 내해(內海) 특성상 파도가 잔잔합니다. 또한 10인승 선박은 안정성이 높아 멀미 걱정이 거의 없으며, 혹시 모를 상황에 대비해 멀미약도 준비되어 있습니다."
              />
              <FAQItem
                q="유골함은 어떻게 준비하나요?"
                a="장례식장에서 화장 후 수습된 유골을 분골 처리하여 준비합니다. 이 과정이 아직 안 되신 경우에도 해원에서 분골부터 모든 절차를 대행해 드리니 걱정하지 않으셔도 됩니다."
              />
              <FAQItem
                q="기존 묘지에서 이장(파묘)도 가능한가요?"
                a="네, 해원의 모체인 '뿌리깊은 장묘'는 장묘 및 의전 전문 업체로, 기존 묘지의 개장(파묘) → 화장 → 분골 → 해양장까지 모든 과정을 원스톱으로 진행합니다."
              />
              <FAQItem
                q="나중에 다시 추모하러 갈 수 있나요?"
                a="물론입니다. 해양장 안치 증명서에 고인이 잠드신 정확한 GPS 좌표가 기록되어 있어, 언제든 그 바다를 찾아 추모하실 수 있습니다. 추모 재방문 운항도 별도로 상담 가능합니다."
              />
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ===== Section 7: CTA ===== */}
      <section className="relative min-h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/KakaoTalk_20260225_100044188_22.jpg"
            alt="남해 노을"
            fill
            className="object-cover"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        </div>

        <div className="relative z-10 flex min-h-[80vh] flex-col items-center justify-center px-6 py-24 text-center md:px-12">
          <FadeInOnScroll>
            <div className="mx-auto h-px w-12 bg-soft-gold/60 mb-10" />
          </FadeInOnScroll>

          <FadeInOnScroll delay={200}>
            <h2 className="font-serif text-2xl font-light leading-snug tracking-wide text-white md:text-4xl lg:text-5xl">
              가족의 마음으로,
              <br />
              <span className="text-soft-gold/90">24시간
              <br className="md:hidden" />
              대표가 직접</span>
              <br />
              듣고 움직입니다.
            </h2>
          </FadeInOnScroll>

          <FadeInOnScroll delay={400}>
            <p className="mx-auto mt-8 max-w-lg font-serif text-sm font-light leading-[1.7] tracking-wide text-white/60 md:text-base">
              경황없으신 순간,
              <br className="md:hidden" />
              복잡한 절차를
              <br className="md:hidden" />
              고민하실 필요 없습니다.
              <br className="hidden md:block" />
              한 통의 전화로,
              <br className="md:hidden" />
              모든 것을 함께 시작하겠습니다.
            </p>
          </FadeInOnScroll>

          {/* 인라인 상담 신청 폼 */}
          <FadeInOnScroll delay={600}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("상담 신청이 접수되었습니다. 빠른 시간 내 연락드리겠습니다.");
              }}
              className="mx-auto mt-14 w-full max-w-lg rounded-lg border border-white/10 bg-black/30 p-8 backdrop-blur-xl"
            >
              <p className="mb-6 font-serif text-base tracking-wide text-white/90">
                무료 상담 신청
              </p>
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="성함"
                  required
                  className="w-full rounded border border-white/15 bg-white/5 px-4 py-3 font-sans text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-soft-gold/40"
                />
                <input
                  type="tel"
                  placeholder="연락처"
                  required
                  className="w-full rounded border border-white/15 bg-white/5 px-4 py-3 font-sans text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-soft-gold/40"
                />
                <select
                  className="w-full rounded border border-white/15 bg-white/5 px-4 py-3 font-sans text-sm text-white/60 outline-none transition-colors focus:border-soft-gold/40"
                  defaultValue=""
                >
                  <option value="" disabled>상담 유형 선택</option>
                  <option value="new">신규 해양장 상담</option>
                  <option value="transfer">이장(파묘) 후 해양장</option>
                  <option value="revisit">추모 재방문</option>
                  <option value="other">기타 문의</option>
                </select>
                <button
                  type="submit"
                  className="mt-2 w-full rounded bg-soft-gold/90 py-3.5 font-sans text-sm font-medium tracking-wider text-deep-navy transition-colors hover:bg-soft-gold"
                >
                  상담 신청하기
                </button>
              </div>
              <p className="mt-3 font-sans text-[10px] tracking-wide text-white/25">
                입력하신 정보는 상담 목적 외에 사용되지 않습니다.
              </p>
            </form>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="bg-[#111] py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
            <div>
              <p className="font-serif text-2xl tracking-widest text-white/80">
                海苑
              </p>
              <p className="mt-2 font-sans text-xs tracking-wide text-white/30">
                프라이빗 해상 추모 · 해양장 전문
              </p>
            </div>

            <div className="flex flex-col gap-4 md:flex-row md:gap-12">
              <div>
                <p className="font-sans text-xs tracking-wider text-white/50">상담 전화</p>
                <p className="mt-1 font-sans text-sm text-white/80">010-1234-5678</p>
              </div>
              <div>
                <p className="font-sans text-xs tracking-wider text-white/50">운영 시간</p>
                <p className="mt-1 font-sans text-sm text-white/80">24시간 연중무휴</p>
              </div>
              <div>
                <p className="font-sans text-xs tracking-wider text-white/50">위치</p>
                <p className="mt-1 font-sans text-sm text-white/80">전남 고흥군 / 여수 낭도</p>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/5 pt-8 text-center">
            <p className="font-sans text-[10px] tracking-wider text-white/20">
              © 2026 해원(海苑). All rights reserved. | 뿌리깊은 장묘
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
          href="tel:01012345678"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-deep-navy shadow-lg shadow-deep-navy/30 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-deep-navy/40"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
          </svg>
          <span className="absolute right-full mr-3 whitespace-nowrap rounded-full bg-deep-navy/90 px-3 py-1.5 font-sans text-[11px] tracking-wide text-white opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
            전화 상담
          </span>
        </a>
        <a
          href="#"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#FEE500] shadow-lg shadow-yellow-500/20 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-yellow-500/30"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#3C1E1E">
            <path d="M12 3C6.48 3 2 6.58 2 11c0 2.83 1.88 5.31 4.7 6.72-.15.56-.8 2.95-.83 3.12 0 0-.02.14.07.2.09.05.2.01.2.01.26-.04 3.04-2 3.98-2.65.6.09 1.22.13 1.88.13 5.52 0 10-3.58 10-8s-4.48-8-10-8z"/>
          </svg>
          <span className="absolute right-full mr-3 whitespace-nowrap rounded-full bg-[#FEE500] px-3 py-1.5 font-sans text-[11px] tracking-wide text-[#3C1E1E] opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
            카카오톡 문의
          </span>
        </a>
      </div>
    </main>
  );
}
