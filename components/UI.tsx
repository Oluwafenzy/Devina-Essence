
import React from 'react';
import { ShoppingCart, MessageCircle } from 'lucide-react';
import { Product, Availability } from '../types';
import { WHATSAPP_NUMBER } from '../constants';

export const Badge: React.FC<{ status: Availability }> = ({ status }) => {
  const styles = {
    'In Stock': 'bg-green-50 text-green-700 border-green-100',
    'Limited Stock': 'bg-amber-50 text-amber-700 border-amber-100',
    'Out of Stock': 'bg-red-50 text-red-700 border-red-100'
  };

  return (
    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border shadow-sm ${styles[status]} transition-all duration-300`}>
      {status.toUpperCase()}
    </span>
  );
};

export const Button: React.FC<{
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp';
  className?: string;
  onClick?: () => void;
  fullWidth?: boolean;
  disabled?: boolean;
}> = ({ children, variant = 'primary', className = '', onClick, fullWidth = false, disabled = false }) => {
  const baseStyles = "px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base transform active:scale-95";
  const variants = {
    primary: "bg-sage text-white hover:bg-sage-dark shadow-sm hover:shadow-lg hover:-translate-y-0.5 disabled:bg-gray-200 disabled:transform-none disabled:shadow-none",
    secondary: "bg-blush text-charcoal hover:bg-blush-dark shadow-sm hover:shadow-lg hover:-translate-y-0.5",
    outline: "border-2 border-sage text-sage hover:bg-sage hover:text-white bg-transparent hover:shadow-md hover:-translate-y-0.5",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#128C7E] shadow-sm hover:shadow-lg hover:-translate-y-0.5"
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </button>
  );
};

export const ProductCard: React.FC<{ 
  product: Product; 
  onAddToCart: (p: Product) => void;
  onOrderWhatsApp: (p: Product) => void;
}> = ({ product, onAddToCart, onOrderWhatsApp }) => {
  return (
    <div className="reveal bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-cream-dark hover:-translate-y-2">
      <div className="relative aspect-square overflow-hidden bg-cream-dark">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-2 z-10 transition-transform duration-300 group-hover:translate-x-1">
          <Badge status={product.availability} />
          {product.isBestSeller && (
            <span className="bg-blush-dark/90 text-charcoal text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm animate-pulse-soft">
              BEST SELLER
            </span>
          )}
        </div>
        {/* Hover overlay for cart quick action */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif text-lg text-charcoal leading-tight transition-colors group-hover:text-sage">{product.name}</h3>
          <p className="font-bold text-sage-dark">₦{product.price.toLocaleString()}</p>
        </div>
        <p className="text-charcoal-light text-xs line-clamp-2 mb-4 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
          {product.description}
        </p>
        
        <div className="flex flex-col gap-2">
          <Button 
            variant="primary" 
            fullWidth 
            disabled={product.availability === 'Out of Stock'}
            onClick={() => onAddToCart(product)}
            className="py-2.5 text-xs"
          >
            <ShoppingCart size={14} className="group-hover:animate-bounce" /> Add to Cart
          </Button>
          <Button 
            variant="whatsapp" 
            fullWidth 
            onClick={() => onOrderWhatsApp(product)}
            className="py-2.5 text-xs opacity-90 hover:opacity-100"
          >
            <MessageCircle size={14} /> Order via WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
};

export const SectionTitle: React.FC<{ title: string; subtitle?: string; centered?: boolean }> = ({ title, subtitle, centered = false }) => {
  return (
    <div className={`reveal mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-3">{title}</h2>
      {subtitle && <p className="text-charcoal-light max-w-2xl mx-auto">{subtitle}</p>}
      <div className={`h-1 bg-sage mt-4 transition-all duration-1000 origin-left ease-out w-0 active-reveal:w-20 ${centered ? 'mx-auto' : ''}`} style={{ width: 'var(--reveal-line-width, 0px)' }}>
        {/* Note: We handle the width expansion via a specific reveal class toggle if needed, or just keep it static-ish with a smooth entrance */}
        <div className={`h-1 bg-sage transition-all duration-1000 w-20 ${centered ? 'mx-auto' : ''}`}></div>
      </div>
    </div>
  );
};
