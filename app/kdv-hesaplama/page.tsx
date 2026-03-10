"use client"

import { useState } from "react"

export default function Page() {
  const [sonuc, setSonuc] = useState("")
  const [kdvTutari, setKdvTutari] = useState("")

  function hesapla() {
    const fiyat = Number((document.getElementById("fiyat") as HTMLInputElement).value)
    const kdv = Number((document.getElementById("kdv") as HTMLInputElement).value)

    if (!fiyat || !kdv) {
      setSonuc("Lütfen tüm alanları doldur")
      setKdvTutari("")
      return
    }

    const kdvDeger = fiyat * kdv / 100
    const toplam = fiyat + kdvDeger

    setKdvTutari(kdvDeger.toFixed(2) + " TL")
    setSonuc(toplam.toFixed(2) + " TL")
  }

  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              KDV Hesaplama
            </h1>
            <p className="text-gray-600 text-lg">
              Ürün fiyatına göre KDV tutarını ve KDV dahil fiyatı hesapla.
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Ürün Fiyatı
              </label>
              <input
                id="fiyat"
                type="number"
                placeholder="Örn: 1000"
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                KDV Oranı (%)
              </label>
              <input
                id="kdv"
                type="number"
                placeholder="Örn: 20"
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
                {kdvTutari && <p><strong>KDV Tutarı:</strong> {kdvTutari}</p>}
                <p><strong>KDV Dahil Fiyat:</strong> {sonuc}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}