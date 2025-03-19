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

  // Determina se o conteúdo está em estado de carregamento
  const isLoading = isLoadingShop || isFetchingShop;

  return (
    <div className="min-h-screen flex flex-col px-28 pt-12 pb-5">
      <ScrollToTopButton />

      {isLoading || isErrorShop ? (
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            <ShopCardSkeleton />
          ) : (
            <>
              {data && data.shop.length > 0 ? (
                data.shop.map((shop) => (
                  <ShopCard key={shop.offerId} shop={shop} />
                ))
              ) : data && data.shop.length === 0 ? (
                <div className="col-span-3 flex flex-col items-center justify-center py-10">
                  <Image src={NotFound} alt="Not Found" className="w-auto h-48" />

                  <div className="flex flex-col text-center space-y-2 mt-12">
                    <span className="font-bold text-xl">
                      Nenhum item encontrado na loja
                    </span>
                  </div>
                </div>
              ) : null}
            </>
          )}
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