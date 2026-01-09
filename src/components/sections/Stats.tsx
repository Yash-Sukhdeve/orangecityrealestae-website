import { Building2, TrendingUp, Users, Award } from 'lucide-react';

const stats = [
  {
    icon: Building2,
    number: '500+',
    label: 'Properties Transacted',
    description: 'Commercial properties sold and leased'
  },
  {
    icon: TrendingUp,
    number: '₹250 Cr+',
    label: 'Transaction Value',
    description: 'Total commercial real estate transactions'
  },
  {
    icon: Users,
    number: '200+',
    label: 'Corporate Clients',
    description: 'Trusted by leading businesses'
  },
  {
    icon: Award,
    number: '15+',
    label: 'Years Experience',
    description: 'In Nagpur commercial real estate'
  },
];

export default function Stats() {
  return (
    <section className="py-20 bg-[#0f1d2e] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#e8983a]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#e8983a]/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#e8983a]/10 border border-[#e8983a]/20 mb-6 group-hover:bg-[#e8983a]/20 transition-colors">
                <stat.icon size={28} className="text-[#e8983a]" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2 font-serif">
                {stat.number}
              </div>
              <div className="text-[#e8983a] font-semibold uppercase tracking-wider text-xs mb-2">
                {stat.label}
              </div>
              <div className="text-white/40 text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
