'use client';

import { motion } from 'framer-motion';
import { Users, Award, Target, Heart, BookOpen, Star, Sparkles, ChevronDown, GraduationCap, Globe, Lightbulb } from 'lucide-react';

export default function HakkimizdaPage() {
  const scrollToNext = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const achievements = [
    {
      icon: Users,
      title: '500+',
      subtitle: 'Mezun Öğrenci',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Award,
      title: '%95',
      subtitle: 'Başarı Oranı',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Star,
      title: '15',
      subtitle: 'Yıl Deneyim',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: BookOpen,
      title: '6',
      subtitle: 'Farklı Dil',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Globe,
      title: '50+',
      subtitle: 'Ülke Partneri',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: GraduationCap,
      title: '1000+',
      subtitle: 'Sertifika',
      color: 'from-teal-500 to-green-500'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Sevgi',
      description: 'Her öğrenciyi sevgiyle kucaklarız',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Target,
      title: 'Hedef',
      description: 'Kişisel hedeflere odaklanırız',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Award,
      title: 'Kalite',
      description: 'En yüksek standartları sunarız',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'İşbirliği',
      description: 'Güçlü ekip çalışması yaparız',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Lightbulb,
      title: 'İnovasyon',
      description: 'Sürekli gelişim ve yenilik',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Sparkles,
      title: 'Mükemmellik',
      description: 'Her alanda mükemmellik arayışı',
      color: 'from-amber-500 to-yellow-500'
    }
  ];

  const teamMembers = [
    {
      name: 'Dr. Ayşe Yılmaz',
      position: 'Kurucu & Genel Müdür',
      experience: '15 yıl',
      specialization: 'İngilizce Eğitimi',
      bio: 'Cambridge Üniversitesi mezunu, 15 yıllık dil eğitimi deneyimi.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Mehmet Kaya',
      position: 'LGS Koordinatörü',
      experience: '12 yıl',
      specialization: 'Matematik & Fen',
      bio: 'Boğaziçi Üniversitesi mezunu, LGS hazırlık uzmanı.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Selin Demir',
      position: 'YDT Team Lideri',
      experience: '10 yıl',
      specialization: 'İngilizce & YDT',
      bio: 'Hacettepe Üniversitesi mezunu, YDT hazırlık uzmanı.',
      color: 'from-purple-500 to-violet-500'
    },
    {
      name: 'Emre Özkan',
      position: 'Almanca Eğitmeni',
      experience: '8 yıl',
      specialization: 'Almanca & Goethe',
      bio: 'Goethe Enstitüsü sertifikalı, Aile Birleşimi uzmanı.',
      color: 'from-orange-500 to-red-500'
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
          className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full blur-2xl"
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
              <div className="p-3 bg-gradient-to-r from-[#f7b500] to-[#e6a300] rounded-full">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 font-montserrat">
                <span className="bg-gradient-to-r from-[#f7b500] to-[#e6a300] bg-clip-text text-transparent">
                  Hakkımızda
                </span>
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Konya'da dil ve sınav başarısı için 15 yıllık deneyim
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#f7b500]/20">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-6 w-6 text-[#f7b500]" />
                <h2 className="text-2xl font-bold text-gray-800">Misyonumuz</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Öğrencilerimizin dil öğrenme ve sınav hazırlık süreçlerinde en yüksek başarıyı elde etmelerini sağlamak. Modern eğitim yöntemleri ve kişiselleştirilmiş yaklaşımımızla her öğrencinin potansiyelini ortaya çıkarıyoruz.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#f7b500]/20">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="h-6 w-6 text-[#f7b500]" />
                <h2 className="text-2xl font-bold text-gray-800">Vizyonumuz</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Türkiye'nin en saygın dil eğitimi ve sınav hazırlık merkezlerinden biri olmak. Öğrencilerimizin akademik ve kişisel gelişimlerine katkı sağlayarak onları geleceğe hazırlıyoruz.
              </p>
            </div>
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
            onClick={() => scrollToNext('achievements')}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-[#f7b500]/30 hover:border-[#f7b500]/50"
          >
            <ChevronDown className="h-6 w-6 text-[#f7b500]" />
          </motion.button>
        </motion.div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="h-screen relative z-10 flex flex-col">
        <div className="container flex-1 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-r from-[#f7b500] to-[#e6a300] rounded-full">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 font-montserrat">
                <span className="bg-gradient-to-r from-[#f7b500] to-[#e6a300] bg-clip-text text-transparent">
                  Rakamlarla Başarımız
                </span>
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              15 yıllık deneyimimizin göstergeleri
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="group cursor-pointer"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#f7b500]/20 hover:border-[#f7b500]/40 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <achievement.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 font-medium">{achievement.subtitle}</p>
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
          className="flex justify-center pb-8"
        >
          <motion.button
            onClick={() => scrollToNext('team')}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-[#f7b500]/30 hover:border-[#f7b500]/50"
          >
            <ChevronDown className="h-6 w-6 text-[#f7b500]" />
          </motion.button>
        </motion.div>
      </section>

      {/* Team Section */}
      <section id="team" className="h-screen relative z-10 flex flex-col">
        <div className="container flex-1 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-r from-[#f7b500] to-[#e6a300] rounded-full">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 font-montserrat">
                <span className="bg-gradient-to-r from-[#f7b500] to-[#e6a300] bg-clip-text text-transparent">
                  Eğitmen Kadromuz
                </span>
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Deneyimli ve uzman eğitmenlerimiz
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
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
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#f7b500]/20 hover:border-[#f7b500]/40 text-center h-full">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${member.color} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-[#f7b500] font-medium mb-3">{member.position}</p>
                  <div className="space-y-1 text-sm text-gray-600 mb-3">
                    <p><strong>Deneyim:</strong> {member.experience}</p>
                    <p><strong>Uzmanlık:</strong> {member.specialization}</p>
                  </div>
                  <p className="text-gray-500 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Scroll Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="flex justify-center pb-8"
        >
          <motion.button
            onClick={() => scrollToNext('values')}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-[#f7b500]/30 hover:border-[#f7b500]/50"
          >
            <ChevronDown className="h-6 w-6 text-[#f7b500]" />
          </motion.button>
        </motion.div>
      </section>

      {/* Values Section */}
      <section id="values" className="h-screen relative z-10 flex flex-col">
        <div className="container flex-1 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-r from-[#f7b500] to-[#e6a300] rounded-full">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 font-montserrat">
                <span className="bg-gradient-to-r from-[#f7b500] to-[#e6a300] bg-clip-text text-transparent">
                  Değerlerimiz
                </span>
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Çalışma prensiplerimiz ve yaklaşımımız
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.03,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="group cursor-pointer"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#f7b500]/20 hover:border-[#f7b500]/40 text-center h-full">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${value.color} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
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
            className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-[#f7b500]/30 hover:border-[#f7b500]/50"
          >
            <ChevronDown className="h-6 w-6 text-[#f7b500] rotate-180" />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
