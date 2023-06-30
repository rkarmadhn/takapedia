"use client";
import Image from "next/image";

const categoryList = [
  { icon: "discount.svg", name: "Promo Hari Ini" },
  { icon: "drugs.svg", name: "Kesehatan" },
  { icon: "pay.svg", name: "Topup & Tagihan" },
  { icon: "budget.svg", name: "Keuangan" },
  { icon: "travel.svg", name: "Travel & Entertainment" },
  { icon: "food.svg", name: "Makanan & Minuman" },
  { icon: "petFood.svg", name: "Perawatan Hewan" },
  { icon: "gaming.svg", name: "Gaming" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between mt-20 bg-white rounded-2xl">
      <div className="flex justify-start items-center w-full p-2 overflow-x-auto">
        {categoryList.map((item, index) => (
          <div
            className="flex items-center flex-col flex-shrink-0 self-stretch gap-2 p-1"
            style={{ width: 60 }}
            key={index}
          >
            <Image
              priority
              src={`/icons/kategori/${item.icon}`}
              alt="Discount"
              width={32}
              height={32}
            />
            <p className="typographyXs">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
