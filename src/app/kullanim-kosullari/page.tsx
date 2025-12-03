import { Metadata } from 'next';
import { SectionTitle } from '@/components/ui/section-title';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Kullanım Koşulları - Happy Academy Konya',
  description: 'Happy Academy Konya web sitesi kullanım koşulları ve şartları.',
  keywords: 'kullanım koşulları, şartlar, Happy Academy',
};

export default function KullanimKosullariPage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="section-padding bg-gradient-primary">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-montserrat">
              Kullanım Koşulları
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Web sitemizi kullanım koşulları ve şartları
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
                  <h2 className="text-2xl font-bold text-white mb-4">1. Genel Hükümler</h2>
                  <p className="text-gray-300 mb-6">
                    Bu web sitesi Happy Academy Konya tarafından işletilmektedir. 
                    Web sitemizi kullanarak aşağıdaki koşulları kabul etmiş sayılırsınız.
                  </p>

                  <h2 className="text-2xl font-bold text-white mb-4">2. Hizmet Kapsamı</h2>
                  <p className="text-gray-300 mb-6">
                    Web sitemiz, eğitim hizmetlerimiz hakkında bilgi vermek, 
                    iletişim kurmak ve hizmet taleplerini almak amacıyla kullanılmaktadır.
                  </p>

                  <h2 className="text-2xl font-bold text-white mb-4">3. Kullanıcı Yükümlülükleri</h2>
                  <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                    <li>Web sitesini yasalara uygun şekilde kullanmak</li>
                    <li>Başkalarının haklarını ihlal etmemek</li>
                    <li>Zararlı içerik paylaşmamak</li>
                    <li>Telif haklarına saygı göstermek</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-white mb-4">4. Sorumluluk Sınırları</h2>
                  <p className="text-gray-300 mb-6">
                    Web sitemizdeki bilgiler genel bilgilendirme amaçlıdır. 
                    Hizmetlerimizle ilgili detaylı bilgi için bizimle iletişime geçiniz.
                  </p>

                  <h2 className="text-2xl font-bold text-white mb-4">5. Değişiklikler</h2>
                  <p className="text-gray-300 mb-6">
                    Bu koşulları istediğimiz zaman değiştirme hakkımız saklıdır. 
                    Değişiklikler web sitemizde yayınlandığı tarihten itibaren geçerlidir.
                  </p>

                  <h2 className="text-2xl font-bold text-white mb-4">6. İletişim</h2>
                  <p className="text-gray-300 mb-4">
                    Sorularınız için:
                  </p>
                  <div className="bg-gray-600 p-4 rounded-lg">
                    <p className="text-gray-300"><strong>E-posta:</strong> info@happyacademykonya.com</p>
                    <p className="text-gray-300"><strong>Telefon:</strong> 0332 235 02 02</p>
                    <p className="text-gray-300"><strong>Adres:</strong> Feritpaşa Mah. İfa Sokak, Nene Hatun Parkı İçi 5/A, Selçuklu/Konya</p>
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
