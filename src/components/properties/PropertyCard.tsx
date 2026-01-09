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
    <div className="group bg-gradient-to-br from-[#142236] to-[#0f1d2e] border border-white/5 overflow-hidden hover:border-[#e8983a]/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(232,152,58,0.1)]">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1420] via-transparent to-transparent z-10" />

        {/* Placeholder with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a3d52]/30 to-[#0a1420]/60 flex items-center justify-center">
          <Building2 size={56} className="text-white/10" />
        </div>

        {/* Badges */}
        <div className="absolute top-4 left-4 z-20 flex gap-2">
          <span className="badge badge-orange">
            {statusLabels[property.status]}
          </span>
          {property.featured && (
            <span className="badge bg-white/10 backdrop-blur-sm text-white border border-white/20">
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
        <div className="text-[#e8983a] text-xs font-semibold uppercase tracking-wider mb-3">
          {typeLabels[property.type]}
        </div>

        <h3 className="text-lg text-white font-semibold mb-3 group-hover:text-[#e8983a] transition-colors line-clamp-2">
          {property.title}
        </h3>

        <div className="flex items-center gap-2 text-white/50 mb-4">
          <MapPin size={14} className="text-[#e8983a]" />
          <span className="text-sm">{property.area}, Nagpur</span>
        </div>

        {/* Key Details */}
        <div className="flex items-center gap-4 py-4 border-t border-white/5">
          <div className="flex items-center gap-2">
            <Maximize size={14} className="text-[#e8983a]" />
            <span className="text-sm text-white/70">
              {property.carpetArea.toLocaleString()} sq.ft
            </span>
          </div>
          <span className="text-xs text-white/40">Carpet Area</span>
        </div>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2 mb-4">
          {property.highlights.slice(0, 2).map((highlight, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-white/5 border border-white/10 text-xs text-white/60"
            >
              {highlight}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link
          href={`/properties/${property.id}`}
          className="flex items-center justify-between pt-4 border-t border-white/5 text-white/70 font-medium group-hover:text-[#e8983a] transition-colors"
        >
          <span className="text-sm">View Details</span>
          <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
