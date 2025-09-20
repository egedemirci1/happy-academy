import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, program, preferredTime, message, kvkk } = body;

    // KVKK onayı kontrolü
    if (!kvkk) {
      return NextResponse.json(
        { error: 'KVKK aydınlatma metnini kabul etmelisiniz.' },
        { status: 400 }
      );
    }

    // Gerekli alanların kontrolü
    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Ad soyad ve telefon alanları zorunludur.' },
        { status: 400 }
      );
    }

    // Form verilerini konsola yazdır (gerçek uygulamada veritabanına kaydedilir)
    console.log('Yeni Lead Başvurusu:', {
      name,
      phone,
      program,
      preferredTime,
      message,
      kvkk,
      timestamp: new Date().toISOString(),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
      userAgent: request.headers.get('user-agent') || 'unknown'
    });

    // Analytics event'i (gerçek uygulamada analytics servisine gönderilir)
    console.log('Analytics Event: form_submit', {
      program,
      preferredTime,
      timestamp: new Date().toISOString()
    });

    // Başarılı yanıt
    return NextResponse.json(
      { 
        success: true, 
        message: 'Başvurunuz başarıyla alındı. En kısa sürede sizinle iletişime geçeceğiz.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { error: 'Sunucu hatası. Lütfen tekrar deneyin.' },
      { status: 500 }
    );
  }
}
