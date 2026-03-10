"use client"

import { useState } from "react"
import CalculatorLayout from "../components/CalculatorLayout"

export default function Page() {
  const [faizTutari, setFaizTutari] = useState("")
  const [toplamTutar, setToplamTutar] = useState("")

  function hesapla() {
    const anapara = Number((document.getElementById("anapara") as HTMLInputElement).value)
    const oran = Number((document.getElementById("oran") as HTMLInputElement).value)
    const gun = Number((document.getElementById("gun") as HTMLInputElement).value)

    if (!anapara || !oran || !gun) {
      setFaizTutari("Lütfen tüm alanları doldur")
      setToplamTutar("")
      return
    }

    const faiz = anapara * (oran / 100) * (gun / 365)
    const toplam = anapara + faiz

    setFaizTutari(faiz.toFixed(2) + " TL")
    setToplamTutar(toplam.toFixed(2) + " TL")
  }

  return (
    <CalculatorLayout
      title="Faiz Hesaplama"
      description="Anapara, faiz oranı ve gün sayısına göre faiz getirisini hesapla."
    >
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Anapara
          </label>
          <input
            id="anapara"
            type="number"
            placeholder="Örn: 100000"
            className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:bg-white"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Faiz Oranı (%)
          </label>
          <input
            id="oran"
            type="number"
            placeholder="Örn: 45"
            className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:bg-white"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Gün Sayısı
          </label>
          <input
            id="gun"
            type="number"
            placeholder="Örn: 32"
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

      {faizTutari && (
        <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-5">
          <p className="text-lg font-semibold text-blue-900 mb-3">Sonuç</p>
          <div className="space-y-2 text-gray-800">
            <p><strong>Faiz Tutarı:</strong> {faizTutari}</p>
            {toplamTutar && <p><strong>Vade Sonu Toplam:</strong> {toplamTutar}</p>}
          </div>
        </div>
      )}
    </CalculatorLayout>
  )
}