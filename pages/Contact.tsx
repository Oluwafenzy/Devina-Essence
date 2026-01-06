
import React from 'react';
import { SectionTitle, Button } from '../components/UI';
import { MessageCircle, Instagram, Phone } from 'lucide-react';
import { WHATSAPP_CATALOG_URL, INSTAGRAM_URL, INSTAGRAM_HANDLE, DISPLAY_PHONE } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <SectionTitle 
        title="Get in Touch" 
        subtitle="Have questions about our products or your order? We're here to help."
        centered
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto mb-24">
        {/* Contact Methods */}
        <div className="space-y-8 reveal">
          <div className="bg-white p-8 rounded-3xl border border-blush shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-serif text-charcoal mb-6">Contact Options</h3>
            <div className="space-y-6">
              <a 
                href={WHATSAPP_CATALOG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#25D366]/5 hover:bg-[#25D366]/10 transition-colors group"
              >
                <div className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="font-bold text-charcoal">WhatsApp Us</p>
                  <p className="text-sm text-charcoal-light">Instant responses for orders & inquiries</p>
                </div>
              </a>
              
              <a 
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-pink-50 hover:bg-pink-100 transition-colors group"
              >
                <div className="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
                  <Instagram size={24} />
                </div>
                <div>
                  <p className="font-bold text-charcoal">Instagram</p>
                  <p className="text-sm text-charcoal-light">{INSTAGRAM_HANDLE} - Follow for tips</p>
                </div>
              </a>

              <a 
                href={`tel:${DISPLAY_PHONE}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-sage/5 hover:bg-sage/10 transition-colors group"
              >
                <div className="w-12 h-12 bg-sage text-white rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-bold text-charcoal">Phone Call</p>
                  <p className="text-sm text-charcoal-light">{DISPLAY_PHONE} - Mon-Fri, 9am-5pm</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Delivery Info with Animated Illustrations */}
        <div className="space-y-8 reveal stagger-1">
          <div className="bg-blush-light/50 p-8 md:p-10 rounded-[2.5rem] border border-blush shadow-sm">
            <h3 className="text-2xl font-serif text-charcoal mb-10">Delivery Information</h3>
            <div className="space-y-12">
              
              {/* Nationwide Delivery */}
              <div className="flex flex-col sm:flex-row gap-6 items-start group">
                <div className="relative shrink-0">
                  <div className="absolute -inset-2 bg-sage/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="w-20 h-20 bg-white rounded-3xl shadow-sm border border-blush flex items-center justify-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-8 h-8 bg-sage/10 rounded-bl-full animate-pulse"></div>
                    <svg viewBox="0 0 100 100" className="w-12 h-12 text-sage transition-transform group-hover:scale-110 duration-500">
                      {/* Speed lines */}
                      <path d="M5 35 H25 M10 42 H30 M8 49 H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="animate-draw-path opacity-40" />
                      
                      {/* Truck Body */}
                      <g className="animate-slide-van">
                        <path d="M25 45 H70 L85 60 V80 H25 Z" fill="currentColor" opacity="0.1" />
                        <rect x="25" y="45" width="45" height="25" rx="2" fill="none" stroke="currentColor" strokeWidth="3" />
                        <path d="M70 45 L85 60 V70 H70 Z" fill="none" stroke="currentColor" strokeWidth="3" />
                        {/* Wheels */}
                        <circle cx="35" cy="75" r="6" fill="white" stroke="currentColor" strokeWidth="3" className="animate-spin-slow origin-[35px_75px]" />
                        <circle cx="75" cy="75" r="6" fill="white" stroke="currentColor" strokeWidth="3" className="animate-spin-slow origin-[75px_75px]" />
                        {/* Window */}
                        <rect x="72" y="50" width="8" height="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-charcoal mb-2">Nationwide Delivery</h4>
                  <p className="text-sm text-charcoal-light leading-relaxed max-w-sm">
                    We ship across the country. Reliable door-to-door delivery with tracking provided for every order.
                  </p>
                </div>
              </div>
              
              {/* Room Delivery */}
              <div className="flex flex-col sm:flex-row gap-6 items-start group">
                <div className="relative shrink-0">
                  <div className="absolute -inset-2 bg-blush-dark/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="w-20 h-20 bg-white rounded-3xl shadow-sm border border-blush flex items-center justify-center relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-8 h-8 bg-blush/20 rounded-tr-full animate-float"></div>
                    <svg viewBox="0 0 100 100" className="w-12 h-12 text-sage-dark transition-transform group-hover:scale-110 duration-500 animate-float" style={{ animationDuration: '4s' }}>
                      <path d="M50 15 L80 40 V85 H20 V40 Z" fill="currentColor" opacity="0.1" />
                      {/* Roof */}
                      <path d="M50 15 L85 40 H15 Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" className="animate-draw-path" />
                      {/* Walls */}
                      <rect x="25" y="40" width="50" height="45" fill="none" stroke="currentColor" strokeWidth="3" />
                      {/* Door */}
                      <rect x="42" y="65" width="16" height="20" fill="none" stroke="currentColor" strokeWidth="3" />
                      {/* Sparkle/Pulse center */}
                      <circle cx="50" cy="52" r="6" fill="none" stroke="currentColor" strokeWidth="2" className="animate-pulse-soft" />
                      <path d="M50 48 V56 M46 52 H54" stroke="currentColor" strokeWidth="1.5" className="animate-pulse" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-charcoal mb-2">Room Delivery</h4>
                  <p className="text-sm text-charcoal-light leading-relaxed max-w-sm">
                    Available for specific campus and residential locations. Check with us on WhatsApp for availability.
                  </p>
                </div>
              </div>

              {/* Processing Time */}
              <div className="flex flex-col sm:flex-row gap-6 items-start group">
                <div className="relative shrink-0">
                  <div className="absolute -inset-2 bg-cream-dark/40 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="w-20 h-20 bg-white rounded-3xl shadow-sm border border-blush flex items-center justify-center relative overflow-hidden">
                    <div className="absolute top-2 right-2 w-4 h-4 bg-sage/20 rounded-full animate-ping"></div>
                    <svg viewBox="0 0 100 100" className="w-12 h-12 text-charcoal-light transition-transform group-hover:scale-110 duration-500">
                      <circle cx="50" cy="55" r="35" fill="currentColor" opacity="0.05" />
                      {/* Clock Frame */}
                      <circle cx="50" cy="55" r="35" fill="none" stroke="currentColor" strokeWidth="3" className="animate-draw-path" />
                      {/* Rotating Hands */}
                      <g className="animate-spin-slow origin-[50px_55px]">
                        <path d="M50 55 V30" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                      </g>
                      <g className="animate-spin-slow origin-[50px_55px]" style={{ animationDuration: '2s' }}>
                        <path d="M50 55 L70 55" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </g>
                      {/* Top Buttons */}
                      <path d="M35 15 H65 M50 15 V20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                      <circle cx="50" cy="55" r="4" fill="currentColor" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-charcoal mb-2">Processing Time</h4>
                  <p className="text-sm text-charcoal-light leading-relaxed max-w-sm">
                    Orders are processed within 24-48 hours. Delivery takes 1-3 business days depending on location.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Question CTA */}
      <div className="reveal bg-sage text-white p-12 rounded-[3rem] text-center max-w-4xl mx-auto overflow-hidden relative group">
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/10 rounded-full blur-3xl transition-transform group-hover:scale-150 duration-1000"></div>
        <div className="relative z-10">
          <h3 className="text-3xl font-serif mb-4">Quick Question?</h3>
          <p className="mb-8 opacity-90 max-w-lg mx-auto">The fastest way to get an answer is via our WhatsApp chat. We're usually online and ready to help!</p>
          <Button variant="secondary" onClick={() => window.open(WHATSAPP_CATALOG_URL, '_blank')} className="mx-auto hover:scale-105">
            Start Chatting Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
