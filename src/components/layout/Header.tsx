'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

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
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
        isScrolled
          ? "bg-luxury-black/90 backdrop-blur-md border-white/10 py-3"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
             {/* Fallback to text if image is missing or for SEO */}
             <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-white tracking-wide">
                  ORANGE CITY
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-luxury-gold text-center">
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
                  className="flex items-center gap-1 text-sm font-medium text-white/90 hover:text-luxury-gold transition-all duration-300 tracking-wide"
                >
                  {item.name}
                  {item.submenu && <ChevronDown size={14} className="opacity-60" />}
                </Link>

                {/* Submenu */}
                <AnimatePresence>
                  {item.submenu && activeSubmenu === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 pt-4"
                    >
                      <div className="bg-luxury-black/95 backdrop-blur-xl border border-white/10 min-w-[220px] py-3 rounded-none shadow-2xl">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="block px-6 py-3 text-sm text-gray-300 hover:text-luxury-gold hover:bg-white/5 transition-colors font-light"
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 text-white/80 hover:text-luxury-gold transition-colors font-light text-sm tracking-wide"
            >
              <Phone size={16} />
              <span>+91 98765 43210</span>
            </a>
            <Link 
              href="/contact" 
              className="px-6 py-2.5 bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-black font-semibold text-sm tracking-wider transition-all duration-300"
            >
              INQUIRE
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-luxury-black border-t border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8">
              {navigation.map((item) => (
                <div key={item.name} className="border-b border-white/5 last:border-0">
                  <Link
                    href={item.href}
                    className="block py-4 text-lg text-white hover:text-luxury-gold font-serif transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="pl-4 pb-4 space-y-3">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block text-sm text-gray-400 hover:text-luxury-gold"
                          onClick={() => setIsOpen(false)}
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-8 space-y-6">
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 text-gray-300"
                >
                  <Phone size={20} />
                  +91 98765 43210
                </a>
                <Link
                  href="/contact"
                  className="block w-full py-4 bg-luxury-gold text-luxury-black text-center font-bold tracking-widest uppercase"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
