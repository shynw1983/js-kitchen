import Image from "next/image";

const heroImages = [
  {
    src: "/images/maa-ma-logo.png",
    alt: "まぁ麻 logo",
    className: "object-contain p-10",
  },
  {
    src: "/images/hero-bowl-lines.svg",
    alt: "麻辣湯 bowl illustration",
    className: "object-cover",
  },
  {
    src: "/images/hero-kitchen-lines.svg",
    alt: "Kitchen process illustration",
    className: "object-cover",
  },
  {
    src: "/images/hero-delivery-lines.svg",
    alt: "Delivery illustration",
    className: "object-cover",
  },
];

export function HeroImageRail() {
  const images = [...heroImages, ...heroImages];

  return (
    <div className="border-l border-neutral-200 pl-6 md:pl-10">
      <div className="hero-rail h-[420px] overflow-hidden border border-neutral-200 bg-white">
        <div className="hero-rail-track flex h-full w-max">
          {images.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="relative h-full w-[min(68vw,360px)] shrink-0 overflow-hidden border-r border-neutral-200 bg-white"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 68vw, 360px"
                priority={index < 2}
                className={image.className}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
