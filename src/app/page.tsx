import Link from "next/link";
import { BrandCard } from "@/components/brand-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { brands, kitchen, locations } from "@/lib/site-data";

const trustPoints = [
  {
    title: "調理工程の標準化",
    description: "仕込みから提供まで、同じ品質で届けるための手順を整えています。",
    icon: "process",
  },
  {
    title: "衛生と温度の管理",
    description: "清掃、保管、加熱・冷却の状態を日々確認し、厨房環境を保ちます。",
    icon: "hygiene",
  },
  {
    title: "ブランドを越えた品質基準",
    description: "複数ブランドであっても、厨房としての基本品質は共通です。",
    icon: "quality",
  },
  {
    title: "デリバリー前提の商品設計",
    description: "届いた時の状態まで考え、容器、温度、食べやすさを設計します。",
    icon: "delivery",
  },
];

function QualityIllustration({ type }: { type: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.4,
  };

  return (
    <div className="flex h-24 w-full items-center justify-start text-neutral-900">
      <svg
        aria-hidden="true"
        className="h-20 w-20"
        viewBox="0 0 80 80"
      >
        {type === "process" && (
          <>
            <rect {...common} x="15" y="16" width="38" height="48" rx="2" />
            <path {...common} d="M25 26h18M25 38h18M25 50h18" />
            <path {...common} d="m56 30 4 4 8-9" />
            <path {...common} d="m56 48 4 4 8-9" />
          </>
        )}
        {type === "hygiene" && (
          <>
            <path {...common} d="M34 16v28a12 12 0 1 0 12 0V16a6 6 0 0 0-12 0Z" />
            <path {...common} d="M40 52v.2" />
            <path {...common} d="M50 21h9M50 31h6" />
            <path {...common} d="M23 54c-4-4-4-10 0-15 4 5 4 11 0 15Z" />
          </>
        )}
        {type === "quality" && (
          <>
            <circle {...common} cx="40" cy="36" r="18" />
            <path {...common} d="m31 36 6 6 13-15" />
            <path {...common} d="m31 54-4 12 13-6 13 6-4-12" />
          </>
        )}
        {type === "delivery" && (
          <>
            <path {...common} d="M25 25h30l4 39H21l4-39Z" />
            <path {...common} d="M32 25a8 8 0 0 1 16 0" />
            <path {...common} d="M30 42h20" />
            <path {...common} d="M55 43h7l7 8v13H55" />
            <circle {...common} cx="32" cy="66" r="3" />
            <circle {...common} cx="63" cy="66" r="3" />
          </>
        )}
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="mx-auto grid max-w-6xl gap-14 px-6 py-16 md:grid-cols-[1.18fr_0.82fr] md:py-24">
          <div>
            <p className="text-xs tracking-[0.28em] text-neutral-500">
              VIRTUAL KITCHEN · FUKUOKA
            </p>
            <h1 className="mt-7 max-w-3xl text-[2.65rem] font-medium leading-[1.08] tracking-tight sm:text-6xl">
              ひとつの厨房から、
              <br />
              小さなブランドを育てていく。
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-neutral-600">
              {kitchen.concept}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/brands"
                className="border border-black bg-black px-5 py-3 text-sm text-white transition hover:bg-neutral-800"
              >
                ブランドを見る
              </Link>
              <Link
                href="/about"
                className="border border-neutral-300 px-5 py-3 text-sm transition hover:border-black"
              >
                キッチンについて
              </Link>
            </div>
          </div>
          <div className="border-l border-neutral-200 pl-6 md:pl-10">
            <p className="text-sm text-neutral-500">キッチンブランド</p>
            <p className="mt-4 text-2xl font-medium leading-snug">{kitchen.name}</p>
            <div className="mt-7 max-w-sm text-sm leading-8 text-neutral-600">
              店内飲食ではなく、オンライン注文に特化した厨房モデルです。外からは見えにくい場所だからこそ、品質と衛生を日々整えています。
            </div>
          </div>
        </section>

        <section className="border-y border-neutral-200">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <p className="text-xs tracking-[0.24em] text-neutral-500">QUALITY</p>
            <div className="mt-8 grid gap-0 md:grid-cols-4">
              {trustPoints.map((point) => (
                <div
                  key={point.title}
                  className="border-t border-neutral-200 py-7 md:border-l md:border-t-0 md:px-5 md:py-0 first:md:border-l-0 first:md:pl-0"
                >
                  <QualityIllustration type={point.icon} />
                  <h3 className="mt-2 text-sm font-medium">{point.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-500">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="border-t border-neutral-200 pt-10">
            <p className="text-xs tracking-[0.24em] text-neutral-500">LOCATIONS</p>
            <div className="mt-8 grid gap-8 md:grid-cols-[0.85fr_1.15fr]">
              <div>
                <h2 className="text-3xl font-medium">拠点一覧</h2>
                <p className="mt-4 max-w-md text-sm leading-7 text-neutral-600">
                  J&apos;s Kitchen の運営拠点です。今後の展開に合わせて、順次追加していきます。
                </p>
              </div>
              <div className="border-t border-neutral-200">
                {locations.map((location) => (
                  <article
                    key={location.name}
                    className="grid gap-4 border-b border-neutral-200 py-6 md:grid-cols-[1fr_1.25fr]"
                  >
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-medium">{location.name}</h3>
                        <span className="text-xs text-neutral-500">{location.status}</span>
                      </div>
                      <p className="mt-3 text-sm text-neutral-500">{location.address}</p>
                    </div>
                    <p className="text-sm leading-7 text-neutral-600">
                      {location.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs tracking-[0.24em] text-neutral-500">BRANDS</p>
              <h2 className="mt-3 text-3xl font-medium">展開ブランド</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-600">
                それぞれのブランドが独立したメニューと世界観を持ちながら、同じ厨房基準で運営されています。
              </p>
            </div>
            <Link href="/brands" className="text-sm underline decoration-neutral-300 underline-offset-4 transition hover:decoration-black">
              すべて見る
            </Link>
          </div>
          <div className="mt-10 grid gap-x-12 md:grid-cols-2">
            {brands.map((brand) => (
              <BrandCard key={brand.slug} brand={brand} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="border-t border-neutral-200 pt-10">
            <p className="text-xs tracking-[0.24em] text-neutral-500">TAKEOUT</p>
            <div className="mt-3 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <h2 className="text-3xl font-medium">テイクアウトにも対応予定です。</h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-600">
                  受取時間の指定、自社決済、注文ステータス、スタッフ向け管理画面まで、将来の運用を見据えて導線を準備しています。
                </p>
              </div>
              <Link
                href="/takeout"
                className="inline-flex border border-neutral-300 px-5 py-3 text-sm transition hover:border-black"
              >
                テイクアウト導線を見る
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
