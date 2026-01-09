'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Properties', href: '/properties' },
  {
    name: 'Areas',
    href: '/areas',
    submenu: [
      { name: 'MIHAN SEZ', href: '/areas/mihan-sez' },
      { name: 'Dharampeth', href: '/areas/dharampeth' },
      { name: 'Civil Lines', href: '/areas/civil-lines' },
      { name: 'Sitabuldi CBD', href: '/areas/sitabuldi' },
      { name: 'Butibori MIDC', href: '/areas/butibori-midc' },
      { name: 'Hingna MIDC', href: '/areas/hingna-midc' },
    ],
  },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-navy text-white text-sm py-2 hidden md:block">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone size={14} />
              <span>+91 98765 43210</span>
            </a>
            <a href="mailto:info@orangecityrealestate.com" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail size={14} />
              <span>info@orangecityrealestate.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-300">RERA: P52100012345</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-lg py-3'
            : 'bg-white/95 backdrop-blur-sm py-4'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold text-navy tracking-tight">
                  Orange City
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">
                  Real Estate
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.submenu && setActiveSubmenu(item.name)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-charcoal hover:text-navy font-medium transition-colors py-2"
                  >
                    {item.name}
                    {item.submenu && <ChevronDown size={16} />}
                  </Link>

                  {/* Submenu */}
                  {item.submenu && activeSubmenu === item.name && (
                    <div className="absolute top-full left-0 bg-white shadow-xl min-w-[220px] py-2 animate-fade-in">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block px-5 py-3 text-charcoal hover:bg-warm-white hover:text-navy transition-colors"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link href="/contact" className="btn-primary">
                Schedule Consultation
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-navy"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 animate-fade-in">
            <div className="container mx-auto px-6 py-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block py-3 text-charcoal hover:text-navy font-medium border-b border-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="pl-4 bg-gray-50">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block py-2 text-sm text-gray-600 hover:text-navy"
                          onClick={() => setIsOpen(false)}
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="btn-primary w-full justify-center"
                  onClick={() => setIsOpen(false)}
                >
                  Schedule Consultation
                </Link>
              </div>
              <div className="pt-4 flex flex-col gap-2 text-sm">
                <a href="tel:+919876543210" className="flex items-center gap-2 text-charcoal">
                  <Phone size={16} />
                  +91 98765 43210
                </a>
                <a href="mailto:info@orangecityrealestate.com" className="flex items-center gap-2 text-charcoal">
                  <Mail size={16} />
                  info@orangecityrealestate.com
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
