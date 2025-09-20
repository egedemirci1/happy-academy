'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Users, Award, BookOpen, Globe, Target, CheckCircle, Star, ChevronDown, Languages } from 'lucide-react';
import Link from 'next/link';

export default function YabanciDillerPage() {
  const scrollToNext = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const programs = [
    {
      title: 'İspanyolca (A1-C2)',
      description: 'Dünyanın en çok konuşulan dillerinden biri',
      features: ['Konuşma Odaklı', 'Kültürel İçerik', 'DELE Sınavı', 'Birebir Eğitim'],
      duration: '8-12 ay',
      level: 'Tüm Seviyeler'
    },
    {
      title: 'Almanca (A1-C2)',
      description: 'Avrupa\'nın güçlü ekonomik dili',
      features: ['Goethe Sertifikası', 'İş Almancası', 'Aile Birleşimi', 'TestDaF Hazırlık'],
      duration: '10-14 ay',
      level: 'Tüm Seviyeler'
    },
    {
      title: 'Fransızca (A1-C2)',
      description: 'Romantik ve diplomatik dil',
      features: ['DELF/DALF Sınavı', 'Kültür ve Sanat', 'İş Fransızcası', 'Telaffuz Çalışması'],
      duration: '8-12 ay',
      level: 'Tüm Seviyeler'
    },
    {
      title: 'Rusça (A1-C2)',
      description: 'Doğu Avrupa ve Orta Asya\'nın dili',
      features: ['Kiril Alfabesi', 'İş Rusçası', 'Kültürel Değerler', 'Pratik Konuşma'],
      duration: '10-14 ay',
      level: 'Tüm Seviyeler'
    },
    {
      title: 'Arapça (A1-C2)',
      description: 'Ortadoğu ve Kuzey Afrika\'nın dili',
      features: ['Modern Arapça', 'Klasik Arapça', 'İş Arapçası', 'Kültürel İçerik'],
      duration: '12-16 ay',
      level: 'Tüm Seviyeler'
    },
    {
      title: 'Korece (A1-C2)',
      description: 'Asya\'nın popüler kültür dili',
      features: ['Hangul Alfabesi', 'K-Pop Kültürü', 'İş Korecesi', 'TOPIK Sınavı'],
      duration: '10-14 ay',
      level: 'Tüm Seviyeler'
    }
  ];

  const features = [
    {
      icon: Languages,
      title: 'Çoklu Dil Seçeneği',
      description: '6 farklı dilde eğitim imkanı',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: Users,
      title: 'Birebir Eğitim',
      description: 'Kişiye özel tasarlanmış programlar',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Globe,
      title: 'Kültürel İçerik',
      description: 'Dil ile birlikte kültür öğrenimi',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Award,
      title: 'Sertifika Programı',
      description: 'Uluslararası geçerlilikte sertifikalar',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
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
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-full blur-xl"
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
          className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-purple-500/15 to-blue-500/15 rounded-full blur-2xl"
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
              <div className="p-3 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full">
                <Languages className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 font-montserrat">
                <span className="bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent">
                  Yabancı Dil Eğitimleri
                </span>
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              İspanyolca, Almanca, Fransızca, Rusça, Arapça, Korece ve diğer tüm dillerde birebir özel eğitim.
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
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40 text-center">
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
            className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-500/30 hover:border-purple-500/50"
          >
            <ChevronDown className="h-6 w-6 text-purple-500" />
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
              <div className="p-3 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 font-montserrat">
                <span className="bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent">
                  Dil Programları
                </span>
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Size uygun dili seçin ve dünya dillerini öğrenmeye başlayın
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
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full">
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
            className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-500/30 hover:border-purple-500/50"
          >
            <ChevronDown className="h-6 w-6 text-purple-500 rotate-180" />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}