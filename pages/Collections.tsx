
import React from 'react';
import { SectionTitle, ProductCard, Button } from '../components/UI';
import { COLLECTIONS, PRODUCTS, WHATSAPP_NUMBER } from '../constants';
import { Product } from '../types';

interface CollectionsProps {
  onAddToCart: (p: Product) => void;
}

const Collections: React.FC<CollectionsProps> = ({ onAddToCart }) => {
  const handleWhatsAppOrder = (product: Product) => {
    const message = encodeURIComponent(`Hi DeVina Essence! I'd like to order the ${product.name} from your collection. Is it available?`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <div className="container mx-auto px-4 py-16 space-y-32">
      <SectionTitle 
        title="Curated Collections" 
        subtitle="We've grouped our products to help you find the perfect routine for your skin goals."
        centered
      />

      {COLLECTIONS.map((collection, idx) => {
        const collectionProducts = PRODUCTS.filter(p => collection.products.includes(p.id));
        
        return (
          <div key={collection.id} className="reveal">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
              <div className={`lg:col-span-2 sticky top-24 ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <div className="relative group mb-10">
                  <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] lg:aspect-[3/4] shadow-2xl border border-white/40">
                    <img 
                      src={collection.image} 
                      alt={collection.title} 
                      className="w-full h-full object-cover transition-all duration-[1.5s] ease-out scale-110 group-hover:scale-100" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-all duration-700"></div>
                    
                    {/* Floating badge over image */}
                    <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
                       <p className="text-white text-xs uppercase tracking-[0.2em] font-bold mb-1">Featured Theme</p>
                       <h4 className="text-white text-xl font-serif">{collection.title}</h4>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-4xl font-serif text-charcoal leading-tight">{collection.title}</h3>
                  <p className="text-charcoal-light text-lg leading-relaxed">
                    {collection.description}
                  </p>
                  <div className="pt-4">
                    <Button variant="outline" className="px-8 py-4 rounded-2xl hover:bg-sage hover:text-white transition-all">
                      Explore All Essentials
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className={`lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-8 ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                {collectionProducts.map((product, pIdx) => (
                  <div key={product.id} className={`reveal stagger-${(pIdx % 2) + 1}`}>
                    <ProductCard 
                      product={product} 
                      onAddToCart={onAddToCart}
                      onOrderWhatsApp={handleWhatsAppOrder}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Collections;
