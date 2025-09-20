import { Metadata } from 'next';
import { SectionTitle } from '@/components/ui/section-title';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { EventCard } from '@/components/ui/event-card';
import { events } from '@/data/programs';
import { Calendar, Clock, Users, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Denemeler ve Etkinlikler - Happy Academy Konya | Sınav Denemeleri, Etkinlikler',
  description: 'Happy Academy Konya deneme sınavları ve etkinlikleri. LGS/YDT denemeleri, yeni dönem kutlaması, demo dersler, matematik yaz kursu çekilişi.',
  keywords: 'deneme sınavı, LGS denemesi, YDT denemesi, etkinlik, demo ders, Konya',
};

export default function DenemelerEtkinliklerPage() {
  const examSchedules = [
    {
      title: 'LGS Genel Deneme',
      date: '15 Eylül 2024',
      time: '10:00',
      type: 'exam',
      description: '8. sınıf öğrencileri için genel deneme sınavı',
      participants: '50 kişi'
    },
    {
      title: 'YDT Deneme Sınavı',
      date: '22 Eylül 2024',
      time: '14:00',
      type: 'exam',
      description: '12. sınıf öğrencileri için YDT deneme sınavı',
      participants: '30 kişi'
    },
    {
      title: 'İngilizce Seviye Tespit',
      date: '29 Eylül 2024',
      time: '11:00',
      type: 'exam',
      description: 'Tüm seviyeler için ücretsiz seviye tespit sınavı',
      participants: 'Sınırsız'
    }
  ];

  const upcomingEvents = [
    {
      title: 'Yeni Dönem Kutlaması',
      date: '17 Ağustos 2025',
      time: '18:30',
      type: 'celebration' as const,
      description: 'Yeni dönem öğrencilerimizle tanışma ve kaynaşma etkinliği',
      participants: 'Tüm öğrenciler'
    },
    {
      title: 'Demo Ders Bilgilendirmesi',
      date: '19 Ağustos 2025',
      time: '18:30',
      type: 'demo' as const,
      description: 'Ücretsiz demo derslerimizi deneyimleme fırsatı',
      participants: 'Kayıt olanlar'
    },
    {
      title: 'Matematik Yaz Kursu Çekilişi',
      date: '25 Ağustos 2025',
      time: '14:00',
      type: 'other' as const,
      description: '12 kişiye ücretsiz matematik yaz kursu eğitimi',
      participants: 'Çekiliş katılımcıları'
    }
  ];

  const eventTypes = {
    exam: { color: 'bg-red-500', label: 'Sınav' },
    celebration: { color: 'bg-green-500', label: 'Kutlama' },
    demo: { color: 'bg-blue-500', label: 'Demo' },
    other: { color: 'bg-purple-500', label: 'Etkinlik' }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-primary">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-montserrat">
              Denemeler ve Etkinlikler
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Sınav denemeleri, etkinlikler ve özel programlar
            </p>
          </div>
        </div>
      </section>

      {/* Exam Schedules */}
      <section className="section-padding bg-gray-800">
        <div className="container">
          <SectionTitle
            title="Deneme Sınavları"
            subtitle="Düzenli deneme sınavları ile kendinizi test edin"
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {examSchedules.map((exam, index) => (
              <Card key={index} className="bg-gray-700 border-gray-600">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl text-white">{exam.title}</CardTitle>
                    <Badge className={`${eventTypes.exam.color} text-white`}>
                      {eventTypes.exam.label}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{exam.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{exam.time}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{exam.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                    <Users className="h-4 w-4" />
                    <span>Katılımcı: {exam.participants}</span>
                  </div>
                  <Button className="w-full bg-[#f7b500] hover:bg-[#e6a300] text-black font-semibold">
                    Kayıt Ol
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-gray-900">
        <div className="container">
          <SectionTitle
            title="Yaklaşan Etkinlikler"
            subtitle="Özel etkinliklerimizi takip edin"
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <EventCard
                key={index}
                event={{
                  id: `event-${index}`,
                  title: event.title,
                  date: event.date,
                  time: event.time,
                  description: event.description,
                  type: event.type
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Event Calendar */}
      <section className="section-padding bg-gray-800">
        <div className="container">
          <SectionTitle
            title="Etkinlik Takvimi"
            subtitle="Aylık etkinlik programımız"
            className="mb-16"
          />
          <Card className="bg-gray-700 border-gray-600">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                {/* Calendar Header */}
                <div className="text-center font-semibold text-white">Pazartesi</div>
                <div className="text-center font-semibold text-white">Salı</div>
                <div className="text-center font-semibold text-white">Çarşamba</div>
                <div className="text-center font-semibold text-white">Perşembe</div>
                <div className="text-center font-semibold text-white">Cuma</div>
                <div className="text-center font-semibold text-white">Cumartesi</div>
                <div className="text-center font-semibold text-white">Pazar</div>
                
                {/* Calendar Days */}
                {Array.from({ length: 35 }, (_, i) => {
                  const day = i - 6; // Start from -6 to show previous month's last days
                  const isCurrentMonth = day > 0 && day <= 31;
                  const hasEvent = day === 15 || day === 22 || day === 29;
                  
                  return (
                    <div
                      key={i}
                      className={`h-20 p-2 border border-gray-600 rounded ${
                        isCurrentMonth ? 'bg-gray-600' : 'bg-gray-800'
                      } ${hasEvent ? 'border-[#f7b500]' : ''}`}
                    >
                      <div className={`text-sm ${isCurrentMonth ? 'text-white' : 'text-gray-500'}`}>
                        {day > 0 ? day : ''}
                      </div>
                      {hasEvent && (
                        <div className="w-2 h-2 bg-[#f7b500] rounded-full mt-1"></div>
                      )}
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-6 flex items-center justify-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#f7b500] rounded-full"></div>
                  <span className="text-gray-300 text-sm">Etkinlik günü</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Registration Info */}
      <section className="section-padding bg-gray-900">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
              Etkinliklere Nasıl Katılabilirsiniz?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#f7b500] rounded-full mb-4">
                  <Calendar className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">1. Kayıt Olun</h3>
                <p className="text-gray-300">Etkinlik kartındaki "Kayıt Ol" butonuna tıklayın</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#f7b500] rounded-full mb-4">
                  <Users className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">2. Onay Bekleyin</h3>
                <p className="text-gray-300">Kayıt onayınızı e-posta ile alacaksınız</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#f7b500] rounded-full mb-4">
                  <Award className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">3. Katılın</h3>
                <p className="text-gray-300">Belirtilen tarih ve saatte etkinliğe katılın</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
              Etkinliklerden Haberdar Olun
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Yeni etkinliklerimizi kaçırmamak için bizi takip edin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-[#f7b500] hover:bg-[#e6a300] text-black font-semibold px-8 py-4 text-lg"
                data-analytics="cta_click"
              >
                <a href="https://wa.me/903322350202" target="_blank" rel="noopener noreferrer">
                  WhatsApp'tan Yazın
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-4 text-lg"
                data-analytics="instagram_click"
              >
                <a href="https://instagram.com/happyacademykonya" target="_blank" rel="noopener noreferrer">
                  Instagram'da Takip Edin
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
