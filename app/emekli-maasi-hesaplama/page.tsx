"use client"

import { useState } from "react"
import Script from "next/script"
import CalculatorLayout from "../components/CalculatorLayout"

export default function EmekliMaasiHesaplama() {
  const [sonuc, setSonuc] = useState("")
  const [zamTutari, setZamTutari] = useState("")

  function oranAyarla(deger: number) {
    const oranInput = document.getElementById("oran") as HTMLInputElement
    if (oranInput) {
      oranInput.value = String(deger)
    }
  }

  function hesapla() {
    const maas = Number((document.getElementById("maas") as HTMLInputElement).value)
    const oran = Number((document.getElementById("oran") as HTMLInputElement).value)

    if (!maas || !oran) {
      setSonuc("Lütfen tüm alanları doldurun")
      setZamTutari("")
      return
    }

    const artis = maas * oran / 100
    const yeniMaas = maas + artis

    setZamTutari(artis.toFixed(2) + " TL")
    setSonuc(yeniMaas.toFixed(2) + " TL")
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Emekli maaşı zam hesaplama nasıl yapılır?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mevcut emekli maaşı zam oranı ile çarpılır ve çıkan zam tutarı mevcut maaşa eklenir. Böylece yeni emekli maaşı hesaplanır.",
        },
      },
      {
        "@type": "Question",
        name: "15000 TL emekli maaşı yüzde 25 zam alırsa ne kadar olur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "15000 TL emekli maaşı yüzde 25 zam alırsa zam tutarı 3750 TL olur ve yeni maaş 18750 TL’ye yükselir.",
        },
      },
      {
        "@type": "Question",
        name: "Emekli maaşı zammı neye göre belirlenir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Emekli maaşı zamları genellikle enflasyon oranı, toplu sözleşme farkı ve bazı dönemlerde açıklanan ek artış oranlarına göre belirlenir.",
        },
      },
      {
        "@type": "Question",
        name: "Bu araç ne için kullanılır?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bu araç mevcut emekli maaşına uygulanacak zam oranına göre yeni maaşı hızlıca hesaplamak için kullanılır.",
        },
      },
    ],
  }

  return (
    <>
      <Script
        id="emekli-maasi-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <CalculatorLayout
        title="Emekli Maaşı Zam Hesaplama (Yeni Maaş Hesapla) 2026"
        description="Emekli maaşı zam hesaplama aracı ile mevcut maaşınıza göre zam tutarını ve yeni maaşınızı anında hesaplayın. 2026 güncel hesaplama aracı."
      >
        <div className="space-y-5">
          <p className="rounded-2xl border border-blue-100 bg-blue-50 p-4 text-sm leading-6 text-gray-700">
            Emekli maaşı zam hesaplama aracı ile mevcut maaşınıza uygulanacak zam oranına göre
            yeni emekli maaşınızı ve zam tutarını saniyeler içinde öğrenebilirsiniz.
          </p>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Mevcut Emekli Maaşı
            </label>

            <input
              id="maas"
              type="number"
              placeholder="Örn: 15000"
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Zam Oranı (%)
            </label>

            <input
              id="oran"
              type="number"
              placeholder="Örn: 25"
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:bg-white"
            />
          </div>

          <div>
            <p className="mb-2 text-sm font-semibold text-gray-700">
              Sık Kullanılan Zam Oranları
            </p>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => oranAyarla(10)}
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-blue-500 hover:text-blue-600"
              >
                %10
              </button>

              <button
                type="button"
                onClick={() => oranAyarla(15)}
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-blue-500 hover:text-blue-600"
              >
                %15
              </button>

              <button
                type="button"
                onClick={() => oranAyarla(20)}
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-blue-500 hover:text-blue-600"
              >
                %20
              </button>

              <button
                type="button"
                onClick={() => oranAyarla(25)}
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-blue-500 hover:text-blue-600"
              >
                %25
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
            <p className="text-lg font-semibold text-blue-900 mb-3">
              Zamlı Emekli Maaşı
            </p>

            <p className="text-gray-800 mb-2">
              <strong>Zam Tutarı:</strong> {zamTutari}
            </p>

            <p className="text-gray-800">
              <strong>Yeni Maaş:</strong> {sonuc}
            </p>
          </div>
        )}

        <div className="mt-12 space-y-8 text-gray-700 leading-7">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Emekli Maaşı Zam Hesaplama Nedir?
            </h2>

            <p className="mb-4">
              Emekli maaşı zam hesaplama, mevcut emekli maaşına uygulanacak artış oranına göre
              yeni maaşın ne kadar olacağını bulmak için kullanılır. Özellikle maaş zammı
              açıklandığında, emekliler yeni maaşlarını hızlıca öğrenmek için bu hesaplamayı yapar.
            </p>

            <p>
              Bu araç ile mevcut maaşınızı ve zam oranını girerek zam tutarını ve yeni emekli
              maaşınızı saniyeler içinde hesaplayabilirsiniz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Emekli Maaşı Zam Hesabı Nasıl Yapılır?
            </h2>

            <p className="mb-4">
              Zam hesaplamasında mevcut maaş zam oranı ile çarpılır. Bulunan zam tutarı ana maaşa
              eklenerek yeni maaş hesaplanır.
            </p>

            <p className="font-semibold text-gray-900 mb-4">
              Zam Tutarı = Mevcut Maaş × Zam Oranı / 100
            </p>

            <p className="font-semibold text-gray-900 mb-4">
              Yeni Maaş = Mevcut Maaş + Zam Tutarı
            </p>

            <p>
              Örneğin 15000 TL emekli maaşına yüzde 25 zam uygulanırsa zam tutarı 3750 TL,
              yeni maaş ise 18750 TL olur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Örnek Emekli Maaşı Zam Hesaplamaları
            </h2>

            <div className="space-y-4">
              <p>
                <strong>12000 TL maaş, %10 zam:</strong> 1200 TL zam, 13200 TL yeni maaş
              </p>

              <p>
                <strong>15000 TL maaş, %20 zam:</strong> 3000 TL zam, 18000 TL yeni maaş
              </p>

              <p>
                <strong>15000 TL maaş, %25 zam:</strong> 3750 TL zam, 18750 TL yeni maaş
              </p>

              <p>
                <strong>20000 TL maaş, %15 zam:</strong> 3000 TL zam, 23000 TL yeni maaş
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Emekli Maaşı Zammı Neye Göre Belirlenir?
            </h2>

            <p className="mb-4">
              Emekli maaşı zamları genellikle açıklanan enflasyon oranları, dönemsel maaş artışları
              ve bazı durumlarda ek refah payı gibi unsurlar dikkate alınarak belirlenir.
            </p>

            <p>
              Bu nedenle zam oranı açıklandığında, mevcut maaş üzerinden hızlı bir hesaplama yapmak
              yeni maaşı görmek açısından oldukça faydalıdır.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Bu Hesaplama Aracı Nerelerde Kullanılır?
            </h2>

            <ul className="list-disc ml-5 space-y-2">
              <li>Emekli maaşı artışını önceden görmek için</li>
              <li>Açıklanan zam oranına göre yeni maaşı hesaplamak için</li>
              <li>Zam tutarını ayrı görmek için</li>
              <li>Farklı oranlara göre karşılaştırma yapmak için</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Sık Sorulan Sorular
            </h2>

            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Emekli maaşı zam hesaplama nasıl yapılır?
                </h3>
                <p>
                  Mevcut maaş zam oranı ile çarpılır ve çıkan tutar mevcut maaşa eklenir.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  15000 TL emekli maaşı yüzde 25 zam alırsa ne kadar olur?
                </h3>
                <p>
                  15000 TL maaşa yüzde 25 zam uygulanırsa yeni maaş 18750 TL olur.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Emekli maaşı zammı neye göre belirlenir?
                </h3>
                <p>
                  Genellikle enflasyon oranı, dönemsel artışlar ve bazı ek düzenlemelere göre belirlenir.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Bu araç ne için kullanılır?
                </h3>
                <p>
                  Mevcut emekli maaşına göre zamlı yeni maaşı hızlıca hesaplamak için kullanılır.
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
                <a href="/maas-hesaplama" className="text-blue-600 hover:underline">
                  Net Maaş Hesaplama
                </a>
              </li>
              <li>
                <a href="/enflasyon-hesaplama" className="text-blue-600 hover:underline">
                  Enflasyon Hesaplama
                </a>
              </li>
              <li>
                <a href="/faiz-hesaplama" className="text-blue-600 hover:underline">
                  Faiz Hesaplama
                </a>
              </li>
              <li>
                <a href="/kredi-hesaplama" className="text-blue-600 hover:underline">
                  Kredi Hesaplama
                </a>
              </li>
            </ul>
          </section>
        </div>
      </CalculatorLayout>
    </>
  )
}