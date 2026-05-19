"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const heroImages = [
  {
    src: "/images/hero-bowl-lines.svg",
    alt: "麻辣湯 bowl illustration",
    className: "object-cover",
    label: "fresh mala tang",
    caption: "注文ごとに仕上げる一杯。",
  },
  {
    src: "/images/maa-ma-logo.png",
    alt: "まぁ麻 logo",
    className: "object-contain p-10",
    label: "まぁ麻",
    caption: "出来立て麻辣湯",
  },
  {
    src: "/images/hero-kitchen-lines.svg",
    alt: "Kitchen process illustration",
    className: "object-cover",
    label: "kitchen process",
    caption: "厨房品質を、日々整える。",
  },
  {
    src: "/images/hero-delivery-lines.svg",
    alt: "Delivery illustration",
    className: "object-cover",
    label: "delivery ready",
    caption: "届いた時の状態まで設計する。",
  },
];

export function HeroImageRail() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroImages.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? heroImages.length - 1 : current - 1,
    );
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % heroImages.length);
  };

  return (
    <div className="min-w-0 border-l border-neutral-200 pl-6 md:pl-10">
      <div className="hero-carousel relative h-[420px] overflow-hidden rounded-[28px] border border-neutral-200 bg-white md:h-[520px]">
        <div
          className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {heroImages.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="relative h-full w-full shrink-0 overflow-hidden bg-white"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 440px"
                priority={index < 2}
                className={image.className}
              />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/60 bg-white/80 px-5 py-4 backdrop-blur">
                <p className="text-xs tracking-[0.22em] text-neutral-500">
                  {image.label}
                </p>
                <p className="mt-2 text-sm font-medium">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-6 right-6 flex items-center gap-2 rounded-full border border-white/70 bg-white/75 p-1.5 backdrop-blur">
          <button
            type="button"
            onClick={goToPrevious}
            aria-label="前の画像へ"
            className="flex h-9 w-9 items-center justify-center rounded-full text-lg leading-none transition hover:bg-neutral-900 hover:text-white"
          >
            ←
          </button>
          <div className="flex gap-1.5 px-1">
            {heroImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`${index + 1}枚目の画像へ`}
                className={`h-2 rounded-full transition-all ${
                  activeIndex === index
                    ? "w-5 bg-neutral-900"
                    : "w-2 bg-neutral-900/25"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={goToNext}
            aria-label="次の画像へ"
            className="flex h-9 w-9 items-center justify-center rounded-full text-lg leading-none transition hover:bg-neutral-900 hover:text-white"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
