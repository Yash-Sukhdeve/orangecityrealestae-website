import Link from 'next/link';
import { Building, Key, FileCheck, TrendingUp, Users, Map, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Building,
    title: 'Corporate Tenant Representation',
    description: 'Expert guidance for businesses seeking office spaces, from site selection to lease negotiation.',
    link: '/services#tenant-representation'
  },
  {
    icon: Key,
    title: 'Property Sales & Leasing',
    description: 'Full-service commercial property transactions for offices, retail, warehouses, and industrial facilities.',
    link: '/services#sales-leasing'
  },
  {
    icon: FileCheck,
    title: 'Due Diligence & Valuations',
    description: 'Institutional-grade property valuations, title verification, and comprehensive due diligence reports.',
    link: '/services#valuations'
  },
  {
    icon: TrendingUp,
    title: 'Investment Advisory',
    description: 'Strategic investment guidance for commercial real estate portfolios in Nagpur\'s growth corridors.',
    link: '/services#investment'
  },
  {
    icon: Users,
    title: 'Property Management',
    description: 'End-to-end property management services for commercial buildings and industrial estates.',
    link: '/services#management'
  },
  {
    icon: Map,
    title: 'Land & Development',
    description: 'Industrial plots, commercial land, and development opportunities in MIDC and growth areas.',
    link: '/services#development'
  }
];

export default function ServicesSection() {
  return (
    <section className="section bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-12">
          <div>
            <div className="gold-line" />
            <h2 className="mb-4">Comprehensive Commercial Real Estate Services</h2>
            <p className="text-gray-600 text-lg">
              Unlike residential-focused competitors, we specialize exclusively in commercial
              properties—delivering institutional-quality service to corporate clients in Nagpur.
            </p>
          </div>
          <div className="text-right">
            <Link href="/services" className="btn-navy">
              All Services
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="group p-8 border border-gray-200 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-navy/5 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                <service.icon size={28} className="text-navy group-hover:text-gold transition-colors" />
              </div>
              <h4 className="text-xl mb-3 group-hover:text-gold transition-colors">
                {service.title}
              </h4>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-2 text-navy font-semibold text-sm uppercase tracking-wider group-hover:text-gold transition-colors">
                Learn More
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
