"use client"

import { useState } from "react"

export default function Page() {
  const [brut, setBrut] = useState("")
  const [stopaj, setStopaj] = useState("")
  const [net, setNet] = useState("")

  function hesapla() {
    const lot = Number((document.getElementById("lot") as HTMLInputElement).value)
    const hisseBasiTemettu = Number((document.getElementById("temettu") as HTMLInputElement).value)
    const stopajOrani = Number((document.getElementById("stopaj") as HTMLInputElement).value)

    if (!lot || !hisseBasiTemettu) {
      setBrut("Lütfen tüm alanları doldur")
      setStopaj("")
      setNet("")
      return
    }

    const brutTemettu = lot * hisseBasiTemettu
    const stopajTutari = brutTemettu * stopajOrani / 100
    const netTemettu = brutTemettu - stopajTutari

    setBrut(brutTemettu.toFixed(2) + " TL")
    setStopaj(stopajTutari.toFixed(2) + " TL")
    setNet(netTemettu.toFixed(2) + " TL")
  }

  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Temettü Hesaplama
            </h1>
            <p className="text-gray-600 text-lg">
              Lot sayısına göre brüt ve net temettü tutarını hesapla.
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Lot Sayısı
              </label>
              <input
                id="lot"
                type="number"
                placeholder="Örn: 1000"
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Hisse Başı Temettü
              </label>
              <input
                id="temettu"
                type="number"
                placeholder="Örn: 2.50"
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Stopaj Oranı (%)
              </label>
              <input
                id="stopaj"
                type="number"
                defaultValue="10"
                placeholder="Örn: 10"
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

          {brut && (
            <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-lg font-semibold text-blue-900 mb-3">Sonuç</p>
              <div className="space-y-2 text-gray-800">
                <p><strong>Brüt Temettü:</strong> {brut}</p>
                {stopaj && <p><strong>Stopaj:</strong> {stopaj}</p>}
                {net && <p><strong>Net Temettü:</strong> {net}</p>}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}