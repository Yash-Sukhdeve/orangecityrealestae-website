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
    <section className="section bg-warm-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="gold-line-center" />
          <h2 className="mb-4">Nagpur&apos;s Prime Commercial Zones</h2>
          <p className="text-gray-600 text-lg">
            Strategic locations across Central India&apos;s fastest-growing commercial market.
            Each zone offers unique advantages for different business needs.
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <Link
              key={index}
              href={`/areas/${area.slug}`}
              className="group bg-white p-6 border border-gray-100 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors">
                  <area.icon size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg mb-1 group-hover:text-gold transition-colors">
                    {area.name}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">
                    {area.description}
                  </p>
                  <div className="flex flex-col gap-1 text-sm">
                    <span className="text-gold font-semibold">{area.stats}</span>
                    <span className="text-gray-500">{area.highlight}</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-navy text-sm font-semibold group-hover:text-gold transition-colors">
                <span>Explore Area</span>
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/areas" className="btn-navy">
            View All Area Guides
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
