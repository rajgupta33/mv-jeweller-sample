import { getImageUrl } from '../utils/image-util';
export const dummyProducts = [
  {
    id: 1,
    name: "Silver Leaf Pendant",
    price: 1699,
    compareAtPrice: 2199,
    image: getImageUrl("/product-sku/product-8.png"),
    images: [
      getImageUrl("/product-sku/product-8.png"),
      getImageUrl("/product-sku/product-9.png"),
      getImageUrl("/product-sku/product-10.png"),
      getImageUrl("/product-sku/product-11.png"),
      getImageUrl("/product-sku/product-12.png")
    ],
    link: getImageUrl("/products/silver-leaf-pendant"),
    isNew: true,
    metal: "925 Sterling Silver",
    category: "Pendants",
    stoneColor: "White",
    style: "Minimal",
    description: "A delicate silver leaf pendant inspired by nature. Perfect for everyday elegance and effortless layering."
  },
  {
    id: 2,
    name: "Silver Moon Pendant",
    price: 1899,
    compareAtPrice: 2399,
    image: getImageUrl("/product-sku/product-9.png"),
    images: [
      getImageUrl("/product-sku/product-9.png"),
      getImageUrl("/product-sku/product-10.png"),
      getImageUrl("/product-sku/product-11.png"),
      getImageUrl("/product-sku/product-12.png"),
      getImageUrl("/product-sku/product-13.png")
    ],
    link: getImageUrl("/products/silver-moon-pendant"),
    isNew: true,
    metal: "925 Sterling Silver",
    category: "Pendants",
    stoneColor: "White",
    style: "Classic",
    description: "Embrace the night sky with this beautiful silver moon pendant adorned with sparkling white stones."
  },
  {
    id: 3,
    name: "Emerald Bloom Ring",
    price: 2499,
    compareAtPrice: 3299,
    image: getImageUrl("/product-sku/product-11.png"),
    images: [
      getImageUrl("/product-sku/product-11.png"),
      getImageUrl("/product-sku/product-12.png"),
      getImageUrl("/product-sku/product-13.png"),
      getImageUrl("/product-sku/product-14.png"),
      getImageUrl("/product-sku/product-1.png")
    ],
    link: getImageUrl("/products/emerald-bloom-silver-ring"),
    isNew: false,
    metal: "925 Sterling Silver",
    category: "Rings",
    stoneColor: "Green",
    style: "Floral",
    description: "A striking floral-inspired silver ring featuring vibrant green stones arranged around a brilliant centre, designed to bring effortless sophistication to festive and statement looks."
  },
  {
    id: 4,
    name: "Silver Bow Pendant",
    price: 1599,
    compareAtPrice: 1999,
    image: getImageUrl("/product-sku/product-12.png"),
    images: [
      getImageUrl("/product-sku/product-12.png"),
      getImageUrl("/product-sku/product-13.png"),
      getImageUrl("/product-sku/product-14.png"),
      getImageUrl("/product-sku/product-1.png"),
      getImageUrl("/product-sku/product-2.png")
    ],
    link: getImageUrl("/products/silver-bow-pendant"),
    isNew: false,
    metal: "925 Sterling Silver",
    category: "Pendants",
    stoneColor: "White",
    style: "Classic",
    description: "A charming silver bow pendant that adds a touch of playful elegance to any outfit."
  },
  {
    id: 5,
    name: "Classic Silver Band",
    price: 1299,
    compareAtPrice: null,
    image: getImageUrl("/product-sku/product-2.png"),
    images: [
      getImageUrl("/product-sku/product-2.png"),
      getImageUrl("/product-sku/product-3.png"),
      getImageUrl("/product-sku/product-4.png"),
      getImageUrl("/product-sku/product-5.png"),
      getImageUrl("/product-sku/product-6.png")
    ],
    link: getImageUrl("/products/classic-silver-band"),
    isNew: true,
    metal: "925 Sterling Silver",
    category: "Rings",
    stoneColor: "None",
    style: "Minimal",
    description: "A timeless and sleek silver band, perfect for stacking or wearing on its own."
  },
  {
    id: 6,
    name: "Sapphire Drop Earrings",
    price: 3499,
    compareAtPrice: 4299,
    image: getImageUrl("/product-sku/product-6.png"),
    images: [
      getImageUrl("/product-sku/product-6.png"),
      getImageUrl("/product-sku/product-7.png"),
      getImageUrl("/product-sku/product-8.png"),
      getImageUrl("/product-sku/product-9.png"),
      getImageUrl("/product-sku/product-10.png")
    ],
    link: getImageUrl("/products/sapphire-drop-earrings"),
    isNew: false,
    metal: "925 Sterling Silver",
    category: "Earrings",
    stoneColor: "Blue",
    style: "Statement",
    description: "Elegant drop earrings featuring deep blue stones, perfect for a night out."
  },
  {
    id: 7,
    name: "Ruby Halo Ring",
    price: 2999,
    compareAtPrice: 3899,
    image: getImageUrl("/product-sku/product-7.png"),
    images: [
      getImageUrl("/product-sku/product-7.png"),
      getImageUrl("/product-sku/product-8.png"),
      getImageUrl("/product-sku/product-9.png"),
      getImageUrl("/product-sku/product-10.png"),
      getImageUrl("/product-sku/product-11.png")
    ],
    link: getImageUrl("/products/ruby-halo-ring"),
    isNew: false,
    metal: "925 Sterling Silver",
    category: "Rings",
    stoneColor: "Red",
    style: "Statement",
    description: "A stunning ruby-coloured stone surrounded by a halo of brilliant white stones."
  },
  {
    id: 8,
    name: "Delicate Chain Bracelet",
    price: 1899,
    compareAtPrice: null,
    image: getImageUrl("/product-sku/product-8.png"),
    images: [
      getImageUrl("/product-sku/product-8.png"),
      getImageUrl("/product-sku/product-9.png"),
      getImageUrl("/product-sku/product-10.png"),
      getImageUrl("/product-sku/product-11.png"),
      getImageUrl("/product-sku/product-12.png")
    ],
    link: getImageUrl("/products/delicate-chain-bracelet"),
    isNew: true,
    metal: "925 Sterling Silver",
    category: "Bracelets",
    stoneColor: "None",
    style: "Minimal",
    description: "A simple, delicate silver chain bracelet. Effortless and elegant."
  }
];

export const dummyCollections = [
  {
    id: 'silver-rings',
    title: 'Silver Rings',
    description: 'Discover elegant silver rings designed for everyday styling, gifting and special occasions.',
    count: 124
  },
  {
    id: 'silver-jewellery',
    title: 'Silver Jewellery',
    description: 'Discover elegant 925 sterling silver jewellery designed to move effortlessly from everyday moments to meaningful occasions.',
    count: 342
  }
];
