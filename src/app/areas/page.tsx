import { Metadata } from 'next';
import Link from 'next/link';
import {
  Building2, Factory, ShoppingBag, Plane, Warehouse, TrendingUp,
  MapPin, ArrowRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Area Guides | Orange City Real Estate - Nagpur Commercial Zones',
  description: 'Explore Nagpur\'s prime commercial zones: MIHAN SEZ, Dharampeth, Civil Lines, Sitabuldi CBD, Butibori MIDC, and Hingna MIDC. Comprehensive guides for businesses and investors.',
};

const areas = [
  {
    name: 'MIHAN SEZ',
    slug: 'mihan-sez',
    icon: Plane,
    tagline: 'IT/ITES & Aerospace Hub',
    description: 'Multi-modal International Hub Airport at Nagpur SEZ - home to TCS, Tech Mahindra, Infosys, and HCL Technologies.',
    stats: {
      workforce: '60,000+',
      companies: '50+',
      avgRate: '₹55-75/sq.ft',
      appreciation: '12%'
    },
    highlights: [
      'SEZ tax benefits for IT/ITES',
      '5 mins from airport',
      'Metro connectivity',
      'Campus-style IT parks'
    ],
    propertyTypes: ['IT Office Space', 'BPO/KPO Centers', 'Aerospace Units']
  },
  {
    name: 'Dharampeth',
    slug: 'dharampeth',
    icon: ShoppingBag,
    tagline: 'Premium Retail Destination',
    description: 'Nagpur\'s premier retail corridor featuring TBZ, Kothari jewellery chains, and premium lifestyle brands.',
    stats: {
      footfall: 'High',
      companies: '200+',
      avgRate: '₹90-120/sq.ft',
      appreciation: '8.9%'
    },
    highlights: [
      'Prime retail frontage',
      'High-income catchment',
      'Metro station nearby',
      'Premium brand cluster'
    ],
    propertyTypes: ['Retail Showrooms', 'Branded Stores', 'Commercial Complexes']
  },
  {
    name: 'Civil Lines',
    slug: 'civil-lines',
    icon: Building2,
    tagline: 'Premium Corporate Address',
    description: 'Nagpur\'s most prestigious commercial district, housing RBI regional office and corporate headquarters.',
    stats: {
      avgPrice: '₹10,394/sq.ft',
      companies: '100+',
      avgRate: '₹80-100/sq.ft',
      appreciation: '30.35%'
    },
    highlights: [
      'Highest property values',
      'Near RBI regional office',
      'Heritage area premium',
      'Corporate headquarters'
    ],
    propertyTypes: ['Corporate Offices', 'Banks & Financial Services', 'Professional Services']
  },
  {
    name: 'Sitabuldi CBD',
    slug: 'sitabuldi',
    icon: Building2,
    tagline: 'Central Business District',
    description: 'Nagpur\'s CBD anchored by World Trade Center with 1.5 million sq.ft mixed-use development.',
    stats: {
      footfall: '2 Lakh/day',
      companies: '500+',
      avgRate: '₹70-95/sq.ft',
      appreciation: '10%'
    },
    highlights: [
      'World Trade Center',
      'Highest footfall area',
      'Metro hub connectivity',
      'Mixed retail & office'
    ],
    propertyTypes: ['Office Space', 'Retail Units', 'Mixed-Use Commercial']
  },
  {
    name: 'Butibori MIDC',
    slug: 'butibori-midc',
    icon: Factory,
    tagline: 'India\'s Largest Industrial Estate',
    description: 'Asia\'s largest MIDC with 266+ companies across 23 sq.km, ideal for manufacturing and logistics.',
    stats: {
      area: '23 sq.km',
      companies: '266+',
      avgRate: '₹18-25/sq.ft',
      appreciation: '8%'
    },
    highlights: [
      'NH44 highway access',
      'Rail connectivity',
      'All utilities available',
      'SEZ proximity'
    ],
    propertyTypes: ['Warehouses', 'Manufacturing Units', 'Industrial Plots']
  },
  {
    name: 'Hingna MIDC',
    slug: 'hingna-midc',
    icon: Warehouse,
    tagline: 'Established Manufacturing Hub',
    description: 'Well-established industrial zone hosting Mahindra\'s tractor plant and 183+ manufacturing companies.',
    stats: {
      companies: '183+',
      established: '1970s',
      avgRate: '₹20-30/sq.ft',
      appreciation: '7%'
    },
    highlights: [
      'Mahindra anchor tenant',
      'Established infrastructure',
      'Skilled workforce',
      'City connectivity'
    ],
    propertyTypes: ['Manufacturing Units', 'Industrial Sheds', 'Auto Ancillary Units']
  }
];

export default function AreasPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-gold/20 border border-gold/30 mb-6">
              <span className="text-gold text-sm font-semibold uppercase tracking-wider">
                Area Guides
              </span>
            </div>
            <h1 className="text-white mb-6">
              Nagpur&apos;s Prime Commercial Zones
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Comprehensive guides to Central India&apos;s fastest-growing commercial markets.
              Find the perfect location for your business based on connectivity,
              infrastructure, and growth potential.
            </p>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="bg-gold py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-navy mb-1">3.8M</div>
              <div className="text-navy/80">Sq.ft Office Stock</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-navy mb-1">12.9M</div>
              <div className="text-navy/80">Sq.ft Warehouse Stock</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-navy mb-1">26%</div>
              <div className="text-navy/80">Growth by 2027</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-navy mb-1">13%</div>
              <div className="text-navy/80">Healthy Vacancy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="section bg-warm-white">
        <div className="container mx-auto px-6">
          <div className="space-y-8">
            {areas.map((area, index) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="block bg-white hover:shadow-xl transition-all duration-300 group"
              >
                <div className="grid lg:grid-cols-4 gap-0">
                  {/* Icon Section */}
                  <div className="bg-navy p-8 flex flex-col justify-center items-center text-center lg:col-span-1">
                    <div className="w-16 h-16 bg-gold/20 flex items-center justify-center mb-4">
                      <area.icon size={32} className="text-gold" />
                    </div>
                    <h3 className="text-white text-2xl mb-1">{area.name}</h3>
                    <div className="text-gold text-sm">{area.tagline}</div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 lg:col-span-3">
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Description */}
                      <div>
                        <p className="text-gray-600 mb-4">{area.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {area.propertyTypes.map((type, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-warm-white text-sm text-gray-600"
                            >
                              {type}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-2 text-navy font-semibold group-hover:text-gold transition-colors">
                          <span>Explore {area.name}</span>
                          <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(area.stats).map(([key, value], idx) => (
                          <div key={idx} className="border-l-2 border-gold pl-3">
                            <div className="text-xl font-bold text-navy">{value}</div>
                            <div className="text-sm text-gray-500 capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <div className="flex flex-wrap gap-4">
                        {area.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                            <TrendingUp size={14} className="text-gold" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Zero Mile City */}
      <section className="section bg-navy">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-12 h-0.5 bg-gold mb-6" />
              <h2 className="text-white mb-6">The Zero Mile City Advantage</h2>
              <p className="text-gray-300 text-lg mb-6">
                Nagpur is India&apos;s geographic center—equidistant from Mumbai, Delhi,
                Chennai, and Kolkata. This strategic position makes it ideal for
                national distribution centers and pan-India operations.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-2 border-gold pl-4">
                  <div className="text-3xl font-bold text-gold mb-1">8 hrs</div>
                  <div className="text-gray-400">To Mumbai via Samruddhi</div>
                </div>
                <div className="border-l-2 border-gold pl-4">
                  <div className="text-3xl font-bold text-gold mb-1">701 km</div>
                  <div className="text-gray-400">Samruddhi Expressway</div>
                </div>
                <div className="border-l-2 border-gold pl-4">
                  <div className="text-3xl font-bold text-gold mb-1">43.8 km</div>
                  <div className="text-gray-400">Metro Phase 2</div>
                </div>
                <div className="border-l-2 border-gold pl-4">
                  <div className="text-3xl font-bold text-gold mb-1">1,500 ac</div>
                  <div className="text-gray-400">Mega Logistics Hub</div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8">
              <h3 className="text-white text-2xl font-serif mb-6">
                Find Your Ideal Location
              </h3>
              <p className="text-gray-300 mb-6">
                Not sure which commercial zone suits your business? Our experts can
                help you identify the perfect location based on your industry,
                workforce needs, and growth plans.
              </p>
              <Link href="/contact" className="btn-primary w-full justify-center">
                Get Location Advisory
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
