export type Product = {
  name: string;
  description: string;
  price: string;
  tags?: string[];
};

export type Brand = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  logo?: string;
  status: "active" | "coming-soon";
  accent: string;
  platforms: {
    uberEats?: string;
    demaeCan?: string;
  };
  products: Product[];
};

export const kitchen = {
  name: "J's Kitchen",
  address: "福岡市南区清水 1-2-8-103",
  concept:
    "福岡・清水の小さな厨房から、複数のオンライン飲食ブランドを丁寧に育てています。デリバリーを中心に、これからはテイクアウトにも対応していきます。",
};

export const brands: Brand[] = [
  {
    slug: "mala-tang",
    name: "まぁ麻",
    tagline: "出来立て麻辣湯",
    description:
      "注文ごとに仕上げる、出来立ての麻辣湯ブランドです。麻・辣・旨み・香りのバランスを大切にしながら、辛さや具材を選べる一杯をお届けします。",
    logo: "/images/maa-ma-logo.png",
    status: "active",
    accent: "from-red-500 to-orange-400",
    platforms: {
      uberEats: "#",
      demaeCan: "#",
    },
    products: [
      {
        name: "招牌麻辣烫",
        description: "牛骨スープに野菜、豆製品、厳選具材を合わせた定番メニュー。",
        price: "¥980〜",
        tags: ["看板", "辛さ選択可"],
      },
      {
        name: "トマト麻辣湯",
        description: "酸味と甘みのあるトマトスープ。辛さが苦手な方にもおすすめです。",
        price: "¥980〜",
        tags: ["人気", "マイルド"],
      },
      {
        name: "2名様シェアセット",
        description: "主食、サイド、ドリンクを組み合わせたシェア向けセット。",
        price: "¥2,180",
        tags: ["セット"],
      },
    ],
  },
  {
    slug: "next-brand",
    name: "新ブランド準備中",
    tagline: "次のブランドを準備しています。",
    description:
      "J's Kitchen では、同じ厨房品質を保ちながら、異なる食体験を持つブランドを少しずつ増やしていきます。",
    status: "coming-soon",
    accent: "from-stone-400 to-stone-300",
    platforms: {},
    products: [],
  },
];

export function getBrand(slug: string) {
  return brands.find((brand) => brand.slug === slug);
}
