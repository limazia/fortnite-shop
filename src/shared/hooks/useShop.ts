import { useQuery } from "@tanstack/react-query";

import { getShop } from "@/shared/http/get-shop";

export function useShop() {
  const {
    data: shop,
    isLoading: isLoadingShop,
    isFetching: isFetchingShop,
    isError: isErrorShop,
  } = useQuery({
    queryKey: ["shop"],
    queryFn: getShop,
    refetchOnWindowFocus: false,
    retry: false,
  });

  return {
    shop,
    isLoadingShop,
    isFetchingShop,
    isErrorShop,
  };
}
