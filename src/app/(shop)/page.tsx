"use client";

import Image from "next/image";

import { ScrollToTopButton } from "@/components/scroll-to-top-button";
import { formatDate } from "@/shared/utils/date-formatter";
import { useShop } from "@/shared/hooks/useShop";
import { useCountdown } from "@/shared/hooks/useCountdown";

import NotFound from "@/assets/not-found.gif";

import { ShopSkeleton } from "./_components/shop-skeleton";
import { ShopCardSkeleton } from "./_components/shop-card-skeleton";
import { ShopCard } from "./_components/shop-card";
import { ShopRefreshButton } from "./_components/shop-refresh-button";

export default function Shop() {
  const { shop: data, isLoadingShop, isFetchingShop, isErrorShop } = useShop();
  const countdown = useCountdown(21, 0); // 21:00 (9 PM)

  return (
    <div className="min-h-screen flex flex-col px-28 pt-12 pb-5">
      <ScrollToTopButton />

      {isLoadingShop || isFetchingShop || isErrorShop ? (
        <ShopSkeleton />
      ) : (
        <header className="w-full">
          <div className="flex items-center justify-between">
            <div className="flex flex-col space-y-2">
              <h2 className="text-2xl font-bold text-black">
                Itens na loja do Fortnite em{" "}
                {formatDate(data?.lastUpdate?.date)}
              </h2>
              <span className="text-gray-600">Nova loja em {countdown}</span>
            </div>

            <ShopRefreshButton />
          </div>
        </header>
      )}

      <div className="flex-1 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 space-y-12">
          {(isLoadingShop && !data) || isFetchingShop || isErrorShop ? (
            <ShopCardSkeleton />
          ) : null}

          {data &&
            [
              ...new Set(
                data.shop.map((item) => item.section?.name || "Outros")
              ),
            ].map((section) => {
              const items = data.shop.filter(
                (shop) => (shop.section?.name || "Outros") === section
              );

              return (
                <div key={section} className="col-span-full space-y-12">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-[1px] bg-gray-300/60 rounded-full" />
                    <span className="border border-gray-300 text-black/80 rounded-md px-2 py-1 inline-block text-xl font-medium [transform:skewY(-2deg)] [transform-origin:top_left] transition-all duration-300 font-['Fortnite',Helvetica,sans-serif]">
                      {section.toUpperCase()}
                    </span>
                    <div className="flex-1 h-[1px] bg-gray-300/60 rounded-full" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 space-y-12">
                    {items.map((shop) => (
                      <ShopCard key={shop.offerId} shop={shop} />
                    ))}
                  </div>
                </div>
              );
            })}
        </div>

        <div className="flex flex-col items-center justify-center py-10">
          <Image src={NotFound} alt="Not Found" className="w-auto h-48" />

          <div className="flex flex-col text-center space-y-2 mt-12">
            <span className="font-bold text-xl">
              Nenhum item encontrado na loja
            </span>

            <small className="text-gray-500">Tente novamente mais tarde</small>
          </div>
        </div>
      </div>

      <footer className="w-full">
        <div className="flex items-center justify-center">
          <span>❤️</span>
        </div>
      </footer>
    </div>
  );
}
