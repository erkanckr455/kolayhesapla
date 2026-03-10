"use client"

import { useState } from "react"
import CalculatorLayout from "../components/CalculatorLayout"

export default function MaasHesaplama() {
  const [sonuc, setSonuc] = useState("")

  function hesapla() {
    const brut = Number((document.getElementById("brut") as HTMLInputElement).value)
    const vergi = Number((document.getElementById("vergi") as HTMLSelectElement).value) / 100

    if (!brut || !vergi) {
      setSonuc("Lütfen tüm alanları doldur")
      return
    }

    const sgk = brut * 0.14
    const issizlik = brut * 0.01
    const vergiMatrah = brut - sgk - issizlik
    const gelirVergi = vergiMatrah * vergi
    const damga = brut * 0.00759

    const net = brut - sgk - issizlik - gelirVergi - damga

    setSonuc(net.toFixed(2) + " TL")
  }

  return (
    <CalculatorLayout
      title="Yaklaşık Net Maaş Hesaplama"
      description="Brüt maaşa ve seçilen vergi dilimine göre yaklaşık net maaşı hesapla."
    >
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Brüt Maaş
          </label>

          <input
            id="brut"
            type="number"
            placeholder="Örn: 30000"
            className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:bg-white"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Vergi Dilimi
          </label>

          <select
            id="vergi"
            className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:bg-white"
            defaultValue="15"
          >
            <option value="15">%15</option>
            <option value="20">%20</option>
            <option value="27">%27</option>
            <option value="35">%35</option>
          </select>
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
            <strong>Net Maaş:</strong> {sonuc}
          </p>

          <p className="mt-2 text-sm text-gray-600">
            Bu sonuç seçilen vergi dilimine göre yaklaşık hesaplamadır.
          </p>
        </div>
      )}
    </CalculatorLayout>
  )
}