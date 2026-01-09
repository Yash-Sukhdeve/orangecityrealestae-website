import Link from 'next/link';
import { Search, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-navy overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D9B061' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/80" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="inline-block px-4 py-2 bg-gold/20 border border-gold/30 mb-6">
              <span className="text-gold text-sm font-semibold uppercase tracking-wider">
                Nagpur&apos;s Commercial Property Experts
              </span>
            </div>

            <h1 className="text-white mb-6 leading-tight">
              Premium Commercial<br />
              <span className="text-gold">Spaces in Central India</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
              Your trusted partner for office spaces, retail showrooms, warehouses,
              and industrial properties in Nagpur&apos;s fastest-growing commercial corridors.
            </p>

            {/* Search Box */}
            <div className="bg-white p-2 flex flex-col sm:flex-row gap-2 max-w-2xl mb-8">
              <select className="flex-1 px-4 py-3 bg-gray-50 border-0 text-charcoal focus:ring-2 focus:ring-gold">
                <option value="">Property Type</option>
                <option value="office">Office Space</option>
                <option value="retail">Retail/Showroom</option>
                <option value="warehouse">Warehouse</option>
                <option value="industrial">Industrial</option>
              </select>
              <select className="flex-1 px-4 py-3 bg-gray-50 border-0 text-charcoal focus:ring-2 focus:ring-gold">
                <option value="">Location</option>
                <option value="mihan">MIHAN SEZ</option>
                <option value="dharampeth">Dharampeth</option>
                <option value="civil-lines">Civil Lines</option>
                <option value="sitabuldi">Sitabuldi CBD</option>
                <option value="butibori">Butibori MIDC</option>
              </select>
              <Link
                href="/properties"
                className="btn-primary flex items-center justify-center gap-2 px-6"
              >
                <Search size={18} />
                <span>Search</span>
              </Link>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link href="/properties" className="btn-primary">
                Explore Properties
                <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="btn-secondary">
                Download Market Report
              </Link>
            </div>
          </div>

          {/* Stats Card */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8">
              <h3 className="text-white text-2xl font-serif mb-8">
                Nagpur Commercial Market
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-2 border-gold pl-4">
                  <div className="text-4xl font-bold text-gold mb-1">3.8M</div>
                  <div className="text-gray-300 text-sm">Sq.ft Office Stock</div>
                </div>
                <div className="border-l-2 border-gold pl-4">
                  <div className="text-4xl font-bold text-gold mb-1">12.9M</div>
                  <div className="text-gray-300 text-sm">Sq.ft Warehouse Stock</div>
                </div>
                <div className="border-l-2 border-gold pl-4">
                  <div className="text-4xl font-bold text-gold mb-1">26%</div>
                  <div className="text-gray-300 text-sm">Projected Growth by 2027</div>
                </div>
                <div className="border-l-2 border-gold pl-4">
                  <div className="text-4xl font-bold text-gold mb-1">30%+</div>
                  <div className="text-gray-300 text-sm">Civil Lines Appreciation</div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-gray-400 text-sm italic">
                  &quot;Zero Mile City&quot; - Equidistant from Mumbai, Delhi, Chennai & Kolkata
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 100V60C240 20 480 0 720 0C960 0 1200 20 1440 60V100H0Z" fill="#F2F1EF"/>
        </svg>
      </div>
    </section>
  );
}
