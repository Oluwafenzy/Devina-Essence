
import React from 'react';
import { SectionTitle, ProductCard } from '../components/UI';
import { PRODUCTS, WHATSAPP_NUMBER } from '../constants';
import { Product } from '../types';

interface ShopProps {
  onAddToCart: (p: Product) => void;
}

const Shop: React.FC<ShopProps> = ({ onAddToCart }) => {
  const categories = ['All', 'Soaps', 'Serums', 'Oils', 'Sunscreen', 'Face Masks', 'Facial Wash'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const handleWhatsAppOrder = (product: Product) => {
    const message = encodeURIComponent(`Hi DeVina Essence! I'd like to order the ${product.name} (₦${product.price.toLocaleString()}). Is it available?`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <SectionTitle 
        title="Our Product Catalog" 
        subtitle="Effective skincare, carefully curated for your specific needs."
        centered
      />

      {/* Category Navigation */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat 
                ? 'bg-sage text-white shadow-md' 
                : 'bg-white text-charcoal border border-blush hover:border-sage'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={onAddToCart}
            onOrderWhatsApp={handleWhatsAppOrder}
          />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-charcoal-light italic">No products found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default Shop;
