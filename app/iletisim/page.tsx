import CalculatorLayout from "../components/CalculatorLayout"

export default function Page() {
  return (
    <CalculatorLayout
      title="İletişim"
      description="HesapUzmani sitesi ile iletişime geçmek için bu sayfayı kullanabilirsiniz."
    >
      <div className="mt-6 text-gray-700 leading-7 space-y-6">

        <p>
          HesapUzmani sitesi ile iletişime geçmek için bu sayfayı kullanabilirsiniz.
        </p>

        <p>
          HesapUzmani sitesi ile ilgili soru, öneri veya geri bildirimlerinizi bizimle paylaşabilirsiniz.
        </p>

        <div className="bg-gray-50 border rounded-xl p-6">

          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            ligundem@gmail.com
          </h2>

          <p>
            Sorularınız için bize aşağıdaki e-posta adresinden ulaşabilirsiniz:
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-3">
            iletisim@hesapuzmani.site
          </h2>

        </div>

        <h2 className="text-xl font-semibold">Hakkımızda</h2>

        <p>
          HesapUzmani, kredi, faiz, KDV, enflasyon, maaş ve benzeri finansal
          hesaplamaları kolaylaştırmak amacıyla oluşturulmuş ücretsiz bir
          hesaplama platformudur.
        </p>

        <p>
          Amacımız kullanıcıların günlük finansal işlemlerini hızlı ve kolay
          şekilde hesaplayabilmelerini sağlamaktır.
        </p>

      </div>
    </CalculatorLayout>
  )
}