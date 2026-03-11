"use client"

import { useState } from "react"
import CalculatorLayout from "../components/CalculatorLayout"

export default function EnflasyonHesaplama() {
  const [sonuc, setSonuc] = useState("")

  function hesapla() {
    const aylar = [
      "ocak",
      "subat",
      "mart",
      "nisan",
      "mayis",
      "haziran",
      "temmuz",
      "agustos",
      "eylul",
      "ekim",
      "kasim",
      "aralik",
    ]

    const oranlar = aylar
      .map((ay) => {
        const deger = (document.getElementById(ay) as HTMLInputElement).value
        return deger === "" ? null : Number(deger)
      })
      .filter((deger) => deger !== null) as number[]

    if (oranlar.length === 0) {
      setSonuc("Lütfen en az 1 aylık enflasyon oranı girin")
      return
    }

    let carpim = 1

    for (const oran of oranlar) {
      carpim *= 1 + oran / 100
    }

    const toplamEnflasyon = (carpim - 1) * 100

    setSonuc(
      `${oranlar.length} aylık kümülatif enflasyon: ${toplamEnflasyon.toLocaleString(
        "tr-TR",
        {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }
      )}%`
    )
  }

  return (
    <CalculatorLayout
      title="Enflasyon Hesaplama"
      description="Aylık enflasyon oranlarını girerek 1 aylık, 6 aylık veya yıllık kümülatif enflasyonu hesaplayın."
    >
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Ocak (%)
          </label>
          <input
            id="ocak"
            type="number"
            step="0.01"
            placeholder="Örnek: 2"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Şubat (%)
          </label>
          <input
            id="subat"
            type="number"
            step="0.01"
            placeholder="Örnek: 3.5"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Mart (%)
          </label>
          <input
            id="mart"
            type="number"
            step="0.01"
            placeholder="Örnek: 2.8"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Nisan (%)
          </label>
          <input
            id="nisan"
            type="number"
            step="0.01"
            placeholder="Örnek: 3.1"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Mayıs (%)
          </label>
          <input
            id="mayis"
            type="number"
            step="0.01"
            placeholder="Örnek: 1.9"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Haziran (%)
          </label>
          <input
            id="haziran"
            type="number"
            step="0.01"
            placeholder="Örnek: 2.4"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Temmuz (%)
          </label>
          <input
            id="temmuz"
            type="number"
            step="0.01"
            placeholder="Örnek: 2.2"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Ağustos (%)
          </label>
          <input
            id="agustos"
            type="number"
            step="0.01"
            placeholder="Örnek: 2.7"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Eylül (%)
          </label>
          <input
            id="eylul"
            type="number"
            step="0.01"
            placeholder="Örnek: 2.1"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Ekim (%)
          </label>
          <input
            id="ekim"
            type="number"
            step="0.01"
            placeholder="Örnek: 2.9"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Kasım (%)
          </label>
          <input
            id="kasim"
            type="number"
            step="0.01"
            placeholder="Örnek: 1.8"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Aralık (%)
          </label>
          <input
            id="aralik"
            type="number"
            step="0.01"
            placeholder="Örnek: 2.5"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={hesapla}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition"
        >
          Hesapla
        </button>

        {sonuc && (
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center text-lg font-semibold text-gray-800">
            {sonuc}
          </div>
        )}
      </div>
    </CalculatorLayout>
  )
}
<div className="mt-10 text-gray-700 leading-7">

<h2 className="text-xl font-semibold mb-3">
Enflasyon Hesaplama Nasıl Yapılır?
</h2>

<p className="mb-4">
Enflasyon hesaplama, açıklanan aylık enflasyon oranlarının bileşik olarak
birbirine eklenmesiyle yapılır. Örneğin bir ay %2 ve sonraki ay %3,5
enflasyon gerçekleştiğinde toplam enflasyon %5,5 olmaz. Çünkü her ay
önceki ayın üzerine eklenir ve kümülatif enflasyon oluşur.
</p>

<p className="mb-4">
Türkiye’de enflasyon verileri TÜİK tarafından her ay açıklanır. Bu
hesaplama aracı ile aylık enflasyon oranlarını girerek 1 aylık, 6 aylık
veya yıllık toplam enflasyonu kolayca hesaplayabilirsiniz.
</p>

</div>