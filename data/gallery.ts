import { GalleryItem, OfferCampaign } from '@/types';

export const galleryItems: GalleryItem[] = [];

export interface RealCampaignBanner {
  id: string;
  title: string;
  slogan: string;
  brand: string;
  image: string;
  tagline: string;
  aspectRatio: 'landscape' | 'portrait' | 'wide';
  productFilterUrl: string;
  highlights: string[];
}

export const realCampaignBanners: RealCampaignBanner[] = [
  {
    id: 'camp-sparletta',
    title: 'Sparletta Sparberry',
    slogan: 'Sabor que refresca. Momentos que ficam.',
    tagline: 'Refresca o teu dia com Sparletta Sparberry. O sabor único que combina com praia, sol e boas vibrações.',
    brand: 'Spar-Letta',
    image: '/images/campaigns/banner-sparletta-praia.jpg',
    aspectRatio: 'landscape',
    productFilterUrl: '/produtos?q=Spar-Letta',
    highlights: ['Sabor Inesquecível', 'Bem Gelado', 'Perfeito para Qualquer Momento']
  },
  {
    id: 'camp-compal',
    title: 'Compal Da Terra',
    slogan: 'Sabor que te liga à terra.',
    tagline: 'Naturalmente nutritivo. 100% pra ti. Manga, Ata, Banana e Malambe — da nossa terra, da nossa gente.',
    brand: 'Compal',
    image: '/images/campaigns/banner-compal-da-terra.jpg',
    aspectRatio: 'portrait',
    productFilterUrl: '/produtos?marca=Compal',
    highlights: ['Ingredientes Naturais', 'Fonte de Vitaminas', 'Energia para o Teu Dia']
  },
  {
    id: 'camp-bakers',
    title: 'Bakers Bolachas Tradicionais',
    slogan: 'Sabores que fazem parte da nossa história.',
    tagline: 'Bolachas que unem gerações e transformam momentos em lembranças: Choc-Kits, Tennis, Romany Creams e Eet-Sum-Mor.',
    brand: 'Bakers',
    image: '/images/campaigns/banner-bakers-historia.jpg',
    aspectRatio: 'landscape',
    productFilterUrl: '/produtos?marca=Bakers',
    highlights: ['Feitas com Qualidade', 'Sabores que Todos Amam', 'Presentes em Todos os Lares']
  }
];

export const offerCampaigns: OfferCampaign[] = [
  {
    id: 'camp-1',
    title: 'Sparletta Sparberry — Sabor que Refresca',
    subtitle: 'Momentos que ficam na praia e no dia a dia',
    badge: 'Campanha Oficial DUM',
    period: 'Em Destaque no Armazém',
    description: 'Refrescos Spar-Letta em lata e garrafa disponíveis para o seu negócio e momentos de lazer familiar.',
    image: '/images/campaigns/banner-sparletta-praia.jpg',
    featuredCategories: ['Bebidas & Garrafeira', 'Refrigerantes']
  },
  {
    id: 'camp-2',
    title: 'Compal Da Terra — Sabor da Nossa Terra',
    subtitle: 'Néctares naturais de Manga, Ata, Banana e Malambe',
    badge: '100% Natural',
    period: 'Seleção Especial',
    description: 'A gama completa Compal Da Terra e Compal Vital disponível nas gôndolas do armazém DUM.',
    image: '/images/campaigns/banner-compal-da-terra.jpg',
    featuredCategories: ['Bebidas & Garrafeira', 'Néctares 100% Naturais']
  },
  {
    id: 'camp-3',
    title: 'Bakers — Sabores da Nossa História',
    subtitle: 'Choc-Kits, Tennis, Romany Creams e Eet-Sum-Mor',
    badge: 'Tradição & Qualidade',
    period: 'Stock Completo',
    description: 'Mais de 15 referências de bolachas Bakers autênticas disponíveis para revenda e consumo familiar.',
    image: '/images/campaigns/banner-bakers-historia.jpg',
    featuredCategories: ['Snacks & Bolachas', 'Mercearia Fina']
  }
];
