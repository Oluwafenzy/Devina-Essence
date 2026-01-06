
import { Product, Collection, NewsUpdate } from './types';

export const WHATSAPP_NUMBER = "2347068527018";
export const DISPLAY_PHONE = "07068527018";
export const WHATSAPP_CATALOG_URL = "https://wa.me/c/2347068527018";
export const INSTAGRAM_URL = "https://www.instagram.com/devinaessence?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
export const INSTAGRAM_HANDLE = "@devinaessence";

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'BIOAQUA RICE RAW PULP MASK',
    price: 600,
    description: 'Offers benefits such as deep hydration, nourishment and brightening to improve skin tone and texture',
    category: 'Face Masks',
    image: 'https://i.pinimg.com/1200x/d1/28/d9/d128d9a2ebf99623e15777f36eeed4c9.jpg',
    availability: 'In Stock',
    isBestSeller: true
  },
  {
    id: '2',
    name: 'Turmeric With Honey Soap',
    price: 2000,
    description: 'Crafted with Turmeric and Honey, this gentle soap brightens, nourishes, and protects your skin..',
    category: 'Soaps',
    image: 'https://i.pinimg.com/1200x/b1/2b/ce/b12bcef64f9300aa95d03ed67a6b958b.jpg',
    availability: 'In Stock',
    isBestSeller: true
  },
  {
    id: '4',
    name: 'ESTELIN ROSEHIP',
    price: 3500,
    description: 'Deep hydration for a radiant and healthy complexion.',
    category: 'Oils',
    image: 'https://i.pinimg.com/1200x/04/00/d6/0400d628499e79a7a9817d31336e99cf.jpg',
    availability: 'In Stock'
  },
  {
    id: '12',
    name: 'SIMPLE VIT C GLOW FACIAL WASH',
    price: 5000,
    description: 'A premium gold-label sunscreen providing broad-spectrum protection with a lightweight, non-greasy finish.',
    category: 'Facial Wash',
    image: 'https://i.pinimg.com/1200x/d8/bb/e3/d8bbe3cd39eadce1bc1258f69b21031a.jpg',
    availability: 'In Stock',
    isBestSeller: true
  },
  {
    id: '13',
    name: 'SIMPLE REFRESHING FACIAL WASH',
    price: 5000,
    description: 'A mild foaming cleanser that removes impurities without stripping your skin.',
    category: 'Facial Wash',
    image: 'https://i.pinimg.com/1200x/45/ee/6a/45ee6a2673f8c419890f2dbad4147d00.jpg',
    availability: 'In Stock'
  },
  {
    id: '6',
    name: 'ROUSHUN VITAMIN C SERUM',
    price: 2500,
    description: 'Target breakouts without stripping your skin of its natural moisture.',
    category: 'Serums',
    image: 'https://i.pinimg.com/736x/f2/5c/78/f25c78484d6d5df146d1702209d7bcb1.jpg',
    availability: 'In Stock'
  },
  {
    id: '9',
    name: 'BIOAQUA RETINOL MASK',
    price: 600,
    description: 'Brightens skin, reduces blackspot and boost collagen production for a more radiant complexion.',
    category: 'Face Masks',
    image: 'https://i.pinimg.com/1200x/3a/10/92/3a1092d472a733323dbcd71b40655250.jpg',
    availability: 'In Stock',
    isBestSeller: true
  },
  {
    id: '10',
    name: 'SADOER VITAMIN C FACE MASK',
    price: 600,
    description: 'Fights acne by deep-cleansing pores by reducing breakouts and blackheads and controlling oil.',
    category: 'Face Masks',
    image: 'https://i.pinimg.com/1200x/7a/03/a9/7a03a90974b8b2a56bc40af47279d551.jpg',
    availability: 'In Stock',
    isBestSeller: true
  },
  {
    id: '15',
    name: 'Tea Tree foaming face wash',
    price: 2500,
    description: 'A gentle yet effective cleanser infused with natural tea tree extract to purify and balance the skin.',
    category: 'Facial Wash',
    image: 'https://i.pinimg.com/736x/81/c4/c0/81c4c0d1fcf07d54db3e8c00afc1838a.jpg',
    availability: 'In Stock',
    isBestSeller: true
  },
  {
    id: '16',
    name: 'ESTELIN SUNSCREEN SPF 80',
    price: 4000,
    description: 'Deeply hydrates and plumps the skin, reducing the appearance of fine lines for a youthful bounce.',
    category: 'Sunscreen',
    image: 'https://i.pinimg.com/1200x/81/c5/21/81c5216ca0b885c413c0eabedf9ce9b8.jpg',
    availability: 'In Stock'
  },
  {
    id: '17',
    name: 'ESTELIN SUNSCREEN SPF 50',
    price: 3500,
    description: 'Liquid gold for your skin and hair. Rich in Vitamin E and fatty acids to nourish and protect.',
    category: 'Sunscreen',
    image: 'https://i.pinimg.com/736x/39/4b/87/394b8726fa4e7eca2663226d76eefed9.jpg',
    availability: 'Limited Stock'
  },
  {
    id: '18',
    name: 'BEAUTY FORMULA FACIAL SCRUB/WASH',
    price: 3500,
    description: 'Exfoliates to reveal brighter, smoother skin by removing dead skin cells and impurities.',
    category: 'Facial Wash',
    image: 'https://i.pinimg.com/1200x/46/d1/3b/46d13b063897e9aa3f5fe4504760a1f8.jpg',
    availability: 'In Stock'
  },
  {
    id: '19',
    name: 'SADOER CHARCOAL WHITENING MASK',
    price: 600,
    description: 'Provides benefits such as deep cleansing, unclogging pores, and reducing blackheads and acne.',
    category: 'Face Masks',
    image: 'https://i.pinimg.com/1200x/a3/f1/b7/a3f1b7e28b02b144ec4fd58f0211a227.jpg',
    availability: 'In Stock'
  },
  {
    id: '20',
    name: 'HAWAII CARROT AND PAPAYA SOAP',
    price: 1300,
    description: 'Gently cleanses while maintaining moisture balance. Ideal for daily use on sensitive skin.',
    category: 'Soaps',
    image: 'https://i.pinimg.com/1200x/ba/d0/4e/bad04ec45e8ea204b548ba6cbacff0b2.jpg',
    availability: 'In Stock'
  },
  {
    id: '21',
    name: 'Face Fact Ceramide Serum',
    price: 4000,
    description: 'Regulates sebum, minimizes pores, and targets blemishes for a clearer, smoother complexion.',
    category: 'Serums',
    image: 'https://i.pinimg.com/1200x/5b/34/40/5b34404c112bb555d573a8f8e1988aea.jpg',
    availability: 'In Stock',
    isBestSeller: true
  },
  {
    id: '11',
    name: 'DR RASHEL SUNSCREEN SPF 60',
    price: 3500,
    description: 'This sunscreen offers very high protection against UVB/UVA rays, moisturizes skin.',
    category: 'Sunscreen',
    image: 'https://i.pinimg.com/1200x/f6/3e/b4/f63eb4249da9cc9cd23a3b4912a39054.jpg',
    availability: 'In Stock'
  },
  {
    id: '14',
    name: 'EVA SOAP',
    price: 700,
    description: 'Helps brighten and even out skin tone with its vitamin-enriched formula, leaving the skin soft.',
    category: 'Soaps',
    image: 'https://i.pinimg.com/1200x/62/29/65/622965ec5316780045f82ff2e4b8f0c3.jpg',
    availability: 'In Stock'
  }
];

export const COLLECTIONS: Collection[] = [
  {
    id: 'acne-care',
    title: 'Acne Care Collection',
    description: 'Products aimed at reducing breakouts and calming acne-prone skin.',
    products: ['6', '2', '10', '18', '21'],
    image: 'https://i.pinimg.com/736x/40/14/95/40149575a43fb6600e9ad3dcaf7d1a79.jpg'
  },
  {
    id: 'glow',
    title: 'Glow Collection',
    description: 'Products focused on brightening, evening skin tone, and radiance.',
    products: ['1', '9', '12', '15', '19'],
    image: 'https://i.pinimg.com/1200x/4b/00/3a/4b003a2d46cc9f9b0159a163d6abd40a.jpg'
  },
  {
    id: 'sensitive',
    title: 'Sensitive Skin Collection',
    description: 'Gentle products suitable for reactive or easily irritated skin.',
    products: ['2', '13', '16', '20'],
    image: 'https://i.pinimg.com/1200x/2a/34/1e/2a341ea7947bd626328365f336d266c1.jpg'
  }
];

export const NEWS_UPDATES: NewsUpdate[] = [
  {
    id: 'n1',
    title: 'Holiday Promo Sales',
    date: '2026-01-06',
    content: 'Scan the QR for order to get 5% discount and extra 2% on referral. Offer stays from Dec 17-18. Don\'t miss out on your holiday glow!',
    type: 'Flash Sale',
    image: 'https://i.pinimg.com/736x/35/45/e7/3545e74dfb4b503ad15dbeb9f99d10c3.jpg'
  },
  {
    id: 'n2',
    title: 'Restock: Moisturizing Sunscreen',
    date: '2026-01-1',
    content: 'Our best-selling gold-label sunscreen is back in stock. Protect your skin from harsh UV rays with our premium formulation.',
    type: 'Restock',
    image: 'https://i.pinimg.com/1200x/34/af/52/34af520fa1da67c37358eeb93003d901.jpg'
  },
  {
    id: 'n3',
    title: 'New Arrival: Gentle Facial Wash',
    date: '2024-05-15',
    content: 'Start your routine right with our new daily gentle facial wash, now available online.',
    type: 'New Arrival',
    image: 'https://i.pinimg.com/736x/3b/bb/ce/3bbbce247beccf85c481d0ef90c77404.jpg'
  }
];
