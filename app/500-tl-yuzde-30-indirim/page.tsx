"use client"

import CalculatorLayout from "../components/CalculatorLayout"

export default function Page() {
  return (
    <CalculatorLayout
      title="500 TL %30 İndirim Ne Kadar?"
      description="500 TL'nin yüzde 30 indirimi 150 TL'dir. İndirimli fiyat 350 TL olur. Hızlı hesaplama ve örnekler burada."
    >
      <div className="space-y-8">
        
        {/* CEVAP BLOĞU */}
        <section className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
          <h1 className="text-2xl font-bold text-blue-900 mb-3">
            500 TL’nin %30 İndirimi Ne Kadar?
          </h1>

          <p className="text-gray-800 mb-2">
            <strong>İndirim Tutarı:</strong> 150 TL
          </p>

          <p className="text-gray-800">
            <strong>İndirimli Fiyat:</strong> 350 TL
          </p>
        </section>

        {/* AÇIKLAMA */}
        <section className="text-gray-700 leading-7 space-y-4">
          <p>
            500 TL fiyatındaki bir ürüne yüzde 30 indirim uygulandığında 150 TL indirim yapılır
            ve ürünün yeni fiyatı 350 TL olur.
          </p>

          <p>
            Farklı hesaplamalar yapmak için{" "}
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

        {/* FORMÜL */}
        <section className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Hesaplama Mantığı
          </h2>

          <p className="font-semibold text-gray-900 mb-3">
            İndirim Tutarı = 500 × 30 / 100 = 150 TL
          </p>

          <p className="font-semibold text-gray-900">
            İndirimli Fiyat = 500 - 150 = 350 TL
          </p>
        </section>

        {/* İLGİLİ LİNKLER */}
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

        {/* BENZER SAYFALAR */}
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
            <li>2000 TL %10 indirim ne kadar?</li>
            <li>15000 TL %25 maaş zammı ne kadar?</li>
          </ul>
        </section>

      </div>
    </CalculatorLayout>
  )
}