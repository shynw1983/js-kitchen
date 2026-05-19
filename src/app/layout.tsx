import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "J's Kitchen | 福岡・清水のバーチャルキッチン",
    template: "%s | J's Kitchen",
  },
  description:
    "福岡市南区清水にあるバーチャルキッチン。ひとつの厨房拠点から複数のオンライン飲食ブランドを展開しています。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full bg-white text-neutral-950">{children}</body>
    </html>
  );
}
