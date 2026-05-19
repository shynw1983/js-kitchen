import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="text-base font-medium tracking-[0.08em]">
          J&apos;s Kitchen
        </Link>
        <nav className="flex items-center gap-6 text-sm text-neutral-600">
          <Link href="/about" className="transition hover:text-black">
            キッチンについて
          </Link>
          <Link href="/brands" className="transition hover:text-black">
            ブランド
          </Link>
          <Link href="/takeout" className="transition hover:text-black">
            テイクアウト
          </Link>
          <Link href="/contact" className="transition hover:text-black">
            お問い合わせ
          </Link>
        </nav>
      </div>
    </header>
  );
}
