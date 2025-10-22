'use client';

import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/ui/section-title';
import Link from 'next/link';
import { Clock, Users, Star, Award, BookOpen, Globe, Target, Brain, ArrowRight } from 'lucide-react';

const educationPrograms = [
  {
    id: 'ingilizce',
    title: 'İngilizce Eğitimi',
    icon: '🇬🇧',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'from-blue-50 to-blue-100',
    borderColor: 'border-blue-200',
    description: 'A1\'den C2\'ye kadar tüm seviyelerde İngilizce eğitimi. Konuşma, dinleme, okuma ve yazma becerilerini geliştirin.',
    programs: [
      'Genel İngilizce (A1-C2)',
      '7-14 Yaş Junior Eğitimi',
      '3-6 Yaş Okul Öncesi',
      'YDS/YDT/YÖKDİL Sınav Eğitimleri',
      'Bireysel ve Özel Dil Eğitimi'
    ],
    features: ['Konuşma Odaklı', 'Sınav Hazırlık', 'Yaş Gruplarına Özel', 'Birebir Dersler'],
    link: '/egitimler/ingilizce'
  },
  {
    id: 'yabanci-diller',
    title: 'Yabancı Dil Eğitimleri',
    icon: '🌍',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'from-purple-50 to-purple-100',
    borderColor: 'border-purple-200',
    description: 'İspanyolca, Almanca, Fransızca, Rusça, Arapça, Korece ve diğer tüm dillerde birebir özel eğitim.',
    programs: [
      'İspanyolca (A1-C2)',
      'Almanca (A1-C2)',
      'Fransızca (A1-C2)',
      'Rusça (A1-C2)',
      'Arapça (A1-C2)',
      'Korece (A1-C2)'
    ],
    features: ['Birebir Eğitim', 'Kültürel İçerik', 'Sertifika Programı', 'Esnek Zaman'],
    link: '/egitimler/yabanci-diller'
  },
  {
    id: 'aile-birlesim',
    title: 'Aile Birleşim Sınavı',
    icon: '👨‍👩‍👧‍👦',
    color: 'from-green-500 to-green-600',
    bgColor: 'from-green-50 to-green-100',
    borderColor: 'border-green-200',
    description: 'Aile birleşimi için gerekli A1 seviye Türkçe eğitimi ve kültürel uyum programı.',
    programs: [
      'A1 Seviye Türkçe Eğitimi',
      'Kültürel Uyum Programı',
      'Sınav Hazırlık',
      'Günlük Hayat Türkçesi'
    ],
    features: ['Sınav Odaklı', 'Kültürel Değerler', 'Pratik Uygulamalar', 'Hızlı Öğrenme'],
    link: '/egitimler/yabanci-diller'
  },
  {
    id: 'lgs-hazirlik',
    title: 'LGS Hazırlık Eğitimleri',
    icon: '🎓',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'from-orange-50 to-orange-100',
    borderColor: 'border-orange-200',
    description: 'LGS\'de hedeflediğiniz okula girmek için profesyonel destek. Konu tekrarları, deneme sınavları ve birebir etüt sistemi.',
    programs: [
      '8. Sınıf Kapsamlı Hazırlık',
      'Hızlandırılmış Program',
      'Konu Tekrarları',
      'Deneme Sınavları'
    ],
    features: ['Birebir Etüt', 'Motivasyon Koçluğu', 'Test Teknikleri', 'Stres Yönetimi'],
    link: '/egitimler/lgs-hazirlik'
  },
  {
    id: 'sinav-egitimleri',
    title: 'Sınav Eğitimleri',
    icon: '📚',
    color: 'from-red-500 to-red-600',
    bgColor: 'from-red-50 to-red-100',
    borderColor: 'border-red-200',
    description: '5-6-7-8. sınıflar için sınav eğitimi, konu tekrarları ve etüt sistemi.',
    programs: [
      '5-6-7. Sınıf Hazırlık',
      'Deneme Sınavları',
      'Konu Tekrarları',
      'Etüt Sistemi'
    ],
    features: ['Seviye Takibi', 'Eksik Konu Tespiti', 'İlerleme Raporu', 'Birebir Dersler'],
    link: '/egitimler/lgs-hazirlik'
  },
  {
    id: 'brans-dersleri',
    title: 'Branş Dersleri & Koçluk',
    icon: '🎯',
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'from-indigo-50 to-indigo-100',
    borderColor: 'border-indigo-200',
    description: 'Türkçe, Matematik, Fen Bilgisi, Sosyal Bilgiler, İnkılap Tarihi branşlarında birebir dersler ve koçluk eğitimi.',
    programs: [
      'Türkçe (5-12. Sınıf)',
      'Matematik (5-12. Sınıf)',
      'Fen Bilgisi (5-12. Sınıf)',
      'Sosyal Bilgiler (5-12. Sınıf)',
      'İnkılap Tarihi (8-12. Sınıf)',
      'Koçluk Eğitimi (Tüm Yaşlar)'
    ],
    features: ['Birebir Dersler', 'Hedef Belirleme', 'Motivasyon', 'Başarı Stratejileri'],
    link: '/egitimler/lgs-hazirlik'
  }
];

export default function EgitimlerPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
        {/* Crazy Background */}
        <div className="absolute inset-0">
          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='16' height='16' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 16 0 L 0 0 0 16' fill='none' stroke='%23f7b500' stroke-width='1' opacity='0.4'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='80' height='80' fill='url(%23grid)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat'
            }}></div>
          </div>
          
          {/* Floating Shapes */}
          <motion.div 
            className="absolute top-20 left-20 w-40 h-40 border-2 border-[#f7b500]/30 rotate-45"
            animate={{ 
              rotate: [45, 225, 45],
              scale: [1, 1.3, 1]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute top-40 right-32 w-32 h-32 bg-[#f7b500]/20 rounded-full"
            animate={{ 
              y: [-30, 30, -30],
              x: [-15, 15, -15]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-32 left-16 w-48 h-48 border border-[#f7b500]/25 rounded-full"
            animate={{ 
              scale: [1, 1.4, 1],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{ 
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Floating Icons */}
          <motion.div 
            className="absolute top-1/4 left-1/3 text-[#f7b500]/20"
            animate={{ 
              y: [-40, 40, -40],
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <BookOpen className="w-20 h-20" />
          </motion.div>
          
          <motion.div 
            className="absolute top-1/3 right-1/4 text-[#f7b500]/15"
            animate={{ 
              x: [-25, 25, -25],
              y: [-20, 20, -20]
            }}
            transition={{ 
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Globe className="w-24 h-24" />
          </motion.div>
          
          <motion.div 
            className="absolute bottom-1/4 left-1/2 text-[#f7b500]/10"
            animate={{ 
              rotate: [0, 180, 360],
              scale: [1, 1.6, 1]
            }}
            transition={{ 
              duration: 18,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Brain className="w-28 h-28" />
          </motion.div>
          
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-[#f7b500]/15 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-gradient-to-l from-[#f7b500]/20 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-[#f7b500]/12 to-transparent rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          {/* Floating Particles */}
          {[
            { left: 15, top: 20 },
            { left: 85, top: 30 },
            { left: 25, top: 70 },
            { left: 75, top: 80 },
            { left: 45, top: 15 },
            { left: 90, top: 60 },
            { left: 10, top: 50 },
            { left: 60, top: 90 },
            { left: 35, top: 40 },
            { left: 80, top: 10 },
            { left: 20, top: 85 },
            { left: 70, top: 25 }
          ].map((position, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-[#f7b500]/50 rounded-full"
              style={{
                left: `${position.left}%`,
                top: `${position.top}%`,
              }}
              animate={{
                y: [-25, 25, -25],
                opacity: [0.4, 1, 0.4],
                scale: [0.6, 1.2, 0.6]
              }}
              transition={{
                duration: 5 + i * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2
              }}
            />
          ))}
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <SectionTitle
              title="Eğitimlerimiz"
              subtitle="Geleceğinizi şekillendirin - 3 yaşından 80 yaşına kadar herkes için özel tasarlanmış eğitim deneyimi"
              icon={BookOpen}
              iconSize="lg"
              showIcon={true}
              useAnimate={true}
              titleColor="bg-gradient-to-r from-white via-[#f7b500] to-white bg-clip-text text-transparent"
              subtitleColor="text-gray-300 text-xl md:text-2xl"
              className="mb-8"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-6 text-[#f7b500]"
            >
              <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-2xl">🚀</span>
                <span className="text-lg font-bold">İnovatif Metodlar</span>
              </div>
              <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-2xl">🎯</span>
                <span className="text-lg font-bold">Kişiye Özel Plan</span>
              </div>
              <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-2xl">🏆</span>
                <span className="text-lg font-bold">%100 Başarı Garantisi</span>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Down Arrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-20 left-0 right-0 flex justify-center z-20"
        >
          <Link
            href="#education-programs"
            className="group flex flex-col items-center gap-3 text-white hover:text-[#f7b500] transition-colors duration-300"
          >
            <span className="text-sm font-medium">Eğitimlerimizi Görüntüleyin</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-8 h-8 border-2 border-current rounded-full flex items-center justify-center group-hover:border-[#f7b500] transition-colors duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </Link>
        </motion.div>
      </section>

      {/* Education Programs - Compact Grid */}
      <section id="education-programs" className="section-padding bg-gray-50">
        <div className="container">
          <SectionTitle
            title="Eğitim Programlarımız"
            subtitle="Her ihtiyaca uygun kapsamlı eğitim çözümleri"
            className="mb-16"
            titleColor="text-gray-800"
            subtitleColor="text-gray-600"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className={`bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-l-4 ${program.color.replace('from-', 'border-').replace(' to-', '')} relative overflow-hidden h-full flex flex-col`}>
                  {/* Background Pattern */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Header */}
                  <div className="relative z-10 mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl">{program.icon}</span>
                      <h3 className="text-2xl font-bold text-gray-800 group-hover:text-[#f7b500] transition-colors duration-300">
                        {program.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                  
                  {/* Programs List */}
                  <div className="relative z-10 mb-6 flex-1">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Programlar:</h4>
                    <ul className="space-y-2">
                      {program.programs.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${program.color}`}></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Features */}
                  <div className="relative z-10 mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3 text-center">Özellikler:</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {program.features.map((feature, idx) => (
                        <span key={idx} className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${program.color} text-white`}>
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <div className="relative z-10 mt-auto">
                    <Link 
                      href={program.link}
                      className={`group inline-flex items-center gap-2 bg-gradient-to-r ${program.color} text-white font-semibold px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 group-hover:scale-105 w-full justify-center`}
                    >
                      <span>Detaylı Bilgi</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-br from-[#f7b500]/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-tr from-[#f7b500]/15 to-transparent rounded-full blur-2xl"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-8 font-montserrat"
            >
              Hemen Başlayın!
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-12"
            >
              Size en uygun programı bulalım ve eğitim yolculuğunuza başlayalım
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <div className="relative">
                <Link 
                  href="/hakkimizda" 
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#f7b500] to-[#e6a300] text-black font-bold px-10 py-5 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                  <span className="text-lg relative z-10">Hikayemizi Keşfedin</span>
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="relative">
                <Link 
                  href="https://wa.me/903322350202" 
                  target="_blank"
                  className="group inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold px-10 py-5 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 relative"
                >
                  <span className="text-lg">WhatsApp'tan Yazın</span>
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}