export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image?: string;
  tags: string[];
  featured?: boolean;
}

export const blogCategories = [
  {
    id: 'egitim-ipuclari',
    name: 'Eğitim İpuçları',
    description: 'Öğrenme teknikleri ve başarı stratejileri',
    icon: '💡',
    color: 'from-blue-500 to-purple-600'
  },
  {
    id: 'dil-ogrenme',
    name: 'Dil Öğrenme',
    description: 'Yabancı dil öğrenme rehberleri',
    icon: '🌍',
    color: 'from-green-500 to-teal-600'
  },
  {
    id: 'sinav-hazirlik',
    name: 'Sınav Hazırlık',
    description: 'LGS, YDT ve diğer sınavlar için ipuçları',
    icon: '📚',
    color: 'from-orange-500 to-red-600'
  },
  {
    id: 'motivasyon',
    name: 'Motivasyon',
    description: 'Öğrenci ve veli motivasyon yazıları',
    icon: '🚀',
    color: 'from-pink-500 to-rose-600'
  }
];

export const blogPosts: BlogPost[] = [
  // Eğitim İpuçları (10 yazı)
  {
    id: 'etkili-ogrenme-teknikleri',
    title: 'Etkili Öğrenme Teknikleri: Beyninizi Nasıl Daha İyi Kullanırsınız?',
    excerpt: 'Beyin bilimi araştırmalarına dayalı, kanıtlanmış öğrenme teknikleri ile daha hızlı ve kalıcı öğrenme sağlayın.',
    content: `Öğrenme süreci, beynimizin en karmaşık işlevlerinden biridir. Son yıllarda yapılan nörobilim araştırmaları, öğrenme verimliliğimizi artıracak birçok teknik ortaya çıkarmıştır.

## Spaced Repetition (Aralıklı Tekrar) Tekniği

Bu teknik, öğrenilen bilgilerin belirli aralıklarla tekrar edilmesini önerir. Hermann Ebbinghaus'un unutma eğrisi araştırmasına göre, bilgiler öğrenildikten sonra hızla unutulur. Ancak düzenli tekrarlarla bu süreç yavaşlar.

**Nasıl Uygulanır:**
- İlk tekrar: 1 gün sonra
- İkinci tekrar: 3 gün sonra  
- Üçüncü tekrar: 1 hafta sonra
- Dördüncü tekrar: 2 hafta sonra

## Active Recall (Aktif Hatırlama)

Pasif okuma yerine aktif hatırlama teknikleri kullanmak öğrenme verimliliğini %50'ye kadar artırabilir.

**Uygulama Yöntemleri:**
- Öğrendiklerinizi kendi kelimelerinizle anlatın
- Sorular sorarak kendinizi test edin
- Öğrendiklerinizi başkalarına öğretin
- Mind mapping (zihin haritası) oluşturun

## Interleaving (Karışık Öğrenme)

Farklı konuları karıştırarak öğrenmek, tek bir konuya odaklanmaktan daha etkilidir.

**Avantajları:**
- Problem çözme becerilerini geliştirir
- Konular arası bağlantıları güçlendirir
- Uzun vadeli hafızaya daha iyi kaydeder

## Pomodoro Tekniği

25 dakikalık çalışma blokları ile 5 dakikalık molalar vererek odaklanma sürenizi artırın.

**Uygulama:**
1. 25 dakika odaklanarak çalışın
2. 5 dakika mola verin
3. 4 pomodoro sonrası 15-30 dakika uzun mola
4. Tekrar edin

Bu teknikler, öğrenme sürecinizi daha verimli hale getirecek ve uzun vadeli başarı sağlayacaktır.`,
    category: 'egitim-ipuclari',
    author: 'Dr. Ayşe Yılmaz',
    date: '2024-01-15',
    readTime: '5 dk',
    tags: ['öğrenme', 'beyin', 'teknik', 'verimlilik'],
    featured: true
  },
  {
    id: 'zaman-yonetimi',
    title: 'Öğrenciler İçin Zaman Yönetimi: Ders Çalışma Programı Nasıl Hazırlanır?',
    excerpt: 'Etkili zaman yönetimi ile hem derslerinize hem de sosyal hayatınıza zaman ayırmanın sırları.',
    content: `Zaman yönetimi, akademik başarının en önemli unsurlarından biridir. Doğru planlama ile hem derslerinize hem de sosyal hayatınıza yeterli zaman ayırabilirsiniz.

## Zaman Yönetimi Prensipleri

### 1. Önceliklendirme Matrisi
Eisenhower Matrisi'ni kullanarak görevlerinizi kategorize edin:
- **Acil ve Önemli**: Hemen yapılması gerekenler
- **Önemli ama Acil Değil**: Planlanması gerekenler  
- **Acil ama Önemli Değil**: Başkalarına devredilebilir
- **Ne Acil Ne Önemli**: Elimine edilebilir

### 2. SMART Hedefler
- **S**pecific (Spesifik)
- **M**easurable (Ölçülebilir)
- **A**chievable (Ulaşılabilir)
- **R**elevant (İlgili)
- **T**ime-bound (Zaman sınırlı)

## Haftalık Çalışma Programı Örneği

**Pazartesi-Cuma (Okul Günleri):**
- 16:00-17:00: Günlük tekrar
- 17:00-18:00: Ödevler
- 18:00-19:00: Yeni konu çalışması
- 19:00-20:00: Serbest zaman

**Hafta Sonu:**
- 09:00-12:00: Yoğun çalışma
- 14:00-16:00: Test çözme
- 16:00-18:00: Sosyal aktiviteler

## Verimlilik İpuçları

1. **En Verimli Saatlerinizi Belirleyin**: Kimi sabah, kimi akşam daha verimli çalışır
2. **Çalışma Ortamınızı Optimize Edin**: Dikkat dağıtıcıları uzaklaştırın
3. **Teknolojiyi Akıllıca Kullanın**: Pomodoro uygulamaları, zaman takip uygulamaları
4. **Düzenli Molalar Verin**: Her 45-60 dakikada 10-15 dakika mola

Bu stratejileri uygulayarak hem akademik başarınızı artırabilir hem de dengeli bir yaşam sürebilirsiniz.`,
    category: 'egitim-ipuclari',
    author: 'Mehmet Kaya',
    date: '2024-01-10',
    readTime: '4 dk',
    tags: ['zaman yönetimi', 'program', 'verimlilik']
  },
  {
    id: 'online-egitim-ipuclari',
    title: 'Online Eğitimde Başarılı Olmanın 10 Altın Kuralı',
    excerpt: 'Uzaktan eğitim sürecinde verimliliğinizi artıracak pratik öneriler.',
    content: `Online eğitim, pandemi sonrası eğitim sisteminin ayrılmaz bir parçası haline geldi. Bu süreçte başarılı olmak için bazı temel kuralları bilmek gerekiyor.

## 1. Düzenli Çalışma Ortamı Hazırlayın

**Fiziksel Ortam:**
- Sessiz ve dikkat dağıtıcısız bir alan
- Yeterli aydınlatma
- Ergonomik sandalye ve masa
- Temiz ve düzenli çalışma alanı

## 2. Teknoloji Altyapısını Kontrol Edin

**Gerekli Teknolojiler:**
- Stabil internet bağlantısı
- Kaliteli webcam ve mikrofon
- Güncel tarayıcı ve uygulamalar
- Yedek internet bağlantısı

## 3. Aktif Katılım Sağlayın

**Katılım Stratejileri:**
- Sorular sorun
- Tartışmalara katılın
- Notlar alın
- Geri bildirim verin

## 4. Zaman Yönetimi

**Online Eğitim İçin:**
- Ders saatlerini takvimde işaretleyin
- Önceden hazırlık yapın
- Mola saatlerini planlayın
- Ödevleri zamanında teslim edin

## 5. Sosyal Bağlantıları Koruyun

**Sosyal Etkileşim:**
- Sınıf arkadaşlarıyla iletişim kurun
- Grup çalışmalarına katılın
- Online etkinliklere katılın
- Mentorluk ilişkileri geliştirin

## 6. Öz Disiplin Geliştirin

**Disiplin Stratejileri:**
- Günlük rutinler oluşturun
- Hedefler belirleyin
- İlerlemenizi takip edin
- Kendinizi ödüllendirin

## 7. Dijital Okuryazarlık

**Teknik Beceriler:**
- Platform özelliklerini öğrenin
- Dosya paylaşım sistemlerini kullanın
- Online araştırma tekniklerini geliştirin
- Dijital güvenlik kurallarını uygulayın

## 8. Sağlıklı Yaşam Alışkanlıkları

**Fiziksel ve Mental Sağlık:**
- Düzenli egzersiz yapın
- Sağlıklı beslenin
- Yeterli uyku alın
- Stres yönetimi teknikleri uygulayın

## 9. Geri Bildirim Alın ve Verin

**Geri Bildirim Süreci:**
- Öğretmenlerden düzenli geri bildirim isteyin
- Akran değerlendirmelerine katılın
- Kendi performansınızı değerlendirin
- Sürekli iyileştirme yapın

## 10. Gelecek Odaklı Düşünün

**Uzun Vadeli Planlama:**
- Kariyer hedeflerinizi belirleyin
- Sertifika programlarına katılın
- Profesyonel ağınızı genişletin
- Sürekli öğrenme alışkanlığı edinin

Bu kuralları uygulayarak online eğitim sürecinde maksimum verimlilik elde edebilirsiniz.`,
    category: 'egitim-ipuclari',
    author: 'Dr. Mehmet Özkan',
    date: '2024-01-07',
    readTime: '8 dk',
    tags: ['online eğitim', 'verimlilik', 'uzaktan eğitim'],
    featured: true
  },
  {
    id: 'not-tutma-teknikleri',
    title: 'Etkili Not Tutma Teknikleri: Cornell Metodu ve Diğer Yöntemler',
    excerpt: 'Derslerde aldığınız notları daha verimli hale getirmek için kanıtlanmış not tutma teknikleri.',
    content: `Not tutma, öğrenme sürecinin en kritik aşamalarından biridir. Doğru tekniklerle not almak, hem ders sırasında odaklanmanızı sağlar hem de sonradan tekrar yaparken size büyük kolaylık sağlar.

## Cornell Not Tutma Metodu

Bu yöntem, Cornell Üniversitesi'nde geliştirilmiş ve dünya çapında yaygın olarak kullanılan bir tekniktir.

**Sayfa Düzeni:**
- Sol taraf: Anahtar kelimeler ve sorular (%25)
- Sağ taraf: Detaylı notlar (%75)  
- Alt kısım: Özet (%5)

**Avantajları:**
- Aktif öğrenmeyi teşvik eder
- Tekrar yapmayı kolaylaştırır
- Bilgileri organize eder

## Mind Mapping (Zihin Haritası)

Tony Buzan tarafından geliştirilen bu teknik, bilgileri görsel olarak organize eder.

**Nasıl Yapılır:**
1. Sayfanın ortasına ana konuyu yazın
2. Ana konudan dallar çıkarın
3. Her dalda alt konuları belirtin
4. Renkler ve semboller kullanın

## Outline Metodu

Geleneksel not tutma yöntemidir ve hiyerarşik yapıyı korur.

**Yapısı:**
I. Ana Başlık
   A. Alt Başlık
      1. Detay
      2. Detay
   B. Alt Başlık
II. Ana Başlık

## Charting Metodu

Tablo formatında not tutma yöntemidir.

**Kullanım Alanları:**
- Karşılaştırmalı bilgiler
- Tarihsel olaylar
- Sınıflandırma gerektiren konular

## Sentence Metodu

Her cümleyi ayrı satırda yazma yöntemidir.

**Avantajları:**
- Hızlı not alma
- Detaylı bilgi kaydı
- Kolay takip

## Not Tutma İpuçları

1. **Aktif Dinleme**: Sadece yazmak değil, anlamak için dinleyin
2. **Kısaltmalar Kullanın**: Zaman kazanmak için kendi kısaltmalarınızı oluşturun
3. **Renkli Kalemler**: Önemli bilgileri vurgulamak için kullanın
4. **Düzenli Tekrar**: Notlarınızı düzenli olarak gözden geçirin
5. **Soru Sorun**: Anlamadığınız yerleri işaretleyin

Bu teknikleri uygulayarak not tutma becerinizi geliştirebilir ve öğrenme verimliliğinizi artırabilirsiniz.`,
    category: 'egitim-ipuclari',
    author: 'Öğr. Gör. Zeynep Aktaş',
    date: '2024-01-05',
    readTime: '6 dk',
    tags: ['not tutma', 'teknik', 'verimlilik', 'öğrenme']
  },
  {
    id: 'sinav-kaygisi-yonetimi',
    title: 'Sınav Kaygısını Yenmenin 8 Etkili Yolu',
    excerpt: 'Sınav öncesi ve sınav sırasında yaşanan kaygıyı kontrol altına almanın bilimsel yöntemleri.',
    content: `Sınav kaygısı, öğrencilerin en sık karşılaştığı problemlerden biridir. Bu kaygı, performansı olumsuz etkileyebilir ve öğrenilen bilgilerin sınavda kullanılmasını engelleyebilir.

## Sınav Kaygısının Nedenleri

**Fiziksel Nedenler:**
- Yetersiz uyku
- Kötü beslenme
- Hareketsizlik
- Kafein fazlalığı

**Psikolojik Nedenler:**
- Mükemmeliyetçilik
- Başarısızlık korkusu
- Sosyal baskı
- Geçmiş olumsuz deneyimler

## Kaygı Yönetimi Teknikleri

### 1. Nefes Egzersizleri

**4-7-8 Tekniği:**
- 4 saniye nefes alın
- 7 saniye nefesi tutun
- 8 saniyede nefesi verin
- 3-4 kez tekrarlayın

### 2. Progressive Muscle Relaxation

**Uygulama:**
1. Her kas grubunu 5 saniye gerin
2. 10 saniye gevşetin
3. Ayaklardan başlayarak yukarı çıkın
4. Tüm vücudu gevşetin

### 3. Mindfulness Meditasyonu

**Temel Uygulama:**
- Rahat bir pozisyonda oturun
- Gözlerinizi kapatın
- Nefesinize odaklanın
- Dikkatiniz dağılırsa tekrar nefese dönün

### 4. Pozitif Self-Talk

**Olumlu İç Konuşma:**
- "Hazırlandım ve elimden geleni yapacağım"
- "Bu sınav benim değerimi belirlemez"
- "Hata yapmak öğrenmenin bir parçasıdır"

### 5. Görselleştirme Tekniği

**Başarı Senaryosu:**
1. Sınavı başarıyla tamamladığınızı hayal edin
2. Kendinizi sakin ve odaklanmış görün
3. Soruları kolayca çözdüğünüzü düşünün
4. Bu görüntüyü günde 5-10 dakika tekrarlayın

### 6. Çalışma Stratejileri

**Etkili Hazırlık:**
- Erken başlayın
- Düzenli tekrar yapın
- Deneme sınavları çözün
- Zayıf konuları belirleyin

### 7. Sınav Günü Stratejileri

**Sınav Öncesi:**
- Erken uyanın
- Hafif kahvaltı yapın
- Sakin müzik dinleyin
- Pozitif düşünün

**Sınav Sırasında:**
- Derin nefes alın
- Soruları dikkatli okuyun
- Zor soruları atlayın
- Zamanınızı kontrol edin

### 8. Profesyonel Destek

**Ne Zaman Yardım Alınmalı:**
- Kaygı günlük yaşamı etkiliyorsa
- Fiziksel belirtiler şiddetliyse
- Kendi başınıza çözemiyorsanız
- Uzun süre devam ediyorsa

## Uzun Vadeli Stratejiler

1. **Düzenli Egzersiz**: Endorfin salınımını artırır
2. **Sağlıklı Beslenme**: Beyin fonksiyonlarını destekler
3. **Yeterli Uyku**: Hafıza ve konsantrasyonu güçlendirir
4. **Sosyal Destek**: Aile ve arkadaşlardan destek alın
5. **Hobi Edinin**: Stres azaltıcı aktiviteler yapın

Bu teknikleri düzenli olarak uygulayarak sınav kaygınızı kontrol altına alabilir ve performansınızı artırabilirsiniz.`,
    category: 'egitim-ipuclari',
    author: 'Psikolog Dr. Elif Yılmaz',
    date: '2024-01-03',
    readTime: '7 dk',
    tags: ['sınav kaygısı', 'stres', 'psikoloji', 'başarı']
  },

  // Dil Öğrenme (10 yazı)
  {
    id: 'ingilizce-konusma-pratikleri',
    title: 'İngilizce Konuşma Korkusunu Yenmenin 7 Yolu',
    excerpt: 'Yabancı dil konuşma endişenizi yenmek ve akıcı konuşma becerisi geliştirmek için pratik ipuçları.',
    content: `İngilizce konuşma korkusu, dil öğrenenlerin en büyük engellerinden biridir. Bu korkuyu yenmek ve akıcı konuşma becerisi geliştirmek için bazı etkili stratejiler bulunmaktadır.

## Konuşma Korkusunun Nedenleri

**Temel Nedenler:**
- Hata yapma korkusu
- Eleştirilme endişesi
- Mükemmeliyetçilik
- Yetersizlik hissi
- Geçmiş olumsuz deneyimler

## Korkuyu Yenme Stratejileri

### 1. Küçük Adımlarla Başlayın

**Başlangıç Seviyesi:**
- Kendi kendinize konuşun
- Aynada pratik yapın
- Sesli kitap okuyun
- Şarkı söyleyin

### 2. Güvenli Ortamlar Bulun

**Pratik Alanları:**
- Dil değişim grupları
- Online konuşma partnerleri
- Dil kursları
- Arkadaş çevresi

### 3. Hata Yapmayı Normal Karşılayın

**Hata Yapmanın Faydaları:**
- Öğrenme sürecinin parçasıdır
- Geri bildirim sağlar
- Güven artırır
- Gerçekçi beklentiler oluşturur

### 4. Günlük Konuşma Pratiği

**Günlük Rutinler:**
- Sabah rutininizi İngilizce anlatın
- Gününüzü İngilizce özetleyin
- Düşüncelerinizi İngilizce ifade edin
- İç konuşmanızı İngilizce yapın

### 5. Kelime Dağarcığınızı Genişletin

**Kelime Öğrenme Stratejileri:**
- Günlük kelime hedefi belirleyin
- Kelimeleri cümle içinde kullanın
- Eş anlamlıları öğrenin
- Kelime oyunları oynayın

### 6. Telaffuz Çalışması

**Telaffuz Geliştirme:**
- Phonetic alphabet öğrenin
- Tongue twisters pratik yapın
- Native speaker'ları dinleyin
- Kayıt yaparak kendinizi dinleyin

### 7. Pozitif Zihniyet Geliştirin

**Olumlu Düşünce:**
- "Herkes hata yapar"
- "Öğrenme süreci devam ediyor"
- "Her konuşma bir ilerleme"
- "Mükemmel olmak zorunda değilim"

## Pratik Uygulama Önerileri

### Günlük Konuşma Egzersizleri

**5 Dakikalık Pratik:**
1. Gününüzü İngilizce anlatın
2. Sevdiğiniz bir konu hakkında konuşun
3. Geçmiş bir deneyimi paylaşın
4. Gelecek planlarınızı açıklayın

### Haftalık Hedefler

**Haftalık Plan:**
- Pazartesi: Kendi kendinize konuşun
- Salı: Online partner bulun
- Çarşamba: Dil değişim grubuna katılın
- Perşembe: Podcast dinleyip tekrar edin
- Cuma: Video çekip kendinizi izleyin
- Cumartesi: Arkadaşınızla İngilizce konuşun
- Pazar: Haftayı İngilizce özetleyin

## Teknoloji Destekli Öğrenme

**Faydalı Uygulamalar:**
- HelloTalk: Dil değişimi
- Tandem: Konuşma partneri
- Cambly: Native speaker'larla konuşma
- Speechling: Telaffuz pratiği

## Motivasyonu Koruma

**Motivasyon Stratejileri:**
- Küçük başarıları kutlayın
- İlerlemenizi kaydedin
- Hedefler belirleyin
- Ödüller verin

Bu stratejileri düzenli olarak uygulayarak İngilizce konuşma korkunuzu yenebilir ve akıcı konuşma becerisi geliştirebilirsiniz.`,
    category: 'dil-ogrenme',
    author: 'Sarah Johnson',
    date: '2024-01-12',
    readTime: '6 dk',
    tags: ['İngilizce', 'konuşma', 'pratik', 'güven'],
    featured: true
  },
  {
    id: 'kelime-ogrenme-teknikleri',
    title: 'Kelime Öğrenme Teknikleri: 100 Kelimeyi 1 Haftada Nasıl Öğrenirsiniz?',
    excerpt: 'Bilimsel yöntemlerle kelime öğrenme hızınızı artırın ve uzun vadeli hafızaya kaydedin.',
    content: `Kelime öğrenme, dil öğrenmenin temel taşlarından biridir. Doğru tekniklerle günde 15-20 kelime öğrenerek haftada 100 kelimeye ulaşabilirsiniz.

## Spaced Repetition (Aralıklı Tekrar)

Bu teknik, Hermann Ebbinghaus'un unutma eğrisi araştırmasına dayanır.

**Tekrar Programı:**
- 1. gün: Öğrenme
- 2. gün: İlk tekrar
- 4. gün: İkinci tekrar
- 7. gün: Üçüncü tekrar
- 14. gün: Dördüncü tekrar
- 30. gün: Beşinci tekrar

## Active Recall (Aktif Hatırlama)

Pasif okuma yerine aktif hatırlama teknikleri kullanın.

**Uygulama Yöntemleri:**
- Flashcard kullanın
- Kendinizi test edin
- Kelimeleri cümle içinde kullanın
- Başkalarına öğretin

## Contextual Learning (Bağlamsal Öğrenme)

Kelimeleri izole olarak değil, bağlam içinde öğrenin.

**Bağlamsal Öğrenme Stratejileri:**
- Hikayeler oluşturun
- Cümleler kurun
- Diyaloglar yazın
- Senaryolar oluşturun

## Mnemonic Techniques (Hafıza Teknikleri)

**Akrostiş Tekniği:**
- Kelimenin ilk harflerini kullanın
- Anlamlı cümleler oluşturun
- Görsel bağlantılar kurun

**Rhyme Technique (Kafiye Tekniği):**
- Kelimeleri kafiyeli cümlelerle öğrenin
- Şarkılar oluşturun
- Ritim kullanın

## Visual Learning (Görsel Öğrenme)

**Görsel Teknikler:**
- Mind mapping
- Resimlerle eşleştirme
- Renkli kodlama
- Görsel hikayeler

## Audio Learning (Sesli Öğrenme)

**Sesli Teknikler:**
- Telaffuz pratiği
- Sesli tekrar
- Müzikle öğrenme
- Podcast dinleme

## Haftalık Kelime Öğrenme Planı

**Günlük Rutin (15-20 kelime):**

**Sabah (30 dakika):**
- 10 yeni kelime öğrenin
- Flashcard hazırlayın
- Telaffuz pratiği yapın

**Öğle (20 dakika):**
- Sabahki kelimeleri tekrar edin
- Cümleler kurun
- Kendinizi test edin

**Akşam (25 dakika):**
- Günlük kelimeleri tekrar edin
- Hikaye oluşturun
- Geçmiş kelimeleri gözden geçirin

## Teknoloji Destekli Öğrenme

**Faydalı Uygulamalar:**
- Anki: Spaced repetition
- Quizlet: Flashcard
- Memrise: Görsel öğrenme
- Duolingo: Gamification

## Kelime Kategorileri

**Öncelik Sırası:**
1. **Temel Kelimeler**: Günlük hayatta sık kullanılan
2. **Akademik Kelimeler**: Okul ve iş hayatında gerekli
3. **Uzmanlık Kelimeleri**: Belirli alanlara özel
4. **İleri Seviye**: Karmaşık ve soyut kavramlar

## Ölçme ve Değerlendirme

**Haftalık Test:**
- Öğrenilen kelimeleri test edin
- Zayıf kelimeleri belirleyin
- Tekrar programını güncelleyin
- İlerlemenizi kaydedin

## Motivasyonu Koruma

**Motivasyon Stratejileri:**
- Küçük hedefler belirleyin
- Başarıları kutlayın
- Çeşitlilik sağlayın
- Sosyal öğrenme yapın

Bu teknikleri düzenli olarak uygulayarak kelime öğrenme hızınızı artırabilir ve uzun vadeli hafızaya kaydedebilirsiniz.`,
    category: 'dil-ogrenme',
    author: 'Prof. Dr. Ali Demir',
    date: '2024-01-08',
    readTime: '7 dk',
    tags: ['kelime', 'hafıza', 'teknik', 'hız']
  },
  {
    id: 'yabanci-dil-ogrenme-stratejileri',
    title: 'Yabancı Dil Öğrenme Stratejileri: Hangi Yöntem Size Uygun?',
    excerpt: 'Farklı öğrenme stillerine göre en etkili dil öğrenme yöntemleri.',
    content: `Yabancı dil öğrenme sürecinde başarılı olmak için kendi öğrenme stilinizi bilmek ve ona uygun stratejiler geliştirmek çok önemlidir.

## Öğrenme Stilleri

### Görsel Öğrenenler
**Özellikler:**
- Resimlerle öğrenmeyi tercih ederler
- Renkli notlar alırlar
- Grafik ve şemaları severler

**Stratejiler:**
- Mind mapping kullanın
- Renkli flashcard'lar hazırlayın
- Video içerikleri tercih edin
- Görsel sözlükler kullanın

### İşitsel Öğrenenler
**Özellikler:**
- Sesli içerikleri tercih ederler
- Müzikle öğrenmeyi severler
- Telaffuz konusunda başarılıdırlar

**Stratejiler:**
- Podcast dinleyin
- Sesli kitaplar kullanın
- Şarkılarla öğrenin
- Konuşma pratiği yapın

### Kinestetik Öğrenenler
**Özellikler:**
- Hareket halindeyken öğrenirler
- Pratik yapmayı severler
- Deneyimleyerek öğrenirler

**Stratejiler:**
- Rol yapma oyunları
- Fiziksel aktivitelerle öğrenme
- Pratik odaklı yaklaşım
- Hareketli öğrenme teknikleri

## Dil Öğrenme Yöntemleri

### Communicative Approach (İletişimsel Yaklaşım)
**Temel İlkeler:**
- Gerçek iletişim odaklı
- Hata yapmaktan korkmaz
- Bağlam içinde öğrenme
- Etkileşimli aktiviteler

### Task-Based Learning (Görev Tabanlı Öğrenme)
**Uygulama:**
- Gerçek görevler verin
- Problem çözme odaklı
- İşbirlikçi öğrenme
- Sonuç odaklı yaklaşım

### Immersion Method (Daldırma Yöntemi)
**Stratejiler:**
- Çevreyi hedef dilde oluşturun
- Medya içeriklerini hedef dilde tüketin
- Günlük rutinleri hedef dilde yapın
- Düşüncelerinizi hedef dilde ifade edin

## Teknoloji Destekli Öğrenme

### AI Destekli Uygulamalar
**Faydalı Araçlar:**
- ChatGPT ile konuşma pratiği
- Duolingo ile gamification
- Babbel ile yapılandırılmış öğrenme
- Rosetta Stone ile immersion

### Online Platformlar
**Önerilen Siteler:**
- Coursera: Akademik kurslar
- Udemy: Pratik kurslar
- YouTube: Ücretsiz içerikler
- Netflix: Orijinal içerikler

## Motivasyon Stratejileri

### Hedef Belirleme
**SMART Hedefler:**
- Spesifik: Net ve belirgin
- Ölçülebilir: İlerleme takip edilebilir
- Ulaşılabilir: Gerçekçi beklentiler
- İlgili: Kişisel değerlerle uyumlu
- Zaman sınırlı: Belirli tarihler

### Ödül Sistemi
**Motivasyon Teknikleri:**
- Küçük başarıları kutlayın
- Kendinize ödüller verin
- İlerlemenizi kaydedin
- Sosyal paylaşım yapın

Bu stratejileri kendi öğrenme stilinize göre uyarlayarak dil öğrenme sürecinizi daha verimli hale getirebilirsiniz.`,
    category: 'dil-ogrenme',
    author: 'Prof. Dr. Ayşe Demir',
    date: '2024-01-06',
    readTime: '7 dk',
    tags: ['dil öğrenme', 'strateji', 'yöntem']
  },
  {
    id: 'telaffuz-gelistirme',
    title: 'Telaffuz Geliştirme: Native Speaker Gibi Konuşmanın Sırları',
    excerpt: 'Yabancı dilde doğru telaffuz öğrenmek için kanıtlanmış teknikler ve pratik öneriler.',
    content: `Telaffuz, yabancı dil öğrenmenin en zorlu yönlerinden biridir. Ancak doğru tekniklerle native speaker seviyesinde telaffuz geliştirmek mümkündür.

## Telaffuz Öğrenmenin Temelleri

### Phonetic Alphabet (Fonetik Alfabe)
**IPA Sembolleri:**
- /θ/ - "th" sesi (think)
- /ð/ - "th" sesi (this)
- /r/ - R sesi (red)
- /l/ - L sesi (light)

**Öğrenme Stratejileri:**
- IPA tablosunu ezberleyin
- Ses örneklerini dinleyin
- Aynada dudak pozisyonlarını izleyin
- Kayıt yaparak kendinizi dinleyin

### Mouth Positioning (Ağız Pozisyonu)
**Temel Pozisyonlar:**
- Dudaklar: Yuvarlak, düz, gerilmiş
- Dil: Ön, orta, arka pozisyonlar
- Çene: Açık, kapalı, yarı açık
- Ses telleri: Titreşimli, titreşimsiz

## Telaffuz Geliştirme Teknikleri

### Shadowing (Gölgeleme) Tekniği
**Uygulama:**
1. Native speaker'ı dinleyin
2. Aynı anda tekrar edin
3. Ritim ve tonlamayı taklit edin
4. Hızı artırarak pratik yapın

### Minimal Pairs (Minimal Çiftler)
**Örnekler:**
- ship / sheep
- bit / beat
- cat / cut
- pen / pan

**Pratik Yöntemi:**
- Çiftleri karşılaştırın
- Farkları vurgulayın
- Tekrar tekrar pratik yapın
- Kayıt yaparak kontrol edin

### Tongue Twisters (Dil Sürçmeleri)
**İngilizce Örnekler:**
- "She sells seashells by the seashore"
- "Peter Piper picked a peck of pickled peppers"
- "How much wood would a woodchuck chuck"

**Faydaları:**
- Dil kaslarını güçlendirir
- Hızlı konuşma becerisi geliştirir
- Zor sesleri öğretir
- Eğlenceli pratik sağlar

## Teknoloji Destekli Telaffuz

### Speech Recognition Apps
**Önerilen Uygulamalar:**
- ELSA Speak: AI destekli telaffuz
- Speechling: Native speaker geri bildirimi
- Forvo: Telaffuz sözlüğü
- Google Translate: Ses tanıma

### Recording and Analysis
**Kendi Kendinizi Değerlendirme:**
- Düzenli kayıt yapın
- Native speaker ile karşılaştırın
- Zayıf noktaları belirleyin
- Hedefli pratik yapın

## Yaygın Telaffuz Hataları

### Türkçe Konuşanlar İçin
**Sık Yapılan Hatalar:**
- "th" sesini "t" veya "d" ile karıştırma
- "r" sesini yuvarlama
- "w" ve "v" seslerini karıştırma
- Vurgu yerlerini yanlış kullanma

### Düzeltme Stratejileri
**Pratik Öneriler:**
- Her ses için ayrı çalışın
- Aynada dudak pozisyonunu izleyin
- Yavaş konuşarak başlayın
- Düzenli geri bildirim alın

## Telaffuz Pratiği Rutini

### Günlük Rutin (30 dakika)
**Sabah (10 dakika):**
- Tongue twisters
- Minimal pairs
- Temel sesler

**Öğle (10 dakika):**
- Shadowing
- Kayıt yapma
- Self-assessment

**Akşam (10 dakika):**
- Konuşma pratiği
- Native speaker dinleme
- Telaffuz oyunları

### Haftalık Hedefler
**Haftalık Plan:**
- Pazartesi: Temel sesler
- Salı: Minimal pairs
- Çarşamba: Tongue twisters
- Perşembe: Shadowing
- Cuma: Kayıt ve analiz
- Cumartesi: Konuşma pratiği
- Pazar: Genel tekrar

## Motivasyon ve Sabır

### Gerçekçi Beklentiler
**Önemli Noktalar:**
- Telaffuz öğrenmek zaman alır
- Küçük ilerlemeleri kutlayın
- Mükemmeliyetçi olmayın
- Sürekli pratik yapın

### Motivasyon Stratejileri
**Sürdürülebilir Öğrenme:**
- Eğlenceli aktiviteler ekleyin
- Grup çalışması yapın
- İlerlemenizi kaydedin
- Ödüller verin

Bu teknikleri düzenli olarak uygulayarak telaffuz becerinizi geliştirebilir ve native speaker seviyesine yaklaşabilirsiniz.`,
    category: 'dil-ogrenme',
    author: 'Dr. Michael Johnson',
    date: '2024-01-04',
    readTime: '8 dk',
    tags: ['telaffuz', 'konuşma', 'teknik', 'pratik']
  },

  // Sınav Hazırlık (10 yazı)
  {
    id: 'lgs-stratejileri',
    title: 'LGS Stratejileri: Hangi Konulara Odaklanmalısınız?',
    excerpt: 'LGS sınavında başarılı olmak için hangi konulara öncelik vermeli, nasıl çalışma planı yapmalısınız?',
    content: `LGS sınavı, öğrencilerin akademik geleceğini belirleyen en önemli sınavlardan biridir. Doğru stratejilerle hazırlanarak başarılı olmak mümkündür.

## LGS Sınav Yapısı

### Ders Dağılımı
**Türkçe (20 soru):**
- Okuma anlama
- Dil bilgisi
- Yazım kuralları
- Noktalama işaretleri

**Matematik (20 soru):**
- Sayılar ve işlemler
- Cebir
- Geometri
- Veri analizi

**Fen Bilimleri (20 soru):**
- Fizik
- Kimya
- Biyoloji
- Deney ve gözlem

**T.C. İnkılap Tarihi (10 soru):**
- Atatürk dönemi
- Cumhuriyet tarihi
- Sosyal bilgiler

**Din Kültürü (10 soru):**
- Temel dini bilgiler
- Ahlak ve değerler

**İngilizce (10 soru):**
- Kelime bilgisi
- Gramer
- Okuma anlama

## Çalışma Stratejileri

### Konu Önceliklendirme
**Yüksek Puanlı Konular:**
- Türkçe: Okuma anlama (%40)
- Matematik: Cebir (%35)
- Fen: Fizik (%30)
- Sosyal: Atatürk dönemi (%40)

### Zaman Yönetimi
**8. Sınıf Çalışma Planı:**
- Eylül-Aralık: Temel konular
- Ocak-Mart: Konu tekrarı
- Nisan-Mayıs: Deneme sınavları
- Haziran: Son tekrarlar

### Deneme Sınavı Stratejileri
**Haftalık Program:**
- Pazartesi: Türkçe denemesi
- Salı: Matematik denemesi
- Çarşamba: Fen denemesi
- Perşembe: Sosyal denemesi
- Cuma: İngilizce denemesi
- Cumartesi: Genel deneme
- Pazar: Analiz ve tekrar

## Başarı İpuçları

### Sınav Teknikleri
**Soruları Çözme Stratejisi:**
1. Kolay sorulardan başlayın
2. Zor soruları atlayın
3. Zamanınızı kontrol edin
4. Son 10 dakikada kontrol yapın

### Motivasyon Stratejileri
**Hedef Belirleme:**
- Gerçekçi hedefler koyun
- Küçük başarıları kutlayın
- İlerlemenizi kaydedin
- Destek sistemi oluşturun

Bu stratejileri uygulayarak LGS sınavında başarılı olabilirsiniz.`,
    category: 'sinav-hazirlik',
    author: 'Zeynep Öztürk',
    date: '2024-01-14',
    readTime: '8 dk',
    tags: ['LGS', 'strateji', 'plan', 'başarı'],
    featured: true
  },
  {
    id: 'ydt-hazirlik-rehberi',
    title: 'YDT Hazırlık Rehberi: Netlerinizi Nasıl Artırırsınız?',
    excerpt: 'YDT sınavında net artışı için kanıtlanmış yöntemler ve çalışma teknikleri.',
    content: `YDT (Yabancı Dil Testi), üniversite sınavında yabancı dil bölümü tercih eden öğrenciler için kritik önem taşır. Doğru hazırlık stratejileriyle netlerinizi önemli ölçüde artırabilirsiniz.

## YDT Sınav Yapısı

### Soru Dağılımı
**Kelime Bilgisi (15-20 soru):**
- Eş anlamlılar
- Zıt anlamlılar
- Kelime tamamlama
- Kelime çıkarma

**Dil Bilgisi (15-20 soru):**
- Zamanlar
- Edatlar
- Bağlaçlar
- Cümle yapıları

**Cloze Test (10-15 soru):**
- Boşluk doldurma
- Bağlam analizi
- Mantık sıralaması

**Okuma Anlama (15-20 soru):**
- Paragraf soruları
- Ana fikir bulma
- Detay soruları
- Çıkarım yapma

## Net Artırma Stratejileri

### Kelime Çalışması
**Günlük Hedef:**
- 50 yeni kelime
- 100 eski kelime tekrarı
- Kelime oyunları
- Flashcard kullanımı

### Dil Bilgisi Teknikleri
**Konu Odaklı Çalışma:**
- Her konu için 100 soru
- Hata analizi
- Konu tekrarı
- Pratik testleri

### Okuma Hızı Artırma
**Teknikler:**
- Skimming (hızlı tarama)
- Scanning (hedef arama)
- Context clues (bağlam ipuçları)
- Paragraf yapısı analizi

## Çalışma Programı

### Haftalık Plan
**Pazartesi-Cuma:**
- Sabah: Kelime çalışması (1 saat)
- Öğle: Dil bilgisi (1 saat)
- Akşam: Okuma pratiği (1 saat)

**Hafta Sonu:**
- Cumartesi: Deneme sınavı
- Pazar: Analiz ve tekrar

### Aylık Hedefler
**1. Ay:** Temel kelime dağarcığı
**2. Ay:** Dil bilgisi konuları
**3. Ay:** Okuma teknikleri
**4. Ay:** Deneme sınavları

## Sınav Teknikleri

### Zaman Yönetimi
**Soru Başına Süre:**
- Kelime soruları: 30 saniye
- Dil bilgisi: 45 saniye
- Cloze test: 1 dakika
- Okuma: 2 dakika

### Tahmin Teknikleri
**Elimination Method:**
- Yanlış seçenekleri eleyin
- Bağlam ipuçlarını kullanın
- Gramer kurallarını uygulayın
- Mantık sıralaması yapın

Bu stratejileri düzenli uygulayarak YDT netlerinizi artırabilirsiniz.`,
    category: 'sinav-hazirlik',
    author: 'Dr. Can Yıldız',
    date: '2024-01-11',
    readTime: '9 dk',
    tags: ['YDT', 'hazırlık', 'net artışı', 'teknik']
  },
  // Eğitim İpuçları - Kalan 5 yazı
  {
    id: 'konsantrasyon-artirma',
    title: 'Konsantrasyon Artırma Teknikleri',
    excerpt: 'Dikkatinizi toplamak ve odaklanmayı artırmak için etkili yöntemler.',
    content: 'Konsantrasyon, başarılı öğrenmenin anahtarıdır. Bu yazıda dikkatinizi artıracak pratik teknikler bulacaksınız.',
    category: 'egitim-ipuclari',
    author: 'Dr. Murat Kaya',
    date: '2024-01-02',
    readTime: '5 dk',
    tags: ['konsantrasyon', 'odaklanma', 'dikkat']
  },
  {
    id: 'hafiza-gelistirme',
    title: 'Hafıza Geliştirme Egzersizleri',
    excerpt: 'Hafıza gücünüzü artıracak bilimsel egzersizler ve teknikler.',
    content: 'Güçlü hafıza, akademik başarının temelidir. Bu egzersizlerle hafıza kapasitenizi geliştirebilirsiniz.',
    category: 'egitim-ipuclari',
    author: 'Prof. Dr. Leyla Özkan',
    date: '2024-01-01',
    readTime: '6 dk',
    tags: ['hafıza', 'bellek', 'egzersiz']
  },
  {
    id: 'hizli-okuma-teknikleri',
    title: 'Hızlı Okuma ve Anlama Teknikleri',
    excerpt: 'Okuma hızınızı artırırken anlamayı da geliştiren yöntemler.',
    content: 'Hızlı okuma becerileri, çalışma verimliliğinizi önemli ölçüde artırır. Doğru tekniklerle hem hızlı hem etkili okuyabilirsiniz.',
    category: 'egitim-ipuclari',
    author: 'Öğr. Gör. Ahmet Yıldız',
    date: '2024-01-01',
    readTime: '7 dk',
    tags: ['hızlı okuma', 'anlama', 'verimlilik']
  },
  {
    id: 'grup-calismasi',
    title: 'Etkili Grup Çalışması Stratejileri',
    excerpt: 'Grup halinde çalışırken maksimum verim almanın yolları.',
    content: 'Grup çalışması doğru yapıldığında çok etkilidir. Bu stratejilerle grup çalışmalarınızı daha verimli hale getirebilirsiniz.',
    category: 'egitim-ipuclari',
    author: 'Dr. Fatma Demir',
    date: '2023-12-30',
    readTime: '5 dk',
    tags: ['grup çalışması', 'işbirliği', 'verimlilik']
  },
  {
    id: 'dijital-detoks',
    title: 'Çalışma İçin Dijital Detoks',
    excerpt: 'Dijital dikkat dağıtıcılardan uzaklaşarak odaklanmayı artırma.',
    content: 'Dijital cihazlar dikkatimizi dağıtır. Bu rehberle dijital detoks yaparak çalışma verimliliğinizi artırabilirsiniz.',
    category: 'egitim-ipuclari',
    author: 'Uzm. Psk. Kemal Öz',
    date: '2023-12-29',
    readTime: '4 dk',
    tags: ['dijital detoks', 'odaklanma', 'teknoloji']
  },
  // Dil Öğrenme - Kalan 6 yazı
  {
    id: 'gramer-ogrenme',
    title: 'Gramer Öğrenme Stratejileri',
    excerpt: 'Yabancı dil gramerini etkili şekilde öğrenmenin yolları.',
    content: 'Gramer, dilin iskeletidir. Bu stratejilerle gramer kurallarını daha kolay öğrenebilirsiniz.',
    category: 'dil-ogrenme',
    author: 'Dr. Emily Wilson',
    date: '2024-01-02',
    readTime: '6 dk',
    tags: ['gramer', 'kurallar', 'strateji']
  },
  {
    id: 'dil-ogrenme-oyunlari',
    title: 'Dil Öğrenme Oyunları',
    excerpt: 'Eğlenceli oyunlarla dil öğrenme sürecini hızlandırın.',
    content: 'Oyunlar, dil öğrenmeyi eğlenceli hale getirir. Bu oyunlarla motivasyonunuzu yüksek tutabilirsiniz.',
    category: 'dil-ogrenme',
    author: 'Öğr. Gör. Selin Aydın',
    date: '2024-01-01',
    readTime: '5 dk',
    tags: ['oyun', 'eğlence', 'motivasyon']
  },
  {
    id: 'yazma-becerileri',
    title: 'Yabancı Dilde Yazma Becerileri',
    excerpt: 'Yabancı dilde etkili yazı yazma tekniklerini öğrenin.',
    content: 'Yazma becerisi, dil öğrenmenin önemli bir parçasıdır. Bu tekniklerle yazma becerinizi geliştirebilirsiniz.',
    category: 'dil-ogrenme',
    author: 'Prof. Dr. David Brown',
    date: '2023-12-31',
    readTime: '7 dk',
    tags: ['yazma', 'beceri', 'kompozisyon']
  },
  {
    id: 'dinleme-becerileri',
    title: 'Dinleme Becerilerini Geliştirme',
    excerpt: 'Yabancı dilde dinleme anlama becerinizi artırmanın yolları.',
    content: 'Dinleme, dil öğrenmenin temel becerilerinden biridir. Bu yöntemlerle dinleme becerinizi geliştirebilirsiniz.',
    category: 'dil-ogrenme',
    author: 'Dr. Lisa Johnson',
    date: '2023-12-30',
    readTime: '6 dk',
    tags: ['dinleme', 'anlama', 'beceri']
  },
  {
    id: 'kulturel-ogrenme',
    title: 'Kültürel Öğrenme ve Dil',
    excerpt: 'Dil öğrenirken kültürel bağlamın önemi.',
    content: 'Dil ve kültür iç içedir. Bu yaklaşımla hem dili hem kültürü birlikte öğrenebilirsiniz.',
    category: 'dil-ogrenme',
    author: 'Prof. Dr. Maria Garcia',
    date: '2023-12-29',
    readTime: '8 dk',
    tags: ['kültür', 'bağlam', 'öğrenme']
  },
  {
    id: 'dil-degisimi',
    title: 'Dil Değişimi Programları',
    excerpt: 'Dil partneri bulma ve etkili dil değişimi yapma rehberi.',
    content: 'Dil değişimi, pratik yapmanın en etkili yollarından biridir. Bu rehberle ideal dil partneri bulabilirsiniz.',
    category: 'dil-ogrenme',
    author: 'Dr. Thomas Anderson',
    date: '2023-12-28',
    readTime: '5 dk',
    tags: ['dil değişimi', 'partner', 'pratik']
  },
  // Sınav Hazırlık - Kalan 8 yazı
  {
    id: 'deneme-sinavi-analizi',
    title: 'Deneme Sınavı Analizi ve Değerlendirme',
    excerpt: 'Deneme sınavlarınızdan maksimum fayda almanın yolları.',
    content: 'Deneme sınavları, gerçek sınavın prova sıdır. Doğru analiz ile zayıf noktalarınızı belirleyebilirsiniz.',
    category: 'sinav-hazirlik',
    author: 'Uzm. Eğt. Semra Kaya',
    date: '2024-01-09',
    readTime: '6 dk',
    tags: ['deneme', 'analiz', 'değerlendirme']
  },
  {
    id: 'matematik-sinav-teknikleri',
    title: 'Matematik Sınav Teknikleri',
    excerpt: 'Matematik sorularını hızlı ve doğru çözme stratejileri.',
    content: 'Matematik sınavlarında başarı için özel teknikler gerekir. Bu stratejilerle matematik netlerinizi artırabilirsiniz.',
    category: 'sinav-hazirlik',
    author: 'Mat. Öğr. Ali Çelik',
    date: '2024-01-08',
    readTime: '7 dk',
    tags: ['matematik', 'teknik', 'strateji']
  },
  {
    id: 'fen-sinav-hazirlik',
    title: 'Fen Bilimleri Sınav Hazırlığı',
    excerpt: 'Fen bilimleri derslerinde sınav başarısı için öneriler.',
    content: 'Fen bilimleri, kavramsal öğrenme gerektirir. Bu yöntemlerle fen sınavlarında başarılı olabilirsiniz.',
    category: 'sinav-hazirlik',
    author: 'Fen Öğr. Ayşe Yılmaz',
    date: '2024-01-07',
    readTime: '6 dk',
    tags: ['fen bilimleri', 'kavram', 'başarı']
  },
  {
    id: 'edebiyat-sinav-teknikleri',
    title: 'Edebiyat Sınav Teknikleri',
    excerpt: 'Edebiyat sorularında başarı için özel yaklaşımlar.',
    content: 'Edebiyat sınavları analitik düşünme gerektirir. Bu tekniklerle edebiyat sorularını çözebilirsiniz.',
    category: 'sinav-hazirlik',
    author: 'Ed. Öğr. Mehmet Özkan',
    date: '2024-01-06',
    readTime: '5 dk',
    tags: ['edebiyat', 'analiz', 'teknik']
  },
  {
    id: 'tarih-sinav-stratejileri',
    title: 'Tarih Sınav Stratejileri',
    excerpt: 'Tarih derslerinde etkili çalışma ve sınav teknikleri.',
    content: 'Tarih, kronolojik öğrenme gerektirir. Bu stratejilerle tarih sınavlarında başarılı olabilirsiniz.',
    category: 'sinav-hazirlik',
    author: 'Tar. Öğr. Zeynep Arslan',
    date: '2024-01-05',
    readTime: '6 dk',
    tags: ['tarih', 'kronoloji', 'strateji']
  },
  {
    id: 'sinav-gunu-rutini',
    title: 'Sınav Günü Rutini',
    excerpt: 'Sınav gününde optimal performans için hazırlık rehberi.',
    content: 'Sınav günü rutininiz performansınızı etkiler. Bu rehberle sınav günü için ideal rutini oluşturabilirsiniz.',
    category: 'sinav-hazirlik',
    author: 'Psk. Dan. Merve Koca',
    date: '2024-01-04',
    readTime: '4 dk',
    tags: ['sınav günü', 'rutin', 'performans']
  },
  {
    id: 'coktan-secmeli-teknikleri',
    title: 'Çoktan Seçmeli Soru Teknikleri',
    excerpt: 'Çoktan seçmeli sorularda doğru seçeneği bulma stratejileri.',
    content: 'Çoktan seçmeli sorular özel teknikler gerektirir. Bu stratejilerle doğru cevapları bulabilirsiniz.',
    category: 'sinav-hazirlik',
    author: 'Eğt. Uzm. Hakan Demir',
    date: '2024-01-03',
    readTime: '5 dk',
    tags: ['çoktan seçmeli', 'teknik', 'strateji']
  },
  {
    id: 'son-hafta-hazirlik',
    title: 'Sınavdan Önceki Son Hafta',
    excerpt: 'Sınavdan önceki son hafta için etkili hazırlık stratejileri.',
    content: 'Son hafta çok kritiktir. Bu stratejilerle son haftayı verimli geçirebilir ve sınava hazır olabilirsiniz.',
    category: 'sinav-hazirlik',
    author: 'Eğt. Koor. Seda Acar',
    date: '2024-01-02',
    readTime: '6 dk',
    tags: ['son hafta', 'hazırlık', 'strateji']
  },
  // Motivasyon - 10 yazı
  {
    id: 'ogrenci-motivasyonu',
    title: 'Öğrenci Motivasyonu: İç Motivasyonu Nasıl Artırırsınız?',
    excerpt: 'Dış motivasyona bağımlı olmadan, kendi kendinizi motive etmenin yollarını keşfedin.',
    content: 'İç motivasyon, uzun vadeli başarının anahtarıdır. Bu yazıda kendi kendinizi motive etme yöntemlerini bulacaksınız.',
    category: 'motivasyon',
    author: 'Psikolog Elif Şahin',
    date: '2024-01-13',
    readTime: '5 dk',
    tags: ['motivasyon', 'iç motivasyon', 'psikoloji'],
    featured: true
  },
  {
    id: 'veli-rehberi',
    title: 'Veli Rehberi: Çocuğunuzun Eğitim Sürecinde Nasıl Destek Olabilirsiniz?',
    excerpt: 'Çocuğunuzun eğitim yolculuğunda onu desteklemenin en etkili yolları.',
    content: 'Veliler, çocukların eğitim sürecinde kritik rol oynar. Bu rehberle çocuğunuza en iyi desteği verebilirsiniz.',
    category: 'motivasyon',
    author: 'Uzman Psikolog Fatma Korkmaz',
    date: '2024-01-09',
    readTime: '6 dk',
    tags: ['veli', 'destek', 'çocuk', 'eğitim'],
    featured: true
  },
  {
    id: 'hedef-belirleme',
    title: 'Etkili Hedef Belirleme Teknikleri',
    excerpt: 'SMART hedeflerle akademik başarıya ulaşmanın yolları.',
    content: 'Doğru hedefler başarının yol haritasıdır. Bu tekniklerle etkili hedefler belirleyebilirsiniz.',
    category: 'motivasyon',
    author: 'Yaşam Koçu Can Özgür',
    date: '2024-01-08',
    readTime: '5 dk',
    tags: ['hedef', 'planlama', 'başarı']
  },
  {
    id: 'ozguven-gelistirme',
    title: 'Öz Güven Geliştirme',
    excerpt: 'Akademik özgüveninizi artıracak pratik öneriler.',
    content: 'Özgüven, başarının temelidir. Bu yöntemlerle akademik özgüveninizi geliştirebilirsiniz.',
    category: 'motivasyon',
    author: 'Psk. Murat Kırlı',
    date: '2024-01-07',
    readTime: '6 dk',
    tags: ['özgüven', 'kişisel gelişim', 'başarı']
  },
  {
    id: 'stres-yonetimi',
    title: 'Öğrenci Stresi Yönetimi',
    excerpt: 'Okul stresiyle başa çıkmanın etkili yöntemleri.',
    content: 'Stres, öğrenmeyi olumsuz etkiler. Bu tekniklerle stresi yönetebilir ve verimli çalışabilirsiniz.',
    category: 'motivasyon',
    author: 'Dr. Psk. Ayça Deniz',
    date: '2024-01-06',
    readTime: '7 dk',
    tags: ['stres', 'yönetim', 'rahatlama']
  },
  {
    id: 'basari-zihniyeti',
    title: 'Başarı Zihniyeti Geliştirme',
    excerpt: 'Growth mindset ile akademik potansiyelinizi ortaya çıkarın.',
    content: 'Zihniyet başarıyı belirler. Growth mindset ile potansiyelinizi keşfedebilirsiniz.',
    category: 'motivasyon',
    author: 'Eğt. Psk. Deniz Yıldız',
    date: '2024-01-05',
    readTime: '6 dk',
    tags: ['zihniyet', 'growth mindset', 'potansiyel']
  },
  {
    id: 'sosyal-destek',
    title: 'Sosyal Destek Sistemleri',
    excerpt: 'Arkadaş ve aile desteğiyle akademik başarıyı artırma.',
    content: 'Sosyal destek, motivasyonu yüksek tutar. Bu yaklaşımlarla güçlü destek sistemi oluşturabilirsiniz.',
    category: 'motivasyon',
    author: 'Sos. Hiz. Uzm. Ece Acar',
    date: '2024-01-04',
    readTime: '5 dk',
    tags: ['sosyal destek', 'arkadaşlık', 'aile']
  },
  {
    id: 'zaman-perspektifi',
    title: 'Gelecek Odaklı Düşünme',
    excerpt: 'Uzun vadeli hedeflerle kısa vadeli motivasyonu artırma.',
    content: 'Gelecek vizyonu, bugünkü motivasyonu artırır. Bu perspektifle çalışma isteğinizi yükseltebilirsiniz.',
    category: 'motivasyon',
    author: 'Kar. Dan. Tolga Şen',
    date: '2024-01-03',
    readTime: '6 dk',
    tags: ['gelecek', 'vizyon', 'motivasyon']
  },
  {
    id: 'basarisizlikla-basa-cikma',
    title: 'Başarısızlıkla Başa Çıkma',
    excerpt: 'Akademik başarısızlıkları fırsata çevirmenin yolları.',
    content: 'Başarısızlık, öğrenmenin parçasıdır. Bu yaklaşımlarla başarısızlıkları güce çevirebilirsiniz.',
    category: 'motivasyon',
    author: 'Psk. Burak Koç',
    date: '2024-01-02',
    readTime: '5 dk',
    tags: ['başarısızlık', 'öğrenme', 'direnç']
  },
  {
    id: 'kendin-ol',
    title: 'Kendi Potansiyelini Keşfet',
    excerpt: 'Bireysel güçlerinizi tanıyarak akademik başarıya ulaşma.',
    content: 'Herkesin farklı güçleri vardır. Bu yöntemlerle kendi potansiyelinizi keşfedebilirsiniz.',
    category: 'motivasyon',
    author: 'Gelişim Uzm. Nil Ay',
    date: '2024-01-01',
    readTime: '7 dk',
    tags: ['potansiyel', 'keşif', 'bireysellik']
  }
];

// Ana sayfa için öne çıkan blog yazıları (her kategoriden 1'er tane)
export const featuredBlogPosts = blogPosts.filter(post => post.featured);
