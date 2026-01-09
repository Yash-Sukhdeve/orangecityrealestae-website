import Link from 'next/link';
import { ArrowRight, Building2, MapPin, TrendingUp, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0a1420] overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#e8983a]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#1a3d52]/30 rounded-full blur-[120px]" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#e8983a]/10 border border-[#e8983a]/20 mb-8">
              <span className="w-2 h-2 bg-[#e8983a] rounded-full animate-pulse" />
              <span className="text-[#e8983a] text-xs font-semibold uppercase tracking-wider">
                Premium Commercial Properties
              </span>
            </div>

            <h1 className="text-white mb-6 leading-[1.1]">
              Your Gateway to
              <span className="block text-gradient">Commercial Excellence</span>
              in Nagpur
            </h1>

            <p className="text-lg text-white/60 mb-10 max-w-xl leading-relaxed">
              Partner with Nagpur&apos;s leading commercial real estate specialists.
              We connect ambitious businesses with premium office spaces, retail destinations,
              and industrial facilities across Central India&apos;s fastest-growing markets.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-16">
              <Link href="/properties" className="btn-primary">
                Explore Properties
                <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="btn-secondary">
                Schedule Consultation
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#e8983a]/10 border border-[#e8983a]/20 flex items-center justify-center">
                  <Building2 size={20} className="text-[#e8983a]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-xs text-white/50 uppercase tracking-wider">Properties</div>
                </div>
              </div>
              <div className="w-px h-12 bg-white/10 hidden sm:block" />
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#e8983a]/10 border border-[#e8983a]/20 flex items-center justify-center">
                  <Users size={20} className="text-[#e8983a]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">200+</div>
                  <div className="text-xs text-white/50 uppercase tracking-wider">Clients</div>
                </div>
              </div>
              <div className="w-px h-12 bg-white/10 hidden sm:block" />
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#e8983a]/10 border border-[#e8983a]/20 flex items-center justify-center">
                  <TrendingUp size={20} className="text-[#e8983a]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">15+</div>
                  <div className="text-xs text-white/50 uppercase tracking-wider">Years</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Business Card */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-gradient-to-br from-[#142236] to-[#0f1d2e] border border-white/10 p-10 backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-2 h-8 bg-gradient-to-b from-[#e8983a] to-[#d4872e]" />
                  <h3 className="text-xl text-white">Nagpur Market Insights</h3>
                </div>

                <div className="space-y-6">
                  {[
                    { label: 'Office Stock', value: '3.8M', unit: 'sq.ft', growth: '+13%' },
                    { label: 'Warehouse Stock', value: '12.9M', unit: 'sq.ft', growth: '+26%' },
                    { label: 'Civil Lines Price', value: '₹10,394', unit: '/sq.ft', growth: '+30%' },
                    { label: 'Rental Range', value: '₹40-120', unit: '/sq.ft/mo', growth: 'Steady' },
                  ].map((stat, idx) => (
                    <div key={idx} className="flex items-center justify-between py-4 border-b border-white/5 last:border-0">
                      <div>
                        <div className="text-white/50 text-sm mb-1">{stat.label}</div>
                        <div className="text-2xl font-bold text-white">
                          {stat.value}
                          <span className="text-sm font-normal text-white/40 ml-1">{stat.unit}</span>
                        </div>
                      </div>
                      <div className="px-3 py-1 bg-[#e8983a]/10 border border-[#e8983a]/20 text-[#e8983a] text-xs font-semibold">
                        {stat.growth}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-2 text-white/40 text-sm">
                    <MapPin size={14} />
                    <span>The &quot;Zero Mile City&quot; - India&apos;s Geographic Center</span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-[#e8983a]/20" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-[#e8983a]/20" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a1420] to-transparent" />
    </section>
  );
}
