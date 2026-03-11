"use client"

import { useState } from "react"
import CalculatorLayout from "../components/CalculatorLayout"

export default function Page() {
  const [sonuc, setSonuc] = useState("")

  function hesapla() {
    const dolar = Number((document.getElementById("dolar") as HTMLInputElement).value)
    const kur = Number((document.getElementById("kur") as HTMLInputElement).value)

    if (!dolar || !kur) {
      setSonuc("Lütfen tüm alanları doldur")
      return
    }

    const tl = dolar * kur
    setSonuc(tl.toFixed(2) + " TL")
  }

  return (
    <CalculatorLayout
      title="Dolar Hesaplama"
      description="Dolar miktarını güncel dolar kuru ile TL karşılığına kolayca çevirin. USD - TL dönüşümünü saniyeler içinde hesaplayın."
    >
      <div className="space-y-5">

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Dolar Miktarı
          </label>
          <input
            id="dolar"
            type="number"
            placeholder="Örn: 100"
            className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:bg-white"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Dolar Kuru
          </label>
          <input
            id="kur"
            type="number"
            placeholder="Örn: 32.50"
            className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:bg-white"
          />
        </div>

        <button
          onClick={hesapla}
          className="w-full rounded-xl bg-green-600 py-3 text-lg font-semibold text-white transition hover:bg-green-700"
        >
          Hesapla
        </button>

      </div>

      {sonuc && (
        <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-5">
          <p className="text-lg font-semibold text-green-900 mb-3">Sonuç</p>
          <p className="text-gray-800"><strong>TL Karşılığı:</strong> {sonuc}</p>
        </div>
      )}

      <div className="mt-12 space-y-8 text-gray-700 leading-7">

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Dolar Hesaplama Nedir?
          </h2>
          <p className="mb-4">
            Dolar hesaplama, sahip olduğunuz dolar miktarının güncel dolar kuru
            ile Türk Lirası karşılığını bulmanızı sağlayan bir işlemdir.
            Özellikle döviz yatırımı yapan kişiler, yurtdışı ödeme yapanlar
            veya döviz birikimi olan kişiler için doların TL karşılığını
            hızlı şekilde hesaplamak önemlidir.
          </p>
          <p>
            Bu sayfadaki dolar hesaplama aracı ile dolar miktarını ve dolar
            kurunu girerek TL karşılığını saniyeler içinde öğrenebilirsiniz.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Dolar TL Hesaplama Nasıl Yapılır?
          </h2>
          <p className="mb-4">
            Doların TL karşılığı hesaplanırken dolar miktarı ile dolar kuru
            çarpılır.
          </p>

          <p className="font-semibold text-gray-900 mb-4">
            TL Değeri = Dolar Miktarı × Dolar Kuru
          </p>

          <p>
            Örneğin 100 dolarınız varsa ve dolar kuru 32,50 TL ise
            toplam değer 100 × 32,50 = 3.250 TL olur.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Örnek Dolar Hesaplama
          </h2>

          <div className="space-y-4">
            <p><strong>100 dolar:</strong> Kur 32 TL ise toplam değer 3.200 TL olur.</p>
            <p><strong>500 dolar:</strong> Kur 32,50 TL ise toplam değer 16.250 TL olur.</p>
            <p><strong>1000 dolar:</strong> Kur 33 TL ise toplam değer 33.000 TL olur.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Dolar Hesaplama Nerelerde Kullanılır?
          </h2>

          <ul className="list-disc ml-5 space-y-2">
            <li>Döviz yatırımının TL karşılığını öğrenmek</li>
            <li>Yurtdışı alışverişlerinde ödeme tutarını hesaplamak</li>
            <li>Döviz bozdururken toplam TL değerini görmek</li>
            <li>Döviz portföyünün değerini hesaplamak</li>
            <li>Farklı kur senaryolarını karşılaştırmak</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Sık Sorulan Sorular
          </h2>

          <div className="space-y-5">

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Dolar TL hesaplama nasıl yapılır?
              </h3>
              <p>
                Dolar miktarı ile dolar kuru çarpılarak TL karşılığı bulunur.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Dolar kuru neden sürekli değişir?
              </h3>
              <p>
                Döviz kurları küresel piyasa hareketleri, ekonomik veriler,
                faiz oranları ve arz-talep dengesi gibi birçok faktöre bağlı
                olarak sürekli değişebilir.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Bu araç başka dövizler için kullanılabilir mi?
              </h3>
              <p>
                Aynı mantıkla euro veya diğer dövizlerin TL karşılığı da
                hesaplanabilir. Sadece ilgili döviz kuru girilmelidir.
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
              <a href="/altin-hesaplama" className="text-blue-600 hover:underline">
                Altın Hesaplama
              </a>
            </li>
            <li>
              <a href="/faiz-hesaplama" className="text-blue-600 hover:underline">
                Faiz Hesaplama
              </a>
            </li>
            <li>
              <a href="/enflasyon-hesaplama" className="text-blue-600 hover:underline">
                Enflasyon Hesaplama
              </a>
            </li>
          </ul>
        </section>

      </div>
    </CalculatorLayout>
  )
}