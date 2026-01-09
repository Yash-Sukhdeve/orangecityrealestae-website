import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-luxury-black">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-br from-luxury-gold via-luxury-gold-dark to-amber-700 rounded-none p-12 md:p-20 shadow-2xl relative overflow-hidden">
          {/* Abstract Pattern Overlay */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl text-luxury-black mb-6 font-medium">
              Ready to Elevate Your Business?
            </h2>
            <p className="text-luxury-black/80 text-lg md:text-xl mb-12 leading-relaxed font-medium max-w-2xl mx-auto">
              Our private client team is ready to curate a selection of properties that match your specific commercial requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-luxury-black text-luxury-gold font-bold tracking-widest uppercase hover:bg-gray-900 transition-colors shadow-lg"
              >
                Schedule Consultation
                <ArrowRight size={18} />
              </Link>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-luxury-black text-luxury-black font-bold tracking-widest uppercase hover:bg-luxury-black hover:text-luxury-gold transition-colors"
              >
                <Phone size={18} />
                +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
