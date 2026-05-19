import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-xs tracking-[0.24em] text-neutral-500">CONTACT</p>
        <h1 className="mt-4 text-4xl font-medium">お問い合わせ</h1>
        <div className="mt-10 border-t border-neutral-200 pt-6">
          <p className="max-w-2xl leading-8 text-neutral-700">
            協業相談、取材依頼、テイクアウトに関するお問い合わせフォームを接続予定です。現時点では構造を先に用意し、後からメール送信や管理フローへ接続できます。
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
