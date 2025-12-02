'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Users, Award, BookOpen, Globe, Target, CheckCircle, Star, ChevronDown, Calendar, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function IngilizceEgitimPage() {
  const scrollToNext = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const programs = [
    {
      title: 'Genel İngilizce (A1-C2)',
      description: 'Tüm seviyelerde kapsamlı İngilizce eğitimi',
      features: ['Konuşma Odaklı', 'Grammer Temelli', 'Kelime Geliştirme', 'Telaffuz Çalışması'],
      duration: '6-12 ay',
      level: 'Tüm Seviyeler'
    },
    {
      title: '7-14 Yaş Junior Eğitimi',
      description: 'Çocuklar için özel tasarlanmış İngilizce programı',
      features: ['Oyun Temelli', 'Görsel Öğrenme', 'Müzik ve Şarkı', 'Hikaye Anlatımı'],
      duration: '8-10 ay',
      level: 'Başlangıç-Orta'
    },
    {
      title: '3-6 Yaş Okul Öncesi',
      description: 'Küçük çocuklar için eğlenceli İngilizce deneyimi',
      features: ['Oyun Odaklı', 'Renkli Materyaller', 'Şarkı ve Dans', 'Basit Kelimeler'],
      duration: '6-8 ay',
      level: 'Başlangıç'
    },
    {
      title: 'YDS/YDT/YÖKDİL Sınav Eğitimleri',
      description: 'Akademik sınavlar için özel hazırlık programı',
      features: ['Test Teknikleri', 'Kelime Çalışması', 'Deneme Sınavları', 'Strateji Geliştirme'],
      duration: '4-6 ay',
      level: 'İleri'
    },
    {
      title: 'Bireysel ve Özel Dil Eğitimi',
      description: 'Kişiye özel tasarlanmış birebir eğitim',
      features: ['Kişisel Plan', 'Esnek Zaman', 'Hızlı İlerleme', 'Özel Materyaller'],
      duration: 'Esnek',
      level: 'Tüm Seviyeler'
    },
    {
      title: 'İş İngilizcesi',
      description: 'Profesyonel iş hayatı için İngilizce',
      features: ['İş Terimleri', 'Sunum Becerileri', 'E-posta Yazımı', 'Toplantı Dili'],
      duration: '3-6 ay',
      level: 'Orta-İleri'
    }
  ];

  const features = [
    {
      icon: Globe,
      title: 'Uluslararası Standartlar',
      description: 'CEFR standartlarına uygun eğitim',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Deneyimli Eğitmenler',
      description: 'Native ve Türk eğitmenler',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: BookOpen,
      title: 'Modern Materyaller',
      description: 'Güncel kitaplar ve dijital araçlar',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: Award,
      title: 'Sertifika Programı',
      description: 'Uluslararası geçerlilikte sertifikalar',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Calendar,
      title: 'Esnek Zamanlama',
      description: 'Size uygun saatlerde ders imkanı',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: TrendingUp,
      title: 'Hızlı İlerleme',
      description: 'Etkili yöntemlerle kısa sürede sonuç',
      color: 'from-yellow-500 to-amber-500'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full blur-2xl"
        />
      </div>

      {/* Hero Section */}
      <section id="hero" className="h-screen pt-20 sm:pt-24 relative z-10 flex flex-col">
        <div className="container flex-1 flex flex-col justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6 px-4">
              <div className="p-2 sm:p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex-shrink-0">
                <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-montserrat break-words">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  İngilizce Eğitimi
                </span>
              </h1>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 px-4">
              A1'den C2'ye kadar tüm seviyelerde İngilizce eğitimi. Konuşma, dinleme, okuma ve yazma becerilerini geliştirin.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="group cursor-pointer"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-500/20 hover:border-blue-500/40 text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r ${feature.color} rounded-full mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2 sm:mb-3 break-words">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 break-words">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Scroll Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex justify-center pb-8"
        >
          <motion.button
            onClick={() => scrollToNext('programs')}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-500/30 hover:border-blue-500/50"
          >
            <ChevronDown className="h-6 w-6 text-blue-500" />
          </motion.button>
        </motion.div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="h-screen relative z-10 flex flex-col">
        <div className="container flex-1 flex flex-col justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6 px-4">
              <div className="p-2 sm:p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex-shrink-0">
                <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-montserrat break-words">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Eğitim Programları
                </span>
              </h1>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 px-4">
              Size uygun programı seçin ve İngilizce öğrenme yolculuğunuza başlayın
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.03,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="group cursor-pointer"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-500/20 hover:border-blue-500/40 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full">
                      <Star className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">{program.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">{program.description}</p>
                  
                  <div className="space-y-1 sm:space-y-2 mb-4">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-gray-600 break-words">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                      <span className="break-words">{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Target className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                      <span className="break-words">{program.level}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Final Scroll Arrow - Back to Top */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="flex justify-center pb-8"
        >
          <motion.button
            onClick={() => scrollToNext('hero')}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-500/30 hover:border-blue-500/50"
          >
            <ChevronDown className="h-6 w-6 text-blue-500 rotate-180" />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}