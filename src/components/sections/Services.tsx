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
    <section className="section bg-[#0f1d2e]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <div className="accent-line" />
            <h2 className="text-white mb-4">Comprehensive Commercial Real Estate Services</h2>
            <p className="text-white/50 text-lg">
              Unlike residential-focused competitors, we specialize exclusively in commercial
              properties—delivering institutional-quality service to corporate clients in Nagpur.
            </p>
          </div>
          <div className="lg:text-right">
            <Link href="/services" className="btn-outline">
              All Services
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="group p-8 bg-[#142236]/50 border border-white/5 hover:border-[#e8983a]/30 hover:bg-[#142236] transition-all duration-500"
            >
              <div className="w-14 h-14 bg-[#e8983a]/10 border border-[#e8983a]/20 flex items-center justify-center mb-6 group-hover:bg-[#e8983a]/20 transition-colors">
                <service.icon size={24} className="text-[#e8983a]" />
              </div>
              <h4 className="text-white text-lg mb-3 group-hover:text-[#e8983a] transition-colors">
                {service.title}
              </h4>
              <p className="text-white/50 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-2 text-white/60 text-xs font-semibold uppercase tracking-wider group-hover:text-[#e8983a] transition-colors">
                Learn More
                <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
