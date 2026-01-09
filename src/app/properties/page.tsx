'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import PropertyCard from '@/components/properties/PropertyCard';
import { properties, propertyTypes, locations } from '@/data/properties';

export default function PropertiesPage() {
  const [typeFilter, setTypeFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProperties = useMemo(() => {
    return properties.filter(property => {
      // Type filter
      if (typeFilter !== 'all' && property.type !== typeFilter) return false;

      // Location filter
      if (locationFilter !== 'all' && property.location !== locationFilter) return false;

      // Status filter
      if (statusFilter !== 'all') {
        if (property.status !== statusFilter && property.status !== 'both') return false;
      }

      // Search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const searchFields = [
          property.title,
          property.location,
          property.area,
          property.description,
          ...property.features
        ].join(' ').toLowerCase();
        if (!searchFields.includes(query)) return false;
      }

      return true;
    });
  }, [typeFilter, locationFilter, statusFilter, searchQuery]);

  const clearFilters = () => {
    setTypeFilter('all');
    setLocationFilter('all');
    setStatusFilter('all');
    setSearchQuery('');
  };

  const hasActiveFilters = typeFilter !== 'all' || locationFilter !== 'all' || statusFilter !== 'all' || searchQuery;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-white mb-4">
              Commercial Properties in Nagpur
            </h1>
            <p className="text-xl text-gray-300">
              Browse our curated selection of premium office spaces, retail showrooms,
              warehouses, and industrial properties across Nagpur&apos;s prime commercial corridors.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-white py-6 border-b sticky top-[60px] z-40 shadow-sm">
        <div className="container mx-auto px-6">
          {/* Search Bar */}
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
            <div className="relative flex-1">
              <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by location, property type, or features..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold"
              />
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden btn-navy flex items-center justify-center gap-2"
            >
              <SlidersHorizontal size={18} />
              Filters
              {hasActiveFilters && (
                <span className="w-2 h-2 bg-gold rounded-full" />
              )}
            </button>

            {/* Desktop Filters */}
            <div className="hidden lg:flex items-center gap-4">
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="px-4 py-3 border border-gray-200 bg-white min-w-[160px]"
              >
                {propertyTypes.map(type => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>

              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="px-4 py-3 border border-gray-200 bg-white min-w-[160px]"
              >
                {locations.map(loc => (
                  <option key={loc.value} value={loc.value}>{loc.label}</option>
                ))}
              </select>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-3 border border-gray-200 bg-white min-w-[140px]"
              >
                <option value="all">Sale/Lease</option>
                <option value="sale">For Sale</option>
                <option value="lease">For Lease</option>
              </select>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1 text-navy hover:text-gold transition-colors"
                >
                  <X size={18} />
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="lg:hidden mt-4 pt-4 border-t border-gray-100 grid grid-cols-2 gap-4">
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="px-4 py-3 border border-gray-200 bg-white"
              >
                {propertyTypes.map(type => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>

              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="px-4 py-3 border border-gray-200 bg-white"
              >
                {locations.map(loc => (
                  <option key={loc.value} value={loc.value}>{loc.label}</option>
                ))}
              </select>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-3 border border-gray-200 bg-white"
              >
                <option value="all">Sale/Lease</option>
                <option value="sale">For Sale</option>
                <option value="lease">For Lease</option>
              </select>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center justify-center gap-1 text-navy hover:text-gold transition-colors"
                >
                  <X size={18} />
                  Clear Filters
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Results */}
      <section className="section bg-warm-white">
        <div className="container mx-auto px-6">
          {/* Results Count */}
          <div className="mb-8 flex items-center justify-between">
            <p className="text-gray-600">
              Showing <strong>{filteredProperties.length}</strong> properties
              {hasActiveFilters && ' (filtered)'}
            </p>
          </div>

          {/* Property Grid */}
          {filteredProperties.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white">
              <div className="text-6xl mb-4">🏢</div>
              <h3 className="text-2xl mb-2">No Properties Found</h3>
              <p className="text-gray-600 mb-6">
                We couldn&apos;t find any properties matching your criteria.
                Try adjusting your filters or search query.
              </p>
              <button
                onClick={clearFilters}
                className="btn-primary"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-navy">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-white mb-4">Can&apos;t Find What You&apos;re Looking For?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Our inventory is constantly updated. Share your requirements with us
            and we&apos;ll help you find the perfect commercial space.
          </p>
          <Link href="/contact" className="btn-primary">
            Share Your Requirements
          </Link>
        </div>
      </section>
    </>
  );
}
