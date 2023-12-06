import { Shop } from "@/shared/interfaces/Shop";

import VBuck from "@/assets/vbuck.png";

interface ShopItemCardProps {
  data: Shop;
}

export function ShopItemCard({ data }: ShopItemCardProps) {
  const { displayName, displayAssets, price, rarity } = data;
  const { background } = displayAssets[0];
  const { regularPrice, finalPrice } = price;

  return (
    <div className="card card-shop">
      <div className="banner">
        <img
          src={background}
          className="img-container img-preview img-fluid lazyloaded"
        />
      </div>
      <div className={`card-body ${rarity.id.toLowerCase()}`}>
        <h5 className="display-name">{displayName}</h5>

        <div className="price-container">
          <div className="d-flex flex-column mr-3">
            {regularPrice !== finalPrice && (
              <span className="regular-price-text">{regularPrice}</span>
            )}
            <span className="price-text">{finalPrice}</span>
          </div>
          <img src={VBuck} className="price-icon" />
        </div>
      </div>
    </div>
  );
}
