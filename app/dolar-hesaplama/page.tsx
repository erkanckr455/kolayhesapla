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
      description="Dolar miktarını güncel kur ile TL karşılığına çevir."
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
    </CalculatorLayout>
  )
}