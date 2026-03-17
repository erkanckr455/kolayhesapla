"use client"

import { useState } from "react"
import CalculatorLayout from "../components/CalculatorLayout"

export default function YuzdeDegisimHesaplama() {

  const [sonuc, setSonuc] = useState("")

  function hesapla() {

    const eski = Number((document.getElementById("eski") as HTMLInputElement).value)
    const yeni = Number((document.getElementById("yeni") as HTMLInputElement).value)

    if (!eski || !yeni) {
      setSonuc("Lütfen tüm alanları doldurun")
      return
    }

    const degisim = ((yeni - eski) / eski) * 100

    setSonuc(degisim.toFixed(2) + " %")

  }

  return (

    <CalculatorLayout
      title="Yüzde Değişim Hesaplama"
      description="İki sayı arasındaki yüzde değişimini hızlıca hesaplayın."
    >

      <div className="space-y-5">

        <div>

          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Eski Değer
          </label>

          <input
            id="eski"
            type="number"
            placeholder="Örn: 100"
            className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:bg-white"
          />

        </div>

        <div>

          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Yeni Değer
          </label>

          <input
            id="yeni"
            type="number"
            placeholder="Örn: 120"
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
            Sonuç
          </p>

          <p className="text-gray-800">
            <strong>Yüzde Değişim:</strong> {sonuc}
          </p>

        </div>

      )}

      <div className="mt-10 text-gray-700 leading-7">

        <h2 className="text-xl font-semibold mb-3">
          Yüzde Değişim Hesaplama
        </h2>

        <p className="mb-4">
          Yüzde değişim hesaplama iki sayı arasındaki artış veya azalış oranını
          bulmak için kullanılır. Eski değer ile yeni değer arasındaki fark
          yüzdelik olarak hesaplanır.
        </p>

        <h2 className="text-xl font-semibold mb-3">
          Yüzde Artış Nasıl Hesaplanır?
        </h2>

        <p className="mb-4">
          Örneğin bir ürünün fiyatı 100 TL iken 120 TL olduysa artış oranı
          yüzde 20 olur. Çünkü fiyat 20 TL artmış ve bu artış eski değerin
          yüzde 20'sine eşittir.
        </p>

        <h2 className="text-xl font-semibold mb-3">
          Yüzde Azalış Hesabı
        </h2>

        <p>
          Eğer bir değer 200'den 150'ye düşerse bu durumda yüzde değişim
          yaklaşık -25 olur. Bu da yüzde 25 azalış anlamına gelir.
        </p>

      </div>

    </CalculatorLayout>

  )
}