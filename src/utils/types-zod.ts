export type ButtonProps = {
  textarea: string;
  link: string;
  textColor?: string;
  backgroundColor?: string;
  fontsize?: number;
  padding?: [number, number, number, number];
};

export type FilterOption = {
  value: string;
  label: string;
  checked: boolean;
};

export type Filter = {
  id: string;
  name: string;
  options: FilterOption[];
};

/**
 * Typage pour la page dynamique produits
 */

export type Produits = {
  name: string;
  price: string;
  rating: number;
  stripeprice: string;
  images: {
    id: number;
    name: string;
    src: string;
    alt: string;
  }[];
  colors: {
    name: string;
    bgColor: string;
    selectedColor: string;
  }[];
  description: string;
  sizes: {
    name: string;
    inStock: boolean;
  }[];
  details: {
    name: string;
    items: string[];
  }[];
};

export type RelatedProducts = {
  id: number;
  name: string;
  color: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  price: string;
};

export type ButtonCheckoutProps ={
  priceId: string;
  userEmail: string;
  routeUrl: string;
};

export type Sizeur = {
  name: string;
  inStock : boolean;
}