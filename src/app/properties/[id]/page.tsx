import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  MapPin, Maximize, Building2, ArrowLeft, Phone, Mail,
  CheckCircle, Share2, Heart, Calendar, FileText
} from 'lucide-react';
import { properties, getPropertyById } from '@/data/properties';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const property = getPropertyById(id);

  if (!property) {
    return {
      title: 'Property Not Found | Orange City Real Estate',
    };
  }

  return {
    title: `${property.title} | Orange City Real Estate`,
    description: property.description.slice(0, 160),
  };
}

export default async function PropertyDetailPage({ params }: Props) {
  const { id } = await params;
  const property = getPropertyById(id);

  if (!property) {
    notFound();
  }

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
    <>
      {/* Breadcrumb */}
      <section className="bg-navy py-4">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-400 hover:text-gold transition-colors">
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <Link href="/properties" className="text-gray-400 hover:text-gold transition-colors">
              Properties
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-gold">{property.title}</span>
          </div>
        </div>
      </section>

      {/* Property Header */}
      <section className="bg-navy pb-8">
        <div className="container mx-auto px-6">
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-gold transition-colors mb-6"
          >
            <ArrowLeft size={18} />
            Back to Properties
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gold text-navy text-sm font-semibold uppercase">
                  {statusLabels[property.status]}
                </span>
                <span className="px-3 py-1 bg-white/10 text-white text-sm font-semibold uppercase">
                  {typeLabels[property.type]}
                </span>
              </div>
              <h1 className="text-white text-3xl lg:text-4xl mb-4">{property.title}</h1>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin size={18} className="text-gold" />
                <span>{property.area}, Nagpur</span>
              </div>
            </div>

            <div className="text-left lg:text-right">
              <div className="text-gold text-sm uppercase tracking-wider mb-1">
                {property.status === 'lease' ? 'Lease Rate' : 'Price'}
              </div>
              <div className="text-white text-4xl font-bold">{formatPrice()}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-warm-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Property Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Image Gallery Placeholder */}
              <div className="bg-white p-2">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <Building2 size={100} className="text-gray-300" />
                </div>
                <div className="grid grid-cols-4 gap-2 mt-2">
                  {[1, 2, 3, 4].map((_, idx) => (
                    <div key={idx} className="aspect-video bg-gray-200" />
                  ))}
                </div>
              </div>

              {/* Key Details */}
              <div className="bg-white p-6">
                <h3 className="text-xl mb-6">Property Details</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div>
                    <div className="text-gray-500 text-sm mb-1">Carpet Area</div>
                    <div className="font-semibold text-lg">
                      {property.carpetArea.toLocaleString()} sq.ft
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm mb-1">Built-up Area</div>
                    <div className="font-semibold text-lg">
                      {property.builtUpArea.toLocaleString()} sq.ft
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm mb-1">Property Type</div>
                    <div className="font-semibold text-lg">{typeLabels[property.type]}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm mb-1">Transaction</div>
                    <div className="font-semibold text-lg">{statusLabels[property.status]}</div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="bg-white p-6">
                <h3 className="text-xl mb-4">Description</h3>
                <p className="text-gray-600 leading-relaxed">{property.description}</p>
              </div>

              {/* Features */}
              <div className="bg-white p-6">
                <h3 className="text-xl mb-4">Features & Amenities</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {property.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle size={18} className="text-gold" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="bg-white p-6">
                <h3 className="text-xl mb-4">Key Highlights</h3>
                <div className="flex flex-wrap gap-3">
                  {property.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gold/10 border border-gold/30 text-navy font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              {/* RERA Info */}
              {property.rera && (
                <div className="bg-white p-6 border-l-4 border-gold">
                  <div className="flex items-start gap-4">
                    <FileText size={24} className="text-gold flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">MahaRERA Registered</h4>
                      <p className="text-gray-600">
                        Registration No: <strong>{property.rera}</strong>
                      </p>
                      <a
                        href="https://maharera.mahaonline.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gold hover:underline text-sm"
                      >
                        Verify on MahaRERA Portal →
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Contact Card */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 sticky top-32">
                <h3 className="text-xl mb-6">Interested in this property?</h3>

                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 border border-gray-200"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 border border-gray-200"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 border border-gray-200"
                    />
                  </div>
                  <div>
                    <textarea
                      rows={4}
                      placeholder="I'm interested in this property. Please contact me with more details."
                      className="w-full px-4 py-3 border border-gray-200 resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center">
                    Send Enquiry
                  </button>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
                  <a
                    href="tel:+919876543210"
                    className="flex items-center gap-3 text-navy hover:text-gold transition-colors"
                  >
                    <Phone size={18} />
                    <span>+91 98765 43210</span>
                  </a>
                  <a
                    href="mailto:info@orangecityrealestate.com"
                    className="flex items-center gap-3 text-navy hover:text-gold transition-colors"
                  >
                    <Mail size={18} />
                    <span>info@orangecityrealestate.com</span>
                  </a>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100 flex gap-4">
                  <button className="flex-1 flex items-center justify-center gap-2 py-2 border border-gray-200 hover:border-gold hover:text-gold transition-colors">
                    <Calendar size={18} />
                    Schedule Visit
                  </button>
                  <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-200 hover:border-gold hover:text-gold transition-colors">
                    <Share2 size={18} />
                  </button>
                  <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-200 hover:border-gold hover:text-gold transition-colors">
                    <Heart size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
