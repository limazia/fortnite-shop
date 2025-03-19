import { Skeleton } from "@/components/ui/skeleton";

export function ShopCardSkeleton() {
  return (
    <>
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
    </>
  );
}
