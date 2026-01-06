
import React from 'react';
import { Header, Footer } from './components/Layout';
import { Page, Product } from './types';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Collections from './pages/Collections';
import Updates from './pages/Updates';
import About from './pages/About';
import Contact from './pages/Contact';
import { WHATSAPP_NUMBER } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState<Page>('home');
  const [cartItems, setCartItems] = React.useState<Product[]>([]);

  // Page change handler with smooth scroll support
  const handlePageChange = (page: Page) => {
    if (page === currentPage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentPage(page);
    }
  };

  // Robust reveal logic that handles both page changes and dynamic content (like filtering)
  React.useEffect(() => {
    if (!document.documentElement.classList.contains('scroll-smooth')) {
      window.scrollTo(0, 0);
    }
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const observeElements = () => {
      document.querySelectorAll('.reveal:not(.active)').forEach(el => observer.observe(el));
    };

    // Initial check
    observeElements();

    // Use MutationObserver to watch for new elements being added (e.g., when filtering products)
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [currentPage]);

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => [...prev, product]);
    console.log(`Added ${product.name} to cart`);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onPageChange={handlePageChange} onAddToCart={handleAddToCart} />;
      case 'shop':
        return <Shop onAddToCart={handleAddToCart} />;
      case 'collections':
        return <Collections onAddToCart={handleAddToCart} />;
      case 'updates':
        return <Updates />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onPageChange={handlePageChange} onAddToCart={handleAddToCart} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream font-sans selection:bg-sage/20 selection:text-sage-dark">
      <Header 
        currentPage={currentPage} 
        onPageChange={handlePageChange} 
        cartCount={cartItems.length}
      />
      
      <main className="flex-grow">
        <div key={currentPage} className="animate-reveal-up">
          {renderPage()}
        </div>
      </main>

      <Footer onPageChange={handlePageChange} />

      {/* Persistent CTA - Mobile Bottom Bar for WhatsApp */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <a 
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 animate-pulse-soft"
        >
          <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default App;
