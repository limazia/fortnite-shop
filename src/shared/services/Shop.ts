import { api } from "@/shared/axios/api";

export const ShopService = {
  list: async function () {
    try {
      const { data } = await api.get("/shop?lang=pt-br&includeRenderData=false&includeHiddenTabs=false");

      return data;
    } catch (ex) {
      console.error("[GET /shop/br] > it was not possible to make the request");
    }
  },
};
