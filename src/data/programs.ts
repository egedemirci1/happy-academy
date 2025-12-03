export interface Program {
  id: string;
  title: string;
  description: string;
  badges: string[];
  link: string;
  icon: string;
}

export interface LanguageProgram extends Program {
  levels: string;
  features: string[];
  price: {
    standard: string;
    intensive: string;
    private: string;
  };
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  type: 'celebration' | 'demo' | 'exam' | 'other';
}

export const programs: Program[] = [
  {
    id: 'yabanci-diller',
    title: 'Yabancı Diller',
    description: 'İngilizce, Almanca, Fransızca, İspanyolca, Rusça, Felemenkçe. A1–C1 seviye, konuşma kulüpleri, Goethe/ÖSD/TELC, Aile Birleşimi.',
    badges: ['A1-C1', 'Konuşma Kulübü', 'Sertifika'],
    link: '/egitimler/yabanci-diller',
    icon: 'Globe'
  },
  {
    id: 'sinav-hazirlik',
    title: 'Sınav Hazırlık',
    description: 'LGS\'de konu anlatımı + soru çözümü + deneme analizi; YDT Team\'de 500 ders İngilizce, TYT desteği, mentör öğretmen ve takip sistemi.',
    badges: ['LGS', 'YDT', 'Mentörlük'],
    link: '/egitimler/lgs-hazirlik',
    icon: 'BookOpen'
  },
  {
    id: 'cocuk-genclik',
    title: 'Çocuk & Genç',
    description: 'Junior Class (3–6 yaş) kelime ve konuşma odaklı; 5–8. sınıf hafta sonu 360 saat grup dersi + birebir destek.',
    badges: ['3-6 Yaş', '5-8. Sınıf', 'Birebir Destek'],
    link: '/cocuk-genclik',
    icon: 'Users'
  },
  {
    id: 'kocluk',
    title: 'Koçluk & Danışmanlık',
    description: 'Hedef belirleme, motivasyon, zaman yönetimi ve başarı odaklı bireysel koçluk programları.',
    badges: ['Birebir Koçluk', 'Hedef Belirleme', 'Motivasyon'],
    link: '/kocluk',
    icon: 'Target'
  }
];

export const languagePrograms: LanguageProgram[] = [
  {
    id: 'ingilizce',
    title: 'İngilizce',
    description: 'Genel İngilizce + konuşma odaklı kulüpler + iş İngilizcesi opsiyonu',
    badges: ['A1-C1', 'Speaking Club', 'İş İngilizcesi'],
    link: '/ingilizce',
    icon: 'Globe',
    levels: 'A1–C1',
    features: ['Grup & Birebir', 'Speaking Club', 'Sertifika hazırlık'],
    price: {
      standard: '₺2.500/ay',
      intensive: '₺3.500/ay',
      private: '₺150/saat'
    }
  },
  {
    id: 'almanca',
    title: 'Almanca',
    description: 'Goethe/ÖSD/TELC sınavlarına yönelik hazırlık ve Aile Birleşimi programları',
    badges: ['A1-C1', 'Goethe', 'Aile Birleşimi'],
    link: '/almanca',
    icon: 'Globe',
    levels: 'A1–C1',
    features: ['Grup & Birebir', 'Speaking Club', 'Sertifika hazırlık'],
    price: {
      standard: '₺2.500/ay',
      intensive: '₺3.500/ay',
      private: '₺150/saat'
    }
  },
  {
    id: 'fransizca',
    title: 'Fransızca',
    description: 'DELF/DALF sınavlarına hazırlık ve konuşma odaklı eğitim',
    badges: ['A1-C1', 'DELF/DALF', 'Konuşma'],
    link: '/fransizca',
    icon: 'Globe',
    levels: 'A1–C1',
    features: ['Grup & Birebir', 'Speaking Club', 'Sertifika hazırlık'],
    price: {
      standard: '₺2.500/ay',
      intensive: '₺3.500/ay',
      private: '₺150/saat'
    }
  },
  {
    id: 'ispanyolca',
    title: 'İspanyolca',
    description: 'DELE sınavlarına hazırlık ve İspanyol kültürü odaklı eğitim',
    badges: ['A1-C1', 'DELE', 'Kültür'],
    link: '/ispanyolca',
    icon: 'Globe',
    levels: 'A1–C1',
    features: ['Grup & Birebir', 'Speaking Club', 'Sertifika hazırlık'],
    price: {
      standard: '₺2.500/ay',
      intensive: '₺3.500/ay',
      private: '₺150/saat'
    }
  },
  {
    id: 'rusca',
    title: 'Rusça',
    description: 'TÖMER sınavlarına hazırlık ve Rus edebiyatı odaklı eğitim',
    badges: ['A1-C1', 'TÖMER', 'Edebiyat'],
    link: '/rusca',
    icon: 'Globe',
    levels: 'A1–C1',
    features: ['Grup & Birebir', 'Speaking Club', 'Sertifika hazırlık'],
    price: {
      standard: '₺2.500/ay',
      intensive: '₺3.500/ay',
      private: '₺150/saat'
    }
  },
  {
    id: 'felemenkce',
    title: 'Felemenkçe',
    description: 'CNaVT sınavlarına hazırlık ve Hollanda kültürü odaklı eğitim',
    badges: ['A1-C1', 'CNaVT', 'Hollanda Kültürü'],
    link: '/felemenkce',
    icon: 'Globe',
    levels: 'A1–C1',
    features: ['Grup & Birebir', 'Speaking Club', 'Sertifika hazırlık'],
    price: {
      standard: '₺2.500/ay',
      intensive: '₺3.500/ay',
      private: '₺150/saat'
    }
  }
];

export const events: Event[] = [
  {
    id: 'yeni-donem-kutlamasi',
    title: 'Yeni Dönem Kutlaması',
    date: '17 Ağustos 2025',
    time: '18:30',
    description: 'Yeni dönem öğrencilerimizle tanışma ve kaynaşma etkinliği',
    type: 'celebration'
  },
  {
    id: 'demo-ders-bilgilendirmesi',
    title: 'Demo Ders Bilgilendirmesi',
    date: '19 Ağustos 2025',
    time: '18:30',
    description: 'Ücretsiz demo derslerimizi deneyimleme fırsatı',
    type: 'demo'
  },
  {
    id: 'matematik-yaz-kursu-cekilisi',
    title: 'Matematik Yaz Kursu Çekilişi',
    date: '25 Ağustos 2025',
    time: '14:00',
    description: '12 kişiye ücretsiz matematik yaz kursu eğitimi',
    type: 'other'
  }
];

export const testimonials = [
  {
    id: 'ayse-k',
    name: 'Ayşe K.',
    program: 'YDT Team',
    content: 'YDT Team programıyla netlerim düzenli arttı; mentör takibi motive etti.',
    rating: 5
  },
  {
    id: 'murat-b',
    name: 'Murat B.',
    program: 'LGS Hazırlık',
    content: 'LGS denemeleri sonrası yapılan analizler zayıf noktaları net gösterdi.',
    rating: 4.5
  },
  {
    id: 'selin-d',
    name: 'Selin D.',
    program: 'Almanca',
    content: 'Almanca A1\'den B1\'e iki dönemde geldim; konuşma kulübü çok faydalı.',
    rating: 5
  },
  {
    id: 'emre-y',
    name: 'Emre Y.',
    program: 'İngilizce',
    content: 'Speaking Club sayesinde İngilizce konuşma korkumu yendim.',
    rating: 4
  },
  {
    id: 'zeynep-a',
    name: 'Zeynep A.',
    program: 'Junior Class',
    content: '3 yaşındaki oğlum oyunla öğreniyor, çok mutlu.',
    rating: 4.5
  },
  {
    id: 'ahmet-m',
    name: 'Ahmet M.',
    program: 'Fransızca',
    content: 'Fransızca öğrenmek hiç bu kadar kolay olmamıştı. Hocalarımız çok sabırlı.',
    rating: 5
  },
  {
    id: 'fatma-s',
    name: 'Fatma S.',
    program: 'Koçluk',
    content: 'Koçluk programı sayesinde hedeflerimi netleştirdim ve başarıya ulaştım.',
    rating: 4
  },
  {
    id: 'can-o',
    name: 'Can O.',
    program: 'İspanyolca',
    content: 'İspanyolca konuşma kulübünde pratik yapmak çok eğlenceli ve faydalı.',
    rating: 4.5
  },
  {
    id: 'elif-t',
    name: 'Elif T.',
    program: 'Rusça',
    content: 'Rusça öğrenmeye başladığımda çok zorlanıyordum, şimdi rahatça konuşabiliyorum.',
    rating: 5
  },
  {
    id: 'burak-k',
    name: 'Burak K.',
    program: 'Felemenkçe',
    content: 'Felemenkçe programı ile kısa sürede temel seviyeyi tamamladım.',
    rating: 4
  }
];

export const whyChooseUs = [
  {
    id: 'uzman-kadro',
    title: 'Uzman Kadro',
    description: 'Deneyimli öğretmenler ve mentörlük sistemi',
    icon: 'Users'
  },
  {
    id: 'yogun-pratik',
    title: 'Yoğun Pratik',
    description: 'Speaking/Listening/Writing/Reading kulüpleri',
    icon: 'BookOpen'
  },
  {
    id: 'deneme-analiz',
    title: 'Deneme & Analiz',
    description: 'Düzenli denemeler, ayrıntılı raporlar',
    icon: 'BarChart3'
  },
  {
    id: 'kocluk-takip',
    title: 'Koçluk & Takip',
    description: 'Haftalık hedef, veli bilgilendirme, ilerleme grafikleri',
    icon: 'Target'
  }
];
