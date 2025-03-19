import { Skeleton } from "@/components/ui/skeleton";

export function ShopSkeleton() {
  return (
    <header className="w-full">
      <div className="flex items-center justify-between">
        <div className="flex flex-col space-y-2">
          <Skeleton className="w-72 h-7" />

          <Skeleton className="w-32 h-7" />
        </div>

        <div>
          <Skeleton className="w-32 h-14" />
        </div>
      </div>
    </header>
  );
}
