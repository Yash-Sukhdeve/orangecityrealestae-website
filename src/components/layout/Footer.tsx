import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';

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

const areas = [
  { name: 'MIHAN SEZ', href: '/areas/mihan-sez' },
  { name: 'Dharampeth', href: '/areas/dharampeth' },
  { name: 'Civil Lines', href: '/areas/civil-lines' },
  { name: 'Sitabuldi CBD', href: '/areas/sitabuldi' },
  { name: 'Butibori MIDC', href: '/areas/butibori-midc' },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <span className="text-2xl font-serif font-bold tracking-tight">
                Orange City
              </span>
              <br />
              <span className="text-sm uppercase tracking-[0.2em] text-gold font-semibold">
                Real Estate
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Nagpur&apos;s premier commercial real estate specialists. Your trusted partner
              for office spaces, retail showrooms, warehouses, and industrial properties
              in Central India.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-gold hover:text-navy flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-gold hover:text-navy flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-gold hover:text-navy flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-gold hover:text-navy flex items-center justify-center transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif text-white mb-6">Quick Links</h4>
            <div className="w-12 h-0.5 bg-gold mb-6"></div>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h4 className="text-lg font-serif text-white mb-6">Property Types</h4>
            <div className="w-12 h-0.5 bg-gold mb-6"></div>
            <ul className="space-y-3">
              {propertyTypes.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif text-white mb-6">Contact Us</h4>
            <div className="w-12 h-0.5 bg-gold mb-6"></div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-gold flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  123 Civil Lines, Near Reserve Bank,<br />
                  Nagpur - 440001, Maharashtra
                </span>
              </li>
              <li>
                <a href="tel:+919876543210" className="flex items-center gap-3 text-gray-300 hover:text-gold transition-colors">
                  <Phone size={20} className="text-gold flex-shrink-0" />
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a href="mailto:info@orangecityrealestate.com" className="flex items-center gap-3 text-gray-300 hover:text-gold transition-colors">
                  <Mail size={20} className="text-gold flex-shrink-0" />
                  info@orangecityrealestate.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={20} className="text-gold flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Mon - Sat: 9:00 AM - 7:00 PM<br />
                  Sunday: By Appointment
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* RERA & Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                MahaRERA Registration No: <span className="text-gold">P52100012345</span>
              </p>
              <p className="text-gray-400 text-sm">
                Available on{' '}
                <a
                  href="https://maharera.mahaonline.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline"
                >
                  maharera.mahaonline.gov.in
                </a>
              </p>
            </div>
            <div className="text-center md:text-right text-gray-400 text-sm">
              <p>&copy; {new Date().getFullYear()} Orange City Real Estate. All rights reserved.</p>
              <div className="flex gap-4 justify-center md:justify-end mt-2">
                <Link href="/privacy" className="hover:text-gold transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-gold transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
