"use client"

import { useState } from "react"
import CalculatorLayout from "../components/CalculatorLayout"

export default function TapuHarciHesaplama() {

  const [sonuc, setSonuc] = useState("")

  function hesapla() {

    const fiyat = Number((document.getElementById("fiyat") as HTMLInputElement).value)

    if (!fiyat) {
      setSonuc("Lütfen satış fiyatını giriniz")
      return
    }

    const harc = fiyat * 0.04

    setSonuc(harc.toFixed(2) + " TL")
  }

  return (
    <CalculatorLayout
      title="Tapu Harcı Hesaplama"
      description="Ev satış fiyatına göre ödenecek tapu harcını hesapla."
    >

      <div className="space-y-5">

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Satış Fiyatı
          </label>

          <input
            id="fiyat"
            type="number"
            placeholder="Örn: 2000000"
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
            <strong>Toplam Tapu Harcı:</strong> {sonuc}
          </p>

          <p className="mt-2 text-sm text-gray-600">
            Türkiye'de tapu harcı satış bedelinin %4'ü olarak hesaplanır.
          </p>
        </div>
      )}

    </CalculatorLayout>
  )
}