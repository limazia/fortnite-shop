import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ArrowsClockwise } from "@phosphor-icons/react";
import moment from "moment-timezone";
import debounce from "lodash/debounce";

import { ShopService } from "@/shared/services/Shop";
import { useCountdown } from "@/shared/hooks/useCountdown";
import { Shop } from "./shared/interfaces/Shop";

import { ShopItemCard, ShopItemCardShimmer } from "@/components/ShopItem";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";

export function App() {
  const [countdown] = useCountdown();

  const [items, setItems] = useState<Shop[]>([]);
  const [date, setDate] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const dateMoment = moment(date);
  const dateFormat = dateMoment.format("DD/MM/YYYY");

  useEffect(() => {
    loadShop();

    setTimeout(() => setLoading(false), 2000);
  }, []);

  async function loadShop() {
    try {
      const { lastUpdate, shop } = await ShopService.list();

      if (shop) {
        setDate(lastUpdate.date);
        setItems(shop);
      }
    } catch (error) {
      setLoading(true);
    }
  }

  const groupBySeries = () => {
    const groupedItems: { [key: string]: Shop[] } = {};

    items.forEach((item) => {
      const seriesId = item.series?.id || "null";

      if (!groupedItems[seriesId]) {
        groupedItems[seriesId] = [];
      }

      groupedItems[seriesId].push(item);
    });

    return groupedItems;
  };

  const shopItems = groupBySeries();

  const refreshList = debounce(() => {
    toast.success("Lista atualizada!");

    loadShop();
  }, 2000);

  return (
    <div className="container mt-5">
      <header>
        <div className="col-md-12">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-lg-block">
              <h2>Itens na loja do Fortnite em {dateFormat}</h2>
              <span className="text-muted">Nova loja em {countdown}</span>
            </div>

            <div>
              <button onClick={refreshList} className="btn btn-refresh">
                <ArrowsClockwise size={20} weight="bold" /> Atualizar
              </button>
            </div>
          </div>
        </div>
      </header>

      <ScrollToTopButton />

      <div className="row mt-4">
        <div className="col-md-12">
          {Object.keys(shopItems).map((seriesId, index) => (
            <div key={index} className="row mt-4">
              {shopItems[seriesId].map((item) => (
                <div
                  key={item.mainId}
                  className="col-sm-12 col-md-6 col-lg-4 mb-5"
                >
                  {loading ? (
                    <ShopItemCardShimmer />
                  ) : (
                    <ShopItemCard data={item} />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <footer>
        <div className="col-md-12 pb-3">
          <div className="d-flex justify-content-center align-items-center">
            <span className="text-muted font-weight-bold">💓</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
