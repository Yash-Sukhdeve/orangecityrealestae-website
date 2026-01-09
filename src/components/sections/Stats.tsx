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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl lg:text-6xl font-semibold text-[#1d1d1f] mb-3">
                {stat.number}
              </div>
              <div className="text-[#e8983a] font-medium text-sm mb-2">
                {stat.label}
              </div>
              <div className="text-[#86868b] text-xs">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
