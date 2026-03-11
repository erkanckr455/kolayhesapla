"use client"

import { useState } from "react"
import CalculatorLayout from "../components/CalculatorLayout"

export default function Page() {
  const [sonuc, setSonuc] = useState("")
  const [toplamMaliyet, setToplamMaliyet] = useState("")
  const [toplamSatis, setToplamSatis] = useState("")

  function hesapla() {
    const alisFiyati = Number((document.getElementById("alis") as HTMLInputElement).value)
    const satisFiyati = Number((document.getElementById("satis") as HTMLInputElement).value)
    const lot = Number((document.getElementById("lot") as HTMLInputElement).value)

    if (!alisFiyati || !satisFiyati || !lot) {
      setSonuc("Lütfen tüm alanları doldur")
      setToplamMaliyet("")
      setToplamSatis("")
      return
    }

    const maliyet = alisFiyati * lot
    const satis = satisFiyati * lot
    const karZarar = satis - maliyet

    setToplamMaliyet(maliyet.toFixed(2) + " TL")
    setToplamSatis(satis.toFixed(2) + " TL")

    if (karZarar >= 0) {
      setSonuc("Kar: " + karZarar.toFixed(2) + " TL")
    } else {
      setSonuc("Zarar: " + Math.abs(karZarar).toFixed(2) + " TL")
    }
  }

  return (
    <CalculatorLayout
      title="Hisse Kar/Zarar Hesaplama"
      description="Hisse alış ve satış fiyatına göre toplam kar veya zararınızı hesaplayın."
    >
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Alış Fiyatı
          </label>
          <input
            id="alis"
            type="number"
            step="0.01"
            placeholder="Örn: 25.50"
            className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:bg-white"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Satış Fiyatı
          </label>
          <input
            id="satis"
            type="number"
            step="0.01"
            placeholder="Örn: 31.20"
            className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:bg-white"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Lot Sayısı
          </label>
          <input
            id="lot"
            type="number"
            placeholder="Örn: 100"
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

      {sonuc && (
        <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-5">
          <p className="text-lg font-semibold text-blue-900 mb-3">Sonuç</p>
          <div className="space-y-2 text-gray-800">
            {toplamMaliyet && <p><strong>Toplam Maliyet:</strong> {toplamMaliyet}</p>}
            {toplamSatis && <p><strong>Toplam Satış Tutarı:</strong> {toplamSatis}</p>}
            <p><strong>{sonuc}</strong></p>
          </div>
        </div>
      )}

      <div className="mt-10 text-gray-700 leading-7">
        <h2 className="text-xl font-semibold mb-3">
          Hisse Kar/Zarar Hesaplama Nasıl Yapılır?
        </h2>

        <p className="mb-4">
          Hisse kar zarar hesaplama işlemi, hisse senedinin alış fiyatı ile
          satış fiyatı arasındaki farkın lot sayısı ile çarpılmasıyla yapılır.
          Böylece yatırımın toplam kar mı yoksa zarar mı ettirdiği kolayca
          bulunur.
        </p>

        <h2 className="text-xl font-semibold mb-3">
          Örnek Hisse Kar/Zarar Hesaplama
        </h2>

        <p className="mb-4">
          Örneğin 100 lot hisseyi 25 TL’den alıp 30 TL’den sattığınızda lot
          başına 5 TL kazanç oluşur. 100 lot için toplam kar 500 TL olur. Bu
          araç ile hisse senedi işlemlerinizde toplam maliyetinizi ve satış
          gelirinizin sonucunu hızlıca hesaplayabilirsiniz.
        </p>

        <h2 className="text-xl font-semibold mb-3">
          İlgili Hesaplama Araçları
        </h2>

        <ul className="list-disc ml-5 space-y-1">
          <li>
            <a href="/yuzde-hesaplama" className="text-blue-600 hover:underline">
              Yüzde Hesaplama
            </a>
          </li>
          <li>
            <a href="/faiz-hesaplama" className="text-blue-600 hover:underline">
              Faiz Hesaplama
            </a>
          </li>
          <li>
            <a href="/kar-zarar-hesaplama" className="text-blue-600 hover:underline">
              Kar / Zarar Hesaplama
            </a>
          </li>
        </ul>
      </div>
    </CalculatorLayout>
  )
}