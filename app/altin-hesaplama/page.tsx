"use client"

import { useState } from "react"
import CalculatorLayout from "../components/CalculatorLayout"

export default function Page() {
  const [toplam, setToplam] = useState("")

  function hesapla() {
    const gram = Number((document.getElementById("gram") as HTMLInputElement).value)
    const gramFiyat = Number((document.getElementById("gramFiyat") as HTMLInputElement).value)

    if (!gram || !gramFiyat) {
      setToplam("Lütfen tüm alanları doldur")
      return
    }

    const sonuc = gram * gramFiyat
    setToplam(sonuc.toFixed(2) + " TL")
  }

  return (
    <CalculatorLayout
      title="Altın Hesaplama"
      description="Gram altın miktarına ve güncel gram altın fiyatına göre toplam altın değerini kolayca hesaplayın."
    >
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Gram Miktarı
          </label>
          <input
            id="gram"
            type="number"
            placeholder="Örn: 10"
            className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:bg-white"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Gram Fiyatı
          </label>
          <input
            id="gramFiyat"
            type="number"
            placeholder="Örn: 3450"
            className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:bg-white"
          />
        </div>

        <button
          onClick={hesapla}
          className="w-full rounded-xl bg-yellow-500 py-3 text-lg font-semibold text-white transition hover:bg-yellow-600"
        >
          Hesapla
        </button>
      </div>

      {toplam && (
        <div className="mt-8 rounded-2xl border border-yellow-200 bg-yellow-50 p-5">
          <p className="text-lg font-semibold text-yellow-900 mb-3">Sonuç</p>
          <div className="space-y-2 text-gray-800">
            <p><strong>Toplam Değer:</strong> {toplam}</p>
          </div>
        </div>
      )}

      <div className="mt-12 space-y-8 text-gray-700 leading-7">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Altın Hesaplama Nedir?
          </h2>
          <p className="mb-4">
            Altın hesaplama, sahip olduğunuz gram altın miktarının güncel gram
            altın fiyatına göre toplam değerini bulmanızı sağlayan bir işlemdir.
            Özellikle yatırım yapan kişiler, kuyumcular ve altın alım satımı ile
            ilgilenenler için altın değerini hızlı şekilde hesaplamak oldukça
            önemlidir.
          </p>
          <p>
            Bu sayfadaki altın hesaplama aracı ile gram miktarını ve gram altın
            fiyatını girerek toplam altın değerini saniyeler içinde öğrenebilirsiniz.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Gram Altın Nasıl Hesaplanır?
          </h2>
          <p className="mb-4">
            Gram altının toplam değeri hesaplanırken sahip olunan gram miktarı
            ile gram altının güncel fiyatı çarpılır.
          </p>
          <p className="font-semibold text-gray-900 mb-4">
            Toplam Değer = Gram Miktarı × Gram Fiyatı
          </p>
          <p>
            Örneğin 10 gram altınınız varsa ve gram altın fiyatı 3450 TL ise,
            toplam altın değeri 10 × 3450 = 34.500 TL olarak hesaplanır.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Örnek Altın Hesaplama
          </h2>

          <div className="space-y-4">
            <p><strong>5 gram altın:</strong> Gram fiyatı 3400 TL ise toplam değer 17.000 TL olur.</p>
            <p><strong>10 gram altın:</strong> Gram fiyatı 3450 TL ise toplam değer 34.500 TL olur.</p>
            <p><strong>20 gram altın:</strong> Gram fiyatı 3500 TL ise toplam değer 70.000 TL olur.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Altın Hesaplama Nerelerde Kullanılır?
          </h2>

          <ul className="list-disc ml-5 space-y-2">
            <li>Altın yatırımının toplam değerini öğrenmek</li>
            <li>Altın alım satım işlemlerinde hızlı hesaplama yapmak</li>
            <li>Kuyumcularda fiyat karşılaştırması yapmak</li>
            <li>Birden fazla altının toplam değerini hesaplamak</li>
            <li>Altın fiyatı değiştiğinde portföy değerini görmek</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Sık Sorulan Sorular
          </h2>

          <div className="space-y-5">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Gram altın değeri nasıl hesaplanır?
              </h3>
              <p>
                Gram altın miktarı ile gram altın fiyatı çarpılarak toplam değer bulunur.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Altın fiyatı neden sürekli değişir?
              </h3>
              <p>
                Altın fiyatları döviz kuru, küresel piyasa hareketleri ve arz-talep
                dengesine bağlı olarak sürekli değişebilir.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Bu araç hangi altın türleri için kullanılabilir?
              </h3>
              <p>
                Gram altın değerini hesaplamak için kullanılabilir. Çeyrek, yarım
                veya tam altın hesaplamaları da gram değerine göre yapılabilir.
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
              <a href="/dolar-hesaplama" className="text-blue-600 hover:underline">
                Dolar Hesaplama
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