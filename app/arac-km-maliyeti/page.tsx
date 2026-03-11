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
      description="Aldığınız yakıt tutarına ve gittiğiniz mesafeye göre km başına yakıt maliyetini ve 100 km yakıt maliyetini hesaplayın."
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

      <div className="mt-12 space-y-8 text-gray-700 leading-7">

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            KM Başına Yakıt Maliyeti Nedir?
          </h2>

          <p>
            KM başına yakıt maliyeti, aracınızın her kilometrede ne kadar yakıt harcadığını
            TL cinsinden gösteren bir hesaplama yöntemidir. Bu hesaplama özellikle
            araç sahipleri için oldukça faydalıdır çünkü aracın gerçek yakıt
            maliyetini anlamayı sağlar.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            KM Yakıt Maliyeti Nasıl Hesaplanır?
          </h2>

          <p>
            KM başına yakıt maliyetini hesaplamak için aldığınız yakıt tutarını
            gittiğiniz mesafeye bölmeniz yeterlidir.
          </p>

          <p className="font-semibold text-gray-900 mt-2">
            KM maliyeti = Yakıt tutarı / Gidilen kilometre
          </p>

          <p className="mt-2">
            Örneğin 670 TL yakıt alıp 250 km gittiyseniz:
          </p>

          <p className="font-semibold text-gray-900">
            670 / 250 = 2.68 TL
          </p>

          <p>
            Bu durumda aracınız 1 kilometrede yaklaşık 2.68 TL yakıt tüketmiştir.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            100 KM Yakıt Maliyeti Nasıl Hesaplanır?
          </h2>

          <p>
            100 km yakıt maliyetini bulmak için km başına maliyeti 100 ile
            çarpmanız yeterlidir.
          </p>

          <p className="font-semibold text-gray-900">
            100 KM maliyeti = KM maliyeti × 100
          </p>

          <p>
            Örneğin km başına maliyet 2.68 TL ise:
          </p>

          <p className="font-semibold text-gray-900">
            2.68 × 100 = 268 TL
          </p>

          <p>
            Bu durumda aracınız 100 kilometrede yaklaşık 268 TL yakmaktadır.
          </p>
        </section>

      </div>

    </CalculatorLayout>

  )
}