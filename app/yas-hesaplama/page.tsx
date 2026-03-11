"use client"

import { useState } from "react"
import CalculatorLayout from "../components/CalculatorLayout"

export default function YasHesaplama() {
  const [sonuc, setSonuc] = useState("")

  function hesapla() {
    const dogumInput = (document.getElementById("dogum") as HTMLInputElement).value

    if (!dogumInput) {
      setSonuc("Lütfen doğum tarihi girin")
      return
    }

    const dogumTarihi = new Date(dogumInput)
    const bugun = new Date()

    let yil = bugun.getFullYear() - dogumTarihi.getFullYear()
    let ay = bugun.getMonth() - dogumTarihi.getMonth()
    let gun = bugun.getDate() - dogumTarihi.getDate()

    if (gun < 0) {
      ay--
      const oncekiAy = new Date(bugun.getFullYear(), bugun.getMonth(), 0)
      gun += oncekiAy.getDate()
    }

    if (ay < 0) {
      yil--
      ay += 12
    }

    setSonuc(`${yil} yıl ${ay} ay ${gun} gün`)
  }

  return (
    <CalculatorLayout
      title="Yaş Hesaplama"
      description="Doğum tarihinizi girerek kaç yaşında olduğunuzu öğrenin."
    >
      <div className="space-y-5">

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Doğum Tarihi
          </label>
          <input
            id="dogum"
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
            Yaşınız: {sonuc}
          </div>
        )}

        <div className="mt-10 text-gray-700 leading-7">
          <h2 className="text-xl font-semibold mb-3">
            Yaş Hesaplama Nasıl Yapılır?
          </h2>

          <p className="mb-4">
            Yaş hesaplama işlemi doğum tarihi ile bugünün tarihi arasındaki
            farkın yıl, ay ve gün olarak hesaplanmasıyla yapılır. Doğum
            tarihinizi girerek kaç yaşında olduğunuzu kolayca öğrenebilirsiniz.
          </p>

          <p className="mb-4">
            Yaş hesaplama aracı özellikle resmi işlemler, eğitim başvuruları
            ve günlük kullanım için sıkça kullanılan pratik bir araçtır.
          </p>
        </div>

      </div>
    </CalculatorLayout>
  )
}