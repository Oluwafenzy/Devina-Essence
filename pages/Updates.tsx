
import React from 'react';
import { Calendar, Tag, Bell } from 'lucide-react';
import { SectionTitle } from '../components/UI';
import { NEWS_UPDATES, WHATSAPP_NUMBER } from '../constants';

const Updates: React.FC = () => {
  const handleGetOffer = (title: string) => {
    const message = encodeURIComponent(`Hi DeVina Essence! I'm interested in the "${title}" offer I saw on your website updates. Could you please provide more details?`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  const handleNotifyMe = () => {
    const newsletter = document.getElementById('newsletter-section');
    if (newsletter) {
      newsletter.scrollIntoView({ behavior: 'smooth' });
      // Add a brief pulse effect to the input to draw attention
      const input = newsletter.querySelector('input');
      if (input) {
        input.focus();
        input.classList.add('ring-2', 'ring-sage');
        setTimeout(() => input.classList.remove('ring-2', 'ring-sage'), 2000);
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <SectionTitle 
        title="Latest Updates" 
        subtitle="Flash sales, new arrivals, and restock alerts from DeVina Essence."
        centered
      />

      <div className="max-w-4xl mx-auto space-y-12">
        {NEWS_UPDATES.map((news) => (
          <article key={news.id} className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-blush hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-8">
              {news.image && (
                <div className="md:w-1/3 aspect-video md:aspect-square rounded-2xl overflow-hidden shrink-0">
                  <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
                </div>
              )}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest ${
                    news.type === 'Discount' || news.type === 'Flash Sale' ? 'bg-red-50 text-red-600' : 
                    news.type === 'New Arrival' ? 'bg-sage/10 text-sage' : 'bg-blue-50 text-blue-600'
                  }`}>
                    {news.type}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-charcoal/40">
                    <Calendar size={12} />
                    {new Date(news.date).toLocaleDateString(undefined, { dateStyle: 'long' })}
                  </div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-serif text-charcoal mb-4">{news.title}</h2>
                <div className="prose prose-sm prose-charcoal max-w-none text-charcoal-light leading-relaxed mb-6">
                  {news.content}
                </div>
                
                <div className="flex flex-wrap gap-4 pt-6 border-t border-blush/50">
                  <button 
                    onClick={() => handleGetOffer(news.title)}
                    className="flex items-center gap-2 text-sm text-sage font-bold hover:underline transition-all hover:scale-105 active:scale-95"
                  >
                    <Tag size={16} /> Get This Offer
                  </button>
                  <button 
                    onClick={handleNotifyMe}
                    className="flex items-center gap-2 text-sm text-charcoal-light font-medium hover:text-sage transition-all hover:scale-105 active:scale-95"
                  >
                    <Bell size={16} /> Notify Me
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Updates;
