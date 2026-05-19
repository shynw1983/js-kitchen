import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { brands, getBrand } from "@/lib/site-data";

type BrandPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return brands.map((brand) => ({ slug: brand.slug }));
}

export async function generateMetadata({
  params,
}: BrandPageProps): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrand(slug);

  return {
    title: brand?.name ?? "ブランド",
    description: brand?.description,
  };
}

export default async function BrandPage({ params }: BrandPageProps) {
  const { slug } = await params;
  const brand = getBrand(slug);

  if (!brand) notFound();

  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-b border-neutral-200">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <p className="text-xs tracking-[0.24em] text-neutral-500">BRAND</p>
            <div className="mt-5 flex flex-col gap-6 sm:flex-row sm:items-center">
              {brand.logo ? (
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  width={112}
                  height={112}
                  priority
                  className="h-28 w-28 rounded-full object-contain"
                />
              ) : null}
              <div>
                <h1 className="text-4xl font-medium">{brand.name}</h1>
                <p className="mt-4 max-w-2xl text-neutral-600">{brand.tagline}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1fr_320px]">
          <div>
            <h2 className="text-2xl font-medium">ブランド紹介</h2>
            <p className="mt-4 leading-8 text-neutral-600">{brand.description}</p>

            <h2 className="mt-10 text-2xl font-medium">メニュー</h2>
            {brand.products.length > 0 ? (
              <div className="mt-5 space-y-4">
                {brand.products.map((product) => (
                  <article key={product.name} className="border-t border-neutral-200 py-5">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="font-semibold">{product.name}</h3>
                        <p className="mt-2 text-sm leading-7 text-neutral-600">
                          {product.description}
                        </p>
                      </div>
                      <p className="text-sm font-medium">{product.price}</p>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <p className="mt-4 text-neutral-600">メニューはブランド公開時に掲載予定です。</p>
            )}
          </div>

          <aside className="border-t border-neutral-200 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
            <h2 className="text-lg font-medium">注文する</h2>
            <div className="mt-5 space-y-3">
              <a className="block border border-black bg-black px-4 py-3 text-center text-sm text-white" href={brand.platforms.uberEats ?? "#"}>
                Uber Eats
              </a>
              <a className="block border border-neutral-300 px-4 py-3 text-center text-sm" href={brand.platforms.demaeCan ?? "#"}>
                出前館
              </a>
            </div>
            <div className="mt-6 border-t border-neutral-200 pt-5 text-sm leading-7 text-neutral-600">
              テイクアウト注文の導線は準備済みです。将来的には自社決済と注文管理フローへそのまま接続できます。
            </div>
            <Link href="/takeout" className="mt-4 inline-flex text-sm underline decoration-neutral-300 underline-offset-4 transition hover:decoration-black">
              テイクアウト導線を見る
            </Link>
          </aside>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
