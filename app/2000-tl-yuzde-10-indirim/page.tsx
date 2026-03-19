"use client"

import CalculatorLayout from "../components/CalculatorLayout"
import RelatedCalculations from "../components/RelatedCalculations"

export default function Page() {
  return (
    <CalculatorLayout
      title="2000 TL %10 İndirim Ne Kadar?"
      description="2000 TL'nin yüzde 10 indirimi 200 TL'dir. İndirimli fiyat 1800 TL olur. Hızlı hesaplama ve örnekler burada."
    >
      <div className="space-y-8">
        
        <section className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
          <h1 className="text-2xl font-bold text-blue-900 mb-3">
            2000 TL’nin %10 İndirimi Ne Kadar?
          </h1>

          <p className="text-gray-800 mb-2">
            <strong>İndirim Tutarı:</strong> 200 TL
          </p>

          <p className="text-gray-800">
            <strong>İndirimli Fiyat:</strong> 1800 TL
          </p>
        </section>

        <section className="text-gray-700 leading-7 space-y-4">
          <p>
            2000 TL fiyatındaki bir ürüne yüzde 10 indirim uygulandığında 200 TL indirim yapılır
            ve ürünün yeni fiyatı 1800 TL olur.
          </p>

          <p>
            Daha farklı hesaplamalar için{" "}
            <a href="/iskonto-hesaplama" className="text-blue-600 hover:underline">
              İskonto Hesaplama
            </a>{" "}
            ve{" "}
            <a href="/yuzde-hesaplama" className="text-blue-600 hover:underline">
              Yüzde Hesaplama
            </a>{" "}
            araçlarını kullanabilirsiniz.
          </p>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Hesaplama Mantığı
          </h2>

          <p className="font-semibold text-gray-900 mb-3">
            İndirim Tutarı = 2000 × 10 / 100 = 200 TL
          </p>

          <p className="font-semibold text-gray-900">
            İndirimli Fiyat = 2000 - 200 = 1800 TL
          </p>
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
              <a href="/iskonto-hesaplama" className="text-blue-600 hover:underline">
                İskonto Hesaplama
              </a>
            </li>
            <li>
              <a href="/kdv-hesaplama" className="text-blue-600 hover:underline">
                KDV Hesaplama
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Benzer Hesaplamalar
          </h2>

          <ul className="list-disc ml-5 space-y-1 text-gray-700">
            <li>
              <a href="/1000-tl-yuzde-20-indirim" className="text-blue-600 hover:underline">
                1000 TL %20 indirim ne kadar?
              </a>
            </li>
            <li>
              <a href="/500-tl-yuzde-30-indirim" className="text-blue-600 hover:underline">
                500 TL %30 indirim ne kadar?
              </a>
            </li>
            <li>15000 TL %25 maaş zammı ne kadar?</li>
          </ul>
        </section>

      </div>
      <RelatedCalculations />
    </CalculatorLayout>
  )
}