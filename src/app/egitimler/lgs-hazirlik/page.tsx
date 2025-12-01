'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Users, Award, BookOpen, Target, CheckCircle, Star, ChevronDown, Brain, Trophy, BarChart, FileText } from 'lucide-react';
import Link from 'next/link';

export default function LGSHazirlikPage() {
  const scrollToNext = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const programs = [
    {
      title: '8. Sınıf Kapsamlı Hazırlık',
      description: 'LGS için tüm konuları kapsayan yoğun program',
      features: ['Tüm Dersler', 'Konu Tekrarları', 'Deneme Sınavları', 'Birebir Etüt'],
      duration: '10 ay',
      level: '8. Sınıf'
    },
    {
      title: 'Hızlandırılmış Program',
      description: 'Kısa sürede maksimum verim için yoğun program',
      features: ['Yoğun Dersler', 'Hızlı İlerleme', 'Test Teknikleri', 'Motivasyon'],
      duration: '6 ay',
      level: '8. Sınıf'
    },
    {
      title: 'Konu Tekrarları',
      description: 'Eksik konuları tamamlamak için özel program',
      features: ['Eksik Tespiti', 'Kişisel Plan', 'Tekrar Dersleri', 'Pratik Çalışma'],
      duration: 'Esnek',
      level: 'Tüm Seviyeler'
    },
    {
      title: 'Deneme Sınavları',
      description: 'Gerçek sınav deneyimi için düzenli testler',
      features: ['Haftalık Testler', 'Detaylı Analiz', 'Performans Takibi', 'Strateji Geliştirme'],
      duration: 'Sürekli',
      level: '8. Sınıf'
    }
  ];

  const features = [
    {
      icon: Brain,
      title: 'Akıllı Öğrenme',
      description: 'Beyin dostu öğrenme teknikleri',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Users,
      title: 'Birebir Etüt',
      description: 'Kişiye özel ders ve etüt sistemi',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Trophy,
      title: 'Motivasyon Koçluğu',
      description: 'Sürekli motivasyon ve hedef odaklılık',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: Target,
      title: 'Test Teknikleri',
      description: 'Sınav stratejileri ve teknikleri',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BarChart,
      title: 'Performans Takibi',
      description: 'Detaylı analiz ve ilerleme raporları',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: FileText,
      title: 'Konu Anlatımları',
      description: 'Kapsamlı ders notları ve materyaller',
      color: 'from-yellow-500 to-amber-500'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
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
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-xl"
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
          className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-orange-500/15 to-yellow-500/15 rounded-full blur-2xl"
        />
      </div>

      {/* Hero Section */}
      <section id="hero" className="h-screen pt-16 relative z-10 flex flex-col">
        <div className="container flex-1 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 font-montserrat">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  LGS Hazırlık Eğitimleri
                </span>
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              LGS'de hedeflediğiniz okula girmek için profesyonel destek. Konu tekrarları, deneme sınavları ve birebir etüt sistemi.
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
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-500/20 hover:border-orange-500/40 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
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
            className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-500/30 hover:border-orange-500/50"
          >
            <ChevronDown className="h-6 w-6 text-orange-500" />
          </motion.button>
        </motion.div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="h-screen relative z-10 flex flex-col">
        <div className="container flex-1 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 font-montserrat">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Hazırlık Programları
                </span>
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Size uygun programı seçin ve LGS hedefinize odaklanın
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
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-500/20 hover:border-orange-500/40 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full">
                      <Star className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">{program.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">{program.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Target className="h-4 w-4" />
                      <span>{program.level}</span>
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
            className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-500/30 hover:border-orange-500/50"
          >
            <ChevronDown className="h-6 w-6 text-orange-500 rotate-180" />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}