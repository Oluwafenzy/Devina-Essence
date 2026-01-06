
import React from 'react';
import { SectionTitle } from '../components/UI';
import { CheckCircle2, Leaf, HeartHandshake, Smile } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Brand Story */}
      <section className="bg-cream pt-16 pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <SectionTitle title="Our Brand Story" />
              <div className="space-y-6 text-charcoal-light leading-relaxed">
                <p>
                  DeVina Essence was born out of a simple realization: high-quality skincare shouldn't be a luxury accessible only to a few. We saw a gap in the market for effective, gentle products that didn't come with the "luxury" price tag or harsh synthetic ingredients.
                </p>
                <p>
                  Starting from small experiments, we've grown into a brand trusted by thousands. Our founder's passion for botanical ingredients and skin health remains at the heart of everything we formulate today.
                </p>
                <p>
                  We focus on what truly matters: clear results, transparent ingredients, and products that you can feel good about putting on your skin every single day.
                </p>
              </div>
            </div>
            <div className="relative reveal stagger-2 group">
              {/* Animated Background Blob */}
              <div className="absolute -inset-4 bg-blush/30 rounded-full blur-3xl animate-pulse-soft opacity-50 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl bg-white border-8 border-white flex items-center justify-center">
                <img 
                  src="https://i.pinimg.com/736x/08/88/fa/0888fa6ca5430cc349f4464a4213d739.jpg" 
                  alt="DeVina Essence Products" 
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-[3s] ease-out" 
                />
                
                {/* Floating Decorative SVG */}
                <div className="absolute top-4 right-4 animate-float opacity-40">
                  <svg width="60" height="60" viewBox="0 0 100 100" className="text-sage">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 5" className="animate-spin-slow" />
                  </svg>
                </div>
              </div>

              <div className="absolute -bottom-8 -left-8 bg-sage p-8 rounded-3xl text-white shadow-xl hidden md:block animate-float">
                <p className="text-3xl font-serif">100%</p>
                <p className="text-sm opacity-90">Skin Friendly Formulations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="reveal bg-white p-12 rounded-[2.5rem] shadow-sm border border-blush hover:shadow-lg transition-shadow duration-500">
            <h3 className="text-3xl font-serif text-charcoal mb-6">Our Mission</h3>
            <p className="text-charcoal-light leading-relaxed">
              To provide everyone with access to high-quality, skin-friendly, and effective skincare products. We aim to empower our community to embrace their natural skin through gentle and honest formulations that prioritize long-term skin health over short-term "fixes".
            </p>
          </div>
          <div className="reveal stagger-1 bg-blush p-12 rounded-[2.5rem] shadow-sm hover:shadow-lg transition-shadow duration-500">
            <h3 className="text-3xl font-serif text-charcoal mb-6">Our Vision</h3>
            <p className="text-charcoal-light leading-relaxed">
              To become the most trusted skincare brand globally, known for our unwavering commitment to quality, affordability, and customer satisfaction. We envision a future where effective skincare is a standard, not a luxury.
            </p>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="bg-cream-dark py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="What Makes Us Different?" 
            subtitle="We don't just sell products; we offer a promise of trust and quality."
            centered
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="reveal stagger-1 bg-white p-8 rounded-3xl text-center shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-12 h-12 bg-sage/10 text-sage rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={24} />
              </div>
              <h4 className="font-serif text-xl mb-3">Quality Assurance</h4>
              <p className="text-sm text-charcoal-light">Rigorous testing on every batch to ensure safety and potency.</p>
            </div>
            
            <div className="reveal stagger-2 bg-white p-8 rounded-3xl text-center shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-12 h-12 bg-sage/10 text-sage rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf size={24} />
              </div>
              <h4 className="font-serif text-xl mb-3">Skin-Friendly</h4>
              <p className="text-sm text-charcoal-light">No harsh parabens or sulfates. Only what your skin needs.</p>
            </div>
            
            <div className="reveal stagger-3 bg-white p-8 rounded-3xl text-center shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-12 h-12 bg-sage/10 text-sage rounded-full flex items-center justify-center mx-auto mb-6">
                <HeartHandshake size={24} />
              </div>
              <h4 className="font-serif text-xl mb-3">Fair Pricing</h4>
              <p className="text-sm text-charcoal-light">Direct-to-consumer model ensures you get luxury quality for less.</p>
            </div>
            
            <div className="reveal stagger-4 bg-white p-8 rounded-3xl text-center shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-12 h-12 bg-sage/10 text-sage rounded-full flex items-center justify-center mx-auto mb-6">
                <Smile size={24} />
              </div>
              <h4 className="font-serif text-xl mb-3">Customer First</h4>
              <p className="text-sm text-charcoal-light">A support team that truly cares about your unique skin journey.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
