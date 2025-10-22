'use client';

import { SectionTitle } from '@/components/ui/section-title';
import { motion } from 'framer-motion';
import { Camera, Users, Award, BookOpen, Sparkles, Heart, ChevronDown } from 'lucide-react';

export default function GorsellerPage() {
  const scrollToNext = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50">
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
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-[#f7b500]/20 to-[#e6a300]/20 rounded-full blur-xl"
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
          className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-[#f7b500]/15 to-[#e6a300]/15 rounded-full blur-2xl"
        />
      </div>

      {/* Gallery Section */}
      <section id="gallery" className="min-h-screen pt-20 sm:pt-24 relative z-10 flex flex-col">
        <div className="container flex-1 flex flex-col justify-between py-4">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 lg:mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-r from-[#f7b500] to-[#e6a300] rounded-full">
                <Camera className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-montserrat">
                <span className="bg-gradient-to-r from-[#f7b500] to-[#e6a300] bg-clip-text text-transparent">
                  Görsellerimiz
                </span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Happy Academy'deki eğitim ortamımızı ve öğrenci başarılarımızı keşfedin
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 lg:mb-8"
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <BookOpen className="h-5 w-5 text-[#f7b500]" />
              <h2 className="text-xl lg:text-2xl font-bold text-gray-800">Eğitim Ortamımız</h2>
              <Sparkles className="h-5 w-5 text-[#f7b500]" />
            </div>
            <p className="text-center text-gray-600 mb-6 lg:mb-8 text-sm lg:text-base px-4">Modern ve konforlu sınıflarımızda öğrenme deneyimi</p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {/* Enhanced placeholder images with animations */}
            {Array.from({ length: 6 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="group cursor-pointer"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl h-40 lg:h-48 flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#f7b500]/20 hover:border-[#f7b500]/40 overflow-hidden">
                  <div className="text-center">
                    <div className="p-3 lg:p-4 bg-gradient-to-r from-[#f7b500]/20 to-[#e6a300]/20 rounded-full w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Camera className="h-6 w-6 lg:h-8 lg:w-8 text-[#f7b500]" />
                    </div>
                    <span className="text-gray-600 font-medium text-sm lg:text-base">Eğitim Ortamı {index + 1}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Scroll Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex justify-center pb-4"
        >
          <motion.button
            onClick={() => scrollToNext('activities')}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-[#f7b500]/30 hover:border-[#f7b500]/50"
          >
            <ChevronDown className="h-6 w-6 text-[#f7b500]" />
          </motion.button>
        </motion.div>
      </section>

      {/* Student Activities Section */}
      <section id="activities" className="min-h-screen relative z-10 flex flex-col">
        <div className="container flex-1 flex flex-col justify-between py-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-8 lg:mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-r from-[#f7b500] to-[#e6a300] rounded-full">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-montserrat">
                <span className="bg-gradient-to-r from-[#f7b500] to-[#e6a300] bg-clip-text text-transparent">
                  Öğrenci Etkinlikleri
                </span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 lg:mb-8 px-4">
              Öğrencilerimizin katıldığı etkinlikler ve başarılar
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.08,
                  rotateZ: 2,
                  transition: { duration: 0.3 }
                }}
                className="group cursor-pointer"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl h-32 lg:h-40 flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#f7b500]/20 hover:border-[#f7b500]/40 overflow-hidden">
                  <div className="text-center">
                    <div className="p-2 lg:p-3 bg-gradient-to-r from-[#f7b500]/20 to-[#e6a300]/20 rounded-full w-10 h-10 lg:w-12 lg:h-12 mx-auto mb-2 lg:mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Users className="h-5 w-5 lg:h-6 lg:w-6 text-[#f7b500]" />
                    </div>
                    <span className="text-gray-600 font-medium text-xs lg:text-sm">Etkinlik {index + 1}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Scroll Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex justify-center pb-4"
        >
          <motion.button
            onClick={() => scrollToNext('success')}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-[#f7b500]/30 hover:border-[#f7b500]/50"
          >
            <ChevronDown className="h-6 w-6 text-[#f7b500]" />
          </motion.button>
        </motion.div>
      </section>

      {/* Success Stories Section */}
      <section id="success" className="min-h-screen relative z-10 flex flex-col">
        <div className="container flex-1 flex flex-col justify-between py-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-8 lg:mb-12 mt-8 lg:mt-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-r from-[#f7b500] to-[#e6a300] rounded-full">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-montserrat">
                <span className="bg-gradient-to-r from-[#f7b500] to-[#e6a300] bg-clip-text text-transparent">
                  Başarı Hikayeleri
                </span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 lg:mb-8 px-4">
              Öğrencilerimizin başarı anları
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {Array.from({ length: 4 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.03,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="group cursor-pointer"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl h-48 lg:h-64 flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#f7b500]/20 hover:border-[#f7b500]/40 overflow-hidden">
                  <div className="text-center">
                    <div className="p-3 lg:p-4 bg-gradient-to-r from-[#f7b500]/20 to-[#e6a300]/20 rounded-full w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Award className="h-6 w-6 lg:h-8 lg:w-8 text-[#f7b500]" />
                    </div>
                    <span className="text-gray-600 font-medium text-sm lg:text-base">Başarı Hikayesi {index + 1}</span>
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
          className="flex justify-center pb-4"
        >
          <motion.button
            onClick={() => scrollToNext('gallery')}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-[#f7b500]/30 hover:border-[#f7b500]/50"
          >
            <ChevronDown className="h-6 w-6 text-[#f7b500] rotate-180" />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
