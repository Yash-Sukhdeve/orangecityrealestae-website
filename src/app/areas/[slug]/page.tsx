import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  MapPin, Building2, TrendingUp, CheckCircle, ArrowRight, ArrowLeft,
  Train, Plane, Car, Wifi, Zap, Shield
} from 'lucide-react';
import { areas, getAreaBySlug } from '@/data/areas';
import { properties } from '@/data/properties';
import PropertyCard from '@/components/properties/PropertyCard';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return areas.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaBySlug(slug);

  if (!area) {
    return {
      title: 'Area Not Found | Orange City Real Estate',
    };
  }

  return {
    title: `${area.name} Commercial Properties | Orange City Real Estate`,
    description: `${area.description} Find office spaces, retail showrooms, and commercial properties in ${area.name}, Nagpur.`,
  };
}

export default async function AreaDetailPage({ params }: Props) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);

  if (!area) {
    notFound();
  }

  // Get properties in this area
  const areaProperties = properties.filter(p =>
    p.location.toLowerCase().includes(slug.split('-')[0]) ||
    p.area.toLowerCase().includes(area.name.toLowerCase())
  ).slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-[#0a1420] py-4 border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-white/50 hover:text-[#e8983a] transition-colors">
              Home
            </Link>
            <span className="text-white/30">/</span>
            <Link href="/areas" className="text-white/50 hover:text-[#e8983a] transition-colors">
              Areas
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-[#e8983a]">{area.name}</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-[#0a1420] pb-16 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#e8983a]/5 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <Link
            href="/areas"
            className="inline-flex items-center gap-2 text-white/50 hover:text-[#e8983a] transition-colors mb-6"
          >
            <ArrowLeft size={18} />
            All Areas
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-[#e8983a]/10 border border-[#e8983a]/20 mb-6">
                <span className="text-[#e8983a] text-sm font-semibold uppercase tracking-wider">
                  {area.tagline}
                </span>
              </div>
              <h1 className="text-white mb-4">{area.name}</h1>
              <p className="text-xl text-white/60 leading-relaxed mb-8">
                {area.longDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/properties" className="btn-primary">
                  View Properties
                  <ArrowRight size={18} />
                </Link>
                <Link href="/contact" className="btn-outline">
                  Get Expert Advisory
                </Link>
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-[#142236] border border-white/10 p-8">
              <h3 className="text-white text-2xl font-serif mb-6">Market Snapshot</h3>
              <div className="grid grid-cols-2 gap-6">
                {area.stats.map((stat, idx) => (
                  <div key={idx} className="border-l-2 border-[#e8983a] pl-4">
                    <div className="text-3xl font-bold text-[#e8983a] mb-1">{stat.value}</div>
                    <div className="text-white/40 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-white/40 text-sm mb-1">Sale Price</div>
                    <div className="text-white font-semibold">{area.priceRange.sale}</div>
                  </div>
                  <div>
                    <div className="text-white/40 text-sm mb-1">Lease Rate</div>
                    <div className="text-white font-semibold">{area.priceRange.lease}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="section bg-[#0f1d2e]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Highlights */}
            <div className="bg-[#142236] border border-white/10 p-8">
              <h3 className="text-white text-2xl mb-6">Key Highlights</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {area.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-[#e8983a] flex-shrink-0 mt-0.5" />
                    <span className="text-white/60">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Property Types */}
            <div className="bg-[#142236] border border-white/10 p-8">
              <h3 className="text-white text-2xl mb-6">Available Property Types</h3>
              <div className="flex flex-wrap gap-3">
                {area.propertyTypes.map((type, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-gradient-to-r from-[#e8983a] to-[#d4872e] text-[#0a1420] text-sm font-medium"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Major Occupiers & Infrastructure */}
      <section className="section bg-[#0a1420]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Major Occupiers */}
            <div className="bg-[#142236] border border-white/10 p-8">
              <div className="flex items-center gap-3 mb-6">
                <Building2 size={24} className="text-[#e8983a]" />
                <h3 className="text-white text-xl">Major Occupiers</h3>
              </div>
              <ul className="space-y-3">
                {area.majorOccupiers.map((occupier, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-white/60">
                    <span className="w-1.5 h-1.5 bg-[#e8983a] rounded-full mt-2 flex-shrink-0" />
                    {occupier}
                  </li>
                ))}
              </ul>
            </div>

            {/* Connectivity */}
            <div className="bg-[#142236] border border-white/10 p-8">
              <div className="flex items-center gap-3 mb-6">
                <Car size={24} className="text-[#e8983a]" />
                <h3 className="text-white text-xl">Connectivity</h3>
              </div>
              <ul className="space-y-3">
                {area.connectivity.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-white/60">
                    <span className="w-1.5 h-1.5 bg-[#e8983a] rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Infrastructure */}
            <div className="bg-[#142236] border border-white/10 p-8">
              <div className="flex items-center gap-3 mb-6">
                <Zap size={24} className="text-[#e8983a]" />
                <h3 className="text-white text-xl">Infrastructure</h3>
              </div>
              <ul className="space-y-3">
                {area.infrastructure.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-white/60">
                    <span className="w-1.5 h-1.5 bg-[#e8983a] rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Future Prospects */}
      <section className="py-12 bg-gradient-to-r from-[#e8983a] to-[#d4872e]">
        <div className="container mx-auto px-6">
          <div className="flex items-start gap-6">
            <TrendingUp size={32} className="text-[#0a1420] flex-shrink-0" />
            <div>
              <h3 className="text-xl text-[#0a1420] mb-2 font-semibold">Future Prospects</h3>
              <p className="text-[#0a1420]/80">{area.futureProspects}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Properties in Area */}
      {areaProperties.length > 0 && (
        <section className="section bg-[#0f1d2e]">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="accent-line" />
                <h2 className="text-white">Properties in {area.name}</h2>
              </div>
              <Link href={`/properties?location=${slug}`} className="btn-outline hidden md:flex">
                View All
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {areaProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>

            <div className="text-center mt-8 md:hidden">
              <Link href={`/properties?location=${slug}`} className="btn-outline">
                View All Properties
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section bg-[#0a1420]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-white mb-4">
            Looking for Commercial Space in {area.name}?
          </h2>
          <p className="text-white/50 text-lg mb-8 max-w-2xl mx-auto">
            Our experts have deep knowledge of this area and can help you find
            the perfect property for your business needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Schedule Consultation
              <ArrowRight size={18} />
            </Link>
            <Link href="/properties" className="btn-outline">
              Browse All Properties
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
