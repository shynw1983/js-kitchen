import Image from "next/image";

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
  const images = [...heroImages, heroImages[0]];

  return (
    <div className="min-w-0 border-l border-neutral-200 pl-6 md:pl-10">
      <div className="hero-carousel relative h-[420px] overflow-hidden rounded-[28px] border border-neutral-200 bg-white md:h-[520px]">
        <div className="hero-carousel-track flex h-full">
          {images.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="relative h-full w-1/5 shrink-0 overflow-hidden bg-white"
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
        <div className="absolute bottom-6 right-6 flex gap-2">
          {heroImages.map((image) => (
            <span
              key={image.src}
              className="h-2 w-2 rounded-full bg-neutral-900/25"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
