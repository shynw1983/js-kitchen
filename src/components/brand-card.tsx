import Link from "next/link";
import type { Brand } from "@/lib/site-data";

export function BrandCard({ brand }: { brand: Brand }) {
  return (
    <article className="group border-t border-neutral-200 py-7">
      <div>
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-xl font-medium tracking-tight">{brand.name}</h3>
          <span className="text-xs text-neutral-500">
            {brand.status === "active" ? "営業中" : "準備中"}
          </span>
        </div>
        <p className="mt-4 text-sm text-neutral-700">{brand.tagline}</p>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-500">{brand.description}</p>
        <Link
          href={`/brands/${brand.slug}`}
          className="mt-6 inline-flex text-sm text-black underline decoration-neutral-300 underline-offset-4 transition group-hover:decoration-black"
        >
          ブランド詳細を見る
        </Link>
      </div>
    </article>
  );
}
