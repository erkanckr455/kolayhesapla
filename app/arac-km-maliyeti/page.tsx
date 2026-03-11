"use client"

import { useState } from "react"
import CalculatorLayout from "../components/CalculatorLayout"

export default function AracKmMaliyeti() {

  const [km, setKm] = useState("")
  const [yuzKm, setYuzKm] = useState("")

  function hesapla() {

    const yakit = Number((document.getElementById("yakit") as HTMLInputElement).value)
    const mesafe = Number((document.getElementById("mesafe") as HTMLInputElement).value)

    if (!yakit || !mesafe) {
      setKm("Lütfen tüm alanları doldurun")
      setYuzKm("")
      return
    }

    const kmMaliyet = yakit / mesafe
    const yuzKmMaliyet = kmMaliyet * 100

    setKm(kmMaliyet.toFixed(2) + " TL")
    setYuzKm(yuzKmMaliyet.toFixed(2) + " TL")
  }

  return (

    <CalculatorLayout
      title="Araç Yakıt KM Maliyeti Hesaplama"
      description="Aldığınız yakıt tutarına ve gittiğiniz mesafeye göre km başına yakıt maliyetini hesaplayın."
    >

      <div className="space-y-5">

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Aldığınız Yakıt Tutarı (TL)
          </label>

          <input
            id="yakit"
            type="number"
            placeholder="Örn: 670"
            className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:bg-white"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Gittiğiniz Mesafe (KM)
          </label>

          <input
            id="mesafe"
            type="number"
            placeholder="Örn: 250"
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

      {km && (
        <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-5">

          <p className="text-lg font-semibold text-blue-900 mb-3">
            Yakıt Maliyeti
          </p>

          <p className="text-gray-800">
            <strong>1 KM Maliyeti:</strong> {km}
          </p>

          <p className="text-gray-800">
            <strong>100 KM Maliyeti:</strong> {yuzKm}
          </p>

        </div>
      )}

    </CalculatorLayout>

  )
}