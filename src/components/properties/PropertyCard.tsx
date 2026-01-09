import Link from 'next/link';
import { MapPin, Maximize, Building2, ArrowRight } from 'lucide-react';
import { Property } from '@/data/properties';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const formatPrice = () => {
    if (property.priceUnit === 'sqft') {
      return `₹${property.price}/sq.ft${property.status === 'lease' ? '/month' : ''}`;
    } else if (property.priceUnit === 'month') {
      return `₹${property.price.toLocaleString()}/month`;
    } else {
      return `₹${(property.price / 10000000).toFixed(2)} Cr`;
    }
  };

  const typeLabels: Record<string, string> = {
    office: 'Office Space',
    retail: 'Retail/Showroom',
    warehouse: 'Warehouse',
    industrial: 'Industrial',
    plot: 'Commercial Plot',
  };

  const statusLabels: Record<string, string> = {
    sale: 'For Sale',
    lease: 'For Lease',
    both: 'Sale/Lease',
  };

  return (
    <div className="card group">
      {/* Image */}
      <div className="relative h-64 bg-gray-200 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent z-10" />

        {/* Placeholder with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy/20 to-navy/40 flex items-center justify-center">
          <Building2 size={64} className="text-navy/30" />
        </div>

        {/* Badges */}
        <div className="absolute top-4 left-4 z-20 flex gap-2">
          <span className="px-3 py-1 bg-gold text-navy text-xs font-semibold uppercase">
            {statusLabels[property.status]}
          </span>
          {property.featured && (
            <span className="px-3 py-1 bg-navy text-white text-xs font-semibold uppercase">
              Featured
            </span>
          )}
        </div>

        {/* Price */}
        <div className="absolute bottom-4 left-4 z-20">
          <div className="text-white text-2xl font-bold">
            {formatPrice()}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="text-gold text-sm font-semibold uppercase tracking-wider mb-2">
          {typeLabels[property.type]}
        </div>

        <h3 className="text-xl font-serif mb-3 group-hover:text-gold transition-colors line-clamp-2">
          {property.title}
        </h3>

        <div className="flex items-center gap-2 text-gray-500 mb-4">
          <MapPin size={16} className="text-gold" />
          <span>{property.area}, Nagpur</span>
        </div>

        {/* Key Details */}
        <div className="flex gap-6 py-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <Maximize size={16} className="text-navy" />
            <span className="text-sm text-gray-600">
              {property.carpetArea.toLocaleString()} sq.ft
            </span>
          </div>
          <div className="text-sm text-gray-500">
            Carpet Area
          </div>
        </div>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2 mb-4">
          {property.highlights.slice(0, 2).map((highlight, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-warm-white text-xs text-gray-600"
            >
              {highlight}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link
          href={`/properties/${property.id}`}
          className="flex items-center justify-between pt-4 border-t border-gray-100 text-navy font-semibold group-hover:text-gold transition-colors"
        >
          <span>View Details</span>
          <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
