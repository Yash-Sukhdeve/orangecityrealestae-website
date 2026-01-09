import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, Instagram, Youtube, ArrowUpRight } from 'lucide-react';

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Services', href: '/services' },
  { name: 'Properties', href: '/properties' },
  { name: 'Area Guides', href: '/areas' },
  { name: 'Contact', href: '/contact' },
];

const propertyTypes = [
  { name: 'Office Spaces', href: '/properties?type=office' },
  { name: 'Retail Showrooms', href: '/properties?type=retail' },
  { name: 'Warehouses', href: '/properties?type=warehouse' },
  { name: 'Industrial Land', href: '/properties?type=industrial' },
  { name: 'Commercial Plots', href: '/properties?type=plots' },
];

export default function Footer() {
  return (
    <footer className="bg-luxury-black text-gray-400 border-t border-white/5">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
          {/* Company Info */}
          <div className="lg:col-span-1">
             <Link href="/" className="inline-block mb-6 group">
                <div className="flex flex-col">
                  <span className="font-serif text-2xl font-bold text-white tracking-wide group-hover:text-luxury-gold transition-colors">
                    ORANGE CITY
                  </span>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-luxury-gold">
                    Real Estate
                  </span>
                </div>
             </Link>
            <p className="text-sm leading-relaxed mb-8 font-light text-gray-400">
              Curating exceptional commercial spaces for visionary businesses in Nagpur.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Youtube, label: 'YouTube' },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-10 h-10 border border-white/10 rounded-none flex items-center justify-center transition-all hover:border-luxury-gold hover:text-luxury-gold text-white/50"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">
              Explore
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm hover:text-luxury-gold transition-colors group"
                  >
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-luxury-gold" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">
              Collections
            </h4>
            <ul className="space-y-3">
              {propertyTypes.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm hover:text-luxury-gold transition-colors group"
                  >
                     <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-luxury-gold" />
                     <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">
              Concierge
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-luxury-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm font-light">
                  Civil Lines, Nagpur - 440001
                </span>
              </li>
              <li>
                <a href="tel:+919876543210" className="flex items-center gap-3 hover:text-luxury-gold transition-colors text-sm font-light">
                  <Phone size={18} className="text-luxury-gold flex-shrink-0" />
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a href="mailto:info@orangecityrealestate.com" className="flex items-center gap-3 hover:text-luxury-gold transition-colors text-sm font-light">
                  <Mail size={18} className="text-luxury-gold flex-shrink-0" />
                  info@orangecity.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-luxury-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm font-light">
                  Mon - Sat: 9 AM - 7 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wider text-gray-500 uppercase">
            <p>
              © {new Date().getFullYear()} Orange City Real Estate.
            </p>
            <div className="flex gap-8">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <a
                href="https://maharera.mahaonline.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                RERA Compliance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
