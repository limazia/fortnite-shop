import { api } from "@/shared/lib/axios";
import { Shop as ShopData } from "@/shared/interfaces/shop";

export async function getShop() {
  try {
    const { data } = await api.get<ShopData>("/shop", {
      params: {
        lang: "pt-br",
        includeRenderData: false,
        includeHiddenTabs: false,
      },
    });

    return data;
  } catch (error) {
    console.error("[GET /shop] Failed to fetch shop data:", error);
  }
}
