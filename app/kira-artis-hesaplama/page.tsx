"use client"

import { useState } from "react"
import CalculatorLayout from "../components/CalculatorLayout"

export default function KiraArtisHesaplama() {

const [yeniKira, setYeniKira] = useState("")

function hesapla() {


const kira = Number((document.getElementById("kira") as HTMLInputElement).value)
const oran = Number((document.getElementById("oran") as HTMLInputElement).value)

if (!kira || !oran) {
  setYeniKira("Lütfen tüm alanları doldurun")
  return
}

const artis = kira * (oran / 100)
const sonuc = kira + artis

setYeniKira(sonuc.toFixed(2) + " TL")


}

return ( <CalculatorLayout
   title="Kira Artış Hesaplama"
   description="Kira artış oranına göre yeni kira tutarını hesaplayın."
 >


  <div className="space-y-5">

    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Mevcut Kira (TL)
      </label>

      <input
        id="kira"
        type="number"
        placeholder="Örn: 10000"
        className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:bg-white"
      />
    </div>

    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Artış Oranı (%)
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

  {yeniKira && (
    <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-5">

      <p className="text-lg font-semibold text-blue-900 mb-3">
        Yeni Kira Tutarı
      </p>

      <p className="text-gray-800">
        <strong>Yeni Kira:</strong> {yeniKira}
      </p>

    </div>
  )}

</CalculatorLayout>


)
}
