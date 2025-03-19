export interface Shop {
  result: boolean;
  fullShop: boolean;
  lastUpdate: LastUpdate;
  currentRotation: CurrentRotation;
  nextRotation: any;
  carousel: any;
  specialOfferVideo: any;
  customBackground: any;
  shop: ShopItem[];
}

export interface ShopItem {
  mainId: string;
  displayName: string;
  displayDescription: string;
  displayType: string;
  mainType: string;
  offerId: string;
  devName: string;
  webURL?: string;
  offerDates: OfferDates;
  colors: Colors;
  displayAssets: DisplayAsset[];
  firstReleaseDate: string;
  previousReleaseDate?: string;
  giftAllowed: boolean;
  buyAllowed: boolean;
  price: Price;
  rarity: Rarity;
  series?: Series;
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

export interface Rarity {
  id: "common" | "uncommon" | "rare" | "epic" | "legendary" | "mythic";
  name: string;
}

interface LastUpdate {
  date: string;
  uid: string;
}

interface CurrentRotation {
  [key: string]: string;
}

interface OfferDates {
  in?: string;
  out: string;
}

interface Colors {
  color1?: string;
  color2?: string;
  color3?: string;
  textBackgroundColor?: string;
}

interface DisplayAsset {
  displayAsset?: string;
  materialInstance?: string;
  primaryMode: string;
  productTag: string;
  url: string;
  flipbook: any;
  background_texture: any;
  background?: string;
  full_background?: string;
}

interface Price {
  regularPrice: number;
  finalPrice: number;
  floorPrice: number;
}

interface Series {
  id: string;
  name: string;
}

interface Banner {
  id: string;
  name: string;
  intensity: string;
}

interface OfferTag {
  id: string;
  text: string;
}

interface Granted {
  id: string;
  type: Type;
  name: string;
  description: string;
  rarity: Rarity2;
  series?: Series2;
  images: Images;
  juno: Juno;
  beans: Beans;
  video: any;
  audio: any;
  gameplayTags: string[];
  set?: Set;
}

interface Type {
  id: string;
  name: string;
}

interface Rarity2 {
  id: string;
  name: string;
}

interface Series2 {
  id: string;
  name: string;
}

interface Images {
  icon?: string;
  featured?: string;
  background?: string;
  icon_background?: string;
  full_background?: string;
}

interface Juno {
  icon?: string;
}

interface Beans {
  icon?: string;
}

interface Set {
  id: string;
  name: string;
  partOf: string;
}

interface Section {
  id: string;
  name: string;
  category?: string;
  landingPriority: number;
  metadata?: Metadata;
}

interface Metadata {
  textureMetadata: TextureMetadaum[];
  textMetadata: TextMetadaum[];
  stringMetadata: StringMetadaum[];
}

interface TextureMetadaum {
  key: string;
  value: string;
}

interface TextMetadaum {
  key: string;
  value: string;
}

interface StringMetadaum {
  key: string;
  value: any;
}
