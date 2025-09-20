import { Metadata } from 'next';
import { SectionTitle } from '@/components/ui/section-title';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'KVKK Aydınlatma Metni - Happy Academy Konya',
  description: 'Happy Academy Konya Kişisel Verilerin Korunması Kanunu (KVKK) aydınlatma metni ve gizlilik politikası.',
  keywords: 'KVKK, gizlilik, kişisel veri, aydınlatma metni, Happy Academy',
};

export default function KVKKPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-primary">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-montserrat">
              KVKK Aydınlatma Metni
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Kişisel Verilerin Korunması Kanunu kapsamında bilgilendirme
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gray-700 border-gray-600">
              <CardContent className="p-8">
                <div className="prose prose-invert max-w-none">
                  <h2 className="text-2xl font-bold text-white mb-4">1. Veri Sorumlusu</h2>
                  <p className="text-gray-300 mb-6">
                    Happy Academy Konya olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında 
                    veri sorumlusu sıfatıyla, kişisel verilerinizi aşağıda açıklanan çerçevede işleyebiliriz.
                  </p>

                  <h2 className="text-2xl font-bold text-white mb-4">2. Toplanan Kişisel Veriler</h2>
                  <p className="text-gray-300 mb-4">Aşağıdaki kişisel verilerinizi toplayabiliriz:</p>
                  <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                    <li>Kimlik bilgileri (ad, soyad, TC kimlik numarası)</li>
                    <li>İletişim bilgileri (telefon, e-posta, adres)</li>
                    <li>Eğitim bilgileri (öğrenim durumu, notlar, sınav sonuçları)</li>
                    <li>Sağlık bilgileri (engel durumu, özel ihtiyaçlar)</li>
                    <li>Mali bilgiler (ödeme bilgileri, fatura bilgileri)</li>
                    <li>Görsel ve işitsel kayıtlar (fotoğraf, video, ses kayıtları)</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-white mb-4">3. Kişisel Verilerin İşlenme Amaçları</h2>
                  <p className="text-gray-300 mb-4">Kişisel verilerinizi aşağıdaki amaçlarla işleyebiliriz:</p>
                  <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                    <li>Eğitim hizmetlerinin sunulması</li>
                    <li>Öğrenci kayıt işlemlerinin yapılması</li>
                    <li>Eğitim sürecinin takip edilmesi</li>
                    <li>Veli bilgilendirmelerinin yapılması</li>
                    <li>Mali işlemlerin gerçekleştirilmesi</li>
                    <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                    <li>İstatistiksel analizlerin yapılması</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-white mb-4">4. Kişisel Verilerin Paylaşılması</h2>
                  <p className="text-gray-300 mb-6">
                    Kişisel verilerinizi, yukarıda belirtilen amaçlarla sınırlı olmak kaydıyla, 
                    eğitim ortaklarımız, yasal merciler ve yetkili kurumlarla paylaşabiliriz.
                  </p>

                  <h2 className="text-2xl font-bold text-white mb-4">5. Veri Güvenliği</h2>
                  <p className="text-gray-300 mb-6">
                    Kişisel verilerinizin güvenliğini sağlamak için gerekli teknik ve idari 
                    tedbirleri almaktayız. Verileriniz sadece yetkili personelimiz tarafından 
                    erişilebilir durumdadır.
                  </p>

                  <h2 className="text-2xl font-bold text-white mb-4">6. Haklarınız</h2>
                  <p className="text-gray-300 mb-4">KVKK kapsamında aşağıdaki haklara sahipsiniz:</p>
                  <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                    <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                    <li>İşlenen kişisel verileriniz hakkında bilgi talep etme</li>
                    <li>İşlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                    <li>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme</li>
                    <li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması halinde bunların düzeltilmesini isteme</li>
                    <li>Belirli şartlar çerçevesinde verilerin silinmesini veya yok edilmesini isteme</li>
                    <li>Düzeltme, silme veya yok edilme işlemlerinin üçüncü kişilere bildirilmesini isteme</li>
                    <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-white mb-4">7. İletişim</h2>
                  <p className="text-gray-300 mb-4">
                    KVKK kapsamındaki taleplerinizi aşağıdaki iletişim bilgileri üzerinden iletebilirsiniz:
                  </p>
                  <div className="bg-gray-600 p-4 rounded-lg">
                    <p className="text-gray-300"><strong>E-posta:</strong> kvkk@happyacademykonya.com</p>
                    <p className="text-gray-300"><strong>Telefon:</strong> 0332 235 02 02</p>
                    <p className="text-gray-300"><strong>Adres:</strong> Nişantaş Mah. [örnek], Selçuklu / Konya</p>
                  </div>

                  <p className="text-gray-400 text-sm mt-6">
                    Bu aydınlatma metni 01.01.2024 tarihinde yürürlüğe girmiştir. 
                    Güncellemeler web sitemizde yayınlanacaktır.
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
