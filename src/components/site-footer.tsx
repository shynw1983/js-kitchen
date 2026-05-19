import { kitchen } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200 bg-white text-neutral-700">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-10 md:grid-cols-2">
        <div>
          <p className="text-base font-medium">{kitchen.name}</p>
          <p className="mt-2 text-sm text-neutral-500">{kitchen.address}</p>
        </div>
        <div className="text-sm text-neutral-500 md:text-right">
          <p>オンラインブランド展開 · デリバリー · テイクアウト準備中</p>
          <p className="mt-2">© {new Date().getFullYear()} J&apos;s Kitchen</p>
        </div>
      </div>
    </footer>
  );
}
