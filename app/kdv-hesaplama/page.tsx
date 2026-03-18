"use client"

import { useState } from "react"
import CalculatorLayout from "../components/CalculatorLayout"

export default function Page() {
  const [sonuc, setSonuc] = useState("")
  const [kdvTutari, setKdvTutari] = useState("")

  function hesapla() {
    const tutar = Number((document.getElementById("tutar") as HTMLInputElement).value)
    const oran = Number((document.getElementById("oran") as HTMLInputElement).value)

    if (!tutar || !oran) {
      setSonuc("Lütfen tüm alanları doldur")
      setKdvTutari("")
      return
    }

    const kdv = tutar * (oran / 100)
    const toplam = tutar + kdv

    setKdvTutari(kdv.toFixed(2) + " TL")
    setSonuc(toplam.toFixed(2) + " TL")
  }

  return (
    <CalculatorLayout
      title="KDV Hesaplama"
      description="Ürün veya hizmet tutarına göre KDV dahil fiyatı kolayca hesaplayın."
    >
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Tutar
          </label>
          <input
            id="tutar"
            type="number"
            placeholder="Örn: 1000"
            className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:bg-white"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            KDV Oranı (%)
          </label>
          <input
            id="oran"
            type="number"
            placeholder="Örn: 20"
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
            {kdvTutari && <p><strong>KDV Tutarı:</strong> {kdvTutari}</p>}
            <p><strong>KDV Dahil Toplam:</strong> {sonuc}</p>
          </div>
        </div>
      )}

      <div className="mt-10 text-gray-700 leading-7">
        <h2 className="text-xl font-semibold mb-3">
          KDV Hesaplama Nasıl Yapılır?
        </h2>

        <p className="mb-4">
          KDV hesaplama işlemi, ürün veya hizmet bedelinin üzerine belirlenen
          Katma Değer Vergisi oranının eklenmesiyle yapılır. Türkiye’de en sık
          kullanılan KDV oranları yüzde 1, yüzde 10 ve yüzde 20’dir. Bu araç ile
          KDV tutarını ve KDV dahil toplam fiyatı hızlıca hesaplayabilirsiniz.
        </p>

        <h2 className="text-xl font-semibold mb-3">
          Örnek KDV Hesaplama
        </h2>

        <p className="mb-4">
          Örneğin 1.000 TL tutarındaki bir ürün için yüzde 20 KDV uygulandığında
          KDV tutarı 200 TL olur. Böylece KDV dahil toplam fiyat 1.200 TL olarak
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
            <a href="/iskonto-hesaplama" className="text-blue-600 hover:underline">
              İskonto Hesaplama
            </a>
          </li>
          <li>
            <a href="/kar-zarar-hesaplama" className="text-blue-600 hover:underline">
              Kar / Zarar Hesaplama
            </a>
          </li>
          <li>
            <a href="/faiz-hesaplama" className="text-blue-600 hover:underline">
              Faiz Hesaplama
            </a>
          </li>
        </ul>
      </div>
    </CalculatorLayout>
  )
}