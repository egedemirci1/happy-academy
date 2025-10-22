'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: 'Eğitimlerimiz', href: '/egitimler' },
    { title: 'Hakkımızda', href: '/hakkimizda' },
    { title: 'Görseller', href: '/gorseller' },
    { title: 'Blog', href: '/blog' },
    { title: 'İletişim', href: '/iletisim' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg' 
          : 'bg-white/90'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-16 sm:h-18' : 'h-20 sm:h-24'
        }`}>
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <Image
              src="/logo-happy-academy.png"
              alt="Happy Academy Konya"
              width={160}
              height={48}
              className={`w-auto transition-all duration-300 ${
                isScrolled ? 'h-8 sm:h-10' : 'h-10 sm:h-12 md:h-14'
              }`}
            />
          </Link>

          {/* Desktop Menu - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="text-gray-800 hover:text-[#f7b500] transition-colors duration-200 font-medium"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex">
            <Button
              asChild
              className="bg-[#f7b500] hover:bg-[#e6a300] text-black font-semibold"
              data-analytics="cta_click"
            >
              <Link href="#demo-section">
                Ücretsiz Seviye Tespiti
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-gray-800 hover:text-[#f7b500] flex-shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white rounded-lg mt-2 mb-4 border border-gray-200 shadow-lg"
          >
            <div className="py-4 space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block px-4 py-2 text-gray-800 hover:text-[#f7b500] transition-colors duration-200 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <div className="px-4 pt-4">
                <Button
                  asChild
                  className="w-full bg-[#f7b500] hover:bg-[#e6a300] text-black font-semibold"
                  data-analytics="cta_click"
                >
                  <Link href="#demo-section" onClick={() => setIsMobileMenuOpen(false)}>
                    Ücretsiz Seviye Tespiti
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
