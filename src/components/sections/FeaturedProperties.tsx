import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PropertyCard from '@/components/properties/PropertyCard';
import { getFeaturedProperties } from '@/data/properties';

export default function FeaturedProperties() {
  const properties = getFeaturedProperties().slice(0, 6);

  return (
    <section className="py-24 bg-luxury-black relative">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-luxury-charcoal/30 to-transparent pointer-events-none" />

      <div className="container relative mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-luxury-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
              Exclusive Portfolio
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
              Featured Commercial Spaces
            </h2>
            <p className="text-gray-400 font-light text-lg max-w-xl">
              Discover premium office spaces, retail showrooms, and industrial
              properties in Nagpur's most prime locations.
            </p>
          </div>
          
          <Link 
            href="/properties" 
            className="hidden md:flex items-center gap-3 text-white hover:text-luxury-gold transition-colors tracking-widest text-sm uppercase group"
          >
            View All Collection 
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Property Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* Mobile View All CTA */}
        <div className="text-center mt-12 md:hidden">
          <Link 
            href="/properties" 
            className="inline-flex items-center gap-2 px-8 py-3 border border-luxury-gold/50 text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300 tracking-wider text-sm uppercase"
          >
            View All Collection
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
