import Link from "next/link";
import { BrandCard } from "@/components/brand-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { brands, kitchen } from "@/lib/site-data";

const trustPoints = [
  "調理工程の標準化",
  "衛生と温度の管理",
  "ブランドを越えた品質基準",
  "デリバリー前提の商品設計",
];

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
              福岡・清水の厨房から、
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
            <p className="text-sm text-neutral-500">キッチン拠点</p>
            <p className="mt-4 text-2xl font-medium leading-snug">{kitchen.address}</p>
            <div className="mt-7 max-w-sm text-sm leading-8 text-neutral-600">
              店内飲食ではなく、オンライン注文に特化した厨房です。外からは見えにくい場所だからこそ、品質と衛生を日々整えています。
            </div>
          </div>
        </section>

        <section className="border-y border-neutral-200">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <p className="text-xs tracking-[0.24em] text-neutral-500">QUALITY</p>
            <div className="mt-8 grid gap-0 md:grid-cols-4">
              {trustPoints.map((point) => (
                <div key={point} className="border-t border-neutral-200 py-5 text-sm md:border-l md:border-t-0 md:px-5 md:py-0 first:md:border-l-0 first:md:pl-0">
                  {point}
                </div>
              ))}
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
