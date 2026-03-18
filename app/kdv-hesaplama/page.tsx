"use client"

import { useState } from "react"
import Script from "next/script"
import CalculatorLayout from "../components/CalculatorLayout"

export default function Page() {
  const [sonuc, setSonuc] = useState("")
  const [kdvTutari, setKdvTutari] = useState("")

  function oranAyarla(deger: number) {
    const oranInput = document.getElementById("oran") as HTMLInputElement
    if (oranInput) {
      oranInput.value = String(deger)
    }
  }

  function hesapla() {
    const tutar = Number((document.getElementById("tutar") as HTMLInputElement).value)
    const oran = Number((document.getElementById("oran") as HTMLInputElement).value)

    if (!tutar || !oran) {
      setSonuc("Lütfen tüm alanları doldur")
      setKdvTutari("")
      return
    }

    const kdv = tutar * (oran / 100)
    const toplam = tutar + kdv

    setKdvTutari(kdv.toFixed(2) + " TL")
    setSonuc(toplam.toFixed(2) + " TL")
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "KDV hesaplama nasıl yapılır?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "KDV hesaplama için tutar, KDV oranı ile çarpılır ve 100’e bölünür. Çıkan değer KDV tutarıdır. Bu tutar ana fiyata eklenerek KDV dahil toplam bulunur.",
        },
      },
      {
        "@type": "Question",
        name: "KDV dahil fiyat nasıl hesaplanır?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "KDV dahil fiyat, ürün veya hizmet tutarına KDV tutarı eklenerek hesaplanır. Formül: KDV dahil fiyat = Tutar + KDV tutarı.",
        },
      },
      {
        "@type": "Question",
        name: "Türkiye’de en sık kullanılan KDV oranları nelerdir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Türkiye’de en sık kullanılan KDV oranları yüzde 1, yüzde 10 ve yüzde 20’dir.",
        },
      },
      {
        "@type": "Question",
        name: "1000 TL’nin yüzde 20 KDV’si ne kadar eder?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "1000 TL’nin yüzde 20 KDV’si 200 TL’dir. KDV dahil toplam ise 1200 TL olur.",
        },
      },
    ],
  }

  return (
    <>
      <Script
        id="kdv-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <CalculatorLayout
        title="KDV Hesaplama (KDV Dahil ve Hariç Fiyat Hesaplama) 2026"
        description="KDV hesaplama aracı ile KDV tutarını ve KDV dahil toplam fiyatı anında hesaplayın. Yüzde 1, yüzde 10 ve yüzde 20 KDV hesaplama için güncel araç."
      >
        <div className="space-y-5">
          <p className="rounded-2xl border border-blue-100 bg-blue-50 p-4 text-sm leading-6 text-gray-700">
            KDV hesaplama aracı ile ürün veya hizmet tutarına göre Katma Değer Vergisi
            tutarını ve KDV dahil toplam fiyatı saniyeler içinde öğrenebilirsiniz.
          </p>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Tutar
            </label>
            <input
              id="tutar"
              type="number"
              placeholder="Örn: 1000"
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              KDV Oranı (%)
            </label>
            <input
              id="oran"
              type="number"
              placeholder="Örn: 20"
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:bg-white"
            />
          </div>

          <div>
            <p className="mb-2 text-sm font-semibold text-gray-700">
              Sık Kullanılan KDV Oranları
            </p>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => oranAyarla(1)}
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-blue-500 hover:text-blue-600"
              >
                %1
              </button>

              <button
                type="button"
                onClick={() => oranAyarla(10)}
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-blue-500 hover:text-blue-600"
              >
                %10
              </button>

              <button
                type="button"
                onClick={() => oranAyarla(20)}
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-blue-500 hover:text-blue-600"
              >
                %20
              </button>
            </div>
          </div>

          <button
            onClick={hesapla}
            className="w-full rounded-xl bg-blue-600 py-3 text-lg font-semibold text-white transition hover:bg-blue-700"
          >
            Hesapla
          </button>
        </div>

        {sonuc && (
          <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-5">
            <p className="mb-3 text-lg font-semibold text-blue-900">Sonuç</p>

            <div className="space-y-2 text-gray-800">
              {kdvTutari && (
                <p>
                  <strong>KDV Tutarı:</strong> {kdvTutari}
                </p>
              )}

              <p>
                <strong>KDV Dahil Toplam:</strong> {sonuc}
              </p>
            </div>
          </div>
        )}

        <div className="mt-12 space-y-8 text-gray-700 leading-7">
          <section>
            <h2 className="mb-3 text-2xl font-bold text-gray-900">
              KDV Hesaplama Nedir?
            </h2>

            <p className="mb-4">
              KDV hesaplama, bir ürün veya hizmet bedeline uygulanacak Katma Değer
              Vergisi tutarını ve vergi eklendikten sonraki toplam fiyatı bulmak için
              kullanılır. Özellikle e-ticaret, perakende satış, fatura düzenleme,
              muhasebe ve ticari teklif hazırlama süreçlerinde en çok kullanılan
              hesaplamalardan biridir.
            </p>

            <p>
              Bu araç ile ürün tutarını ve KDV oranını girerek KDV tutarını ve KDV
              dahil toplam fiyatı hızlıca öğrenebilirsiniz.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-gray-900">
              KDV Hesaplama Nasıl Yapılır?
            </h2>

            <p className="mb-4">
              KDV hesaplamasında önce tutar ile vergi oranı çarpılır. Elde edilen
              sonuç 100’e bölünerek KDV tutarı bulunur. Daha sonra bu vergi tutarı ana
              fiyata eklenerek KDV dahil toplam hesaplanır.
            </p>

            <p className="mb-4 font-semibold text-gray-900">
              KDV Tutarı = Tutar × KDV Oranı / 100
            </p>

            <p className="mb-4 font-semibold text-gray-900">
              KDV Dahil Toplam = Tutar + KDV Tutarı
            </p>

            <p>
              Örneğin 1000 TL tutarındaki bir ürün için yüzde 20 KDV uygulanırsa KDV
              tutarı 200 TL, KDV dahil toplam fiyat ise 1200 TL olur.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-gray-900">
              Türkiye’de Sık Kullanılan KDV Oranları
            </h2>

            <ul className="list-disc ml-5 space-y-2">
              <li>
                <strong>%1 KDV:</strong> Bazı temel ürünlerde ve özel uygulamalarda
              </li>
              <li>
                <strong>%10 KDV:</strong> Belirli ürün ve hizmet gruplarında
              </li>
              <li>
                <strong>%20 KDV:</strong> En yaygın genel KDV oranı
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-gray-900">
              Örnek KDV Hesaplamaları
            </h2>

            <div className="space-y-4">
              <p>
                <strong>1000 TL ürün, %20 KDV:</strong> 200 TL KDV, 1200 TL toplam
              </p>

              <p>
                <strong>1500 TL ürün, %10 KDV:</strong> 150 TL KDV, 1650 TL toplam
              </p>

              <p>
                <strong>5000 TL ürün, %1 KDV:</strong> 50 TL KDV, 5050 TL toplam
              </p>

              <p>
                <strong>2500 TL hizmet, %20 KDV:</strong> 500 TL KDV, 3000 TL toplam
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-gray-900">
              KDV Hesaplama Nerelerde Kullanılır?
            </h2>

            <ul className="list-disc ml-5 space-y-2">
              <li>Ürün satış fiyatı oluştururken</li>
              <li>Fatura ve teklif hazırlarken</li>
              <li>E-ticaret ürün fiyatlarını belirlerken</li>
              <li>Muhasebe ve vergi işlemlerinde</li>
              <li>KDV dahil toplam tutarı hızlıca görmek için</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-gray-900">
              Sık Sorulan Sorular
            </h2>

            <div className="space-y-5">
              <div>
                <h3 className="mb-1 text-lg font-semibold text-gray-900">
                  KDV hesaplama nasıl yapılır?
                </h3>
                <p>
                  Tutar, KDV oranı ile çarpılır ve 100’e bölünür. Bulunan KDV tutarı
                  ana fiyata eklenerek toplam fiyat hesaplanır.
                </p>
              </div>

              <div>
                <h3 className="mb-1 text-lg font-semibold text-gray-900">
                  KDV dahil fiyat nasıl bulunur?
                </h3>
                <p>
                  Önce KDV tutarı hesaplanır, sonra bu tutar ürün veya hizmet
                  bedeline eklenir.
                </p>
              </div>

              <div>
                <h3 className="mb-1 text-lg font-semibold text-gray-900">
                  1000 TL’nin yüzde 20 KDV’si ne kadardır?
                </h3>
                <p>
                  1000 TL’nin yüzde 20 KDV’si 200 TL’dir. KDV dahil toplam ise 1200
                  TL olur.
                </p>
              </div>

              <div>
                <h3 className="mb-1 text-lg font-semibold text-gray-900">
                  En sık kullanılan KDV oranları nelerdir?
                </h3>
                <p>
                  Türkiye’de en sık kullanılan KDV oranları yüzde 1, yüzde 10 ve
                  yüzde 20’dir.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-gray-900">
              İlgili Hesaplama Araçları
            </h2>

            <ul className="list-disc ml-5 space-y-1">
              <li>
                <a href="/yuzde-hesaplama" className="text-blue-600 hover:underline">
                  Yüzde Hesaplama
                </a>
              </li>
              <li>
                <a href="/iskonto-hesaplama" className="text-blue-600 hover:underline">
                  İskonto Hesaplama
                </a>
              </li>
              <li>
                <a href="/kar-zarar-hesaplama" className="text-blue-600 hover:underline">
                  Kar / Zarar Hesaplama
                </a>
              </li>
              <li>
                <a href="/faiz-hesaplama" className="text-blue-600 hover:underline">
                  Faiz Hesaplama
                </a>
              </li>
              <li>
  <a href="/emekli-maasi-hesaplama" className="text-blue-600 hover:underline">
    Emekli Maaşı Hesaplama
  </a>
</li>
            </ul>
          </section>
        </div>
      </CalculatorLayout>
    </>
  )
}