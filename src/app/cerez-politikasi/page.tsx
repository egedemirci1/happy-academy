import { Metadata } from 'next';
import { SectionTitle } from '@/components/ui/section-title';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Çerez Politikası - Happy Academy Konya',
  description: 'Happy Academy Konya çerez politikası ve kullanımı hakkında bilgiler.',
  keywords: 'çerez politikası, cookie policy, Happy Academy',
};

export default function CerezPolitikasiPage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="section-padding bg-gradient-primary">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-montserrat">
              Çerez Politikası
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Web sitemizde çerez kullanımı hakkında bilgiler
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gray-700 border-gray-600">
              <CardContent className="p-8">
                <div className="prose prose-invert max-w-none">
                  <h2 className="text-2xl font-bold text-white mb-4">Çerez Nedir?</h2>
                  <p className="text-gray-300 mb-6">
                    Çerezler, web sitelerini ziyaret ettiğinizde bilgisayarınıza veya mobil cihazınıza 
                    kaydedilen küçük metin dosyalarıdır. Bu dosyalar, web sitesinin daha iyi çalışmasını 
                    sağlar ve size daha iyi bir kullanıcı deneyimi sunar.
                  </p>

                  <h2 className="text-2xl font-bold text-white mb-4">Çerez Türleri</h2>
                  <p className="text-gray-300 mb-4">Web sitemizde aşağıdaki çerez türlerini kullanıyoruz:</p>
                  <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                    <li><strong>Zorunlu Çerezler:</strong> Web sitesinin temel işlevlerini yerine getirmesi için gerekli</li>
                    <li><strong>Analitik Çerezler:</strong> Web sitesi kullanımını analiz etmek için</li>
                    <li><strong>Fonksiyonel Çerezler:</strong> Kullanıcı tercihlerini hatırlamak için</li>
                    <li><strong>Pazarlama Çerezleri:</strong> Size özel içerik göstermek için</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-white mb-4">Çerez Yönetimi</h2>
                  <p className="text-gray-300 mb-6">
                    Çerezleri tarayıcınızın ayarlarından yönetebilir veya silebilirsiniz. 
                    Ancak bazı çerezleri devre dışı bırakmanız web sitesinin işlevselliğini etkileyebilir.
                  </p>

                  <h2 className="text-2xl font-bold text-white mb-4">İletişim</h2>
                  <p className="text-gray-300 mb-4">
                    Çerez politikamız hakkında sorularınız için:
                  </p>
                  <div className="bg-gray-600 p-4 rounded-lg">
                    <p className="text-gray-300"><strong>E-posta:</strong> info@happyacademykonya.com</p>
                    <p className="text-gray-300"><strong>Telefon:</strong> 0332 235 02 02</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
