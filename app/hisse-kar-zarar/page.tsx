"use client"

import { useState } from "react"
import CalculatorLayout from "../components/CalculatorLayout"

export default function Page() {
  const [sonuc, setSonuc] = useState("")
  const [toplamMaliyet, setToplamMaliyet] = useState("")
  const [toplamSatis, setToplamSatis] = useState("")

  const [temettuSonuc, setTemettuSonuc] = useState("")
  const [temettuVerimi, setTemettuVerimi] = useState("")

  function hesaplaKarZarar() {
    const alisFiyati = Number((document.getElementById("alis") as HTMLInputElement).value)
    const satisFiyati = Number((document.getElementById("satis") as HTMLInputElement).value)
    const lot = Number((document.getElementById("lot") as HTMLInputElement).value)

    if (!alisFiyati || !satisFiyati || !lot) {
      setSonuc("Lütfen tüm alanları doldur")
      setToplamMaliyet("")
      setToplamSatis("")
      return
    }

    const maliyet = alisFiyati * lot
    const satis = satisFiyati * lot
    const karZarar = satis - maliyet

    setToplamMaliyet(maliyet.toFixed(2) + " TL")
    setToplamSatis(satis.toFixed(2) + " TL")

    if (karZarar >= 0) {
      setSonuc("Kar: " + karZarar.toFixed(2) + " TL")
    } else {
      setSonuc("Zarar: " + Math.abs(karZarar).toFixed(2) + " TL")
    }
  }

  function hesaplaTemettu() {
    const lot = Number((document.getElementById("temettuLot") as HTMLInputElement).value)
    const hisseFiyati = Number((document.getElementById("hisseFiyati") as HTMLInputElement).value)
    const lotBasiTemettu = Number((document.getElementById("lotBasiTemettu") as HTMLInputElement).value)

    if (!lot || !hisseFiyati || !lotBasiTemettu) {
      setTemettuSonuc("Lütfen tüm alanları doldur")
      setTemettuVerimi("")
      return
    }

    const toplamTemettu = lot * lotBasiTemettu
    const toplamYatirim = lot * hisseFiyati
    const verim = (lotBasiTemettu / hisseFiyati) * 100

    setTemettuSonuc(toplamTemettu.toFixed(2) + " TL")
    setTemettuVerimi(verim.toFixed(2) + "%")
  }

  return (
    <CalculatorLayout
      title="Hisse Kar/Zarar ve Temettü Hesaplama"
      description="Hisse alış satış işlemlerinizde kar zarar durumunu ve temettü getirinizi kolayca hesaplayın."
    >
      <div className="space-y-10">
        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-gray-900">
            Hisse Kar / Zarar Hesaplama
          </h2>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Alış Fiyatı
            </label>
            <input
              id="alis"
              type="number"
              step="0.01"
              placeholder="Örn: 25.50"
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
              step="0.01"
              placeholder="Örn: 31.20"
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:bg-white"
            />
          </div>

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

          <button
            onClick={hesaplaKarZarar}
            className="w-full rounded-xl bg-blue-600 py-3 text-lg font-semibold text-white transition hover:bg-blue-700"
          >
            Kar / Zarar Hesapla
          </button>

          {sonuc && (
            <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-lg font-semibold text-blue-900 mb-3">Kar / Zarar Sonucu</p>
              <div className="space-y-2 text-gray-800">
                {toplamMaliyet && <p><strong>Toplam Maliyet:</strong> {toplamMaliyet}</p>}
                {toplamSatis && <p><strong>Toplam Satış Tutarı:</strong> {toplamSatis}</p>}
                <p><strong>{sonuc}</strong></p>
              </div>
            </div>
          )}
        </div>

        <div className="border-t border-gray-200 pt-10 space-y-5">
          <h2 className="text-2xl font-bold text-gray-900">
            Temettü Hesaplama
          </h2>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Lot Sayısı
            </label>
            <input
              id="temettuLot"
              type="number"
              placeholder="Örn: 100"
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Hisse Fiyatı
            </label>
            <input
              id="hisseFiyati"
              type="number"
              step="0.01"
              placeholder="Örn: 30.00"
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Lot Başına Temettü
            </label>
            <input
              id="lotBasiTemettu"
              type="number"
              step="0.01"
              placeholder="Örn: 2.50"
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:bg-white"
            />
          </div>

          <button
            onClick={hesaplaTemettu}
            className="w-full rounded-xl bg-green-600 py-3 text-lg font-semibold text-white transition hover:bg-green-700"
          >
            Temettü Hesapla
          </button>

          {temettuSonuc && (
            <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-5">
              <p className="text-lg font-semibold text-green-900 mb-3">Temettü Sonucu</p>
              <div className="space-y-2 text-gray-800">
                <p><strong>Toplam Temettü:</strong> {temettuSonuc}</p>
                {temettuVerimi && <p><strong>Temettü Verimi:</strong> {temettuVerimi}</p>}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-10 text-gray-700 leading-7">
        <h2 className="text-xl font-semibold mb-3">
          Hisse Kar/Zarar Hesaplama Nasıl Yapılır?
        </h2>

        <p className="mb-4">
          Hisse kar zarar hesaplama işlemi, hisse senedinin alış fiyatı ile
          satış fiyatı arasındaki farkın lot sayısı ile çarpılmasıyla yapılır.
          Böylece yatırımın toplam kar mı yoksa zarar mı ettirdiği kolayca
          bulunur.
        </p>

        <h2 className="text-xl font-semibold mb-3">
          Temettü Hesaplama Nasıl Yapılır?
        </h2>

        <p className="mb-4">
          Temettü hesaplama işlemi, sahip olunan lot sayısının lot başına
          dağıtılan temettü tutarı ile çarpılmasıyla yapılır. Ayrıca hisse
          fiyatına göre temettü verimi de yüzde olarak hesaplanabilir.
        </p>

        <h2 className="text-xl font-semibold mb-3">
          Örnek Hisse ve Temettü Hesaplama
        </h2>

        <p className="mb-4">
          Örneğin 100 lot hisseyi 25 TL’den alıp 30 TL’den sattığınızda lot
          başına 5 TL kazanç oluşur ve toplam kar 500 TL olur. Aynı hissede lot
          başına 2 TL temettü ödenirse toplam temettü getirisi 200 TL olarak
          hesaplanır.
        </p>

        <h2 className="text-xl font-semibold mb-3">
          İlgili Hesaplama Araçları
        </h2>

        <ul className="list-disc ml-5 space-y-1">
          <li>
            <a href="/yuzde-hesaplama" className="text-blue-600 hover:underline">
              Yüzde Hesaplama
            </a>
          </li>
          <li>
            <a href="/faiz-hesaplama" className="text-blue-600 hover:underline">
              Faiz Hesaplama
            </a>
          </li>
          <li>
            <a href="/kar-zarar-hesaplama" className="text-blue-600 hover:underline">
              Kar / Zarar Hesaplama
            </a>
          </li>
        </ul>
      </div>
    </CalculatorLayout>
  )
}