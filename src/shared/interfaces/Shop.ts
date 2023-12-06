export interface Shop {
  mainId: string;
  displayName: string;
  displayDescription: string;
  displayType: string;
  mainType: string;
  offerId: string;
  displayAssets: DisplayAsset[];
  firstReleaseDate?: string;
  previousReleaseDate?: string;
  giftAllowed: boolean;
  buyAllowed: boolean;
  price: Price;
  rarity: Rarity;
  series?: Rarity;
  banner?: Banner;
  offerTag?: OfferTag;
  granted: Granted[];
  priority: number;
  section: Section;
  groupIndex: number;
  storeName: string;
  tileSize: string;
  categories: any[];
}

interface Section {
  id: string;
  name?: any;
  landingPriority: number;
}

interface Granted {
  id: string;
  type: Rarity;
  name: string;
  description: string;
  rarity: Rarity;
  series?: Rarity;
  images: Images;
  video?: any;
  audio?: any;
  gameplayTags: string[];
  set?: Set | Set | null;
}

interface Set {
  id: string;
  name: string;
  partOf: string;
}

interface Images {
  icon: string;
  featured?: null | string | string;
  background: string;
  icon_background: string;
  full_background: string;
}

interface OfferTag {
  id: string;
  text: string;
}

interface Banner {
  id: string;
  name: string;
  intensity: string;
}

interface Rarity {
  id: string;
  name: string;
}

interface Price {
  regularPrice: number;
  finalPrice: number;
  floorPrice: number;
}

interface DisplayAsset {
  displayAsset: string;
  materialInstance: string;
  url: string;
  flipbook?: any;
  background_texture?: null | string | string;
  background: string;
  full_background: string;
}
