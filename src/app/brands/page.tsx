import { BrandCard } from "@/components/brand-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { brands } from "@/lib/site-data";

export default function BrandsPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-xs tracking-[0.24em] text-neutral-500">BRANDS</p>
        <h1 className="mt-4 text-4xl font-medium">展開ブランド</h1>
        <p className="mt-4 max-w-2xl leading-8 text-stone-600">
          各ブランドは独立したメニューを持ちながら、同じ厨房品質のもとで運営されています。
        </p>
        <div className="mt-10 grid gap-x-12 md:grid-cols-2">
          {brands.map((brand) => (
            <BrandCard key={brand.slug} brand={brand} />
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
