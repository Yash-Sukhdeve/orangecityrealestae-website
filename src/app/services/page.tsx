import { Metadata } from 'next';
import Link from 'next/link';
import {
  Building, Key, FileCheck, TrendingUp, Users, Map,
  ArrowRight, CheckCircle, Target, BarChart3, Shield, Clock
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services | Orange City Real Estate - Commercial Property Services Nagpur',
  description: 'Comprehensive commercial real estate services in Nagpur: tenant representation, property sales & leasing, valuations, investment advisory, property management, and land development.',
};

const services = [
  {
    id: 'tenant-representation',
    icon: Building,
    title: 'Corporate Tenant Representation',
    tagline: 'Your advocate in commercial leasing',
    description: 'We represent corporate tenants seeking office space, ensuring you secure the best location, terms, and value for your business.',
    benefits: [
      'Site selection and shortlisting',
      'Market rent analysis and benchmarking',
      'Lease negotiation and review',
      'Build-out coordination',
      'Renewal and expansion advisory',
      'Cost optimization strategies'
    ],
    ideal: 'IT companies, corporate offices, startups seeking office space'
  },
  {
    id: 'sales-leasing',
    icon: Key,
    title: 'Property Sales & Leasing',
    tagline: 'Full-service transactions for owners and tenants',
    description: 'Whether you\'re buying, selling, or leasing commercial property, our expert team handles every aspect of the transaction.',
    benefits: [
      'Property marketing and positioning',
      'Buyer/tenant qualification',
      'Price negotiation',
      'Documentation and compliance',
      'Registration assistance',
      'Post-sale support'
    ],
    ideal: 'Property owners, investors, expanding businesses'
  },
  {
    id: 'valuations',
    icon: FileCheck,
    title: 'Due Diligence & Valuations',
    tagline: 'Institutional-grade property assessment',
    description: 'Comprehensive property evaluations for informed investment decisions, financing, and regulatory compliance.',
    benefits: [
      'Market value assessment',
      'Title and ownership verification',
      'Regulatory compliance check',
      'Physical condition survey',
      'Rent roll analysis',
      'Investment return projections'
    ],
    ideal: 'Banks, investors, corporate acquisitions, legal matters'
  },
  {
    id: 'investment',
    icon: TrendingUp,
    title: 'Investment Advisory',
    tagline: 'Strategic guidance for commercial portfolios',
    description: 'Data-driven investment advice for individuals and institutions seeking exposure to Nagpur\'s commercial real estate market.',
    benefits: [
      'Market trend analysis',
      'Investment opportunity identification',
      'Portfolio diversification strategy',
      'Risk assessment',
      'Exit strategy planning',
      'ROI optimization'
    ],
    ideal: 'HNIs, family offices, institutional investors, NRIs'
  },
  {
    id: 'management',
    icon: Users,
    title: 'Property Management',
    tagline: 'End-to-end asset management',
    description: 'Professional management services for commercial buildings, ensuring optimal operations and tenant satisfaction.',
    benefits: [
      'Tenant relationship management',
      'Rent collection and accounting',
      'Maintenance coordination',
      'Vendor management',
      'Compliance monitoring',
      'Periodic reporting'
    ],
    ideal: 'Landlords, commercial building owners, investors'
  },
  {
    id: 'development',
    icon: Map,
    title: 'Land & Development',
    tagline: 'Industrial and commercial land solutions',
    description: 'Assistance with industrial plots, commercial land, and development opportunities in MIDC zones and growth corridors.',
    benefits: [
      'Land identification and sourcing',
      'MIDC liaison and approvals',
      'Zoning and land-use verification',
      'Infrastructure assessment',
      'Development feasibility analysis',
      'Joint venture structuring'
    ],
    ideal: 'Manufacturers, logistics operators, developers'
  }
];

const process = [
  {
    icon: Target,
    title: 'Understand Requirements',
    description: 'We begin with a detailed consultation to understand your business needs, budget, and timeline.'
  },
  {
    icon: BarChart3,
    title: 'Market Analysis',
    description: 'Our team analyzes relevant market data to identify optimal locations and pricing strategies.'
  },
  {
    icon: Building,
    title: 'Property Shortlisting',
    description: 'We present a curated selection of properties that match your specific criteria.'
  },
  {
    icon: Shield,
    title: 'Due Diligence',
    description: 'Thorough verification of title, compliance, and physical condition of selected properties.'
  },
  {
    icon: Clock,
    title: 'Negotiation & Closure',
    description: 'Expert negotiation to secure favorable terms, followed by smooth transaction completion.'
  }
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-gold/20 border border-gold/30 mb-6">
              <span className="text-gold text-sm font-semibold uppercase tracking-wider">
                Our Services
              </span>
            </div>
            <h1 className="text-white mb-6">
              Comprehensive Commercial Real Estate Services
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              From corporate tenant representation to property management, we deliver
              institutional-quality commercial real estate services tailored to Nagpur&apos;s
              dynamic market.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-warm-white">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-14 h-14 bg-navy flex items-center justify-center mb-6">
                    <service.icon size={28} className="text-gold" />
                  </div>
                  <div className="text-gold text-sm font-semibold uppercase tracking-wider mb-2">
                    {service.tagline}
                  </div>
                  <h2 className="text-3xl mb-4">{service.title}</h2>
                  <p className="text-gray-600 text-lg mb-6">
                    {service.description}
                  </p>
                  <div className="bg-white p-6 mb-6">
                    <h4 className="text-lg mb-4">What We Deliver</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle size={18} className="text-gold flex-shrink-0 mt-1" />
                          <span className="text-gray-600 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    <strong>Ideal for:</strong> {service.ideal}
                  </div>
                </div>
                <div className={`bg-navy/5 h-80 flex items-center justify-center ${
                  index % 2 === 1 ? 'lg:order-1' : ''
                }`}>
                  <service.icon size={120} className="text-navy/20" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="gold-line-center" />
            <h2 className="mb-4">Our Process</h2>
            <p className="text-gray-600 text-lg">
              A structured approach that ensures successful outcomes for every client.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center relative">
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200" />
                )}
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-navy flex items-center justify-center mx-auto mb-4">
                    <step.icon size={28} className="text-gold" />
                  </div>
                  <div className="text-gold font-bold text-sm mb-2">Step {index + 1}</div>
                  <h4 className="text-lg mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-navy">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-12 h-0.5 bg-gold mb-6" />
              <h2 className="text-white mb-6">Why Choose Orange City Real Estate?</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={20} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="text-white text-lg mb-1">Commercial-Only Focus</h4>
                    <p className="text-gray-400">
                      Unlike generalist agencies, we specialize exclusively in commercial
                      properties—bringing deeper expertise to every transaction.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={20} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="text-white text-lg mb-1">Local Market Knowledge</h4>
                    <p className="text-gray-400">
                      15+ years of on-ground presence in Nagpur gives us insights that
                      remote consultants from Mumbai or Pune simply cannot match.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={20} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="text-white text-lg mb-1">Institutional Standards</h4>
                    <p className="text-gray-400">
                      MahaRERA registered, CREDAI member, NAR India certified—we maintain
                      the highest professional standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8">
              <h3 className="text-white text-2xl font-serif mb-6">Get Expert Assistance</h3>
              <p className="text-gray-300 mb-6">
                Ready to discuss your commercial real estate needs? Our team is available
                for a no-obligation consultation.
              </p>
              <Link href="/contact" className="btn-primary w-full justify-center">
                Schedule Consultation
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
