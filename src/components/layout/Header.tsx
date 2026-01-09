'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0a1420]/95 backdrop-blur-xl border-b border-white/5 py-3'
          : 'bg-[#0a1420]/80 backdrop-blur-sm py-5'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo/logo.png"
              alt="Orange City Real Estate"
              width={220}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveSubmenu(item.name)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium tracking-wide text-white/80 hover:text-[#e8983a] transition-colors"
                >
                  {item.name}
                  {item.submenu && <ChevronDown size={14} className="opacity-50" />}
                </Link>

                {/* Submenu */}
                {item.submenu && activeSubmenu === item.name && (
                  <div className="absolute top-full left-0 pt-2 animate-fade-in">
                    <div className="bg-[#0f1d2e]/95 backdrop-blur-xl border border-white/10 min-w-[220px] py-2 shadow-2xl">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block px-5 py-2.5 text-sm text-white/70 hover:text-[#e8983a] hover:bg-white/5 transition-colors"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 text-white/70 hover:text-[#e8983a] transition-colors"
            >
              <Phone size={16} />
              <span className="text-sm font-medium">+91 98765 43210</span>
            </a>
            <Link href="/contact" className="btn-primary text-sm py-2.5 px-6">
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#0a1420]/98 backdrop-blur-xl border-t border-white/5 animate-fade-in">
          <div className="container mx-auto px-6 py-6">
            {navigation.map((item) => (
              <div key={item.name} className="border-b border-white/5 last:border-0">
                <Link
                  href={item.href}
                  className="block py-3 text-white/80 hover:text-[#e8983a] font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="pl-4 pb-2">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block py-2 text-sm text-white/50 hover:text-[#e8983a]"
                        onClick={() => setIsOpen(false)}
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-6 space-y-4">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-white/70"
              >
                <Phone size={18} />
                +91 98765 43210
              </a>
              <Link
                href="/contact"
                className="btn-primary w-full justify-center"
                onClick={() => setIsOpen(false)}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
