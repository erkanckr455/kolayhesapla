"use client"

import { useState } from "react"
import Script from "next/script"
import CalculatorLayout from "../components/CalculatorLayout"

export default function IskontoHesaplama() {
  const [indirimTutari, setIndirimTutari] = useState("")
  const [indirimliFiyat, setIndirimliFiyat] = useState("")

  function hesapla() {
    const fiyat = Number((document.getElementById("fiyat") as HTMLInputElement).value)
    const oran = Number((document.getElementById("oran") as HTMLInputElement).value)

    if (!fiyat || !oran) {
      setIndirimTutari("Lütfen tüm alanları doldurun")
      setIndirimliFiyat("")
      return
    }

    const indirim = fiyat * (oran / 100)
    const yeniFiyat = fiyat - indirim

    setIndirimTutari(indirim.toFixed(2) + " TL")
    setIndirimliFiyat(yeniFiyat.toFixed(2) + " TL")
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "İskonto hesaplama nasıl yapılır?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ürün fiyatı indirim oranı ile çarpılır ve çıkan tutar ana fiyattan düşülür.",
        },
      },
      {
        "@type": "Question",
        name: "İndirimli fiyat nasıl bulunur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Önce indirim tutarı hesaplanır, sonra bu tutar ürün fiyatından çıkarılır.",
        },
      },
      {
        "@type": "Question",
        name: "Yüzde 20 indirim nasıl hesaplanır?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ürün fiyatı 20 ile çarpılır ve 100’e bölünür. Çıkan indirim tutarı ana fiyattan düşülür.",
        },
      },
      {
        "@type": "Question",
        name: "Bu araç hangi işlemler için kullanılabilir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kampanya indirimi, ürün fiyatı düşüşü, satış iskonto oranı ve ticari fiyat hesapları için kullanılabilir.",
        },
      },
    ],
  }

  return (
    <>
      <Script
        id="iskonto-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <CalculatorLayout
        title="İskonto Hesaplama (İndirim Oranı ve Fiyat Hesaplama) 2026"
        description="İskonto hesaplama aracı ile ürün indirimi, indirim oranı ve indirimli fiyatı anında hesaplayın. Yüzde indirim hesaplama 2026 güncel araç."
      >
        <div className="space-y-5">
          <p className="rounded-2xl border border-blue-100 bg-blue-50 p-4 text-sm leading-6 text-gray-700">
            İskonto hesaplama aracı ile ürün fiyatına uygulanan indirim oranına göre ne kadar
            indirim yapılacağını ve yeni fiyatı saniyeler içinde öğrenebilirsiniz.
          </p>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Ürün Fiyatı (TL)
            </label>

            <input
              id="fiyat"
              type="number"
              placeholder="Örn: 1000"
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              İndirim Oranı (%)
            </label>

            <input
              id="oran"
              type="number"
              placeholder="Örn: 20"
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:bg-white"
            />
          </div>

          <button
            onClick={hesapla}
            className="w-full rounded-xl bg-blue-600 py-3 text-lg font-semibold text-white transition hover:bg-blue-700"
          >
            Hesapla
          </button>
        </div>

        {indirimTutari && (
          <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-5">
            <p className="text-lg font-semibold text-blue-900 mb-3">
              İskonto Sonucu
            </p>

            <p className="text-gray-800">
              <strong>İndirim Tutarı:</strong> {indirimTutari}
            </p>

            <p className="text-gray-800">
              <strong>İndirimli Fiyat:</strong> {indirimliFiyat}
            </p>
          </div>
        )}

        <div className="mt-12 space-y-8 text-gray-700 leading-7">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              İskonto Hesaplama Nedir?
            </h2>

            <p className="mb-4">
              İskonto hesaplama, bir ürün veya hizmet fiyatına uygulanan indirim
              oranına göre düşecek tutarı ve yeni satış fiyatını bulmak için
              kullanılır. Özellikle mağaza kampanyalarında, toptan satışlarda,
              e-ticaret indirimlerinde ve ticari fiyatlandırmalarda en çok
              kullanılan hesaplamalardan biridir.
            </p>

            <p>
              Bu araç ile ürün fiyatını ve indirim oranını girerek iskonto
              tutarını ve indirimli fiyatı saniyeler içinde öğrenebilirsiniz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              İskonto Nasıl Hesaplanır?
            </h2>

            <p className="mb-4">
              İskonto hesaplamasında önce ürün fiyatı indirim oranı ile çarpılır.
              Bulunan indirim tutarı ana fiyattan çıkarılarak indirimli fiyat
              hesaplanır.
            </p>

            <p className="font-semibold text-gray-900 mb-4">
              İndirim Tutarı = Fiyat × İndirim Oranı / 100
            </p>

            <p className="font-semibold text-gray-900 mb-4">
              İndirimli Fiyat = Fiyat - İndirim Tutarı
            </p>

            <p>
              Örneğin 1000 TL fiyatlı bir üründe yüzde 20 iskonto varsa indirim
              tutarı 200 TL, indirimli fiyat ise 800 TL olur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Örnek İskonto Hesaplamaları
            </h2>

            <div className="space-y-4">
              <p>
                <strong>1000 TL ürün, %10 indirim:</strong> 100 TL indirim, 900 TL yeni fiyat
              </p>

              <p>
                <strong>1500 TL ürün, %20 indirim:</strong> 300 TL indirim, 1200 TL yeni fiyat
              </p>

              <p>
                <strong>2000 TL ürün, %25 indirim:</strong> 500 TL indirim, 1500 TL yeni fiyat
              </p>

              <p>
                <strong>5000 TL ürün, %30 indirim:</strong> 1500 TL indirim, 3500 TL yeni fiyat
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              İskonto Hesaplama Nerelerde Kullanılır?
            </h2>

            <ul className="list-disc ml-5 space-y-2">
              <li>Mağaza ve kampanya indirimlerinde</li>
              <li>E-ticaret ürün fiyatı düşüşlerinde</li>
              <li>Toptan satış fiyatlandırmalarında</li>
              <li>Ticari teklif ve iskonto oranı hesaplarında</li>
              <li>İndirimli ürün fiyatını hızlıca görmek için</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Sık Sorulan Sorular
            </h2>

            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  İskonto hesaplama nasıl yapılır?
                </h3>
                <p>
                  Ürün fiyatı indirim oranı ile çarpılır ve çıkan tutar ana fiyattan düşülür.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  İndirimli fiyat nasıl bulunur?
                </h3>
                <p>
                  Önce indirim tutarı hesaplanır, sonra bu tutar ürün fiyatından çıkarılır.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Yüzde 20 indirim nasıl hesaplanır?
                </h3>
                <p>
                  Ürün fiyatı 20 ile çarpılır ve 100’e bölünür. Çıkan indirim tutarı ana fiyattan düşülür.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Bu araç hangi işlemler için kullanılabilir?
                </h3>
                <p>
                  Kampanya indirimi, ürün fiyatı düşüşü, satış iskonto oranı ve ticari fiyat hesapları için kullanılabilir.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              İlgili Hesaplama Araçları
            </h2>

            <ul className="list-disc ml-5 space-y-1">
              <li>
                <a href="/yuzde-hesaplama" className="text-blue-600 hover:underline">
                  Yüzde Hesaplama
                </a>
              </li>
              <li>
                <a href="/yuzde-degisim-hesaplama" className="text-blue-600 hover:underline">
                  Yüzde Değişim Hesaplama
                </a>
              </li>
              <li>
                <a href="/kdv-hesaplama" className="text-blue-600 hover:underline">
                  KDV Hesaplama
                </a>
              </li>
            </ul>
          </section>
        </div>
      </CalculatorLayout>
    </>
  )
}