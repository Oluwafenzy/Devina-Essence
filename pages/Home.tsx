
import React from 'react';
import { ArrowRight, Star, ShieldCheck, Banknote, Heart } from 'lucide-react';
import { SectionTitle, Button, ProductCard } from '../components/UI';
import { PRODUCTS, NEWS_UPDATES, WHATSAPP_NUMBER } from '../constants';
import { Page, Product } from '../types';

interface HomeProps {
  onPageChange: (page: Page) => void;
  onAddToCart: (p: Product) => void;
}

const Home: React.FC<HomeProps> = ({ onPageChange, onAddToCart }) => {
  const featuredProducts = PRODUCTS.filter(p => p.isBestSeller).slice(0, 3);
  const latestNews = NEWS_UPDATES.slice(0, 2);

  const handleWhatsAppOrder = (product: Product) => {
    const message = encodeURIComponent(`Hi DeVina Essence! I'd like to order the ${product.name} (₦${product.price.toLocaleString()}). Is it available?`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-[85vh] flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/80 to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1920&auto=format&fit=crop" 
            alt="Hero background" 
            className="w-full h-full object-cover animate-pulse-soft"
            style={{ animationDuration: '8s' }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1 bg-blush text-sage-dark text-xs font-bold rounded-full mb-6 tracking-widest uppercase animate-reveal-up stagger-1">
              Nature Meets Science
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-charcoal mb-6 leading-[1.1] animate-reveal-up stagger-2">
              Reveal Your Skin's <br /><span className="text-sage italic">Natural Essence.</span>
            </h1>
            <p className="text-lg md:text-xl text-charcoal-light mb-10 leading-relaxed max-w-lg animate-reveal-up stagger-3">
              Gentle skincare made to deliver real results without damaging your skin or your budget. Handcrafted for your daily radiance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-reveal-up stagger-4">
              <Button onClick={() => onPageChange('shop')}>
                Shop Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" onClick={() => scrollToSection('best-sellers')}>
                View Best Sellers
              </Button>
              <Button variant="secondary" onClick={() => scrollToSection('community-updates')}>
                Latest News
              </Button>
            </div>
          </div>
        </div>
        
        {/* Animated Floating Element */}
        <div className="absolute right-10 bottom-20 w-32 h-32 md:w-48 md:h-48 rounded-full border border-sage/30 animate-float opacity-30 pointer-events-none hidden lg:block"></div>
        <div className="absolute right-40 top-40 w-16 h-16 rounded-full bg-blush/40 animate-float opacity-50 pointer-events-none hidden lg:block" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* Brand Promise Section */}
      <section id="promise" className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="reveal stagger-1 bg-white p-10 rounded-3xl text-center shadow-sm border border-blush hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group">
            <div className="w-16 h-16 bg-blush-light rounded-full flex items-center justify-center mx-auto mb-6 transition-transform group-hover:scale-110">
              <ShieldCheck className="text-sage" size={32} />
            </div>
            <h3 className="text-xl font-serif mb-4">Premium Quality</h3>
            <p className="text-charcoal-light text-sm leading-relaxed">
              Carefully formulated with natural extracts, each batch is quality-checked for maximum effectiveness.
            </p>
          </div>
          <div className="reveal stagger-2 bg-white p-10 rounded-3xl text-center shadow-sm border border-blush hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group">
            <div className="w-16 h-16 bg-blush-light rounded-full flex items-center justify-center mx-auto mb-6 transition-transform group-hover:scale-110">
              <Banknote className="text-sage" size={32} />
            </div>
            <h3 className="text-xl font-serif mb-4">True Affordability</h3>
            <p className="text-charcoal-light text-sm leading-relaxed">
              We believe great skin shouldn't cost a fortune. High-end results at prices you'll love.
            </p>
          </div>
          <div className="reveal stagger-3 bg-white p-10 rounded-3xl text-center shadow-sm border border-blush hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group">
            <div className="w-16 h-16 bg-blush-light rounded-full flex items-center justify-center mx-auto mb-6 transition-transform group-hover:scale-110">
              <Heart className="text-sage" size={32} />
            </div>
            <h3 className="text-xl font-serif mb-4">Skin-Friendly</h3>
            <p className="text-charcoal-light text-sm leading-relaxed">
              Gentle formulations free from harsh chemicals. Suitable for daily use on even reactive skin types.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="best-sellers" className="bg-cream-dark py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <SectionTitle 
              title="Best Sellers" 
              subtitle="Discover the favorites our customers can't get enough of."
            />
            <Button variant="outline" onClick={() => onPageChange('shop')} className="md:mb-12 hover:scale-105">
              View All Products
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, idx) => (
              <div key={product.id} className={`reveal stagger-${idx + 1}`}>
                <ProductCard 
                  product={product} 
                  onAddToCart={onAddToCart}
                  onOrderWhatsApp={handleWhatsAppOrder}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Small Announcement Banner */}
      <section id="delivery-info" className="container mx-auto px-4">
        <div className="reveal bg-sage rounded-[2rem] p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative group">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
          <div className="relative z-10 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">DeVina Essence offers fast and reliable delivery.</h2>
            <div className="space-y-2 opacity-90">
              <p>- Free delivery within LUTH.</p>
              <p>- Delivery within Lagos State at affordable rates.</p>
            </div>
          </div>
          <Button variant="secondary" onClick={() => onPageChange('shop')} className="relative z-10 whitespace-nowrap hover:scale-105">
            Shop Essentials
          </Button>
        </div>
      </section>

      {/* News Preview */}
      <section id="community-updates" className="container mx-auto px-4">
        <SectionTitle 
          title="Community Updates" 
          subtitle="Stay in the loop with new arrivals, flash sales, and skincare tips."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {latestNews.map((news, idx) => (
            <div key={news.id} className={`reveal stagger-${idx + 1} bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-blush flex flex-col md:flex-row group`}>
              {news.image && (
                <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                  <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
              )}
              <div className="p-8 flex-1 flex flex-col">
                <span className="text-[10px] font-bold text-sage-dark uppercase tracking-widest bg-sage/10 px-2 py-1 rounded-full mb-4 inline-block w-fit">
                  {news.type}
                </span>
                <h3 className="text-xl font-serif mb-2 group-hover:text-sage transition-colors">{news.title}</h3>
                <p className="text-charcoal-light text-sm mb-4 line-clamp-2">{news.content}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs text-charcoal/40">{new Date(news.date).toLocaleDateString()}</span>
                  <button onClick={() => onPageChange('updates')} className="text-sage text-sm font-bold flex items-center gap-1 hover:gap-3 transition-all group-hover:underline">
                    Read More <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center reveal">
          <Button variant="outline" onClick={() => onPageChange('updates')} className="hover:scale-105">
            View All Updates
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
