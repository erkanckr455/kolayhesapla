"use client"

import { useState } from "react"
import CalculatorLayout from "../components/CalculatorLayout"

export default function Page() {
  const [sonuc, setSonuc] = useState("")
  const [artisSonuc, setArtisSonuc] = useState("")
  const [indirimSonuc, setIndirimSonuc] = useState("")

  function hesaplaYuzde() {
    const sayi = Number((document.getElementById("sayi") as HTMLInputElement).value)
    const oran = Number((document.getElementById("oran") as HTMLInputElement).value)

    if (!sayi || !oran) {
      setSonuc("Lütfen tüm alanları doldur")
      return
    }

    const hesap = sayi * (oran / 100)
    setSonuc(hesap.toFixed(2))
  }

  function hesaplaArtis() {
    const tutar = Number((document.getElementById("artisTutar") as HTMLInputElement).value)
    const oran = Number((document.getElementById("artisOran") as HTMLInputElement).value)

    if (!tutar || !oran) {
      setArtisSonuc("Lütfen tüm alanları doldur")
      return
    }

    const yeniTutar = tutar + tutar * (oran / 100)
    setArtisSonuc(yeniTutar.toFixed(2))
  }

  function hesaplaIndirim() {
    const tutar = Number((document.getElementById("indirimTutar") as HTMLInputElement).value)
    const oran = Number((document.getElementById("indirimOran") as HTMLInputElement).value)

    if (!tutar || !oran) {
      setIndirimSonuc("Lütfen tüm alanları doldur")
      return
    }

    const yeniTutar = tutar - tutar * (oran / 100)
    setIndirimSonuc(yeniTutar.toFixed(2))
  }

  return (
    <CalculatorLayout
      title="Yüzde Hesaplama"
      description="Yüzde hesaplama, yüzde artış ve yüzde indirim işlemlerini kolayca yapın. Bir sayının yüzdesini bulabilir, zamlı ve indirimli fiyat hesaplayabilirsiniz."
    >
      <div className="space-y-10">
        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-gray-900">Yüzde Hesaplama</h2>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Sayı
            </label>
            <input
              id="sayi"
              type="number"
              placeholder="Örn: 1000"
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Yüzde Oranı (%)
            </label>
            <input
              id="oran"
              type="number"
              placeholder="Örn: 20"
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:bg-white"
            />
          </div>

          <button
            onClick={hesaplaYuzde}
            className="w-full rounded-xl bg-blue-600 py-3 text-lg font-semibold text-white transition hover:bg-blue-700"
          >
            Hesapla
          </button>

          {sonuc && (
            <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5 text-gray-800">
              <strong>Sonuç:</strong> {sonuc}
            </div>
          )}
        </div>

        <div className="border-t border-gray-200 pt-10 space-y-5">
          <h2 className="text-2xl font-bold text-gray-900">Yüzde Artış Hesaplama</h2>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Tutar
            </label>
            <input
              id="artisTutar"
              type="number"
              placeholder="Örn: 1000"
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Artış Oranı (%)
            </label>
            <input
              id="artisOran"
              type="number"
              placeholder="Örn: 15"
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:bg-white"
            />
          </div>

          <button
            onClick={hesaplaArtis}
            className="w-full rounded-xl bg-green-600 py-3 text-lg font-semibold text-white transition hover:bg-green-700"
          >
            Artışı Hesapla
          </button>

          {artisSonuc && (
            <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-5 text-gray-800">
              <strong>Artışlı Tutar:</strong> {artisSonuc}
            </div>
          )}
        </div>

        <div className="border-t border-gray-200 pt-10 space-y-5">
          <h2 className="text-2xl font-bold text-gray-900">Yüzde İndirim Hesaplama</h2>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Tutar
            </label>
            <input
              id="indirimTutar"
              type="number"
              placeholder="Örn: 1000"
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              İndirim Oranı (%)
            </label>
            <input
              id="indirimOran"
              type="number"
              placeholder="Örn: 25"
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:bg-white"
            />
          </div>

          <button
            onClick={hesaplaIndirim}
            className="w-full rounded-xl bg-red-600 py-3 text-lg font-semibold text-white transition hover:bg-red-700"
          >
            İndirimi Hesapla
          </button>

          {indirimSonuc && (
            <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-gray-800">
              <strong>İndirimli Tutar:</strong> {indirimSonuc}
            </div>
          )}
        </div>
      </div>

      <div className="mt-12 space-y-8 text-gray-700 leading-7">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Yüzde Hesaplama Nedir?
          </h2>
          <p className="mb-4">
            Yüzde hesaplama, bir sayının belirli bir oranını bulmak, iki değer arasındaki
            değişimi görmek ve bir tutara artış ya da indirim uygulamak için kullanılan
            temel matematik işlemlerinden biridir. Günlük hayatta indirim oranı
            hesaplama, zamlı fiyat bulma, maaş artışı hesaplama, kâr marjı çıkarma ve
            sınav başarı oranı öğrenme gibi birçok alanda yüzde hesabı yapılır.
          </p>
          <p>
            Bu sayfadaki araç ile bir sayının yüzdesini bulabilir, yüzde artış
            hesaplayabilir ve yüzde indirimli tutarı saniyeler içinde öğrenebilirsiniz.
            Hesap makinesiyle tek tek işlem yapmak yerine hızlı ve pratik sonuç alabilirsiniz.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Yüzde Nasıl Hesaplanır?
          </h2>
          <p className="mb-4">
            Bir sayının yüzdesini bulmak için sayı ile yüzde oranı çarpılır ve sonuç 100’e
            bölünür. Formül şöyledir:
          </p>
          <p className="mb-4 font-semibold text-gray-900">
            Yüzde Tutarı = Sayı × Oran / 100
          </p>
          <p>
            Örneğin 1000 sayısının yüzde 20’si hesaplanmak istendiğinde 1000 × 20 / 100
            işlemi yapılır ve sonuç 200 olur. Aynı mantıkla bir tutarın yüzde artışı ya
            da yüzde indirimi de kolayca bulunabilir.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Yüzde Artış ve İndirim Hesaplama
          </h2>
          <p className="mb-4">
            Yüzde artış hesaplamasında mevcut tutara belirlenen oran kadar ekleme yapılır.
            Yüzde indirim hesaplamasında ise tutardan belirli orandaki değer düşülür.
            Özellikle mağaza indirimlerinde, kampanyalarda, ürün zamlarında ve maaş
            güncellemelerinde bu hesaplama çok sık kullanılır.
          </p>
          <p>
            Örneğin 1000 TL olan bir ürün yüzde 15 zam alırsa yeni fiyat 1150 TL olur.
            Aynı ürün için yüzde 20 indirim uygulanırsa fiyat 800 TL’ye düşer.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Örnek Yüzde Hesaplamaları
          </h2>
          <div className="space-y-4">
            <p>
              <strong>Bir sayının yüzdesi:</strong> 500 sayısının yüzde 10’u = 50
            </p>
            <p>
              <strong>Yüzde artış:</strong> 800 TL’ye yüzde 25 zam yapılırsa yeni tutar = 1000 TL
            </p>
            <p>
              <strong>Yüzde indirim:</strong> 1200 TL’ye yüzde 30 indirim yapılırsa yeni tutar = 840 TL
            </p>
            <p>
              <strong>Fiyat karşılaştırma:</strong> 400 TL olan bir ürün 520 TL olduysa artış oranı yüzde 30’dur
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Yüzde Hesaplama Nerelerde Kullanılır?
          </h2>
          <p className="mb-4">
            Yüzde hesabı sadece okul matematiğinde değil, günlük yaşamın birçok alanında
            kullanılır. Özellikle alışverişte indirim oranını anlamak, maaş zamlarını
            değerlendirmek, yatırım getirilerini karşılaştırmak ve gider artışlarını
            görmek için yüzde hesaplama büyük kolaylık sağlar.
          </p>
          <ul className="list-disc ml-5 space-y-2">
            <li>İndirimli ürün fiyatı hesaplama</li>
            <li>Zamlı fiyat ve yeni tutar bulma</li>
            <li>Maaş artışı ve ücret karşılaştırma</li>
            <li>Kâr - zarar oranı çıkarma</li>
            <li>Sınav başarı yüzdesi hesaplama</li>
            <li>Enflasyon ve fiyat artışlarını değerlendirme</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Sık Sorulan Sorular
          </h2>

          <div className="space-y-5">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Yüzde hesaplama nasıl yapılır?
              </h3>
              <p>
                Bir sayının yüzdesini bulmak için sayı, yüzde oranı ile çarpılır ve 100’e bölünür.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Yüzde artış nasıl hesaplanır?
              </h3>
              <p>
                Önce artış miktarı bulunur, ardından bu tutar ana değere eklenir.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Yüzde indirim nasıl hesaplanır?
              </h3>
              <p>
                İndirim oranına göre düşecek tutar bulunur ve ana fiyattan çıkarılır.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Bu araç hangi işlemler için kullanılabilir?
              </h3>
              <p>
                Bir sayının yüzdesini bulma, zamlı fiyat hesaplama, indirimli fiyat
                bulma ve temel oran işlemleri için kullanılabilir.
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
              <a href="/kdv-hesaplama" className="text-blue-600 hover:underline">
                KDV Hesaplama
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
            <li>
              <a href="/enflasyon-hesaplama" className="text-blue-600 hover:underline">
                Enflasyon Hesaplama
              </a>
            </li>
            <li>
              <a href="/net-maas-hesaplama" className="text-blue-600 hover:underline">
                Net Maaş Hesaplama
              </a>
            </li>
          </ul>
        </section>
      </div>
    </CalculatorLayout>
  )
}