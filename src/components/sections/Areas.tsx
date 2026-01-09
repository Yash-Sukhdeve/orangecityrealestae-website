import Link from 'next/link';
import { ArrowRight, Building2, Factory, ShoppingBag, Plane, Warehouse } from 'lucide-react';

const areas = [
  {
    name: 'MIHAN SEZ',
    slug: 'mihan-sez',
    description: 'IT/ITES hub with TCS, Tech Mahindra, Infosys',
    icon: Plane,
    stats: '60,000+ IT professionals',
    highlight: 'Airport proximity & SEZ benefits'
  },
  {
    name: 'Dharampeth',
    slug: 'dharampeth',
    description: 'Premium retail with jewelry chains & brands',
    icon: ShoppingBag,
    stats: '8.9% annual appreciation',
    highlight: 'Premium retail destination'
  },
  {
    name: 'Civil Lines',
    slug: 'civil-lines',
    description: 'Corporate headquarters & banking district',
    icon: Building2,
    stats: '₹10,394/sq.ft avg price',
    highlight: 'Highest property values'
  },
  {
    name: 'Sitabuldi CBD',
    slug: 'sitabuldi',
    description: 'Central Business District with WTC',
    icon: Building2,
    stats: '2 lakh daily footfall',
    highlight: 'World Trade Center location'
  },
  {
    name: 'Butibori MIDC',
    slug: 'butibori-midc',
    description: 'India\'s largest industrial district',
    icon: Factory,
    stats: '266+ companies across 23 sq.km',
    highlight: 'Manufacturing & logistics hub'
  },
  {
    name: 'Hingna MIDC',
    slug: 'hingna-midc',
    description: 'Manufacturing with Mahindra plant',
    icon: Warehouse,
    stats: '183+ manufacturing units',
    highlight: 'Established industrial zone'
  }
];

export default function AreasSection() {
  return (
    <section className="py-24 bg-luxury-black">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-luxury-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            Prime Locations
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Commercial Zones</h2>
          <p className="text-gray-400 font-light text-lg">
            Strategic investment corridors across Central India's fastest-growing market.
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <Link
              key={index}
              href={`/areas/${area.slug}`}
              className="group bg-luxury-charcoal border border-white/5 p-8 hover:border-luxury-gold/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-luxury-gold/5 rounded-full blur-2xl group-hover:bg-luxury-gold/10 transition-all duration-500" />
              
              <div className="flex items-start gap-6 relative z-10">
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 text-luxury-gold group-hover:scale-110 transition-transform duration-300">
                  <area.icon size={32} strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h4 className="font-serif text-xl text-white mb-2 group-hover:text-luxury-gold transition-colors">
                    {area.name}
                  </h4>
                  <p className="text-gray-400 text-sm mb-4 font-light">
                    {area.description}
                  </p>
                  <div className="space-y-1">
                    <p className="text-luxury-gold text-sm font-medium">{area.stats}</p>
                    <p className="text-gray-500 text-xs tracking-wide">{area.highlight}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link 
            href="/areas" 
            className="inline-flex items-center gap-2 px-8 py-3 border border-white/20 text-white hover:border-luxury-gold hover:text-luxury-gold transition-all duration-300 tracking-wider text-sm uppercase"
          >
            Explore All Zones
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
