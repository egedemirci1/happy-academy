'use client';

import { Metadata } from 'next';
import { SectionTitle } from '@/components/ui/section-title';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, Instagram, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function IletisimPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      content: '0332 235 02 02',
      link: 'tel:03322350202',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      content: '0332 235 02 02',
      link: 'https://wa.me/903322350202',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Mail,
      title: 'E-posta',
      content: 'info@happyacademykonya.com',
      link: 'mailto:info@happyacademykonya.com',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      content: '@happyacademykonya',
      link: 'https://instagram.com/happyacademykonya',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  const workingHours = [
    { period: 'Pazartesi - Cuma', hours: '10:00 - 19:00' },
    { period: 'Cumartesi - Pazar', hours: '10:00 - 18:00' }
  ];


  return (
    <div className="h-screen pt-16">
      {/* Main Contact Section - Single Screen */}
      <section className="h-[calc(100vh-4rem)] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%23f7b500' stroke-width='0.5' opacity='0.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-20 w-24 h-24 border border-[#f7b500]/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#f7b500]/10 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-10 w-16 h-16 border border-[#f7b500]/25 rounded-full animate-bounce-slow"></div>
        
        {/* Yellow Light Effects */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#f7b500]/15 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-[#f7b500]/20 rounded-full blur-xl"></div>
        
        <div className="container mx-auto px-4 py-4 relative z-10 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
            {/* Left Side - Contact Information */}
            <div className="flex flex-col justify-center space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left"
              >
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-3 font-montserrat">
                  İletişim
                </h1>
                <p className="text-base text-gray-300 mb-4 leading-relaxed">
                  Bizimle iletişime geçin, sorularınızı sorun
                </p>
              </motion.div>

              {/* Contact Cards */}
              <div className="grid grid-cols-2 gap-3">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                    className="group"
                  >
                    <Card className="bg-gray-700/80 border-gray-600 hover:border-[#f7b500] transition-all duration-300 backdrop-blur-sm hover:scale-105 h-full">
                      <CardContent className="p-3 text-center h-full flex flex-col justify-center">
                        <div className={`flex items-center justify-center w-10 h-10 bg-gradient-to-br ${info.color} rounded-lg mb-2 group-hover:scale-110 transition-transform duration-300 shadow-lg mx-auto`}>
                          <info.icon className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-[#f7b500] transition-colors duration-300">{info.title}</h3>
                        <a
                          href={info.link}
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-[#f7b500] hover:text-[#e6a300] transition-colors text-base font-medium block group-hover:scale-105 transition-transform duration-300"
                          data-analytics={info.title === 'WhatsApp' ? 'whatsapp_click' : info.title === 'Telefon' ? 'phone_click' : undefined}
                        >
                          {info.content}
                        </a>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Working Hours */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Card className="bg-gray-700/80 border-gray-600 backdrop-blur-sm h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base text-white flex items-center justify-center gap-2">
                      <Clock className="h-4 w-4 text-[#f7b500]" />
                      Çalışma Saatleri
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 flex-1 flex flex-col justify-center">
                    <div className="space-y-1">
                      {workingHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between items-center py-1 border-b border-gray-600 last:border-b-0">
                          <span className="text-gray-300 text-sm font-medium">{schedule.period}</span>
                          <span className="text-[#f7b500] font-semibold text-sm">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Right Side - Google Maps */}
            <div className="flex flex-col justify-center space-y-4">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-center lg:text-left"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 font-montserrat">
                  <span className="text-[#f7b500]">Konumumuz</span>
                </h2>
                <p className="text-base text-gray-300 mb-4 leading-relaxed">
                  Merkezi konumda, ulaşımı kolay bir bölgede yer almaktayız
                </p>
              </motion.div>

              {/* Address Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Card className="bg-gray-700/80 border-gray-600 backdrop-blur-sm h-full">
                  <CardContent className="p-6 h-full flex items-center">
                    <div className="flex items-start gap-4 w-full">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#f7b500] to-[#e6a300] rounded-xl flex-shrink-0">
                        <MapPin className="h-6 w-6 text-black" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">Happy Academy Konya</h3>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                          Feritpaşa Mahallesi İfa Sokak, Nene Hatun Parkı İçi 5/A, 42000 Selçuklu/Konya
                        </p>
                        <p className="text-gray-400 text-sm">
                          Merkezi konumda, ulaşımı kolay bir bölgede yer almaktayız.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Google Maps Embed */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="h-full"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#f7b500]/30 h-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123456789!2d32.4847!3d37.8667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDUyJzAwLjIiTiAzMsKwMjknMDQuOSJF!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-2xl"
                  ></iframe>
                  
                  {/* Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none rounded-2xl"></div>
                </div>
              </motion.div>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button
                    asChild
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    data-analytics="whatsapp_click"
                  >
                    <a href="https://wa.me/903322350202" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-5 w-5 mr-2" />
                      WhatsApp'tan Yazın
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-[#f7b500] text-[#f7b500] hover:bg-[#f7b500] hover:text-black px-6 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    data-analytics="phone_click"
                  >
                    <a href="tel:03322350202">
                      <Phone className="h-5 w-5 mr-2" />
                      Hemen Arayın
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
