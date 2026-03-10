"use client"

import { useState } from "react"
import CalculatorLayout from "../components/CalculatorLayout"

export default function AracKmMaliyeti() {

  const [sonuc, setSonuc] = useState("")

  function hesapla() {

    const tuketim = Number((document.getElementById("tuketim") as HTMLInputElement).value)
    const fiyat = Number((document.getElementById("fiyat") as HTMLInputElement).value)

    if (!tuketim || !fiyat) {
      setSonuc("Lütfen tüm alanları doldurun")
      return
    }

    const kmMaliyet = (tuketim * fiyat) / 100

    setSonuc(kmMaliyet.toFixed(2) + " TL / km")
  }

  return (
    <CalculatorLayout
      title="Araç KM Maliyeti Hesaplama"
      description="Aracınızın yakıt tüketimine göre kilometre başına maliyetini hesaplayın."
    >

      <div className="space-y-5">

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            100 km Yakıt Tüketimi
          </label>

          <input
            id="tuketim"
            type="number"
            placeholder="Örn: 8"
            className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:bg-white"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Yakıt Fiyatı (TL)
          </label>

          <input
            id="fiyat"
            type="number"
            placeholder="Örn: 45"
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
            <strong>Kilometre Başına Maliyet:</strong> {sonuc}
          </p>
        </div>
      )}

    </CalculatorLayout>
  )
}