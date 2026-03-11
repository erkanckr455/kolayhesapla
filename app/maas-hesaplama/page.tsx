"use client"

import { useState } from "react"
import CalculatorLayout from "../components/CalculatorLayout"

export default function MaasHesaplama() {
  const [sonuc, setSonuc] = useState("")

  function hesapla() {
    const brut = Number((document.getElementById("brut") as HTMLInputElement).value)
    const vergi = Number((document.getElementById("vergi") as HTMLSelectElement).value) / 100

    if (!brut || !vergi) {
      setSonuc("Lütfen tüm alanları doldur")
      return
    }

    const sgk = brut * 0.14
    const issizlik = brut * 0.01
    const vergiMatrah = brut - sgk - issizlik
    const gelirVergi = vergiMatrah * vergi
    const damga = brut * 0.00759

    const net = brut - sgk - issizlik - gelirVergi - damga

    setSonuc(net.toFixed(2) + " TL")
  }

  return (
    <CalculatorLayout
      title="Yaklaşık Net Maaş Hesaplama"
      description="Brüt maaşa ve seçilen vergi dilimine göre yaklaşık net maaşı kolayca hesaplayın. SGK, işsizlik primi, gelir vergisi ve damga vergisi dahil net maaş sonucunu görün."
    >
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Brüt Maaş
          </label>

          <input
            id="brut"
            type="number"
            placeholder="Örn: 30000"
            className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:bg-white"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Vergi Dilimi
          </label>

          <select
            id="vergi"
            className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:bg-white"
            defaultValue="15"
          >
            <option value="15">%15</option>
            <option value="20">%20</option>
            <option value="27">%27</option>
            <option value="35">%35</option>
          </select>
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
            <strong>Net Maaş:</strong> {sonuc}
          </p>

          <p className="mt-2 text-sm text-gray-600">
            Bu sonuç seçilen vergi dilimine göre yaklaşık hesaplamadır.
          </p>
        </div>
      )}

      <div className="mt-12 space-y-8 text-gray-700 leading-7">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Net Maaş Hesaplama Nedir?
          </h2>
          <p className="mb-4">
            Net maaş hesaplama, brüt maaş üzerinden SGK primi, işsizlik primi,
            gelir vergisi ve damga vergisi gibi kesintiler düşüldükten sonra
            çalışanın eline geçecek yaklaşık net maaşı bulmak için yapılan işlemdir.
            Özellikle iş başvurularında, maaş pazarlığında ve zam dönemlerinde
            brütten nete maaş hesabı oldukça sık yapılır.
          </p>
          <p>
            Bu araç ile brüt maaşınızı ve vergi diliminizi girerek yaklaşık net
            maaşınızı saniyeler içinde öğrenebilirsiniz.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Net Maaş Nasıl Hesaplanır?
          </h2>
          <p className="mb-4">
            Net maaş hesaplamasında önce brüt maaştan SGK primi ve işsizlik primi
            düşülür. Ardından kalan vergi matrahı üzerinden gelir vergisi hesaplanır.
            Son olarak damga vergisi de düşülerek net maaş bulunur.
          </p>
          <p className="font-semibold text-gray-900 mb-4">
            Net Maaş = Brüt Maaş - SGK Primi - İşsizlik Primi - Gelir Vergisi - Damga Vergisi
          </p>
          <p>
            Bu nedenle aynı brüt maaşta olsanız bile vergi dilimine göre net maaş
            değişebilir.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Örnek Net Maaş Hesaplama
          </h2>

          <div className="space-y-4">
            <p>
              <strong>30.000 TL brüt maaş:</strong> Vergi dilimi yüzde 15 seçildiğinde
              yaklaşık net maaş hesaplanabilir.
            </p>
            <p>
              <strong>40.000 TL brüt maaş:</strong> SGK, işsizlik primi ve vergi
              kesintileri sonrası çalışanın eline geçen tutar bulunur.
            </p>
            <p>
              <strong>50.000 TL brüt maaş:</strong> Vergi dilimi yükseldikçe net maaş
              tutarı farklılaşabilir.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Net Maaş Hesaplama Nerelerde Kullanılır?
          </h2>

          <ul className="list-disc ml-5 space-y-2">
            <li>İş tekliflerinde brüt maaşın net karşılığını öğrenmek</li>
            <li>Maaş pazarlığında gerçek elde kalan tutarı görmek</li>
            <li>Zam sonrası net maaşı karşılaştırmak</li>
            <li>Vergi dilimine göre maaş değişimini anlamak</li>
            <li>Aylık gelir planlaması yapmak</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Sık Sorulan Sorular
          </h2>

          <div className="space-y-5">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Net maaş nasıl hesaplanır?
              </h3>
              <p>
                Brüt maaştan SGK primi, işsizlik primi, gelir vergisi ve damga
                vergisi düşülerek net maaş bulunur.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Brüt maaş ile net maaş arasındaki fark nedir?
              </h3>
              <p>
                Brüt maaş, tüm kesintiler öncesi tutardır. Net maaş ise çalışanın
                eline geçen gerçek ödemedir.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Vergi dilimi net maaşı etkiler mi?
              </h3>
              <p>
                Evet, vergi dilimi yükseldikçe maaştan kesilen gelir vergisi artabilir
                ve net maaş düşebilir.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Bu sonuç kesin net maaş mıdır?
              </h3>
              <p>
                Hayır, bu araç yaklaşık sonuç verir. İşveren uygulamaları, ek ödemeler
                ve yasal istisnalar nedeniyle gerçek maaşta küçük farklar olabilir.
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
              <a href="/yuzde-hesaplama" className="text-blue-600 hover:underline">
                Yüzde Hesaplama
              </a>
            </li>
            <li>
              <a href="/enflasyon-hesaplama" className="text-blue-600 hover:underline">
                Enflasyon Hesaplama
              </a>
            </li>
            <li>
              <a href="/faiz-hesaplama" className="text-blue-600 hover:underline">
                Faiz Hesaplama
              </a>
            </li>
          </ul>
        </section>
      </div>
    </CalculatorLayout>
  )
}