"use client"

import CalculatorLayout from "../components/CalculatorLayout"
import RelatedCalculations from "../components/RelatedCalculations"

export default function Page() {
  return (
    <CalculatorLayout
      title="15000 TL %25 Zamlı Maaş Ne Kadar?"
      description="15000 TL maaşa yüzde 25 zam yapıldığında yeni maaş 18750 TL olur. Zam hesaplama ve örnekler burada."
    >
      <div className="space-y-8">

        {/* CEVAP */}
        <section className="rounded-2xl border border-green-200 bg-green-50 p-5">
          <h1 className="text-2xl font-bold text-green-900 mb-3">
            15000 TL’ye %25 Zam Yapılırsa Ne Kadar Olur?
          </h1>

          <p className="text-gray-800 mb-2">
            <strong>Zam Tutarı:</strong> 3750 TL
          </p>

          <p className="text-gray-800">
            <strong>Yeni Maaş:</strong> 18750 TL
          </p>
        </section>

        {/* AÇIKLAMA */}
        <section className="text-gray-700 leading-7 space-y-4">
          <p>
            15000 TL maaşa yüzde 25 zam uygulandığında maaş 3750 TL artar ve toplamda
            18750 TL olur.
          </p>

          <p>
            Maaş, zam ve oran hesaplamaları için{" "}
            <a href="/yuzde-hesaplama" className="text-blue-600 hover:underline">
              Yüzde Hesaplama
            </a>{" "}
            ve{" "}
            <a href="/iskonto-hesaplama" className="text-blue-600 hover:underline">
              İskonto Hesaplama
            </a>{" "}
            araçlarını kullanabilirsiniz.
          </p>
        </section>

        {/* FORMÜL */}
        <section className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Hesaplama Mantığı
          </h2>

          <p className="font-semibold text-gray-900 mb-3">
            Zam Tutarı = 15000 × 25 / 100 = 3750 TL
          </p>

          <p className="font-semibold text-gray-900">
            Yeni Maaş = 15000 + 3750 = 18750 TL
          </p>
        </section>

        {/* LİNKLER */}
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
              <a href="/emekli-maasi-hesaplama" className="text-blue-600 hover:underline">
                Emekli Maaşı Hesaplama
              </a>
            </li>
            <li>
              <a href="/net-maas-hesaplama" className="text-blue-600 hover:underline">
                Net Maaş Hesaplama
              </a>
            </li>
          </ul>
        </section>

        {/* BENZER */}
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
            <li>
              <a href="/2000-tl-yuzde-10-indirim" className="text-blue-600 hover:underline">
                2000 TL %10 indirim ne kadar?
              </a>
            </li>
          </ul>
        </section>

      </div>
      <RelatedCalculations />
    </CalculatorLayout>
  )
}