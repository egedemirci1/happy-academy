'use client';

import { SectionTitle } from '@/components/ui/section-title';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Education Programs - Compact Grid */}
      <section className="pt-20 sm:pt-24 pb-24 md:pb-32">
        <div className="container">
          <SectionTitle
            title="Eğitim Programlarımız"
            subtitle="Her ihtiyaca uygun kapsamlı eğitim çözümleri"
            icon={BookOpen}
            iconSize="lg"
            showIcon={true}
            titleColor="text-[#f7b500]"
            subtitleColor="text-gray-600"
            className="mb-12 mt-4"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {educationPrograms.map((program, index) => (
              <div
                key={program.id}
                className="group"
              >
                <div className={`bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border-l-4 ${program.color.replace('from-', 'border-').replace(' to-', '')} relative overflow-hidden h-full flex flex-col`}>
                  {/* Background Pattern */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Header */}
                  <div className="relative z-10 mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{program.icon}</span>
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#f7b500] transition-colors duration-300">
                        {program.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                  
                  {/* Programs List */}
                  <div className="relative z-10 mb-4 flex-1">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Programlar:</h4>
                    <ul className="space-y-1">
                      {program.programs.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${program.color}`}></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Features */}
                  <div className="relative z-10 mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2 text-center">Özellikler:</h4>
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
                      className={`group inline-flex items-center gap-2 bg-gradient-to-r ${program.color} text-white font-semibold px-6 py-2.5 rounded-full hover:shadow-lg transition-all duration-300 group-hover:scale-105 w-full justify-center`}
                    >
                      <span>Detaylı Bilgi</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-8 font-montserrat break-words px-4">
              Hemen Başlayın!
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12">
              Size en uygun programı bulalım ve eğitim yolculuğunuza başlayalım
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}