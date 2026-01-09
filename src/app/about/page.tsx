import { Metadata } from 'next';
import Link from 'next/link';
import { Award, Users, Building2, TrendingUp, CheckCircle, ArrowRight, Target, Eye } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Orange City Real Estate - Nagpur Commercial Property Experts',
  description: 'Learn about Orange City Real Estate - Nagpur\'s premier commercial real estate firm specializing in office spaces, retail, warehouses, and industrial properties since 2009.',
};

const values = [
  {
    icon: Target,
    title: 'Commercial Focus',
    description: 'Unlike residential-focused competitors, we specialize exclusively in commercial properties—delivering institutional-quality service.'
  },
  {
    icon: Eye,
    title: 'Local Expertise',
    description: 'Deep knowledge of Nagpur\'s commercial corridors, from MIHAN SEZ to Butibori MIDC, gained through 15+ years of market presence.'
  },
  {
    icon: Users,
    title: 'Client-Centric',
    description: 'We represent our clients\' interests with the same rigor that national IPCs bring to major metros.'
  },
  {
    icon: Award,
    title: 'Integrity First',
    description: 'Full transparency in transactions, RERA compliance, and ethical business practices that build lasting relationships.'
  }
];

const team = [
  {
    name: 'Anil Sukhdeve',
    role: 'Founder & Managing Director',
    bio: 'With over 20 years of experience in Nagpur\'s real estate market, Anil founded Orange City Real Estate with a vision to bring institutional-quality commercial property services to Central India.',
    credentials: ['MahaRERA Registered Agent', 'CREDAI Nagpur Member', 'NAR India Certified']
  },
  {
    name: 'Priya Deshmukh',
    role: 'Director - Commercial Leasing',
    bio: 'Specializes in corporate tenant representation and office leasing, with expertise in MIHAN SEZ and IT park transactions.',
    credentials: ['10+ years experience', 'Corporate Relations Specialist']
  },
  {
    name: 'Rajesh Kumar',
    role: 'Head - Industrial & Warehousing',
    bio: 'Leads our industrial and logistics division, with deep connections in Butibori MIDC and Hingna MIDC.',
    credentials: ['15+ years in industrial RE', 'MIDC Liaison Expert']
  }
];

const milestones = [
  { year: '2009', event: 'Orange City Real Estate founded in Nagpur' },
  { year: '2012', event: 'First major IT park transaction in MIHAN SEZ' },
  { year: '2015', event: 'Expanded to industrial & warehousing segment' },
  { year: '2018', event: 'CREDAI Nagpur membership acquired' },
  { year: '2020', event: 'Crossed ₹100 Cr in annual transactions' },
  { year: '2023', event: 'Launched property management division' },
  { year: '2024', event: '500+ successful transactions milestone' }
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-gold/20 border border-gold/30 mb-6">
              <span className="text-gold text-sm font-semibold uppercase tracking-wider">
                About Us
              </span>
            </div>
            <h1 className="text-white mb-6">
              Nagpur&apos;s Premier Commercial Real Estate Partner
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Since 2009, Orange City Real Estate has been the trusted partner for businesses
              seeking premium commercial properties in Central India. We bring institutional
              standards to a market traditionally underserved by national players.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gold py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-navy mb-1">500+</div>
              <div className="text-navy/80">Properties Transacted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-navy mb-1">₹250Cr+</div>
              <div className="text-navy/80">Transaction Value</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-navy mb-1">200+</div>
              <div className="text-navy/80">Corporate Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-navy mb-1">15+</div>
              <div className="text-navy/80">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section bg-warm-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="gold-line" />
              <h2 className="mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Orange City Real Estate was founded in 2009 with a clear vision: to fill the gap
                  left by national property consultants who covered Nagpur remotely from Mumbai
                  or Pune. We recognized that Central India&apos;s fastest-growing commercial market
                  deserved dedicated, on-ground expertise.
                </p>
                <p>
                  While local competitors focused primarily on residential properties, we chose
                  to specialize exclusively in commercial real estate. This focus has made us the
                  go-to partner for corporations seeking office spaces in MIHAN SEZ, retailers
                  expanding in Dharampeth, and manufacturers requiring industrial facilities in
                  Butibori MIDC.
                </p>
                <p>
                  Today, with over 500 successful transactions worth ₹250+ crores, we continue
                  to serve businesses with the same commitment to excellence and local market
                  knowledge that defined our founding.
                </p>
              </div>
            </div>
            <div className="bg-navy p-8">
              <h3 className="text-white text-2xl font-serif mb-6">Our Journey</h3>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-16 text-gold font-bold">{milestone.year}</div>
                    <div className="flex-1 text-gray-300 pb-4 border-b border-white/10">
                      {milestone.event}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="gold-line-center" />
            <h2 className="mb-4">What Sets Us Apart</h2>
            <p className="text-gray-600 text-lg">
              Our commitment to commercial-only specialization and local expertise
              delivers value that generalist agencies cannot match.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-navy/5 flex items-center justify-center mx-auto mb-4">
                  <value.icon size={32} className="text-navy" />
                </div>
                <h4 className="text-lg mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section bg-warm-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="gold-line-center" />
            <h2 className="mb-4">Leadership Team</h2>
            <p className="text-gray-600 text-lg">
              Our experienced team brings decades of combined expertise in
              Nagpur&apos;s commercial real estate market.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-8 shadow-lg">
                <div className="w-24 h-24 bg-navy/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users size={40} className="text-navy" />
                </div>
                <div className="text-center">
                  <h4 className="text-xl mb-1">{member.name}</h4>
                  <div className="text-gold font-semibold text-sm mb-4">{member.role}</div>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.credentials.map((cred, idx) => (
                      <span key={idx} className="px-3 py-1 bg-warm-white text-xs text-gray-600">
                        {cred}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section bg-navy">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="gold-line-center" />
            <h2 className="text-white mb-4">Our Credentials</h2>
            <p className="text-gray-300 text-lg">
              We maintain the highest standards of professional certification
              and regulatory compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 text-center">
              <div className="w-16 h-16 bg-gold/20 flex items-center justify-center mx-auto mb-4">
                <Award size={32} className="text-gold" />
              </div>
              <h4 className="text-white text-lg mb-2">MahaRERA Registered</h4>
              <div className="text-gold font-semibold mb-2">P52100012345</div>
              <p className="text-gray-400 text-sm">
                Fully compliant with Maharashtra Real Estate Regulatory Authority requirements.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 text-center">
              <div className="w-16 h-16 bg-gold/20 flex items-center justify-center mx-auto mb-4">
                <Building2 size={32} className="text-gold" />
              </div>
              <h4 className="text-white text-lg mb-2">CREDAI Nagpur Member</h4>
              <div className="text-gold font-semibold mb-2">Since 2018</div>
              <p className="text-gray-400 text-sm">
                Member of India&apos;s apex body for real estate developers.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 text-center">
              <div className="w-16 h-16 bg-gold/20 flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-gold" />
              </div>
              <h4 className="text-white text-lg mb-2">NAR India Certified</h4>
              <div className="text-gold font-semibold mb-2">REMET Designation</div>
              <p className="text-gray-400 text-sm">
                Certified by the National Association of Realtors India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-4">Ready to Work With Us?</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Whether you&apos;re seeking commercial space or looking to list your property,
            our team is ready to help you achieve your goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Schedule Consultation
              <ArrowRight size={18} />
            </Link>
            <Link href="/properties" className="btn-navy">
              View Properties
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
