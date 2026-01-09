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
    <div className="group bg-luxury-charcoal border border-white/5 hover:border-luxury-gold/50 transition-all duration-500 hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-luxury-black">
        {/* Placeholder with gradient - In real app, use property.images[0] */}
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-black via-gray-900 to-luxury-charcoal flex items-center justify-center group-hover:scale-105 transition-transform duration-700 ease-out">
          <Building2 size={48} className="text-white/20" />
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

        {/* Status Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1 bg-luxury-gold text-luxury-black text-xs font-bold tracking-widest uppercase">
            {statusLabels[property.status]}
          </span>
        </div>

        {/* Price Tag */}
        <div className="absolute bottom-4 left-4 z-20">
          <p className="text-white font-serif text-2xl tracking-tight">
            {formatPrice()}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex items-center gap-2 mb-3">
           <span className="w-8 h-[1px] bg-luxury-gold"></span>
           <span className="text-luxury-gold text-xs font-semibold uppercase tracking-widest">
             {typeLabels[property.type]}
           </span>
        </div>

        <h3 className="text-xl text-white font-serif mb-4 group-hover:text-luxury-gold transition-colors line-clamp-2 min-h-[3.5rem]">
          {property.title}
        </h3>

        <div className="flex items-center gap-2 text-gray-400 mb-6 font-light text-sm">
          <MapPin size={14} className="text-luxury-gold" />
          <span>{property.area}, Nagpur</span>
        </div>

        {/* Specs Divider */}
        <div className="w-full h-[1px] bg-white/10 mb-6"></div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Maximize size={16} className="text-luxury-gold" />
            <span className="text-sm text-gray-300">
              {property.carpetArea.toLocaleString()} <span className="text-xs text-gray-500">Sq. Ft.</span>
            </span>
          </div>

          {/* CTA */}
          <Link
            href={`/properties/${property.id}`}
            className="flex items-center gap-2 text-white text-sm hover:text-luxury-gold transition-colors tracking-wide"
          >
            DETAILS <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
