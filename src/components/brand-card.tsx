import Link from "next/link";
import Image from "next/image";
import type { Brand } from "@/lib/site-data";

export function BrandCard({ brand }: { brand: Brand }) {
  return (
    <article className="group border-t border-neutral-200 py-7">
      <div>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            {brand.logo ? (
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                width={56}
                height={56}
                className="h-14 w-14 rounded-full object-contain"
              />
            ) : null}
            <h3 className="text-xl font-medium tracking-tight">{brand.name}</h3>
          </div>
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
