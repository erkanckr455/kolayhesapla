"use client"

import { useState } from "react"
import CalculatorLayout from "../components/CalculatorLayout"

export default function MevduatFaizHesaplama() {

  const [sonuc, setSonuc] = useState("")

  function hesapla() {

    const para = Number((document.getElementById("para") as HTMLInputElement).value)
    const faiz = Number((document.getElementById("faiz") as HTMLInputElement).value)
    const gun = Number((document.getElementById("gun") as HTMLInputElement).value)

    if (!para || !faiz || !gun) {
      setSonuc("Lütfen tüm alanları doldurun")
      return
    }

    const brut = (para * faiz * gun) / 36500
    const stopaj = brut * 0.05
    const net = brut - stopaj

    setSonuc(net.toFixed(2) + " TL")
  }

  return (

    <CalculatorLayout
      title="Mevduat Faiz Getirisi Hesaplama"
      description="Banka mevduat faiz getirisi hesaplama aracı."
    >

      <div className="space-y-5">

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Anapara (TL)
          </label>

          <input
            id="para"
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
            id="faiz"
            type="number"
            placeholder="Örn: 45"
            className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:bg-white"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Gün
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

      {sonuc && (
        <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-5">

          <p className="text-lg font-semibold text-blue-900 mb-3">
            Net Faiz Getirisi
          </p>

          <p className="text-gray-800">
            <strong>Kazanacağınız Net Faiz:</strong> {sonuc}
          </p>

        </div>
      )}

    </CalculatorLayout>

  )
}