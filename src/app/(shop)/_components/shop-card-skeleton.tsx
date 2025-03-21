import { Skeleton } from "@/components/ui/skeleton";

export function ShopCardSkeleton() {
  return (
    <div className="col-span-full space-y-12">
      <div className="flex items-center gap-3">
        <Skeleton className="w-2 h-[1px] rounded-full" />
        <Skeleton className="w-32 h-6" />
        <Skeleton className="flex-1 h-[1px] rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 space-y-12">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="rounded-md border-2 border-[#d0d7de] bg-white text-black [transform:skewY(-2deg)] [transform-origin:top_left] transition-all duration-300"
          >
            <div className="banner">
              <Skeleton className="w-full h-[300px]" />
            </div>
            <div className="p-4 space-y-4">
              <div className="flex flex-col space-y-2">
                <Skeleton className="w-32 h-4" />

                <div className="flex flex-col space-y-1">
                  <Skeleton className="w-72 h-4" />

                  <Skeleton className="w-40 h-4" />
                </div>
              </div>

              <div className="flex items-center justify-start gap-2">
                <Skeleton className="w-40 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
