import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-montserrat",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Happy Academy Konya - Dil ve Sınav Başarısı İçin Doğru Adres",
  description: "A1–C1 yabancı dil, LGS & YDT hazırlık, Junior (3–6), 5–8. sınıf akademik destek, koçluk ve deneme programları. Konya'da dil ve sınav başarısı için doğru adres.",
  keywords: "dil kursu, LGS hazırlık, YDT hazırlık, İngilizce, Almanca, Fransızca, Konya, Happy Academy",
  authors: [{ name: "Happy Academy Konya" }],
  creator: "Happy Academy Konya",
  publisher: "Happy Academy Konya",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://happyacademykonya.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Happy Academy Konya - Dil ve Sınav Başarısı İçin Doğru Adres",
    description: "A1–C1 yabancı dil, LGS & YDT hazırlık, Junior (3–6), 5–8. sınıf akademik destek, koçluk ve deneme programları.",
    url: "https://happyacademykonya.com",
    siteName: "Happy Academy Konya",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Happy Academy Konya - Dil ve Sınav Başarısı İçin Doğru Adres",
    description: "A1–C1 yabancı dil, LGS & YDT hazırlık, Junior (3–6), 5–8. sınıf akademik destek, koçluk ve deneme programları.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${inter.variable} font-inter antialiased bg-gray-900 text-white`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
