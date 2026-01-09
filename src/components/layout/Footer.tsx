import Link from 'next/link';
import Image from 'next/image';
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

export default function Footer() {
  return (
    <footer className="bg-[#060d16] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo/logo.png"
                alt="Orange City Real Estate"
                width={200}
                height={55}
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-white/60 mb-8 leading-relaxed text-sm">
              Nagpur&apos;s premier commercial real estate specialists. Your trusted partner
              for office spaces, retail showrooms, warehouses, and industrial properties
              in Central India.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Youtube, label: 'YouTube' },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-10 h-10 bg-white/5 border border-white/10 hover:bg-[#e8983a] hover:border-[#e8983a] hover:text-[#0a1420] flex items-center justify-center transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Quick Links
            </h4>
            <div className="w-8 h-0.5 bg-gradient-to-r from-[#e8983a] to-transparent mb-6"></div>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-[#e8983a] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Property Types
            </h4>
            <div className="w-8 h-0.5 bg-gradient-to-r from-[#e8983a] to-transparent mb-6"></div>
            <ul className="space-y-3">
              {propertyTypes.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-[#e8983a] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Contact Us
            </h4>
            <div className="w-8 h-0.5 bg-gradient-to-r from-[#e8983a] to-transparent mb-6"></div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#e8983a] flex-shrink-0 mt-0.5" />
                <span className="text-white/50 text-sm">
                  123 Civil Lines, Near Reserve Bank,<br />
                  Nagpur - 440001, Maharashtra
                </span>
              </li>
              <li>
                <a href="tel:+919876543210" className="flex items-center gap-3 text-white/50 hover:text-[#e8983a] transition-colors text-sm">
                  <Phone size={18} className="text-[#e8983a] flex-shrink-0" />
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a href="mailto:info@orangecityrealestate.com" className="flex items-center gap-3 text-white/50 hover:text-[#e8983a] transition-colors text-sm">
                  <Mail size={18} className="text-[#e8983a] flex-shrink-0" />
                  info@orangecityrealestate.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-[#e8983a] flex-shrink-0 mt-0.5" />
                <span className="text-white/50 text-sm">
                  Mon - Sat: 9:00 AM - 7:00 PM<br />
                  Sunday: By Appointment
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* RERA & Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-white/40 text-xs">
                MahaRERA Registration No: <span className="text-[#e8983a]">P52100012345</span>
                {' '}&bull;{' '}
                <a
                  href="https://maharera.mahaonline.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e8983a] hover:underline"
                >
                  Verify on MahaRERA
                </a>
              </p>
            </div>
            <div className="text-center md:text-right text-white/40 text-xs">
              <p>&copy; {new Date().getFullYear()} Orange City Real Estate. All rights reserved.</p>
              <div className="flex gap-4 justify-center md:justify-end mt-1">
                <Link href="/privacy" className="hover:text-[#e8983a] transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-[#e8983a] transition-colors">
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
