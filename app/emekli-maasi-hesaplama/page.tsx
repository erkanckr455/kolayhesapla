"use client"

import { useState } from "react"
import CalculatorLayout from "../components/CalculatorLayout"

export default function EmekliMaasiHesaplama() {

  const [sonuc, setSonuc] = useState("")

  function hesapla() {

    const maas = Number((document.getElementById("maas") as HTMLInputElement).value)
    const oran = Number((document.getElementById("oran") as HTMLInputElement).value)

    if (!maas || !oran) {
      setSonuc("Lütfen tüm alanları doldurun")
      return
    }

    const yeniMaas = maas + (maas * oran / 100)

    setSonuc(yeniMaas.toFixed(2) + " TL")

  }

  return (

    <CalculatorLayout
      title="Emekli Maaşı Zam Hesaplama"
      description="Emekli maaşınıza yapılacak zam oranına göre yeni maaşınızı hesaplayın."
    >

      <div className="space-y-5">

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Mevcut Maaş (TL)
          </label>

          <input
            id="maas"
            type="number"
            placeholder="Örn: 12000"
            className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:bg-white"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Zam Oranı (%)
          </label>

          <input
            id="oran"
            type="number"
            placeholder="Örn: 25"
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
            Yeni Emekli Maaşı
          </p>

          <p className="text-gray-800">
            <strong>Maaşınız:</strong> {sonuc}
          </p>

        </div>

      )}

      <div className="mt-10 text-gray-700 leading-7">

        <h2 className="text-xl font-semibold mb-3">
          Emekli Maaşı Zam Hesaplama Nasıl Yapılır?
        </h2>

        <p className="mb-4">
          Emekli maaşı zam hesaplama işlemi mevcut maaşın belirli bir zam oranı
          ile artırılması ile yapılır. Örneğin 12000 TL maaşa %25 zam yapılırsa
          yeni maaş 15000 TL olur.
        </p>

        <h2 className="text-xl font-semibold mb-3">
          Emekli Maaşı Hesaplama Örneği
        </h2>

        <p>
          15000 TL emekli maaşına %20 zam yapılırsa yeni maaş:
          15000 × 1.20 = 18000 TL olur.
        </p>

      </div>

    </CalculatorLayout>

  )
}