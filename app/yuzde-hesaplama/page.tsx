"use client"

import { useState } from "react"

export default function Page() {
  const [sonuc, setSonuc] = useState("")

  function hesapla() {
    const sayi = Number((document.getElementById("sayi") as HTMLInputElement).value)
    const yuzde = Number((document.getElementById("yuzde") as HTMLInputElement).value)

    if (!sayi || !yuzde) {
      setSonuc("Lütfen tüm alanları doldur")
      return
    }

    const sonucDeger = (sayi * yuzde) / 100
    setSonuc(`${sayi} sayısının %${yuzde}'si = ${sonucDeger.toFixed(2)}`)
  }

  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Yüzde Hesaplama
            </h1>
            <p className="text-gray-600 text-lg">
              Bir sayının yüzdesini hızlı ve kolay şekilde hesapla.
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Sayı
              </label>
              <input
                id="sayi"
                type="number"
                placeholder="Örn: 1000"
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Yüzde (%)
              </label>
              <input
                id="yuzde"
                type="number"
                placeholder="Örn: 18"
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
              <p className="text-lg font-semibold text-blue-900">Sonuç</p>
              <p className="mt-2 text-xl text-gray-800">{sonuc}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}