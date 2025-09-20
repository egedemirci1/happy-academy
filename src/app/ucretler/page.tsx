import { Metadata } from 'next';
import { SectionTitle } from '@/components/ui/section-title';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Star, Clock, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Ücretler - Happy Academy Konya | Dil Kursu, LGS, YDT Fiyatları',
  description: 'Happy Academy Konya ücret bilgileri. Dil kursları (A1-C1), LGS hazırlık, YDT Team, Junior Class ve birebir ders fiyatları. Şeffaf fiyatlandırma.',
  keywords: 'dil kursu fiyatları, LGS hazırlık ücreti, YDT Team fiyat, Konya dil kursu fiyat, Happy Academy ücretler',
};

export default function UcretlerPage() {
  const languagePricing = [
    {
      name: 'Standart',
      price: '₺2.500/ay',
      features: [
        'Haftada 2 gün ders',
        'Grup eğitimi (8-12 kişi)',
        'Temel materyaller',
        'Haftalık 1 kulüp saati',
        'Seviye tespit sınavı'
      ],
      popular: false
    },
    {
      name: 'Yoğun',
      price: '₺3.500/ay',
      features: [
        'Haftada 3 gün ders',
        'Grup eğitimi (6-10 kişi)',
        'Tüm materyaller',
        'Haftalık 2 kulüp saati',
        'Ek deneme sınavları',
        'Birebir destek (2 saat/ay)'
      ],
      popular: true
    },
    {
      name: 'Birebir',
      price: '₺150/saat',
      features: [
        'Kişiye özel program',
        'Esnek saat seçimi',
        'Özel materyaller',
        'Hızlı ilerleme',
        'Kişisel koçluk'
      ],
      popular: false
    }
  ];

  const examPricing = [
    {
      name: 'LGS Hazırlık',
      price: '₺2.500/ay',
      features: [
        '360 saat grup dersi',
        'Tüm dersler (Türkçe, Matematik, Fen, Sosyal, İngilizce)',
        'Haftalık ödev takip',
        'Aylık deneme sınavları',
        'Koçluk ve hedef planlama',
        'Veli bilgilendirme raporları'
      ]
    },
    {
      name: 'YDT Team',
      price: '₺3.500/ay',
      features: [
        '500 ders İngilizce',
        'TYT desteği',
        'Mentör öğretmen',
        'Etüt saatleri',
        'Soru çözüm günleri',
        'Psikolojik destek',
        'Takip sistemi'
      ]
    }
  ];

  const otherPricing = [
    {
      name: 'Junior Class (3-6 yaş)',
      price: '₺1.500/ay',
      features: [
        'Haftada 2 gün ders',
        'Oyun tabanlı öğrenim',
        'Duyusal etkinlikler',
        'Şarkılar ve hikâyeler',
        'Veli bilgilendirme'
      ]
    },
    {
      name: '5-8. Sınıf Akademik Destek',
      price: '₺2.000/ay',
      features: [
        'Hafta sonu 360 saat grup dersi',
        'Birebir destek seçenekleri',
        'Kulüp aktiviteleri',
        'Düzenli raporlama',
        'Veli-öğretmen görüşmeleri'
      ]
    }
  ];

  const campaigns = [
    {
      title: 'Erken Kayıt İndirimi',
      description: 'Ağustos ayına kadar kayıt olan öğrencilere %15 indirim',
      validUntil: '31 Ağustos 2024',
      discount: '%15'
    },
    {
      title: 'Kardeş İndirimi',
      description: 'Aynı aileden 2. öğrenciye %20 indirim',
      validUntil: 'Sürekli',
      discount: '%20'
    },
    {
      title: 'Matematik Yaz Kursu Çekilişi',
      description: '12 kişiye ücretsiz matematik yaz kursu eğitimi',
      validUntil: '25 Ağustos 2024',
      discount: 'Ücretsiz'
    }
  ];

  const faqs = [
    {
      question: 'Taksit seçenekleri var mı?',
      answer: 'Evet, 3, 6 ve 9 taksit seçeneklerimiz mevcuttur. Taksit oranları banka politikalarına göre değişiklik gösterebilir.'
    },
    {
      question: 'İade politikası nasıl?',
      answer: 'Ders başlamadan önce %100 iade, ders başladıktan sonra kalan derslerin %80\'i iade edilir. İade işlemi 15 iş günü içinde tamamlanır.'
    },
    {
      question: 'Telafi dersleri ücretli mi?',
      answer: 'Mazeretli devamsızlıklar için telafi dersleri ücretsizdir. Mazeretsiz devamsızlıklar için telafi dersleri ücretlidir.'
    },
    {
      question: 'Materyal ücreti ayrı mı?',
      answer: 'Tüm programlarımızda materyal ücreti aylık ücrete dahildir. Ek materyal ihtiyacı olması durumunda ayrı ücret alınabilir.'
    },
    {
      question: 'Ödeme yöntemleri neler?',
      answer: 'Nakit, kredi kartı, banka kartı ve havale/EFT ile ödeme yapabilirsiniz. Online ödeme seçenekleri de mevcuttur.'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-primary">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-montserrat">
              Ücretler
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Şeffaf fiyatlandırma ile size en uygun programı seçin
            </p>
          </div>
        </div>
      </section>

      {/* Language Pricing */}
      <section className="section-padding bg-gray-800">
        <div className="container">
          <SectionTitle
            title="Dil Kursları (A1–C1)"
            subtitle="İngilizce, Almanca, Fransızca, İspanyolca, Rusça, Felemenkçe"
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {languagePricing.map((plan, index) => (
              <Card key={index} className={`bg-gray-700 border-gray-600 ${plan.popular ? 'border-[#f7b500] relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-[#f7b500] text-black">Popüler</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-[#f7b500]">{plan.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-[#f7b500] mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full mt-6 ${plan.popular ? 'bg-[#f7b500] hover:bg-[#e6a300] text-black' : 'bg-gray-600 hover:bg-gray-500 text-white'}`}
                  >
                    Seç
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Pricing */}
      <section className="section-padding bg-gray-900">
        <div className="container">
          <SectionTitle
            title="Sınav Hazırlık Programları"
            subtitle="LGS ve YDT hazırlık programlarımız"
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {examPricing.map((plan, index) => (
              <Card key={index} className="bg-gray-700 border-gray-600">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-[#f7b500]">{plan.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-[#f7b500] mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-[#f7b500] hover:bg-[#e6a300] text-black">
                    Seç
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Other Programs */}
      <section className="section-padding bg-gray-800">
        <div className="container">
          <SectionTitle
            title="Diğer Programlar"
            subtitle="Junior Class ve akademik destek programları"
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherPricing.map((plan, index) => (
              <Card key={index} className="bg-gray-700 border-gray-600">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-[#f7b500]">{plan.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-[#f7b500] mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-[#f7b500] hover:bg-[#e6a300] text-black">
                    Seç
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Campaigns */}
      <section className="section-padding bg-gray-900">
        <div className="container">
          <SectionTitle
            title="Kampanyalar ve Çekilişler"
            subtitle="Güncel kampanyalarımızı kaçırmayın"
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {campaigns.map((campaign, index) => (
              <Card key={index} className="bg-gray-700 border-[#f7b500]">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl text-white">{campaign.title}</CardTitle>
                    <Badge className="bg-[#f7b500] text-black">{campaign.discount}</Badge>
                  </div>
                  <p className="text-gray-300">{campaign.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span>Geçerlilik: {campaign.validUntil}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gray-800">
        <div className="container">
          <SectionTitle
            title="Sık Sorulan Sorular"
            subtitle="Ücretler ve ödeme koşulları hakkında"
            className="mb-16"
          />
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-gray-700 rounded-lg">
                  <AccordionTrigger className="text-white hover:text-[#f7b500] px-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 px-6 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-900">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
              Size En Uygun Programı Bulalım
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Detaylı bilgi ve özel fiyat teklifi için bizimle iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-[#f7b500] hover:bg-[#e6a300] text-black font-semibold px-8 py-4 text-lg"
                data-analytics="cta_click"
              >
                <a href="#contact-form">
                  Ücretsiz Danışmanlık Al
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-4 text-lg"
                data-analytics="whatsapp_click"
              >
                <a href="https://wa.me/903322350202" target="_blank" rel="noopener noreferrer">
                  WhatsApp'tan Yazın
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
