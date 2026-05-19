import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const roadmap = [
  "ブランドと商品を選ぶ",
  "受取時間を選ぶ",
  "KOMOJU で決済する",
  "スタッフ画面で受注・進行管理",
];

export default function TakeoutPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-xs tracking-[0.24em] text-neutral-500">TAKEOUT</p>
        <h1 className="mt-4 text-4xl font-medium">テイクアウト導線</h1>
        <p className="mt-5 max-w-3xl leading-8 text-stone-700">
          テイクアウトは、今後の正式な注文導線として準備しています。導入後は、以下の流れでご利用いただけます。
        </p>
        <div className="mt-10 grid gap-0 border-t border-neutral-200 md:grid-cols-4">
          {roadmap.map((item, index) => (
            <div key={item} className="border-b border-neutral-200 py-6 md:border-r md:px-5 md:first:pl-0 md:last:border-r-0">
              <p className="text-xs text-neutral-500">0{index + 1}</p>
              <p className="mt-4 text-sm font-medium">{item}</p>
            </div>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
