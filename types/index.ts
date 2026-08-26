export type CategorySlug =
  | 'mercearia'
  | 'bebidas'
  | 'laticinios'
  | 'massas'
  | 'arroz'
  | 'oleos'
  | 'conservas'
  | 'cereais'
  | 'bolachas'
  | 'snacks'
  | 'higiene'
  | 'limpeza'
  | 'infantil'
  | 'temperos'
  | 'molhos'
  | 'campanhas'
  | 'congelados';

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: string;
  categorySlug: CategorySlug;
  description: string;
  longDescription?: string;
  image?: string;
  images?: string[];
  features: string[];
  origin?: string;
  packaging?: string;
  weight?: string;
  isFeatured?: boolean;
  isNew?: boolean;
  tags?: string[];
}

export interface ProductImage {
  id: string;
  productId: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  category: CategorySlug;
  isPrimary: boolean;
}

export interface Category {
  id: string;
  slug: CategorySlug;
  name: string;
  shortDescription: string;
  description: string;
  image?: string;
  iconName: string;
  itemCount: string;
  highlights: string[];
  bannerImage?: string;
}

export interface ProductCategoryMeta {
  slug: CategorySlug;
  name: string;
  namePt: string;
  description: string;
  icon: string;
  color: string;
  productCount: number;
  imagePath?: string;
}

export interface Brand {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  origin: string;
  logoText: string;
  featuredProductCount: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'armazem' | 'produtos' | 'mercearia' | 'frescos' | 'atendimento';
  image?: string;
  description: string;
  width?: number;
  height?: number;
}

export interface CampaignEvent {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  badge: string;
  period: string;
  relatedCategories: CategorySlug[];
  themeColor: string;
  isActive: boolean;
}

export interface OfferCampaign {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  image?: string;
  period: string;
  description: string;
  featuredCategories: string[];
}

export interface ProductCatalog {
  products: Product[];
  categories: ProductCategoryMeta[];
  campaigns: CampaignEvent[];
  totalProducts: number;
  lastUpdated: string;
}
