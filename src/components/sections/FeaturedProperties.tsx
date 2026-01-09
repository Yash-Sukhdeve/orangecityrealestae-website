import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PropertyCard from '@/components/properties/PropertyCard';
import { getFeaturedProperties } from '@/data/properties';

export default function FeaturedProperties() {
  const properties = getFeaturedProperties().slice(0, 6);

  return (
    <section className="section bg-[#0a1420]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="accent-line-center" />
          <h2 className="text-white mb-4">Featured Commercial Properties</h2>
          <p className="text-white/50 text-lg">
            Discover premium office spaces, retail showrooms, warehouses, and industrial
            properties across Nagpur&apos;s most sought-after commercial corridors.
          </p>
        </div>

        {/* Property Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16">
          <Link href="/properties" className="btn-outline">
            View All Properties
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
