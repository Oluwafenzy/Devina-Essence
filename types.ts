
export type Availability = 'In Stock' | 'Limited Stock' | 'Out of Stock';

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'Soaps' | 'Serums' | 'Oils' | 'Sunscreen' | 'Face Masks' | 'Facial Wash';
  image: string;
  availability: Availability;
  isBestSeller?: boolean;
}

export interface Collection {
  id: string;
  title: string;
  description: string;
  products: string[]; // IDs
  image: string;
}

export interface NewsUpdate {
  id: string;
  title: string;
  date: string;
  content: string;
  type: 'Discount' | 'Restock' | 'New Arrival' | 'Flash Sale';
  image?: string;
}

export type Page = 'home' | 'shop' | 'collections' | 'updates' | 'about' | 'contact';
