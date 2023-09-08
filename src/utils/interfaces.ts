
export interface Page {
  name: string;
  href: string;
}

export interface FeaturedItem extends Spacement {
  imageAlt: string;
}

export interface Category {
  name: string;
  featured: FeaturedItem[];
}

export interface Spacement extends Page {
  imageSrc: string;
  
}

export interface Collections extends Spacement {
  description: string;
  imageAlt: string;
}

export interface Navigation {
  categories: Category[];
  pages: Page[];
}

export interface FooterNavigation {
  shop: Page[];
  company: Page[];
  account: Page[];
  connect: Page[];
}

export interface Product extends Collections {
  id: number;
  price: string;
}
