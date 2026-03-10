"use client"

import { useState } from "react"

export default function Page() {
  const [kar, setKar] = useState("")
  const [yuzde, setYuzde] = useState("")

  const [brut, setBrut] = useState("")
  const [stopaj, setStopaj] = useState("")
  const [net, setNet] = useState("")

  function karZararHesapla() {
    const lot = Number((document.getElementById("lot") as HTMLInputElement).value)
    const alis = Number((document.getElementById("alis") as HTMLInputElement).value)
    const satis = Number((document.getElementById("satis") as HTMLInputElement).value)

    if (!lot || !alis || !satis) {
      setKar("Lütfen tüm alanları doldur")
      setYuzde("")
      return
    }

    const maliyet = lot * alis
    const gelir = lot * satis
    const karDeger = gelir - maliyet
    const yuzdeDeger = (karDeger / maliyet) * 100

    setKar(karDeger.toFixed(2) + " TL")
    setYuzde(yuzdeDeger.toFixed(2) + " %")
  }

  function temettuHesapla() {
    const temettuLot = Number((document.getElementById("temettuLot") as HTMLInputElement).value)
    const hisseBasiTemettu = Number((document.getElementById("temettuTutar") as HTMLInputElement).value)
    const stopajOrani = Number((document.getElementById("stopaj") as HTMLInputElement).value)

    if (!temettuLot || !hisseBasiTemettu) {
      setBrut("Lütfen tüm alanları doldur")
      setStopaj("")
      setNet("")
      return
    }

    const brutTemettu = temettuLot * hisseBasiTemettu
    const stopajTutari = brutTemettu * stopajOrani / 100
    const netTemettu = brutTemettu - stopajTutari

    setBrut(brutTemettu.toFixed(2) + " TL")
    setStopaj(stopajTutari.toFixed(2) + " TL")
    setNet(netTemettu.toFixed(2) + " TL")
  }

  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Hisse Araçları
          </h1>
          <p className="text-lg text-gray-600">
            Hisse senedi kar/zarar ve temettü hesaplamalarını tek sayfada yap.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* KAR ZARAR */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Hisse Kar / Zarar
              </h2>
              <p className="text-gray-600">
                Lot, alış ve satış fiyatına göre sonucu hesapla.
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
                  placeholder="Örn: 100"
                  className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Alış Fiyatı
                </label>
                <input
                  id="alis"
                  type="number"
                  placeholder="Örn: 25"
                  className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Satış Fiyatı
                </label>
                <input
                  id="satis"
                  type="number"
                  placeholder="Örn: 32"
                  className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:bg-white"
                />
              </div>

              <button
                onClick={karZararHesapla}
                className="w-full rounded-xl bg-blue-600 py-3 text-lg font-semibold text-white transition hover:bg-blue-700"
              >
                Kar / Zarar Hesapla
              </button>
            </div>

            {kar && (
              <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-5">
                <p className="text-lg font-semibold text-blue-900 mb-3">Sonuç</p>
                <div className="space-y-2 text-gray-800">
                  <p><strong>Kar / Zarar:</strong> {kar}</p>
                  {yuzde && <p><strong>Getiri:</strong> {yuzde}</p>}
                </div>
              </div>
            )}
          </div>

          {/* TEMETTU */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Temettü Hesaplama
              </h2>
              <p className="text-gray-600">
                Lot sayısına göre brüt ve net temettü tutarını hesapla.
              </p>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Lot Sayısı
                </label>
                <input
                  id="temettuLot"
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
                  id="temettuTutar"
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
                onClick={temettuHesapla}
                className="w-full rounded-xl bg-emerald-600 py-3 text-lg font-semibold text-white transition hover:bg-emerald-700"
              >
                Temettü Hesapla
              </button>
            </div>

            {brut && (
              <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <p className="text-lg font-semibold text-emerald-900 mb-3">Sonuç</p>
                <div className="space-y-2 text-gray-800">
                  <p><strong>Brüt Temettü:</strong> {brut}</p>
                  {stopaj && <p><strong>Stopaj:</strong> {stopaj}</p>}
                  {net && <p><strong>Net Temettü:</strong> {net}</p>}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}