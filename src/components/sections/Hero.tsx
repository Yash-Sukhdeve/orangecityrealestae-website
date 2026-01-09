'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-luxury-black">
      {/* Background Effect - Abstract Gradient/Placeholder for 'City Lights' */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-luxury-charcoal via-luxury-black to-black opacity-80 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 z-0 mix-blend-overlay"></div>
      
      {/* Overlay Gradient for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-luxury-black/50 z-10"></div>

      <div className="container relative mx-auto px-6 z-20 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Animated Badge/Overline */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <span className="inline-block py-1 px-3 border border-luxury-gold/30 rounded-none text-luxury-gold text-xs tracking-[0.3em] uppercase backdrop-blur-sm">
              Premium Commercial Real Estate
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-white mb-8 leading-[1.1]"
          >
            Elevate Your <br />
            <span className="text-luxury-gold italic">Business Presence</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Curating Nagpur&apos;s most exclusive office spaces, retail showrooms, and industrial estates. Where heritage meets modern commerce.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col md:flex-row flex-wrap gap-6 justify-center mb-24"
          >
            <Link 
              href="/properties" 
              className="group relative px-8 py-4 bg-white text-luxury-black font-semibold tracking-wider overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2 group-hover:gap-4 transition-all">
                EXPLORE COLLECTION <ArrowRight size={18} />
              </span>
              <div className="absolute inset-0 bg-luxury-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></div>
            </Link>
            
            <Link 
              href="/contact" 
              className="px-8 py-4 border border-white/20 text-white hover:border-luxury-gold hover:text-luxury-gold transition-colors tracking-wider font-light backdrop-blur-sm"
            >
              PRIVATE CONSULTATION
            </Link>
          </motion.div>

          {/* Trust Indicators - Elegant Minimalist */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto pt-12 border-t border-white/10"
          >
            {[
              { number: "500+", label: "Premium Listings" },
              { number: "$100M+", label: "Property Value" },
              { number: "15+", label: "Years of Excellence" }
            ].map((stat, index) => (
              <div key={index} className="text-center group cursor-default">
                <div className="font-serif text-4xl md:text-5xl text-white/90 mb-2 group-hover:text-luxury-gold transition-colors duration-500">
                  {stat.number}
                </div>
                <div className="text-xs tracking-[0.2em] uppercase text-gray-400 group-hover:text-white transition-colors duration-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
