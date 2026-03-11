"use client"

import { useState } from "react"
import CalculatorLayout from "../components/CalculatorLayout"

export default function IkiTarihArasiGunHesaplama() {
  const [sonuc, setSonuc] = useState("")

  function hesapla() {
    const tarih1 = (document.getElementById("tarih1") as HTMLInputElement).value
    const tarih2 = (document.getElementById("tarih2") as HTMLInputElement).value

    if (!tarih1 || !tarih2) {
      setSonuc("Lütfen iki tarihi de girin")
      return
    }

    const t1 = new Date(tarih1)
    const t2 = new Date(tarih2)

    const fark = Math.abs(t2.getTime() - t1.getTime())
    const gun = Math.ceil(fark / (1000 * 60 * 60 * 24))

    setSonuc(`${gun} gün`)
  }

  return (
    <CalculatorLayout
      title="İki Tarih Arası Gün Hesaplama"
      description="İki tarih arasındaki gün sayısını kolayca hesaplayın."
    >
      <div className="space-y-5">

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Başlangıç Tarihi
          </label>
          <input
            id="tarih1"
            type="date"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Bitiş Tarihi
          </label>
          <input
            id="tarih2"
            type="date"
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
            Tarihler Arası Fark: {sonuc}
          </div>
        )}

        <div className="mt-10 text-gray-700 leading-7">

          <h2 className="text-xl font-semibold mb-3">
            İki Tarih Arası Gün Nasıl Hesaplanır?
          </h2>

          <p className="mb-4">
            İki tarih arasındaki gün sayısı, başlangıç tarihi ile bitiş tarihi
            arasındaki zaman farkının gün cinsinden hesaplanmasıyla bulunur.
            Bu araç sayesinde iki tarih arasındaki gün sayısını hızlı ve
            kolay şekilde öğrenebilirsiniz.
          </p>

          <p className="mb-4">
            Gün hesaplama işlemi özellikle resmi işlemler, sözleşme süreleri,
            tatil planlaması ve proje süreleri gibi durumlarda sıkça
            kullanılmaktadır.
          </p>

        </div>

      </div>
    </CalculatorLayout>
  )
}