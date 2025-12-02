'use client';

import { SectionTitle } from '@/components/ui/section-title';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { LeadForm } from '@/components/ui/lead-form';
import { CheckCircle, Target, Users, BarChart3, Calendar, MessageSquare, TrendingUp } from 'lucide-react';

export default function KoclukPage() {
  const coachingFeatures = [
    {
      icon: Target,
      title: 'Kişiye Özel Plan',
      description: 'Öğrencinin ihtiyaçlarına göre özel çalışma planı'
    },
    {
      icon: Calendar,
      title: 'Haftalık Hedefler',
      description: 'Düzenli hedef belirleme ve takip sistemi'
    },
    {
      icon: Users,
      title: 'Mentör Görüşmeleri',
      description: 'Haftalık birebir mentörlük görüşmeleri'
    },
    {
      icon: BarChart3,
      title: 'İlerleme Grafikleri',
      description: 'Görsel ilerleme takibi ve analiz'
    }
  ];

  const reportingFeatures = [
    {
      title: 'Haftalık Hedef Raporu',
      description: 'Belirlenen hedeflerin gerçekleşme durumu',
      items: ['Hedef başarı oranı', 'Tamamlanan görevler', 'Sonraki hafta planı']
    },
    {
      title: 'Veli Bilgilendirme',
      description: 'Düzenli veli raporları ve öneriler',
      items: ['Haftalık gelişim raporu', 'Öneriler ve tavsiyeler', 'Görüşme notları']
    },
    {
      title: 'İlerleme Analizi',
      description: 'Detaylı performans analizi ve trend grafikleri',
      items: ['Aylık performans grafiği', 'Zayıf nokta analizi', 'Güçlü yönler']
    }
  ];

  const faqs = [
    {
      question: 'Koçluk sistemi nasıl çalışır?',
      answer: 'Her öğrenciye özel bir koç atanır. Haftalık görüşmelerle hedefler belirlenir, ilerleme takip edilir ve gerekli yönlendirmeler yapılır.'
    },
    {
      question: 'Haftalık hedefler nasıl belirlenir?',
      answer: 'Öğrencinin mevcut durumu, hedefleri ve kapasitesi değerlendirilerek gerçekçi ve ulaşılabilir hedefler belirlenir.'
    },
    {
      question: 'Veli bilgilendirmesi ne sıklıkla yapılır?',
      answer: 'Haftalık detaylı raporlar gönderilir. Ayrıca aylık yüz yüze görüşmeler düzenlenir.'
    },
    {
      question: 'Koçluk hizmeti ayrı ücretli mi?',
      answer: 'Koçluk hizmeti tüm programlarımıza dahildir. Ayrı bir ücret alınmaz.'
    }
  ];

  return (
    <div className="min-h-screen pt-20 sm:pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-primary">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6 font-montserrat break-words px-4">
              Koçluk & Takip Sistemi
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 px-4 break-words">
              Kişiye özel plan, haftalık hedefler, mentör görüşmeleri
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge className="bg-[#f7b500] text-black">Kişiye Özel Plan</Badge>
              <Badge className="bg-[#f7b500] text-black">Haftalık Hedefler</Badge>
              <Badge className="bg-[#f7b500] text-black">Mentörlük</Badge>
              <Badge className="bg-[#f7b500] text-black">İlerleme Takibi</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* What is Coaching */}
      <section className="section-padding bg-gray-800">
        <div className="container">
          <SectionTitle
            title="Koçluk & Takip Sistemi Nedir?"
            subtitle="Öğrencinizin başarısı için kapsamlı destek sistemi"
            icon={Target}
            iconSize="md"
            showIcon={true}
            className="mb-16"
          />
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gray-700 border-gray-600">
              <CardContent className="p-8">
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Koçluk & Takip Sistemi, öğrencilerimizin akademik ve kişisel gelişimlerini 
                  desteklemek için tasarlanmış kapsamlı bir mentörlük programıdır. Her öğrenciye 
                  özel olarak atanan koçlarımız, haftalık hedef belirleme, ilerleme takibi ve 
                  motivasyon sağlama konularında destek verir.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Sistemin Faydaları</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#f7b500] mt-1 flex-shrink-0" />
                        <span>Kişiselleştirilmiş öğrenme planı</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#f7b500] mt-1 flex-shrink-0" />
                        <span>Düzenli hedef belirleme ve takip</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#f7b500] mt-1 flex-shrink-0" />
                        <span>Motivasyon ve özgüven artışı</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#f7b500] mt-1 flex-shrink-0" />
                        <span>Veli-öğrenci-koç işbirliği</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Hizmet Kapsamı</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#f7b500] mt-1 flex-shrink-0" />
                        <span>Haftalık birebir görüşmeler</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#f7b500] mt-1 flex-shrink-0" />
                        <span>Detaylı ilerleme raporları</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#f7b500] mt-1 flex-shrink-0" />
                        <span>Veli bilgilendirme sistemi</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#f7b500] mt-1 flex-shrink-0" />
                        <span>Kriz yönetimi ve destek</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Coaching Features */}
      <section className="section-padding bg-gray-900">
        <div className="container">
          <SectionTitle
            title="Koçluk Özellikleri"
            subtitle="Sunduğumuz koçluk hizmetlerinin detayları"
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coachingFeatures.map((feature, index) => (
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

      {/* Reporting System */}
      <section className="section-padding bg-gray-800">
        <div className="container">
          <SectionTitle
            title="Raporlama Sistemi"
            subtitle="Detaylı takip ve analiz raporları"
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reportingFeatures.map((feature, index) => (
              <Card key={index} className="bg-gray-700 border-gray-600">
                <CardHeader>
                  <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                  <p className="text-gray-300">{feature.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-gray-300">
                        <CheckCircle className="h-4 w-4 text-[#f7b500] mt-1 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Report */}
      <section className="section-padding bg-gray-900">
        <div className="container">
          <SectionTitle
            title="Raporlama Örneği"
            subtitle="Haftalık hedef raporu ve trend grafiği"
            className="mb-16"
          />
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gray-700 border-gray-600">
              <CardHeader>
                <CardTitle className="text-2xl text-white text-center">Haftalık Hedef Raporu</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Hedef Başarı Tablosu</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Matematik Çalışması</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 bg-gray-600 rounded-full h-2">
                            <div className="bg-[#f7b500] h-2 rounded-full" style={{width: '85%'}}></div>
                          </div>
                          <span className="text-[#f7b500] font-semibold">85%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">İngilizce Kelime</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 bg-gray-600 rounded-full h-2">
                            <div className="bg-[#f7b500] h-2 rounded-full" style={{width: '100%'}}></div>
                          </div>
                          <span className="text-[#f7b500] font-semibold">100%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Deneme Sınavı</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 bg-gray-600 rounded-full h-2">
                            <div className="bg-[#f7b500] h-2 rounded-full" style={{width: '70%'}}></div>
                          </div>
                          <span className="text-[#f7b500] font-semibold">70%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Aylık İlerleme Grafiği</h3>
                    <div className="h-32 flex items-end justify-center space-x-2">
                      {[65, 72, 68, 75, 80, 78, 85, 88].map((value, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <div
                            className="w-4 bg-[#f7b500] rounded-t"
                            style={{ height: `${(value / 100) * 120}px` }}
                          ></div>
                          <div className="text-xs text-gray-300 mt-1">{index + 1}. Hafta</div>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-gray-300 text-center mt-2">
                      Net Ortalaması: 76.4 (Geçen aya göre +8.2)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gray-800">
        <div className="container">
          <SectionTitle
            title="Sık Sorulan Sorular"
            subtitle="Koçluk sistemi hakkında merak ettikleriniz"
            className="mb-16"
          />
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="bg-gray-700 border-gray-600">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-gray-900">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <LeadForm
              title="Koçluk Sistemi Hakkında Bilgi Alın"
              subtitle="Öğrenciniz için en uygun koçluk planını hazırlayalım"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
