'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const programLinks = [
    { title: 'Yabancı Diller', href: '/yabanci-diller' },
    { title: 'Sınav Hazırlık', href: '/sinav-hazirlik' },
    { title: 'Çocuk & Genç', href: '/cocuk-genclik' },
    { title: 'Koçluk', href: '/kocluk' }
  ];

  const companyLinks = [
    { title: 'Hakkımızda', href: '/hakkimizda' },
    { title: 'Ücretler', href: '/ucretler' },
    { title: 'Blog', href: '/blog' },
    { title: 'İletişim', href: '/iletisim' }
  ];

  const legalLinks = [
    { title: 'KVKK', href: '/kvkk' },
    { title: 'Çerez Politikası', href: '/cerez-politikasi' },
    { title: 'Kullanım Koşulları', href: '/kullanim-kosullari' }
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo ve Açıklama */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image
                src="/logo-happy-academy.png"
                alt="Happy Academy Konya"
                width={150}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Başarıya Açılan Kapınız
            </p>
          </div>

          {/* Programlarımız */}
          <div>
            <h3 className="text-gray-800 font-semibold mb-4">Programlarımız</h3>
            <ul className="space-y-2">
              {programLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-[#f7b500] transition-colors duration-200 text-sm"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kurumsal */}
          <div>
            <h3 className="text-gray-800 font-semibold mb-4">Kurumsal</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-[#f7b500] transition-colors duration-200 text-sm"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim Bilgileri */}
          <div>
            <h3 className="text-gray-800 font-semibold mb-4">İletişim</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-[#f7b500]" />
                <span className="text-gray-600 text-sm">
                  Feritpaşa Mah. İfa Sokak, Nene Hatun Parkı İçi 5/A, Selçuklu/Konya
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-[#f7b500]" />
                <a
                  href="tel:03322350202"
                  className="text-gray-600 hover:text-[#f7b500] transition-colors duration-200 text-sm"
                  data-analytics="phone_click"
                >
                  0332 235 02 02
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-[#f7b500]" />
                <a
                  href="mailto:info@happyacademykonya.com"
                  className="text-gray-600 hover:text-[#f7b500] transition-colors duration-200 text-sm"
                >
                  info@happyacademykonya.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Alt Çizgi */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 w-full">
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {legalLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="text-gray-600 hover:text-[#f7b500] transition-colors duration-200 text-sm"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            
            {/* Bizi Takip Et - Ortada */}
            <div className="text-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:from-orange-600 hover:via-pink-600 hover:to-purple-700 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                data-analytics="instagram_click"
              >
                <a
                  href="https://instagram.com/happyacademykonya"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 mr-2" />
                  Bizi Takip Et
                </a>
              </Button>
            </div>
            
            <p className="text-gray-600 text-sm text-center md:text-right">
              © {currentYear} Happy Academy Konya. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
