// Ana sayfada kullanılan featured blog posts
// Sadece gerekli olan 6 yazı

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image?: string;
  tags?: string[];
  featured?: boolean;
}

export interface BlogCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export const featuredBlogPosts = [
  {
    id: 'etkili-ogrenme-teknikleri',
    title: 'Etkili Öğrenme Teknikleri: Beyninizi Nasıl Daha İyi Kullanırsınız?',
    excerpt: 'Beyin bilimi araştırmalarına dayalı, kanıtlanmış öğrenme teknikleri ile daha hızlı ve kalıcı öğrenme sağlayın.',
    category: 'egitim-ipuclari',
    author: 'Dr. Ayşe Yılmaz',
    date: '2024-01-15',
    readTime: '5 dk',
    featured: true
  },
  {
    id: 'online-egitim-ipuclari',
    title: 'Online Eğitimde Başarılı Olmanın 10 Altın Kuralı',
    excerpt: 'Uzaktan eğitim sürecinde verimliliğinizi artıracak pratik öneriler.',
    category: 'egitim-ipuclari',
    author: 'Dr. Mehmet Özkan',
    date: '2024-01-07',
    readTime: '8 dk',
    featured: true
  },
  {
    id: 'ingilizce-konusma-pratikleri',
    title: 'İngilizce Konuşma Korkusunu Yenmenin 7 Yolu',
    excerpt: 'Yabancı dil konuşma endişenizi yenmek ve akıcı konuşma becerisi geliştirmek için pratik ipuçları.',
    category: 'dil-ogrenme',
    author: 'Sarah Johnson',
    date: '2024-01-12',
    readTime: '6 dk',
    featured: true
  },
  {
    id: 'lgs-stratejileri',
    title: 'LGS Stratejileri: Hangi Konulara Odaklanmalısınız?',
    excerpt: 'LGS sınavında başarılı olmak için hangi konulara öncelik vermeli, nasıl çalışma planı yapmalısınız?',
    category: 'sinav-hazirlik',
    author: 'Zeynep Öztürk',
    date: '2024-01-14',
    readTime: '8 dk',
    featured: true
  },
  {
    id: 'ogrenci-motivasyonu',
    title: 'Öğrenci Motivasyonu: İç Motivasyonu Nasıl Artırırsınız?',
    excerpt: 'Dış motivasyona bağımlı olmadan, kendi kendinizi motive etmenin yollarını keşfedin.',
    category: 'motivasyon',
    author: 'Psikolog Elif Şahin',
    date: '2024-01-13',
    readTime: '5 dk',
    featured: true
  },
  {
    id: 'veli-rehberi',
    title: 'Veli Rehberi: Çocuğunuzun Eğitim Sürecinde Nasıl Destek Olabilirsiniz?',
    excerpt: 'Çocuğunuzun eğitim yolculuğunda onu desteklemenin en etkili yolları.',
    category: 'motivasyon',
    author: 'Uzman Psikolog Fatma Korkmaz',
    date: '2024-01-09',
    readTime: '6 dk',
    featured: true
  }
];

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

