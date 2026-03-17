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

  return (
    <CalculatorLayout
      title="Kira Artış Hesaplama"
      description="Kira artış oranına göre yeni kira tutarını kolayca hesaplayın. TÜFE oranı ile zamlı kira bedelini hızlıca öğrenin."
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

      <div className="mt-12 space-y-8 text-gray-700 leading-7">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Kira Artış Hesaplama Nedir?
          </h2>

          <p className="mb-4">
            Kira artış hesaplama, mevcut kira bedeline belirli bir artış oranı
            uygulanarak yeni kira tutarının bulunmasını sağlayan işlemdir.
            Özellikle konut ve iş yeri kiralarında zam dönemlerinde en çok
            ihtiyaç duyulan hesaplamalardan biridir.
          </p>

          <p>
            Bu araç ile mevcut kira tutarını ve artış oranını girerek zamlı yeni
            kira bedelini saniyeler içinde öğrenebilirsiniz.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Kira Artışı Nasıl Hesaplanır?
          </h2>

          <p className="mb-4">
            Kira artışı hesaplanırken mevcut kira tutarı artış oranı ile çarpılır.
            Bulunan artış miktarı mevcut kiraya eklenerek yeni kira bedeli ortaya çıkar.
          </p>

          <p className="font-semibold text-gray-900 mb-4">
            Yeni Kira = Mevcut Kira + (Mevcut Kira × Artış Oranı / 100)
          </p>

          <p>
            Örneğin mevcut kira 10.000 TL ve artış oranı yüzde 25 ise yeni kira
            tutarı 12.500 TL olur.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Örnek Kira Artış Hesabı
          </h2>

          <div className="space-y-4">
            <p>
              <strong>10.000 TL kira:</strong> Yüzde 25 artış ile yeni kira 12.500 TL olur.
            </p>

            <p>
              <strong>15.000 TL kira:</strong> Yüzde 20 artış ile yeni kira 18.000 TL olur.
            </p>

            <p>
              <strong>20.000 TL kira:</strong> Yüzde 15 artış ile yeni kira 23.000 TL olur.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Kira Artış Hesaplama Nerelerde Kullanılır?
          </h2>

          <ul className="list-disc ml-5 space-y-2">
            <li>Konut kira zammını hesaplamak</li>
            <li>İş yeri kira artış oranını öğrenmek</li>
            <li>TÜFE oranına göre zamlı kira bedelini bulmak</li>
            <li>Ev sahibi ve kiracı arasında yeni kira tutarını görmek</li>
            <li>Kira sözleşmesi yenilenirken güncel bedeli hesaplamak</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Sık Sorulan Sorular
          </h2>

          <div className="space-y-5">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Kira artış hesaplama nasıl yapılır?
              </h3>
              <p>
                Mevcut kira tutarı artış oranı ile çarpılır, çıkan tutar mevcut kiraya eklenir.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Kira artışı yüzde kaç olabilir?
              </h3>
              <p>
                Kira artış oranı sözleşme şartlarına ve yürürlükteki yasal sınırlara göre değişebilir.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                TÜFE oranına göre kira hesaplanabilir mi?
              </h3>
              <p>
                Evet, açıklanan TÜFE oranı artış oranı alanına yazılarak yeni kira tutarı hesaplanabilir.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Bu araç konut ve iş yeri için kullanılabilir mi?
              </h3>
              <p>
                Evet, hem konut hem de iş yeri kira artış hesaplamalarında kullanılabilir.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            İlgili Hesaplama Araçları
          </h2>

          <ul className="list-disc ml-5 space-y-1">
            <li>
              <a href="/enflasyon-hesaplama" className="text-blue-600 hover:underline">
                Enflasyon Hesaplama
              </a>
            </li>
            <li>
              <a href="/yuzde-hesaplama" className="text-blue-600 hover:underline">
                Yüzde Hesaplama
              </a>
            </li>
            <li>
              <a href="/maas-hesaplama" className="text-blue-600 hover:underline">
                Net Maaş Hesaplama
              </a>
            </li>
          </ul>
        </section>
      </div>
    </CalculatorLayout>
  )
}