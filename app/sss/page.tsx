import CalculatorLayout from "../components/CalculatorLayout"

export default function Page() {
  return (
    <CalculatorLayout
      title="Sık Sorulan Sorular"
      description="Hesap Uzmanı hakkında en sık sorulan sorular ve cevapları"
    >
      <div className="mt-6 text-gray-700 leading-7 space-y-6">

        <h2 className="text-xl font-semibold">Hesap Uzmanı nedir?</h2>
        <p>
          Hesap Uzmanı, kredi, faiz, KDV, maaş ve yüzde hesaplama gibi birçok finansal işlemi hızlı ve doğru şekilde yapmanızı sağlayan ücretsiz bir hesaplama platformudur.
        </p>

        <h2 className="text-xl font-semibold">Hesaplama araçları ücretsiz mi?</h2>
        <p>
          Evet, sitede yer alan tüm hesaplama araçları tamamen ücretsizdir ve herhangi bir üyelik gerektirmez.
        </p>

        <h2 className="text-xl font-semibold">Hesaplama sonuçları doğru mu?</h2>
        <p>
          Hesaplama araçları matematiksel formüllere göre çalışır ve doğru sonuçlar üretir. Ancak resmi işlemler için ilgili kurumların verileri dikkate alınmalıdır.
        </p>

        <h2 className="text-xl font-semibold">Hangi hesaplamaları yapabilirim?</h2>
        <p>
          Kredi hesaplama, faiz hesaplama, KDV hesaplama, yüzde hesaplama, maaş hesaplama, enflasyon hesaplama ve daha birçok finansal işlemi kolayca yapabilirsiniz.
        </p>

        <h2 className="text-xl font-semibold">Siteyi nasıl kullanabilirim?</h2>
        <p>
          Kullanmak istediğiniz hesaplama aracını seçip gerekli bilgileri girmeniz yeterlidir. Sistem otomatik olarak sonucu hesaplayacaktır.
        </p>

        {/* 🔥 SEO + ADSENSE İÇ LİNK */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
            Popüler Hesaplama Araçları
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
              <a href="/kdv-hesaplama" className="text-blue-600 hover:underline">
                KDV Hesaplama
              </a>
            </li>
            <li>
              <a href="/faiz-hesaplama" className="text-blue-600 hover:underline">
                Faiz Hesaplama
              </a>
            </li>
          </ul>
        </div>

      </div>
    </CalculatorLayout>
  )
}