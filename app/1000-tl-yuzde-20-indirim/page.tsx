"use client"

import Script from "next/script"
import CalculatorLayout from "../components/CalculatorLayout"

export default function Indirim1000Tl20Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "1000 TL'nin yüzde 20 indirimi ne kadar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "1000 TL'nin yüzde 20 indirimi 200 TL'dir. İndirimli fiyat ise 800 TL olur.",
        },
      },
      {
        "@type": "Question",
        name: "Yüzde 20 indirim nasıl hesaplanır?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ürün fiyatı 20 ile çarpılır ve 100'e bölünür. Bulunan indirim tutarı ana fiyattan çıkarılır.",
        },
      },
      {
        "@type": "Question",
        name: "1000 TL ürün 200 TL indirim alırsa yeni fiyat kaç olur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "1000 TL ürün 200 TL indirim alırsa yeni fiyat 800 TL olur.",
        },
      },
    ],
  }

  return (
    <>
      <Script
        id="indirim-1000-20-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <CalculatorLayout
        title="1000 TL %20 İndirim Ne Kadar? (İndirimli Fiyat Hesaplama)"
        description="1000 TL'nin yüzde 20 indirimi 200 TL'dir. İndirimli fiyat 800 TL olur. 1000 TL %20 indirim hesaplama sayfası."
      >
        <div className="space-y-6">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
            <h2 className="mb-3 text-2xl font-bold text-blue-900">
              1000 TL’nin %20 İndirimi Ne Kadar?
            </h2>

            <p className="mb-2 text-gray-800">
              <strong>İndirim Tutarı:</strong> 200 TL
            </p>

            <p className="text-gray-800">
              <strong>İndirimli Fiyat:</strong> 800 TL
            </p>
          </div>

          <p className="rounded-2xl border border-gray-200 bg-gray-50 p-4 text-sm leading-6 text-gray-700">
            1000 TL tutarındaki bir ürüne yüzde 20 indirim uygulandığında 200 TL indirim yapılır
            ve ürünün yeni fiyatı 800 TL olur. Daha farklı işlemler için{" "}
            <a href="/iskonto-hesaplama" className="text-blue-600 hover:underline">
              iskonto hesaplama
            </a>
            ,{" "}
            <a href="/yuzde-hesaplama" className="text-blue-600 hover:underline">
              yüzde hesaplama
            </a>{" "}
            ve{" "}
            <a href="/kdv-hesaplama" className="text-blue-600 hover:underline">
              KDV hesaplama
            </a>{" "}
            araçlarını da kullanabilirsiniz.
          </p>
        </div>

        <div className="mt-12 space-y-8 text-gray-700 leading-7">
          <section>
            <h2 className="mb-3 text-2xl font-bold text-gray-900">
              1000 TL %20 İndirim Hesabı Nasıl Yapılır?
            </h2>

            <p className="mb-4">
              1000 TL’nin yüzde 20 indirimi hesaplanırken önce 1000 sayısı 20 ile çarpılır,
              ardından 100’e bölünür. Böylece indirim tutarı bulunur.
            </p>

            <p className="mb-4 font-semibold text-gray-900">
              İndirim Tutarı = 1000 × 20 / 100 = 200 TL
            </p>

            <p className="font-semibold text-gray-900">
              İndirimli Fiyat = 1000 - 200 = 800 TL
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-gray-900">
              Sonuç Kısa Cevap
            </h2>

            <p>
              1000 TL fiyatlı bir ürün için yüzde 20 indirim uygulandığında indirim tutarı 200 TL
              olur. Ürünün yeni satış fiyatı ise 800 TL’ye düşer.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-gray-900">
              Bu Hesaplama Nerede Kullanılır?
            </h2>

            <ul className="ml-5 list-disc space-y-2">
              <li>Mağaza kampanyalarında</li>
              <li>E-ticaret indirimlerinde</li>
              <li>Market ve teknoloji ürünlerinde</li>
              <li>Etiket üzerinden hızlı indirim kontrolünde</li>
            </ul>
          </section>

          <section>
  <h2 className="text-2xl font-bold text-gray-900 mb-3">
    Benzer Hesaplamalar
  </h2>

  <ul className="list-disc ml-5 space-y-1 text-gray-700">
    <li>
      <a href="/500-tl-yuzde-30-indirim" className="text-blue-600 hover:underline">
        500 TL %30 indirim ne kadar?
      </a>
    </li>
    <li>
      <a href="/2000-tl-yuzde-10-indirim" className="text-blue-600 hover:underline">
        2000 TL %10 indirim ne kadar?
      </a>
    </li>
    <li>
      <a href="/15000-tl-yuzde-25-maas-zam" className="text-blue-600 hover:underline">
        15000 TL %25 maaş zammı ne kadar?
      </a>
    </li>
  </ul>
</section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-gray-900">
              Sık Sorulan Sorular
            </h2>

            <div className="space-y-5">
              <div>
                <h3 className="mb-1 text-lg font-semibold text-gray-900">
                  1000 TL’nin yüzde 20 indirimi ne kadar?
                </h3>
                <p>1000 TL’nin yüzde 20 indirimi 200 TL’dir.</p>
              </div>

              <div>
                <h3 className="mb-1 text-lg font-semibold text-gray-900">
                  1000 TL ürünün indirimli fiyatı kaç olur?
                </h3>
                <p>Yüzde 20 indirim sonrası yeni fiyat 800 TL olur.</p>
              </div>

              <div>
                <h3 className="mb-1 text-lg font-semibold text-gray-900">
                  Yüzde 20 indirim nasıl bulunur?
                </h3>
                <p>Fiyat 20 ile çarpılır ve 100’e bölünür. Bulunan tutar ana fiyattan çıkarılır.</p>
              </div>
            </div>
          </section>
        </div>
      </CalculatorLayout>
    </>
  )
}