"use client"

import { useState } from "react"

export default function Page() {
  const [sonuc, setSonuc] = useState("")
  const [toplam, setToplam] = useState("")
  const [faizToplami, setFaizToplami] = useState("")

  function hesapla() {
    const kredi = Number((document.getElementById("kredi") as HTMLInputElement).value)
    const faiz = Number((document.getElementById("faiz") as HTMLInputElement).value) / 100 / 12
    const vade = Number((document.getElementById("vade") as HTMLInputElement).value)

    if (!kredi || !faiz || !vade) {
      setSonuc("Lütfen tüm alanları doldur")
      setToplam("")
      setFaizToplami("")
      return
    }

    const odeme = (kredi * faiz) / (1 - Math.pow(1 + faiz, -vade))
    const toplamOdeme = odeme * vade
    const toplamFaiz = toplamOdeme - kredi

    setSonuc(odeme.toFixed(2) + " TL")
    setToplam(toplamOdeme.toFixed(2) + " TL")
    setFaizToplami(toplamFaiz.toFixed(2) + " TL")
  }

  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Kredi Hesaplama
            </h1>
            <p className="text-gray-600 text-lg">
              Kredi tutarı, faiz oranı ve vade bilgisine göre aylık taksiti hesapla.
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Kredi Tutarı
              </label>
              <input
                id="kredi"
                type="number"
                placeholder="Örn: 100000"
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Yıllık Faiz (%)
              </label>
              <input
                id="faiz"
                type="number"
                placeholder="Örn: 3.60"
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Vade (Ay)
              </label>
              <input
                id="vade"
                type="number"
                placeholder="Örn: 12"
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
              <p className="text-lg font-semibold text-blue-900 mb-3">Sonuç</p>
              <div className="space-y-2 text-gray-800">
                <p><strong>Aylık Taksit:</strong> {sonuc}</p>
                {toplam && <p><strong>Toplam Geri Ödeme:</strong> {toplam}</p>}
                {faizToplami && <p><strong>Toplam Faiz:</strong> {faizToplami}</p>}
              </div>
            </div>
          )}

          <div className="mt-10 text-gray-700 leading-7">
            <h2 className="text-xl font-semibold mb-3">
              Kredi Hesaplama Nasıl Yapılır?
            </h2>

            <p className="mb-4">
              Kredi hesaplama işlemi kredi tutarı, faiz oranı ve vade süresi
              kullanılarak yapılır. Bankalar kredi taksitlerini aylık faiz oranına
              göre hesaplar.
            </p>

            <h2 className="text-xl font-semibold mb-3">
              Örnek Kredi Hesaplama
            </h2>

            <p className="mb-4">
              100.000 TL kredi, %3 faiz oranı ve 12 ay vade ile çekildiğinde
              aylık ödeme tutarı hesaplama aracında otomatik olarak gösterilir.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}