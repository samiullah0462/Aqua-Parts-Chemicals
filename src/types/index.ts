export type PageTab = 'home' | 'about' | 'products' | 'services' | 'blog' | 'gallery' | 'contact';

export interface Product {
  id: string;
  catId: string;
  title: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  imageUrl: string;
  badge?: string;
  packaging: string;
  testStandard?: string;
  specs: { label: string; value: string }[];
  features?: string[];
  availableUnits?: string[];
}

export interface ServiceItem {
  id: string;
  serviceCode: string;
  tag: string;
  title: string;
  shortDesc: string;
  specs: { label: string; value: string }[];
  features: string[];
  footerNote: string;
  actionText: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  author: string;
  authorRole: string;
  imageUrl: string;
  badgeColor?: string;
  content?: string[];
  keyTakeaways?: string[];
  parameters?: { label: string; value: string }[];
}

export interface GalleryProject {
  id: string;
  title: string;
  category: string;
  categoryBadge: string;
  categoryColor: string;
  location: string;
  capacityBadge: string;
  highlightBadge: string;
  imageUrl: string;
  description: string;
  metrics: { label: string; value: string }[];
  components: string[];
  commissioned: string;
}

export interface DeliveryZone {
  zone: string;
  name: string;
  description: string;
  eta: string;
}
