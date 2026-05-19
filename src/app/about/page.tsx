import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { kitchen } from "@/lib/site-data";

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-xs tracking-[0.24em] text-neutral-500">ABOUT</p>
        <h1 className="mt-4 text-4xl font-medium">{kitchen.name} について</h1>
        <div className="mt-8 space-y-6 text-base leading-8 text-stone-700">
          <p>
            {kitchen.name} は{kitchen.address}にある、オンライン販売を前提にしたキッチン拠点です。
          </p>
          <p>
            ひとつの厨房から、異なるコンセプトの飲食ブランドを少しずつ育てています。デリバリープラットフォームや将来のテイクアウトを通じて、
            その日の気分に合う一食を選んでいただける場所を目指しています。
          </p>
          <p>
            ブランドは増えても、品質基準、衛生管理、提供の安定性は常に同じ水準であるべきだと考えています。
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
