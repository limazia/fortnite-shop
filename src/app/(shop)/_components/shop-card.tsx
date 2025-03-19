import Image from "next/image";

import { ShopItem, Rarity } from "@/shared/interfaces/shop";
import { cn } from "@/shared/utils/cn";

import VBuck from "@/assets/vbuck.png";
import Default from "@/assets/default.webp";

interface ShopCardProps {
  shop: ShopItem;
}

export function ShopCard({ shop }: ShopCardProps) {
  const {
    displayName,
    displayAssets,
    displayType,
    displayDescription,
    price,
    rarity,
  } = shop;
  const { background } = displayAssets[0];
  const { regularPrice, finalPrice } = price;

  const rarityStyles: Record<Rarity["id"], string> = {
    common: "border-t-5 border-t-[#b0b0b0]",
    uncommon: "border-t-5 border-t-[#34c749]",
    rare: "border-t-5 border-t-[#3c7bea]",
    epic: "border-t-5 border-t-[#a33af3]",
    legendary: "border-t-5 border-t-[#f4c542]",
    mythic: "border-t-5 border-t-[#f04545]",
  };

  const rarityKey = (rarity?.id?.toLowerCase() as Rarity["id"]) ?? "common";

  return (
    <div className="rounded-md border-2 border-[#d0d7de] bg-white text-black [transform:skewY(-2deg)] [transform-origin:top_left] transition-all duration-300">
      <div className="banner">
        <Image
          src={background || Default}
          alt="Banner"
          className="block mx-auto object-contain w-full bg-center bg-no-repeat"
          width={300}
          height={300}
          quality={100}
        />
      </div>
      <div
        className={cn("rounded-none p-4 space-y-4", rarityStyles[rarityKey])}
      >
        <div className="flex flex-col space-y-2">
          <small className="text-gray-500">{displayType}</small>

          <div className="flex flex-col">
            <span className="uppercase text-2xl font-['Burbank_Big_Condensed']">
              {displayName}
            </span>
            <span>{displayDescription}</span>
          </div>
        </div>

        <div className="flex items-center justify-start gap-2 font-['Fortnite',Helvetica,sans-serif]">
          <Image src={VBuck} alt="V-Bucks" className="w-12 h-auto" />
          <div className="flex flex-col">
            {regularPrice !== finalPrice && (
              <span className="text-gray-700 line-through">{regularPrice}</span>
            )}
            <span className="text-2xl whitespace-nowrap text-black">
              {finalPrice}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
