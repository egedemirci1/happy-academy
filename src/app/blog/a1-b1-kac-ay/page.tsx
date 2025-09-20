import { Metadata } from 'next';
import { SectionTitle } from '@/components/ui/section-title';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'A1\'den B1\'e Kaç Ayda Ulaşılır? - Happy Academy Konya Blog',
  description: 'Dil öğrenme sürecinde seviye atlama süreleri ve etkili öğrenme stratejileri. A1\'den B1\'e ulaşmak için gereken süre ve ipuçları.',
  keywords: 'A1 B1 seviye, dil öğrenme süresi, seviye atlama, dil kursu, Konya',
};

export default function A1B1KacAyPage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="section-padding bg-gradient-primary">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center gap-2 text-[#f7b500] hover:text-[#e6a300] mb-6">
              <ArrowLeft className="h-4 w-4" />
              Blog'a Dön
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-montserrat">
              A1'den B1'e Kaç Ayda Ulaşılır?
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Dil öğrenme sürecinde seviye atlama süreleri ve etkili öğrenme stratejileri
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>15 Ağustos 2024</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>5 dk okuma</span>
              </div>
              <Badge className="bg-[#f7b500] text-black">Dil Eğitimi</Badge>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gray-700 border-gray-600">
              <CardContent className="p-8">
                <div className="prose prose-invert max-w-none">
                  <h2 className="text-2xl font-bold text-white mb-4">Ortalama Süre: 6-12 Ay</h2>
                  <p className="text-gray-300 mb-6">
                    A1'den B1 seviyesine ulaşmak için ortalama 6-12 ay süre gerekmektedir. 
                    Bu süre, öğrencinin çalışma yoğunluğu, dil öğrenme deneyimi ve 
                    kullandığı yöntemlere göre değişiklik gösterebilir.
                  </p>

                  <h2 className="text-2xl font-bold text-white mb-4">Etkili Öğrenme Stratejileri</h2>
                  <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                    <li>Günlük düzenli çalışma (en az 1 saat)</li>
                    <li>Dört beceriyi birlikte geliştirme (okuma, yazma, dinleme, konuşma)</li>
                    <li>Gerçek yaşam durumlarında pratik yapma</li>
                    <li>Dil öğrenme uygulamaları kullanma</li>
                    <li>Native speaker'larla konuşma pratiği</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-white mb-4">Seviye Atlama Kriterleri</h2>
                  <p className="text-gray-300 mb-6">
                    Her seviyede belirli kriterler bulunmaktadır. A1'den A2'ye geçmek için 
                    temel günlük konuşmaları anlayabilmeli, A2'den B1'e geçmek için ise 
                    daha karmaşık konularda kendini ifade edebilmelisiniz.
                  </p>

                  <h2 className="text-2xl font-bold text-white mb-4">Happy Academy'de Hızlandırılmış Program</h2>
                  <p className="text-gray-300 mb-6">
                    Yoğun programımızla A1'den B1'e 4-6 ayda ulaşabilirsiniz. 
                    Haftalık 3 gün ders, 2 kulüp saati ve birebir destek ile 
                    hızlı ilerleme sağlıyoruz.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
