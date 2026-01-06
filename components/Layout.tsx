
import React from 'react';
import { Menu, X, ShoppingBag, Instagram, Phone, MessageCircle } from 'lucide-react';
import { Page } from '../types';
import { WHATSAPP_CATALOG_URL, INSTAGRAM_URL, DISPLAY_PHONE } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: Page;
  onPageChange: (page: Page) => void;
  cartCount: number;
}

export const Header: React.FC<{ currentPage: Page, onPageChange: (page: Page) => void, cartCount: number }> = ({ currentPage, onPageChange, cartCount }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string, value: Page }[] = [
    { label: 'Home', value: 'home' },
    { label: 'Shop', value: 'shop' },
    { label: 'Collections', value: 'collections' },
    { label: 'Updates', value: 'updates' },
    { label: 'About', value: 'about' },
    { label: 'Contact', value: 'contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-cream/95 backdrop-blur-lg shadow-md h-16 md:h-16' : 'bg-cream/70 backdrop-blur-sm h-16 md:h-20'
    } border-b border-blush/20`}>
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo & Brand Name */}
        <div 
          className="flex items-center gap-2 md:gap-3 cursor-pointer group"
          onClick={() => onPageChange('home')}
        >
          <img 
            src="logo.png" 
            alt="DeVina Essence" 
            className="h-8 w-8 md:h-10 md:w-10 object-contain transition-transform group-hover:rotate-12"
            onError={(e) => {
              (e.target as HTMLImageElement).style.visibility = 'hidden';
            }}
          />
          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-serif text-charcoal group-hover:text-sage transition-colors leading-tight">DeVina Essence</span>
            <span className="text-[7px] md:text-[9px] tracking-[0.2em] uppercase text-sage font-bold opacity-80">Gentle Skincare</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => onPageChange(item.value)}
              className={`text-sm font-semibold transition-all hover:text-sage relative group ${
                currentPage === item.value ? 'text-sage' : 'text-charcoal-light'
              }`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-sage transition-all duration-300 ${
                currentPage === item.value ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
          ))}
          <button 
            onClick={() => onPageChange('shop')}
            className="relative p-2 text-charcoal-light hover:text-sage transition-all hover:scale-110 active:scale-90"
          >
            <ShoppingBag size={22} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-sage text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
                {cartCount}
              </span>
            )}
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button 
            onClick={() => onPageChange('shop')}
            className="relative p-2 text-charcoal-light"
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-sage text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-charcoal transition-transform active:rotate-90">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-cream border-t border-blush/30 animate-in slide-in-from-top duration-500 ease-out">
          <nav className="flex flex-col py-6 px-8 space-y-6">
            {navItems.map((item, idx) => (
              <button
                key={item.value}
                onClick={() => {
                  onPageChange(item.value);
                  setIsOpen(false);
                }}
                style={{ animationDelay: `${idx * 50}ms` }}
                className={`text-xl font-serif text-left animate-reveal-up ${
                  currentPage === item.value ? 'text-sage' : 'text-charcoal'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export const Footer: React.FC<{ onPageChange: (page: Page) => void }> = ({ onPageChange }) => {
  return (
    <footer className="bg-blush-light pt-16 pb-8 border-t border-blush">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="reveal">
            <div className="flex items-center gap-3 mb-6 group cursor-pointer" onClick={() => onPageChange('home')}>
              <img src="logo.png" alt="" className="h-10 w-10 object-contain group-hover:rotate-12 transition-transform" />
              <div className="flex flex-col">
                <h3 className="text-xl font-serif text-charcoal leading-none">DeVina Essence</h3>
                <span className="text-[8px] tracking-[0.2em] uppercase text-sage font-bold">Gentle Skincare</span>
              </div>
            </div>
            <p className="text-charcoal-light text-sm mb-6 leading-relaxed">
              Gentle skincare made to deliver real results without damaging your skin or your budget. Trusted by thousands daily.
            </p>
            <div className="flex space-x-4">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full text-sage hover:bg-sage hover:text-white transition-all shadow-sm hover:-translate-y-1">
                <Instagram size={20} />
              </a>
              <a href={WHATSAPP_CATALOG_URL} target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full text-sage hover:bg-sage hover:text-white transition-all shadow-sm hover:-translate-y-1">
                <MessageCircle size={20} />
              </a>
              <a href={`tel:${DISPLAY_PHONE}`} className="p-2 bg-white rounded-full text-sage hover:bg-sage hover:text-white transition-all shadow-sm hover:-translate-y-1">
                <Phone size={20} />
              </a>
            </div>
          </div>
          
          <div className="reveal stagger-1">
            <h4 className="font-bold text-charcoal mb-4 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-3 text-sm text-charcoal-light">
              <li><button onClick={() => onPageChange('home')} className="hover:text-sage hover:translate-x-1 transition-all">Home</button></li>
              <li><button onClick={() => onPageChange('shop')} className="hover:text-sage hover:translate-x-1 transition-all">Shop All</button></li>
              <li><button onClick={() => onPageChange('collections')} className="hover:text-sage hover:translate-x-1 transition-all">Collections</button></li>
              <li><button onClick={() => onPageChange('updates')} className="hover:text-sage hover:translate-x-1 transition-all">Latest News</button></li>
            </ul>
          </div>

          <div className="reveal stagger-2">
            <h4 className="font-bold text-charcoal mb-4 uppercase tracking-widest text-xs">Help & Info</h4>
            <ul className="space-y-3 text-sm text-charcoal-light">
              <li><button onClick={() => onPageChange('about')} className="hover:text-sage hover:translate-x-1 transition-all">Our Story</button></li>
              <li><button onClick={() => onPageChange('contact')} className="hover:text-sage hover:translate-x-1 transition-all">Contact Support</button></li>
              <li><button className="hover:text-sage hover:translate-x-1 transition-all">Delivery Info</button></li>
              <li><button className="hover:text-sage hover:translate-x-1 transition-all">Privacy Policy</button></li>
            </ul>
          </div>

          <div className="reveal stagger-3" id="newsletter-section">
            <h4 className="font-bold text-charcoal mb-4 uppercase tracking-widest text-xs">Newsletter</h4>
            <p className="text-xs text-charcoal-light mb-4 leading-relaxed">Join for updates and early access to sales.</p>
            <div className="flex group">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white border-none rounded-l-lg px-4 py-2.5 text-sm w-full focus:ring-1 focus:ring-sage transition-all"
              />
              <button className="bg-sage text-white px-5 py-2.5 rounded-r-lg text-sm font-medium hover:bg-sage-dark transition-all active:scale-95">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blush pt-8 text-center text-xs text-charcoal-light">
          <p>© {new Date().getFullYear()} DeVina Essence Skincare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
