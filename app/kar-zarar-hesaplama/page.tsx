"use client"

import { useState } from "react"
import CalculatorLayout from "../components/CalculatorLayout"

export default function KarZararHesaplama() {

  const [sonuc, setSonuc] = useState("")
  const [oran, setOran] = useState("")

  function hesapla() {

    const maliyet = Number((document.getElementById("maliyet") as HTMLInputElement).value)
    const satis = Number((document.getElementById("satis") as HTMLInputElement).value)

    if (!maliyet || !satis) {
      setSonuc("Lütfen tüm alanları doldurun")
      setOran("")
      return
    }

    const kar = satis - maliyet
    const yuzde = (kar / maliyet) * 100

    setSonuc(kar.toFixed(2) + " TL")
    setOran(yuzde.toFixed(2) + " %")
  }

  return (
    <CalculatorLayout
      title="Kar / Zarar Hesaplama"
      description="Ürün maliyetine ve satış fiyatına göre kar veya zararı hesaplayın."
    >

      <div className="space-y-5">

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Maliyet Fiyatı
          </label>

          <input
            id="maliyet"
            type="number"
            placeholder="Örn: 100"
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
            placeholder="Örn: 150"
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
          <p className="text-lg font-semibold text-blue-900 mb-3">
            Sonuç
          </p>

          <p className="text-gray-800">
            <strong>Kar / Zarar:</strong> {sonuc}
          </p>

          <p className="text-gray-800">
            <strong>Kar Oranı:</strong> {oran}
          </p>
        </div>
      )}

    </CalculatorLayout>
  )
}