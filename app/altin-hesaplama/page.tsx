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
      description="Gram altın miktarına ve gram fiyatına göre toplam değeri hesapla."
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
    </CalculatorLayout>
  )
}