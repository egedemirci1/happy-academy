import { Metadata } from 'next';
import { SectionTitle } from '@/components/ui/section-title';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { LeadForm } from '@/components/ui/lead-form';
import { CheckCircle, Users, BookOpen, Target, Heart, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Çocuk & Genç - Junior Class (3-6) + 5-8. Sınıf Akademik Destek - Happy Academy Konya',
  description: 'Junior Class (3–6 yaş) kelime ve konuşma odaklı; 5–8. sınıf hafta sonu 360 saat grup dersi + birebir destek. Duyusal etkinlikler, şarkılar ve hikâyeler.',
  keywords: 'çocuk İngilizce, Junior Class, 3-6 yaş, 5-8. sınıf, akademik destek, Konya',
};

export default function CocukGenclikPage() {
  const juniorFeatures = [
    {
      icon: Heart,
      title: 'Kelime Odaklı',
      description: 'Oyunlarla kelime öğrenimi'
    },
    {
      icon: BookOpen,
      title: 'Bağlam Temelli',
      description: 'Gramer oyunla öğretilir'
    },
    {
      icon: Star,
      title: 'Konuşma Pratiği',
      description: 'Doğal konuşma ortamı'
    },
    {
      icon: Users,
      title: 'Duyusal Etkinlikler',
      description: 'Şarkılar ve hikâyeler'
    }
  ];

  const academicFeatures = [
    {
      icon: BookOpen,
      title: '360 Saat Grup Dersi',
      description: 'Hafta sonu kapsamlı eğitim'
    },
    {
      icon: Target,
      title: 'Birebir Destek',
      description: 'Kişiye özel ders seçenekleri'
    },
    {
      icon: Users,
      title: 'Veli Bilgilendirme',
      description: 'Düzenli yoklama ve rapor'
    },
    {
      icon: Star,
      title: 'Kulüpler',
      description: 'Speaking Days, Drama, Story Time'
    }
  ];

  return (
    <div className="min-h-screen pt-20 sm:pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-primary">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6 font-montserrat break-words px-4">
              Çocuk & Genç
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 px-4 break-words">
              Junior Class (3–6 yaş) + 5–8. Sınıf Akademik Destek
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge className="bg-[#f7b500] text-black">3-6 Yaş</Badge>
              <Badge className="bg-[#f7b500] text-black">5-8. Sınıf</Badge>
              <Badge className="bg-[#f7b500] text-black">Birebir Destek</Badge>
              <Badge className="bg-[#f7b500] text-black">Kulüpler</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Junior Class Section */}
      <section className="section-padding bg-gray-800">
        <div className="container">
          <SectionTitle
            title="Junior Class (3–6 Yaş)"
            subtitle="Kelime odaklı, bağlam temelli gramer ve oyunla konuşma pratiği"
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {juniorFeatures.map((feature, index) => (
              <Card key={index} className="bg-gray-700 border-gray-600 text-center">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#f7b500] rounded-full mb-4">
                    <feature.icon className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12">
            <Card className="bg-gray-700 border-gray-600">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Junior Class Program İçeriği</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-[#f7b500] mb-3">Duyusal Etkinlikler</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#f7b500] mt-1 flex-shrink-0" />
                        <span>Renkli materyallerle öğrenme</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#f7b500] mt-1 flex-shrink-0" />
                        <span>Dokunsal aktiviteler</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#f7b500] mt-1 flex-shrink-0" />
                        <span>Görsel öğrenme araçları</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#f7b500] mb-3">Şarkılar ve Hikâyeler</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#f7b500] mt-1 flex-shrink-0" />
                        <span>İngilizce şarkılar</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#f7b500] mt-1 flex-shrink-0" />
                        <span>İnteraktif hikâye anlatımı</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#f7b500] mt-1 flex-shrink-0" />
                        <span>Rol yapma etkinlikleri</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Academic Support Section */}
      <section className="section-padding bg-gray-900">
        <div className="container">
          <SectionTitle
            title="5–8. Sınıf Akademik Destek"
            subtitle="Hafta sonu 360 saat grup dersi + birebir ders seçenekleri"
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {academicFeatures.map((feature, index) => (
              <Card key={index} className="bg-gray-700 border-gray-600 text-center">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#f7b500] rounded-full mb-4">
                    <feature.icon className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Communication */}
      <section className="section-padding bg-gray-800">
        <div className="container">
          <SectionTitle
            title="Veli Bilgilendirme"
            subtitle="Çocuğunuzun gelişimini takip edin"
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-700 border-gray-600">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center gap-3">
                  <Users className="h-6 w-6 text-[#f7b500]" />
                  Düzenli Yoklama
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Haftalık devam durumu ve ders performansı raporları
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-700 border-gray-600">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center gap-3">
                  <BookOpen className="h-6 w-6 text-[#f7b500]" />
                  Gelişim Raporu
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Aylık detaylı gelişim raporu ve öneriler
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-700 border-gray-600">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center gap-3">
                  <Target className="h-6 w-6 text-[#f7b500]" />
                  Veli-Öğretmen Görüşmeleri
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Düzenli görüşmeler ve bireysel danışmanlık
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Clubs */}
      <section className="section-padding bg-gray-900">
        <div className="container">
          <SectionTitle
            title="Kulüpler"
            subtitle="Eğlenceli ve öğretici kulüp aktiviteleri"
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-700 border-gray-600">
              <CardHeader>
                <CardTitle className="text-xl text-white">Speaking Days</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Haftalık konuşma pratiği kulübü. Güncel konular üzerine tartışmalar ve sunumlar.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-700 border-gray-600">
              <CardHeader>
                <CardTitle className="text-xl text-white">Drama</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Tiyatro ve drama etkinlikleri ile doğal dil öğrenimi ve özgüven gelişimi.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-700 border-gray-600">
              <CardHeader>
                <CardTitle className="text-xl text-white">Story Time</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Hikâye anlatımı ve yaratıcı yazma etkinlikleri ile dil becerilerini geliştirme.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-gray-800">
        <div className="container">
          <SectionTitle
            title="Program Ücretleri"
            subtitle="Yaş gruplarına göre ücret bilgileri"
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gray-700 border-gray-600">
              <CardHeader>
                <CardTitle className="text-xl text-white">Junior Class (3-6 Yaş)</CardTitle>
                <div className="text-3xl font-bold text-[#f7b500]">₺1.500/ay</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li>• Haftada 2 gün ders</li>
                  <li>• Oyun tabanlı öğrenim</li>
                  <li>• Duyusal etkinlikler</li>
                  <li>• Şarkılar ve hikâyeler</li>
                  <li>• Veli bilgilendirme</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-700 border-[#f7b500]">
              <CardHeader>
                <CardTitle className="text-xl text-white">5-8. Sınıf Akademik Destek</CardTitle>
                <div className="text-3xl font-bold text-[#f7b500]">₺2.000/ay</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li>• Hafta sonu 360 saat grup dersi</li>
                  <li>• Birebir destek seçenekleri</li>
                  <li>• Kulüp aktiviteleri</li>
                  <li>• Düzenli raporlama</li>
                  <li>• Veli-öğretmen görüşmeleri</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-gray-900">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <LeadForm
              title="Çocuğunuz İçin En Uygun Programı Bulalım"
              subtitle="Yaş grubuna göre özel program önerileri"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
