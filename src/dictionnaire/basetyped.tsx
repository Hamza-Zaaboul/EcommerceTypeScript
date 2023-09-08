import { Filter, Produits, RelatedProducts } from "@/utils/types-zod";
import {
  Collections,
  FooterNavigation,
  Navigation,
  Page,
  Product,
  Spacement,
} from "../utils/interfaces";


/**
 * @Framework
 * 
 */

/**
 * @
 */

/**
 * @Composants
 * 
 */


/**
 * @Typages
 */





/** Export de tout les données */
export {
  navigation,
  currencies,
  relatedProducts,
  categories,
  collections,
  footerNavigation,
  sortOptions,
  filters,
  products1,
  products2,
  product,
};

/**
 * Page d'accueil
 */

/** Donnée Typer pour la navigation */
const navigation: Navigation = {
  categories: [
    {
      name: "Nos produits",
      featured: [
        
        {
          name: "Nouvelle arrivage",
          href: "/shop",
          imageSrc:
            "/image_jpg/shop/miel_type_2.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Miels",
          href: "/shop/0",
          imageSrc:
            "/image_jpg/shop/miel_type_4.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
        {
          name: "Cosmétiques",
          href: "/",
          imageSrc:
            "/image_jpg/cosmetique_miel_collection.jpg",
          imageAlt:
            "Model wearing minimalist watch with black wristband and white watch face.",
        },
        {
          name: "Dérivés",
          href: "/",
          imageSrc:
            "/image_jpg/savon_miel_collection.jpg",
          imageAlt:
            "Model opening tan leather long wallet with credit card pockets and cash pouch.",
        },
      ],
    },
    {
      name: "Soin du corps",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg",
          imageAlt:
            "Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg",
          imageAlt: "Model wearing light heather gray t-shirt.",
        },
        {
          name: "Accessories",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg",
          imageAlt:
            "Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.",
        },
        {
          name: "Carry",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg",
          imageAlt:
            "Model putting folded cash into slim card holder olive leather wallet with hand stitching.",
        },
      ],
    },
  ],
  pages: [
    { name: "Magasin", href: "/" },
    { name: "Blog", href: "/" },
  ],
};

/** Donnée pour la region à choisir */
const currencies: string[] = ["CAD", "USD", "AUD", "EUR", "GBP"];

/** Donnée pour les differents catégories */
const categories: Spacement[] = [
  {
    name: "Miels classique",
    href: "#",
    imageSrc: "/image_jpg/pot_de_miel.jpg",
  },
  {
    name: "Miels fruitiers",
    href: "#",
    imageSrc: "/image_jpg/miel_fuitter.jpg",
  },
  {
    name: "Miels en rayon",
    href: "#",
    imageSrc: "/image_jpg/cire_d'abeille.jpg",
  },
  {
    name: "Savons",
    href: "#",
    imageSrc: "/image_jpg/savon_miel.jpg",
  },
  {
    name: "Cosmétiques",
    href: "#",
    imageSrc: "/image_jpg/huile_essentiell_miel.jpg",
  },
];

/** Données des différentes collections*/
const collections: Collections[] = [
  {
    name: "Miels de toutes saisons et fruiters",
    href: "#",
    imageSrc: "/image_jpg/miel_tout_saison.jpg",
    imageAlt: "Miels de toutes saisons",
    description:
      "Des miels de toutes saisons, pour tous les goûts et toutes les envies.",
  },
  {
    name: "Savons à base de cire d'abeilles",
    href: "#",
    imageSrc: "/image_jpg/savon_miel_collection.jpg",
    imageAlt: "Savons à base de cire d'abeilles",
    description:
      "Savons à base de cire d'abeilles, faits maison par les soins de nos apiculteurs et apicultrices.",
  },
  {
    name: "Cosmétiques à base de miels",
    href: "#",
    imageSrc: "/image_jpg/cosmetique_miel_collection.jpg",
    imageAlt: " cosmétiques à base de miels",
    description:
      "Des cosmétiques à base de miels produits sont contrôlés dermatologiquement par nos laboratoires partenaires.",
  },
];

/** Données du footer*/
const footerNavigation: FooterNavigation = {
  shop: [
    { name: "Bags", href: "#" },
    { name: "Tees", href: "#" },
    { name: "Objects", href: "#" },
    { name: "Home Goods", href: "#" },
    { name: "Accessories", href: "#" },
  ],
  company: [
    { name: "Who we are", href: "#" },
    { name: "Sustainability", href: "#" },
    { name: "Press", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy", href: "#" },
  ],
  account: [
    { name: "Manage Account", href: "#" },
    { name: "Returns & Exchanges", href: "#" },
    { name: "Redeem a Gift Card", href: "#" },
  ],
  connect: [
    { name: "Contact Us", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "Pinterest", href: "#" },
  ],
};

/**
 * Page Shop
 */

const sortOptions: Page[] = [
  { name: "Most Popular", href: "#" },
  { name: "Best Rating", href: "#" },
  { name: "Newest", href: "#" },
  { name: "Price: Low to High", href: "#" },
  { name: "Price: High to Low", href: "#" },
];

const filters: Filter[] = [
  {
    id: "category",
    name: "Category",
    options: [
      { value: "tees", label: "Tees", checked: false },
      { value: "crewnecks", label: "Crewnecks", checked: false },
      { value: "hats", label: "Hats", checked: false },
      { value: "bundles", label: "Bundles", checked: false },
      { value: "carry", label: "Carry", checked: false },
      { value: "objects", label: "Objects", checked: false },
    ],
  },
  {
    id: "brand",
    name: "Brand",
    options: [
      { value: "clothing-company", label: "Clothing Company", checked: false },
      { value: "fashion-inc", label: "Fashion Inc.", checked: false },
      { value: "shoes-n-more", label: "Shoes 'n More", checked: false },
      { value: "supplies-n-stuff", label: "Supplies 'n Stuff", checked: false },
    ],
  },
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "black", label: "Black", checked: false },
      { value: "grey", label: "Grey", checked: false },
      { value: "blue", label: "Blue", checked: false },
      { value: "olive", label: "Olive", checked: false },
      { value: "tan", label: "Tan", checked: false },
    ],
  },
  {
    id: "sizes",
    name: "Sizes",
    options: [
      { value: "xs", label: "XS", checked: false },
      { value: "s", label: "S", checked: false },
      { value: "m", label: "M", checked: false },
      { value: "l", label: "L", checked: false },
      { value: "xl", label: "XL", checked: false },
      { value: "2xl", label: "2XL", checked: false },
    ],
  },
];

const products1: Product[] = [
  {
    id: 1,
    name: "Miel Weligton",
    href: "/shop/0",
    price: "10 € ",
    description: "3 pots possibles",
    imageSrc: "/image_jpg/shop/miel_type_1.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 2,
    name: "Miel de jujubier",
    href: "/shop/4",
    price: "64 € ",
    description: "3 pots possibles",
    imageSrc: "/image_jpg/shop/miel_type_2.jpg",
    imageAlt: "Paper card sitting upright in walnut card holder on desk.",
  },
  {
    id: 3,
    name: "Miel à l'orange",
    href: "/shop/8",
    price: "21 € ",
    description: "3 pots possibles",
    imageSrc: "/image_jpg/shop/miel_type_3.jpg",
    imageAlt:
      "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
  },
  // Plus de produits...
];

const products2: Product[] = [
  {
    id: 7,
    name: "Miel aux THC",
    href: "/shop/1",
    price: "54 € ",
    description: "3 pots possibles",
    imageSrc: "/image_jpg/shop/miel_type_4.jpg",
    imageAlt:
      "Close up of long kettle spout pouring boiling water into pour-over coffee mug with frothy coffee.",
  },
  {
    id: 8,
    name: "Miel de cerise",
    href: "/shop/2",
    price: "32 € ",
    description: "3 pots possibles",
    imageSrc: "/image_jpg/shop/miel_type_5.jpg",
    imageAlt:
      "Extra large black leather workspace pad on desk with computer, wooden shelf, desk organizer, and computer peripherals.",
  },
  {
    id: 9,
    name: "Miel de montagne",
    href: "/shop/3",
    price: "21 € ",
    description: "3 pots possibles",
    imageSrc: "/image_jpg/shop/miel_type_6.jpg",
    imageAlt:
      "Leather long wallet held open with hand-stitched card dividers, full-length bill pocket, and simple tab closure.",
  },
  // More products...
];

/**
 * Page dynamiques Products
 */
const product: Produits[] = [
  {
    name: "Miel Weligton",
    price: "10 € ",
    stripeprice: "price_1No2xkHlXD1yqYgk561yS1zJ",
    rating: 4,
    images: [
      {
        id: 1,
        name: "Miel Weligton",
        src: "/image_jpg/shop/miel_type_1.jpg",
        alt: "Angled front view with bag zipped and handles upright.",
      },
      // More images...
    ],
    colors: [
      {
        name: "Washed Black",
        bgColor: "bg-gray-700",
        selectedColor: "ring-gray-700",
      },
      { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
      {
        name: "Washed Gray",
        bgColor: "bg-gray-500",
        selectedColor: "ring-gray-500",
      },
    ],
    description: `
    <p>Un Miel Weligton est issues des fleurs d'hibiscus. Sa saveur est douce et parfumée avec une sensation perlée sur la langue par sa caractéristique unique de cristalisée à froid rapide !</p>
  `,
    sizes: [
      { name: "100 g", inStock: true },
      { name: "200 g", inStock: false },
      { name: "500 g", inStock: true },
      { name: "1000 g", inStock: true },
    ],
    details: [
      {
        name: "Details",
        items: [
          "Multiple strap configurations",
          "Spacious interior with top zip",
          "Leather handle and tabs",
          "Interior dividers",
          "Stainless strap loops",
          "Double stitched construction",
          "Water-resistant",
        ],
      },
      {
        name: "Producteurs",
        items: [
          "Multiple strap configurations",
          "Spacious interior with top zip",
          "Leather handle and tabs",
          "Interior dividers",
          "Stainless strap loops",
          "Double stitched construction",
          "Water-resistant",
        ],
      },
      {
        name: "Livraison",
        items: [
          "Multiple strap configurations",
          "Spacious interior with top zip",
          "Leather handle and tabs",
          "Interior dividers",
          "Stainless strap loops",
          "Double stitched construction",
          "Water-resistant",
        ],
      },
      // More sections...
    ],
  },
];

const relatedProducts: RelatedProducts[] = [
  {
    id: 2,
    name: "Miel de jujubier",
    color: "Conteneur en verre à partir 100 grammes",
    href: "#",
    price: "64 € ",
    imageSrc: "/image_jpg/shop/miel_type_2.jpg",
    imageAlt: "Paper card sitting upright in walnut card holder on desk.",
  },

  {
    id: 7,
    name: "Miel aux THC",
    color: "Conteneur en verre à partir 100 grammes",
    href: "#",
    imageSrc: "/image_jpg/shop/miel_type_4.jpg",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
      price: "54 € ",
  },
  
  {
    id: 8,
    name: "Miel de cerise",
    color: "Conteneur en verre à partir 100 grammes",
    href: "#",
    imageSrc: "/image_jpg/shop/miel_type_5.jpg",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
      price: "32 € ",
  },

];
