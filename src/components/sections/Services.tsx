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
    <section className="py-24 bg-luxury-charcoal border-t border-white/5">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <div className="w-12 h-0.5 bg-luxury-gold mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
              Comprehensive Real Estate Services
            </h2>
            <p className="text-gray-400 font-light text-lg">
              Specialized expertise for institutional and corporate clients.
            </p>
          </div>
          <div className="lg:text-right">
            <Link 
              href="/services" 
              className="inline-flex items-center gap-2 text-luxury-gold hover:text-white transition-colors tracking-widest text-sm uppercase"
            >
              All Services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="group p-8 bg-luxury-black border border-white/5 hover:border-luxury-gold/30 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="mb-6 text-luxury-gold opacity-80 group-hover:opacity-100 transition-opacity">
                <service.icon size={32} strokeWidth={1} />
              </div>
              <h4 className="font-serif text-xl text-white mb-4 group-hover:text-luxury-gold transition-colors">
                {service.title}
              </h4>
              <p className="text-gray-500 text-sm font-light mb-8 leading-relaxed">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-2 text-gray-400 text-xs font-bold tracking-widest uppercase group-hover:text-luxury-gold transition-colors">
                Explore
                <ArrowRight size={12} className="group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
