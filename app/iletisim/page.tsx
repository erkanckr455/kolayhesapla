import CalculatorLayout from "../components/CalculatorLayout"

export default function Page() {
  return (
    <CalculatorLayout
      title="İletişim"
      description="Hesap Uzmanı ile iletişime geçin. Soru, öneri ve geri bildirimlerinizi bize iletebilirsiniz."
    >
      <div className="mt-6 text-gray-700 leading-7 space-y-6">

        <p>
          Hesap Uzmanı sitesi ile ilgili tüm soru, öneri ve geri bildirimlerinizi bizimle paylaşabilirsiniz.
          Kullanıcı deneyimini geliştirmek ve daha faydalı hesaplama araçları sunmak için sizden gelen
          yorumları önemsiyoruz.
        </p>

        <p>
          Sitede yer alan hesaplama araçları ile ilgili yaşadığınız herhangi bir sorun veya geliştirme
          öneriniz varsa bizimle iletişime geçebilirsiniz.
        </p>

        <div className="bg-gray-50 border rounded-xl p-6">

          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            İletişim E-posta Adresi
          </h2>

          <p className="mb-3">
            Aşağıdaki e-posta adresi üzerinden bize ulaşabilirsiniz:
          </p>

          <p className="text-lg font-semibold text-blue-600">
            ligundem@gmail.com
          </p>

        </div>

        <h2 className="text-xl font-semibold">Hakkımızda</h2>

        <p>
          Hesap Uzmanı; kredi hesaplama, faiz hesaplama, KDV hesaplama, yüzde hesaplama,
          maaş hesaplama ve daha birçok finansal işlemi kolaylaştırmak amacıyla oluşturulmuş
          ücretsiz bir hesaplama platformudur.
        </p>

        <p>
          Amacımız, kullanıcıların günlük hayatta ihtiyaç duyduğu finansal hesaplamaları hızlı,
          doğru ve pratik bir şekilde yapabilmesini sağlamaktır.
        </p>

        {/* 🔥 İÇ LİNKLER (SEO + ADSENSE İÇİN ÇOK KRİTİK) */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
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